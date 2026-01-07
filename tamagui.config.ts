

import { config as defaultConfig } from '@tamagui/config/v3'
import { createTamagui, createFont } from 'tamagui'

// Configuration de la police Poppins
// const poppinsFont = createFont({
//   family: 'var(--font-poppins)',
//   size: defaultConfig.fonts.body.size,
//   lineHeight: defaultConfig.fonts.body.lineHeight,
//   weight: defaultConfig.fonts.body.weight,
//   letterSpacing: defaultConfig.fonts.body.letterSpacing,
//   face: {
//     100: { normal: 'Poppins-Thin' },
//     200: { normal: 'Poppins-ExtraLight' },
//     300: { normal: 'Poppins-Light' },
//     400: { normal: 'Poppins-Regular' },
//     500: { normal: 'Poppins-Medium' },
//     600: { normal: 'Poppins-SemiBold' },
//     700: { normal: 'Poppins-Bold' },
//     800: { normal: 'Poppins-ExtraBold' },
//     900: { normal: 'Poppins-Black' },
//   },
// })

const poppinsFont = createFont({
  family: 'var(--font-poppins)', // ✅ Utilise la variable CSS de Next.js
  size: defaultConfig.fonts.body.size,
  lineHeight: defaultConfig.fonts.body.lineHeight,
   weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400', // normal
    5: '500',
    6: '600',
    7: '700', // bold
    8: '800',
    9: '900',
  },
  letterSpacing: defaultConfig.fonts.body.letterSpacing,
  // ⚠️ IMPORTANT : Pour Next.js, on ne définit PAS 'face'
  // La police est gérée par next/font via la variable CSS
})

// Police 2 : Inter (pour le corps de texte)
const interFont = createFont({
  family: 'var(--font-inter)',
  size: defaultConfig.fonts.body.size,
  lineHeight: defaultConfig.fonts.body.lineHeight,
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: defaultConfig.fonts.body.letterSpacing,
})


const monsteratFont = createFont({
  family: 'var(--font-monsterat)',
  size: defaultConfig.fonts.body.size,
  lineHeight: defaultConfig.fonts.body.lineHeight,
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: defaultConfig.fonts.body.letterSpacing,
})


// Étendre la configuration par défaut avec vos personnalisations
const config = createTamagui({
  ...defaultConfig,

  // Remplacer uniquement les polices
  fonts: {
    ...defaultConfig.fonts,
    heading: poppinsFont,
    body: poppinsFont,
  },

  // Optionnel : Personnaliser les tokens de couleur
  tokens: {
    ...defaultConfig.tokens,
    color: {
      ...defaultConfig.tokens.color,
      // Ajoutez vos couleurs personnalisées ici
      primary: '#003366',
      primaryLight: '#5AC8FA',
      primaryDark: '#0051D5',
      secondary: '#FF9500',
      // Les autres couleurs par défaut restent intactes
    },
  },

  // Optionnel : Personnaliser les thèmes
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      // Personnalisez uniquement ce dont vous avez besoin
      primary: '#600797',
      secondary: '#FF9500',
    },
    dark: {
      ...defaultConfig.themes.dark,
      primary: '#600797',
      secondary: '#FFCC00',
    },
  },
})

export default config
export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}