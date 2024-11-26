import { Decorator } from '@storybook/react';
import { useEffect } from 'react';

const StylesDecorator: Decorator = (Story) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .sb-show-main.sb-main-padded {
      padding: 0;
    }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <Story />;
};

export default StylesDecorator;
