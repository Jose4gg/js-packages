import styled from 'styled-components';

import { getThemeObject } from '../themableStyles';
import { LabelProps } from '../types';

export const Label = styled.label<LabelProps>`
  font-family: ${({ theme }) => getThemeObject(theme).common.fontFamily};
  color: ${({ theme }) => getThemeObject(theme).common.textColor};
  cursor: default;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => getThemeObject(theme).common.labelGap};
  outline: ${({ theme }) => getThemeObject(theme).common.labelBorder};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border-radius: ${({ theme }) => getThemeObject(theme).common.borderRadius};
  padding: ${({ theme }) => getThemeObject(theme).common.labelPadding};

  &:hover:not(.disabled) {
    outline: ${({ theme }) => getThemeObject(theme).focused.labelBorder};
    cursor: pointer;

    &:not(.bordered) {
      outline: none;
    }

    input {
      border: ${({ theme }) => getThemeObject(theme).focused.radioBorder};
    }

    &.icon {
      outline: none;
    }
  }

  &.checked {
    outline: ${({ theme }) => getThemeObject(theme).checked.labelBorder};

    &.disabled {
      cursor: not-allowed;
      outline: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.labelBorder};
      background: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.labelBackground};
      color: ${({ theme }) => getThemeObject(theme).disabledChecked.textColor};
    }

    &::after {
      background: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.background};
    }

    &:hover {
      &:not(.disabled) {
        outline: ${({ theme }) => getThemeObject(theme).checked.labelBorder};
      }

      &:not(.bordered) {
        outline: none;
      }
    }

    &.icon {
      &:hover {
        outline: none;
      }
    }
  }

  &:not(.bordered) {
    outline: none;
    padding: 0;

    &.checked {
      outline: none;
    }
  }

  &.disabled {
    cursor: not-allowed;
    outline: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.labelBorder};
    background: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.labelBackground};
    color: ${({ theme }) => getThemeObject(theme).disabledUnchecked.textColor};

    &.icon {
      outline: none;
      background: none;
    }
  }

  &.borderedWide {
    outline: ${({ theme }) => getThemeObject(theme).common.labelBorder};
    border-radius: ${({ theme }) => getThemeObject(theme).common.borderRadius};
    padding: 0.75rem 2.495rem 0.75rem 1.12rem;

    &:hover {
      outline: ${({ theme }) => getThemeObject(theme).focused.labelBorder};
    }

    &.checked {
      outline: ${({ theme }) => getThemeObject(theme).checked.labelBorder};

      &.disabled {
        cursor: not-allowed;
        outline: ${({ theme }) =>
          getThemeObject(theme).disabledChecked.labelBorder};
        background: ${({ theme }) =>
          getThemeObject(theme).disabledChecked.labelBackground};
      }
    }

    &.disabled {
      cursor: not-allowed;
      outline: ${({ theme }) =>
        getThemeObject(theme).disabledUnchecked.labelBorder};
      background: ${({ theme }) =>
        getThemeObject(theme).disabledUnchecked.labelBackground};
    }
  }

  &.icon {
    flex-direction: column;
    justify-content: center;
    outline: none;
    padding: 0;
  }
`;

export const StyledRadio = styled.input`
  appearance: none;
  display: flex;
  align-items: center;
  min-width: ${({ theme }) => getThemeObject(theme).common.radioWidth};
  height: ${({ theme }) => getThemeObject(theme).common.radioHeight};
  border: ${({ theme }) => getThemeObject(theme).common.radioBorder};
  border-radius: 50%;

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => getThemeObject(theme).common.innerCircleWidth};
    height: ${({ theme }) => getThemeObject(theme).common.innerCircleHeight};
    margin: auto;
    border-radius: 50%;
  }

  &.checked {
    border: ${({ theme }) => getThemeObject(theme).checked.radioBorder};

    &::after {
      background: ${({ theme }) => getThemeObject(theme).checked.background};
    }
  }

  &:hover:not(:disabled) {
    border: ${({ theme }) => getThemeObject(theme).focused.radioBorder};
    cursor: pointer;

    &.checked {
      border: ${({ theme }) => getThemeObject(theme).checked.radioBorder};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.radioBorder};
    background: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.background};

    &::after {
      background: ${({ theme }) =>
        getThemeObject(theme).disabledUnchecked.background};
    }

    &.checked {
      border: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.radioBorder};

      &::after {
        background: ${({ theme }) =>
          getThemeObject(theme).disabledChecked.background};
      }
    }
  }
`;

export const RadioIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: auto;
  margin: 0 0 0.75rem 0;
`;

export const LabelHeader = styled.p`
  &.header {
    font-weight: bold;
  }
`;
