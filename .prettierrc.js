module.exports = {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    svelteSortOrder: 'styles-scripts-markup',
    svelteStrictMode: true,
    svelteBracketNewLine: true,
    svelteAllowShorthand: false,
    overrides: [
        {
            files: ['*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
}
