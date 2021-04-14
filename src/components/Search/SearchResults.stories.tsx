import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Story, Meta} from '@storybook/react/types-6-0';
import {SearchResults, SearchResultsProps} from './SearchResults';

export default {
  component: SearchResults,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Search/SearchResults',
} as Meta;

const Template: Story<SearchResultsProps> = (args) => (
  <MemoryRouter>
    <div style={{maxWidth: 400}}>
      <SearchResults {...args} />
    </div>
  </MemoryRouter>
);

const NoResultsTemplate: Story<SearchResultsProps> = (args) => (
  <MemoryRouter>
    <div style={{maxWidth: 400}}>
      <SearchResults {...args} results={[]} />
    </div>
  </MemoryRouter>
);

export const Default = Template.bind({});
export const NoResults = NoResultsTemplate.bind({});

Default.args = {
  searchText: 'wedding',
};

NoResults.args = {
  searchText: 'wedding',
};
