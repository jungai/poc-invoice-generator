/// <reference types="vitest" />

// TODO: wait until vitest/config has definition
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		global: true,
		environment: 'node',
		include: ['./src/**/*.spec.ts'],
	},
});
