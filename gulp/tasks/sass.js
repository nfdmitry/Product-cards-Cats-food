import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.sass, { sourcemaps: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SASS',
					message: 'Error: <%= error.message %>',
					sound: 'Blow',
				})
			)
		)
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(groupCssMediaQueries())
		.pipe(
			webpcss({
				webpClass: '.webp',
				noWebpClass: '.no-webp',
			})
		)
		.pipe(
			autoPrefixer({
				grid: true,
				overrideBrowserslist: ['last 3 versions'],
				cascade: true,
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};
