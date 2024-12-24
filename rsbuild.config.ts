import path from 'node:path';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies } from './package.json';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'helpCenter',
      dts: false,
      manifest: false,
      exposes: {
        './App': './src/app/entry/entry.expose.tsx',
      },
      filename: 'remoteEntry.js',
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
            eager: true,
          },
        },
        {
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
            eager: true,
          },
        },
        {
          '@mui/material': {
            requiredVersion: dependencies['@mui/material'],
            eager: true,
          },
        },
        {
          '@mui/icons-material': {
            requiredVersion: dependencies['@mui/icons-material'],
            eager: true,
          },
        },
        {
          '@emotion/react': {
            requiredVersion: dependencies['@emotion/react'],
            eager: true,
          },
        },
        {
          '@emotion/styled': {
            requiredVersion: dependencies['@emotion/styled'],
            eager: true,
          },
        },
      ],
    }),
  ],
  server: {
    port: 9000,
  },
  html: {
    template: './index.html',
  },
  source: {
    define: publicVars,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
