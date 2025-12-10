import{a as m,S as y,i as s}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function g(e,o){return(await m.get("https://pixabay.com/api",{params:{key:e.key,q:e.q,image_type:e.image_type,orientation:e.orientation,safesearch:e.safesearch,per_page:e.per_page,page:o}})).data}let f=new y(".gallery a",{captionsData:"alt",captionDelay:250});function h(){const e=document.querySelector(".loader");e.style.display="block"}function L(){const e=document.querySelector(".loader");e.style.display="none"}function b(e){const o=document.querySelector(".gallery"),n=e.map(a=>`
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
		`).join("");o.insertAdjacentHTML("beforeend",n),f.refresh()}function w(){const e=document.querySelector(".gallery");e.innerHTML=""}function S(){const e=document.querySelector("#load-more");e.style.display="block"}function v(){const e=document.querySelector("#load-more");e.style.display="none"}const u=document.querySelector(".form"),d=u.elements["search-text"],q=document.querySelector("#load-more");let i,M=15,c;u.addEventListener("submit",async e=>{if(e.preventDefault(),!d.value.trim()){s.warning({message:"Your entering data must be correct",position:"topRight"});return}w(),i=1,p()});q.addEventListener("click",async()=>{i++,await p();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})});function B(e){const o=e.hits,n=e.totalHits;if(c=Math.ceil(n/M),!o.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(b(o),i>=c){s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}S()}async function p(){v(),h();try{const e=await g({key:"53631669-5f3764d338a9b02a712e297a2",q:d.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15},i);B(e)}catch(e){s.error({message:e.message,position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
