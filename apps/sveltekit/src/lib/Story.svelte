<script>
  export let story;
</script>

<li class="news-item">
  <span class="score">{story.points}</span>
  <span class="title">
    {#if story.url}
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
      </a>
      <span class="host"> ({story.domain})</span>
    {:else}
      <a href={`/stories/${story.id}`}>{story.title}</a>
    {/if}
  </span>
  <br />
  <span class="meta">
    {#if story.type !== "job"}
      by <a href={`/users/${story.user}`}>{story.user}</a>{" "}
      {story.time_ago} |{" "}
      <a href={`/stories/${story.id}`}>
        {story.comments_count ? `${story.comments_count} comments` : "discuss"}
      </a>
    {:else}
      <a href={`/stories/${story.id}`}>{story.time_ago}</a>
    {/if}
  </span>
  {#if story.type !== "link"}
    {" "}
    <span class="label">{story.type}</span>
  {/if}
</li>
