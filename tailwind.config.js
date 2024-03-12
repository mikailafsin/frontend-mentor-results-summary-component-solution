/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "primary-light-red": "hsl(0, 100%, 67%)",
                "primary-orangey-yellow": "hsl(39, 100%, 56%)",
                "primary-green-teal": "hsl(166, 100%, 37%)",
                "primary-cobalt-blue": "hsl(234, 85%, 45%)",
                "attribution-link": "hsl(228, 45%, 44%)",
                "gradients-light-slate-blue": "hsl(252, 100%, 67%)",
                "gradients-light-royal-blue": "hsl(241, 81%, 54%)",
                "gradients-violet-blue": "hsla(256, 72%, 46%, 1)",
                "gradients-persian-blue": "hsla(241, 72%, 46%, 0)",
                "neutral-white": "hsl(0, 0%, 100%)",
                "neutral-pale-blue": "hsl(221, 100%, 96%)",
                "neutral-light-lavender": "hsl(241, 100%, 89%)",
                "neutral-dark-gray-blue": "hsl(224, 30%, 27%)",
            },
            fontFamily: {
                hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
};
