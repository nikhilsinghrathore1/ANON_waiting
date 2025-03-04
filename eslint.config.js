import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)



// modularisation and compilable functional independance plays vital role to build an software with effective modular design fd is the function which is atomic in nature so that it performs only single task of software without or with least interation other module it is considered a sign of growth in modularity easier to use and refactor  easy to understand saves time while developing and deploying the independance of a module can be measured using cohesion and coupling where we want high cohesion and low coupling between the module ?? Cohesion is a measure of functional strength of a module in which all element directed towards performing a single task are contained in the component it can be defined as a internal glue which keeps the module together a cohesive module perfoem a single task ?? coupling it is the measure of degree of interdependance or interaction between two module a good software will have low coupling , comunicational cohesion , temporal cohesion , logical cohesion , co-incidental cohesion 