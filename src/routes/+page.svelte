<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { fade, scale, slide } from 'svelte/transition';
	import { quintIn, elasticInOut, expoOut, quintOut } from 'svelte/easing';
	import CountDown from '$lib/components/CountDown.svelte';

	const scaleDuration = 600;

	let state: 'preparing' | 'traveling' | 'in-future' = 'preparing';
	let hidePanel = false;

	let secondsSelected = '0';

	const backToTheFuture = async () => {
		// TODO: Disble the button or notify the stupid user
		if (parseInt(secondsSelected, 10) > 0) {
			hidePanel = true;
			setTimeout(() => {
				state = 'traveling';
				hidePanel = false;
			}, scaleDuration);
		}
	};

	const theFutureIsNow = async () => {
		hidePanel = true;
		setTimeout(() => {
			state = 'in-future';
			hidePanel = false;
		}, scaleDuration);
	};
</script>

<div class="flex flex-col w-full lg:w-3/4 max-w-5xl p-4 h-full" in:fade={{ duration: 400 }}>
	<div class="flex-grow flex items-center justify-center">
		{#if state === 'preparing' && !hidePanel}
			<div
				class="max-w-3xl text-center"
				out:scale={{
					easing: quintIn,
					start: 50,
					duration: scaleDuration
				}}
			>
				<p class="mb-4 text-xl sm:text-2xl md:text-3xl">
					Select the distance that you wish to travel and click "Go" to be transported to the
					future.
				</p>
				<p class="mt-6 mb-6 text-lg sm:text-xl md:text-2xl">
					Your journey will begin immediately, make sure you are prepared.
				</p>
				<div class="join mt-5 w-full justify-center">
					<select
						bind:value={secondsSelected}
						class="select select-primary w-full max-w-xs join-item rounded-l-full select-md sm:select-lg"
					>
						<option disabled selected value="0">Select Distance...</option>
						<option value="10">10 seconds</option>
						<option value="20">20 seconds</option>
						<option value="30">30 seconds</option>
						<option value="60">1 Minute</option>
						<option value="120">2 Minutes</option>
						<option value="180">3 Minutes</option>
						<option value="240">4 Minutes</option>
						<option value="300">5 Minutes</option>
						<option value="600">10 Minutes</option>
						<option value="900">15 Minutes</option>
					</select>
					<button
						on:click={backToTheFuture}
						class="btn btn-primary join-item rounded-r-full btn-md sm:btn-lg pl-6 pr-6">Go</button
					>
				</div>

				<div class="flex justify-center">
					<div class="alert mt-14 max-w-xl flex justify-center bg-base-100 bg-opacity-75">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="stroke-warning shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/></svg
						>
						<span>Time travel holds many mysteries; take a cautious first step.</span>
					</div>
				</div>
			</div>
		{:else if state === 'traveling' && !hidePanel}
			<div
				class="text-center max-w-3xl items-center justify-center"
				in:scale={{ easing: quintOut, start: 0, duration: scaleDuration }}
				out:scale={{ easing: quintIn, start: 50, duration: scaleDuration }}
			>
				<div class="items-center justify-center">
					<div class="flex place-content-center">
						<CountDown seconds={parseInt(secondsSelected, 10)} onComplete={theFutureIsNow} />
					</div>
					<div class="py-4 text-xl sm:text-2xl md:text-3xl">
						Please wait while we transport you through time...
					</div>
				</div>
			</div>
		{:else if !hidePanel}
			<div class="hero" in:scale={{ easing: quintOut, start: 0, duration: scaleDuration }}>
				<div class="hero-content text-center">
					<div class="max-w-4xl">
						<p class="py-4 text-2xl sm:text-3xl md:text-4xl">
							Your journey is complete. Welcome to the future!
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>

	{#if state !== 'traveling' && !hidePanel}
		<div
			in:fade={{ delay: scaleDuration, duration: scaleDuration / 2 }}
			out:scale={{ easing: quintIn, start: 50, duration: scaleDuration }}
		>
			<Footer />
		</div>
	{/if}
</div>
