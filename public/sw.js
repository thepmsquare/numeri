if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(t[i])return;let o={};const c=e=>s(e,i),r={module:{uri:i},exports:o,require:c};t[i]=Promise.all(n.map((e=>r[e]||c(e)))).then((e=>(a(...e),o)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/numeri/_next/static/DXehGMELGQ5m_VHcjOoyL/_buildManifest.js",revision:"097d323c0b7bf85e7dfb5d5371c6bc9a"},{url:"/numeri/_next/static/DXehGMELGQ5m_VHcjOoyL/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/numeri/_next/static/DXehGMELGQ5m_VHcjOoyL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/numeri/_next/static/chunks/72-c253aebb624dcc6d.js",revision:"c253aebb624dcc6d"},{url:"/numeri/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/numeri/_next/static/chunks/main-a569243a073239c4.js",revision:"a569243a073239c4"},{url:"/numeri/_next/static/chunks/pages/_app-b3d6d8ed9d5194bc.js",revision:"b3d6d8ed9d5194bc"},{url:"/numeri/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/numeri/_next/static/chunks/pages/index-9b82d581a0c9a7b8.js",revision:"9b82d581a0c9a7b8"},{url:"/numeri/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/numeri/_next/static/chunks/webpack-4138b216d95f60fb.js",revision:"4138b216d95f60fb"},{url:"/numeri/_next/static/css/35110a17f02a4ca0.css",revision:"35110a17f02a4ca0"},{url:"/numeri/_next/static/css/c1ce75a471f7940f.css",revision:"c1ce75a471f7940f"},{url:"/numeri/favicon.ico",revision:"9bfd8863f55ef98c523f03ac94f709fa"},{url:"/numeri/fonts/Roboto_Slab/LICENSE.txt",revision:"d273d63619c9aeaf15cdaf76422c4f87"},{url:"/numeri/fonts/Roboto_Slab/README.txt",revision:"56c88ae44cc387af27f30254dfe7ab59"},{url:"/numeri/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf",revision:"d5bc46370bbcd2b8ca12f8e3365dd566"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Black.ttf",revision:"ea42831afc2b6fc44007141eb8390406"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf",revision:"02e1b4cf36619036de47b4ac35b08dc3"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-ExtraBold.ttf",revision:"d7699fb48356b45c38294203d4b7577f"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-ExtraLight.ttf",revision:"1c1668911a52ba081353bd3af79b44be"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Light.ttf",revision:"89410baaf0c550c4fab30fabccf02382"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Medium.ttf",revision:"2d7dfc7292f7b78ad08c1d2f920a0bb7"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf",revision:"f6b809aa6460d420334f850f6d644a62"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-SemiBold.ttf",revision:"73252195fa127fdb7907afbe3ab2211b"},{url:"/numeri/fonts/Roboto_Slab/static/RobotoSlab-Thin.ttf",revision:"8535a93b28479ba2534e83e8c717ea0e"},{url:"/numeri/icons/icon-192x192.png",revision:"a7834c5f796143e5da394afbdee652bd"},{url:"/numeri/icons/icon-512x512.png",revision:"524712a006670a5bdf43c064d0a962c0"},{url:"/numeri/manifest.json",revision:"447f3ec44f81110f0ba1d82e8d8f689b"},{url:"/numeri/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/numeri",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:n})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));