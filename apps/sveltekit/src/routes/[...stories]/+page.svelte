<script lang="ts">
	import Story from '$lib/Story.svelte';
	import { navigating } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;
	export let { page, type, stories } = data;
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
				</span>
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
