import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: "Home"
	},
	{
		path: "/sorteo-series-pelis",
		component: "SorteoSeriesPelis"
	},
	{
		path: "/sorteo-normal",
		component: "SorteoNormal"
	},
	{
		path: "/:pathMatch(.*)*",
		component: "NotFound"
	}
].map(({ path, component }) => {
	return {
		path,
		component: () => import(`../views/${component}.vue`)
	};
});

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
