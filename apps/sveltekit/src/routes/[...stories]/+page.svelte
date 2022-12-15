<script context="module">
	import fetchAPI from '$lib/api';

	export const hydrate = false;

	const mapStories = {
		top: 'news',
		new: 'newest',
		show: 'show',
		ask: 'ask',
		job: 'jobs'
	};
	export async function load({ params, fetch, url }) {
		const type = params.stories || 'top';
		const page = +(url.searchParams.get('page') || 1);
		const endpoint = mapStories[type];
		const stories = await fetchAPI(fetch, `${endpoint}?page=${page}`);

		if (stories) {
			return {
				props: { stories, page, type }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	import Story from '$lib/Story.svelte';
	import { navigating } from '$app/stores';

	export let stories;
	export let page;
	export let type;
</script>

<div class="news-view">
	{#if !$navigating}
		<div class="news-list-nav">
			{#if page > 1}
				<a class="page-link" href={`/${type}?page=${page - 1}`} aria-label="Previous Page">
					{'<'} prev
				</a>
			{:else}
				<span class="page-link disabled" aria-disabled="true">
					{'<'} prev
				</span>
			{/if}
			<span>page {page}</span>
			{#if stories && stories.length >= 29}
				<a class="page-link" href={`/${type}?page=${page + 1}`} aria-label="Next Page">
					more {'>'}
				</a>
			{:else}
				<span class="page-link disabled" aria-disabled="true">
					more {'>'}
				</span>}
			{/if}
		</div>
		<main class="news-list">
			{#if stories}
				<ul>
					{#each stories as story (story.id)}
						<Story {story} />
					{/each}
				</ul>
			{/if}
		</main>
	{:else}
		<div class="news-list-nav">Loading...</div>
	{/if}
</div>
