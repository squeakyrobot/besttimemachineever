<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col max-w-4xl h-full w-full overflow-hidden p-2">
	<Header />
	<div class="flex-grow overflow-y-auto">
		<h1>Welcome to Best Time Machine Ever</h1>
		<a href="white-paper.pdf" class="link" target="_blank">White Paper</a>
	</div>
	<Footer />
</div>
