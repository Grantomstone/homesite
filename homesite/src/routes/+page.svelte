<script lang="ts">
	import image from '$lib/images/yellow.webp';
	import SmallText from '$lib/components/SmallText.svelte';
	import { projects } from '$lib/data/project.js';
	import '../app.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
<div
	class="h-screen w-full relative bg-cover bg-center content-center"
	style="background-image: url({image})"
>
	<h1 class="xl:text-7xl md:text-6xl sm:text-5xl text-3xl font-bold text-center text-amber-700">
		Grantomstone
	</h1>
	<br />
	<h2 class="xl:text-2xl md:text-3xl sm:text-2xl text-xl text-center font-semibold text-amber-600">
		A guy who does not know what this name means
	</h2>
	<div class="">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			class="w-4 md:w-6 fill-amber-700 absolute left-1/2 bottom-4 transform -translate-x-1/2"
			><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
				d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
			/></svg
		>
	</div>
</div>
<div class="w-full bg-slate-900 pb-4 md:flex md:flex-row">
	<div class="md:w-1/5 mr-5 mt-5">
		<h1 class="text-neutral-200 font-bold text-5xl pl-7">Projects</h1>
		<div class="w-full h-1 mb-2 bg-amber-500 rounded"></div>
	</div>
	<div class="md:w-3/5">
		{#each projects as data (data.header)}
			<SmallText header={data.header} description={data.description} points={data.points} />
		{/each}
	</div>
</div>
