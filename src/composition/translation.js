import translate from "deepl";

/**
 * Translate the given title to the desired language from the client
 * @param {string} titleName The title name from the serie/movie
 */
const translateTitle = async (titleName) => {
	if (titleName === null) throw new TypeError(`${titleName} is not a string`);

	const res = await translate({
		free_api: true,
		source_lang: "ES",
		target_lang: "EN",
		text: titleName,
		auth_key: import.meta.env.VITE_DEEPL_API_KEY
	});

	const translatedText = res.data.translations[0].text;

	console.log(translatedText);
	return translatedText;
};

export default translateTitle;
