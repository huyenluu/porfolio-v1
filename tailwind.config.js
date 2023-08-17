/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            content: {
                link: 'url("/pattern-rings.svg")',
            },
            colors: {
                black: '#151515',
                'grey-dark': '#242424',
                green: '#4EE1A0',
                'grey-light': '#D9D9D9',
                grey: '#969696',
                red: '#FF6F5B',
            },
            fontFamily: {
                burton: 'burtons',
                grotesk: '--font-grotesk',
            },
            fontSize: {
                // p: ['1.125rem','1.75rem'],
                p: [
                    '1rem',
                    {
                        lineHeight: '1.625rem',
                        fontWeight: '500',
                    },
                ],
                button: [
                    '.85rem',
                    {
                        lineHeight: '1.625rem',
                        letterSpacing: '0.143rem',
                        fontWeight: '700',
                    },
                ],
                'heading-s': [
                    '1.5rem',
                    {
                        lineHeight: '1.625rem',
                        letterSpacing: '0.143rem',
                        fontWeight: '700',
                    },
                ],
                'heading-m': [
                    '2.5rem',
                    {
                        lineHeight: '100%',
                        letterSpacing: '-0.071rem',
                        fontWeight: '700',
                    },
                ],
                'heading-l': [
                    '3rem',
                    {
                        lineHeight: '116.667%',
                        letterSpacing: '-0.09375rem',
                        fontWeight: '700',
                    },
                ],
                'heading-xl': [
                    '4.5rem',
                    {
                        lineHeight: '100%',
                        letterSpacing: '-0.128rem',
                        fontWeight: '700',
                    },
                ],
                'heading-2xl': [
                    '5.5rem',
                    {
                        lineHeight: '100%',
                        letterSpacing: '-0.155rem',
                        fontWeight: '700',
                    },
                ],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    xl: '4rem',
                },
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1240px',
                },
            },
            backgroundImage: {
                'green-gradient': `linear-gradient(to right, #4EE1A0 75%, #4EE1A0 75%)`,
                'green-bg-gradient': `linear-gradient(to right, #8360c3, #4EE1A0)`,
                'grey-gradient': `linear-gradient(180deg, rgba(36,36,36,0) 0%, #242424 100%)`,
                'profile-pic': 'url(/hl-profile.webp)',
            },
        },
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
};
