'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default configuations applied to all environments
var defaultConfig = {
  env: process.env.NODE_ENV,
  get envs() {
    return {
      test: process.env.NODE_ENV === 'test',
      development: process.env.NODE_ENV === 'development',
      production: process.env.NODE_ENV === 'production'
    };
  },
  root: _path2.default.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 4567,
  ip: process.env.IP || '0.0.0.0'
};

// Environment specific overrides
var environmentConfigs = {
  development: {},
  test: {
    port: 5678,
    security: {
      saltRounds: 4
    }
  },
  production: {}
};

// Recursively merge configurations
exports.default = (0, _lodash.merge)(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {});