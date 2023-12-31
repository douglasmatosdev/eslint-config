module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "standard"
    ],
    extends: [
        // "next/core-web-vitals",
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
        // "prettier/@typescript-eslint", // has been merged into "prettier" in eslint-config-prettier 8.0.0
        // "prettier/react", // has been merged into "prettier" in eslint-config-prettier 8.0.0
        // "prettier/standard" // has been merged into "prettier" in eslint-config-prettier 8.0.0
    ],
    env: {
        browser: true,
        jest: true
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-return-assign": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "next-line space-infix-ops": "off",
        eqeqeq: [
            "warn",
            "smart"
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        curly: [
            "warn",
            "multi-line",
            "consistent"
        ],
        "newline-before-return": "warn",
        "prettier/prettier": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ["*.ts", "*.tsx", ".js", ".jsx"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": ["error"],
                "@typescript-eslint/explicit-function-return-type": ["warn", {
                    allowExpressions: true
                }],
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true
                    }
                ],
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": false, "variables": false }]
            }
        }
    ],
    settings: {
        react: {
            version: "detect"
        }
    }
}
