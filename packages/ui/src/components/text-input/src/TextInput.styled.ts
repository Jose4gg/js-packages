import styled, { keyframes } from 'styled-components';
import Typography from '@nayya-com/typography';

import {
  containedInputStyles,
  containedLabelStyles,
  containedSpinnerStyles,
} from './Contained.styled';
import Loading from './Loading';
import {
  normalHelperTextStyles,
  normalInputStyles,
  normalLabelStyles,
  normalSpinnerStyles,
  normalWrapperStyles,
} from './Normal.styled';
import { getThemeObject } from './themableStyles';

export const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  /* First the common shared styles */
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  /* Then the non-shared/override styles */
  /* The empty objects are there for no overrides or non-shared styles */
  ${({ theme }) => {
    const styleMap = {
      adp: normalWrapperStyles,
      upwise: {},
      nayya: {},
    };
    return styleMap[theme.id];
  }}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: 1px solid ${({ theme }) => getThemeObject(theme).normal.borderColor};
  border: none;
  border-radius: ${({ theme }) => getThemeObject(theme).normal.borderRadius};
  padding: 0.75rem;
  font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
  font-size: 1rem;
  color: ${({ theme }) => getThemeObject(theme).normal.textColor};
  width: 100%;
  background-color: transparent;

  &:focus,
  &:hover {
    outline-color: ${({ theme }) => `${getThemeObject(theme).focus.focusBorderColor}`};
    outline-width: 2px;

    & + svg {
      fill: ${({ theme }) => getThemeObject(theme).focus.focusSpinnerColor};
    }
  }

  &::placeholder {
    color: ${({ theme }) => getThemeObject(theme).normal.placeholderColor};
  }

  &.error,
  &.warning {
    outline-width: 2px;
  }

  &.error {
    outline-color: ${({ theme }) => getThemeObject(theme).error.errorBorderColor};

    & + svg {
      fill: ${({ theme }) => getThemeObject(theme).error.errorSpinnerColor};
    }
  }

  &.warning {
    outline-color: ${({ theme }) => getThemeObject(theme).warning.warningBorderColor};

    & + svg {
      fill: ${({ theme }) => getThemeObject(theme).warning.warningSpinnerColor};
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => getThemeObject(theme).disabled.disabledTextColor};
    outline-color: ${({ theme }) => getThemeObject(theme).disabled.disabledBorderColor};
    background-color: ${({ theme }) => getThemeObject(theme).disabled.disabledBackgroundColor};

    & + svg {
      fill: ${({ theme }) => getThemeObject(theme).normal.spinnerColor};
    }
  }

  ${({ theme }) => {
    const styleMap = {
      adp: normalInputStyles,
      upwise: containedInputStyles,
      nayya: containedInputStyles,
    };
    return styleMap[theme.id];
  }}
`;

export const Label = styled.label`
  color: ${({ theme }) => getThemeObject(theme).normal.labelColor};
  font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};

  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => getThemeObject(theme).disabled.disabledLabelColor};
  }

  ${({ theme }) => {
    const styleMap = {
      adp: normalLabelStyles,
      upwise: containedLabelStyles,
      nayya: containedLabelStyles,
    };
    return styleMap[theme.id];
  }}
`;

export const HelperText = styled(Typography)`
  margin: 0.375rem 0 0 0.75rem;

  && {
    color: ${({ theme }) => getThemeObject(theme).normal.helperTextColor};
    font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};

    &.error {
      color: ${({ theme }) => getThemeObject(theme).error.errorHelperTextColor};
    }

    &.warning {
      color: ${({ theme }) => getThemeObject(theme).warning.warningHelperTextColor};
    }

    &.disabled {
      color: ${({ theme }) => getThemeObject(theme).disabled.disabledHelperTextColor};
    }
  }

  ${({ theme }) => {
    const styleMap = {
      adp: normalHelperTextStyles,
      upwise: {},
      nayya: {},
    };
    return styleMap[theme.id];
  }}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(Loading)`
  position: absolute;
  pointer-events: none;
  animation: ${rotate} 1.5s linear infinite;
  right: 0.75rem;
  fill: ${({ theme }) => getThemeObject(theme).normal.spinnerColor};

  &.loading {
    fill: ${({ theme }) => getThemeObject(theme).normal.spinnerColor};
  }

  ${({ theme }) => {
    const styleMap = {
      adp: normalSpinnerStyles,
      upwise: containedSpinnerStyles,
      nayya: containedSpinnerStyles,
    };
    return styleMap[theme.id];
  }};
`;

export const ActionButton = styled.button`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  padding: 0 0.75rem;
  color: ${({ theme }) => getThemeObject(theme).normal.actionButtonColor};
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => getThemeObject(theme).normal.fontFamily};
  font-size: 1rem;
  background-color: transparent;

  &.error {
    color: ${({ theme }) => getThemeObject(theme).error.errorActionButtonColor};
  }

  &.warning {
    color: ${({ theme }) => getThemeObject(theme).warning.warningActionButtonColor};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => getThemeObject(theme).disabled.disabledActionButtonColor};
  }
`;
