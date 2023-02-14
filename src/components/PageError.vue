<template>
	<div class="container">
		<h1 class="error-title">{{ props.title }}</h1>
		<p class="error-content">{{ props.msg }}</p>
		<div v-if="props.detailedInfo.length > 0" class="detailed-info">
			{{ props.detailedInfo }}
		</div>

		<Button btn-class="error" text="Cerrar" @click="sendClosingError" />
	</div>
	<div class="cubo1"></div>
	<div class="cubo2"></div>
	<div class="cubo3"></div>
	<div class="cubo4"></div>
	<div class="cubo5"></div>
	<div class="cubo6"></div>
</template>

<script setup>
import Button from "@components/Button.vue";
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["close-error"]);
const props = defineProps({
	title: {
		type: String,
		default: "Failure"
	},
	msg: {
		type: String,
		default: "Se produjo una excepcion durante la ejecucion"
	},
	detailedInfo: {
		type: String,
		default: null
	}
});
const sendClosingError = () => emit("close-error");
</script>

<style lang="scss">
.container {
	background-color: hsl(210, 2%, 21%);
	max-width: 350px;
	color: white;
	border-radius: 0.5rem;
	padding: 1em;
	box-shadow: 0 15.9px 29.2px rgba(0, 0, 0, 0.412);

	.error-title {
		position: relative;

		&::before {
			content: "[Error] ";
			color: hsl(0, 100%, 50%);
		}
	}

	.error-content {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
}

.detailed-info {
	padding: 1rem;
	border-radius: inherit;
	background: hsl(0, 0%, 43%);

	& + button {
		margin-top: 10px;
	}
}

@for $i from 1 to 6 {
	.cubo#{$i} {
		width: 50px;
		height: 50px;
		color: black;
	}
}
</style>
