import fetchAPI from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Story, StoryType } from '$lib/types';

export const csr = false;

const mapStories: Record<StoryType, string> = {
	top: 'news',
	new: 'newest',
	show: 'show',
	ask: 'ask',
	job: 'jobs'
};

export const load: PageLoad<{ stories: Story[]; page: number; type: StoryType }> = async ({
	params,
	url
}) => {
	const type: StoryType = (params.stories as StoryType) || 'top';
	const page = +(url.searchParams.get('page') || 1);
	const endpoint = mapStories[type];
	const stories = await fetchAPI<Story[]>(`${endpoint}?page=${page}`);

	if (!stories) {
		throw error(404, { message: 'Stories not found' });
	}

	return { stories, page, type };
};
