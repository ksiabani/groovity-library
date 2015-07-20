'use strict';

module.exports = {
	app: {
		title: 'groovity-library',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/font-awesome/css/font-awesome.css',
                'public/lib/ionicons/css/ionicons.css',
			  	'public/lib/ng-mfb/mfb/dist/mfb.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/videogular/videogular.js',
				'public/lib/ngInfiniteScroll/build/ng-infinite-scroll.js',
				'public/lib/color-thief/src/color-thief.js',
				'public/lib/angular-colorthief/angular-colorthief.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/lib/ng-mfb/src/mfb-directive.js',
				'public/lib/angular-morph/dist/angular-morph.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
