const primaryFont = 'Jost, sans-serif';
const secondaryFont = 'Signika, serif';

const spaces = {
  '3xs': 2,
  '2xs': 4,
  x: 8,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 72,
  '7xl': 96,
  '8xl': 128,
};

const fontSizes = {
  xxsmall: 18,
  xsmall: 20,
  small: 24,
  xmedium: 28,
  medium: 32,
  large: 40,
  xlarge: 60,
  '2xlarge': 76,
  '3xlarge': 90,
};

const weights = {
  bold: 600,
  medium: 400,
  regular: 300,
};

// Colors palette
const black = '#030304';
const white = '#FFFFFF';
const darkBlue = '#242F9B';
const lightBlue = '#DBDFFD';
const primaryAccent = '#646FD4';
const secondaryAccent = '#9BA3EB';

export const baseTheme = {
  primaryFont,
  secondaryFont,
  spaces,
  fontSizes,
  weights,
  colors: {
    black,
    white,
    darkBlue,
    lightBlue,
    primaryAccent,
    secondaryAccent,
  },
};
