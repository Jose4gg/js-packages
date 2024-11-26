import setNativeInput from './setNativeInput';

const handleKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  id: string,
  value: number,
  step: number,
  min: number,
  max: number,
) => {
  event.preventDefault();

  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    const newValue = value === min ? min : value - step;
    setNativeInput(newValue, id);
  }

  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    const newValue = value === max ? max : value + step;
    setNativeInput(newValue, id);
  }
};

export default handleKeyDown;
