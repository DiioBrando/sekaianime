import {$sekaianime_api} from "@/shared/lib/api";

export const logout = () => $sekaianime_api.post('/sign-out');