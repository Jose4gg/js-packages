import styled from 'styled-components';
import Typography from '@nayya-com/typography';

import { getThemeObject } from '../themableStyles';
import { CheckBoxLabelAlignment } from '../types';

export const CheckboxContainer = styled.div<{
  $fullWidth?: boolean;
}>`
  display: inline-block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const CheckboxIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 4.5rem;
  margin: 0 0 0.75rem 0;
`;

export const LabelText = styled(Typography)<{
  $textAlignment?: CheckBoxLabelAlignment;
}>`
  margin: ${({ theme }) => getThemeObject(theme).common.labelMargin};
  text-align: ${({ $textAlignment }) => $textAlignment ?? 'center'};
`;

export const CheckboxLabel = styled.label<{
  $centerItems?: boolean;
}>`
  display: flex;
  align-items: ${({ $centerItems }) =>
    $centerItems ? 'center' : 'flex-start'};
  font-family: ${({ theme }) => getThemeObject(theme).common.fontFamily};
  cursor: pointer;

  &.icon {
    flex-direction: column;
    justify-content: center;

    input {
      margin: 0;
    }

    .label-text {
      margin: 0.75rem 0 0 0;
    }
  }

  &:hover:not(.disabled):not(.checked) {
    input {
      border: ${({ theme }) => getThemeObject(theme).focused.checkboxBorder};
    }
  }

  &.disabled {
    color: ${({ theme }) =>
      getThemeObject(theme).disabledChecked.disabledCheckedTextColor};

    &:hover {
      cursor: not-allowed;
    }
  }

  &.bordered {
    outline: ${({ theme }) =>
      getThemeObject(theme).unchecked.uncheckedLabelBorder};
    border-radius: ${({ theme }) => getThemeObject(theme).common.borderRadius};
    padding: 0.75rem 1.12rem;

    &:hover:not(.disabled):not(.checked) {
      outline: ${({ theme }) => getThemeObject(theme).focused.labelBorder};
    }

    &.checked {
      outline: ${({ theme }) =>
        getThemeObject(theme).checked.checkedLabelBorder};

      &.disabled {
        cursor: not-allowed;
        outline: ${({ theme }) =>
          getThemeObject(theme).disabledChecked.disabledCheckedLabelBorder};
      }
    }

    &.disabled {
      cursor: not-allowed;
      outline: ${({ theme }) =>
        getThemeObject(theme).disabledUnchecked.disabledUncheckedLabelBorder};
    }
  }

  &.borderedWide {
    outline: ${({ theme }) =>
      getThemeObject(theme).unchecked.uncheckedLabelBorder};
    border-radius: ${({ theme }) => getThemeObject(theme).common.borderRadius};
    padding: 0.75rem 2.495rem 0.75rem 1.12rem;

    &:hover:not(.disabled):not(.checked) {
      outline: ${({ theme }) => getThemeObject(theme).focused.labelBorder};
    }

    &.checked {
      outline: ${({ theme }) =>
        getThemeObject(theme).checked.checkedLabelBorder};

      &.disabled {
        cursor: not-allowed;
        outline: ${({ theme }) =>
          getThemeObject(theme).disabledChecked.disabledCheckedLabelBorder};
      }
    }

    &.disabled {
      cursor: not-allowed;
      outline: ${({ theme }) =>
        getThemeObject(theme).disabledUnchecked.disabledUncheckedLabelBorder};
    }
  }
`;

export const CheckboxInputWrapper = styled.div`
  display: flex;
  position: relative;

  .checkmark {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: ${({ theme }) => getThemeObject(theme).common.checkMarkHeight};
    width: ${({ theme }) => getThemeObject(theme).common.checkMarkWidth};
  }
`;

export const CheckboxInput = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;

  width: ${({ theme }) => getThemeObject(theme).common.inputWidth};
  height: ${({ theme }) => getThemeObject(theme).common.inputHeight};
  padding: 0.375rem;
  margin: 0;
  border: ${({ theme }) =>
    getThemeObject(theme).unchecked.uncheckedCheckboxBorder};
  border-radius: ${({ theme }) => getThemeObject(theme).common.borderRadius};
  background: ${({ theme }) =>
    getThemeObject(theme).unchecked.uncheckedBackground};

  &:hover {
    cursor: pointer;
  }

  &.checked {
    position: relative;
    border: ${({ theme }) =>
      getThemeObject(theme).checked.checkedCheckboxBorder};
    background-color: ${({ theme }) =>
      getThemeObject(theme).checked.checkedBackground};

    &::before {
      content: '';
      position: absolute;
      right: 0.063rem;
      top: -0.313rem;
    }

    &.disabled,
    &:disabled {
      cursor: not-allowed;
      border: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.disabledCheckedCheckboxBorder};
      background: ${({ theme }) =>
        getThemeObject(theme).disabledChecked.disabledCheckedBackground};
    }
  }

  &.disabled,
  &:disabled {
    cursor: not-allowed;
    border: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.disabledUncheckedCheckboxBorder};
    background: ${({ theme }) =>
      getThemeObject(theme).disabledUnchecked.disabledUncheckedBackground};
  }
`;
