import styled, { keyframes } from 'styled-components';

import { getThemeObject } from '../themableStyles';

const Rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 3.25rem;
  bottom: ${({ theme }) => (theme.id === 'adp' ? '0.8rem' : '1.2rem')};

  color: ${({ theme }) => getThemeObject(theme).focus.iconColor};

  &.warning {
    color: ${({ theme }) => getThemeObject(theme).warning.iconColor};
  }
  &.error {
    color: ${({ theme }) => getThemeObject(theme).error.iconColor};
  }
  &.disabled {
    color: ${({ theme }) => getThemeObject(theme).disabled.iconColor};
  }

  svg {
    animation: ${Rotation} 2s infinite linear;
  }
`;
