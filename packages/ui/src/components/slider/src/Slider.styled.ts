import styled, { css } from 'styled-components';

import { DefaultProps, TrackProps } from './Slider.types';
import { getThemeObject } from './themableStyles';

export const Container = styled.div<TrackProps>`
  position: relative;
  ${({ orientation }) => {
    if (orientation === 'vertical') {
      return css``;
    }
    return css`
      padding: ${({ theme }) => getThemeObject(theme).containerPadding};
    `;
  }}
`;

export const Boundaries = styled.div<DefaultProps>`
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  font-size: ${({ theme }) => getThemeObject(theme).fontSize};
  display: flex;

  ${({ orientation, percent }) => {
    if (orientation === 'vertical') {
      return css`
        height: ${percent}%;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: ${({ theme }) => getThemeObject(theme).verticalPadding};
      `;
    }
    return css`
      justify-content: space-between;
      padding: ${({ theme }) => getThemeObject(theme).horizontalPadding};
    `;
  }}
`;

const TrackOverrides = css`
  border: none;
`;

const ThumbOverrides = css`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  border-radius: 0;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  ::-webkit-slider-runnable-track {
    ${TrackOverrides}
  }
  ::-moz-range-track {
    ${TrackOverrides}
  }

  ::-webkit-slider-thumb {
    ${ThumbOverrides}
  }
  ::-moz-range-thumb {
    ${ThumbOverrides}
  }
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 100%;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  direction: ltr;
`;

export const ValueText = styled.div<DefaultProps>`
  position: absolute;
  z-index: ${({ theme }) => getThemeObject(theme).zIndex};
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  font-size: ${({ theme }) => getThemeObject(theme).fontSize};

  ${({ orientation, percent }) => {
    if (orientation === 'vertical') {
      return css`
        left: 0.8rem;
        top: calc(${100 - percent}% - 18px);
      `;
    }
    return css`
      left: calc(${percent}% - 28px);
      top: -0.8rem;
    `;
  }}
`;

export const Thumb = styled.div<DefaultProps>`
  position: absolute;
  height: ${({ theme }) => getThemeObject(theme).thumbHeight};
  width: ${({ theme }) => getThemeObject(theme).thumbWidth};
  background: ${({ theme }) => getThemeObject(theme).background};
  display: flex;
  z-index: ${({ theme }) => getThemeObject(theme).thumbZIndex};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${({ theme }) => getThemeObject(theme).border};
  box-sizing: border-box;
  cursor: pointer;

  ${({ orientation, percent }) => {
    if (orientation === 'vertical') {
      return css`
        left: -0.5rem;
        top: calc(${100 - percent}% - 0.875rem);
        transform: rotate(90deg);
      `;
    }
    return css`
      left: calc(${percent}% - 0.875rem);
      top: 1.3rem;
    `;
  }}

  svg {
    width: 0.875rem;
    height: 0.875rem;
    z-index: ${({ theme }) => getThemeObject(theme).thumbZIndex};
    cursor: pointer;
  }

  & + .displayTest {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    &:hover + .displayTest {
      display: block;
    }
  }

  // Use active in mobile since it keeps hover on touch leave
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    &:active + .displayTest {
      display: block;
    }
  }
`;

export const Track = styled.div<TrackProps>`
  position: absolute;
  ${({ orientation }) => {
    if (orientation === 'vertical') {
      return css`
        width: ${({ theme }) => getThemeObject(theme).trackWidth};
        height: 100%;
      `;
    }
    return css`
      width: 100%;
      height: ${({ theme }) => getThemeObject(theme).trackHeight};
    `;
  }}
  border: ${({ theme }) => getThemeObject(theme).trackBorder};
  box-shadow: 0 0.1972rem 0.1479rem -0.1479rem #0000001a;
  box-sizing: border-box;
  border-radius: ${({ theme }) => getThemeObject(theme).borderRadius};
  opacity: 0.38;
  cursor: pointer;
`;

export const Progress = styled.div<DefaultProps>`
  position: absolute;
  background: ${({ theme }) => getThemeObject(theme).background};
  ${({ orientation, percent }) => {
    if (orientation === 'vertical') {
      return css`
        width: ${({ theme }) => getThemeObject(theme).trackWidth};
        height: ${percent}%;
        top: ${100 - percent}%;
      `;
    }
    return css`
      height: ${({ theme }) => getThemeObject(theme).trackHeight};
      width: ${percent}%;
    `;
  }}
  z-index: ${({ theme }) => getThemeObject(theme).zIndex};
  box-sizing: border-box;
  border-radius: ${({ theme }) => getThemeObject(theme).borderRadius};
  cursor: pointer;
`;
