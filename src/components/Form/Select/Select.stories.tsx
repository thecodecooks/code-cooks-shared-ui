import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select, SelectProps, SelectOption } from '.';

const OPTIONS: SelectOption[] = [
  {
    name: 'Martin Virando',
    value: 'Martin Virando',
  },
  {
    name: 'Michael Snow',
    value: 'Michael Snow',
  },
];

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <Select {...args} options={OPTIONS} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Who works for The Code Cooks?',
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  ...Default.args,
  errors: ['This is an error'],
};
