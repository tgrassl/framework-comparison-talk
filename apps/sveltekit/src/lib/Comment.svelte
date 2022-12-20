<script lang="ts">
	import type { Comment } from '$lib/types';

	const pluralize = (n: number) => n + (n === 1 ? ' reply' : ' replies');

	export let comment: Comment;
	let open = true;
</script>

<li class="comment">
	<div class="by">
		<a href={`/users/${comment.user}`}>{comment.user}</a>
		{comment.time_ago} ago
	</div>
	<div class="text">{@html comment.content}</div>
	{#if comment.comments.length}
		<div class="toggle" class:open>
			<button on:click={() => (open = !open)}>
				{open ? '[-]' : '[+] ' + pluralize(comment.comments.length) + ' collapsed'}
			</button>
		</div>
		{#if open}
			<ul class="comment-children">
				{#each comment.comments as comment_child (comment_child.id)}
					<svelte:self comment={comment_child} />
				{/each}
			</ul>
		{/if}
	{/if}
</li>
