import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    js.configs.recommended,
    eslintPluginUnicorn.configs['flat/recommended'],
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        ...reactPlugin.configs.flat.recommended,
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.browser,
                vi: true,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            "unicorn/prevent-abbreviations": [
                "error",
                {
                    "allowList": {
                        "props": true
                    }
                }
            ]
        },
    },
];
