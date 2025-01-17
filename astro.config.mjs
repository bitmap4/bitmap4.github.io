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
					items: [
						{
							label: 'Game Theory @ IIITH',
							autogenerate: { directory: 'clubs/game-theory' },
						},
						{
							label: '0x1337: The Hacking Club',
							autogenerate: {directory: 'clubs/0x1337'}
						}
					]
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'misc' },
				},
			],
		}),
	],
});
