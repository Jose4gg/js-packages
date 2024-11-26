import { Orientation } from '../Slider.types';

import setNativeInput from './setNativeInput';

const handleTrackClick = (
  event: React.MouseEvent<HTMLDivElement>,
  orientation: Orientation,
  id: string,
  min: number,
  max: number,
) => {
  const { top, height, left, width } =
    event.currentTarget.getBoundingClientRect();
  const clickPosition =
    orientation === 'vertical'
      ? height - (event.clientY - top)
      : event.clientX - left;
  const percent =
    (clickPosition / (orientation === 'vertical' ? height : width)) * 100;
  const value = (percent / 100) * (Number(max) - Number(min)) + Number(min);
  setNativeInput(value, id);
};

export default handleTrackClick;
