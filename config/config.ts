import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  // mfsu: {},
  publicPath: './',
  dynamicImport: {},
  hash: true,
  history: { type: 'hash' },
  title: 'API Document',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000/api/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
