import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import type { Preview } from '@storybook/react';
// import 'normalize.css';
import { useEffect } from 'react';
import { possibleThemes } from '../src/constants';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Get the active theme value from the story parameter
      const { theme } = context.parameters;
      const themeToUse = theme || context.globals.themeClass;

      useEffect(() => {
        // This forces the theme to be setup on render as without force rerender it would require two clicks to set the theme
        // https://storybook.js.org/docs/addons/addons-api#addonsgetchannel
        addons.getChannel().emit(FORCE_RE_RENDER);
      }, [themeToUse]);

      return (
        <div id="root" className={themeToUse}>
          <div className={`themeRoot ${themeToUse}`}>
            <Story />
          </div>
        </div>
      );
    },
  ],
  globalTypes: {
    themeClass: {
      title: 'Theme Class',
      description: 'Global theme for components',
      defaultValue: 'nayya',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: possibleThemes,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
