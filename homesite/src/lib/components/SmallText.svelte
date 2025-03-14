<script lang="ts">
	let { header, paragraph } = $props();
</script>

<div class="m-4 xl:break-inside-avoid">
	<h3>{header}</h3>
	<div class="w-15 h-2 bg-amber-600 rounded"></div>
	<p>{paragraph}</p>
</div>

