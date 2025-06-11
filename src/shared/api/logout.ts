import {$sekaianime_api} from "@/shared/api/api";

export const logout = () => $sekaianime_api.post('/sign-out');