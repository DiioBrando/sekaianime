import {create} from "zustand";
import {IAuthUser} from "@/shared/entities/user/model/IUser";
import {refresh} from "@/shared/entities/user/api/refresh";
import {logout} from "@/shared/entities/user/api/logout";
import {devtools} from "zustand/middleware";

export interface IUserStoreProps {
    user: IAuthUser | null;
    setUser: (data: IAuthUser) => void;
    isAuthenticated: boolean;
    clearUser: () => void;
    refreshUserToken: () => Promise<void>;
}

export const useUser = create<IUserStoreProps>()(devtools((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (data) => {
        set({ user: data, isAuthenticated: true });
    },
    clearUser: async () => {
        await logout();
        localStorage.removeItem('accessToken');
        set({ user: null, isAuthenticated: false });
    },
    refreshUserToken: async () => {
        const data = await refresh();
        localStorage.setItem('accessToken', data?.data.accessToken);
        set({ user: data.data.user, isAuthenticated: true });
    },
})),
);