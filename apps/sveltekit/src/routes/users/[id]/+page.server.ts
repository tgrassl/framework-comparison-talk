import fetchAPI from '$lib/api';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { User } from '$lib/types';

export const load: PageServerLoad<{ user: User }> = async ({ params }) => {
	const user = await fetchAPI<User>(`user/${params.id}`);

	console.log('Hello from the server!')

	if (!user) {
		throw error(404, { message: 'User not found' });
	}

	return { user };
};
