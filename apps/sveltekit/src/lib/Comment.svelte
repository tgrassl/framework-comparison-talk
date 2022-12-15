<script>
  const pluralize = (n) => n + (n === 1 ? " reply" : " replies");
  export let comment;
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
      <a on:click={() => (open = !open)}>
        {open
          ? "[-]"
          : "[+] " + pluralize(comment.comments.length) + " collapsed"}
      </a>
    </div>
    {#if open}
      <ul class="comment-children">
        {#each comment.comments as comment}
          <svelte:self {comment} />
        {/each}
      </ul>
    {/if}
  {/if}
</li>
