import styled from 'styled-components';

import { BreakTooltipBounds } from './Tooltip.types';

export const Wrapper = styled.div<{
  breakTooltipBounds?: BreakTooltipBounds;
}>`
  display: flex;
  justify-content: ${({ breakTooltipBounds }) => {
    if (breakTooltipBounds === 'topRight') return 'flex-end';
    if (breakTooltipBounds === 'bottomRight') return 'flex-end';
    if (breakTooltipBounds === 'right') return 'flex-end';
    if (breakTooltipBounds === 'left') return 'flex-start';
    if (breakTooltipBounds === 'topLeft') return 'flex-start';
    if (breakTooltipBounds === 'bottomLeft') return 'flex-start';
    return 'center';
  }};
  align-items: ${({ breakTooltipBounds }) => {
    if (breakTooltipBounds === 'top') return 'flex-start';
    if (breakTooltipBounds === 'topRight') return 'flex-start';
    if (breakTooltipBounds === 'topLeft') return 'flex-start';
    if (breakTooltipBounds === 'bottom') return 'flex-end';
    if (breakTooltipBounds === 'bottomRight') return 'flex-end';
    if (breakTooltipBounds === 'bottomLeft') return 'flex-end';
    return 'center';
  }};
  height: calc(100vh - 10px);
  padding: 5px;
  overflow: clip;
  background: #f5f5f5;
`;
