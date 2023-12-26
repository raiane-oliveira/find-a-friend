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
        red: {
          150: '#FDECED',
          app: '#E44449',
        },
        slate: {
          25: '#F5F8FA',
          350: '#D3E2E5',
        },
        whatsapp: '#3CDC8C',
      },

      spacing: {
        '16.5': '4.5rem',
        '32.5': '8.5rem',
      },

      borderRadius: {
        '2.5xl': '1.25rem',
        input: '0.625rem',
      },

      fontSize: {
        '5.5xl': '3.375rem',
      },
    },
  },
  plugins: [],
}
export default config
