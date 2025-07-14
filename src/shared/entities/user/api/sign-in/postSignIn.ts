import {$sekaianime_api} from "@/shared/lib/api";
import {SignInFormValues} from "@/shared/entities/user/lib/actions";

export const postSignIn = (data: SignInFormValues) => $sekaianime_api.post('/sign-in', data);
