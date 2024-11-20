import { StoryObj } from '@storybook/react';

import Button from '../../src/components/button/src/Button';

type DefaultArgs = {
  id: string;
  children: string;
  // Add other known properties here if needed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // This allows for additional properties
};
const defaultArgs: DefaultArgs = { id: 'storybookDemo', children: 'Button' };

const baseConfigs = {
  default: { args: defaultArgs },
  marketing: {
    args: {
      ...defaultArgs,
      variant: 'marketing',
    },
  },
  text: {
    args: {
      ...defaultArgs,
      variant: 'text',
    },
  },
  link: {
    args: {
      ...defaultArgs,
      variant: 'link',
    },
  },
  outlined: {
    args: {
      ...defaultArgs,
      variant: 'outlined',
    },
  },
};

const makeLoadingConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const loadingKey = `${key}Loading`;
      acc[loadingKey] = {
        args: {
          ...config.args,
          loading: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeDisabledConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const disabledKey = `${key}Disabled`;
      acc[disabledKey] = {
        args: {
          ...config.args,
          disabled: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeDisabledAndLoadingConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const disabledAndLoadingKey = `${key}DisabledAndLoading`;
      acc[disabledAndLoadingKey] = {
        args: {
          ...config.args,
          disabled: true,
          loading: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeFullWidthConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const fullWidthKey = `${key}FullWidth`;
      acc[fullWidthKey] = {
        args: {
          ...config.args,
          fullWidth: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeMiniConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const miniKey = `${key}Mini`;
      acc[miniKey] = {
        args: {
          ...config.args,
          mini: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeDarkConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const darkKey = `${key}Dark`;
      acc[darkKey] = {
        args: {
          ...config.args,
          dark: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeDarkAndDisabledConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const darkAndDisabledKey = `${key}DarkAndDisabled`;
      acc[darkAndDisabledKey] = {
        args: {
          ...config.args,
          dark: true,
          disabled: true,
        },
      };
      return acc;
    },
    {},
  );
};

const makeDarkAndLoadingConfigs = () => {
  return Object.entries(baseConfigs).reduce(
    (acc: { [key: string]: { args: typeof defaultArgs } }, [key, config]) => {
      const darkAndLoadingKey = `${key}DarkAndLoading`;
      acc[darkAndLoadingKey] = {
        args: {
          ...config.args,
          dark: true,
          loading: true,
        },
      };
      return acc;
    },
    {},
  );
};

const disabledConfigs = makeDisabledConfigs();
const loadingConfigs = makeLoadingConfigs();
const disabledAndLoadingConfigs = makeDisabledAndLoadingConfigs();
const fullWidthConfigs = makeFullWidthConfigs();
const miniConfigs = makeMiniConfigs();
const darkConfigs = makeDarkConfigs();
const darkAndDisabledConfigs = makeDarkAndDisabledConfigs();
const darkAndLoadingConfigs = makeDarkAndLoadingConfigs();

export const storyConfigs: Record<string, StoryObj<typeof Button>> = {
  default: { args: defaultArgs },
  marketing: {
    args: {
      ...defaultArgs,
      variant: 'marketing',
    },
  },
  text: {
    args: {
      ...defaultArgs,
      variant: 'text',
    },
  },
  link: {
    args: {
      ...defaultArgs,
      variant: 'link',
    },
  },
  outlined: {
    args: {
      ...defaultArgs,
      variant: 'outlined',
    },
  },
  dark: {
    args: {
      ...defaultArgs,
      dark: true,
    },
  },
  loading: {
    args: {
      ...defaultArgs,
      loading: true,
    },
  },
  mini: {
    args: {
      ...defaultArgs,
      mini: true,
    },
  },
  fullWidth: {
    args: {
      ...defaultArgs,
      fullWidth: true,
    },
  },
  ...disabledConfigs,
  ...loadingConfigs,
  ...disabledAndLoadingConfigs,
  ...fullWidthConfigs,
  ...miniConfigs,
  ...darkConfigs,
  ...darkAndDisabledConfigs,
  ...darkAndLoadingConfigs,
};
