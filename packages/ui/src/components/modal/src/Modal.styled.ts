import styled, { css } from 'styled-components';

import { getModalConfig } from './Modal.helpers';
import { ModalSize } from './Modal.types';

export const Container = styled.div<{
  size: ModalSize;
  centerVertically?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  left: 50%;

  ${({ size, theme }) => css(getModalConfig(theme.id).sizes[size])};

  ${({ centerVertically = false }) => {
    return css`
      transform: translate(-50%, ${centerVertically ? '50%' : 0});
    `;
  }};

  & .close-button {
    all: unset;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${({ theme }) => css(getModalConfig(theme.id).sizes.full)}
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => getModalConfig(theme.id).zIndex};
  inset: 0px;
`;

export const ContentContainer = styled.div`
  overflow: auto;
  padding: 0.5rem 2.25rem 1.625rem 2.25rem;
  margin-top: 4rem;

  &.scroll-container {
    overflow: scroll;

    &::-webkit-scrollbar {
      width: 0.775rem;
      height: 0.775rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 3.125rem;
    }
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(7, 76, 147, 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: -1;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
