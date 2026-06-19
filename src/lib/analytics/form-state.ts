import { LEAD_FORM_TYPE, RUDDER_EVENTS } from "@/lib/analytics/events";
import { getBaseProperties } from "@/lib/analytics/context";
import { trackEvent } from "@/lib/analytics/rudder";

export type LeadFormData = {
  fullName?: string;
  address?: string;
  sellReason?: string;
  phone?: string;
  email?: string;
  sourcePage?: string;
};

type FormSession = {
  startedAt: number;
  submitted: boolean;
  data: LeadFormData;
};

const formSessions = new Map<string, FormSession>();
let abandonListenerAttached = false;

function getSession(formId: string): FormSession | undefined {
  return formSessions.get(formId);
}

export function markFormStarted(formId: string, firstFieldName: string): void {
  if (formSessions.has(formId)) return;

  formSessions.set(formId, {
    startedAt: Date.now(),
    submitted: false,
    data: {},
  });

  trackEvent(
    RUDDER_EVENTS.FORM_STARTED,
    getBaseProperties({
      form_id: formId,
      form_type: LEAD_FORM_TYPE,
      first_field_name: firstFieldName,
      time_to_start: Math.round((Date.now() - (window.__rudderPageLoadTime ?? Date.now())) / 1000),
    }),
  );

  attachAbandonListener();
}

export function markFormFieldCompleted(
  formId: string,
  fieldName: string,
  fieldType: string,
  value: string,
): void {
  const session = formSessions.get(formId);
  if (session) {
    session.data[fieldName as keyof LeadFormData] = value;
  }

  trackEvent(
    RUDDER_EVENTS.FORM_FIELD_COMPLETED,
    getBaseProperties({
      form_id: formId,
      form_type: LEAD_FORM_TYPE,
      field_name: fieldName,
      field_type: fieldType,
    }),
  );
}

export function trackFormValidationError(
  formId: string,
  errorFields: string[],
): void {
  trackEvent(
    RUDDER_EVENTS.FORM_VALIDATION_ERROR,
    getBaseProperties({
      form_id: formId,
      form_type: LEAD_FORM_TYPE,
      error_count: errorFields.length,
      error_fields: errorFields,
    }),
  );
}

export function trackFormSubmitted(formId: string, formData: LeadFormData): void {
  const session = getSession(formId);
  const timeToComplete = session
    ? Math.round((Date.now() - session.startedAt) / 1000)
    : 0;

  if (session) {
    session.submitted = true;
  }

  trackEvent(
    RUDDER_EVENTS.FORM_SUBMITTED,
    getBaseProperties({
      form_id: formId,
      form_type: LEAD_FORM_TYPE,
      form_data: formData,
      time_to_complete: timeToComplete,
      fields_filled: Object.keys(formData).filter((key) => {
        const value = formData[key as keyof LeadFormData];
        return value !== undefined && String(value).trim() !== "";
      }).length,
    }),
  );

  sessionStorage.setItem("rudder_converted", "true");
}

export function updateFormFieldData(formId: string, fieldName: string, value: string): void {
  const session = formSessions.get(formId);
  if (!session) return;
  session.data[fieldName as keyof LeadFormData] = value;
}

function trackAbandonedForms(): void {
  formSessions.forEach((session, formId) => {
    if (session.submitted) return;

    const abandonedData = { ...session.data };
    const fieldsFilled = Object.keys(abandonedData).filter((key) => {
      const value = abandonedData[key as keyof LeadFormData];
      return value !== undefined && String(value).trim() !== "";
    }).length;

    if (fieldsFilled === 0) return;

    trackEvent(
      RUDDER_EVENTS.FORM_ABANDONED,
      getBaseProperties({
        form_id: formId,
        form_type: LEAD_FORM_TYPE,
        abandoned_data: abandonedData,
        time_on_form: Math.round((Date.now() - session.startedAt) / 1000),
        fields_filled: fieldsFilled,
      }),
    );
  });
}

function attachAbandonListener(): void {
  if (abandonListenerAttached || typeof window === "undefined") return;
  abandonListenerAttached = true;

  window.addEventListener("pagehide", trackAbandonedForms);
}

declare global {
  interface Window {
    __rudderPageLoadTime?: number;
  }
}
