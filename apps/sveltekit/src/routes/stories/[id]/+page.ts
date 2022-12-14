import fetchAPI from '$lib/api';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { Story } from '$lib/types';

export const ssr = false;

export const load: PageLoad<{ story: Story }> = async ({ params }) => {
	const story = await fetchAPI<Story>(`item/${params.id}`);

	console.log('Hello from the client!');

	if (!story) {
		throw error(404, { message: 'Story not found' });
	}

	return { story };
};
