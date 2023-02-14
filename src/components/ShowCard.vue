<template>
	<div class="card">
		<h1>Ganador !!!</h1>

		<img class="winner-img" :src="showPoster" />

		<h2 class="card-title">{{ showTitle }}</h2>
		<h3 class="cart-type">{{ showType }}</h3>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import defaultWinnerImage from "@assets/winner.png";

export default defineComponent({
	props: {
		showPoster: {
			type: String,
			default: defaultWinnerImage
		},
		showTitle: {
			type: String,
			default: ""
		},
		showType: {
			type: String,
			default: ""
		}
	}
});
</script>

<style lang="scss" scoped>
.card {
	h1 {
		font-size: 0.725em;
	}

	h2 {
		font-size: 1.2em;
	}

	h3 {
		font-size: 0.7em;
	}

	display: flex;
	flex-direction: column;
	background: #a8ffa9;
	padding: 10px;
	max-width: 30rem;
	width: clamp(10rem, 30rem, 20rem);
	border-radius: 0.25em;
	border-top: 5px solid darken(#ffb750, 15);
	border-bottom: 5px solid darken(#ffb750, 15);
	margin-top: 10px;

	.card-img {
		max-width: 100%;
	}

	.card-title {
		text-decoration: 5px underline #ffb750;
	}
}
</style>
