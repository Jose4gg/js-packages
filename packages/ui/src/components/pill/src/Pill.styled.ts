import styled from 'styled-components';

import { StyledPillProps } from './Pill.types';
import { getThemeObject } from './themableStyles';

export const PillContainer = styled.div<StyledPillProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, variant }) =>
    getThemeObject(theme)[variant].backgroundColor};
  border: ${({ theme, variant }) => getThemeObject(theme)[variant].border};
  border-radius: 1.25rem;
  padding: 0.375rem 0.75rem;
  width: fit-content;
`;

export const PillText = styled.p<StyledPillProps>`
  line-height: normal;
  text-align: center;
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  font-size: 0.75rem;
  margin: 0;
  color: ${({ theme, variant }) => getThemeObject(theme)[variant].color};
  white-space: nowrap;
`;

export const PillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.75rem;
  width: 0.75rem;
`;

export const PillGap = styled.div`
  width: 0.475rem;
`;
