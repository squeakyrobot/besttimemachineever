<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<div
	class="w-full lg:w-3/4 max-w-6xl h-full bg-base-100 overflow-hidden"
	in:fade={{ duration: 400 }}
>
	<div class="flex flex-col h-full pl-6 pr-6">
		<Header />
		<div class="flex-grow overflow-y-auto">
			<ContactForm formSubmitted={data.formSubmitted} />
		</div>
		<div class="bottom-0">
			<Footer />
		</div>
	</div>
</div>
