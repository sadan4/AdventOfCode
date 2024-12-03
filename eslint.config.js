import stylistic from "@stylistic/eslint-plugin"
// @ts-check
/**
 * @typedef {import("@stylistic/eslint-plugin").RuleOptions} BaseRules  
 * @typedef {{
 * [K in keyof BaseRules]: ["off" | "warn" | "error", ...BaseRules[K]]
 * }} Rules
 */
/**
 * @type {Rules}
 */
const rules = {
    "@stylistic/array-bracket-newline": [
        "error",
        {
            multiline: true,
        },
    ],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/array-element-newline": [
        "error",
        {
            multiline: true,
        },
    ],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": [
        "error",
        {
            after: true,
            before: true,
        },
    ],
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/brace-style": [
        "error",
        "1tbs",
        {
            allowSingleLine: true,
        },
    ],
    "@stylistic/comma-dangle": [
        "error",
        {
            importAttributes: "never",
            enums: "always",
            arrays: "always-multiline",
            imports: "always-multiline",
            dynamicImports: "always-multiline",
            functions: "always-multiline",
            exports: "always-multiline",
            generics: "always-multiline",
            objects: "always-multiline",
            tuples: "always-multiline",
        },
    ],
    "@stylistic/comma-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "@stylistic/comma-style": ["error", "last"],
    "@stylistic/computed-property-spacing": [
        "error",
        "never",
        {
            enforceForClassMembers: true,
        },
    ],
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-paren-newline": ["error", "multiline"],
    "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
    "@stylistic/indent": ["error", 4],
    "@stylistic/key-spacing": [
        "error",
        {
            beforeColon: false,
            afterColon: true,
            mode: "strict",
        },
    ],
    "@stylistic/keyword-spacing": [
        "error",
        {
            before: true,
            after: true,
        },
    ],
    "@stylistic/line-comment-position": ["off"],
    

}
/**
 * @type {import("eslint").Linter.Config[]}
 */
const d = [
    {
        files: ["js", "mjs", "cjs", "ts", "mts"].map(x => `**/*.${x}`),
        plugins: {
            "@stylistic": stylistic,
        },
        rules,
    },
]
export default d;
