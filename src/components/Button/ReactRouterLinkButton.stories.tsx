import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {
  ReactRouterLinkButton,
  ReactRouterLinkButtonProps,
} from './ReactRouterLinkButton';
import {MemoryRouter} from 'react-router';

export default {
  title: 'Components/Button/ReactRouterLinkButton',
  component: ReactRouterLinkButton,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ReactRouterLinkButtonProps> = (args) => (
  <MemoryRouter>
    <ReactRouterLinkButton {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Test',
  to: '/',
};
