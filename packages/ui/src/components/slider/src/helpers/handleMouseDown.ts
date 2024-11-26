import { Orientation } from '../Slider.types';

import setNativeInput from './setNativeInput';

const handleMouseMove = (
  orientation: Orientation,
  min: number,
  max: number,
  id: string,
  left: number,
  width: number,
  top: number,
  height: number,
) => {
  return (event: MouseEvent) => {
    const clickPosition =
      orientation === 'vertical'
        ? height - (event.clientY - top)
        : event.clientX - left;
    const percent =
      (clickPosition / (orientation === 'vertical' ? height : width)) * 100;
    const value = (percent / 100) * (Number(max) - Number(min)) + Number(min);
    setNativeInput(value, id);
  };
};

const handleMouseDown = (
  event: React.MouseEvent<HTMLDivElement>,
  orientation: Orientation,
  id: string,
  min: number,
  max: number,
) => {
  event.preventDefault();
  const parentBounding =
    event.currentTarget.parentElement?.getBoundingClientRect();
  const { left, width, top, height } = parentBounding || {
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  };

  const mouseMove = handleMouseMove(
    orientation,
    min,
    max,
    id,
    left,
    width,
    top,
    height,
  );
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

export default handleMouseDown;
