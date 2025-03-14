<script lang="ts">
	import image from '$lib/images/yellow.png';
	import  SmallText  from "$lib/components/SmallText.svelte";
	import  { projects } from "$lib/data/project.js"
	import "../app.css";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</svelte:head>
<div class="h-screen w-full bg-cover bg-center content-center" style="background-image: url({image})">
	<h1 class="xl:text-7xl text-3xl font-bold text-center text-amber-700">Grantomstone</h1>
	<br />
	<h2 class="xl:text-2xl text-xl text-center font-semibold text-amber-600">A guy who does not know what this name means</h2>
</div>
<div class="w-full bg-slate-200 columns-xs xl:columns-3 gap-8 p-12">
	{#each projects as data}
		<SmallText header={data.header} paragraph={data.paragraph} />
	{/each}
</div>
