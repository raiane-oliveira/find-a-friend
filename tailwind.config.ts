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
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        input: '0.625rem',
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '5.5xl': '3.375rem',
      },
      gridTemplateColumns: {
        location: 'minmax(20rem, 24.5rem) 1fr',
        petsLocation: 'repeat(auto-fit, minmax(14.5rem, 17.5rem))',
      },
      backgroundImage: {
        'adoption-requirement':
          'linear-gradient(130deg, rgba(247, 95, 96, 0.10) 16.45%, rgba(241, 81, 86, 0.00) 97.3%)',
      },
    },
  },
  plugins: [],
}
export default config
