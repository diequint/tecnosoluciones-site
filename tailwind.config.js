/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
				'carousel': 'carousel 20s linear infinite',
				'carousel-reverse': 'carousel-reverse 20s linear infinite',
			},
			keyframes: {
				carousel: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'carousel-reverse': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [],
}

