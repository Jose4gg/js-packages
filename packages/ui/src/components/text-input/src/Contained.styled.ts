import { css } from 'styled-components';

export const containedContainerStyles = css``;

export const containedInputStyles = css`
  height: 3.625rem;
  line-height: 2.125rem;

  /* Hide the placeholder until focus */
  &::placeholder {
    color: transparent;
  }

  &:focus ~ label,
  &.filled ~ label {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  &:focus,
  &.filled {
    padding: 1.75rem 0.75rem 0.75rem 0.75rem;
    line-height: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.config.textInput.placeholderColor};
    }
  }

  &.hasAction {
    padding-right: 4.5rem;
  }
`;

export const containedLabelStyles = css`
  position: absolute;
  cursor: text;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 1rem;
  line-height: 2.125rem;
  transition: 0.2s;
`;

export const containedSpinnerStyles = css`
  top: 1.25rem;
`;
