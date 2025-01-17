// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'bitmap4',
			social: {
				github: 'https://github.com/bitmap4',
			},
			sidebar: [
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Club Stuff',
					autogenerate: { directory: 'clubs' },
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'misc' },
				},
			],
		}),
	],
});
