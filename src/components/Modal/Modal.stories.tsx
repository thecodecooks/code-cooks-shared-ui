import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Modal, ModalProps} from '.';

export default {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <MemoryRouter>
    <Modal {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
