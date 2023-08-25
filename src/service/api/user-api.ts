// Types
import type { I_Response } from "~/types/api";
import type { I_User } from "~/types/user";

// Utils
import _fetch from "~/service/fetch";

export const API_Login = (data: {
  username: string;
  password: string;
}): Promise<I_Response<I_User>> => _fetch.post("/auth/login/", data);

export const API_Register = (data: {
  username: string;
  password: string;
}): Promise<I_Response<I_User>> => _fetch.post("/user/", data);
