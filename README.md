# ESLint packages [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/bluecatengineering/eslint-packages/blob/master/LICENSE)

[Rules](https://eslint.org/docs/developer-guide/working-with-rules) and
[shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) for BlueCat.

## Packages

| Package                                  | Description             |
| ---------------------------------------- | ----------------------- |
| [@bluecateng/eslint-plugin](plugin)      | Custom rule definitions |
| [@bluecateng/eslint-config-core](core)   | Core config             |
| [@bluecateng/eslint-config-node](node)   | Node config             |
| [@bluecateng/eslint-config-react](react) | React config            |

## Install

```
$ npm i -D @bluecateng/eslint-config-[CONFIG]
```

## Usage

Requires ESLint 10 or later. Add the config to your `eslint.config.js`:

```js
import {defineConfig} from 'eslint/config';
import bluecatConfig from '@bluecateng/eslint-config-[CONFIG]';

export default defineConfig([bluecatConfig]);
```
