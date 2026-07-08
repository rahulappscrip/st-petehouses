export type LeadFormInput = {
  fullName: string;
  address: string;
  sellReason: string;
  phone: string;
  phoneCountryCode: string;
  email: string;
};

export type HouseOfAppsCustomField =
  | {
      field_id: string;
      sub_fields: Array<{
        field_id: string;
        value: string;
      }>;
    }
  | {
      instance_id: string;
      field_id: string;
      value: boolean;
    };

export type HouseOfAppsLeadPayload = {
  lead: {
    name: string;
    stage_id: string;
    lead_source: string;
    custom_fields?: HouseOfAppsCustomField[];
  };
  contact: {
    email: string;
    portal_access: boolean;
    first_name: string;
    last_name: string;
    phones: Array<{
      phone_number: string;
      phone_isd_code: string;
      label: string;
      is_primary: boolean;
    }>;
    addresses: Array<{
      address_line1: string;
      is_primary: boolean;
    }>;
  };
};
