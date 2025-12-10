import axios from "axios";

export default async function getImagesByQuery(query, page) {
	const response = await axios.get(query, {
		params: {
			key: "53631669-5f3764d338a9b02a712e297a2",
			image_type: "photo",
			orientation: "horizontal",
			safesearch: true,
			per_page: 15,
			page: page
		}
	});

	return response.data;
}