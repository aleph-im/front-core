import { css, FlattenSimpleInterpolation } from 'styled-components'

export type GlowOpts = { width?: number; height?: number; offset?: boolean }

export function calculateBoxShadowPossition(
  bs: Record<string, number[]>,
  opts?: GlowOpts,
): Record<string, string> {
  const bss: Record<string, string> = {}

  if (opts?.width !== undefined || opts?.height !== undefined) {
    const w = opts.width || 0
    const h = opts.height || 0
    const r = Math.max(w, h)
    const s = Math.min(w, h)

    if (opts?.offset === true) {
      for (const [k, v] of Object.entries(bs)) {
        bss[k] = `calc(${v[0]}em + ${w * v[0]}px) calc(${v[1]}em + ${h * v[1]
          }px) calc(${v[2]}em + ${r * v[2]}px) calc(${v[3]}em + ${s * v[3]}px)`
      }
    } else {
      for (const [k, v] of Object.entries(bs)) {
        bss[k] = `${v[0] * w}px ${v[1] * h}px ${v[2] * r}px ${v[3] * s}px`
      }
    }
  } else {
    for (const [k, v] of Object.entries(bs)) {
      bss[k] = `${v[0]}em ${v[1]}em ${v[2]}em ${v[3]}em`
    }
  }

  return bss
}

export function getGlowMaxEffectCss(
  color: string,
  opts?: GlowOpts,
): FlattenSimpleInterpolation | undefined {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 39px 56px -36px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.2031, 0.2917, -0.1875],
    s4: [0, 0.0052, 0.2083, 0],
    s5: [0, 0.0208, 0.0938, 0],
    s6: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0.2552, 0.3385, 0.6458, -0.1146],
  }

  const bss = calculateBoxShadowPossition(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-MAX/blue */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffffff80, inset ${bss.s4} #deefff33,
          inset ${bss.s5} #92d2d24d, inset ${bss.s6} #00d1ff2e,
          ${bss.sc1} #0054ff4f, ${bss.sc2} #0066ff99;
      `
    case 'main1':
      return css`
        /* GLOW-MAX/green */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffffff80, inset ${bss.s4} #defff533,
          inset ${bss.s5} #92d2af4d, inset ${bss.s6} #00ffbd2e,
          ${bss.sc1} #00ffbd61, ${bss.sc2} #00ffbd47;
      `
    case 'main2':
      return css`
        /* GLOW-MAX/orange */
        box-shadow: inset ${bss.s1} #ffcc494d, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffffff80, inset ${bss.s4} #ffeede33,
          inset ${bss.s5} #d2c4924d, inset ${bss.s6} #fff5002e,
          ${bss.sc1} #ffc70061, ${bss.sc2} #ff990047;
      `
    case 'extra0':
      return css`
        /* GLOW-MAX/purple */
        box-shadow: inset ${bss.s1} #6044904d, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffffff80, inset ${bss.s4} #e3deff33,
          inset ${bss.s5} #9a92d24d, inset ${bss.s6} #caaffc4d,
          ${bss.sc1} #9c41ffb2, ${bss.sc3} #9c41ff4d;
      `
    case 'extra1':
      return css`
        /* GLOW-MAX/red */
        box-shadow: inset ${bss.s1} #9044444d, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffffff80, inset ${bss.s4} #fff2de33,
          inset ${bss.s5} #d2b5924d, inset ${bss.s6} #fcc6af4d,
          ${bss.sc1} #f66262b2, ${bss.sc3} #ff41b34d;
      `
  }
}

export function getGlowMinEffectCss(
  color: string,
  opts?: GlowOpts,
): FlattenSimpleInterpolation | undefined {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.0052, 0.2083, 0],
    s4: [0, 0.0208, 0.0938, 0],
    s5: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0, 0.1979, 0.3646, -0.25],
  }

  const bss = calculateBoxShadowPossition(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-MIN/blue */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffffb2,
          inset ${bss.s3} #deefff33, inset ${bss.s4} #92d2d24d,
          ${bss.sc1} #0054ff1c, ${bss.sc2} #0066ff4d;
      `
    case 'main1':
      return css`
        /* GLOW-MIN/green */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffff,
          inset ${bss.s4} #92d2af4d, inset ${bss.s5} #00ffbd1a,
          ${bss.sc1} #00ffbd2e, ${bss.sc2} #00ffbd2e;
      `
    case 'main2':
      return css`
        /* GLOW-MIN/orange */
        box-shadow: inset ${bss.s1} #ffcc4933, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffeede33, inset ${bss.s4} #d2c4924d,
          inset ${bss.sc3} #fff50014, ${bss.sc1} #ffc7002e, ${bss.sc2} #ff99002e;
      `
  }
}

export function getGlowHoverEffectCss(
  color: string,
  opts?: GlowOpts,
) {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.0052, 0.2083, 0],
    s4: [0, 0.0208, 0.0938, 0],
    s5: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0, 0.1979, 0.3646, -0.25],
  }

  const bss = calculateBoxShadowPossition(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-hover/blue */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffffb2,
          inset ${bss.s3} #deefff33, inset ${bss.s4} #92d2d24d,
          ${bss.sc1} #0054ff36, ${bss.sc2} #0066ff66;
      `
    case 'main1':
      return css`
        /* GLOW-hover/green */
        box-shadow: inset ${bss.s1} #4462904d, inset ${bss.s2} #ffffff,
          inset ${bss.s4} #92d2af4d, inset ${bss.s5} #00ffbd1a,
          ${bss.sc1} #00ffbd47, ${bss.sc2} #00ffbd47;
      `
    case 'main2':
      return css`
        /* GLOW-hover/orange */
        box-shadow: inset ${bss.s1} #ffcc4933, inset ${bss.s2} #ffffff,
          inset ${bss.s3} #ffeede33, inset ${bss.s4} #d2c4924d,
          inset ${bss.sc3} #fff50014, ${bss.sc1} #ffc70047, ${bss.sc2} #ff990047;
      `
  }
}
