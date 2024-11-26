import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ThemeProvider } from 'styled-components';

import { PillContainer, PillGap, PillIcon, PillText } from './Pill.styled';
import { PillProps } from './Pill.types';

const Pill = (props: PillProps) => {
  const { icon, id, text, variant, ...rest } = props;

  const rootWebUiTheme = getRootWebUiTheme();

  const shouldShowGap = icon && Boolean(text?.length);

  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <PillContainer id={id} variant={variant} data-testid={id} {...rest}>
        {icon && <PillIcon data-testid="pill-icon">{icon}</PillIcon>}
        {shouldShowGap && <PillGap />}
        {text && <PillText variant={variant}>{text}</PillText>}
      </PillContainer>
    </ThemeProvider>
  );
};

export default Pill;
