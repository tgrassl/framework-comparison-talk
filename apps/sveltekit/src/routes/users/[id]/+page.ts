import fetchAPI from '$lib/api';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { User } from '$lib/types';

export const csr = false;

export const load: PageLoad<{ user: User }> = async ({ params }) => {
	const user = await fetchAPI<User>(`user/${params.id}`);

	if (!user) {
		throw error(404, { message: 'User not found' });
	}

	return { user };
};
