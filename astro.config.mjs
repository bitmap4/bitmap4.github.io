// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bitmap4.github.io',
	integrations: [
		starlight({
			title: 'bitmap4',
			// customCss: [
			// 	'./src/styles/custom.css',
			// ],
			social: {
				github: 'https://github.com/bitmap4',
				linkedin: 'https://linkedin.com/in/abhyudit-singh',
				email: 'mailto:abhyudit.singh@research.iiit.ac.in',
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
					label: 'Research',
					autogenerate: { directory: 'research' }
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'misc' },
				},
				{
					label: 'CTF Write-Ups',
					autogenerate: { directory: 'writeups' },
				}
			],
		}),
	],
});
