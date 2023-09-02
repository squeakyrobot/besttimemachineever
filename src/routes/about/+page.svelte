<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	class="w-full lg:w-3/4 max-w-6xl h-full bg-base-100 overflow-hidden"
	in:fade={{ duration: 400 }}
>
	<div class="flex flex-col h-full p-2">
		<div class="flex-grow overflow-y-auto pl-6 pr-6">
			<div class="hero mt-20">
				<div class="hero-content flex-col md:flex-row">
					<img src="/images/btme-logo.svg" alt="BTME Logo" class="md:w-1/3 w-2/5" />
					<div class="md:pl-10">
						<h1 class="text-center md:text-left text-3xl lg:text-5xl font-bold">
							Best Time Machine Ever
						</h1>
						<p class="py-6 text-lg">Some fancy text</p>
					</div>
				</div>
			</div>

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
						- Space background
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

		<div class="bottom-0">
			<Footer showVersion={true} />
		</div>
	</div>
</div>
