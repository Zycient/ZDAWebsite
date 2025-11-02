/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        logoBtnDark: 'linear-gradient(240deg, #2284ff, #0b62ff 25%, #ff0048 75%, #ff0037)',
        logoBtnLight: 'linear-gradient(240deg, #2284ff, #0b62ff 25%, #ff0059 75%, #ff0048)',
        logoBtnHelperDark: 'linear-gradient(189deg, #1779e4, #0057e4 25%, #e4003d 75%, #e4002c)',
        logoBtnHelperLight: 'linear-gradient(189deg, #2d8fff, #166dff 25%, #ff0b53 75%, #ff0b42)',
        logoBtnHelperActiveDark: 'linear-gradient(187deg, #4b0628, #881646 25%, #e4003d 75%, #e4002c)',
        logoBtnHelperActiveLight: 'linear-gradient(187deg, #85c8ff, #4ca9ff 25%, #2284ff 75%, #0b62ff)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        zdaBG: {
          dark: '#0b0a0d',
          lessDarkCard: '#131215',
          darkCard: '#0f0e11',
          darkerCard: '#0e0d10',
          darkestCard: '#0d0b0f',
          extraDark: '#09080b',
          light: '#fafafa',
          lightCard: '#f0f0f0',
          lighterCard: '#f5f5f5',
        },
        zdaBtn: {
          dark: '#1b1a1d',
          darkerCard: '#1f1e21',
          darkCard: '#212023',
          darkHover: '#2e2d30',
          light: '#eaeaea',
          lightCard: '#e8e8e8',
          lightHover: '#d5d5d5',
        },
        zdaText: {
          dark: '#19141a', // ? also ZeroDayAnubis Long Text Logo
          darker: '#161117',
          light: '#fafafafa', // ? also ZeroDayAnubis Long Text Logo
          lighter: '#fdfdfd',
        },
        zdaRed: { // ? DEPRECATED
          50: '#fdf4f2',
          100: '#fbe3e0',
          200: '#f7cdc9',
          300: '#f2a1a3',
          400: '#ea6c76',
          450: '#e84c56',
          500: '#e43f58',
          550: '#d93a53',
          600: '#ff0037',
          650: '#ff002f',
          700: '#c61044',
          800: '#a21043',
          900: '#881646',
          950: '#4b0628',
          1000: '#190207',
        },
        zdaRedpink: { // ? DEPRECATED
          50: '#ffe5f3',
          100: '#ffd6eb',
          200: '#ffbddd',
          300: '#ff8fbc',
          400: '#ff528e',
          450: '#ff326e',
          500: '#ff1a62',
          550: '#fa155d',
          600: '#ff0048',
          650: '#f70040',
          700: '#c7002b',
          800: '#a30021',
          900: '#880218',
          950: '#470001',
          1000: '#15040b',
        },
        zdaBlue: {
          50: '#edf7ff',
          100: '#d6eaff',
          200: '#b7ddff',
          300: '#85c8ff',
          400: '#4ca9ff',
          450: '#49a1ff',
          500: '#2284ff',
          550: '#166ae8',
          600: '#0b62ff',
          650: '#035af7',
          700: '#044af1',
          800: '#0b3cc2',
          900: '#0f3590',
          950: '#0f245c',
          1000: '#031027',
        },
        zdaNightshade: { // TODO: continue to test/tweak
          50: '#f6F4Ff', //
          100: '#EcE7Ff', //
          200: '#D9D2Fb', //
          300: '#C6B9Fd', //
          400: '#AF97F8', //
          500: '#9774ef', //
          600: '#9162f0', //
          650: '#895ae8', //
          700: '#7C52D4', //
          800: '#6246A4', //
          900: '#473780', //
          950: '#2A2244', //
          1000: '#0D0526', //
        },
      },
      boxShadow: { // TODO: make dedicated -nightshade variables and test/tweak
        'theme-menu-dropdown-light': '0px 2px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
        // 'theme-menu-dropdown-dark-blue': '1px 1px 38px -4px rgba(237, 247, 255, 0.25), 0px 3px 20px -15px rgba(237, 247, 255, 0.15)', // zdaBlue-50
        'theme-menu-dropdown-dark-blue': '1px 1px 38px -4px rgba(237, 247, 255, 0.25), 0px 3px 20px -15px rgba(244, 241, 252, 0.15)', // zdaNightshade-50
        'card-writings-light': '15px 15px 20px #e9e9e9cc, -15px -15px 20px #ffffffcc',
        'card-writings-light-hover': '30px 30px 44px #e9e9e9cc, -30px -30px 44px #ffffffcc',
        'card-writings-dark': '11px 10px 16px #0e0d0ec9, -11px -10px 16px #09080bc9',
        'card-writings-dark-hover': '26px 25px 32px #0e0d0ec9, -26px -25px 32px #09080bc9',
      },
      dropShadow: { // TODO: make dedicated -nightshade variables and test/tweak
        'btn-light': '0px 6px 4px #19141a2a',
        'btn-dark': '0px 4px 6px #606060b5',
        'btn-dark-sm': '0px 3px 4px #60606090',
        'btn-dark-neutral': '0px 4px 3px #0a090c7a',
        // 'card-light-blue': '-6px 6px 5px #2284ff24', // zdaBlue-500
        'card-light-blue': '-6px 6px 5px #ab7ed624', // zdaNightshade-500
        'card-dark': '-8px 6px 4px #1f29371a',
        // 'card-sm-light-blue': '0px 6px 5px #2284ff24', // zdaBlue-500
        'card-sm-light-blue': '0px 6px 5px #ab7ed624', // zdaNightshade-500
        'card-sm-dark': '0px -8px 8px #1f29379a',
        // 'card-sm-dark-blue': '0px 2px 10px #2284ff1a', // zdaBlue-500
        'card-sm-dark-blue': '0px 2px 10px #ab7ed61a', // zdaNightshade-500
        'card-logo-light': '0px 4px 1px #60606040',
        'card-logo-dark': '0px 4px 4px #606060c0',
        'logo-light': '14px 12px 5px #19141a24',
        'logo-dark': '0px 0px 25px #60606012',
        'logo-blue-light': '12px 10px 8px #2284ff99',
        'logo-blue-dark': '0px 0px 16px #2284ff99',
        'logo-kofi': '6px 4px 8px #ff5a2a85',
        'logo-kofi-dark': '3px 2px 6px #fffaca80',
        'name-sm-light': '-2px 0 1px #19141a2a',
        'name-sm-dark': '-4px 0 3px #6060607a',
        'z-logo-hover-light': '0 0 5px #ff0048a0',
        'z-logo-hover-dark': '0 0 5px #b7ddfff0',
      },
      fontFamily: {
        'outfit': 'Outfit',
        'plusjakartasans': 'Plus Jakarta Sans',
        'urbanist': 'Urbanist',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2500px',
      '4xl': '3000px',
      '4k': '3840px',
      '5k': '5120px',
    },
  },
  plugins: [],
}

