import ShowFetchError from "./show_fetch_error";
/**
 * Get a specific movie or series from OMDB
 * @param {String} title Title of the movie or serie
 */
const getSerieOrMovie = async (title) => {
	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${
			import.meta.env.VITE_OMDB_API_KEY
		}&t=${title}`
	);
	const json = await res.json();
	console.log(json);

	if (json["Response"] === "True")
		return {
			title: json.Title,
			poster: json.Poster,
			year: json.Year,
			type: json.Type
		};

	throw new ShowFetchError(
		"No se pudo encontrar informacion sobre el titulo deseado",
		title
	);
};

export default getSerieOrMovie;
