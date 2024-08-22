/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Spline Sans Variable', ...defaultTheme.fontFamily.serif],
				mono: ['Spline Sans Mono Variable', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				'bg-primary': '#FCFEFB',
				'bg-secondary': '#F5F5F5',
				'primary': '#282727',
				'secondary': '#2E4F61',
				'accent': '#EB5E28',
				'starla-background': '#F7F8FA',
				'starla-black': '#00121F',
				'starla-dblue': '#00224D',
				'starla-blue': '#175C9A',
				'starla-bgray': '#6C95C1',
				'starla-white': '#F5F5F5',
				'starla-accent': '#CC3B3B',
				'starla-soft-accent': '#136229',
				'starla-light': '#B5E4FD',
			},
		},
	},
	plugins: [],
}
