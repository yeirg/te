<!-- Layout.svelte -->

<script>
	export let postsLink = '/posts';
	export let newsLink = '/posts/new';
	export let profilePicture = '';
	export let profileName = 'demo';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container">
		<a class="navbar-brand" href={postsLink}>Posts</a>
		<a class="navbar-brand" href={newsLink}>Write</a>

		<div class="navbar-nav ms-auto">
			<img
				src={profilePicture}
				alt="Profile Picture"
				class="rounded-circle"
				style="width: 40px; height: 40px;"
			/>
			<a class="nav-link" href="/profiles/0">{profileName}</a>
		</div>
	</div>
</nav>

<main>
	<!-- Main content will be rendered here -->
	<slot />
</main>
