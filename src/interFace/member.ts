export interface IMember {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface IMemberId extends IMember {
  member_id: number;
}
