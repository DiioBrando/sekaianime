'use client';
import {SignInFormValues, SignUpFormValues} from "@/features/auth/lib/actions";
import {useMutation} from "@tanstack/react-query";
import {postSignIn} from "@/features/auth/api/sign-in/postSignIn";
import {postSignUp} from "@/features/auth/api/sign-up/postSignUp";
import {useToast} from "@/shared/stores/toast";

export const useConfirm = () => {
    const mutation = useMutation;
    const {toast} = useToast();
    const signInMutation = mutation({
        mutationFn: (data: SignInFormValues) => postSignIn(data),
        onSuccess: (data) => {
            toast({
                title: "success",
                description: `success sign-in`,
            });
            console.log(data);
        },
        onError: (error) => {
            toast({
                title: "error",
                description: `${error.message}`,
            });
        }
    });
    const signUpMutation = mutation({
        mutationFn: (data:SignUpFormValues) => postSignUp(data),
        onSuccess: (data) => {
            toast({
                title: "success",
                description: "success sign-up",
            });
        },
        onError: (error) => {
            toast({
                title: "error",
                description: `${error.message}`,
            });
        }
    });
    return {
        signInMutation,
        signUpMutation,
    }
}