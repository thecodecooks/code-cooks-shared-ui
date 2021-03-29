import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextField, TextFieldProps } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Please provide your name",
  placeholder: "e.g Martin Virando",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  ...Default.args,
  errors: ["You are required to accept our terms", "Another error!"],
};
