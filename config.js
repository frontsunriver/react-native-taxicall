'use strict';

import I18n from './src/i18n/_i18n';

exports.ENV = 'production';
exports.I18n = I18n;
exports.LANGUAGES = require('./src/json/languages.json');
exports.LOCALIZE_NUMBERS = true;
exports.LTR_LOCALES = ['en'];
exports.DEFAULT_LOCALE = 'en';