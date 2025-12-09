import axios from "axios";

export default async function getImagesByQuery(query, page) {
	const response = await axios.get(query, {
		params: {
			page
		}
	});

	return response.data;
}