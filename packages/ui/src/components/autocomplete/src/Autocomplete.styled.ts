import Select from 'react-select/async';
import styled, { css } from 'styled-components';
import Typography from '@nayya-com/typography';

import { getInputPadding, getThemeObject } from './themableStyles';
import { StyledAutocompleteProps } from './types';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: inline-block;
  color: ${({ theme }) => getThemeObject(theme).normal.labelColor};
  font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
  font-size: ${({ theme }) => getThemeObject(theme).normal.labelFontSize};
  margin: 0 0 0.313rem 0;

  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => getThemeObject(theme).disabled.labelColor};
  }
`;

const Input = css`
  .nayya-autocomplete__input-container,
  .nayya-autocomplete__single-value {
    margin: ${({ theme }) => getThemeObject(theme).normal.inputMargin};
    padding: 0;
    color: ${({ theme }) => getThemeObject(theme).normal.textColor};
  }
`;

const PlaceholderAnimation = css`
  .nayya-autocomplete__placeholder {
    display: ${({ theme }) => (theme.id === 'adp' ? 'none' : 'block')};
    position: absolute;
    transition:
      top 0.1s,
      font-size 0.1s;
    font-size: 0.75rem;
    top: 0.5rem;
  }
`;

const ValueContainer = css`
  .nayya-autocomplete__value-container {
    position: unset;
    overflow: visible;
    padding: 0;
    margin: 0;
  }

  .nayya-autocomplete__value-container--has-value {
    ${PlaceholderAnimation}

    ${Input}
  }
`;

const MenuOptions = css`
  .nayya-autocomplete__menu {
    font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
    font-size: 1rem;
  }

  .nayya-autocomplete__option,
  .nayya-autocomplete__option--is-focused {
    &:focus,
    &:hover {
      background-color: ${({ theme }) => getThemeObject(theme).focus.listItemFocusBackgroundColor};
    }
  }

  .nayya-autocomplete__option--is-selected {
    background-color: ${({ theme }) => getThemeObject(theme).focus.border};

    &:focus,
    &:hover {
      background-color: ${({ theme }) => getThemeObject(theme).focus.border};
    }
  }
`;

const Error = css`
  &.error {
    .nayya-autocomplete__control {
      border: ${({ theme }) => getThemeObject(theme).error.border};
      box-shadow: ${({ theme }) => `0 0 0 0.063rem
        ${getThemeObject(theme).error.border}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).error.iconColor};
      }

      .rotate {
        transform: rotate(180deg);
      }

      &:hover,
      &:focus {
        border: ${({ theme }) => getThemeObject(theme).focus.border};
        box-shadow: ${({ theme }) => `0 0 0 0.063rem ${getThemeObject(theme).focus.border}`};

        .icon {
          fill: ${({ theme }) => getThemeObject(theme).focus.iconColor};
        }
      }
    }
  }
`;

const Warning = css`
  &.warning {
    .nayya-autocomplete__control {
      border: ${({ theme }) => getThemeObject(theme).warning.border};
      box-shadow: ${({ theme }) => `0 0 0 0.063rem
        ${getThemeObject(theme).warning.border}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).warning.iconColor};
      }

      &:hover,
      &:focus {
        border: ${({ theme }) => getThemeObject(theme).focus.border};
        box-shadow: ${({ theme }) => `0 0 0 0.063rem ${getThemeObject(theme).focus.border}`};

        .icon {
          fill: ${({ theme }) => getThemeObject(theme).focus.iconColor};
        }
      }
    }
  }
`;

const Disabled = css`
  &.disabled,
  &:disabled {
    .nayya-autocomplete__control {
      cursor: not-allowed;
      border: ${({ theme }) => getThemeObject(theme).disabled.border};
      background-color: ${({ theme }) => getThemeObject(theme).disabled.backgroundColor};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).disabled.iconColor};
      }
    }

    .nayya-autocomplete__single-value--is-disabled,
    .nayya-autocomplete__placeholder {
      color: ${({ theme }) => getThemeObject(theme).disabled.textColor};
    }
  }
`;

export const StyledAutocomplete = styled(Select)<StyledAutocompleteProps>`
  .nayya-autocomplete__loading-indicator {
    display: none;
  }
  .nayya-autocomplete__control {
    position: relative;
    font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
    font-size: 1rem;
    color: ${({ theme }) => getThemeObject(theme).normal.textColor};
    border: ${({ theme }) => getThemeObject(theme).normal.border};
    border-radius: ${({ theme }) => getThemeObject(theme).normal.borderRadius};
    padding: ${({ theme }) => getInputPadding(theme.id)};
    height: ${({ theme }) => getThemeObject(theme).normal.height};

    .icon {
      fill: ${({ theme }) => getThemeObject(theme).normal.iconColor};
      transition: all 100ms;
    }

    &:focus,
    &:hover {
      border: ${({ theme }) => getThemeObject(theme).focus.border};
      box-shadow: ${({ theme }) => `0 0 0 0.063rem ${getThemeObject(theme).focus.border}`};

      .icon {
        fill: ${({ theme }) => getThemeObject(theme).focus.iconColor};
      }
    }
  }

  .nayya-autocomplete__control--is-focused {
    border: ${({ theme }) => getThemeObject(theme).focus.border};
    box-shadow: none;

    &:hover,
    &:focus {
      border: ${({ theme }) => getThemeObject(theme).focus.border};
      box-shadow: none;
    }

    ${PlaceholderAnimation}
  }

  ${Input}

  .nayya-autocomplete__placeholder {
    ${({ theme }) =>
      theme.id !== 'adp' &&
      css`
        position: absolute;
        top: 1.1rem;
      `}
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => getThemeObject(theme).normal.placeholderColor};
  }

  .nayya-autocomplete__multi-value {
    margin: ${({ theme }) => getThemeObject(theme).normal.multiSelectMarginTop} 0 0 0;
  }

  .nayya-autocomplete__indicator {
    .icon {
      fill: ${({ theme }) => getThemeObject(theme).normal.placeholderColor};
    }
  }

  .nayya-autocomplete__indicator-separator {
    display: none;
  }

  ${ValueContainer}

  ${MenuOptions}

  ${Error}

  ${Warning}

  ${Disabled}
`;

export const HelperText = styled(Typography)`
  margin: 0.375rem 0 0 0.75rem;
  && {
    color: ${({ theme }) => getThemeObject(theme).normal.helperTextColor};

    &.error {
      color: ${({ theme }) => getThemeObject(theme).error.helperTextColor};
    }

    &.warning {
      color: ${({ theme }) => getThemeObject(theme).warning.helperTextColor};
    }

    &.disabled {
      color: ${({ theme }) => getThemeObject(theme).disabled.helperTextColor};
    }
  }
`;

export const RemoveButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: Circular-Medium, sans-serif;
  background-color: white;
  color: rgb(0, 49, 132);
  padding: 0.313rem 0.313rem 0.938rem 0.313rem;
  position: absolute;
  right: 0.75rem;
  top: 1rem;
`;
