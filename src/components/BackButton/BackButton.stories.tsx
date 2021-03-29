import React, {ComponentProps} from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Story, Meta} from '@storybook/react/types-6-0';
import {BackButton} from '.';

export default {
  title: 'Components/Back Button',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ComponentProps<typeof BackButton>> = (args) => (
  <MemoryRouter>
    <BackButton {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  to: '/',
};
