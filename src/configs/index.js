const breakPoints = {
  mobileS: 375,
  mobile: 576,
  tablet: 768,
  desktop: 1200,
}

const mediaQuery = (width) => `@media screen and (max-width: ${width}px)`;

export const media = {
  mobileS: mediaQuery(breakPoints.mobileS),
  mobile: mediaQuery(breakPoints.mobile),
  tablet: mediaQuery(breakPoints.tablet),
  desktop: mediaQuery(breakPoints.desktop),
}

export const colors = {
  primary_peach: '#E7816B',
  primary_black: '#1D1C1E',
  primary_white: '#FFFFFF',
  secondary_peach: "#FFAD9B",
  secondary_dark: "#333136",
  secondary_light: "#F1F3F5DB",
}