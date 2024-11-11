import styled, { css } from 'styled-components';

import { getThemeObject } from './variants';

interface DefaultProps {
  'data-testid'?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const SuperCss = css`
  ${({ theme }) => {
    const themeObject = getThemeObject(theme);
    return `
       font-family: ${themeObject.headingFontFamily}; 
       font-weight:  ${themeObject.superWeight}; 
       color: ${themeObject.textColor}
       `;
  }};
`;

export const Super1Css = css`
  font-size: 7.5rem;
  letter-spacing: -0.075rem;
  line-height: 8.5rem;
  ${SuperCss}
`;

export const Super2Css = css`
  font-size: 5.625rem;
  letter-spacing: -0.05625rem;
  line-height: 6.375rem;
  ${SuperCss}
`;

export const Super3Css = css`
  font-size: 4.1875rem;
  letter-spacing: -0.04188rem;
  line-height: 4.75rem;
  ${SuperCss}
`;

const HeaderCss = css`
  ${({ theme }) => {
    const themeObject = getThemeObject(theme);
    return `
      font-family: ${themeObject.headingFontFamily};
      font-weight: ${themeObject.headerWeight};
      color: ${themeObject.textColor};
  `;
  }}
`;

const Header1Css = css`
  font-size: 3.1875rem;
  letter-spacing: -0.03188rem;
  line-height: 4.25rem;
  ${HeaderCss}
`;

const Header2Css = css`
  font-size: 2.375rem;
  letter-spacing: -0.02375rem;
  line-height: 3.25rem;
  ${HeaderCss}
`;

const Header3Css = css`
  font-size: 1.75rem;
  letter-spacing: -0.0175rem;
  line-height: 2.375rem;
  ${HeaderCss}
`;

const Header4Css = css`
  font-size: 1.3125rem;
  letter-spacing: -0.01313rem;
  line-height: 1.875rem;
  ${HeaderCss}
`;

const Header5Css = css`
  font-size: 1rem;
  line-height: 1.375rem;
  && {
    ${({ theme }) => {
      if (theme.id === 'upwise') {
        return `font-family: ${getThemeObject(theme).bodyFontFamily};`;
      }
      return '';
    }};
  }
  ${HeaderCss}
`;

const BodyCss = css`
  font-family: ${({ theme }) => getThemeObject(theme).bodyFontFamily};
  color: ${({ theme }) => getThemeObject(theme).textColor};
  &&.bold {
    font-weight: ${({ theme }) => getThemeObject(theme).headerWeight};
  }
`;

// TODO: Update these body1, 2,3, and label 1,2,3,4 to match heading and super
// ticket: https://nayya-team.atlassian.net/browse/CHOOS-1887

const Body1Css = css`
  font-size: 0.875rem;
  line-height: 1.5rem;
  ${BodyCss}
`;

const Body2Css = css`
  font-size: 1rem;
  line-height: 1.625rem;
  ${BodyCss}
`;

const Body3Css = css`
  font-size: 1.3125rem;
  line-height: 2.25rem;
  ${BodyCss}
`;

const LabelCss = css`
  font-family: ${({ theme }) => getThemeObject(theme).bodyFontFamily};
  color: ${({ theme }) => getThemeObject(theme).textColor};
  &&.bold {
    font-weight: ${({ theme }) => getThemeObject(theme).headerWeight};
  }
`;

export const Super1 = styled.h1<DefaultProps>`
  ${Super1Css}
`;

export const Super2 = styled.h1<DefaultProps>`
  ${Super2Css}
`;

export const Super3 = styled.h1<DefaultProps>`
  ${Super3Css}
`;

export const Header1 = styled.h1<DefaultProps>`
  ${Header1Css}
`;

export const Header2 = styled.h2<DefaultProps>`
  ${Header2Css}
`;

export const Header3 = styled.h3<DefaultProps>`
  ${Header3Css}
`;

export const Header4 = styled.h4<DefaultProps>`
  ${Header4Css}
`;

export const Header5 = styled.h5<DefaultProps>`
  ${Header5Css}
`;

export const Body1 = styled.p<DefaultProps>`
  ${Body1Css}
`;

export const Body2 = styled.p<DefaultProps>`
  ${Body2Css}
`;

export const Body3 = styled.p<DefaultProps>`
  ${Body3Css}
`;

export const Label1 = styled.p<DefaultProps>`
  font-size: 0.625rem;
  line-height: 0.75rem;
  letter-spacing: 0.00625rem;
  ${LabelCss}
`;

export const Label2 = styled.p<DefaultProps>`
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.0075rem;
  ${LabelCss}
`;

export const Label3 = styled.p<DefaultProps>`
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.00875rem;
  ${LabelCss}
`;

export const Label4 = styled.p<DefaultProps>`
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.01rem;
  ${LabelCss}
`;

export const FinePrint = styled.p<DefaultProps>`
  font-family: ${({ theme }) => getThemeObject(theme).bodyFontFamily};
  color: ${({ theme }) => getThemeObject(theme).textColor};
  &&.bold {
    font-weight: ${({ theme }) => getThemeObject(theme).headerWeight};
  }
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

export const Span = styled.span<DefaultProps>`
  &&.bold {
    font-weight: ${({ theme }) => getThemeObject(theme).headerWeight};
  }
`;
