<script context="module">
	import fetchAPI from '$lib/api';
	export const hydrate = false;
	export async function load({ params, fetch }) {
		const user = await fetchAPI(fetch, `user/${params.id}`);

		if (user) {
			return {
				props: { user }
			};
		}

		return {
			status: 404
		};
	}
</script>

<script>
	import { navigating } from '$app/stores';

	export let user;
</script>

<div class="user-view">
	{#if $navigating}
		<div class="news-list-nav">Loading...</div>
	{:else if !user.error}
		<h1>User : {user.id}</h1>
		<ul class="meta">
			<li>
				<span class="label">Created:</span>
				{user.created}
			</li>
			<li>
				<span class="label">Karma:</span>
				{user.karma}
			</li>
			{#if user.about}
				<li class="about">{@html user.about}</li>
			{/if}
		</ul>
		<p class="links">
			<a href={`https://news.ycombinator.com/submitted?id=${user.id}`}> submissions </a>{' '}
			|{' '}
			<a href={`https://news.ycombinator.com/threads?id=${user.id}`}> comments </a>
		</p>
	{:else}
		<h1>User not found.</h1>
	{/if}
</div>
