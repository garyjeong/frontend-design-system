import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve';
  
  return {
    plugins: [
      react(),
      // DTS는 빌드 모드에서만 실행
      !isDev && dts({
        include: ['src/components/'],
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 개발 모드에서는 일반 앱 모드로 동작
    ...(isDev ? {
      root: '.',
      server: {
        port: 5173,
        open: true,
      },
    } : {
      // 빌드 모드에서는 라이브러리 모드
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'FrontendDesignSystem',
          formats: ['es', 'umd'],
          fileName: (format) => `frontend-design-system.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }),
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  };
});

