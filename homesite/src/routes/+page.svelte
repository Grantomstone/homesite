<script lang="ts">
	import image from '$lib/images/yellow.png'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Homepage" content="the homepage of grantomstone" />
	<link href="/src/app.css" rel="stylesheet">
	<img src={image} alt="background image" />
</svelte:head>
<div class="h-screen w-screen bg-cover bg-center content-center" style="background-image: url({image})">
	<h1 class="text-7xl font-bold text-center text-amber-700">Grantomstone</h1>
	<br />
	<h2 class="text-2xl text-center font-semibold text-amber-600">A guy who does not know what this name means</h2>
</div>
<div class="h-screen w-screen bg-slate-200">
</div>
