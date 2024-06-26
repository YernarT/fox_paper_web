// Types
import type { I_UserMe } from "~/types/user";

// 大菠萝
import { defineStore } from "pinia";

// Utils
import { localStorage } from "~/utils/localStorage";

export const defaultUserState: I_UserMe = {
  id: 0,
  role: 1,
  token: "",
  email: "",
  phone: "",
  gender: "Prefer not to say",
  birthday: "",
  biography: "",
  firstname: "",
  lastname: "",
  createdAt: "",
  updatedAt: "",
};

export const useUserStore = defineStore("userStore", {
  state: (): I_UserMe => {
    return defaultUserState;
  },

  actions: {
    initUserFromLocal() {
      const user = localStorage.get<I_UserMe, I_UserMe>(
        "user",
        defaultUserState
      );
      this.$state = user;
    },

    logout() {
      localStorage.remove("user");
      this.$state = defaultUserState;
    },
  },

  getters: {
    isAuthenticated({ token }) {
      return token !== "";
    },
  },
});
