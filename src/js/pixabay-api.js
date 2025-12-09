import axios from "axios";

export default function getImagesByQuery(query) {
	return axios.get(query);
}