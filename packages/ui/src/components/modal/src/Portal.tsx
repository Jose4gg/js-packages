import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  wrapperId: string;
  children: React.ReactNode;
};

function createWrapperAndAppendToBody(wrapperId: string): HTMLElement {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  wrapperElement.setAttribute('role', 'presentation');
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export const Portal = ({ wrapperId, children }: Props) => {
  const [wrapperElement, setWrapperElement] = useState<
    HTMLElement | undefined
  >();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let autoCreated = false;
    if (!element) {
      autoCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (autoCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};
