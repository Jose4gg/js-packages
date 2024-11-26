import { HTMLAttributes } from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  show: boolean;
  centerVertically?: boolean;
  enableFocusTrap?: boolean;
  size?: ModalSize;
  onClose: () => void;
};
