'use client';
import {
    Form,
    FormMessage,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/shared/components/ui/form";
import {Button} from "@/shared/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignUpFormSchema, SignUpFormValues} from "@/shared/entities/user/lib/actions";
import {Input} from "@/shared/components/ui/input";
import Link from "next/link";
import {Checkbox} from "@/shared/components/ui/checkbox";
import {useConfirm} from "@/features/auth/hooks/useConfirm";

export const SignUpForm = () => {
    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            login: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreements: false,
        },
    });
    const {signUpMutation} = useConfirm();
    const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
        signUpMutation.mutate(data)
        form.reset();
    }
    const textSize = 'text-2xl sm:text-2xl md:text-2xl lg:text-lg';

    return (
        <div className={'grid items-center justify-items-center min-h-screen p-2'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={'grid gap-3 w-full max-w-[500px] p-7 bg-slate-900 rounded-md'}>
                    <div className={'uppercase lg:text-xl ' + textSize}>sign up</div>
                    {/* login */}
                    <FormField
                        control={form.control}
                        name={'login'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'first-letter:uppercase ' + textSize}>login</FormLabel>
                                <FormControl>
                                    <Input className={'h-[50px] ' + textSize} type={'text'}
                                           placeholder={'login'} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* name */}
                    <FormField
                        control={form.control}
                        name={'name'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'first-letter:uppercase ' + textSize}>name</FormLabel>
                                <FormControl>
                                    <Input className={'h-[50px] ' + textSize} type={"text"}
                                           placeholder={'name'} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* email */}
                    <FormField
                        control={form.control}
                        name={'email'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'first-letter:uppercase ' + textSize}>email</FormLabel>
                                <FormControl>
                                    <Input className={'h-[50px] ' + textSize} type={'email'}
                                           placeholder={'email'} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* password */}
                    <FormField
                        control={form.control}
                        name={'password'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'first-letter:uppercase ' + textSize}>password</FormLabel>
                                <FormControl>
                                    <Input className={'h-[50px] ' + textSize} type={'password'}
                                           placeholder={'password'} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* confirm password */}
                    <FormField
                        control={form.control}
                        name={'confirmPassword'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'first-letter:uppercase ' + textSize}>confirm password</FormLabel>
                                <FormControl>
                                    <Input className={'h-[50px] ' + textSize} type={'password'}
                                           placeholder={'confirm password'} {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* privacy & terms */}
                    <FormField
                        control={form.control}
                        name={'agreements'}
                        render={({field}) => (
                            <FormItem className={'flex items-center'}>
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} {...field}/>
                                </FormControl>
                                <FormLabel className={'cursor-pointer capitalize ' + textSize}>
                                    <Link href={'/privacy'} className={'underline'}>privacy & terms</Link>
                                </FormLabel>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type={"submit"} className={'cursor-pointer h-[40px] ' + textSize} disabled={signUpMutation.isPending}>{signUpMutation.isPending ? "submitting..." : "sign-up"}</Button>
                    <div className={'grid grid-flow-col-1 justify-items-center gap-2'}>
                        <Link className={'first-letter:uppercase text-md underline underline-offset-8'}
                              href={'/sign-in'}>sign-in</Link>
                        <Link className={'first-letter:uppercase text-md underline underline-offset-8'}
                              href={'/forgot'}>forgot password</Link>
                    </div>
                    <div className={'flex items-center'}>
                        <hr className={'w-full border bg-slate-800'}/>
                        <div className={'text-sm uppercase mx-4'}>or</div>
                        <hr className={'w-full border bg-slate-800'}/>
                    </div>
                    <div className={'grid grid-flow-col-1 justify-items-center gap-2'}>
                        more sign-up soon...
                    </div>
                </form>
            </Form>
        </div>
    );
}