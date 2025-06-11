export interface IAuthUser {
    id: string;
    login: string;
    email: string;
    isActivated: boolean;
    roles: string[];
}