import styled from 'styled-components';

import { getThemeObject } from './themableStyles';

export const TooltipWrapper = styled.button`
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
  position: relative;
`;

export const InfoIcon = styled.img`
  width: 0.5625rem;
  height: 0.5625rem;
`;

export const TooltipTextTrigger = styled.span`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => getThemeObject(theme).textColor};
  cursor: pointer;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.9375rem;
  width: 0.9375rem;
  background-color: #b2aba5;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TooltipContent = styled.div`
  width: auto;
  display: inline-block;
  background: #ffffff;
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.12), 0 0.125rem 0 rgba(0, 0, 0, 0.24),
    0 0 0.75rem rgba(0, 0, 0, 0.06);
  padding: 0.9375rem;
  max-width: 18.75rem;
  width: max-content;
  position: fixed;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  z-index: 100000;

  @media (width >= ${({ theme }) => theme.breakpoints.medium}) {
    position: absolute;
  }

  & p {
    margin: 0;
    color: #000;
    font-size: 1rem;
    font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  }
`;
