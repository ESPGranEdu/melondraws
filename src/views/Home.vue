<template>
	<nav class="site-links">
		<router-link to="sorteo-series-pelis">
			Sorteo de Pelis/Series
		</router-link>
		<router-link to="sorteo-normal"> Sorteos aleatorios </router-link>
	</nav>
</template>

<script setup></script>

<style lang="scss">
.site-links {
	display: flex;
	flex-direction: column;

	a {
		text-decoration: none;
		color: black;
		border-radius: 5px;
		margin: 1.5rem;
		padding: 0.6em 0.8em;
		transition: background 250ms ease-in;

		&:hover,
		&:focus {
			background: darken($color: #ffb750, $amount: 5);
		}
	}
}

@media screen and (max-width: 375px) {
	.site-links {
		a {
			font-size: 1.725rem;
		}
	}
}
</style>
