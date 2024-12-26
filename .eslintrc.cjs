//Plugins: Cung cấp quy tắc, nhưng bạn cần chỉ định chúng trong rules.
// Extends: Kế thừa toàn bộ quy tắc từ cấu hình đã định nghĩa sẵn.

module.exports = {
	// root: true chỉ định rằng tệp cấu hình này là gốc của dự án
	root: true,
	// env chỉ định môi trường mà mã đang chạy
	env: {
		// browser: true chỉ định rằng mã đang chạy trong môi trường trình duyệt
		browser: true,
		// es2020: true chỉ định rằng mã đang sử dụng các tính năng ECMAScript 2020
		es2020: true
	},
	// cài đặt cho trình giải quyết import
	settings: {
		'import/resolver': {
			// cấu hình cho import TypeScript
			typescript: {
				// alwaysTryTypes: true có nghĩa là trình giải quyết sẽ luôn cố gắng giải quyết các loại
				alwaysTryTypes: true,
				// project: './tsconfig.json' chỉ định đường dẫn đến tệp tsconfig
				project: './tsconfig.json',
				// tsconfigRootDir: __dirname chỉ định thư mục gốc của dự án
				tsconfigRootDir: __dirname
			}
		}
	},
	plugins: ['react', 'prettier'],
	extends: [
		'eslint-config-prettier',
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	rules: {
		// from @typescript-eslint
		'import/no-unresolved': ['error'],
		//
		// 'react/jsx-sort-props': [
		// 	'error',
		// 	{
		// 		reservedFirst: true,
		// 		shorthandLast: true
		// 	}
		// ],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		//
		'@typescript-eslint/no-explicit-any': 'off'
	},
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tsconfig.node.json', 'tsconfig.json', 'node_modules']
};
