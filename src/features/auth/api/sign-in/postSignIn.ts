import {$sekaianime_api} from "@/shared/api/api";

export const postSignIn = (data) => $sekaianime_api.post('/sign-in', data);
