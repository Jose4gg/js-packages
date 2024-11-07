import { useTheme } from 'styled-components';

import { ColorWeights, Palette as IPalette } from 'types';

import { Container } from './Palette.styled';

const buildColorTiles = (colors: ColorWeights) => {
  const colorTiles = Object.keys(colors).map((color) => {
    const colorValue = colors[color as keyof typeof colors];
    return (
      <div key={color} className="color">
        <p>
          {color} ({colorValue})
        </p>

        <div
          style={{
            backgroundColor: colorValue,
            height: '50px',
            width: '50px',
          }}
        />
      </div>
    );
  });
  return colorTiles;
};

const buildPalette = (palette: IPalette) => {
  return Object.keys(palette).map((colorCategory) => (
    <div key={colorCategory}>
      <h3>{colorCategory}</h3>
      <div>
        {buildColorTiles(palette[colorCategory as keyof typeof palette])}
      </div>
    </div>
  ));
};

const Palette = () => {
  const theme = useTheme();

  return <Container>{buildPalette(theme.palette)}</Container>;
};

export default Palette;
