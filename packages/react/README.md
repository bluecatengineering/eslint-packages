# @bluecateng/eslint-config-react

BlueCat shareable config for React.

## Install

```
$ npm i -D @bluecateng/eslint-config-react
```

This config uses [`@eslint-react/eslint-plugin`](https://eslint-react.xyz), which has `typescript` as a required peer
dependency, so npm will also install `typescript` in projects that don't already have it, including plain JavaScript
projects.

## Usage

Requires ESLint 10 or later. Add the config to your `eslint.config.js`:

```js
import {defineConfig} from 'eslint/config';
import bluecatReact from '@bluecateng/eslint-config-react';

export default defineConfig([bluecatReact]);
```
