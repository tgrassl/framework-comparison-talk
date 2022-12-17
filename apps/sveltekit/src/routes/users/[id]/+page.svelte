<script lang="ts">
	import { navigating } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="user-view">
	{#if $navigating}
		<div class="news-list-nav">Loading...</div>
	{:else}
		<h1>user : {data.user.id}</h1>
		<ul class="meta">
			<li>
				<span class="label">Created:</span>
				{data.user.created}
			</li>
			<li>
				<span class="label">Karma:</span>
				{data.user.karma}
			</li>
			{#if data.user.about}
				<li class="about">{@html data.user.about}</li>
			{/if}
		</ul>
		<p class="links">
			<a href={`https://news.ycombinator.com/submitted?id=${data.user.id}`}> submissions </a>{' '}
			|{' '}
			<a href={`https://news.ycombinator.com/threads?id=${data.user.id}`}> comments </a>
		</p>
	{/if}
</div>
