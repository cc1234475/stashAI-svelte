import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import metablock from 'rollup-plugin-userscript-metablock';
import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
import MagicString from 'magic-string';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'app',
		file: 'dist/stashai.js'
	},
	plugins: [

		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production
			}),
			compilerOptions: {
				dev: !production
			}
		}),

		css({
			output: 'stashai.css'
		}),
		
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		replace({
			'https:/raw.': 'https://raw.',
			'_STASHMARKER_API_URL': production ? 'https://cc1234-stashtag.hf.space/api/predict' : 'https://cc1234-stashtag.hf.space/api/predict'
		  })

	],
	watch: {
		clearScreen: false
	}
};
