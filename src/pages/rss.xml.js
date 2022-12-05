import rss from '@astrojs/rss'

export const get = () =>
	rss({
		title: 'Astro Learner | Blog',
		description: 'My Journey learning Astro',
		site: 'https://ians-astro-blog.netlify.app/',
		items: import.meta.glob('./**/*.md'),
		customData: `<language>en-us</language>`,
	})