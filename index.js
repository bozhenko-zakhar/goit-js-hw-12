import{a as u,S as p,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(r){return u.get(r)}function y(){const r=document.querySelector(".loader");r.style.display="block"}function m(){const r=document.querySelector(".loader");r.style.display="none"}function f(r){const o=document.querySelector(".gallery"),s=r.map(e=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${e.largeImageURL}">
					<img
						class="gallery-image"
						src="${e.webformatURL}"
						alt="${e.tags}"
					/>
				</a>
					<ul class="image-desc">
						<li>
							<p>Likes</p>
							<p>${e.likes}</p>
						</li>
						<li>
							<p>Views</p>
							<p>${e.views}</p>
						</li>
						<li>
							<p>Comments</p>
							<p>${e.comments}</p>
						</li>
						<li>
							<p>Downloads</p>
							<p>${e.downloads}</p>
						</li>
					</ul>
			</li>
		`).join("");o.insertAdjacentHTML("beforeend",s),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}const c=document.querySelector(".form"),n=c.elements["search-text"];c.addEventListener("submit",r=>{if(r.preventDefault(),g(),!n.value.trim()){l.warning({message:"Your entering data must be correct",position:"topRight"});return}const s=`https://pixabay.com/api?${new URLSearchParams({key:"53631669-5f3764d338a9b02a712e297a2",q:n.value,image_type:"photo",orientation:"horizontal",safesearch:!0})}`,a=d(s);y(),a.then(e=>{m();const t=e.data.hits;if(!t.length)throw new Error;f(t)}).catch(()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
