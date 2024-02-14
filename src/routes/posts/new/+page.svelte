<script lang="ts">
	import { Carta, CartaEditor } from 'carta-md';
	// Component default theme
	import 'carta-md/default.css';
	// Markdown input theme (Speed Highlight)
	import 'carta-md/light.css';

	const carta = new Carta({
		// Remember to use a sanitizer to prevent XSS attacks
		// sanitizer: mySanitizer
	});
	let value = ""
</script>

<CartaEditor {carta} bind:value/>
<form method="POST">
	<input type="hidden" name="md" value={value} />
	<input type="text" name="title" placeholder="Title" />
	<input type="text" name="image" placeholder="Image URL" />
	<input type="text" name="excerpt" placeholder="Excerpt" />
	<button type="submit">Create post</button>
</form>

<style>
	/* Or in global stylesheet */
	/* Set your custom monospace font */
	:global(.carta-font-code) {
		font-family: '...', monospace;
	}
</style>