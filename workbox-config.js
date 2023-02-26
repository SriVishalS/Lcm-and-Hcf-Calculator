module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};