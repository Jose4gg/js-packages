export const variantPadding = (mini: boolean, fullWidth: boolean) => {
  if (mini) {
    return '0 1.125rem';
  }
  if (fullWidth) {
    return '0 2.86rem';
  }
  return '0 2.25rem';
};
