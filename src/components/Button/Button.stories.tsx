import React, {ComponentProps} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Button} from './Button';

export default {
  title: 'Components/Button/Default',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Test',
  disabled: false,
  loading: false,
};
