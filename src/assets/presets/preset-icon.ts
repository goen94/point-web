import { type Preset, presetIcons } from 'unocss'

export default function presetIcon(): Preset {
  return {
    name: 'preset-icon',
    presets: [
      presetIcons({
        scale: 1.2,
        cdn: 'https://esm.sh/'
      }),
    ]
  }
}
