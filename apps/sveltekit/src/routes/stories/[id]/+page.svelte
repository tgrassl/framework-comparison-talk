<script lang="ts">
	import { navigating } from '$app/stores';
	import Comment from '$lib/Comment.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.story.title} | Svelte Hacker News</title>
</svelte:head>

{#if $navigating}
	<div class="news-list-nav">Loading...</div>
{:else}
	<div class="item-view">
		<div class="item-view-header">
			<a href={data.story.url} target="_blank" rel="noreferrer">
				<h1>{data.story.title}</h1>
			</a>
			{#if data.story.domain}
				<span class="host">({data.story.domain})</span>
			{/if}
			<p class="meta">
				{data.story.points} points | by
				<a href={`/users/${data.story.user}`}>{data.story.user}</a>
				{data.story.time_ago} ago
			</p>
		</div>
		<div class="item-view-comments">
			<p class="item-view-comments-header">
				{data.story.comments_count ? data.story.comments_count + ' comments' : 'No comments yet.'}
			</p>
			<ul class="comment-children">
				{#each data.story.comments as comment (comment.id)}
					<Comment {comment} />
				{/each}
			</ul>
		</div>
	</div>
{/if}
