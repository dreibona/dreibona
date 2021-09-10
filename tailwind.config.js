module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        link: '0 -4px 0 0 rgba(252, 211, 77, .5) inset',
        hover: '0 -24px 0 0 rgba(252, 211, 77, .5) inset',
      },
    },
    fontFamily: {
      PublicSans: [
        'Public Sans',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Noto Sans',
      ],
      JosefinSlab: [
        'Josefin Slab',
        'Georgia',
        'Garamond',
        'Serif',
        'Noto Serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
