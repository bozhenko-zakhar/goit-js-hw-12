import getImagesByQuery from "./js/pixabay-api.js"
import { showLoader, hideLoader, createGallery, clearGallery, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.elements["search-text"];
const loadMoreButton = document.querySelector("#load-more");

let page;
let limit = 15;
let totalPages;

form.addEventListener("submit", async e => {
	e.preventDefault();

	if (!input.value.trim()) {
		iziToast.warning({
				message: "Your entering data must be correct",
				position: "topRight"
			});

		return
	}

	clearGallery();
	page = 1;
	loadImages();
});

loadMoreButton.addEventListener("click", async () => {
	page++;
	await loadImages();

	const galleryImage = document.querySelector(".gallery-item");
	const imageHeight = galleryImage.getBoundingClientRect().height;
	
	window.scrollBy({
		top: imageHeight * 2,
		behavior: "smooth",
	});
})

function handleDataPromise(data) {
	const hits = data.hits;
	const totalHits = data.totalHits;
	totalPages = Math.ceil(totalHits / limit);

	if (!hits.length) {
		iziToast.error({
			message: "Sorry, there are no images matching your search query. Please try again!",
			position: "topRight"
		});
		return
	}

	createGallery(hits);

	if (page >= totalPages) {
		iziToast.info({
			message: "We're sorry, but you've reached the end of search results.",
			position: "topRight"
		});
		return
	}

	showLoadMoreButton();
}

async function loadImages() {
	hideLoadMoreButton();
	showLoader();

	try {
		const data = await getImagesByQuery({
			key: "53631669-5f3764d338a9b02a712e297a2",
			q: input.value,
			image_type: "photo",
			orientation: "horizontal",
			safesearch: true,
			per_page: 15
		}, page);
		
		handleDataPromise(data);
	} catch (error) {
		iziToast.error({
			message: error.message,
			position: "topRight"
		});
	} finally {
		hideLoader();
	}
}