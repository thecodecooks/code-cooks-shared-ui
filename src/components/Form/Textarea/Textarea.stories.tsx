import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Textarea, TextareaProps } from ".";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Who works for The Code Cooks?",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  ...Default.args,
  errors: ["This is an error"],
};
