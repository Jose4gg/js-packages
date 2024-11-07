import { createContext, useState } from 'react';
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'looks';
import { adpTheme, nayyaTheme, upwiseTheme } from 'themes';

import { ThemeSwitcher } from './components';
import Buttons from './views/Buttons';
import Links from './views/Links';
import Palette from './views/Palette';
import Pills from './views/Pills';
import Typography from './views/Typography';

const Nav = styled.nav`
  a {
    margin-right: 10px;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Nav>
        <p>Check this out</p>
        <Link to="/typography">
          <button type="button" className="light">
            Typography
          </button>
        </Link>
        <Link to="/buttons">
          <button type="button" className="light">
            Buttons
          </button>
        </Link>
        <Link to="/pills">
          <button type="button" className="light">
            Pills
          </button>
        </Link>
        <Link to="/links">
          <button type="button" className="light">
            Links
          </button>
        </Link>
        <Link to="/palette">
          <button type="button" className="light">
            Palette
          </button>
        </Link>
        <Outlet />
      </Nav>
    ),
    children: [
      { path: '/typography', element: <Typography /> },
      { path: '/buttons', element: <Buttons /> },
      { path: '/pills', element: <Pills /> },
      { path: '/links', element: <Links /> },
      { path: '/palette', element: <Palette /> },
    ],
  },
]);

const ThemeContext = createContext('nayya');

const App = () => {
  const [theme, setTheme] = useState<'nayya' | 'adp' | 'upwise'>('nayya');
  let themeObj = nayyaTheme; // default theme
  switch (theme) {
    case 'nayya':
      themeObj = nayyaTheme;
      break;
    case 'adp':
      themeObj = adpTheme;
      break;
    case 'upwise':
      themeObj = upwiseTheme;
      break;
    default:
      themeObj = nayyaTheme;
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={themeObj}>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
