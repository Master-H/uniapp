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
        UniNamespace: true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        jsx: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-undef': 'off',
        'vue/html-button-has-type': 'off',
        'vue/v-on-event-hyphenation': ['off'],
        // 解决enum使用报no-unused-vars警告
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
};
