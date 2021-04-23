import { PropsWithChildren, ReactElement } from 'react';
export declare type ModalProps = PropsWithChildren<{
    className?: string;
    closeModal: VoidFunction;
    contentClassName?: string;
    error: string;
    hideCloseButton?: boolean;
    loading?: boolean;
    onClose?: VoidFunction;
    open?: boolean;
}>;
export declare function Modal({ children, className, closeModal, contentClassName, error, hideCloseButton, loading, onClose, open, }: ModalProps): ReactElement;
