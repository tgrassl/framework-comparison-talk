<script context="module">
	import fetchAPI from '$lib/api';
	export async function load({ params, fetch }) {
		const story = await fetchAPI(fetch, `item/${params.id}`);

		if (story) {
			return {
				props: { story }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	import { navigating } from '$app/stores';
	import Comment from '$lib/Comment.svelte';

	export let story;
</script>

{#if $navigating}
	<div class="news-list-nav">Loading...</div>
{:else}
	<div class="item-view">
		<div class="item-view-header">
			<a href={story.url} target="_blank">
				<h1>{story.title}</h1>
			</a>
			{#if story.domain}
				<span class="host">({story.domain})</span>
			{/if}
			<p class="meta">
				{story.points} points | by
				<a href={`/users/${story.user}`}>{story.user}</a>
				{story.time_ago} ago
			</p>
		</div>
		<div class="item-view-comments">
			<p class="item-view-comments-header">
				{story.comments_count ? story.comments_count + ' comments' : 'No comments yet.'}
			</p>
			<ul class="comment-children">
				{#each story.comments as comment (comment.id)}
					<Comment {comment} />
				{/each}
			</ul>
		</div>
	</div>
{/if}
