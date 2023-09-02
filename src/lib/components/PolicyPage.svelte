<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	export let policy: string;
</script>

<div
	class="w-full lg:w-3/4 max-w-6xl h-full overflow-hidden bg-base-100"
	in:fade={{ duration: 400 }}
>
	<div class="flex flex-col h-full pl-6 pr-6">
		<Header />
		<div class="flex-grow overflow-y-auto">
			<article class="prose max-w-none pr-4 pl-4">
				{@html policy}
			</article>
		</div>
		<div class="bottom-0 mt-2 mb-2">
			<Footer />
		</div>
	</div>
</div>
