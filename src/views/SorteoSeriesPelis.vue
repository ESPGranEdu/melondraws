<template>
	<div v-if="!winnerCard.winner.showCard">
		<form @submit.prevent="addElement">
			<div class="mt">
				<h1>Sorteo para Series / Pelis</h1>
				<Input
					v-model:value="titleName"
					placeholder="Introduce una serie / peli..."
				/>
			</div>
			<Button text="Añadir" btn-type="submit" />
			<Button btn-class="info" text="Sortear" @click="pickWinner" />
		</form>

		<DrawList :elements="seriesAndMovies" @remove="removeElement" />
	</div>

	<!-- ShowCard with the winner info -->
	<div v-else>
		<ShowCard
			:show-poster="winnerCard.winner.poster"
			:show-title="winnerCard.winner.title"
			:show-type="
				winnerCard.winner.type === 'series' ? 'Series' : 'Película'
			"
		/>
		<Button btn-class="info" text="Volver a sortear" @click="pickWinner" />
		<Button text="Realizar otro sorteo" @click="resetDraw" />
	</div>
</template>

<script setup>
import { reactive, ref, defineEmits } from "vue";
import Button from "@components/Button.vue";
import Input from "@components/Input.vue";
import DrawList from "@components/DrawList.vue";
import ShowCard from "@components/ShowCard.vue";
import translateTitle from "@composition/translation";
import getSerieOrMovie from "@composition/fetch_api";

const titleName = ref("");
const winnerCard = reactive({ winner: { showCard: false } });
const seriesAndMovies = reactive({ values: [] });
const emit = defineEmits(["show-error"]);

const addElement = () => {
	if (titleName.value === "") return;
	seriesAndMovies.values.push(titleName.value);
	titleName.value = "";
};

const removeElement = (index) => seriesAndMovies.values.splice(index, 1);

const pickWinner = async () => {
	// Pick a random element on the array
	const winnerName =
		seriesAndMovies.values[
			Math.floor(Math.random() * seriesAndMovies.values.length)
		];

	try {
		// Translate title and search show info
		const translatedWinnerName = await translateTitle(winnerName);
		const serieOrMovieInfo = await getSerieOrMovie(translatedWinnerName);
		serieOrMovieInfo.title = winnerName; // Change title to the untranslated one

		// Dump show info
		winnerCard.winner = { showCard: true, ...serieOrMovieInfo };
	} catch (err) {
		const errContent = {
			errorTitle: "Fallo al buscar informacion",
			showTitle: winnerName,
			errorMessage: err.message,
			detailedInfo: `Se realizo la busqueda del titulo: ${winnerName}`
		};

		emit("show-error", errContent);
	}
};

const resetDraw = () => {
	// Clear the array and reset the winnerCard
	seriesAndMovies.values.length = 0;
	winnerCard.winner = { showCard: false };
};
</script>

<style lang="scss">
.mt {
	margin-top: 0.75rem;
}
</style>
