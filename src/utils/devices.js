export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export default {
  mobileS: `(max-width: ${sizes.mobileS}px)`,
  mobileM: `(max-width: ${sizes.mobileM}px)`,
  mobileL: `(max-width: ${sizes.mobileL}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
  laptopL: `(max-width: ${sizes.laptopL}px)`,
  desktop: `(max-width: ${sizes.desktop}px)`,
  desktopL: `(max-width: ${sizes.desktop}px)`,
}
