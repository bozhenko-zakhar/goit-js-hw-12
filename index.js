import{a as g,S as h,i}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function p(t,o){return(await g.get(t,{params:{page:o}})).data}function y(){const t=document.querySelector(".loader");t.style.display="block"}function w(){const t=document.querySelector(".loader");t.style.display="none"}function L(t){const o=document.querySelector(".gallery"),a=t.map(e=>`
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
		`).join("");o.insertAdjacentHTML("beforeend",a),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function S(){const t=document.querySelector("#load-more");t.style.display="block"}function q(){const t=document.querySelector("#load-more");t.style.display="none"}const m=document.querySelector(".form"),u=m.elements["search-text"],v=document.querySelector("#load-more");let s=1,P=15,d,c;m.addEventListener("submit",async t=>{if(t.preventDefault(),b(),s=0,!u.value.trim()){i.warning({message:"Your entering data must be correct",position:"topRight"});return}c=`https://pixabay.com/api?${new URLSearchParams({key:"53631669-5f3764d338a9b02a712e297a2",q:u.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`,s++,y();const a=await p(c,s);f(a)});v.addEventListener("click",async()=>{s++,y();const t=await p(c,s);f(t);const o=document.querySelector(".gallery-item");window.scrollBy({top:o.getBoundingClientRect("top").height*2,behavior:"smooth"})});function f(t){try{w();const o=t.hits,a=t.totalHits;if(d=Math.ceil(a/P),!o.length)throw new Error;if(L(o),s>=d){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),q();return}S()}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
