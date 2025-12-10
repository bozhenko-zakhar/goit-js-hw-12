import axios from "axios";

export default async function getImagesByQuery(query, page) {
	const response = await axios.get("https://pixabay.com/api", {
		params: {
			key: query.key,
			q: query.q,
			image_type: query.image_type,
			orientation: query.orientation,
			safesearch: query.safesearch,
			per_page: query.per_page,
			page: page
		}
	});

	return response.data;
}