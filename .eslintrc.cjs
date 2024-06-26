module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json'
			}
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'eslint-config-prettier',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tsconfig.node.json', 'tsconfig.json', 'node_modules'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'import/no-unresolved': ['error'],
		'@typescript-eslint/no-explicit-any': 'off',
		'react-refresh/only-export-components': 'off',
		// 'no-unused-vars': ['off', { varsIgnorePattern: '^_$', argsIgnorePattern: '^_$' }],
		// '@typescript-eslint/no-unused-vars': [
		// 	'off',
		// 	{
		// 		varsIgnorePattern: '^_$',
		// 		argsIgnorePattern: '^_$'
		// 	}
		// ],
		// 'no-console': 'error',
		// '@typescript-eslint/no-unused-vars': 'warn',
		'prettier/prettier': [
			'warn',
			{
				semi: true,
				tabWidth: 2,
				useTabs: true,
				singleQuote: true,
				printWidth: 120,
				jsxSingleQuote: true,
				endOfLine: 'auto',
				trailingComma: 'none',
				arrowParens: 'always'
			}
		]
	}
};
