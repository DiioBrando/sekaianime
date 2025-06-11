export interface IAuthUser {
    id: string;
    login: string;
    email: string;
    isActivated: boolean;
    roles: string[];
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IAuthUser;
}