import FocusTrap from 'focus-trap-react';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { useCallback, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Container,
  ContentContainer,
  ModalBackdrop,
  ModalWrapper,
} from './Modal.styled';
import { ModalProps } from './Modal.types';
import { Portal } from './Portal';
import Close from './icons/Close';

const Modal = (props: ModalProps) => {
  const {
    children,
    show,
    centerVertically,
    onClose,
    className,
    'aria-labelledby': areaLabelledBy,
    'aria-describedby': areaDescribedBy,
    size = 'sm',
    enableFocusTrap = true,
  } = props;
  const previouslyFocusedElementRef = useRef<HTMLElement | null>();
  const modalRef = useRef<HTMLDivElement>(null);
  const theme = getRootWebUiTheme();

  const handleClose = useCallback(() => {
    if (previouslyFocusedElementRef && previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
    const rootDivs = document.querySelectorAll('body > div:not(#modal-root)');

    if (show) {
      rootDivs.forEach((el) => {
        el.setAttribute('aria-hidden', 'true');
      });
    } else {
      rootDivs.forEach((el) => {
        el.removeAttribute('aria-hidden');
      });
    }
  }, [show]);

  useEffect(() => {
    const closeOnEscapeKey = (event: globalThis.KeyboardEvent) =>
      event.key === 'Escape' && handleClose();

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!show) return null;

  const fillColor = theme.palette.isabelline[600];
  return (
    <ThemeProvider theme={theme}>
      <Portal wrapperId="modal-root">
        <FocusTrap active={enableFocusTrap}>
          <ModalWrapper
            ref={modalRef}
            aria-labelledby={areaLabelledBy}
            aria-describedby={areaDescribedBy}
            role="dialog"
            aria-modal
            className="modal-root"
            id="modal-content-wrapper"
          >
            <ModalBackdrop aria-hidden="true" onClick={handleClose} />
            <Container
              centerVertically={centerVertically}
              className={className}
              size={size}
            >
              <button
                aria-label="Close modal"
                className="close-button"
                type="button"
                onClick={onClose}
              >
                <Close size={24} fillColor={fillColor} />
              </button>
              <ContentContainer className={className}>
                {children}
              </ContentContainer>
            </Container>
          </ModalWrapper>
        </FocusTrap>
      </Portal>
    </ThemeProvider>
  );
};

export default Modal;
