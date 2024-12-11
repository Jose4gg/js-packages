import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { RadioButton } from '../../components';
import Tooth from '../checkbox/assets/Tooth';
import ToothDisabled from '../checkbox/assets/ToothDisabled';

export const radioButtonConfigs: Record<string, StoryObj<typeof RadioButton>> = {
  default: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
    },
  },

  defaultHovered: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  defaultWithLabelContent: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      labelContent: 'Label content',
      name: 'label',
      onChange: fn(),
    },
  },

  defaultWithLabelContentHovered: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      labelContent: 'Label content',
      name: 'label',
      onChange: fn(),
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  defaultChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      onChange: fn(),
    },
  },

  defaultCheckedWithLabelContent: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      labelContent: 'Label content',
      name: 'label',
      checked: true,
      onChange: fn(),
    },
  },

  noBorder: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      bordered: false,
    },
  },

  noBorderHovered: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      bordered: false,
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  noBorderChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      bordered: false,
      checked: true,
    },
  },

  disabledDefault: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
    },
  },

  disabledDefaultWithLabelContent: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      labelContent: 'Label content',
      disabled: true,
      onChange: fn(),
    },
  },

  disabledDefaultChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
    },
  },

  disabledDefaultCheckedWithLabelContent: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      labelContent: 'Label content',
      checked: true,
      disabled: true,
      onChange: fn(),
    },
  },

  borderedWide: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'borderedWide',
    },
  },

  borderedWideHovered: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'borderedWide',
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  borderedWideChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      onChange: fn(),
      variant: 'borderedWide',
    },
  },

  disabledBorderedWide: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      variant: 'borderedWide',
    },
  },

  disabledBorderedWideChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      variant: 'borderedWide',
    },
  },

  icon: {
    args: {
      id: 'radio-button-storybook-demo',
      icon: <Tooth />,
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'icon',
    },
  },

  iconHovered: {
    args: {
      id: 'radio-button-storybook-demo',
      icon: <Tooth />,
      label: 'Label',
      name: 'label',
      onChange: fn(),
      variant: 'icon',
    },
    parameters: {
      pseudo: { hover: true },
    },
  },

  iconChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      icon: <Tooth />,
      label: 'Label',
      name: 'label',
      checked: true,
      onChange: fn(),
      variant: 'icon',
    },
  },

  iconDisabled: {
    args: {
      id: 'radio-button-storybook-demo',
      icon: <ToothDisabled />,
      label: 'Label',
      name: 'label',
      disabled: true,
      onChange: fn(),
      variant: 'icon',
    },
  },

  iconDisabledChecked: {
    args: {
      id: 'radio-button-storybook-demo',
      icon: <ToothDisabled />,
      label: 'Label',
      name: 'label',
      checked: true,
      disabled: true,
      onChange: fn(),
      variant: 'icon',
    },
  },
};
