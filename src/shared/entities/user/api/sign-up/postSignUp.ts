import {$sekaianime_api} from "@/shared/lib/api";

export const postSignUp = (data) => $sekaianime_api.post('/sign-up', data);