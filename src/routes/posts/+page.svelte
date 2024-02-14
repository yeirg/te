<script>
  // @ts-ignore
  export let posts = [];
</script>

<main>
  <h1>Posts</h1>
  <ul>
    {#each posts as post}
      <li>
        <a href={`posts/${post.id}`}>{post.title}</a>
      </li>
    {/each}
  </ul>
</main>