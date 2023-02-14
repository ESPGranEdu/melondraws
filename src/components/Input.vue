<template>
	<input
		:value="value"
		:placeholder="placeHolder"
		class="search-input"
		:type="inputType"
		@input="$emit('update:value', $event.target.value)"
	/>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		value: {
			type: [String, Number],
			default: ""
		},
		inputType: {
			type: String,
			default: ""
		},
		placeHolder: {
			type: String,
			default: "Inserte aqui..."
		}
	},
	emits: ["update:value"]
});
</script>

<style lang="scss" scoped>
.search-input {
	border: 0;
	border-radius: 0.5em;
	padding: 0.7em 1.2em;
	margin-right: 0.5em;
	outline: none;
}
</style>
