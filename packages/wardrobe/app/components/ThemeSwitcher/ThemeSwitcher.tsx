import React from 'react';
import styled from 'styled-components';

interface ThemeSwitcherProps {
  theme: 'nayya' | 'adp' | 'upwise';
  setTheme: React.Dispatch<React.SetStateAction<'nayya' | 'adp' | 'upwise'>>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fieldset = styled.fieldset`
  border: none;
  input {
    cursor: pointer;
    padding: 1rem;
  }
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const ThemeSwitcher = ({
  theme,
  setTheme,
}: ThemeSwitcherProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.currentTarget.value as 'nayya' | 'adp' | 'upwise');
  };

  return (
    <Container>
      <Fieldset>
        <input
          type="radio"
          checked={theme === 'nayya'}
          onChange={handleChange}
          value="nayya"
          id="nayya"
        />
        <Label htmlFor="nayya">Nayya</Label>
      </Fieldset>
      <Fieldset>
        <input
          type="radio"
          checked={theme === 'adp'}
          onChange={handleChange}
          value="adp"
          id="adp"
        />
        <Label htmlFor="adp">ADP</Label>
      </Fieldset>
      <Fieldset>
        <input
          type="radio"
          checked={theme === 'upwise'}
          onChange={handleChange}
          value="metlife"
          id="metlife"
        />
        <Label htmlFor="metlife">MetLife</Label>
      </Fieldset>
    </Container>
  );
};

export default ThemeSwitcher;
