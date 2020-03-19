module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer')({
			overrideBrowserslist: [
			"last 7 versions",
			 "Android >= 4", 
			 "Firefox >= 20", 
			 "iOS >= 7",
			 "Safari >= 8"
			],
		   flexbox: true,
		  }),
		process.env.NODE_ENV === 'production' &&
			require('@fullhuman/postcss-purgecss')({
				content: ['./public/*.html'],
				defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
			}),
		process.env.NODE_ENV === 'production' && require('cssnano')({
            preset: 'default',
        }),
	],
};
