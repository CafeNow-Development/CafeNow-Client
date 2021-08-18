import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CafeStatus } from "./CafeStatus";

export default {
  title: "CafeNow/CafeStatus",
  component: CafeStatus,
} as ComponentMeta<typeof CafeStatus>;

const Template: ComponentStory<typeof CafeStatus> = args => <CafeStatus {...args} />;

export const Open = Template.bind({});
Open.args = {
  status: "open",
};

export const Close = Template.bind({});
Close.args = {
  status: "close",
};

export const Setting = Template.bind({});
Setting.args = {
  status: "setting",
};
