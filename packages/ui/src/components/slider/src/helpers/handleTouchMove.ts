import { Orientation } from '../Slider.types';

import setNativeInput from './setNativeInput';

export const handleTouchMove = (
  event: React.TouchEvent<HTMLDivElement>,
  orientation: Orientation,
  id: string,
  min: number,
  max: number,
) => {
  const touch = event.touches[0];
  const parentBounding =
    event.currentTarget.parentElement?.getBoundingClientRect();
  const { left, width, top, height } = parentBounding || {
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  };
  const clickPosition =
    orientation === 'vertical'
      ? height - (touch.clientY - top)
      : touch.clientX - left;
  const percent =
    (clickPosition / (orientation === 'vertical' ? height : width)) * 100;
  const newValue = (percent / 100) * (Number(max) - Number(min)) + Number(min);
  setNativeInput(newValue, id);
};
