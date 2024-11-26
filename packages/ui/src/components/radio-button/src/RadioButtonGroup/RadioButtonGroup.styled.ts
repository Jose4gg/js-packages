import styled, { RuleSet, css } from 'styled-components';
import Typography from '@nayya-com/typography';

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

export const RadioButtonGroupContainer = styled.div<{
  $bordered?: boolean;
  $fullWidth?: boolean;
}>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  margin: 0 0 0.625rem 0;
  border: ${({ theme, $bordered }) =>
    $bordered ? getThemeObject(theme).common.labelBorder : 'none'};
  border-radius: 0.313rem;
  padding: ${({ $bordered }) => ($bordered ? '0.75rem' : '0')};

  &.error {
    padding: 0.75rem;
    outline: 2px solid ${({ theme }) => getThemeObject(theme).error.borderColor};
  }
`;

export const Label = styled(Typography)`
  font-family: ${({ theme }) => getThemeObject(theme).common.fontFamily};
  margin: 0 0 1rem 0;
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
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 1.5rem;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
  `,
  default: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 21.25rem));
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  `,
};

export const OptionsList = styled.fieldset<{
  orientation: ListOrientation;
  $fullWidth?: boolean;
}>`
  outline: 0;
  padding: 0;
  margin: 0;
  border: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  justify-content: ${({ $fullWidth }) =>
    $fullWidth ? 'space-between' : 'initial'};

  ${({ orientation }) => orientationStyles[orientation]}
`;

export const HelperText = styled(Typography)<{ error?: boolean }>`
  margin: 0;
  && {
    color: ${({ theme, error }) =>
      error
        ? getThemeObject(theme).helperText.error
        : getThemeObject(theme).helperText.normal};
  }
`;
