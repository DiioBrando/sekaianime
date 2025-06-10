import {$sekaianime_api} from "@/shared/lib/api";

export const postSignIn = (data) => $sekaianime_api.post('/sign-in', data);
