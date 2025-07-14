import {$sekaianime_api} from "@/shared/lib/api";
import {SignUpFormValues} from "@/shared/entities/user/lib/actions";

export const postSignUp = (data: SignUpFormValues) => $sekaianime_api.post('/sign-up', data);