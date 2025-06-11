import {$sekaianime_api} from "@/shared/api/api";

export const postSignUp = (data) => $sekaianime_api.post('/sign-up', data);