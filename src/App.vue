<template>
	<header>
		<router-link to="/">
			<MelonDrawsLogo class="logo" />
		</router-link>
	</header>

	<!-- Main container -->
	<main>
		<router-view @show-error="showError" />

		<teleport to="body">
			<transition name="fade">
				<div v-if="error.show">
					<div class="modal">
						<PageError
							:title="error.data.errorTitle"
							:msg="error.data.errorMessage"
							:detailed-info="
								error.data.detailedInfo ??
								'See the console logs to get more information'
							"
							@close-error="closeError"
						/>
					</div>
				</div>
			</transition>
		</teleport>
		<!-- <router-view v-slot="{ Component }">
			<transition
				enter-active-class="animate__animated animate__fadeInLeft"
				leave-active-class="animate__animated animate__fadeOutLeft"
				mode="out-in"
			>
				<component :is="Component" />
			</transition>
		</router-view> -->
	</main>
</template>

<script setup>
import MelonDrawsLogo from "./assets/melondraws-logo.svg";
import PageError from "@components/PageError.vue";
import { reactive } from "vue";

const error = reactive({
	show: false,
	data: {}
});

const showError = (data) => {
	error.data = data;
	error.show = true;
};
const closeError = () => (error.show = false);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

* {
	font-family: "Muli", Avenir, Helvetica, Arial, sans-serif;
}

#app {
	position: relative;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	height: 100vh;
	font-size: clamp(1rem, 3rem, 2rem);
	color: black;
}
.modal {
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

header {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	padding: 0.8rem;
	width: 100%;
	border-bottom-left-radius: 0.5em;
	background: #a8ffa9;
	border-bottom-right-radius: 0.5em;
	box-shadow: 0 15.9px 29.2px rgba(0, 0, 0, 0.198);

	.logo {
		width: 5.5rem;
		height: 5.5rem;
		cursor: pointer;
	}
}

main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

@media screen and (min-width: 360px) {
	h1 {
		font-size: 1.525rem;
	}
}

// FADE ANIMATION
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
