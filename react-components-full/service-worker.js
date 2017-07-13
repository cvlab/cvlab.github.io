"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","8ed77d2f81bab8dd4b7260d3a305e7c0"],["static/css/main.9bf660b2.css","b1e23f37ee97d9c5a63c633f7b97fb08"],["static/js/main.932af2b2.js","66610fea3f4ce4fa2a2afcd377486185"],["static/media/ic_add_white_24px.c3379830.svg","c3379830302abe84f64db87b5bac9faa"],["static/media/ic_beach_access_black_24px.b2298c5d.svg","b2298c5d610e9e6b7c10bc7f9c8461f2"],["static/media/ic_business_center_black_24px.13b9b57c.svg","13b9b57cf16c913a12014fd34c0bbb9a"],["static/media/ic_email_black_24px.e0beb721.svg","e0beb7215d453694fe4324a6f5388dde"],["static/media/ic_email_white_24px.1346985c.svg","1346985c7aaceb601b0d4257133254f4"],["static/media/ic_favorite_red_24px.b4dfc999.svg","b4dfc999f3ff8ccf2503f41b85c6ee1d"],["static/media/ic_free_breakfast_black_24px.24e8589b.svg","24e8589b46e957db1e4d34c520be1674"],["static/media/ic_mail_black_24px.e0beb721.svg","e0beb7215d453694fe4324a6f5388dde"],["static/media/ic_phone_black_24px.d6de4846.svg","d6de48468050ce7b52f2b50c48ff47f6"],["static/media/ic_phone_white_24px.0e912da6.svg","0e912da6ff401db670dc1921cc2c5aaf"],["static/media/ic_public_black_24px.1a9876c6.svg","1a9876c6c7adf78b6fb31e58048699cd"],["static/media/ic_public_white_24px.5bac2c42.svg","5bac2c422cf7c556be4b79b4a8cbfa95"],["static/media/ic_send_white_24px.3293841e.svg","3293841eae43ff2793db9f4dc4a2f5e7"],["static/media/ic_share_black_24px.4768a65e.svg","4768a65e0a3ec0cbd7fa8ab029309020"],["static/media/ic_share_white_24px.d90f9830.svg","d90f983093d67de603f6e152aae7e860"],["static/media/ic_star_black_24px.498e65a6.svg","498e65a637fa9c9aba50564bf98243c9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/react-components-full/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});