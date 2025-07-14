import {create} from 'zustand';
import {ReactNode} from "react";
import {ToastActionElement, ToastProps} from "@/shared/components/ui/toast";
import {nanoid} from "nanoid";

type Toaster = ToastProps & {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
}
type Toast = Omit<Toaster, "id">;

interface IToaster {
    toasts: Toaster[];
    toast: (toast: Toast) => void;
    destroy: (id: string) => void;

}

export const useToast = create<IToaster>((set) => ({
    toasts: [],
    toast: (toast) => {
        set((state) => {
            const _toast = {id: nanoid(), ...toast};
            return { toasts: [...state.toasts, _toast]}
        });
    },
    destroy: (id) => {
        set((state) => ({ toasts: state.toasts.filter((todo) => todo.id !== id) }));
    }
}));