# @bluecateng/eslint-config-node

BlueCat shareable config for Node.

## Install

```
$ npm i -D @bluecateng/eslint-config-node
```

## Usage

Requires ESLint 10 or later. Add the config to your `eslint.config.js`:

```js
import {defineConfig} from 'eslint/config';
import bluecatNode from '@bluecateng/eslint-config-node';

export default defineConfig([bluecatNode]);
```
