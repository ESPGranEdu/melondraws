<template>
	<div class="element">
		<slot />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.element {
	font-size: 1rem;
	border-radius: 0.5rem;
	margin: 5px 0 5px 0;
	width: 20rem;
	text-align: left;
	font-weight: bold;
	padding: 0.575em;
	background: lighten($color: #ffb650, $amount: 3);
}
</style>
