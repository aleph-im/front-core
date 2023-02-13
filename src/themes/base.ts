import { css, DefaultTheme } from "styled-components"
import { ThemeButton, ThemeColor, ThemeFont, ThemeGradient, ThemeIcon, ThemeTypo } from "./styles"

const round = (n: number, precission: number) => {
  const m = 10 ** precission
  return Math.round((n * m) + Number.EPSILON) / m
}

const pxToRem = (px: number, base: number = 16) => {
  return round(Number(px / base), 3)
}

const color: ThemeColor = {
  base0: '#FFFFFF',
  base1: '#141327',
  base2: '#000000',

  main0: '#029AFF',
  main1: '#5CFFB1',
  main2: '#FECD17',

  success: '#7CFF79',
  warn: '#FFD179',
  error: '#D92446',

  background: '#141327',
  contentBackground: '#141327',
  foreground: '#141327',
  text: '#FFFFFF'
}

const gradient: ThemeGradient = {
  main0: {
    colors: ['#00D1FF', '#0054FF'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #00D1FF 0%, #0054FF 100%)'
  },
  main1: {
    colors: ['#EEFF9C', '#00FFBD'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #EEFF9C 0%, #00FFBD 100%)'
  },
  main2: {
    colors: ['#FFE814', '#FBAE18'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #FFE814 0%, #FBAE18 100%)'
  },
  extra0: {
    colors: ['#9B41FF', '#0054FF'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #9B41FF 0%, #0054FF 100%)'
  },
  extra1: {
    colors: ['#F17E4C', '#98203D'],
    stops: [0, 100],
    deg: 90,
    fn: 'linear-gradient(90deg, #F17E4C 0%, #98203D 90.62%)'
  }
}

// width: 192px;
// height: 192px;
/* box-shadow: 
  inset 0px -82px 68px -64px #4462904D,
  inset 0px 7px 11px -4px #FFFFFFB2,
  inset 0px 1px 40px 0px #DEEFFF33,
  inset 0px 4px 18px 0px #92D2D24D,
  0px -18px 70px 26px #0054FF1C,
  24px 40px 92px 44px #0066FF4D; */

// @note: Divided each px size by 192 to calculate factors
function glowBoxShadow({ w, h, c }: { w: number, h: number, c: string[] }) {
  const r = Math.max(w, h)
  const s = Math.min(w, h)

  return css` 
    box-shadow: 
      inset 0px -82px 68px -64px #4462904D,
      inset 0px 7px 11px -4px #FFFFFFB2,
      inset 0px 1px 40px 0px #DEEFFF33,
      inset 0px 4px 18px 0px #92D2D24D,
      0 ${h * -0.09375}px ${r * 0.36458}px ${s * 0.13541}px ${c[0]},
      ${w * 0.125}px ${h * 0.20833}px ${r * 0.47916}px ${s * 0.22916}px ${c[1]};
  `
}

const effect = {
  glow: {
    min: {
      main0: css`
        ${glowBoxShadow({ w: 97, h: 44, c: ['#0054FF1C', '#0066FF4D'] })}
        /* box-shadow: 
          inset 0px -82px 68px -64px #4462904D,
          inset 0px 7px 11px -4px #FFFFFFB2,
          inset 0px 1px 40px 0px #DEEFFF33,
          inset 0px 4px 18px 0px #92D2D24D,
          0px -18px 70px 26px #0054FF1C,
          24px 40px 92px 44px #0066FF4D; */
      `,
      main1: css`
        ${glowBoxShadow({ w: 97, h: 44, c: ['#00FFBD2E', '#00FFBD2E'] })}
        /* box-shadow: 
          inset 0px -82px 68px -64px #4462904D,
          inset 0px 7px 11px -4px #FFFFFF,
          inset 0px 4px 18px 0px #92D2AF4D,
          inset 0px 98px 100px -48px #00FFBD1A,
          0px -18px 50px 26px #00FFBD2E,
          34px 60px 102px 44px #00FFBD2E; */
      `,
      main2: css`
        ${glowBoxShadow({ w: 97, h: 44, c: ['#FFC7002E', '#FF99002E'] })}
        /* box-shadow: 
          inset 0px -82px 68px -64px #FFCC4933,
          inset 0px 7px 11px -4px #FFFFFF,
          inset 0px 1px 40px 0px #FFEEDE33,
          inset 0px 4px 18px 0px #D2C4924D,
          inset 0px 38px 70px -48px #FFF50014,
          0px -18px 60px 26px #FFC7002E,
          34px 60px 122px 44px #FF99002E; */
      `
    }
  }
}

const font: ThemeFont = {
  url: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;1,400;1,700&family=Source+Code+Pro:wght@400;700&family=Rubik:ital,wght@0,500;1,800&display=swap',
  family: {
    head: '\'Rubik\', sans-serif',
    body: '\'Public Sans\', sans-serif',
    code: '\'Source Code Pro\', monospace',
  },
  size: {
    // ---------
    xl: pxToRem(28),
    lg: pxToRem(24),
    md: pxToRem(18),
    sm: pxToRem(16),
    xs: pxToRem(10),
    // ---------
  }
}

const commonHeaderFont = {
  family: font.family.head,
  style: 'italic',
  weight: 800
}

const typo: ThemeTypo = {
  h1: {
    ...commonHeaderFont,
    size: pxToRem(72),
  },
  h2: {
    ...commonHeaderFont,
    size: pxToRem(64),
  },
  h3: {
    ...commonHeaderFont,
    size: pxToRem(48),
  },
  h4: {
    ...commonHeaderFont,
    size: pxToRem(40),
  },
  h5: {
    ...commonHeaderFont,
    size: pxToRem(36),
  },
  h6: {
    ...commonHeaderFont,
    size: pxToRem(32),
  },
  h7: {
    ...commonHeaderFont,
    size: pxToRem(24),
  },
  header: {
    ...commonHeaderFont,
    size: pxToRem(128),
  },
  body: {
    family: font.family.body,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
  },
  body2: {
    family: font.family.body,
    style: 'italic',
    weight: 400,
    size: font.size.sm,
  },
  body3: {
    family: font.family.body,
    style: 'italic',
    weight: 700,
    size: font.size.sm,
  },
  code: {
    family: font.family.code,
    style: 'normal',
    weight: 400,
    size: font.size.sm,
  },
  code2: {
    family: font.family.code,
    style: 'normal',
    weight: 700,
    size: font.size.sm,
  },
}

const icon: ThemeIcon = {
  size: {
    xl: pxToRem(24),
    lg: pxToRem(16),
    md: pxToRem(14),
    sm: pxToRem(12),
    xs: pxToRem(8),
  }
}

const button: ThemeButton = {
  size: {
    regular: pxToRem(18),
    big: pxToRem(24),
  }
}

const theme: DefaultTheme = {
  name: 'Base',
  color,
  font,
  typo,
  icon,
  button,
  gradient,
  effect
}

export default theme
