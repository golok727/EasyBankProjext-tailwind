/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			fontFamily: {
				publicSans: ["Public Sans", "sans-serif"],
			},
			colors: {
				primaryDarkBlue: "hsl(233, 26%, 24%)",
				primaryLimeGreen: "hsl(136, 65%, 51%)",
				primaryBrightCyan: "hsl(192, 70%, 51%)",
				grayishBlue: "hsl(233, 8%, 62%)",
				lightGrayishBlue: "hsl(220, 16%, 96%)",
				veryLightGray: "hsl(0, 0%, 90%)",
				white: "hsl(0, 0%, 100%)",
			},
			backgroundImage: {
				"mobile-intro": "url('/assets/images/bg-into-mobile.svg')",
			},
		},
	},
	plugins: [],
};
