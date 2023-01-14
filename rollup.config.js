import { rollupPluginHTML } from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { summary } from 'rollup-plugin-summary';

// Configure an instance of @web/rollup-plugin-html
const htmlPlugin = rollupPluginHTML({
	rootDir: './',
	flattenOutput: false,
});

export default {
	input: "index.html",
	plugins: [
		// Entry point for application build; can specify a glob to build multiple
		// HTML files for non-SPA app
		htmlPlugin,
		// Resolve bare module specifiers to relative paths
		resolve(),
		// Minify HTML template literals
		minifyHTML.default(),
		// Minify JS
		terser({
			ecma: 2020,
			module: true,
			warnings: true,
		}),
		// Print bundle summary
		summary(),
		// Optional: copy any static assets to build directory
		copy({
			patterns: ['assets/*.css.map', 'icons/*'],
		}),
	],
	output: {
		dir: 'docs',
		entryFileNames: 'js/[name].js',
		assetFileNames: 'assets/[name][extname]',
		chunkFileNames: 'js/[name].js',

	},
	onwarn(warning, warn) {
		if (warning.code === 'THIS_IS_UNDEFINED') return;
	},
	preserveEntrySignatures: 'strict',
};