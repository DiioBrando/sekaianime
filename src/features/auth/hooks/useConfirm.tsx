'use client';
import {SignInFormValues, SignUpFormValues} from "@/shared/entities/user/lib/actions";
import {useMutation} from "@tanstack/react-query";
import {postSignIn} from "@/shared/entities/user/api/sign-in/postSignIn";
import {postSignUp} from "@/shared/entities/user/api/sign-up/postSignUp";
import {useToast} from "@/shared/stores/toast";
import {useRouter, useSearchParams} from "next/navigation";
import {useUser} from "@/shared/stores/user";

export const useConfirm = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const callbackUrl = searchParam.get('callbackUrl') || '/';
    const {toast} = useToast();
    const {setUser} = useUser();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleError = (error: any, title: string, description?: string) => {
        toast({
            title: title,
            description: description + ` ${error.message}`,
        });
        console.error(error.message);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSuccess = (data: any, title: string, description?: string) => {
        toast({
            title: title,
            description: description,
        });
        setUser(data.data.user);
        localStorage.setItem('accessToken', data.data.accessToken);
        router.push(callbackUrl);
    }

    const signInMutation = useMutation({
        mutationFn: (data: SignInFormValues) => postSignIn(data),
        onSuccess: (data) => handleSuccess(data, 'success', 'sign-in'),
        onError: (error) => handleError(error, 'error'),
    });

    const signUpMutation = useMutation({
        mutationFn: (data: SignUpFormValues) => postSignUp(data),
        onSuccess: (data) => handleSuccess(data, 'success', 'sign-up'),
        onError: (error) => handleError(error, 'error'),
    });

    return {
        signInMutation,
        signUpMutation
    }
}