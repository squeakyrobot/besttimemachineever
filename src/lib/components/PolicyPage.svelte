<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	export let policy: string;
</script>

<div class="w-full lg:w-3/4 max-w-5xl h-full overflow-hidden bg-base-100 pl-4 pr-4">
	<div class="flex flex-col overflow-hidden h-full p-2 w-full">
		<Header />
		<div class="flex-grow overflow-y-auto">
			<article class="prose max-w-none">
				{@html policy}
			</article>
		</div>
		<div class=" bottom-0 mt-2">
			<Footer />
		</div>
	</div>
</div>
