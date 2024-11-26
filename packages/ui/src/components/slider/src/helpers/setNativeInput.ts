// Used to trigger a change event on the native input
const setNativeInput = (value: number, id: string) => {
  const input = document.querySelector(`#${id}`);
  // This will work by calling the native setter bypassing Reacts incorrect value change check
  const inputDescriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  );
  if (input && inputDescriptor) {
    inputDescriptor.set?.call(input, value);
    // This will trigger a new render for the component
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
};

export default setNativeInput;
