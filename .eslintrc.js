module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        '@ecomfe/eslint-config/vue',
    ],
    globals: {
        uni: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/html-button-has-type': 'off',
    },
};
