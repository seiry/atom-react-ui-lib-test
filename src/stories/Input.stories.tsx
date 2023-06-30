import { Meta, StoryFn } from '@storybook/react';
import { Combination } from '../Input';

export default {
  title: 'Input',
  component: Combination,
  argTypes: {},
} as Meta<typeof Combination>;

const Template: StoryFn<typeof Combination> = (args) => (
  <Combination {...args} />
);

export const CombinationInput = Template.bind({});

CombinationInput.args = {
  defaultText: 'Hello world',
};
