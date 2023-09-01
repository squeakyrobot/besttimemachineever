<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	class="flex flex-col w-full lg:w-3/4 max-w-6xl p-4 h-full card bg-base-100 shadow-xl rounded-none"
	in:fade={{ duration: 400 }}
>
	<div class="hero mt-20">
		<div class="hero-content flex-col md:flex-row">
			<img src="/images/logo.svg" alt="BCE Logo" class="md:w-1/3 w-2/5" />
			<div class="md:pl-10">
				<h1 class="text-center md:text-left text-3xl lg:text-5xl font-bold">
					Best Time Machine Ever
				</h1>
				<p class="py-6 text-lg">Some fancy text</p>
			</div>
		</div>
	</div>

	<div class="flex-grow mt-10">
		<h2 class="text-3xl lg:text-4xl font-bold pt-10">About</h2>
		<p class="py-6 text-lg">TODO:</p>

		<h2 class="text-3xl lg:text-4xl font-bold pt-10">Credits & Thanks</h2>
		<div class="py-6 ml-5 text-lg">
			<ul class="list-disc">
				<li>
					<a
						class="link link-primary"
						href="https://digitalmoons.itch.io/free-space-background"
						target="_blank"
					>
						digitalmoons.itch.io
					</a>
					- Sace background
				</li>
			</ul>
		</div>

		<h2 class="text-3xl lg:text-4xl font-bold pt-10">Contact</h2>
		<div class="py-6 ml-2 text-lg">
			You can get in touch with us by using our <a href="/contact" class="link link-primary"
				>Contact Form</a
			>.
		</div>
	</div>
	<Footer showVersion={true} />
</div>
