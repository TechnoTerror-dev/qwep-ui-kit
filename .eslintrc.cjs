module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', 'node_modules/', 'build/'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', '@typescript-eslint', 'react-refresh', 'storybook'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'react-refresh/only-export-components': 'off',
        'prettier/prettier': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
};
