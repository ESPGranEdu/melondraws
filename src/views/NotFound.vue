<template>
	<h1>
		La ruta <span class="highlight">{{ pathName }}</span> no existe :(
	</h1>

	<div class="cubo1"></div>
	<div class="cubo2"></div>
	<div class="cubo3"></div>
	<div class="cubo4"></div>
	<div class="cubo5"></div>
	<div class="cubo6"></div>
</template>

<script setup>
const pathName = window.location.pathname;
</script>

<style lang="scss" scoped>
h1 {
	margin-top: 10px;
}
.highlight {
	font-family: monospace;
	background-color: hsl(0, 1%, 25%);
	border-radius: 5px;
	padding: 0.425rem 1rem;
	color: lightgray;
}

@for $i from 1 to 6 {
	.cubo#{$i} {
		width: 50px;
		height: 50px;
		background-color: black;
	}
}
</style>
