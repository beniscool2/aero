'use strict';

export const rewrite = {
	url(url) {
		if (url.startsWith('data:'))
			return url;
		else if (url.startsWith('./'))
			url = url.splice(2);

		return location.origin + '/http/' + url.startsWith('http://') || url.startsWith('https://') || url.startsWith('ws://') || url.startsWith('wss://') ? ctx.origin + url.startsWith('/') ? '' : '/' : url;
	},
	js(script) {
		return `
		{
			${script.replaceAll(/\b(?<!\[[^\]]*(?=\blet\b[^\]]*\])|{[^}]*(?=\blet\b[^}]*}))let\b/, 'var')}
		}`;
	}
};