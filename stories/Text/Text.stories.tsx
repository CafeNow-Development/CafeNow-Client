import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Text } from "./Text";

export default {
  title: "CafeNow/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  weight: "normal",
  label: "텍스트",
};

export const Middle = Template.bind({});
Middle.args = {
  size: 12,
  weight: "normal",
  label: "텍스트",
};

export const MiddleBold = Template.bind({});
MiddleBold.args = {
  size: 12,
  weight: "bold",
  label: "텍스트",
};

export const Small = Template.bind({});
Small.args = {
  size: 9,
  weight: "normal",
  label: "텍스트",
};

export const Title = Template.bind({});
Title.args = {
  size: 16,
  weight: "bold",
  label: "텍스트",
};

export const Option = Template.bind({});
Option.args = {
  size: 10,
  weight: "lighter",
  color: "#838383",
  label: "텍스트",
};

export const Role = Template.bind({});
Role.args = {
  size: 11,
  weight: "normal",
  color: "#838383",
  label: "텍스트",
};

export const MainTitle = Template.bind({});
MainTitle.args = {
  isMain: true,
  size: 26,
  weight: "bold",
  label: "텍스트",
};
