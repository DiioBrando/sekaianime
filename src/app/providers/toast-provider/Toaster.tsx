"use client";

import {ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose} from "@/shared/components/ui/toast";
import {useToast} from "@/shared/stores/toast";

export function Toaster() {
    const {toasts} = useToast();
    return (
        <ToastProvider>
            {toasts.map(({id, title, description, action, ...props}) => (
                <Toast key={id} {...props}>
                    <div className={'grid gap-1'}>
                        {title && <ToastTitle>{title}</ToastTitle>}
                        {description && <ToastDescription>{description}</ToastDescription>}
                    </div>
                    {action}
                    <ToastClose/>
                </Toast>
            ))}
            <ToastViewport/>
        </ToastProvider>
    );
}