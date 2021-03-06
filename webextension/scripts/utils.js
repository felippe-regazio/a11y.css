/**
 * returns a localised string
 * @param {String} str
 * @param {String} locale (optional)
 */
function _t() {
	var args = _t.arguments;
	var str = args[0] ? args[0] : "";
	var localestr = (args[1] && args[1].length > 0) ? args[1] : locale;
	return (localeStrings[localestr] && localeStrings[localestr][str]) ? localeStrings[localestr][str] : '???';
}

/**
 * Documents the error to the console
 * @param {Error} error
 */
function onError(error) {
	console.error(`a11y.css error: ${error}`);
}

/**
 * Documents what we got from a STORAGE.get()
 * @param {Object} item
 */
function onGot(item) {
	console.info(`a11y.css got`, item);
}
