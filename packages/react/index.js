'use strict';

const {join} = require('path');
const {readFileSync} = require('fs');

const {safeLoad} = require('js-yaml');

module.exports = safeLoad(readFileSync(join(__dirname, 'shared-config.yml'), 'utf8'));
