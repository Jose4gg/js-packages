import { css } from 'styled-components';

export const normalWrapperStyles = css`
  display: flex;
  flex-direction: column;
`;

export const normalInputStyles = css`
  height: 2.625rem;
  outline-width: 2px;

  &.hasAction {
    padding-right: 4.125rem;
  }

  &.loading {
    padding-left: 2.5rem;
  }
`;

export const normalLabelStyles = css`
  margin: 0 0 0.375rem 0;
  font-size: 0.875rem;
`;

export const normalHelperTextStyles = css`
  margin: 0.375rem 0 0 0.75rem;
`;

export const normalSpinnerStyles = css`
  top: 0.75rem;
`;
