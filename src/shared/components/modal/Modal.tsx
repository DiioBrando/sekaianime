import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/shared/components/ui/dialog";
import type {DialogProps} from "@radix-ui/react-dialog";
import type {ReactNode} from "react";
import {useModalStore} from "@/shared/stores/modal";
import {VisuallyHidden} from "@radix-ui/themes/components/visually-hidden";
import {cn} from "@/shared/lib/utils";

export interface ModalProps extends DialogProps {
    modalId: string;
    children: ReactNode;
    title?: string;
    description?: string;
    visuallyHidden?: string; // for screen reader
    className?: string;
}

export const Modal = ({modalId, children, title, description, visuallyHidden, className, ...props}: ModalProps) => {
    const {currentModalId, clearCurrentModal} = useModalStore();

    const _onOpenChange = (open: boolean) => {
        !open && clearCurrentModal();
    };

    return (
        <Dialog open={currentModalId === modalId} onOpenChange={_onOpenChange} modal {...props}>
            <DialogContent showCloseButton={false} className={cn('p-4', className)}>
                {
                    (title || description) ?
                        <DialogHeader>
                            {title && <DialogTitle>{title}</DialogTitle>}
                            {description && <DialogDescription>{description}</DialogDescription>}
                        </DialogHeader> :
                        <VisuallyHidden>
                            <DialogTitle>{visuallyHidden}</DialogTitle>
                        </VisuallyHidden>
                }
                {children}
            </DialogContent>
        </Dialog>
    );
};