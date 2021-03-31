import { PropsWithChildren, ReactElement } from 'react';
export declare type ContainerProps = PropsWithChildren<{
    className?: string;
}>;
export default function Container({ children, className, }: ContainerProps): ReactElement;
