<script lang="ts">
	import { PUBLIC_GITHUB_URL } from '$env/static/public';

	export let showVersion = false;

	const versionInfo = `${__VERSION__}, ${__LASTMOD__}`;
	const commitUrl = `${PUBLIC_GITHUB_URL}/commit/${__VERSION__}`;
</script>

{#if showVersion}
	<div class="justify-end text-right text-info mt-5 pt-2">
		<a href={commitUrl} target="_blank">
			{versionInfo}
		</a>
	</div>
{/if}

<div class="footer flex justify-between bottom-0 border-t-2 border-neutral mt-2 pt-4">
	<div class="align-bottom">
		<a
			href="/"
			class="items-center inline-flex p2"
			title="BestTimeMachineEver.com"
			data-sveltekit-reload
		>
			<div class="hidden sm:block link link-hover p-2">
				BestTimeMachineEver<em>.com</em>
			</div>
			<div class="p-2 sm:hidden link link-hover">Home</div>
		</a>
	</div>
	<div class="flex">
		<!-- <a href="/classic/TimeMachine.html" class="link link-hover p-2">Classic</a> -->
		<a href="/white-paper.pdf" target="_blank" class="link link-hover p-2">Research</a>
		<a href="/about" class="link link-hover p-2">About</a>
		<a href="/terms-of-service" class="link link-hover p-2">Terms</a>
		<a href="/privacy-policy" class="link link-hover p-2">Privacy</a>
		<!-- <a href="/cookie-policy" class="link link-hover p-2">Cookies</a> -->
	</div>
</div>
