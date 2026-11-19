# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [7.0.0](https://github.com/bluecatengineering/eslint-packages/compare/v6.0.1...v7.0.0) (2026-11-19)

### ⚠ BREAKING CHANGES

- @bluecateng/eslint-plugin now requires ESLint 10 or later.
- requires ESLint 10 or later. @eslint/js v10 changes the
  recommended rule set, which may report new problems.
- requires ESLint 10 or later. eslint-plugin-react and
  eslint-plugin-react-hooks are replaced by @eslint-react/eslint-plugin, so
  `react/*` and `react-hooks/*` rule names must be renamed to
  `@eslint-react/*` in configs and eslint-disable comments. Rules without
  an equivalent (prop-types, display-name, no-unknown-property,
  jsx-no-target-blank) are no longer enabled. The React version is read
  from `settings['react-x'].version`, or detected from the installed react
  package.
- the `@bluecateng/intl-strings` rule no longer exists.
  Remove it from any ESLint configuration that references it.
- the `import` plugin is no longer registered. Configs that
  reference `import/*` rules must rename them to `import-x/*`.

### Features

- remove intl-strings rule from plugin ([ad6d703](https://github.com/bluecatengineering/eslint-packages/commit/ad6d703afdb6f9cdb6a7d88abc1ef22e2a2d6c82))
- replace eslint-plugin-import with eslint-plugin-import-x ([3219a0f](https://github.com/bluecatengineering/eslint-packages/commit/3219a0f078560ed2e1f9d6c85956748038ab8557))
- replace eslint-plugin-react with @eslint-react/eslint-plugin ([48b7a28](https://github.com/bluecatengineering/eslint-packages/commit/48b7a288b800be9a03827c7189007e9258b5c6a8))
- require eslint 10 ([85d6289](https://github.com/bluecatengineering/eslint-packages/commit/85d6289fbb0d0656d36a2937754ec9cdf7bc67de))
- update @eslint/js to v10 ([9e4f7b7](https://github.com/bluecatengineering/eslint-packages/commit/9e4f7b77998d95eb101a68bf0063480a3814ab60))

## [6.0.1](https://github.com/bluecatengineering/eslint-packages/compare/v6.0.0...v6.0.1) (2026-11-06)

### Bug Fixes

- use context.filename for ESLint 10 compatibility ([159d9ea](https://github.com/bluecatengineering/eslint-packages/commit/159d9eae5b1dfd53ed1d76c0b9649795231f1af0))

## [6.0.0](https://github.com/bluecatengineering/eslint-packages/compare/v5.1.4...v6.0.0) (2026-08-14)

### ⚠ BREAKING CHANGES

- @bluecateng/eslint-config-react and @bluecateng/eslint-config-core
  no longer configure a Babel-aware parser or the @babel/no-unused-expressions rule.
  JSX continues to work via espree's native JSX support, but non-standard/experimental
  syntax that only Babel understands (e.g. do-expressions, decorators) will now fail
  to parse. Consumers relying on such syntax must configure their own parser
  (e.g. @babel/eslint-parser) for the affected files.

### Bug Fixes

- remove @babel/eslint-parser and @babel/eslint-plugin ([e6fcec0](https://github.com/bluecatengineering/eslint-packages/commit/e6fcec0a3d026a2e9fe3d89b3bafcbf8d4a4fde9))

## [5.1.4](https://github.com/bluecatengineering/eslint-packages/compare/v5.1.3...v5.1.4) (2026-04-21)

### Bug Fixes

- disable more rules that produce too many false positives

## [5.1.3](https://github.com/bluecatengineering/eslint-packages/compare/v5.1.2...v5.1.3) (2026-04-08)

**Note:** Version bump only for package eslint-packages

## [5.1.2](https://github.com/bluecatengineering/eslint-packages/compare/v5.1.1...v5.1.2) (2026-01-30)

### Bug Fixes

- replace deprecated rule no-new-object ([5af2c21](https://github.com/bluecatengineering/eslint-packages/commit/5af2c218bb33a2eb046402e0251bbe707a623207))

## [5.1.1](https://github.com/bluecatengineering/eslint-packages/compare/v5.1.0...v5.1.1) (2026-01-02)

### Bug Fixes

- disable React compiler and other rules that produce too many false positives ([edfe2af](https://github.com/bluecatengineering/eslint-packages/commit/edfe2af14d76b2662274175a96256d748e840536))

## [5.1.0](https://github.com/bluecatengineering/eslint-packages/compare/v5.0.4...v5.1.0) (2026-01-02)

### Features

- update @formatjs/icu-messageformat-parser to v3 ([4d8b3f1](https://github.com/bluecatengineering/eslint-packages/commit/4d8b3f193be62c1def256c17bda48f10a36293b8))
- update eslint-plugin-react-hooks to v7 ([50c7a23](https://github.com/bluecatengineering/eslint-packages/commit/50c7a233e0621aa13da30d03d4dbd5dc6a45d69e))
- update globals to v17 ([f364256](https://github.com/bluecatengineering/eslint-packages/commit/f364256867f13cb5f1278f6408033917812ede99))

## [5.0.4](https://github.com/bluecatengineering/eslint-packages/compare/v5.0.3...v5.0.4) (2025-09-03)

### Bug Fixes

- change enable ignorePackages for import/extensions ([4c1a054](https://github.com/bluecatengineering/eslint-packages/commit/4c1a0549d4a75861f1186f7487bbe777a30cb6c2))

## [5.0.3](https://github.com/bluecatengineering/eslint-packages/compare/v5.0.2...v5.0.3) (2025-08-21)

**Note:** Version bump only for package eslint-packages

## [5.0.2](https://github.com/bluecatengineering/eslint-packages/compare/v5.0.1...v5.0.2) (2025-02-03)

### Bug Fixes

- use correct extension for exported module ([05f2b59](https://github.com/bluecatengineering/eslint-packages/commit/05f2b594502642ca7d3b15be3c4c00ca2b2e7672))

## [5.0.1](https://github.com/bluecatengineering/eslint-packages/compare/v5.0.0...v5.0.1) (2025-02-03)

### Bug Fixes

- use correct property to define the entry point ([480dddc](https://github.com/bluecatengineering/eslint-packages/commit/480dddc06b627bff1ba42597d81978721cdfc1a0))

## [5.0.0](https://github.com/bluecatengineering/eslint-packages/compare/v4.1.0...v5.0.0) (2025-02-03)

### ⚠ BREAKING CHANGES

- eslint@9 contains several breaking changes,
  see https://eslint.org/docs/latest/use/configure/migration-guide.

### Features

- update eslint to v9 ([cc8d350](https://github.com/bluecatengineering/eslint-packages/commit/cc8d350ac06e7bde5fc3455a7e1aab364e890295))

## [4.1.0](https://github.com/bluecatengineering/eslint-packages/compare/v4.0.0...v4.1.0) (2024-02-01)

### Features

- update eslint-config-prettier to v9 ([7801459](https://github.com/bluecatengineering/eslint-packages/commit/78014591cc7943565a8e7890c6c18e5168aae468))

# [4.0.0](https://github.com/bluecatengineering/eslint-packages/compare/v3.0.2...v4.0.0) (2022-10-06)

- chore!: update eslint-plugin-jest to v27 ([a144813](https://github.com/bluecatengineering/eslint-packages/commit/a1448135e45c055ef97245008741650a78d7a5fd))

### Features

- enable rule jest/prefer-to-be ([028d278](https://github.com/bluecatengineering/eslint-packages/commit/028d278a0aa4fb3c7170a03aeb7a89aa428771cf))

### BREAKING CHANGES

- eslint-plugin-jest@27 contains several breaking changes.

## [3.0.2](https://github.com/bluecatengineering/eslint-packages/compare/v3.0.1...v3.0.2) (2022-02-18)

### Bug Fixes

- fix configuration for import/extensions ([6d985e7](https://github.com/bluecatengineering/eslint-packages/commit/6d985e7772c807e1decf7cd47bc2667971351c4e))
