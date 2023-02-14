<template>
	<div class="list">
		<DrawElement v-for="(val, index) in elements.values" :key="index">
			<Button btn-class="remove" @click="sendElementIndex(index)" />
			{{ val }}
		</DrawElement>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@components/Button.vue";
import DrawElement from "@components/DrawElement.vue";

export default defineComponent({
	components: { Button, DrawElement },
	props: {
		elements: {
			type: Object,
			require: true,
			default: () => {}
		}
	},
	emits: ["remove"],
	setup(props, { emit }) {
		const sendElementIndex = (index) => emit("remove", index);

		return {
			sendElementIndex
		};
	}
});
</script>

<style lang="scss" scoped>
.list {
	overflow: auto;
	scrollbar-width: none;
	border-radius: 0.275em;
	padding: 10px;
	max-height: 20rem;
	height: 20rem;
}
</style>
