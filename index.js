// @flow

'use strict';

const RNI18n = require('react-native').NativeModules.RNI18n;
const I18nJs = require('i18n-js');

if (typeof RNI18n !== 'undefined') {
  I18nJs.locale = RNI18n.languages[0];
} else if (__DEV__) {
  console.warn('react-native-i18n module is not correctly linked');
}

export const getLanguages = () => RNI18n.getLanguages();

const replaceWithParams = (text, params) => {
  let result = text;
  params.forEach((value, index) => {
    const reg = new RegExp(`({)${index}(})`, 'g');
    result = result.replace(reg, value);
  });
  return result;
};

export const tf = (key, ...params) => {
  return replaceWithParams(I18nJs.t(key), params);
};

export default I18nJs;
