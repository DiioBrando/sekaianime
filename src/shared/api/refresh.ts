import {$sekaianime_api} from "@/shared/api/api";
import {IAuthResponse} from "@/shared/entities/user/model/IUser";

export const refresh = () => $sekaianime_api.get<IAuthResponse>('/refresh');