import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F15156',
        secondary: {
          400: '#114A80',
          500: '#0D3B66',
        },
        action: '#F4D35E',
        white: {
          100: '#F5F8FA',
        },
        red: {
          150: '#FDECED',
          app: '#E44449',
        },
        slate: {
          350: '#D3E2E5',
        },
        whatsapp: '#3CDC8C',
      },
    },
  },
  plugins: [],
}
export default config
