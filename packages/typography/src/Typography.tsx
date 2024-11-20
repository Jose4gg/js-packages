import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import classNames from 'classnames';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Body1,
  Body2,
  Body3,
  FinePrint,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Label1,
  Label2,
  Label3,
  Label4,
  Span,
  Super1,
  Super2,
  Super3,
} from './Typography.styled';
import { TypographyProps } from './Typography.types';

const componentMap = {
  super1: Super1,
  super2: Super2,
  super3: Super3,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  body1: Body1,
  body2: Body2,
  body3: Body3,
  finePrint: FinePrint,
  label1: Label1,
  label2: Label2,
  label3: Label3,
  label4: Label4,
  span: Span,
};

const Typography = ({
  bold,
  children,
  className,
  testId,
  variant,
  as,
  asTag,
  id,
  ...rest
}: TypographyProps): JSX.Element => {
  const rootWebUiTheme = getRootWebUiTheme();
  const Component = componentMap[variant];

  const classes = classNames(variant, className, {
    bold,
  });

  const Element = React.createElement(
    Component,
    {
      className: classes,
      id,
      as: asTag || as,
      'data-testid': testId,
      ...rest,
    },
    children,
  );

  return <ThemeProvider theme={rootWebUiTheme}>{Element}</ThemeProvider>;
};

export type { TypographyProps };

export default Typography;
