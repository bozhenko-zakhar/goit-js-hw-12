import getImagesByQuery from "./js/pixabay-api.js"
import { showLoader, hideLoader, createGallery, clearGallery, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.elements["search-text"];
const loadMoreButton = document.querySelector("#load-more");

let page = 1;
let limit = 15;
let totalPages;
let axiosGetQuery;

form.addEventListener("submit", async e => {
	e.preventDefault();

	clearGallery();
	page = 0;

	if (!input.value.trim()) {
		iziToast.warning({
				message: "Your entering data must be correct",
				position: "topRight"
			});

		return;
	}

	const axiosGetQueryParams = new URLSearchParams({
		key: "53631669-5f3764d338a9b02a712e297a2",
		q: input.value,
		image_type: "photo",
		orientation: "horizontal",
		safesearch: true,
		per_page: 15
	});

	axiosGetQuery = `https://pixabay.com/api?${axiosGetQueryParams}`;

	page++;

	showLoader();

	const data = await getImagesByQuery(axiosGetQuery, page);
	handleDataPromise(data);
});

loadMoreButton.addEventListener("click", async () => {
	page++;

	showLoader();

	const data = await getImagesByQuery(axiosGetQuery, page);
	handleDataPromise(data);

	const image = document.querySelector(".gallery-item");

	window.scrollBy({
		top: image.getBoundingClientRect("top").height * 2,
		behavior: "smooth",
	})
});

function handleDataPromise(data) {
	try {
		hideLoader();
		
		const hits = data.hits;
		const totalHits = data.totalHits;
		totalPages = Math.ceil(totalHits / limit);
		
		if (!hits.length) {
			throw new Error();
		}

		createGallery(hits);

		if (page >= totalPages) {
			iziToast.info({
				message: "We're sorry, but you've reached the end of search results.",
				position: "topRight"
			});
			hideLoadMoreButton();
			return
		}
		
		showLoadMoreButton();

	} catch (error) {
		iziToast.error({
			message: "Sorry, there are no images matching your search query. Please try again!",
			position: "topRight"
		});
	}
}