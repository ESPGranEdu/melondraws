<template>
	<Particles
		v-if="!destroyConfetti"
		id="tsparticles"
		:class="{ confetti: showConfetti }"
		:particles-init="particlesInit"
		:options="confettiConfig"
	/>
</template>

<script setup>
import { ref } from "vue";
import { loadConfettiShape } from "tsparticles-shape-confetti";

const particlesInit = (main) => loadConfettiShape(main);
const showConfetti = ref(false);
const destroyConfetti = ref(false);
const confettiConfig = ref({
	fullScreen: {
		enable: true,
		zIndex: 1
	},
	particles: {
		color: {
			value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
		},
		shape: {
			type: "confetti",
			options: {
				confetti: {
					type: ["circle", "square"]
				}
			}
		},
		opacity: {
			value: 1,
			animation: {
				enable: true,
				minimumValue: 0,
				destroy: "min"
			}
		},
		size: {
			value: 7,
			random: {
				enable: true,
				minimumValue: 3
			}
		},
		move: {
			enable: true,
			gravity: {
				enable: true,
				acceleration: 20
			},
			speed: 90,
			decay: 0.1525,
			direction: "none",
			outModes: {
				default: "destroy",
				top: "none"
			}
		}
	},
	interactivity: {
		detectsOn: "window",
		events: {
			resize: true
		}
	},
	detectRetina: true,
	emitters: [
		{
			direction: "top-right",
			rate: {
				delay: 0.25,
				quantity: 30
			},
			position: {
				x: 0,
				y: 0
			},
			size: {
				width: 10,
				height: 10
			}
		},
		{
			direction: "top-left",
			rate: {
				delay: 0.25,
				quantity: 30
			},
			position: {
				x: 100,
				y: 0
			},
			size: {
				width: 10,
				height: 10
			}
		}
	]
});
</script>
