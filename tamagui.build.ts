

import type { TamaguiBuildOptions } from '@tamagui/core'

export default {
  components: ['@tamagui/core'], // or ['tamagui']
  config: './tamagui.config.ts',
  outputCSS: './public/tamagui.css',
} satisfies TamaguiBuildOptions
