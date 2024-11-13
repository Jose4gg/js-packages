import styled, { css, keyframes } from 'styled-components';

import { StyledButtonProps } from './Button.types';
import { getCommonStyles, getThemeObject } from './variants';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div<{ $hasChildren: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  & .loading {
    margin: 0 ${({ $hasChildren }) => ($hasChildren ? '1rem' : 0)} 0 0;
    animation: ${rotation} 2s infinite linear;
    fill: currentColor;
  }
`;

const BaseButton = css<StyledButtonProps>`
  font-size: ${({ theme, $mini, $fullWidth }) =>
    getCommonStyles(theme, $mini, $fullWidth).fontSize};
  font-weight: ${({ theme, $mini, $fullWidth }) =>
    getCommonStyles(theme, $mini, $fullWidth).fontWeight};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  padding: ${({ theme, $mini, $fullWidth }) =>
    getCommonStyles(theme, $mini, $fullWidth).padding};
  width: ${({ theme, $mini, $fullWidth }) =>
    getCommonStyles(theme, $mini, $fullWidth).width};
  min-height: 2.625rem;
  border-radius: ${({ theme, $mini, $fullWidth }) =>
    getCommonStyles(theme, $mini, $fullWidth).borderRadius};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${BaseButton}
  && {
    background-color: ${({ theme, $mode }) => {
      const config = getThemeObject($mode, theme);
      return config.normal.base.backgroundColor;
    }};
  }
  color: ${({ theme, $mode }) =>
    getThemeObject($mode, theme).normal.base.textColor};

  &.loading {
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).loading.base.textColor};
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).loading.base.backgroundColor};
    cursor: wait;
  }

  &:active {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).active.base.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).active.base.textColor};
  }

  &:hover {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).hover.base.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).hover.base.textColor};
  }

  &:disabled {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).disabled.base.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).disabled.base.textColor};
    cursor: not-allowed;
  }

  &.outlined {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.outlined.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.outlined.textColor};

    border: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.outlined.border};

    &.loading {
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.outlined.textColor};
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.outlined.backgroundColor};
      border-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.outlined.borderColor};
    }

    &:active {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.outlined.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.outlined.textColor};
      border-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.outlined.borderColor};
    }

    &:hover {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.outlined.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.outlined.textColor};
      border-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.outlined.borderColor};
    }

    &:disabled {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.outlined.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.outlined.textColor};
      border-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.outlined.borderColor};
      cursor: not-allowed;
    }
  }

  &.link {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.link.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.link.textColor};
    font-weight: 400;
    padding: 0;
    min-height: auto;
    height: auto;

    &.loading {
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.link.textColor};
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.link.backgroundColor};

      &:hover {
        text-decoration: none;
      }
    }

    &:active {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.link.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.link.textColor};
    }

    &:hover {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.link.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.link.textColor};
      text-decoration: underline;
    }

    &:disabled {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.link.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.link.textColor};

      &:hover {
        text-decoration: none;
      }
    }
  }

  &.text {
    background-color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.text.backgroundColor};
    color: ${({ theme, $mode }) =>
      getThemeObject($mode, theme).normal.text.textColor};

    &.loading {
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.text.textColor};
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).loading.text.backgroundColor};

      &:hover {
        text-decoration: none;
      }
    }

    &:active {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.text.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).active.text.textColor};
    }

    &:hover {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.text.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).hover.text.textColor};
    }

    &:disabled {
      background-color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.text.backgroundColor};
      color: ${({ theme, $mode }) =>
        getThemeObject($mode, theme).disabled.text.textColor};

      &:hover {
        text-decoration: none;
      }
    }
  }

  &.marketing {
    border-radius: ${({ theme, $mini, $fullWidth }) =>
      getCommonStyles(theme, $mini, $fullWidth).marketingBorderRadius};
  }
`;
