import styled from 'styled-components';

import { Mode } from './Switch.types';
import { getThemeObject } from './themableStyles';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 2.875rem;
  height: 1.625rem;
`;

export const StyledInput = styled.input<{ mode: Mode }>`
  opacity: 0;
  width: 2.875rem;
  height: 1.625rem;

  &:checked + .slider {
    background-color: ${({ theme, mode }) =>
      getThemeObject(theme, mode).checked.background};
  }

  &:checked + .slider:before {
    transform: translateX(1.125rem);
  }
`;

export const Slider = styled.span<{ mode: Mode }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, mode }) =>
    getThemeObject(theme, mode).unchecked.background};
  transition: 0.4s;
  border-radius: 0.8125rem;

  &::before {
    position: absolute;
    content: '';
    height: 1.125rem;
    width: 1.125rem;
    left: 0.2375rem;
    bottom: 0.2375rem;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
