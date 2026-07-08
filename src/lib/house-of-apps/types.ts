export type LeadFormInput = {
  fullName: string;
  address: string;
  sellReason: string;
  phone: string;
  phoneCountryCode: string;
  email: string;
};

export type HouseOfAppsLeadSubField = {
  field_id: string;
  sub_fields: Array<{
    field_id: string;
    value: string;
  }>;
};

export type HouseOfAppsRootCustomField = {
  instance_id: string;
  field_id: string;
  value: boolean;
};

export type HouseOfAppsLeadPayload = {
  lead: {
    name: string;
    stage_id: string;
    lead_source: string;
    custom_fields?: HouseOfAppsLeadSubField[];
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
  custom_fields: HouseOfAppsRootCustomField[];
};
