import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CheckBox } from ".";

export default {
  title: "Components/Form/Checkbox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<ComponentProps<typeof CheckBox>> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Do you accept these terms?",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  label: "Do you accept these terms?",
  errors: ["You are required to accept our terms", "Another error!"],
};
