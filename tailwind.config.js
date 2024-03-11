/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: { max: '1099.98px' },
      large: '1099.98px',
      tabble: { max: '991.98px' },
      tb: '991.98px',
      mobile: { max: '767.98px' },
      mb: '767.98px',
      mobileSmall: { max: '479.98px' },
      mbs: '479.98px'
    },

    container: {
      padding: '15px',
      center: true
    },

    extend: {
      fontFamily: {
        redhatdispl: ['Red Hat Display', 'sans-serif']
      },
      boxShadow: {
        customeblack: '10px 24px 36px -6px rgba(87,87,87,.231)',
        order: '0px 8px 48px 0px rgba(87,87,87,.248)',
        service: '0px 21px 26px -21px rgba(17 210 89 / 32%)'
      }
    }
  },
  plugins: []
}
