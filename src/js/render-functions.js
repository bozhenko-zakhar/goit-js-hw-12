// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function showLoader() {
	const loader = document.querySelector(".loader");

	loader.style.display = "block";
}

export function hideLoader() {
	const loader = document.querySelector(".loader");

	loader.style.display = "none";
}

export function createGallery(images) {
	const gallery = document.querySelector(".gallery");

	const galleryImages = images.map(image => {
		return (`
			<li class="gallery-item">
				<a class="gallery-link" href="${image.largeImageURL}">
					<img
						class="gallery-image"
						src="${image.webformatURL}"
						alt="${image.tags}"
					/>
				</a>
					<ul class="image-desc">
						<li>
							<p>Likes</p>
							<p>${image.likes}</p>
						</li>
						<li>
							<p>Views</p>
							<p>${image.views}</p>
						</li>
						<li>
							<p>Comments</p>
							<p>${image.comments}</p>
						</li>
						<li>
							<p>Downloads</p>
							<p>${image.downloads}</p>
						</li>
					</ul>
			</li>
		`)
	}).join("");

	gallery.insertAdjacentHTML("beforeend", galleryImages);
	
	let lightboxGallery = new SimpleLightbox('.gallery a', {
		captionsData: "alt",
		captionDelay: 250
	});

	lightboxGallery.refresh();
}

export function clearGallery() {
	const gallery = document.querySelector(".gallery");
	gallery.innerHTML = "";
}