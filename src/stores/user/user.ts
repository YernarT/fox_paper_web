// 大菠萝
import { defineStore } from "pinia";

// Utils
import _ from "lodash";

export interface userStateProperties {
  username: string;
  createTime: string;
  token: string;
}

export const defaultUserState: userStateProperties = {
  username: "",
  createTime: "",
  token: "",
};

export const useUser = defineStore("user", {
  state() {
    return defaultUserState;
  },

  actions: {
    initUserFromLocal() {
      const user = localStorage.get(
        "user",
        defaultUserState
      ) as userStateProperties;

      if (!_.isEqual(user, defaultUserState)) {
        this.$state = user;
      }
    },

    logout() {
      localStorage.set("user", defaultUserState);
      this.$state = defaultUserState;
    },
  },

  getters: {
    isAuthenticated({ token }) {
      return token !== "";
    },
  },
});
