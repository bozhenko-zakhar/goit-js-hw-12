import getImagesByQuery from "./js/pixabay-api.js"
import { showLoader, hideLoader, createGallery, clearGallery } from "./js/render-functions.js"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", e => {
	e.preventDefault();

	clearGallery();

	if (!input.value.trim()) {
		iziToast.warning({
				message: "Your entering data must be correct",
				position: "topRight"
			});

		return
	} 

	const axiosGetQueryParams = new URLSearchParams({
		key: "53631669-5f3764d338a9b02a712e297a2",
		q: input.value,
		image_type: "photo",
		orientation: "horizontal",
		safesearch: true
	});

	const axiosGetQuery = `https://pixabay.com/api?${axiosGetQueryParams}`;
	const promise = getImagesByQuery(axiosGetQuery);
	showLoader();

	promise.then(response => {
		hideLoader();

		const hits = response.data.hits;
		
		if (!hits.length) {
			throw new Error();
		}

		createGallery(hits);
	}).catch(() => {
		iziToast.error({
				message: "Sorry, there are no images matching your search query. Please try again!",
				position: "topRight"
			});
	})
})