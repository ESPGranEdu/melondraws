export default class ShowFetchError extends Error {
	/**
	 * Displays an error when the request of a certain show fails
	 * @param {string} errorMessage The actual error message
	 * @param {string} titleName The name of the fetched show
	 */
	constructor(errorMessage, titleName) {
		super(errorMessage);
		this.titleName = titleName;
	}
}
