<script lang="ts">
	import { page } from '$app/stores';
	import HeadMeta from '$lib/components/HeadMeta.svelte';
	import '../app.css';
</script>

<svelte:head>
	<HeadMeta title={$page.data.pageTitle || 'Best Time Machine Ever'} />
</svelte:head>

<div
	class="grid place-items-center h-[calc(100dvh)] bg-no-repeat bg-cover w-full"
	style="background-image: url(/images/space-bg.jpg);"
>
	<slot />
</div>
