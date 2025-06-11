import {$sekaianime_api} from "@/shared/lib/api";
import {IAuthResponse} from "@/shared/entities/IUser";

export const refresh = () => $sekaianime_api.get<IAuthResponse>('/refresh');