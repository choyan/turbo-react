import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs/promises';

export default defineConfig(({ mode }) => {
    const environment = loadEnv(mode, process.cwd(), '');
    const isProduction = environment.NODE_ENV === 'production';
    const IS_CI_ENV = !!environment.VITE_IS_CI_ENV;

    return {
        plugins: [react()],
        esbuild: {
            loader: 'jsx',
            include: /src\/.*\.jsx?$/,
            exclude: [],
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: 'load-js-files-as-jsx',
                        setup(build) {
                            build.onLoad(
                                { filter: /src\/.*\.js$/ },
                                async (arguments_) => ({
                                    loader: 'jsx',
                                    contents: await fs.readFile(
                                        arguments_.path,
                                        'utf8',
                                    ),
                                }),
                            );
                        },
                    },
                ],
            },
        },
        build: {
            sourcemap: isProduction && IS_CI_ENV,
            emptyOutDir: isProduction ? true : false,
        },
        server: {
            port: 3000,
        },
        preview: {
            port: 3000,
        },
    };
});
