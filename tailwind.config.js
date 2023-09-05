module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '300': '42rem',
        '400': '50rem',
        '450': '58rem',
        '500': '65rem',
        '600': '68rem',
        '700': '75rem',

      }
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': { 
          fontFamily: {
            display: ['PT Mono, monospace'],
            body: ['Inter, sans-serif'],
          },
          'primary': '#000000',           /* Primary color */
          'primary-focus': '#9945FF',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

        'secondary': '#808080',
        'secondary-focus': '#f3cc30',
        'secondary-content': '#ffffff',

        'accent': '#33a382',
        'accent-focus': '#2aa79b',
        'accent-content': '#ffffff',

        'neutral': '#2b2b2b',
        'neutral-focus': '#2a2e37',
        'neutral-content': '#ffffff',

        'base-100': '#000000',
        'base-200': '#35363a',
        'base-300': '#222222',
        'base-content': '#f9fafb',
        'chbcolor': '#29d698',


        'info': '#2094f3',
        'success': '#009485',
        'warning': '#ff9900',
        'error': '#ff5724', /* Error */
      },
    },
    // backup themes:
    // 'dark',
    // 'synthwave'
  ],
  base: true,
  utils: true,
  logs: true,
  rtl: false,
}
}