import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ThemeProvider } from 'styled-components';

import { Container, Slider, StyledInput } from './Switch.styled';
import { SwitchProps } from './Switch.types';

const Switch = ({ id, name, dark = false, checked, onChange }: SwitchProps) => {
  const rootWebUiTheme = getRootWebUiTheme();

  const mode = dark ? 'dark' : 'light';
  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <Container onClick={() => onChange(!checked)}>
        <StyledInput
          readOnly
          mode={mode}
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
        />
        <Slider mode={mode} className="slider round" />
      </Container>
    </ThemeProvider>
  );
};

export default Switch;
