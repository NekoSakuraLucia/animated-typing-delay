import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "AnimatedTypingText",
            fileName: (format) => `animated-typing-text.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: [
                {
                    format: 'esm',  // สร้างไฟล์ในรูปแบบ ESM
                    entryFileNames: 'animated-typing-text.[format].js',
                    chunkFileNames: 'animated-typing-text.[format].js',
                    dir: 'dist',
                    globals: {
                        vue: 'Vue',
                    },
                },
                {
                    format: 'cjs',  // สร้างไฟล์ในรูปแบบ CommonJS (CJS)
                    entryFileNames: 'animated-typing-text.[format].js',
                    chunkFileNames: 'animated-typing-text.[format].js',
                    dir: 'dist',
                    globals: {
                        vue: 'Vue',
                    },
                }
            ],
        },
    },
});