import styled from 'styled-components';

import { getThemeObject } from '../../themableStyles';

export const DisplayText = styled.text`
  font-family: ${({ theme }) => getThemeObject(theme).fontFamily};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1rem;
  fill: ${({ theme }) => getThemeObject(theme).fill};
  text-align: center;
`;
