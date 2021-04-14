import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: Story<Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    loading?: boolean | undefined;
    testId?: string | undefined;
    variant?: import("./types").ButtonVariants | undefined;
} & {
    children?: React.ReactNode;
}>;
