/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build'
	},
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgrPlugin()
	],
	server: {
		open: true,
	},
	test: {
		coverage: {
			all: true,
			include: ['src/app/**/*.tsx'],
		},
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.ts',
	},
});