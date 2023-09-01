<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div
	class="flex flex-col w-full lg:w-3/4 max-w-6xl p-4 h-full card bg-base-100 shadow-xl rounded-none"
	in:fade={{ duration: 400 }}
>
	<div class="flex-grow mt-10">
		<h1>Privacy Policy</h1>
	</div>
	<Footer />
</div>
