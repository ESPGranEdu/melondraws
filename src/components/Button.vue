<template>
	<button
		class="btn"
		:type="btnType"
		:class="{
			'btn-remove': btnClass === 'remove',
			'btn-info': btnClass === 'info',
			'btn-error': btnClass === 'error'
		}"
	>
		<div v-if="btnClass === 'remove'">
			<DeleteIcon />
		</div>

		<div v-else>
			{{ text }}
		</div>
	</button>
</template>

<script>
import DeleteIcon from "../assets/delete-icon.svg";
import { defineComponent } from "vue";

export default defineComponent({
	components: { DeleteIcon },
	props: {
		text: {
			type: String,
			default: "Click"
		},
		btnClass: {
			type: String,
			default: ""
		},
		btnType: {
			type: String,
			default: "button"
		}
	}
});
</script>

<style lang="scss" scoped>
.btn {
	background: #ff8800;
	border: 0;
	padding: 0.4em 0.575em;
	margin-right: 0.5em;
	cursor: pointer;
	color: rgb(29, 26, 26);
	border-radius: 0.55em;
	font-weight: bold;
	transition: background 150ms ease-in;

	svg {
		width: 1rem;
		height: 1rem;
		fill: white;
	}

	&:hover,
	&:active {
		background: lighten($color: #ff8800, $amount: 10);
	}

	&-remove {
		border: inherit;
		background: #c70000;
		color: white;

		&:hover,
		&:active {
			background: darken($color: #c70000, $amount: 10);
		}
	}

	&-info {
		border: inherit;
		background: #5fffff;
		color: black;

		&:hover,
		&:active {
			background: lighten($color: #5fffff, $amount: 15);
		}
	}

	&-error {
		background: #c70000;
		color: white;

		&:hover,
		&:active {
			background: lighten($color: #c70000, $amount: 10);
		}
	}
}
</style>
