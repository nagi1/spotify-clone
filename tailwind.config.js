module.exports = {
	theme: {
		fontFamily: {
			sans: ['Proxima Nova', 'Arial', 'sans-serif'],
		},

		container: {
			center: true,
		},
		extend: {
			colors: {
				green: '#1DB954',
				dark: '#121212',
				light: '#282828',
				lightest: '#838383',
				darkest: '#191414',
			},
		},
	},
	variants: {
		fontSize: ['responsive', 'hover', 'focus'],
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
		opacity: ['responsive', 'hover', 'focus', 'group-hover'],
	},
	plugins: [],
};
