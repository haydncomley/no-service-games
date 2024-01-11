/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build'
	},
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgrPlugin(),
		VitePWA({ registerType: 'autoUpdate' })
	],
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