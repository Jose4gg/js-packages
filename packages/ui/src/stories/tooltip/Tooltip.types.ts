import { TooltipProps } from '../../components/tooltip/src/Tooltip.types';

export type BreakTooltipBounds =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft';

export interface StoryArgs extends TooltipProps {
  breakTooltipBounds?: BreakTooltipBounds;
}
