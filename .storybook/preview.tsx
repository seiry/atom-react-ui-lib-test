import type { Preview } from '@storybook/react';
import React from 'react';
import { DevTools } from 'jotai-devtools';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <DevTools />
        <Story/>
      </>
    ),
  ],
};

export default preview;
