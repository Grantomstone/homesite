<script lang="ts">
	let { header, description, points } = $props();
	let text_color="text-slate-300";
</script>

<div class="m-4 xl:break-inside-avoid">
	<div class="inline-block">
		<h3 class="text-lg font-medium text-neutral-300">{header}</h3>
		<div class="w-full h-1 mb-4 bg-amber-600 rounded"></div>
	</div>
	<p class="{text_color} xl:text-justify">{description}</p>
	<ul class="list-outside pl-5 list-disc">
		{#each points as point}
			<li class="{text_color}">{point}</li>
		{/each}
	</ul>
</div>

