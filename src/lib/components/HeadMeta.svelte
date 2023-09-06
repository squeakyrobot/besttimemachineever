<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_ORIGIN_URL } from '$env/static/public';

	const origin = $page.url.origin.includes('prerender') ? PUBLIC_ORIGIN_URL : $page.url.origin;

	export let ogImage = $page.data.pageOgImage || '/images/btme-og.jpg';
	export let url = $page.route.id;
	export let title = $page.data.pageTitle || 'Best Time Machine Ever';
	export let description =
		$page.data.pageDescription ||
		'Experience the thrill of time travel from the comfort of your screen';
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="{origin}{ogImage}" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content={origin} />
<meta property="twitter:url" content={url} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="{origin}{ogImage}" />
