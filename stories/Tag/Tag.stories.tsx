import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Tag } from "./Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const DefaultTag = Template.bind({});
//aa
