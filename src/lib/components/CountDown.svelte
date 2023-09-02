<script lang="ts">
	import { onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear as easing } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let onComplete: () => void;
	export let seconds: number;

	let now = Date.now();
	let end = now + seconds * 1000;

	$: count = Math.round((end - now) / 1000);
	$: h = Math.floor(count / 3600);
	$: m = Math.floor((count - h * 3600) / 60);
	$: s = count - h * 3600 - m * 60;

	function updateTimer() {
		now = Date.now();
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (count === 0) {
		clearInterval(interval);
		onComplete();
	}

	const duration = 1000;

	let offset = tweened(1, { duration, easing });
	let rotation = tweened(360, { duration, easing });

	$: offset.set(Math.max(count - 1, 0) / seconds);
	$: rotation.set((Math.max(count - 1, 0) / seconds) * 360);

	const padValue = (value: number) => {
		return value.toString().padStart(2, '0');
	};

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svg viewBox="-50 -50 100 100" width="250" height="250">
	<title>Remaining seconds: {count}</title>
	<g class="fill-neutral" fill-opacity=".5" stroke="currentColor" stroke-width="3">
		<circle stroke="currentColor" r="46" />
		<path
			class="stroke-primary"
			d="M 0 -46 a 46 46 0 0 0 0 92 46 46 0 0 0 0 -92"
			pathLength="1"
			stroke-dasharray="1"
			stroke-dashoffset={$offset}
		/>
	</g>
	<g class="fill-primary" stroke="none">
		<g transform="rotate({$rotation})">
			<g transform="translate(0 -46)">
				<circle r="4" />
			</g>
		</g>
	</g>

	<g
		in:fade={{ delay: 600 }}
		fill="currentColor"
		text-anchor="middle"
		dominant-baseline="baseline"
		font-size="13"
	>
		<text x="-3" y="6.5">
			{#each Object.entries({ h, m, s }) as [key, value], i}
				{#if seconds >= 60 ** (2 - i)}
					<tspan dx="3" font-weight="bold" font-family="monospace">{padValue(value)}</tspan><tspan
						dx="0.5"
						font-size="7">{key}</tspan
					>
				{/if}
			{/each}
		</text>
	</g>
</svg>
