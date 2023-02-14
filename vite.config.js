import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import path from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader(), eslintPlugin()],
	envDir: ".",
	optimizeDeps: {
		include: ["vue", "vue-router"]
	},
	resolve: {
		alias: {
			"@/*": path.resolve(__dirname, "src/"),
			"@components": path.resolve(__dirname, "src/components"),
			"@composition": path.resolve(__dirname, "src/composition"),
			"@assets": path.resolve(__dirname, "src/assets")
		}
	}
});
