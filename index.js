import{a as p,S as m,i as s}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function y(e,o){return(await p.get(e,{params:{key:e.key,q:e.q,image_type:e.image_type,orientation:e.orientation,safesearch:e.safesearch,per_page:e.per_page,page:o}})).data}let g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function f(){const e=document.querySelector(".loader");e.style.display="block"}function h(){const e=document.querySelector(".loader");e.style.display="none"}function L(e){const o=document.querySelector(".gallery"),n=e.map(a=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${a.largeImageURL}">
					<img
						class="gallery-image"
						src="${a.webformatURL}"
						alt="${a.tags}"
					/>
				</a>
					<ul class="image-desc">
						<li>
							<p>Likes</p>
							<p>${a.likes}</p>
						</li>
						<li>
							<p>Views</p>
							<p>${a.views}</p>
						</li>
						<li>
							<p>Comments</p>
							<p>${a.comments}</p>
						</li>
						<li>
							<p>Downloads</p>
							<p>${a.downloads}</p>
						</li>
					</ul>
			</li>
		`).join("");o.insertAdjacentHTML("beforeend",n),g.refresh()}function w(){const e=document.querySelector(".gallery");e.innerHTML=""}function b(){const e=document.querySelector("#load-more");e.style.display="block"}function S(){const e=document.querySelector("#load-more");e.style.display="none"}const u=document.querySelector(".form"),v=u.elements["search-text"],M=document.querySelector("#load-more");let l,B=15,c;u.addEventListener("submit",async e=>{if(e.preventDefault(),!v.value.trim()){s.warning({message:"Your entering data must be correct",position:"topRight"});return}w(),l=1,d()});M.addEventListener("click",async()=>{l++,await d();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})});function q(e){const o=e.hits,n=e.totalHits;if(c=Math.ceil(n/B),!o.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(L(o),l>=c){s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b()}async function d(){S(),f();try{const e=await y("https://pixabay.com/api",l);q(e)}catch(e){s.error({message:e.message,position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
