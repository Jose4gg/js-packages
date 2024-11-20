import classnames from 'classnames';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ThemeProvider } from 'styled-components';

import { Content, StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';
import Loading from './Loading';

const Button = ({
  variant,
  dark = false,
  children,
  loading = false,
  className,
  disabled,
  type = 'button',
  mini = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const classes = classnames(
    {
      dark,
      loading,
    },
    variant,
    className,
  );

  const rootWebUiTheme = getRootWebUiTheme();

  const mode = dark ? 'dark' : 'light';

  const showChildren = !loading || (loading && fullWidth);

  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <StyledButton
        $mini={mini}
        $fullWidth={fullWidth}
        $mode={mode}
        type={type}
        className={classes}
        disabled={disabled}
        data-testid={props.id}
        {...props}
      >
        <Content $hasChildren={!!showChildren}>
          {loading && <Loading className="loading" fillColor="currentColor" size={18} />}
          {showChildren && children}
        </Content>
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
