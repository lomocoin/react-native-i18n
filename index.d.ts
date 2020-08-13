import I18n = require("i18n-js");

export function getLanguages(): Promise<string[]>;

export function tf(key, ...params): string;

export default I18n;
