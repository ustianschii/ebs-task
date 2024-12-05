import { mergeConfig, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      watch: false,
      testTimeout: 20000,
      hookTimeout: 20000,
    },
  })
);
