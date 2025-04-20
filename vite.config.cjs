const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const dts = require("vite-plugin-dts").default;
const path = require("node:path");

module.exports = defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "AnimatedReact",
      fileName: (format) => `animatedreact.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});