const MODAL_Z_INDEX = 2100;
const MARGIN_TOP = '2.25rem';
const MARGIN_BOTTOM = '1.5rem';

const shared = {
  height: 'auto',
  maxHeight: `calc(100vh - ${MARGIN_TOP} - ${MARGIN_BOTTOM})`,
  top: `${MARGIN_TOP}`,
};

const sizes = {
  sm: {
    width: '24.5rem',
    ...shared,
  },
  md: {
    width: '50.25rem',
    ...shared,
  },
  lg: {
    width: '70rem',
    ...shared,
  },
  full: {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    top: '0',
  },
};

const modalConfig = {
  sizes,
  zIndex: MODAL_Z_INDEX,
};

export default modalConfig;
