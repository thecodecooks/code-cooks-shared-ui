import { PropsWithChildren, ReactElement } from 'react';
export declare type LabelProps = {
    hasErrors?: boolean;
    name: string;
    required?: boolean;
};
export declare function Label({ children, name, required, hasErrors, }: PropsWithChildren<LabelProps>): ReactElement;
