export interface I_UserMe {
  id: number;
  role: 1 | 2;
  token: string;
  email: string;
  phone: string;
  gender: "Male" | "Female" | "Other" | "Prefer not to say";
  birthday: string;
  biography: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
}

export interface I_User {
  id: number;
  role: 1 | 2;
  email: string;
  phone: string;
  gender: "Male" | "Female" | "Other" | "Prefer not to say";
  birthday: string;
  biography: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
}
