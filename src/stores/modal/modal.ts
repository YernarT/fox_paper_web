import { defineStore } from "pinia";

export const useGlobalModal = defineStore("globalModal", {
  state() {
    return {
      authModal: {
        open: false,
      },
    };
  },
});
