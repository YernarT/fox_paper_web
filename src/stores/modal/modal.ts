import { defineStore } from "pinia";

type T_ModalTypes = "Login" | "Register" | "ForgetPassword";

export const useGlobalModal = defineStore("globalModal", {
  state: () => {
    return {
      authModal: {
        open: false,
        modalType: "Register" as T_ModalTypes,
      },
    };
  },
});
