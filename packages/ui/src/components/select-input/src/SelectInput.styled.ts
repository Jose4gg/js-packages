import Select, {
  CSSObjectWithLabel,
  GroupBase,
  PlaceholderProps,
} from 'react-select';
import styled from 'styled-components';
import Typography from '@nayya-com/typography';

import { getThemeObject } from './themableStyles';
import { SelectInputProps } from './types';

export const SelectWrapper = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Label = styled.label`
  display: inline-block;
  color: ${({ theme }) => getThemeObject(theme).normal.labelColor};
  font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
  font-size: ${({ theme }) => getThemeObject(theme).normal.labelFontSize};
  margin-bottom: 0.313rem;

  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => getThemeObject(theme).disabled.disabledLabelColor};
  }
`;

export const ReactSelect = styled(Select)<SelectInputProps>`
  .react-select__control {
    font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
    font-size: 1rem;
    color: ${({ theme }) => getThemeObject(theme).normal.textColor};
    border: ${({ theme }) => getThemeObject(theme).normal.border};
    border-radius: ${({ theme }) => getThemeObject(theme).normal.borderRadius};
    min-height: ${({ theme }) => getThemeObject(theme).normal.height};

    .icon {
      fill: ${({ theme }) => getThemeObject(theme).normal.iconColor};
      transition: all 100ms;
    }

    &:hover,
    &:focus {
      border: ${({ theme }) => getThemeObject(theme).focus.focusBorder};
      box-shadow: ${({ theme }) =>
        `0 0 0 0.063rem ${getThemeObject(theme).focus.focusBorder}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).focus.focusIconColor};
      }
    }
  }

  .react-select__control--is-focused {
    border: ${({ theme }) => getThemeObject(theme).focus.focusBorder};
    box-shadow: none;

    &:hover,
    &:focus {
      border: ${({ theme }) => getThemeObject(theme).focus.focusBorder};
      box-shadow: none;
    }
  }

  .react-select__value-container {
    overflow: visible;
  }

  .react-select__input-container,
  .react-select__menu {
    font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
    font-size: 1rem;
  }

  .react-select__placeholder {
    color: ${({ theme }) => getThemeObject(theme).normal.placeholderColor};
    display: ${({ theme }) => getThemeObject(theme).normal.display};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__option,
  .react-select__option--is-focused {
    &:focus,
    &:hover {
      color: ${({ theme }) => getThemeObject(theme).normal.textColor};
      background-color: ${({ theme }) =>
        getThemeObject(theme).focus.listItemFocusBackgroundColor};
    }
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => getThemeObject(theme).focus.focusBorder};

    &:focus,
    &:hover {
      background-color: ${({ theme }) =>
        getThemeObject(theme).focus.focusBorder};
    }
  }

  &.error {
    .react-select__control {
      border: ${({ theme }) => getThemeObject(theme).error.errorBorder};
      box-shadow: ${({ theme }) => `0 0 0 0.063rem
        ${getThemeObject(theme).error.errorBorder}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).error.errorIconColor};
      }

      .rotate {
        transform: rotate(180deg);
      }

      &:hover,
      &:focus {
        border: ${({ theme }) => getThemeObject(theme).focus.focusBorder};
        box-shadow: ${({ theme }) =>
          `0 0 0 0.063rem ${getThemeObject(theme).focus.focusBorder}`};

        .icon {
          fill: ${({ theme }) => getThemeObject(theme).focus.focusIconColor};
        }
      }
    }
  }

  &.warning {
    .react-select__control {
      border: ${({ theme }) => getThemeObject(theme).warning.warningBorder};
      box-shadow: ${({ theme }) => `0 0 0 0.063rem
        ${getThemeObject(theme).warning.warningBorder}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).warning.warningIconColor};
      }

      &:hover,
      &:focus {
        border: ${({ theme }) => getThemeObject(theme).focus.focusBorder};
        box-shadow: ${({ theme }) =>
          `0 0 0 0.063rem ${getThemeObject(theme).focus.focusBorder}`};

        .icon {
          fill: ${({ theme }) => getThemeObject(theme).focus.focusIconColor};
        }
      }
    }
  }

  &.disabled,
  &:disabled {
    .react-select__control {
      cursor: not-allowed;
      border: ${({ theme }) => getThemeObject(theme).disabled.disabledBorder};
      background-color: ${({ theme }) =>
        getThemeObject(theme).disabled.disabledBackgroundColor};

      .icon {
        fill: ${({ theme }) =>
          getThemeObject(theme).disabled.disabledIconColor};
      }
    }

    .react-select__single-value--is-disabled,
    .react-select__placeholder {
      color: ${({ theme }) => getThemeObject(theme).disabled.disabledTextColor};
    }
  }

  .react-select__multi-value {
    margin-top: ${({ theme }) => getThemeObject(theme).normal.marginTop};
  }

  .react-select__single-value {
    position: absolute;
    top: ${({ theme }) => getThemeObject(theme).normal.valueTopOffset};
    color: ${({ theme }) => getThemeObject(theme).normal.textColor};
  }
`;

export const HelperText = styled(Typography)`
  margin: 0.375rem 0 0 0.75rem;
  && {
    color: ${({ theme }) => getThemeObject(theme).normal.helperTextColor};
  }

  &.error {
    color: ${({ theme }) => getThemeObject(theme).error.errorHelperTextColor};
  }

  &.warning {
    color: ${({ theme }) =>
      getThemeObject(theme).warning.warningHelperTextColor};
  }

  &.disabled {
    color: ${({ theme }) =>
      getThemeObject(theme).disabled.disabledHelperTextColor};
  }
`;

export const placeholderAnimationStyles: (
  provided: CSSObjectWithLabel,
  state: PlaceholderProps<unknown, boolean, GroupBase<unknown>>,
) => CSSObjectWithLabel = (provided, state) => ({
  ...provided,
  position: 'absolute' as const,
  transition: 'top 0.1s, font-size 0.1s',
  top: state.hasValue || state.selectProps.inputValue ? '-0.3rem' : '0.25rem',
  fontSize: (state.hasValue || state.selectProps.inputValue) && '0.75rem',
});

export const inputStyles: (
  provided: CSSObjectWithLabel,
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  color: 'transparent',
});
