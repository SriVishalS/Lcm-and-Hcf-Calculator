if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>i(e,n),d={module:{uri:n},exports:o,require:c};s[n]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"ad524b3809f61e17a8c398c45956d440"},{url:"manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"script.js",revision:"8adee851ed0b10d8381571859060bd79"},{url:"style.css",revision:"f0bfcb1b1d2d4ffc712c3844b0a5abe8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
