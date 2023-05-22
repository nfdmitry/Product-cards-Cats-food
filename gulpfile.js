import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
};

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/sass.js';
import { js } from './gulp/tasks/js.js';
import { icons } from './gulp/tasks/icons.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

function watcher() {
	gulp.watch(path.watch.icons, icons);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.sass, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(
	fonts,
	gulp.parallel(html, scss, js, icons, images)
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

gulp.task('default', dev);
