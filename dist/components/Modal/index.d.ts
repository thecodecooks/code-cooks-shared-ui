import { PropsWithChildren, ReactElement } from 'react';
export declare type ModalProps = PropsWithChildren<{
    className?: string;
    closeModal: VoidFunction;
    contentClassName?: string;
    error: string;
    hideCloseButton?: boolean;
    open?: boolean;
}>;
export declare function Modal({ children, className, closeModal, contentClassName, error, hideCloseButton, open, }: ModalProps): ReactElement;
