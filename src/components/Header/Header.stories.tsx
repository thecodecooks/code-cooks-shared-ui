import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Header, HeaderProps} from '.';

export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
export const LoggedIn = Template.bind({});

Default.args = {
  logo: <div>Logo</div>,
};

LoggedIn.args = {
  // isLoggedIn: true,
  // onLoginClick: action('Login clicked'),
  // profilePicture:
  //   'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/6/d4/6d4740e7-fdb7-5177-8716-ee705db1ee02/5c63b5f46f412.image.jpg',
};
