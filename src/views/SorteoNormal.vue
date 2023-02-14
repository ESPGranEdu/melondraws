<template>
	<form v-if="winners.length === 0" @submit.prevent="addElement">
		<div class="mt">
			<h1>Sorteo aleatorios</h1>
			<Input
				v-model:value="inputValue"
				placeholder="Introduce algo que sortear..."
			/>
			<Input
				v-model:value="nWinners"
				placeholder="Número de ganadores"
				input-type="number"
			/>
		</div>
		<Button text="Añadir" btn-type="submit" />
		<Button btn-class="info" text="Sortear" @click="pickWinners" />
	</form>

	<div v-if="winners.length === 0">
		<DrawList :elements="elements" @remove="removeElement" />
	</div>

	<div v-else>
		<ShowCard
			v-for="(winner, index) in winners"
			:key="index"
			:show-title="winner"
		/>
		<Button
			btn-class="info"
			text="Volver a sortear"
			@click="pickWinners(true)"
		/>
		<Button text="Realizar otro sorteo" @click="resetDraw" />
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Button from "@components/Button.vue";
import Input from "@components/Input.vue";
import ShowCard from "@components/ShowCard.vue";
import DrawList from "@components/DrawList.vue";

const inputValue = ref("");
const nWinners = ref(null);
const removedElements = reactive([]);
const winners = reactive([]);
const elements = reactive({ values: [] });

const addElement = () => {
	if (inputValue.value === "") return;
	elements.values.push(inputValue.value);
	inputValue.value = "";
};
const removeElement = (index) => elements.values.splice(index, 1);

const pickWinners = (redraw) => {
	if (nWinners.value === null) alert("Selecciona el numero de ganadores");
	if (elements.values.length <= 0) alert("Inserta algo primero");

	// Re insert the deleted elements back to the original array
	if (redraw) {
		elements.values = [...elements.values, ...removedElements];

		// Clear both winner and removed elements
		winners.length = 0;
		removedElements.length = 0;
	}

	for (let i = 0; i < nWinners.value; i++) {
		const elementIndex = Math.floor(Math.random() * elements.values.length);

		// Push the winner to the winners array and keep the removed elements
		winners.push(elements.values[elementIndex]);
		removedElements.push(elements.values[elementIndex]);
		elements.values.splice(elementIndex, 1);
	}
};

const resetDraw = () => {
	// Clear the arrays
	elements.values = [];
	winners.length = 0;
	removedElements.length = 0;

	// Reset nWinners
	nWinners.value = null;
};
</script>

<style lang="scss">
.mt {
	margin-top: 0.75rem;
}
</style>
