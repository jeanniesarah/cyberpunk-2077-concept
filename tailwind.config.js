const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
            '2xl': '1440px',
        },
        extend: {
            colors: {
                'primary-color-1': '#F8EE02',
                'primary-color-2': '#FF003C',
                'primary-color-3': '#121211',
            },
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                adventpro: ['"Advent Pro"', ...defaultTheme.fontFamily.sans],
                orbitron: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
                oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': ['0.75rem', { lineHeight: '1rem' }],
                xs: ['0.875rem', { lineHeight: '1rem' }],
                sm: ['15px', { lineHeight: '1.25rem' }],
                '2xl': ['1.625rem', { lineHeight: '2rem' }],
                '8.5xl': ['7.5rem', { lineHeight: '1' }],
            },
            width: {},
            spacing: {
                7.5: '1.875rem',
                12.5: '3.125rem',
                13: '3.25rem',
                15: '3.75rem',
                18: '4.5rem',
                25: '6.25rem',
            },
            maxWidth: {
                short: '52ch',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            dropShadow: {
                'primary-color-1': '0 4px 14px rgba(248, 238, 2, 1)',
            },
        },
    },
    plugins: [],
};
