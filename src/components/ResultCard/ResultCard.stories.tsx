import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Story, Meta} from '@storybook/react/types-6-0';
import {ResultCard, ResultCardProps} from '.';

export default {
  component: ResultCard,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/ResultCard',
} as Meta;

const Template: Story<ResultCardProps> = (args) => (
  <MemoryRouter>
    <ResultCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  subTitle: 'Cardiff, UK',
  topContent: <div>Top Content</div>,
  title: 'Martin Virando',
};
