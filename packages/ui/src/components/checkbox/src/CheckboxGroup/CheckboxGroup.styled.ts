import styled, { RuleSet, css } from 'styled-components';

import { getThemeObject } from '../themableStyles';
import { ListOrientation } from '../types';

export const LiveRegion = styled.div`
  position: absolute;
  width: 0.063rem;
  height: 0.063rem;
  padding: 0;
  margin: -0.063rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const CheckboxGroupContainer = styled.div<{
  $bordered?: boolean;
  $fullWidth?: boolean;
}>`
  display: inline-block;
  margin: 0 0 0.625rem 0;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  border: ${({ theme, $bordered }) =>
    $bordered ? getThemeObject(theme).unchecked.uncheckedLabelBorder : 'none'};
  border-radius: 0.313rem;
  padding: ${({ $bordered }) => ($bordered ? '0.75rem' : '0')};

  &.error {
    padding: 0.75rem;
    outline: 2px solid ${({ theme }) => getThemeObject(theme).error.borderColor};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-family: ${({ theme }) => getThemeObject(theme).common.fontFamily};
  margin: 0 0 1rem 0;
  font-weight: 400;
  font-size: 1.125rem;
`;

const orientationStyles: Record<ListOrientation, RuleSet<object>> = {
  vertical: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
  horizontal: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  `,
  'auto-grid': css`
    --grid-layout-gap: 2.25rem;
    --grid-column-count: 3;
    --grid-item--min-width: 6rem;

    /**
     * Calculated values.
     */
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: calc(
      (100% - var(--total-gap-width)) / var(--grid-column-count)
    );

    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
    );
    grid-row-gap: var(--grid-layout-gap);
  `,
  default: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 21.25rem));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  `,
};

export const OptionsList = styled.fieldset<{ orientation: ListOrientation }>`
  outline: 0;
  padding: 0;
  border: none;

  ${({ orientation }) => {
    return orientationStyles[orientation] || orientationStyles.default;
  }}
`;

export const HelperText = styled.p<{ $error?: boolean }>`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme, $error }) =>
    $error
      ? getThemeObject(theme).helperText.helperTextError
      : getThemeObject(theme).helperText.helperTextNormal};
`;
