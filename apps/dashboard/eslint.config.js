import commonConfig from '@csa/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default [...commonConfig, ...pluginQuery.configs['flat/recommended']];
