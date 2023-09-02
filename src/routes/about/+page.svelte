<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	class="w-full lg:w-3/4 max-w-6xl h-full bg-base-100 overflow-hidden"
	in:fade={{ duration: 400 }}
>
	<div class="flex flex-col h-full p-2">
		<div class="flex-grow overflow-y-auto pl-6 pr-6">
			<!-- <div class="hero mt-20">
				<div class="hero-content flex-col md:flex-row">
					<img src="/images/btme-logo.svg" alt="BTME Logo" class="md:w-1/3 w-2/5" />
					<div class="md:pl-10">
						<h1 class="text-center md:text-left text-3xl lg:text-5xl font-bold">
							Best Time Machine Ever
						</h1>
						<p class="py-6 text-lg">Some fancy text</p>
					</div>
				</div>
			</div> -->

			<h2 class="text-3xl lg:text-4xl font-bold pt-10">About</h2>
			<p class="py-6 text-lg">
				We're excited to introduce the first-ever working web-based time machine! Our goal is to let
				you travel into the future, but there are some limitations you need to know.
				<br /><br />
				Because of the way technology works right now and the things we can't change about how time works,
				our time machine can only take you into the future, not the past. Also, you won't be able to
				go very far into the future. We hope to expand on the functionality in the near future as we
				learn more about the effects of time travel.
			</p>

			<h2 class="text-3xl lg:text-4xl font-bold pt-10">Testimonials</h2>
			<div class="py-6 text-lg">
				<Testimonials />
			</div>

			<h2 class="text-3xl lg:text-4xl font-bold pt-10">Principles of Operation</h2>
			<p class="py-6 text-lg">
				In the research paper <em>"Navigating Time's Pathways" by Ryan Cook (April 2023)</em>, a
				mathematical framework is introduced to investigate the relationship between the flow of
				time and the measurement of elapsed time. This framework unveils the intrinsic link between
				time and waiting, independent of relativistic or gravitational influences.
				<br /><br />
				The paper defines the rate of temporal progression, denoted as
				<em class="font-semibold">R(t)</em>, as the derivative of elapsed time with respect to the
				flow of time. It also introduces cumulative waiting time, represented as
				<em class="font-semibold">W(T)</em>, which is the integral of the rate of temporal
				progression over elapsed time.
				<br /><br />
				One intriguing implication is the potential for time travel. The framework suggests that if a
				time machine were created based on these principles, it might enable time travel by making the
				duration of the journey through time equivalent to the desired future distance.
				<br /><br />
				Read the full paper here:
				<a href="/white-paper.pdf" target="_blank" class="link link-primary link-hover"
					>Navigating Time's Pathways by Ryan Cook</a
				>
			</p>

			<h2 class="text-3xl lg:text-4xl font-bold pt-10">My History with Time Travel</h2>
			<p class="py-6 text-lg">
				In the early 2000s, I invented my first time machine and uncovered the mysteries of time.
				Unfortunately, it faded into obscurity and was neglected, eventually falling into disrepair.
				<br /><br />
				Recently, I decided to formalize and publish the groundbreaking research that made time travel
				possible. Along with publishing my paper I launched this website, featuring version 2 of the
				time machine. While it is functionally the same as verion 1, it has a more modern design and
				updates to its internal systems.
				<br /><br />
				If you're curious about the older version, you can still see it here:
				<a href="/classic/TimeMachine.html" target="_blank" class="linke link-primary link-hover"
					>Best Time Machine Ever - Classic Edition</a
				>
			</p>

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

		<div class="bottom-0 mt-2 mb-2">
			<Footer showVersion={true} />
		</div>
	</div>
</div>
