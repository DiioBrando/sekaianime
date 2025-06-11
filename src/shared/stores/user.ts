import {create} from "zustand";
import {IAuthUser} from "@/shared/entities/IUser";

export interface IUserStoreProps {
    user: IAuthUser | null;
    setUser: (data: IAuthUser) => void;
    isAuthenticated: boolean;
    clearUser: () => void;
    refreshUserToken: () => Promise<void>;
}

export const useUser = create<IUserStoreProps>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (data) => {
        set({ user: data, isAuthenticated: true });
    },
    clearUser: () => {
        set({ user: null, isAuthenticated: false });
    },
    refreshUserToken: () => {

    },
}),
);