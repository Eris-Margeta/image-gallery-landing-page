/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			borderWidth: {
				15: "15px",
			},

			colors: {
				glow: "rgba(255, 255, 255, 0.5)",
			},
			boxShadow: {
				highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
			},
			screens: {
				narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
				wide: { raw: "(min-aspect-ratio: 3 / 2)" },
				"taller-than-854": { raw: "(min-height: 854px)" },
			},
		},
	},
	plugins: [],
};
