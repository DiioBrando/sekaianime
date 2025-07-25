import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/shared/components/ui/dialog";
import type {DialogProps} from "@radix-ui/react-dialog";
import {CSSProperties, ReactNode} from "react";
import {useModalStore} from "@/shared/stores/modal";
import {VisuallyHidden} from "@radix-ui/themes/components/visually-hidden";
import {cn} from "@/shared/lib/utils";
import {useWindowDimensions} from "@/shared/lib/media-query";

export interface ModalProps extends DialogProps {
    modalId: string;
    children: ReactNode;
    title?: string;
    description?: string;
    visuallyHidden?: string; // for screen reader
    className?: string;
    showCloseButton?: boolean;
    style?: CSSProperties;
}

export const Modal = ({modalId, children, title, description, visuallyHidden, className, showCloseButton = false, style, ...props}: ModalProps) => {
    const {currentModalId, clearCurrentModal} = useModalStore();

    const _onOpenChange = (open: boolean) => {
        if (!open) clearCurrentModal();
    };
    const {width, height} = useWindowDimensions();

    return (
        <Dialog open={currentModalId === modalId} onOpenChange={_onOpenChange} modal {...props}>
            <DialogContent showCloseButton={showCloseButton} className={cn('p-4', className)} style={{...style, maxWidth: Math.floor(width - 30), maxHeight: Math.floor(height - 150)}}>
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