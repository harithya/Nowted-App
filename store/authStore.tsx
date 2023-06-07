import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  data: {
    id: string;
    name: string;
  };
  isLogin: boolean;
  login: (id: string, name: string) => void;
}
const authStore = persist<AuthStore>(
  (set) => ({
    data: {
      id: "",
      name: "",
    },
    isLogin: false,
    login: (id, name) => {
      set((state) => ({
        ...state,
        data: {
          id,
          name,
        },
        isLogin: true,
      }));
    },
  }),
  {
    name: "auth-state",
  }
);
export const useAuthStore = create(authStore);
