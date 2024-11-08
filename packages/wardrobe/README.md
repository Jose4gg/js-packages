# nayya-wardrobe-json

Nayya's Dream Closet

Includes

- GlobalStyle.js to be used as styled components theme
- 2 themes to be used with the global styles and throughout your app
  - Nayya theme
  - ADP theme
- types for the themes

## Installation

`yarn add nayya-wardrobe`

import the themes

```
import { nayyaTheme, adpTheme } from 'nayya-wardrobe-json/lib/nayya';
```

and use them with [styled components theme provider.](https://styled-components.com/docs/advanced)

You can setup [styled components global styles.](https://styled-components.com/docs/api#createglobalstyle)

```
import { NayyaStyles } from 'nayya-wardrobe-json';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${NayyaStyles}
`;

export { GlobalStyle };

```

Finally, in order to get the theme typings working properly you need to create a `styled.d.ts` alongside your custom types ex: `src/types/styled.d.ts`. Put this code into your `styled.d.ts`

```
import { ThemeObject } from 'nayya-wardrobe-json/lib/styled';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeObject {
    // Add your own theme properties here
  }
}

```

## Usage

You can run the app with `yarn dev` to view the styles discussed here

### Typography

h1-h5 will have styles applied automatically, span, p, a, etc tags will have some default styles applied. However, in order to use the rest some classes will be needed.

```
.super1, .super2, .super3
.body1, .body2, .body3
.label1, .label2, .label3, .label4
```

For accessibility purposes we have also added in classes for the h tags. Accessibility requires h tags to be in order (shouldn't have an h2 tag in the structure before an h1 for example). So, you can add a h tag, and restyle it with classes

`<h1 className='h3'>This h1 should look like an h3</h1>`

`<h1 className='label2'>This h1 should look like an a small label</h1>`

### Palette

The palette can be used like `theme.[colorName][colorwWeight]` for example:

`nayyaPalette.isabelline[900];`

The color names and weights can be seen [in figma](https://www.figma.com/file/HAvC0D2zeyqo34StxWadbk/Nayya-Essential?node-id=8%3A165)

### Buttons

Buttons are not styled by default, this choice was made because there may be an instance where we have a one off button style we need to do, we don't want to have to override all the styles of our existing buttons. So, classes are required.

There is the light/dark mode which can be applied via `.light` or `.dark`.

Then we have the variants which are default (meaning no additional class besides the light/dark theme), `.outlined`, `.text`, and `.marketing`.

Next there are size classes that can be passed `.mini` & `.large`.

Finally we have different states that can be applied `.active` & `.disabled` (`:disabled` and `:hover` should be applied automatically via global styles).

You can view the different buttong [in figma](https://www.figma.com/file/cH2o8grThbT0iaUctI7X2d/Core?node-id=706%3A5273).

### Pills

Pills are pretty straightforward

```
<span className="pill recommended">Recommended</span>
<span className="pill optional">Optional</span>
<span className="pill modified">Modified</span>
<span className="pill waived">Waived</span>
```

### Links

Links are similar to buttons

```
<a href="#" className="light">
  Link
</a>
<a href="#" className="active light">
  Active Link
</a>
<a href="#" className="disabled light">
  Disabled Link
</a>
```

Buttons can also be styled like links

```
<button type="button" className="light linkStyles">
  Button as Link
</button>
<button type="button" className="light linkStyles active">
  Active Button as Link
</button>

<button type="button" className="light linkStyles disabled">
  Disabled Button as Link
</button>
```

## Theme Structure

```
id: string;
typography: {
  super1: TypographyStyles;
  super2: TypographyStyles;
  super3: TypographyStyles;
  h1: TypographyStyles;
  h2: TypographyStyles;
  h3: TypographyStyles;
  h4: TypographyStyles;
  h5: TypographyStyles;
  finePrint: TypographyStyles;
  body1: TypographyStyles;
  body2: TypographyStyles;
  body3: TypographyStyles;
  label1: TypographyStyles;
  label2: TypographyStyles;
  label3: TypographyStyles;
  label4: TypographyStyles;
  bodyFont: string;
  headerFont: string;
};
palette: {
  colorName: ColorWeights;
};
pill: {
  styles: {
    fontFamily: string;
    borderRadius: string;
    padding: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    color: string;
  };
  variants: {
    recommended: {
      backgroundColor: palette.color[number];
    };
    optional: {
      backgroundColor: palette.color[number];
    };
    modified: {
      backgroundColor: palette.color[number];
    };
    waived: {
      backgroundColor: palette.color[number];
    };
  };
};
link: {
  base: {
    styles: {
      fontFamily: string;
      fontSize: string;
      padding: string;
      display: string;
      letterSpacing: string;
      textDecoration: string;
      fontWeight: string;
    };
    states: {
      hover: {
        textDecoration: string;
        textUnderlineOffset: string;
        textDecorationThickness: string;
      };
    };
  };
  light: {
    styles: {
      color: string;
      backgroundColor: string
    };
    states: {
      hover: {
        color: string;
        textDecorationColor: string;
        backgroundColor: string;
      };
      active: {
        color: string;
        backgroundColor: string;
      };
      disabled: {
        color: string;
        cursor: 'not-allowed';
        textDecoration: string;
        backgroundColor: string;
      };
    };
  };
  dark: {
    styles: {
      color: string;
      backgroundColor: string
    };
    states: {
      hover: {
        color: string;
        textDecorationColor: string;
        backgroundColor: string;
      };
      active: {
        color: string;
        backgroundColor: string;
      };
      disabled: {
        color: string;
        cursor: 'not-allowed';
        textDecoration: string;
        backgroundColor: string;
      };
    };
  };
};
buttons: {
  base: {
    styles: {
      backgroundColor?: string;
      fontSize?: string;
      lineHeight?: string;
      fontWeight?: string;
      color?: string;
      padding?: string;
      borderRadius?: string;
      border?: string;
      borderColor?: string;
      boxSizing?: 'border-box' | 'content-box';
      cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
    };
    states: {
      hover?: {
        backgroundColor?: string;
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
        color?: string;
        padding?: string;
        borderRadius?: string;
        border?: string;
        borderColor?: string;
        boxSizing?: 'border-box' | 'content-box';
        cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
      };
      active?: {
        backgroundColor?: string;
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
        color?: string;
        padding?: string;
        borderRadius?: string;
        border?: string;
        borderColor?: string;
        boxSizing?: 'border-box' | 'content-box';
        cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
      };
      loading?: {
        backgroundColor?: string;
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
        color?: string;
        padding?: string;
        borderRadius?: string;
        border?: string;
        borderColor?: string;
        boxSizing?: 'border-box' | 'content-box';
        cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
      };
      disabled?: {
        backgroundColor?: string;
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
        color?: string;
        padding?: string;
        borderRadius?: string;
        border?: string;
        borderColor?: string;
        boxSizing?: 'border-box' | 'content-box';
        cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
      };
    };
    variantStyles: {
      mini: {
        fontSize: string;
        lineHeight: string;
        padding: string;
      };
      large: {
        lineHeight: string;
        padding: string;
      };
    };
  };
  light: {
    variants: {
      outlined: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states: ButtonStates;
      };
      text: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states: ButtonStates;
      };
      marketing: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states?: ButtonStates;
      };
    };
  };
  dark: {
    variants: {
      outlined: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states: {
          hover?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          active?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          loading?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          disabled?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
        };
      };
      text: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states: {
          hover?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          active?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          loading?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          disabled?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
        };
      };
      marketing: {
        styles: {
          backgroundColor?: string;
          fontSize?: string;
          lineHeight?: string;
          fontWeight?: string;
          color?: string;
          padding?: string;
          borderRadius?: string;
          border?: string;
          borderColor?: string;
          boxSizing?: 'border-box' | 'content-box';
          cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
        };
        states?: {
          hover?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          active?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          loading?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
          disabled?: {
            backgroundColor?: string;
            fontSize?: string;
            lineHeight?: string;
            fontWeight?: string;
            color?: string;
            padding?: string;
            borderRadius?: string;
            border?: string;
            borderColor?: string;
            boxSizing?: 'border-box' | 'content-box';
            cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait';
          };
        };
      };
    };
  };
};
```
