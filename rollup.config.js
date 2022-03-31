import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/js/app.js',
    output: {
      file: 'rollup-bundle.js',
      format: 'es'
    },
    plugins: [nodeResolve()]
  };