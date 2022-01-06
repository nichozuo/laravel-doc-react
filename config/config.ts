import { defineConfig } from 'umi';
import { IConfigFromPlugins } from '../src/.umi/core/pluginConfig.d';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: {},
  base: '/docs/',
  publicPath: '/docs/',
  dynamicImport: {},
  hash: true,
  history: { type: 'browser' },
  title: 'API Document',
});
