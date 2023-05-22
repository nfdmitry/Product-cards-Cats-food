import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		icons: `${buildFolder}/icons/`,
	},
	src: {
		js: `${srcFolder}/js/*.js`, //app
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		sass: `${srcFolder}/sass/style.sass`,
		html: `${srcFolder}/*.html`,
		icons: `${srcFolder}/icons/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		sass: `${srcFolder}/sass/**/*.sass`,
		html: `${srcFolder}/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
		icons: `${srcFolder}/icons/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
