import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: 'http://192.168.0.16:8000/docs/',
  mfsu: {},
});
