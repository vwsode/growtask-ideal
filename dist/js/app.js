// LIBS
/**
 * Swiper 9.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 28, 2023
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function l(){return Date.now()}function o(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function d(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function c(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!c(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(d(e[i])&&d(a[i])?a[i].__swiper__?e[i]=a[i]:p(e[i],a[i]):!d(e[i])&&d(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:p(e[i],a[i])):e[i]=a[i])}}}return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:[t]),s}function v(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function w(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function b(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function y(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function E(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function x(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let S,T,M;function C(){return S||(S=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),S}function P(e){return void 0===e&&(e={}),T||(T=function(e){let{userAgent:t}=void 0===e?{}:e;const s=C(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),T}function L(){return M||(M=function(){const e=r();let t=!1;function s(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(s()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[e,a]=s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&a<2}}return{isSafari:t||s(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),M}var A={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var $={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(w(a,"padding-left")||0,10)-parseInt(w(a,"padding-right")||0,10),s=s-parseInt(w(a,"padding-top")||0,10)-parseInt(w(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{wrapperEl:i,slidesEl:r,size:n,rtlTranslate:l,wrongRTL:o}=e,d=e.virtual&&a.virtual.enabled,c=d?e.virtual.slides.length:e.slides.length,p=f(r,`.${e.params.slideClass}, swiper-slide`),m=d?e.virtual.slides.length:p.length;let h=[];const g=[],v=[];let b=a.slidesOffsetBefore;"function"==typeof b&&(b=a.slidesOffsetBefore.call(e));let y=a.slidesOffsetAfter;"function"==typeof y&&(y=a.slidesOffsetAfter.call(e));const E=e.snapGrid.length,S=e.slidesGrid.length;let T=a.spaceBetween,M=-b,C=0,P=0;if(void 0===n)return;"string"==typeof T&&T.indexOf("%")>=0&&(T=parseFloat(T.replace("%",""))/100*n),e.virtualSize=-T,p.forEach((e=>{l?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),a.centeredSlides&&a.cssMode&&(u(i,"--swiper-centered-offset-before",""),u(i,"--swiper-centered-offset-after",""));const L=a.grid&&a.grid.rows>1&&e.grid;let A;L&&e.grid.initSlides(m);const $="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<m;i+=1){let r;if(A=0,p[i]&&(r=p[i]),L&&e.grid.updateSlide(i,r,m,t),!p[i]||"none"!==w(r,"display")){if("auto"===a.slidesPerView){$&&(p[i].style[t("width")]="");const n=getComputedStyle(r),l=r.style.transform,o=r.style.webkitTransform;if(l&&(r.style.transform="none"),o&&(r.style.webkitTransform="none"),a.roundLengths)A=e.isHorizontal()?x(r,"width",!0):x(r,"height",!0);else{const e=s(n,"width"),t=s(n,"padding-left"),a=s(n,"padding-right"),i=s(n,"margin-left"),l=s(n,"margin-right"),o=n.getPropertyValue("box-sizing");if(o&&"border-box"===o)A=e+i+l;else{const{clientWidth:s,offsetWidth:n}=r;A=e+t+a+i+l+(n-s)}}l&&(r.style.transform=l),o&&(r.style.webkitTransform=o),a.roundLengths&&(A=Math.floor(A))}else A=(n-(a.slidesPerView-1)*T)/a.slidesPerView,a.roundLengths&&(A=Math.floor(A)),p[i]&&(p[i].style[t("width")]=`${A}px`);p[i]&&(p[i].swiperSlideSize=A),v.push(A),a.centeredSlides?(M=M+A/2+C/2+T,0===C&&0!==i&&(M=M-n/2-T),0===i&&(M=M-n/2-T),Math.abs(M)<.001&&(M=0),a.roundLengths&&(M=Math.floor(M)),P%a.slidesPerGroup==0&&h.push(M),g.push(M)):(a.roundLengths&&(M=Math.floor(M)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup==0&&h.push(M),g.push(M),M=M+A+T),e.virtualSize+=A+T,C=A,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,n)+y,l&&o&&("slide"===a.effect||"coverflow"===a.effect)&&(i.style.width=`${e.virtualSize+a.spaceBetween}px`),a.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+a.spaceBetween}px`),L&&e.grid.updateWrapperSize(A,h,t),!a.centeredSlides){const t=[];for(let s=0;s<h.length;s+=1){let i=h[s];a.roundLengths&&(i=Math.floor(i)),h[s]<=e.virtualSize-n&&t.push(i)}h=t,Math.floor(e.virtualSize-n)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-n)}if(d&&a.loop){const t=v[0]+T;if(a.slidesPerGroup>1){const s=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),i=t*a.slidesPerGroup;for(let e=0;e<s;e+=1)h.push(h[h.length-1]+i)}for(let s=0;s<e.virtual.slidesBefore+e.virtual.slidesAfter;s+=1)1===a.slidesPerGroup&&h.push(h[h.length-1]+t),g.push(g[g.length-1]+t),e.virtualSize+=t}if(0===h.length&&(h=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&l?"marginLeft":t("marginRight");p.filter(((e,t)=>!(a.cssMode&&!a.loop)||t!==p.length-1)).forEach((e=>{e.style[s]=`${T}px`}))}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;v.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-n;h=h.map((e=>e<0?-b:e>t?t+y:e))}if(a.centerInsufficientSlides){let e=0;if(v.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<n){const t=(n-e)/2;h.forEach(((e,s)=>{h[s]=e-t})),g.forEach(((e,s)=>{g[s]=e+t}))}}if(Object.assign(e,{slides:p,snapGrid:h,slidesGrid:g,slidesSizesGrid:v}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){u(i,"--swiper-centered-offset-before",-h[0]+"px"),u(i,"--swiper-centered-offset-after",e.size/2-v[v.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(m!==c&&e.emit("slidesLengthChange"),h.length!==E&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==S&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(d||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.el.classList.contains(t);m<=a.maxBackfaceHiddenSlides?s||e.el.classList.add(t):s&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.forEach((e=>{e.classList.remove(s.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a[e].classList.add(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndex(t.slides.filter((e=>"0"===e.getAttribute("data-swiper-slide-index")))[0]),a=t.getSlideIndex(t.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")==t.slides.length-1))[0]),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let l;if(t.forEach((e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)})),r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=n(`[data-swiper-slide-index="${t}"]`)}else l=n(`[data-swiper-slide-index="${i}"]`);else l=t[i];if(l){l.classList.add(s.slideActiveClass);let e=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(l,`.${s.slideClass}, swiper-slide`)[0];s.loop&&!e&&(e=t[0]),e&&e.classList.add(s.slideNextClass);let a=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(l,`.${s.slideClass}, swiper-slide`)[0];s.loop&&0===!a&&(a=t[t.length-1]),a&&a.classList.add(s.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r)return o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=c(d)));let p;p=t.virtual&&i.virtual.enabled&&i.loop?c(d):t.slides[d]?parseInt(t.slides[d].getAttribute("data-swiper-slide-index")||d,10):d,Object.assign(t,{snapIndex:o,realIndex:p,previousIndex:r,activeIndex:d}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),n!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=e.closest(`.${s.slideClass}, swiper-slide`);let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var z={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=o(i,e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(r.style.transform=`translate3d(${o}px, ${d}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d;const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function k(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var I={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(r.animating&&l.preventInteractionOnTransition||!f&&!a&&!i)return!1;const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this;let r=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?r+=i.virtual.slidesBefore:r=i.getSlideIndex(i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===r))[0])),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i)return a;let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o)return a;const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(f,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const l=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${l}[data-swiper-slide-index="${i}"]`)[0]),n((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${l}[data-swiper-slide-index="${i}"]`)[0]),n((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var O={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");const h="auto"===m.slidesPerView?o.slidesPerViewDynamic():Math.ceil(parseFloat(m.slidesPerView,10));let f=m.loopedSlides||h;f%m.slidesPerGroup!=0&&(f+=m.slidesPerGroup-f%m.slidesPerGroup),o.loopedSlides=f;const g=[],v=[];let w=o.activeIndex;void 0===r?r=o.getSlideIndex(o.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]):w=r;const b="next"===a||!a,y="prev"===a||!a;let E=0,x=0;if(r<f){E=Math.max(f-r,m.slidesPerGroup);for(let e=0;e<f-r;e+=1){const t=e-Math.floor(e/d.length)*d.length;g.push(d.length-t-1)}}else if(r>o.slides.length-2*f){x=Math.max(r-(o.slides.length-2*f),m.slidesPerGroup);for(let e=0;e<x;e+=1){const t=e-Math.floor(e/d.length)*d.length;v.push(t)}}if(y&&g.forEach((e=>{u.prepend(o.slides[e])})),b&&v.forEach((e=>{u.append(o.slides[e])})),o.recalcSlides(),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(g.length>0&&y)if(void 0===t){const e=o.slidesGrid[w],t=o.slidesGrid[w+E]-e;l?o.setTranslate(o.translate-t):(o.slideTo(w+E,0,!1,!0),i&&(o.touches[o.isHorizontal()?"startX":"startY"]+=t))}else i&&o.slideToLoop(t,0,!1,!0);else if(v.length>0&&b)if(void 0===t){const e=o.slidesGrid[w],t=o.slidesGrid[w-x]-e;l?o.setTranslate(o.translate-t):(o.slideTo(w-x,0,!1,!0),i&&(o.touches[o.isHorizontal()?"startX":"startY"]+=t))}else o.slideToLoop(t,0,!1,!0);if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,slideTo:!1,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{t.params.loop&&t.loopFix(e)})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix(e)}o.emit("loopFix")},loopDestroy:function(){const e=this,{slides:t,params:s,slidesEl:a}=e;if(!s.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];t.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),t.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{a.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function D(e){const t=this,s=a(),i=r(),n=t.touchEventsData;n.evCache.push(e);const{params:o,touches:d,enabled:c}=t;if(!c)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let u=p.target;if("wrapper"===o.touchEventsTarget&&!t.wrapperEl.contains(u))return;if("which"in p&&3===p.which)return;if("button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!o.noSwipingClass&&""!==o.noSwipingClass,h=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&h&&(u=h[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,g=!(!p.target||!p.target.shadowRoot);if(o.noSwiping&&(g?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(f,u):u.closest(f)))return void(t.allowClick=!0);if(o.swipeHandler&&!u.closest(o.swipeHandler))return;d.currentX=p.pageX,d.currentY=p.pageY;const v=d.currentX,w=d.currentY,b=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,y=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(b&&(v<=y||v>=i.innerWidth-y)){if("prevent"!==b)return;e.preventDefault()}Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=v,d.startY=w,n.touchStartTime=l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1);let E=!0;u.matches(n.focusableElements)&&(E=!1,"SELECT"===u.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==u&&s.activeElement.blur();const x=E&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!x||u.isContentEditable||p.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function G(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));const p=i.evCache.findIndex((e=>e.pointerId===c.pointerId));p>=0&&(i.evCache[p]=c);const u=i.evCache.length>1?i.evCache[0]:c,m=u.pageX,h=u.pageY;if(c.preventedByNestedSwiper)return n.startX=m,void(n.startY=h);if(!s.allowTouchMove)return c.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:m,startY:h,prevX:s.touches.currentX,prevY:s.touches.currentY,currentX:m,currentY:h}),i.touchStartTime=l()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(h<n.startY&&s.translate<=s.maxTranslate()||h>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(m<n.startX&&s.translate<=s.maxTranslate()||m>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&c.target===t.activeElement&&c.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=m,n.currentY=h;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling||s.zoom&&s.params.zoom&&s.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let v=s.isHorizontal()?f:g,w=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),w=Math.abs(w)*(o?1:-1)),n.diff=v,v*=r.touchRatio,o&&(v=-v,w=-w);const b=s.touchesDirection;s.swipeDirection=v>0?"prev":"next",s.touchesDirection=w>0?"prev":"next";const y=s.params.loop&&!r.cssMode;if(!i.isMoved){if(y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)}let E;i.isMoved&&b!==s.touchesDirection&&y&&Math.abs(v)>=1&&(s.loopFix({direction:s.swipeDirection,setTranslate:!0}),E=!0),s.emit("sliderMove",c),i.isMoved=!0,i.currentTranslate=v+i.startTranslate;let x=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),v>0?(y&&!E&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.size/2:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**S))):v<0&&(y&&!E&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.size/2:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(x=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**S))),x&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function H(e){const t=this,s=t.touchEventsData,a=s.evCache.findIndex((t=>t.pointerId===e.pointerId));if(a>=0&&s.evCache.splice(a,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:i,touches:r,rtlTranslate:o,slidesGrid:d,enabled:c}=t;if(!c)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let p=e;if(p.originalEvent&&(p=p.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",p),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);i.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=l(),m=u-s.touchStartTime;if(t.allowClick){const e=p.path||p.composedPath&&p.composedPath();t.updateClickedSlide(e&&e[0]||p.target),t.emit("tap click",p),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",p)}if(s.lastClickTime=l(),n((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===r.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=i.followFinger?o?t.translate:-t.translate:-s.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let f=0,g=t.slidesSizesGrid[0];for(let e=0;e<d.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==d[e+t]?h>=d[e]&&h<d[e+t]&&(f=e,g=d[e+t]-d[e]):h>=d[e]&&(f=e,g=d[d.length-1]-d[d.length-2])}let v=null,w=null;i.rewind&&(t.isBeginning?w=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const b=(h-d[f])/g,y=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(m>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(b>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(b>1-i.longSwipesRatio?t.slideTo(f+y):null!==w&&b<0&&Math.abs(b)>i.longSwipesRatio?t.slideTo(w):t.slideTo(f))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(p.target===t.navigation.nextEl||p.target===t.navigation.prevEl)?p.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==v?v:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==w?w:f))}}let B;function X(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(B),B=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Y(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function q(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}const N=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){const t=s.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}};function R(e){N(this,e.target),this.update()}let _=!1;function F(){}const V=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",X,!0):e[c]("observerUpdate",X,!0),r[d]("load",e.onLoad,{capture:!0})};const W=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var j={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function U(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const K={eventsEmitter:A,update:$,translate:z,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),k({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),k({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:I,loop:O,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=a(),{params:s}=e;e.onTouchStart=D.bind(e),e.onTouchMove=G.bind(e),e.onTouchEnd=H.bind(e),s.cssMode&&(e.onScroll=q.bind(e)),e.onClick=Y.bind(e),e.onLoad=R.bind(e),_||(t.addEventListener("touchstart",F),_=!0),V(e,"on")},detachEvents:function(){V(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=W(e,a),d=W(e,l),c=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const u=l.direction&&l.direction!==a.direction,m=a.loop&&(l.slidesPerView!==a.slidesPerView||u);u&&s&&e.changeDirection(),p(e.params,l);const h=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!h?e.disable():!c&&h&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),m&&s&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Z={};class Q{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new Q(a))})),e}const o=this;o.__swiper__=!0,o.support=C(),o.device=P({userAgent:t.userAgent}),o.browser=L(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const d={};o.modules.forEach((e=>{e({params:t,swiper:o,extendParams:U(t,d),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})}));const c=p({},j,d);return o.params=p({},c,Z,t),o.originalParams=p({},o.params),o.passedParams=p({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach((e=>{o.on(e,o.params.on[e])})),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===o.params.direction,isVertical:()=>"vertical"===o.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:l(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=b(f(t,`.${s.slideClass}, swiper-slide`)[0]);return b(e)-a}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&N(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.shadowEl&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=g("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement?s:i,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===w(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===w(s,"direction")),wrongRTL:"-webkit-box"===w(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?N(t,e):e.addEventListener("load",(e=>{N(t,e.target)}))})),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(Z,e)}static get extendedDefaults(){return Z}static get defaults(){return j}static installModule(e){Q.prototype.__modules__||(Q.prototype.__modules__=[]);const t=Q.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Q.installModule(e))),Q):(Q.installModule(e),Q)}}function J(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=g("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function ee(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function te(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function se(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function ae(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function ie(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function re(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function ne(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function le(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function oe(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowEl&&t.shadowEl===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{E(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function de(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=h(t);let r=i.querySelector(`.${a}`);return r||(r=g("div","swiper-slide-shadow"+(s?`-${s}`:"")),i.append(r)),r}Object.keys(K).forEach((e=>{Object.keys(K[e]).forEach((t=>{Q.prototype[t]=K[e][t]}))})),Q.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=y(t.el);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.el,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const ce=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?g("swiper-slide"):g("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i,loop:r}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:c,to:p,slides:u,slidesGrid:m,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const g=s.activeIndex||0;let v,w,b;v=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(w=Math.floor(t/2)+a+o,b=Math.floor(t/2)+a+l):(w=t+(a-1)+o,b=(r?t:a)+l);let y=g-b,E=g+w;r||(y=Math.max(y,0),E=Math.min(E,u.length-1));let x=(s.slidesGrid[y]||0)-(s.slidesGrid[0]||0);function S(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(r&&g>=b?(y-=b,i||(x+=s.slidesGrid[0])):r&&g<b&&(y=-b,i&&(x+=s.slidesGrid[0])),Object.assign(s.virtual,{from:y,to:E,offset:x,slidesGrid:s.slidesGrid,slidesBefore:b,slidesAfter:w}),c===y&&p===E&&!e)return s.slidesGrid!==m&&x!==h&&s.slides.forEach((e=>{e.style[v]=`${x}px`})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:y,to:E,slides:function(){const e=[];for(let t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?S():n("virtualUpdate"));const T=[],M=[],C=e=>{let t=e;return e<0?t=u.length+e:t>=u.length&&(t-=u.length),t};if(e)s.slidesEl.querySelectorAll(`.${s.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=c;e<=p;e+=1)if(e<y||e>E){const t=C(e);s.slidesEl.querySelectorAll(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e=>{e.remove()}))}const P=r?-u.length:0,L=r?2*u.length:u.length;for(let t=P;t<L;t+=1)if(t>=y&&t<=E){const s=C(t);void 0===p||e?M.push(s):(t>p&&M.push(s),t<c&&T.push(s))}if(M.forEach((e=>{s.slidesEl.append(d(u[e],e))})),r)for(let e=T.length-1;e>=0;e-=1){const t=T[e];s.slidesEl.prepend(d(u[t],t))}else T.sort(((e,t)=>t-e)),T.forEach((e=>{s.slidesEl.prepend(d(u[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=`${x}px`})),S()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||c()})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(y(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===y(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=v(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const o=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let c,p=l();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&l()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&l()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new o.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let o=t.el;"container"!==t.params.mousewheel.eventsTarget&&(o=document.querySelector(t.params.mousewheel.eventsTarget));const p=o&&o.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:l(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let l=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(l>=t.minTranslate()&&(l=t.minTranslate()),l<=t.maxTranslate()&&(l=t.maxTranslate()),t.setTransition(0),t.setTranslate(l),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=n((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=n((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),l===t.minTranslate()||l===t.maxTranslate())return!0}}else{const s={time:l(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function n(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.shadowRoot.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.el.querySelectorAll(e).length&&(s=t.el.querySelector(e))),e&&!s?e:s)}function l(e,s){const a=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function o(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return l(s,!1),void l(e,!1);l(s,t.isBeginning&&!t.params.rewind),l(e,t.isEnd&&!t.params.rewind)}function d(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=J(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=n(e.nextEl),a=n(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=r(s),a=r(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?c:d),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function u(){let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?c:d),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}a("init",(()=>{!1===t.params.navigation.enabled?m():(p(),o())})),a("toEdge fromEdge lock unlock",(()=>{o()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s),[...e,...s].filter((e=>!!e)).forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:n}=t.navigation;a=r(a),n=r(n);const l=s.target;if(t.params.navigation.hideOnClick&&!n.includes(l)&&!a.includes(l)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===l||t.pagination.el.contains(l)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...n].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),o()},disable:m,update:o,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;const o=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function d(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function p(e){const s=e.target.closest(ee(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=b(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;(a<t.loopedSlides||a>t.slides.length-t.loopedSlides)&&t.loopFix({direction:a<t.loopedSlides?"prev":"next",activeSlideIndex:a,slideTo:!1}),t.slideToLoop(a)}else t.slideTo(a)}function u(){const e=t.rtl,s=t.params.pagination;if(d())return;let a,r=t.pagination.el;r=o(r);const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,u=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;if(a=t.params.loop?t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex:void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,d,p;if(s.dynamicBullets&&(n=x(i[0],t.isHorizontal()?"width":"height",!0),r.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=a-(t.previousIndex||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),d=o+(Math.min(i.length,s.dynamicMainBullets)-1),p=(d+o)/2),i.forEach((e=>{e.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)))})),r.length>1)i.forEach((e=>{const t=b(e);t===a&&e.classList.add(s.bulletActiveClass),s.dynamicBullets&&(t>=o&&t<=d&&e.classList.add(`${s.bulletActiveClass}-main`),t===o&&c(e,"prev"),t===d&&c(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(s.bulletActiveClass),s.dynamicBullets){const e=i[o],t=i[d];for(let e=o;e<=d;e+=1)i[e]&&i[e].classList.add(`${s.bulletActiveClass}-main`);c(e,"prev"),c(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-p*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}r.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(ee(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(ee(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(u)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/u;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(ee(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,u),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function m(){const e=t.params.pagination;if(d())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let a=t.pagination.el;a=o(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&(t.pagination.bullets=[...s.querySelectorAll(ee(e.bulletClass))])})),"custom"!==e.type&&i("paginationRender",a[0])}function h(){t.params.pagination=J(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.shadowRoot.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>y(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=o(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(e.clickableClass),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",p),t.enabled||s.classList.add(e.lockClass)})))}function f(){const e=t.params.pagination;if(d())return;let s=t.pagination.el;s&&(s=o(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&s.removeEventListener("click",p)}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(e.bulletActiveClass)))}a("init",(()=>{!1===t.params.pagination.enabled?g():(h(),m(),u())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&u()})),a("snapIndexChange",(()=>{u()})),a("snapGridLengthChange",(()=>{m(),u()})),a("destroy",(()=>{f()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{u()})),a("click",((e,s)=>{const a=s.target;let{el:r}=t.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),f()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),h(),m(),u()},disable:g,render:m,update:u,init:h,destroy:f})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const l=a();let o,d,c,p,u=!1,m=null,h=null;function f(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=d,o=(c-d)*n;s?(o=-o,o>0?(l=d-o,o=0):-o+d>c&&(l=c+o)):o<0?(l=d+o,o=0):o+d>c&&(l=c-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(m),i.style.opacity=1,m=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function w(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",c=t.isHorizontal()?a.offsetWidth:a.offsetHeight,p=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),d="auto"===t.params.scrollbar.dragSize?c*p:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${d}px`:s.style.height=`${d}px`,a.style.display=p>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function b(e){return t.isHorizontal()?e.clientX:e.clientY}function y(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(b(e)-v(i)[t.isHorizontal()?"left":"top"]-(null!==o?o:d/2))/(c-d),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function E(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;u=!0,o=e.target===l?b(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",y(e),clearTimeout(h),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function x(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;u&&(e.preventDefault?e.preventDefault():e.returnValue=!1,y(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function S(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:l}=a;u&&(u=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(h),h=n((()=>{l.style.opacity=0,l.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function T(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},o=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",E,n),l[d]("pointermove",x,n),l[d]("pointerup",S,o)}function M(){const{scrollbar:e,el:s}=t;t.params.scrollbar=J(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;"string"==typeof a.el&&t.isElement&&(i=t.el.shadowRoot.querySelector(a.el)),i||"string"!=typeof a.el?i||(i=a.el):i=l.querySelectorAll(a.el),t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(`.${t.params.scrollbar.dragClass}`),r||(r=g("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&T("on"),i&&i.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function C(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&T("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?P():(M(),w(),f())})),i("update resize observerUpdate lock unlock",(()=>{w()})),i("setTranslate",(()=>{f()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{C()}));const P=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),C()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),M(),w(),f()},disable:P,updateSize:w,setTranslate:f,init:M,destroy:C})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},r=()=>{const{el:e,slides:s,progress:a,snapGrid:r}=t;f(e,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e=>{i(e,a)})),s.forEach(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s}=t;s.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,d,c=1,p=!1;const u=[],m={slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let w=1;function b(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function E(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function x(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!E(e))return;const s=t.params.zoom;if(l=!1,d=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=b(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?y(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=m.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y)/c]}();m.imageEl.style.transformOrigin=`${e}px ${t}px`,m.imageEl.style.transitionDuration="0ms"}p=!0}}function S(e){if(!E(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(d=!0,m.scaleMove=b(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function T(e){if(!E(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&d&&(l=!1,d=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,1===a.scale&&(m.slideEl=void 0)))}function M(e){if(!E(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.el.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(t.allowClick=!1,!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth,h.height=m.imageEl.offsetHeight,h.startX=o(m.imageWrapEl,"x")||0,h.startY=o(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY,!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return void(h.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return void(h.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),h.isMoved=!0,h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX,h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY,h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}}function C(){const e=t.zoom;m.slideEl&&t.previousIndex!==t.activeIndex&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0)}function P(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?y(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,w,b,E,x,S,T,M,C,P,L;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(i=void 0,r=void 0),s.scale=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,c=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,!e||1===c&&A?(u=0,g=0):(P=m.slideEl.offsetWidth,L=m.slideEl.offsetHeight,l=v(m.slideEl).left+n.scrollX,o=v(m.slideEl).top+n.scrollY,d=l+P/2-i,p=o+L/2-r,w=m.imageEl.offsetWidth,b=m.imageEl.offsetHeight,E=w*s.scale,x=b*s.scale,S=Math.min(P/2-E/2,0),T=Math.min(L/2-x/2,0),M=-S,C=-T,u=d*s.scale,g=p*s.scale,u<S&&(u=S),u>M&&(u=M),g<T&&(g=T),g>C&&(g=C)),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function L(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?y(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0)}function A(e){const s=t.zoom;s.scale&&1!==s.scale?L():P(e)}function $(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function z(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=$();t.wrapperEl.addEventListener("pointerdown",x,s),t.wrapperEl.addEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,T,s)})),t.wrapperEl.addEventListener("pointermove",M,a)}function k(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=$();t.wrapperEl.removeEventListener("pointerdown",x,s),t.wrapperEl.removeEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,T,s)})),t.wrapperEl.removeEventListener("pointermove",M,a)}Object.defineProperty(t.zoom,"scale",{get:()=>w,set(e){if(w!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}w=e}}),a("init",(()=>{t.params.zoom.enabled&&z()})),a("destroy",(()=>{k()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.imageEl&&(h.isTouched||(s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0,h.touchesStart.x=e.pageX,h.touchesStart.y=e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&A(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:z,disable:k,in:P,out:L,toggle:A})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function l(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&n((()=>{s.updateAutoHeight()})),E(s.wrapperEl,(()=>{i&&s.transitionEnd()})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&l(i[r]);else i instanceof a&&s!==i&&l(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const n=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function l(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function o(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function d(e,t){(e=n(e)).forEach((e=>{e.setAttribute("role",t)}))}function c(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function p(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function u(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function m(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function h(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;t.pagination&&t.pagination.el&&(a===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(ee(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&a===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&a===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.matches(ee(t.params.pagination.bulletClass))&&a.click())}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function v(){return f()&&t.params.pagination.clickable}const w=(e,t,s)=>{l(e),"BUTTON"!==e.tagName&&(d(e,"button"),e.addEventListener("keydown",h)),p(e,s),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},y=()=>{t.a11y.clicked=!0},E=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},S=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&d(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;p(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},T=()=>{const e=t.params.a11y;t.el.append(i);const s=t.el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var l;const o=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var d;d=r,n(a).forEach((e=>{e.setAttribute("id",d)})),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(a,o),S();let{nextEl:u,prevEl:m}=t.navigation?t.navigation:{};if(u=n(u),m=n(m),u&&u.forEach((t=>w(t,r,e.nextSlideMessage))),m&&m.forEach((t=>w(t,r,e.prevSlideMessage))),v()){(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.addEventListener("keydown",h)}))}t.el.addEventListener("focus",x,!0),t.el.addEventListener("pointerdown",y,!0),t.el.addEventListener("pointerup",E,!0)};a("beforeInit",(()=>{i=g("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),t.isElement&&i.setAttribute("slot","container-end")})),a("afterInit",(()=>{t.params.a11y.enabled&&T()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&S()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(u(s),o(s)):(m(s),l(s))),e&&(t.isEnd?(u(e),o(e)):(m(e),l(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(l(s),t.params.pagination.renderBullet||(d(s,"button"),p(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,b(s)+1)))),s.matches(`.${t.params.pagination.bulletActiveClass}`)?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){i&&i.length>0&&i.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=n(e),s=n(s),e&&e.forEach((e=>e.removeEventListener("keydown",h))),s&&s.forEach((e=>e.removeEventListener("keydown",h))),v()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.removeEventListener("keydown",h)}));t.el.removeEventListener("focus",x,!0),t.el.removeEventListener("pointerdown",y,!0),t.el.removeEventListener("pointerup",E,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides[t.activeIndex].getAttribute("data-hash")){const s=t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${e}"], swiper-slide[data-hash="${e}"]`)[0]);if(void 0===s)return;t.slideTo(s)}},p=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState)d.history.replaceState(null,null,`#${t.slides[t.activeIndex].getAttribute("data-hash")}`||""),i("hashSet");else{const e=t.slides[t.activeIndex],s=e.getAttribute("data-hash")||e.getAttribute("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides[a];if((i.getAttribute("data-hash")||i.getAttribute("data-history"))===e){const e=t.getSlideIndex(i);t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g=o&&o.autoplay?o.autoplay.delay:3e3,v=o&&o.autoplay?o.autoplay.delay:3e3,w=(new Date).getTime;function b(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",b),M())}const y=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(v=d,c=!1);const e=i.autoplay.paused?d:w+v-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/g),s=requestAnimationFrame((()=>{y()}))},E=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),y();let a=void 0===e?i.params.autoplay.delay:e;g=i.params.autoplay.delay,v=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,g=r,v=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(w=(new Date).getTime(),requestAnimationFrame((()=>{E()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},x=()=>{i.autoplay.running=!0,E(),l("autoplayStart")},S=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},T=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",b):M()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-w),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},M=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(w=(new Date).getTime(),f?(f=!1,E(d)):E(),i.autoplay.paused=!1,l("autoplayResume"))},C=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,T(!0)),"visible"===e.visibilityState&&M()},P=e=>{"mouse"===e.pointerType&&(f=!0,T(!0))},L=e=>{"mouse"===e.pointerType&&i.autoplay.paused&&M()};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",P),i.el.addEventListener("pointerleave",L)),a().addEventListener("visibilitychange",C),w=(new Date).getTime(),x())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",P),i.el.removeEventListener("pointerleave",L),a().removeEventListener("visibilitychange",C),i.autoplay.running&&S()})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?T(!0,!0):S())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?S():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,T(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&M(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:x,stop:S,pause:T,resume:M})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(d(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function c(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),c(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),c(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),c(!0)})),i("slideChange update resize observerUpdate",(()=>{c()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:c})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:l()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,wrapperEl:n,rtlTranslate:o,snapGrid:d,touchEventsData:c}=t,p=l()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||l()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;o&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=o?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((o?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,E(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),E(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,E(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,m,h;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);h=Math.floor(a/i),m=a-h*i+s*o,u=m+h*t/c,r.style.order=u}else"column"===p?(m=Math.floor(e/c),h=e-m*c,(m>a||m===a&&h===c-1)&&(h+=1,h>=c&&(h=0,m+=1))):(h=Math.floor(e/s),m=e-h*s);r.style[l("margin-top")]=0!==h?d&&`${d}px`:""},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.wrapperEl.style[a("width")]=`${i.virtualSize+r}px`,n){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:te.bind(t),prependSlide:se.bind(t),addSlide:ae.bind(t),removeSlide:ie.bind(t),removeAllSlides:re.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),ne({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=le(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),oe({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=g("div","swiper-slide-shadow-"+(s?"left":"top")),e.append(a)),i||(i=g("div","swiper-slide-shadow-"+(s?"right":"bottom")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};ne({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.slidesEl.querySelector(".swiper-cube-shadow"),m||(m=g("div","swiper-cube-shadow"),t.slidesEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=g("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a[e];let s=e;u&&(s=parseInt(t.getAttribute("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t.progress,1),-1);let m=0,f=0,g=0;s%4==0?(m=4*-n*o,g=0):(s-1)%4==0?(m=0,g=4*-n*o):(s-2)%4==0?(m=o+4*n*o,g=o):(s-3)%4==0&&(m=-o,g=3*o+4*o*n),l&&(m=-m),p||(f=m,m=0);const v=`rotateX(${p?0:-r}deg) rotateY(${p?r:0}deg) translate3d(${m}px, ${f}px, ${g}px)`;d<=1&&d>-1&&(h=90*s+90*d,l&&(h=90*-s-90*d)),t.style.transform=v,c.slideShadows&&i(t,d,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");i||(i=de(0,e,t.isHorizontal()?"left":"top")),r||(r=de(0,e,t.isHorizontal()?"right":"bottom")),i&&(i.style.opacity=Math.max(-s,0)),r&&(r.style.opacity=Math.max(s,0))};ne({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;le(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),oe({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect;t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ne({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a[e],s=i[e],l=(o-t.swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,m=n?0:d*p,h=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(u)<.001&&(u=0),Math.abs(m)<.001&&(m=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;if(le(0,t).style.transform=b,t.style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),s=n?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=de(0,t,n?"left":"top")),s||(s=de(0,t,n?"right":"bottom")),e&&(e.style.opacity=p>0?p:0),s&&(s.style.opacity=-p>0?-p:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;ne({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,t)=>{m[t]=f.rotate[t]*Math.abs(d*n)})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=de(0,a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=le(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),oe({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ne({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e[l],d=o.progress,c=Math.min(Math.max(d,-4),4);let p=o.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,m=0;const h=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,y=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||y){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,m=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=m;m=u,u=e}const E=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),x=`\n        translate3d(${u}, ${m}, ${h}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${E})\n      `;if(a.slideShadows){let e=o.querySelector(".swiper-slide-shadow");e||(e=de(0,o)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o.style.zIndex=-Math.abs(Math.round(d))+e.length;le(0,o).style.transform=x}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),oe({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return Q.use(ce),Q}));
//# sourceMappingURL=swiper-bundle.min.js.map
/*!
 * wavesurfer.js 6.4.0 (2022-11-05)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd)
        define("WaveSurfer", [], factory);
    else if (typeof exports === "object") exports["WaveSurfer"] = factory();
    else root["WaveSurfer"] = factory();
})(self, () => {
    return /******/ (() => {
        // webpackBootstrap
        /******/ var __webpack_modules__ = {
            /***/ "./src/drawer.canvasentry.js":
                /*!***********************************!*\
  !*** ./src/drawer.canvasentry.js ***!
  \***********************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var _style = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./util/style */ "./src/util/style.js"
                        )
                    );
                    var _getId = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./util/get-id */ "./src/util/get-id.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    /**
                     * The `CanvasEntry` class represents an element consisting of a wave `canvas`
                     * and an (optional) progress wave `canvas`.
                     *
                     * The `MultiCanvas` renderer uses one or more `CanvasEntry` instances to
                     * render a waveform, depending on the zoom level.
                     */
                    var CanvasEntry = /*#__PURE__*/ (function () {
                        function CanvasEntry() {
                            _classCallCheck(this, CanvasEntry);
                            /**
                             * The wave node
                             *
                             * @type {HTMLCanvasElement}
                             */
                            this.wave = null;
                            /**
                             * The wave canvas rendering context
                             *
                             * @type {CanvasRenderingContext2D}
                             */
                            this.waveCtx = null;
                            /**
                             * The (optional) progress wave node
                             *
                             * @type {HTMLCanvasElement}
                             */
                            this.progress = null;
                            /**
                             * The (optional) progress wave canvas rendering context
                             *
                             * @type {CanvasRenderingContext2D}
                             */
                            this.progressCtx = null;
                            /**
                             * Start of the area the canvas should render, between 0 and 1
                             *
                             * @type {number}
                             */
                            this.start = 0;
                            /**
                             * End of the area the canvas should render, between 0 and 1
                             *
                             * @type {number}
                             */
                            this.end = 1;
                            /**
                             * Unique identifier for this entry
                             *
                             * @type {string}
                             */
                            this.id = (0, _getId.default)(
                                typeof this.constructor.name !== "undefined"
                                    ? this.constructor.name.toLowerCase() + "_"
                                    : "canvasentry_"
                            );
                            /**
                             * Canvas 2d context attributes
                             *
                             * @type {object}
                             */
                            this.canvasContextAttributes = {};
                        }

                        /**
                         * Store the wave canvas element and create the 2D rendering context
                         *
                         * @param {HTMLCanvasElement} element The wave `canvas` element.
                         */
                        _createClass(CanvasEntry, [
                            {
                                key: "initWave",
                                value: function initWave(element) {
                                    this.wave = element;
                                    this.waveCtx = this.wave.getContext(
                                        "2d",
                                        this.canvasContextAttributes
                                    );
                                },

                                /**
                                 * Store the progress wave canvas element and create the 2D rendering
                                 * context
                                 *
                                 * @param {HTMLCanvasElement} element The progress wave `canvas` element.
                                 */
                            },
                            {
                                key: "initProgress",
                                value: function initProgress(element) {
                                    this.progress = element;
                                    this.progressCtx = this.progress.getContext(
                                        "2d",
                                        this.canvasContextAttributes
                                    );
                                },

                                /**
                                 * Update the dimensions
                                 *
                                 * @param {number} elementWidth Width of the entry
                                 * @param {number} totalWidth Total width of the multi canvas renderer
                                 * @param {number} width The new width of the element
                                 * @param {number} height The new height of the element
                                 */
                            },
                            {
                                key: "updateDimensions",
                                value: function updateDimensions(
                                    elementWidth,
                                    totalWidth,
                                    width,
                                    height
                                ) {
                                    // where the canvas starts and ends in the waveform, represented as a
                                    // decimal between 0 and 1
                                    this.start =
                                        this.wave.offsetLeft / totalWidth || 0;
                                    this.end =
                                        this.start + elementWidth / totalWidth;

                                    // set wave canvas dimensions
                                    this.wave.width = width;
                                    this.wave.height = height;
                                    var elementSize = {
                                        width: elementWidth + "px",
                                    };
                                    (0, _style.default)(this.wave, elementSize);
                                    if (this.hasProgressCanvas) {
                                        // set progress canvas dimensions
                                        this.progress.width = width;
                                        this.progress.height = height;
                                        (0, _style.default)(
                                            this.progress,
                                            elementSize
                                        );
                                    }
                                },

                                /**
                                 * Clear the wave and progress rendering contexts
                                 */
                            },
                            {
                                key: "clearWave",
                                value: function clearWave() {
                                    // wave
                                    this.waveCtx.clearRect(
                                        0,
                                        0,
                                        this.waveCtx.canvas.width,
                                        this.waveCtx.canvas.height
                                    );

                                    // progress
                                    if (this.hasProgressCanvas) {
                                        this.progressCtx.clearRect(
                                            0,
                                            0,
                                            this.progressCtx.canvas.width,
                                            this.progressCtx.canvas.height
                                        );
                                    }
                                },

                                /**
                                 * Set the fill styles for wave and progress
                                 * @param {string|string[]} waveColor Fill color for the wave canvas,
                                 * or an array of colors to apply as a gradient
                                 * @param {?string|string[]} progressColor Fill color for the progress canvas,
                                 * or an array of colors to apply as a gradient
                                 */
                            },
                            {
                                key: "setFillStyles",
                                value: function setFillStyles(
                                    waveColor,
                                    progressColor
                                ) {
                                    this.waveCtx.fillStyle = this.getFillStyle(
                                        this.waveCtx,
                                        waveColor
                                    );
                                    if (this.hasProgressCanvas) {
                                        this.progressCtx.fillStyle =
                                            this.getFillStyle(
                                                this.progressCtx,
                                                progressColor
                                            );
                                    }
                                },

                                /**
                                 * Utility function to handle wave color arguments
                                 *
                                 * When the color argument type is a string or CanvasGradient instance,
                                 * it will be returned as is. Otherwise, it will be treated as an array,
                                 * and a new CanvasGradient will be returned
                                 *
                                 * @since 6.0.0
                                 * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
                                 * @param {string|string[]|CanvasGradient} color Either a single fill color
                                 *     for the wave canvas, an existing CanvasGradient instance, or an array
                                 *     of colors to apply as a gradient
                                 * @returns {string|CanvasGradient} Returns a string fillstyle value, or a
                                 *     canvas gradient
                                 */
                            },
                            {
                                key: "getFillStyle",
                                value: function getFillStyle(ctx, color) {
                                    if (
                                        typeof color == "string" ||
                                        color instanceof CanvasGradient
                                    ) {
                                        return color;
                                    }
                                    var waveGradient = ctx.createLinearGradient(
                                        0,
                                        0,
                                        0,
                                        ctx.canvas.height
                                    );
                                    color.forEach(function (value, index) {
                                        return waveGradient.addColorStop(
                                            index / color.length,
                                            value
                                        );
                                    });
                                    return waveGradient;
                                },

                                /**
                                 * Set the canvas transforms for wave and progress
                                 *
                                 * @param {boolean} vertical Whether to render vertically
                                 */
                            },
                            {
                                key: "applyCanvasTransforms",
                                value: function applyCanvasTransforms(
                                    vertical
                                ) {
                                    if (vertical) {
                                        // Reflect the waveform across the line y = -x
                                        this.waveCtx.setTransform(
                                            0,
                                            1,
                                            1,
                                            0,
                                            0,
                                            0
                                        );
                                        if (this.hasProgressCanvas) {
                                            this.progressCtx.setTransform(
                                                0,
                                                1,
                                                1,
                                                0,
                                                0,
                                                0
                                            );
                                        }
                                    }
                                },

                                /**
                                 * Draw a rectangle for wave and progress
                                 *
                                 * @param {number} x X start position
                                 * @param {number} y Y start position
                                 * @param {number} width Width of the rectangle
                                 * @param {number} height Height of the rectangle
                                 * @param {number} radius Radius of the rectangle
                                 */
                            },
                            {
                                key: "fillRects",
                                value: function fillRects(
                                    x,
                                    y,
                                    width,
                                    height,
                                    radius
                                ) {
                                    this.fillRectToContext(
                                        this.waveCtx,
                                        x,
                                        y,
                                        width,
                                        height,
                                        radius
                                    );
                                    if (this.hasProgressCanvas) {
                                        this.fillRectToContext(
                                            this.progressCtx,
                                            x,
                                            y,
                                            width,
                                            height,
                                            radius
                                        );
                                    }
                                },

                                /**
                                 * Draw the actual rectangle on a `canvas` element
                                 *
                                 * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
                                 * @param {number} x X start position
                                 * @param {number} y Y start position
                                 * @param {number} width Width of the rectangle
                                 * @param {number} height Height of the rectangle
                                 * @param {number} radius Radius of the rectangle
                                 */
                            },
                            {
                                key: "fillRectToContext",
                                value: function fillRectToContext(
                                    ctx,
                                    x,
                                    y,
                                    width,
                                    height,
                                    radius
                                ) {
                                    if (!ctx) {
                                        return;
                                    }
                                    if (radius) {
                                        this.drawRoundedRect(
                                            ctx,
                                            x,
                                            y,
                                            width,
                                            height,
                                            radius
                                        );
                                    } else {
                                        ctx.fillRect(x, y, width, height);
                                    }
                                },

                                /**
                                 * Draw a rounded rectangle on Canvas
                                 *
                                 * @param {CanvasRenderingContext2D} ctx Canvas context
                                 * @param {number} x X-position of the rectangle
                                 * @param {number} y Y-position of the rectangle
                                 * @param {number} width Width of the rectangle
                                 * @param {number} height Height of the rectangle
                                 * @param {number} radius Radius of the rectangle
                                 *
                                 * @return {void}
                                 * @example drawRoundedRect(ctx, 50, 50, 5, 10, 3)
                                 */
                            },
                            {
                                key: "drawRoundedRect",
                                value: function drawRoundedRect(
                                    ctx,
                                    x,
                                    y,
                                    width,
                                    height,
                                    radius
                                ) {
                                    if (height === 0) {
                                        return;
                                    }
                                    // peaks are float values from -1 to 1. Use absolute height values in
                                    // order to correctly calculate rounded rectangle coordinates
                                    if (height < 0) {
                                        height *= -1;
                                        y -= height;
                                    }
                                    ctx.beginPath();
                                    ctx.moveTo(x + radius, y);
                                    ctx.lineTo(x + width - radius, y);
                                    ctx.quadraticCurveTo(
                                        x + width,
                                        y,
                                        x + width,
                                        y + radius
                                    );
                                    ctx.lineTo(x + width, y + height - radius);
                                    ctx.quadraticCurveTo(
                                        x + width,
                                        y + height,
                                        x + width - radius,
                                        y + height
                                    );
                                    ctx.lineTo(x + radius, y + height);
                                    ctx.quadraticCurveTo(
                                        x,
                                        y + height,
                                        x,
                                        y + height - radius
                                    );
                                    ctx.lineTo(x, y + radius);
                                    ctx.quadraticCurveTo(x, y, x + radius, y);
                                    ctx.closePath();
                                    ctx.fill();
                                },

                                /**
                                 * Render the actual wave and progress lines
                                 *
                                 * @param {number[]} peaks Array with peaks data
                                 * @param {number} absmax Maximum peak value (absolute)
                                 * @param {number} halfH Half the height of the waveform
                                 * @param {number} offsetY Offset to the top
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that
                                 * should be rendered
                                 */
                            },
                            {
                                key: "drawLines",
                                value: function drawLines(
                                    peaks,
                                    absmax,
                                    halfH,
                                    offsetY,
                                    start,
                                    end
                                ) {
                                    this.drawLineToContext(
                                        this.waveCtx,
                                        peaks,
                                        absmax,
                                        halfH,
                                        offsetY,
                                        start,
                                        end
                                    );
                                    if (this.hasProgressCanvas) {
                                        this.drawLineToContext(
                                            this.progressCtx,
                                            peaks,
                                            absmax,
                                            halfH,
                                            offsetY,
                                            start,
                                            end
                                        );
                                    }
                                },

                                /**
                                 * Render the actual waveform line on a `canvas` element
                                 *
                                 * @param {CanvasRenderingContext2D} ctx Rendering context of target canvas
                                 * @param {number[]} peaks Array with peaks data
                                 * @param {number} absmax Maximum peak value (absolute)
                                 * @param {number} halfH Half the height of the waveform
                                 * @param {number} offsetY Offset to the top
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that
                                 * should be rendered
                                 */
                            },
                            {
                                key: "drawLineToContext",
                                value: function drawLineToContext(
                                    ctx,
                                    peaks,
                                    absmax,
                                    halfH,
                                    offsetY,
                                    start,
                                    end
                                ) {
                                    if (!ctx) {
                                        return;
                                    }
                                    var length = peaks.length / 2;
                                    var first = Math.round(length * this.start);

                                    // use one more peak value to make sure we join peaks at ends -- unless,
                                    // of course, this is the last canvas
                                    var last =
                                        Math.round(length * this.end) + 1;
                                    var canvasStart = first;
                                    var canvasEnd = last;
                                    var scale =
                                        this.wave.width /
                                        (canvasEnd - canvasStart - 1);

                                    // optimization
                                    var halfOffset = halfH + offsetY;
                                    var absmaxHalf = absmax / halfH;
                                    ctx.beginPath();
                                    ctx.moveTo(
                                        (canvasStart - first) * scale,
                                        halfOffset
                                    );
                                    ctx.lineTo(
                                        (canvasStart - first) * scale,
                                        halfOffset -
                                            Math.round(
                                                (peaks[2 * canvasStart] || 0) /
                                                    absmaxHalf
                                            )
                                    );
                                    var i, peak, h;
                                    for (i = canvasStart; i < canvasEnd; i++) {
                                        peak = peaks[2 * i] || 0;
                                        h = Math.round(peak / absmaxHalf);
                                        ctx.lineTo(
                                            (i - first) * scale +
                                                this.halfPixel,
                                            halfOffset - h
                                        );
                                    }

                                    // draw the bottom edge going backwards, to make a single
                                    // closed hull to fill
                                    var j = canvasEnd - 1;
                                    for (j; j >= canvasStart; j--) {
                                        peak = peaks[2 * j + 1] || 0;
                                        h = Math.round(peak / absmaxHalf);
                                        ctx.lineTo(
                                            (j - first) * scale +
                                                this.halfPixel,
                                            halfOffset - h
                                        );
                                    }
                                    ctx.lineTo(
                                        (canvasStart - first) * scale,
                                        halfOffset -
                                            Math.round(
                                                (peaks[2 * canvasStart + 1] ||
                                                    0) / absmaxHalf
                                            )
                                    );
                                    ctx.closePath();
                                    ctx.fill();
                                },

                                /**
                                 * Destroys this entry
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {
                                    this.waveCtx = null;
                                    this.wave = null;
                                    this.progressCtx = null;
                                    this.progress = null;
                                },

                                /**
                                 * Return image data of the wave `canvas` element
                                 *
                                 * When using a `type` of `'blob'`, this will return a `Promise` that
                                 * resolves with a `Blob` instance.
                                 *
                                 * @param {string} format='image/png' An optional value of a format type.
                                 * @param {number} quality=0.92 An optional value between 0 and 1.
                                 * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
                                 * @return {string|Promise} When using the default `'dataURL'` `type` this
                                 * returns a data URL. When using the `'blob'` `type` this returns a
                                 * `Promise` that resolves with a `Blob` instance.
                                 */
                            },
                            {
                                key: "getImage",
                                value: function getImage(
                                    format,
                                    quality,
                                    type
                                ) {
                                    var _this = this;
                                    if (type === "blob") {
                                        return new Promise(function (resolve) {
                                            _this.wave.toBlob(
                                                resolve,
                                                format,
                                                quality
                                            );
                                        });
                                    } else if (type === "dataURL") {
                                        return this.wave.toDataURL(
                                            format,
                                            quality
                                        );
                                    }
                                },
                            },
                        ]);
                        return CanvasEntry;
                    })();
                    exports["default"] = CanvasEntry;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/drawer.js":
                /*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var util = _interopRequireWildcard(
                        __webpack_require__(/*! ./util */ "./src/util/index.js")
                    );
                    function _getRequireWildcardCache(nodeInterop) {
                        if (typeof WeakMap !== "function") return null;
                        var cacheBabelInterop = new WeakMap();
                        var cacheNodeInterop = new WeakMap();
                        return (_getRequireWildcardCache =
                            function _getRequireWildcardCache(nodeInterop) {
                                return nodeInterop
                                    ? cacheNodeInterop
                                    : cacheBabelInterop;
                            })(nodeInterop);
                    }
                    function _interopRequireWildcard(obj, nodeInterop) {
                        if (!nodeInterop && obj && obj.__esModule) {
                            return obj;
                        }
                        if (
                            obj === null ||
                            (_typeof(obj) !== "object" &&
                                typeof obj !== "function")
                        ) {
                            return { default: obj };
                        }
                        var cache = _getRequireWildcardCache(nodeInterop);
                        if (cache && cache.has(obj)) {
                            return cache.get(obj);
                        }
                        var newObj = {};
                        var hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor;
                        for (var key in obj) {
                            if (
                                key !== "default" &&
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc = hasPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(obj, key)
                                    : null;
                                if (desc && (desc.get || desc.set)) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                        newObj.default = obj;
                        if (cache) {
                            cache.set(obj, newObj);
                        }
                        return newObj;
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    /**
                     * Parent class for renderers
                     *
                     * @extends {Observer}
                     */
                    var Drawer = /*#__PURE__*/ (function (_util$Observer) {
                        _inherits(Drawer, _util$Observer);
                        var _super = _createSuper(Drawer);
                        /**
                         * @param {HTMLElement} container The container node of the wavesurfer instance
                         * @param {WavesurferParams} params The wavesurfer initialisation options
                         */
                        function Drawer(container, params) {
                            var _this;
                            _classCallCheck(this, Drawer);
                            _this = _super.call(this);
                            _this.container = util.withOrientation(
                                container,
                                params.vertical
                            );
                            /**
                             * @type {WavesurferParams}
                             */
                            _this.params = params;
                            /**
                             * The width of the renderer
                             * @type {number}
                             */
                            _this.width = 0;
                            /**
                             * The height of the renderer
                             * @type {number}
                             */
                            _this.height =
                                params.height * _this.params.pixelRatio;
                            _this.lastPos = 0;
                            /**
                             * The `<wave>` element which is added to the container
                             * @type {HTMLElement}
                             */
                            _this.wrapper = null;
                            return _this;
                        }

                        /**
                         * Alias of `util.style`
                         *
                         * @param {HTMLElement} el The element that the styles will be applied to
                         * @param {Object} styles The map of propName: attribute, both are used as-is
                         * @return {HTMLElement} el
                         */
                        _createClass(Drawer, [
                            {
                                key: "style",
                                value: function style(el, styles) {
                                    return util.style(el, styles);
                                },

                                /**
                                 * Create the wrapper `<wave>` element, style it and set up the events for
                                 * interaction
                                 */
                            },
                            {
                                key: "createWrapper",
                                value: function createWrapper() {
                                    this.wrapper = util.withOrientation(
                                        this.container.appendChild(
                                            document.createElement("wave")
                                        ),
                                        this.params.vertical
                                    );
                                    this.style(this.wrapper, {
                                        display: "block",
                                        position: "relative",
                                        userSelect: "none",
                                        webkitUserSelect: "none",
                                        height: this.params.height + "px",
                                    });
                                    if (
                                        this.params.fillParent ||
                                        this.params.scrollParent
                                    ) {
                                        this.style(this.wrapper, {
                                            width: "100%",
                                            cursor: this.params.hideCursor
                                                ? "none"
                                                : "auto",
                                            overflowX: this.params.hideScrollbar
                                                ? "hidden"
                                                : "auto",
                                            overflowY: "hidden",
                                        });
                                    }
                                    this.setupWrapperEvents();
                                },

                                /**
                                 * Handle click event
                                 *
                                 * @param {Event} e Click event
                                 * @param {?boolean} noPrevent Set to true to not call `e.preventDefault()`
                                 * @return {number} Playback position from 0 to 1
                                 */
                            },
                            {
                                key: "handleEvent",
                                value: function handleEvent(e, noPrevent) {
                                    !noPrevent && e.preventDefault();
                                    var clientX = util.withOrientation(
                                        e.targetTouches
                                            ? e.targetTouches[0]
                                            : e,
                                        this.params.vertical
                                    ).clientX;
                                    var bbox =
                                        this.wrapper.getBoundingClientRect();
                                    var nominalWidth = this.width;
                                    var parentWidth = this.getWidth();
                                    var progressPixels = this.getProgressPixels(
                                        bbox,
                                        clientX
                                    );
                                    var progress;
                                    if (
                                        !this.params.fillParent &&
                                        nominalWidth < parentWidth
                                    ) {
                                        progress =
                                            progressPixels *
                                                (this.params.pixelRatio /
                                                    nominalWidth) || 0;
                                    } else {
                                        progress =
                                            (progressPixels +
                                                this.wrapper.scrollLeft) /
                                                this.wrapper.scrollWidth || 0;
                                    }
                                    return util.clamp(progress, 0, 1);
                                },
                            },
                            {
                                key: "getProgressPixels",
                                value: function getProgressPixels(
                                    wrapperBbox,
                                    clientX
                                ) {
                                    if (this.params.rtl) {
                                        return wrapperBbox.right - clientX;
                                    } else {
                                        return clientX - wrapperBbox.left;
                                    }
                                },
                            },
                            {
                                key: "setupWrapperEvents",
                                value: function setupWrapperEvents() {
                                    var _this2 = this;
                                    this.wrapper.addEventListener(
                                        "click",
                                        function (e) {
                                            var orientedEvent =
                                                util.withOrientation(
                                                    e,
                                                    _this2.params.vertical
                                                );
                                            var scrollbarHeight =
                                                _this2.wrapper.offsetHeight -
                                                _this2.wrapper.clientHeight;
                                            if (scrollbarHeight !== 0) {
                                                // scrollbar is visible.  Check if click was on it
                                                var bbox =
                                                    _this2.wrapper.getBoundingClientRect();
                                                if (
                                                    orientedEvent.clientY >=
                                                    bbox.bottom -
                                                        scrollbarHeight
                                                ) {
                                                    // ignore mousedown as it was on the scrollbar
                                                    return;
                                                }
                                            }
                                            if (_this2.params.interact) {
                                                _this2.fireEvent(
                                                    "click",
                                                    e,
                                                    _this2.handleEvent(e)
                                                );
                                            }
                                        }
                                    );
                                    this.wrapper.addEventListener(
                                        "dblclick",
                                        function (e) {
                                            if (_this2.params.interact) {
                                                _this2.fireEvent(
                                                    "dblclick",
                                                    e,
                                                    _this2.handleEvent(e)
                                                );
                                            }
                                        }
                                    );
                                    this.wrapper.addEventListener(
                                        "scroll",
                                        function (e) {
                                            return _this2.fireEvent(
                                                "scroll",
                                                e
                                            );
                                        }
                                    );
                                },

                                /**
                                 * Draw peaks on the canvas
                                 *
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
                                 * for split channel rendering
                                 * @param {number} length The width of the area that should be drawn
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that should be
                                 * rendered
                                 */
                            },
                            {
                                key: "drawPeaks",
                                value: function drawPeaks(
                                    peaks,
                                    length,
                                    start,
                                    end
                                ) {
                                    if (!this.setWidth(length)) {
                                        this.clearWave();
                                    }
                                    this.params.barWidth
                                        ? this.drawBars(peaks, 0, start, end)
                                        : this.drawWave(peaks, 0, start, end);
                                },

                                /**
                                 * Scroll to the beginning
                                 */
                            },
                            {
                                key: "resetScroll",
                                value: function resetScroll() {
                                    if (this.wrapper !== null) {
                                        this.wrapper.scrollLeft = 0;
                                    }
                                },

                                /**
                                 * Recenter the view-port at a certain percent of the waveform
                                 *
                                 * @param {number} percent Value from 0 to 1 on the waveform
                                 */
                            },
                            {
                                key: "recenter",
                                value: function recenter(percent) {
                                    var position =
                                        this.wrapper.scrollWidth * percent;
                                    this.recenterOnPosition(position, true);
                                },

                                /**
                                 * Recenter the view-port on a position, either scroll there immediately or
                                 * in steps of 5 pixels
                                 *
                                 * @param {number} position X-offset in pixels
                                 * @param {boolean} immediate Set to true to immediately scroll somewhere
                                 */
                            },
                            {
                                key: "recenterOnPosition",
                                value: function recenterOnPosition(
                                    position,
                                    immediate
                                ) {
                                    var scrollLeft = this.wrapper.scrollLeft;
                                    var half = ~~(this.wrapper.clientWidth / 2);
                                    var maxScroll =
                                        this.wrapper.scrollWidth -
                                        this.wrapper.clientWidth;
                                    var target = position - half;
                                    var offset = target - scrollLeft;
                                    if (maxScroll == 0) {
                                        // no need to continue if scrollbar is not there
                                        return;
                                    }

                                    // if the cursor is currently visible...
                                    if (
                                        !immediate &&
                                        -half <= offset &&
                                        offset < half
                                    ) {
                                        // set rate at which waveform is centered
                                        var rate = this.params.autoCenterRate;

                                        // make rate depend on width of view and length of waveform
                                        rate /= half;
                                        rate *= maxScroll;
                                        offset = Math.max(
                                            -rate,
                                            Math.min(rate, offset)
                                        );
                                        target = scrollLeft + offset;
                                    }

                                    // limit target to valid range (0 to maxScroll)
                                    target = Math.max(
                                        0,
                                        Math.min(maxScroll, target)
                                    );
                                    // no use attempting to scroll if we're not moving
                                    if (target != scrollLeft) {
                                        this.wrapper.scrollLeft = target;
                                    }
                                },

                                /**
                                 * Get the current scroll position in pixels
                                 *
                                 * @return {number} Horizontal scroll position in pixels
                                 */
                            },
                            {
                                key: "getScrollX",
                                value: function getScrollX() {
                                    var x = 0;
                                    if (this.wrapper) {
                                        var pixelRatio = this.params.pixelRatio;
                                        x = Math.round(
                                            this.wrapper.scrollLeft * pixelRatio
                                        );

                                        // In cases of elastic scroll (safari with mouse wheel) you can
                                        // scroll beyond the limits of the container
                                        // Calculate and floor the scrollable extent to make sure an out
                                        // of bounds value is not returned
                                        // Ticket #1312
                                        if (this.params.scrollParent) {
                                            var maxScroll = ~~(
                                                this.wrapper.scrollWidth *
                                                    pixelRatio -
                                                this.getWidth()
                                            );
                                            x = Math.min(
                                                maxScroll,
                                                Math.max(0, x)
                                            );
                                        }
                                    }
                                    return x;
                                },

                                /**
                                 * Get the width of the container
                                 *
                                 * @return {number} The width of the container
                                 */
                            },
                            {
                                key: "getWidth",
                                value: function getWidth() {
                                    return Math.round(
                                        this.container.clientWidth *
                                            this.params.pixelRatio
                                    );
                                },

                                /**
                                 * Set the width of the container
                                 *
                                 * @param {number} width The new width of the container
                                 * @return {boolean} Whether the width of the container was updated or not
                                 */
                            },
                            {
                                key: "setWidth",
                                value: function setWidth(width) {
                                    if (this.width == width) {
                                        return false;
                                    }
                                    this.width = width;
                                    if (
                                        this.params.fillParent ||
                                        this.params.scrollParent
                                    ) {
                                        this.style(this.wrapper, {
                                            width: "",
                                        });
                                    } else {
                                        var newWidth =
                                            ~~(
                                                this.width /
                                                this.params.pixelRatio
                                            ) + "px";
                                        this.style(this.wrapper, {
                                            width: newWidth,
                                        });
                                    }
                                    this.updateSize();
                                    return true;
                                },

                                /**
                                 * Set the height of the container
                                 *
                                 * @param {number} height The new height of the container.
                                 * @return {boolean} Whether the height of the container was updated or not
                                 */
                            },
                            {
                                key: "setHeight",
                                value: function setHeight(height) {
                                    if (height == this.height) {
                                        return false;
                                    }
                                    this.height = height;
                                    this.style(this.wrapper, {
                                        height:
                                            ~~(
                                                this.height /
                                                this.params.pixelRatio
                                            ) + "px",
                                    });
                                    this.updateSize();
                                    return true;
                                },

                                /**
                                 * Called by wavesurfer when progress should be rendered
                                 *
                                 * @param {number} progress From 0 to 1
                                 */
                            },
                            {
                                key: "progress",
                                value: function progress(_progress) {
                                    var minPxDelta = 1 / this.params.pixelRatio;
                                    var pos =
                                        Math.round(_progress * this.width) *
                                        minPxDelta;
                                    if (
                                        pos < this.lastPos ||
                                        pos - this.lastPos >= minPxDelta
                                    ) {
                                        this.lastPos = pos;
                                        if (
                                            this.params.scrollParent &&
                                            this.params.autoCenter
                                        ) {
                                            var newPos = ~~(
                                                this.wrapper.scrollWidth *
                                                _progress
                                            );
                                            this.recenterOnPosition(
                                                newPos,
                                                this.params
                                                    .autoCenterImmediately
                                            );
                                        }
                                        this.updateProgress(pos);
                                    }
                                },

                                /**
                                 * This is called when wavesurfer is destroyed
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {
                                    this.unAll();
                                    if (this.wrapper) {
                                        if (
                                            this.wrapper.parentNode ==
                                            this.container.domElement
                                        ) {
                                            this.container.removeChild(
                                                this.wrapper.domElement
                                            );
                                        }
                                        this.wrapper = null;
                                    }
                                },

                                /* Renderer-specific methods */

                                /**
                                 * Called after cursor related params have changed.
                                 *
                                 * @abstract
                                 */
                            },
                            {
                                key: "updateCursor",
                                value: function updateCursor() {},

                                /**
                                 * Called when the size of the container changes so the renderer can adjust
                                 *
                                 * @abstract
                                 */
                            },
                            {
                                key: "updateSize",
                                value: function updateSize() {},

                                /**
                                 * Draw a waveform with bars
                                 *
                                 * @abstract
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
                                 * rendering
                                 * @param {number} channelIndex The index of the current channel. Normally
                                 * should be 0
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that should be
                                 * rendered
                                 */
                            },
                            {
                                key: "drawBars",
                                value: function drawBars(
                                    peaks,
                                    channelIndex,
                                    start,
                                    end
                                ) {},

                                /**
                                 * Draw a waveform
                                 *
                                 * @abstract
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for split channel
                                 * rendering
                                 * @param {number} channelIndex The index of the current channel. Normally
                                 * should be 0
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that should be
                                 * rendered
                                 */
                            },
                            {
                                key: "drawWave",
                                value: function drawWave(
                                    peaks,
                                    channelIndex,
                                    start,
                                    end
                                ) {},

                                /**
                                 * Clear the waveform
                                 *
                                 * @abstract
                                 */
                            },
                            {
                                key: "clearWave",
                                value: function clearWave() {},

                                /**
                                 * Render the new progress
                                 *
                                 * @abstract
                                 * @param {number} position X-Offset of progress position in pixels
                                 */
                            },
                            {
                                key: "updateProgress",
                                value: function updateProgress(position) {},
                            },
                        ]);
                        return Drawer;
                    })(util.Observer);
                    exports["default"] = Drawer;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/drawer.multicanvas.js":
                /*!***********************************!*\
  !*** ./src/drawer.multicanvas.js ***!
  \***********************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var _drawer = _interopRequireDefault(
                        __webpack_require__(/*! ./drawer */ "./src/drawer.js")
                    );
                    var util = _interopRequireWildcard(
                        __webpack_require__(/*! ./util */ "./src/util/index.js")
                    );
                    var _drawer2 = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./drawer.canvasentry */ "./src/drawer.canvasentry.js"
                        )
                    );
                    function _getRequireWildcardCache(nodeInterop) {
                        if (typeof WeakMap !== "function") return null;
                        var cacheBabelInterop = new WeakMap();
                        var cacheNodeInterop = new WeakMap();
                        return (_getRequireWildcardCache =
                            function _getRequireWildcardCache(nodeInterop) {
                                return nodeInterop
                                    ? cacheNodeInterop
                                    : cacheBabelInterop;
                            })(nodeInterop);
                    }
                    function _interopRequireWildcard(obj, nodeInterop) {
                        if (!nodeInterop && obj && obj.__esModule) {
                            return obj;
                        }
                        if (
                            obj === null ||
                            (_typeof(obj) !== "object" &&
                                typeof obj !== "function")
                        ) {
                            return { default: obj };
                        }
                        var cache = _getRequireWildcardCache(nodeInterop);
                        if (cache && cache.has(obj)) {
                            return cache.get(obj);
                        }
                        var newObj = {};
                        var hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor;
                        for (var key in obj) {
                            if (
                                key !== "default" &&
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc = hasPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(obj, key)
                                    : null;
                                if (desc && (desc.get || desc.set)) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                        newObj.default = obj;
                        if (cache) {
                            cache.set(obj, newObj);
                        }
                        return newObj;
                    }
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    /**
                     * MultiCanvas renderer for wavesurfer. Is currently the default and sole
                     * builtin renderer.
                     *
                     * A `MultiCanvas` consists of one or more `CanvasEntry` instances, depending
                     * on the zoom level.
                     */
                    var MultiCanvas = /*#__PURE__*/ (function (_Drawer) {
                        _inherits(MultiCanvas, _Drawer);
                        var _super = _createSuper(MultiCanvas);
                        /**
                         * @param {HTMLElement} container The container node of the wavesurfer instance
                         * @param {WavesurferParams} params The wavesurfer initialisation options
                         */
                        function MultiCanvas(container, params) {
                            var _this;
                            _classCallCheck(this, MultiCanvas);
                            _this = _super.call(this, container, params);

                            /**
                             * @type {number}
                             */
                            _this.maxCanvasWidth = params.maxCanvasWidth;

                            /**
                             * @type {number}
                             */
                            _this.maxCanvasElementWidth = Math.round(
                                params.maxCanvasWidth / params.pixelRatio
                            );

                            /**
                             * Whether or not the progress wave is rendered. If the `waveColor`
                             * and `progressColor` are the same color it is not.
                             *
                             * @type {boolean}
                             */
                            _this.hasProgressCanvas =
                                params.waveColor != params.progressColor;

                            /**
                             * @type {number}
                             */
                            _this.halfPixel = 0.5 / params.pixelRatio;

                            /**
                             * List of `CanvasEntry` instances.
                             *
                             * @type {Array}
                             */
                            _this.canvases = [];

                            /**
                             * @type {HTMLElement}
                             */
                            _this.progressWave = null;

                            /**
                             * Class used to generate entries.
                             *
                             * @type {function}
                             */
                            _this.EntryClass = _drawer2.default;

                            /**
                             * Canvas 2d context attributes.
                             *
                             * @type {object}
                             */
                            _this.canvasContextAttributes =
                                params.drawingContextAttributes;

                            /**
                             * Overlap added between entries to prevent vertical white stripes
                             * between `canvas` elements.
                             *
                             * @type {number}
                             */
                            _this.overlap =
                                2 * Math.ceil(params.pixelRatio / 2);

                            /**
                             * The radius of the wave bars. Makes bars rounded
                             *
                             * @type {number}
                             */
                            _this.barRadius = params.barRadius || 0;

                            /**
                             * Whether to render the waveform vertically. Defaults to false.
                             *
                             * @type {boolean}
                             */
                            _this.vertical = params.vertical;
                            return _this;
                        }

                        /**
                         * Initialize the drawer
                         */
                        _createClass(MultiCanvas, [
                            {
                                key: "init",
                                value: function init() {
                                    this.createWrapper();
                                    this.createElements();
                                },

                                /**
                                 * Create the canvas elements and style them
                                 *
                                 */
                            },
                            {
                                key: "createElements",
                                value: function createElements() {
                                    this.progressWave = util.withOrientation(
                                        this.wrapper.appendChild(
                                            document.createElement("wave")
                                        ),
                                        this.params.vertical
                                    );
                                    this.style(this.progressWave, {
                                        position: "absolute",
                                        zIndex: 3,
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        overflow: "hidden",
                                        width: "0",
                                        display: "none",
                                        boxSizing: "border-box",
                                        borderRightStyle: "solid",
                                        pointerEvents: "none",
                                    });
                                    this.addCanvas();
                                    this.updateCursor();
                                },

                                /**
                                 * Update cursor style
                                 */
                            },
                            {
                                key: "updateCursor",
                                value: function updateCursor() {
                                    this.style(this.progressWave, {
                                        borderRightWidth:
                                            this.params.cursorWidth + "px",
                                        borderRightColor:
                                            this.params.cursorColor,
                                    });
                                },

                                /**
                                 * Adjust to the updated size by adding or removing canvases
                                 */
                            },
                            {
                                key: "updateSize",
                                value: function updateSize() {
                                    var _this2 = this;
                                    var totalWidth = Math.round(
                                        this.width / this.params.pixelRatio
                                    );
                                    var requiredCanvases = Math.ceil(
                                        totalWidth /
                                            (this.maxCanvasElementWidth +
                                                this.overlap)
                                    );

                                    // add required canvases
                                    while (
                                        this.canvases.length < requiredCanvases
                                    ) {
                                        this.addCanvas();
                                    }

                                    // remove older existing canvases, if any
                                    while (
                                        this.canvases.length > requiredCanvases
                                    ) {
                                        this.removeCanvas();
                                    }
                                    var canvasWidth =
                                        this.maxCanvasWidth + this.overlap;
                                    var lastCanvas = this.canvases.length - 1;
                                    this.canvases.forEach(function (entry, i) {
                                        if (i == lastCanvas) {
                                            canvasWidth =
                                                _this2.width -
                                                _this2.maxCanvasWidth *
                                                    lastCanvas;
                                        }
                                        _this2.updateDimensions(
                                            entry,
                                            canvasWidth,
                                            _this2.height
                                        );
                                        entry.clearWave();
                                    });
                                },

                                /**
                                 * Add a canvas to the canvas list
                                 *
                                 */
                            },
                            {
                                key: "addCanvas",
                                value: function addCanvas() {
                                    var entry = new this.EntryClass();
                                    entry.canvasContextAttributes =
                                        this.canvasContextAttributes;
                                    entry.hasProgressCanvas =
                                        this.hasProgressCanvas;
                                    entry.halfPixel = this.halfPixel;
                                    var leftOffset =
                                        this.maxCanvasElementWidth *
                                        this.canvases.length;

                                    // wave
                                    var wave = util.withOrientation(
                                        this.wrapper.appendChild(
                                            document.createElement("canvas")
                                        ),
                                        this.params.vertical
                                    );
                                    this.style(wave, {
                                        position: "absolute",
                                        zIndex: 2,
                                        left: leftOffset + "px",
                                        top: 0,
                                        bottom: 0,
                                        height: "100%",
                                        pointerEvents: "none",
                                    });
                                    entry.initWave(wave);

                                    // progress
                                    if (this.hasProgressCanvas) {
                                        var progress = util.withOrientation(
                                            this.progressWave.appendChild(
                                                document.createElement("canvas")
                                            ),
                                            this.params.vertical
                                        );
                                        this.style(progress, {
                                            position: "absolute",
                                            left: leftOffset + "px",
                                            top: 0,
                                            bottom: 0,
                                            height: "100%",
                                        });
                                        entry.initProgress(progress);
                                    }
                                    this.canvases.push(entry);
                                },

                                /**
                                 * Pop single canvas from the list
                                 *
                                 */
                            },
                            {
                                key: "removeCanvas",
                                value: function removeCanvas() {
                                    var lastEntry =
                                        this.canvases[this.canvases.length - 1];

                                    // wave
                                    lastEntry.wave.parentElement.removeChild(
                                        lastEntry.wave.domElement
                                    );

                                    // progress
                                    if (this.hasProgressCanvas) {
                                        lastEntry.progress.parentElement.removeChild(
                                            lastEntry.progress.domElement
                                        );
                                    }

                                    // cleanup
                                    if (lastEntry) {
                                        lastEntry.destroy();
                                        lastEntry = null;
                                    }
                                    this.canvases.pop();
                                },

                                /**
                                 * Update the dimensions of a canvas element
                                 *
                                 * @param {CanvasEntry} entry Target entry
                                 * @param {number} width The new width of the element
                                 * @param {number} height The new height of the element
                                 */
                            },
                            {
                                key: "updateDimensions",
                                value: function updateDimensions(
                                    entry,
                                    width,
                                    height
                                ) {
                                    var elementWidth = Math.round(
                                        width / this.params.pixelRatio
                                    );
                                    var totalWidth = Math.round(
                                        this.width / this.params.pixelRatio
                                    );

                                    // update canvas dimensions
                                    entry.updateDimensions(
                                        elementWidth,
                                        totalWidth,
                                        width,
                                        height
                                    );

                                    // style element
                                    this.style(this.progressWave, {
                                        display: "block",
                                    });
                                },

                                /**
                                 * Clear the whole multi-canvas
                                 */
                            },
                            {
                                key: "clearWave",
                                value: function clearWave() {
                                    var _this3 = this;
                                    util.frame(function () {
                                        _this3.canvases.forEach(function (
                                            entry
                                        ) {
                                            return entry.clearWave();
                                        });
                                    })();
                                },

                                /**
                                 * Draw a waveform with bars
                                 *
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
                                 * for split channel rendering
                                 * @param {number} channelIndex The index of the current channel. Normally
                                 * should be 0. Must be an integer.
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that should be
                                 * rendered
                                 * @returns {void}
                                 */
                            },
                            {
                                key: "drawBars",
                                value: function drawBars(
                                    peaks,
                                    channelIndex,
                                    start,
                                    end
                                ) {
                                    var _this4 = this;
                                    return this.prepareDraw(
                                        peaks,
                                        channelIndex,
                                        start,
                                        end,
                                        function (_ref) {
                                            var absmax = _ref.absmax,
                                                hasMinVals = _ref.hasMinVals,
                                                height = _ref.height,
                                                offsetY = _ref.offsetY,
                                                halfH = _ref.halfH,
                                                peaks = _ref.peaks,
                                                ch = _ref.channelIndex;
                                            // if drawBars was called within ws.empty we don't pass a start and
                                            // don't want anything to happen
                                            if (start === undefined) {
                                                return;
                                            }
                                            // Skip every other value if there are negatives.
                                            var peakIndexScale = hasMinVals
                                                ? 2
                                                : 1;
                                            var length =
                                                peaks.length / peakIndexScale;
                                            var bar =
                                                _this4.params.barWidth *
                                                _this4.params.pixelRatio;
                                            var gap =
                                                _this4.params.barGap === null
                                                    ? Math.max(
                                                          _this4.params
                                                              .pixelRatio,
                                                          ~~(bar / 2)
                                                      )
                                                    : Math.max(
                                                          _this4.params
                                                              .pixelRatio,
                                                          _this4.params.barGap *
                                                              _this4.params
                                                                  .pixelRatio
                                                      );
                                            var step = bar + gap;
                                            var scale = length / _this4.width;
                                            var first = start;
                                            var last = end;
                                            var peakIndex = first;
                                            for (
                                                peakIndex;
                                                peakIndex < last;
                                                peakIndex += step
                                            ) {
                                                // search for the highest peak in the range this bar falls into
                                                var peak = 0;
                                                var peakIndexRange =
                                                    Math.floor(
                                                        peakIndex * scale
                                                    ) * peakIndexScale; // start index
                                                var peakIndexEnd =
                                                    Math.floor(
                                                        (peakIndex + step) *
                                                            scale
                                                    ) * peakIndexScale;
                                                do {
                                                    // do..while makes sure at least one peak is always evaluated
                                                    var newPeak = Math.abs(
                                                        peaks[peakIndexRange]
                                                    ); // for arrays starting with negative values
                                                    if (newPeak > peak) {
                                                        peak = newPeak; // higher
                                                    }

                                                    peakIndexRange +=
                                                        peakIndexScale; // skip every other value for negatives
                                                } while (
                                                    peakIndexRange <
                                                    peakIndexEnd
                                                );

                                                // calculate the height of this bar according to the highest peak found
                                                var h = Math.round(
                                                    (peak / absmax) * halfH
                                                );

                                                // raise the bar height to the specified minimum height
                                                // Math.max is used to replace any value smaller than barMinHeight (not just 0) with barMinHeight
                                                if (
                                                    _this4.params.barMinHeight
                                                ) {
                                                    h = Math.max(
                                                        h,
                                                        _this4.params
                                                            .barMinHeight
                                                    );
                                                }
                                                _this4.fillRect(
                                                    peakIndex +
                                                        _this4.halfPixel,
                                                    halfH - h + offsetY,
                                                    bar + _this4.halfPixel,
                                                    h * 2,
                                                    _this4.barRadius,
                                                    ch
                                                );
                                            }
                                        }
                                    );
                                },

                                /**
                                 * Draw a waveform
                                 *
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays
                                 * for split channel rendering
                                 * @param {number} channelIndex The index of the current channel. Normally
                                 * should be 0
                                 * @param {number?} start The x-offset of the beginning of the area that
                                 * should be rendered (If this isn't set only a flat line is rendered)
                                 * @param {number?} end The x-offset of the end of the area that should be
                                 * rendered
                                 * @returns {void}
                                 */
                            },
                            {
                                key: "drawWave",
                                value: function drawWave(
                                    peaks,
                                    channelIndex,
                                    start,
                                    end
                                ) {
                                    var _this5 = this;
                                    return this.prepareDraw(
                                        peaks,
                                        channelIndex,
                                        start,
                                        end,
                                        function (_ref2) {
                                            var absmax = _ref2.absmax,
                                                hasMinVals = _ref2.hasMinVals,
                                                height = _ref2.height,
                                                offsetY = _ref2.offsetY,
                                                halfH = _ref2.halfH,
                                                peaks = _ref2.peaks,
                                                channelIndex =
                                                    _ref2.channelIndex;
                                            if (!hasMinVals) {
                                                var reflectedPeaks = [];
                                                var len = peaks.length;
                                                var i = 0;
                                                for (i; i < len; i++) {
                                                    reflectedPeaks[2 * i] =
                                                        peaks[i];
                                                    reflectedPeaks[2 * i + 1] =
                                                        -peaks[i];
                                                }
                                                peaks = reflectedPeaks;
                                            }

                                            // if drawWave was called within ws.empty we don't pass a start and
                                            // end and simply want a flat line
                                            if (start !== undefined) {
                                                _this5.drawLine(
                                                    peaks,
                                                    absmax,
                                                    halfH,
                                                    offsetY,
                                                    start,
                                                    end,
                                                    channelIndex
                                                );
                                            }

                                            // always draw a median line
                                            _this5.fillRect(
                                                0,
                                                halfH +
                                                    offsetY -
                                                    _this5.halfPixel,
                                                _this5.width,
                                                _this5.halfPixel,
                                                _this5.barRadius,
                                                channelIndex
                                            );
                                        }
                                    );
                                },

                                /**
                                 * Tell the canvas entries to render their portion of the waveform
                                 *
                                 * @param {number[]} peaks Peaks data
                                 * @param {number} absmax Maximum peak value (absolute)
                                 * @param {number} halfH Half the height of the waveform
                                 * @param {number} offsetY Offset to the top
                                 * @param {number} start The x-offset of the beginning of the area that
                                 * should be rendered
                                 * @param {number} end The x-offset of the end of the area that
                                 * should be rendered
                                 * @param {channelIndex} channelIndex The channel index of the line drawn
                                 */
                            },
                            {
                                key: "drawLine",
                                value: function drawLine(
                                    peaks,
                                    absmax,
                                    halfH,
                                    offsetY,
                                    start,
                                    end,
                                    channelIndex
                                ) {
                                    var _this6 = this;
                                    var _ref3 =
                                            this.params.splitChannelsOptions
                                                .channelColors[channelIndex] ||
                                            {},
                                        waveColor = _ref3.waveColor,
                                        progressColor = _ref3.progressColor;
                                    this.canvases.forEach(function (entry, i) {
                                        _this6.setFillStyles(
                                            entry,
                                            waveColor,
                                            progressColor
                                        );
                                        _this6.applyCanvasTransforms(
                                            entry,
                                            _this6.params.vertical
                                        );
                                        entry.drawLines(
                                            peaks,
                                            absmax,
                                            halfH,
                                            offsetY,
                                            start,
                                            end
                                        );
                                    });
                                },

                                /**
                                 * Draw a rectangle on the multi-canvas
                                 *
                                 * @param {number} x X-position of the rectangle
                                 * @param {number} y Y-position of the rectangle
                                 * @param {number} width Width of the rectangle
                                 * @param {number} height Height of the rectangle
                                 * @param {number} radius Radius of the rectangle
                                 * @param {channelIndex} channelIndex The channel index of the bar drawn
                                 */
                            },
                            {
                                key: "fillRect",
                                value: function fillRect(
                                    x,
                                    y,
                                    width,
                                    height,
                                    radius,
                                    channelIndex
                                ) {
                                    var startCanvas = Math.floor(
                                        x / this.maxCanvasWidth
                                    );
                                    var endCanvas = Math.min(
                                        Math.ceil(
                                            (x + width) / this.maxCanvasWidth
                                        ) + 1,
                                        this.canvases.length
                                    );
                                    var i = startCanvas;
                                    for (i; i < endCanvas; i++) {
                                        var entry = this.canvases[i];
                                        var leftOffset =
                                            i * this.maxCanvasWidth;
                                        var intersection = {
                                            x1: Math.max(
                                                x,
                                                i * this.maxCanvasWidth
                                            ),
                                            y1: y,
                                            x2: Math.min(
                                                x + width,
                                                i * this.maxCanvasWidth +
                                                    entry.wave.width
                                            ),
                                            y2: y + height,
                                        };
                                        if (intersection.x1 < intersection.x2) {
                                            var _ref4 =
                                                    this.params
                                                        .splitChannelsOptions
                                                        .channelColors[
                                                        channelIndex
                                                    ] || {},
                                                waveColor = _ref4.waveColor,
                                                progressColor =
                                                    _ref4.progressColor;
                                            this.setFillStyles(
                                                entry,
                                                waveColor,
                                                progressColor
                                            );
                                            this.applyCanvasTransforms(
                                                entry,
                                                this.params.vertical
                                            );
                                            entry.fillRects(
                                                intersection.x1 - leftOffset,
                                                intersection.y1,
                                                intersection.x2 -
                                                    intersection.x1,
                                                intersection.y2 -
                                                    intersection.y1,
                                                radius
                                            );
                                        }
                                    }
                                },

                                /**
                                 * Returns whether to hide the channel from being drawn based on params.
                                 *
                                 * @param {number} channelIndex The index of the current channel.
                                 * @returns {bool} True to hide the channel, false to draw.
                                 */
                            },
                            {
                                key: "hideChannel",
                                value: function hideChannel(channelIndex) {
                                    return (
                                        this.params.splitChannels &&
                                        this.params.splitChannelsOptions.filterChannels.includes(
                                            channelIndex
                                        )
                                    );
                                },

                                /**
                                 * Performs preparation tasks and calculations which are shared by `drawBars`
                                 * and `drawWave`
                                 *
                                 * @param {number[]|Number.<Array[]>} peaks Can also be an array of arrays for
                                 * split channel rendering
                                 * @param {number} channelIndex The index of the current channel. Normally
                                 * should be 0
                                 * @param {number?} start The x-offset of the beginning of the area that
                                 * should be rendered. If this isn't set only a flat line is rendered
                                 * @param {number?} end The x-offset of the end of the area that should be
                                 * rendered
                                 * @param {function} fn The render function to call, e.g. `drawWave`
                                 * @param {number} drawIndex The index of the current channel after filtering.
                                 * @param {number?} normalizedMax Maximum modulation value across channels for use with relativeNormalization. Ignored when undefined
                                 * @returns {void}
                                 */
                            },
                            {
                                key: "prepareDraw",
                                value: function prepareDraw(
                                    peaks,
                                    channelIndex,
                                    start,
                                    end,
                                    fn,
                                    drawIndex,
                                    normalizedMax
                                ) {
                                    var _this7 = this;
                                    return util.frame(function () {
                                        // Split channels and call this function with the channelIndex set
                                        if (peaks[0] instanceof Array) {
                                            var channels = peaks;
                                            if (_this7.params.splitChannels) {
                                                var filteredChannels =
                                                    channels.filter(function (
                                                        c,
                                                        i
                                                    ) {
                                                        return !_this7.hideChannel(
                                                            i
                                                        );
                                                    });
                                                if (
                                                    !_this7.params
                                                        .splitChannelsOptions
                                                        .overlay
                                                ) {
                                                    _this7.setHeight(
                                                        Math.max(
                                                            filteredChannels.length,
                                                            1
                                                        ) *
                                                            _this7.params
                                                                .height *
                                                            _this7.params
                                                                .pixelRatio
                                                    );
                                                }
                                                var overallAbsMax;
                                                if (
                                                    _this7.params
                                                        .splitChannelsOptions &&
                                                    _this7.params
                                                        .splitChannelsOptions
                                                        .relativeNormalization
                                                ) {
                                                    // calculate maximum peak across channels to use for normalization
                                                    overallAbsMax = util.max(
                                                        channels.map(function (
                                                            channelPeaks
                                                        ) {
                                                            return util.absMax(
                                                                channelPeaks
                                                            );
                                                        })
                                                    );
                                                }
                                                return channels.forEach(
                                                    function (channelPeaks, i) {
                                                        return _this7.prepareDraw(
                                                            channelPeaks,
                                                            i,
                                                            start,
                                                            end,
                                                            fn,
                                                            filteredChannels.indexOf(
                                                                channelPeaks
                                                            ),
                                                            overallAbsMax
                                                        );
                                                    }
                                                );
                                            }
                                            peaks = channels[0];
                                        }

                                        // Return and do not draw channel peaks if hidden.
                                        if (_this7.hideChannel(channelIndex)) {
                                            return;
                                        }

                                        // calculate maximum modulation value, either from the barHeight
                                        // parameter or if normalize=true from the largest value in the peak
                                        // set
                                        var absmax =
                                            1 / _this7.params.barHeight;
                                        if (_this7.params.normalize) {
                                            absmax =
                                                normalizedMax === undefined
                                                    ? util.absMax(peaks)
                                                    : normalizedMax;
                                        }

                                        // Bar wave draws the bottom only as a reflection of the top,
                                        // so we don't need negative values
                                        var hasMinVals = [].some.call(
                                            peaks,
                                            function (val) {
                                                return val < 0;
                                            }
                                        );
                                        var height =
                                            _this7.params.height *
                                            _this7.params.pixelRatio;
                                        var halfH = height / 2;
                                        var offsetY = height * drawIndex || 0;

                                        // Override offsetY if overlay is true
                                        if (
                                            _this7.params
                                                .splitChannelsOptions &&
                                            _this7.params.splitChannelsOptions
                                                .overlay
                                        ) {
                                            offsetY = 0;
                                        }
                                        return fn({
                                            absmax: absmax,
                                            hasMinVals: hasMinVals,
                                            height: height,
                                            offsetY: offsetY,
                                            halfH: halfH,
                                            peaks: peaks,
                                            channelIndex: channelIndex,
                                        });
                                    })();
                                },

                                /**
                                 * Set the fill styles for a certain entry (wave and progress)
                                 *
                                 * @param {CanvasEntry} entry Target entry
                                 * @param {string} waveColor Wave color to draw this entry
                                 * @param {string} progressColor Progress color to draw this entry
                                 */
                            },
                            {
                                key: "setFillStyles",
                                value: function setFillStyles(entry) {
                                    var waveColor =
                                        arguments.length > 1 &&
                                        arguments[1] !== undefined
                                            ? arguments[1]
                                            : this.params.waveColor;
                                    var progressColor =
                                        arguments.length > 2 &&
                                        arguments[2] !== undefined
                                            ? arguments[2]
                                            : this.params.progressColor;
                                    entry.setFillStyles(
                                        waveColor,
                                        progressColor
                                    );
                                },

                                /**
                                 * Set the canvas transforms for a certain entry (wave and progress)
                                 *
                                 * @param {CanvasEntry} entry Target entry
                                 * @param {boolean} vertical Whether to render the waveform vertically
                                 */
                            },
                            {
                                key: "applyCanvasTransforms",
                                value: function applyCanvasTransforms(entry) {
                                    var vertical =
                                        arguments.length > 1 &&
                                        arguments[1] !== undefined
                                            ? arguments[1]
                                            : false;
                                    entry.applyCanvasTransforms(vertical);
                                },

                                /**
                                 * Return image data of the multi-canvas
                                 *
                                 * When using a `type` of `'blob'`, this will return a `Promise`.
                                 *
                                 * @param {string} format='image/png' An optional value of a format type.
                                 * @param {number} quality=0.92 An optional value between 0 and 1.
                                 * @param {string} type='dataURL' Either 'dataURL' or 'blob'.
                                 * @return {string|string[]|Promise} When using the default `'dataURL'`
                                 * `type` this returns a single data URL or an array of data URLs,
                                 * one for each canvas. When using the `'blob'` `type` this returns a
                                 * `Promise` that resolves with an array of `Blob` instances, one for each
                                 * canvas.
                                 */
                            },
                            {
                                key: "getImage",
                                value: function getImage(
                                    format,
                                    quality,
                                    type
                                ) {
                                    if (type === "blob") {
                                        return Promise.all(
                                            this.canvases.map(function (entry) {
                                                return entry.getImage(
                                                    format,
                                                    quality,
                                                    type
                                                );
                                            })
                                        );
                                    } else if (type === "dataURL") {
                                        var images = this.canvases.map(
                                            function (entry) {
                                                return entry.getImage(
                                                    format,
                                                    quality,
                                                    type
                                                );
                                            }
                                        );
                                        return images.length > 1
                                            ? images
                                            : images[0];
                                    }
                                },

                                /**
                                 * Render the new progress
                                 *
                                 * @param {number} position X-offset of progress position in pixels
                                 */
                            },
                            {
                                key: "updateProgress",
                                value: function updateProgress(position) {
                                    this.style(this.progressWave, {
                                        width: position + "px",
                                    });
                                },
                            },
                        ]);
                        return MultiCanvas;
                    })(_drawer.default);
                    exports["default"] = MultiCanvas;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/mediaelement-webaudio.js":
                /*!**************************************!*\
  !*** ./src/mediaelement-webaudio.js ***!
  \**************************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var _mediaelement = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./mediaelement */ "./src/mediaelement.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    function _get() {
                        if (typeof Reflect !== "undefined" && Reflect.get) {
                            _get = Reflect.get.bind();
                        } else {
                            _get = function _get(target, property, receiver) {
                                var base = _superPropBase(target, property);
                                if (!base) return;
                                var desc = Object.getOwnPropertyDescriptor(
                                    base,
                                    property
                                );
                                if (desc.get) {
                                    return desc.get.call(
                                        arguments.length < 3 ? target : receiver
                                    );
                                }
                                return desc.value;
                            };
                        }
                        return _get.apply(this, arguments);
                    }
                    function _superPropBase(object, property) {
                        while (
                            !Object.prototype.hasOwnProperty.call(
                                object,
                                property
                            )
                        ) {
                            object = _getPrototypeOf(object);
                            if (object === null) break;
                        }
                        return object;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    /**
                     * MediaElementWebAudio backend: load audio via an HTML5 audio tag, but playback with the WebAudio API.
                     * The advantage here is that the html5 <audio> tag can perform range requests on the server and not
                     * buffer the entire file in one request, and you still get the filtering and scripting functionality
                     * of the webaudio API.
                     * Note that in order to use range requests and prevent buffering, you must provide peak data.
                     *
                     * @since 3.2.0
                     */
                    var MediaElementWebAudio = /*#__PURE__*/ (function (
                        _MediaElement
                    ) {
                        _inherits(MediaElementWebAudio, _MediaElement);
                        var _super = _createSuper(MediaElementWebAudio);
                        /**
                         * Construct the backend
                         *
                         * @param {WavesurferParams} params Wavesurfer parameters
                         */
                        function MediaElementWebAudio(params) {
                            var _this;
                            _classCallCheck(this, MediaElementWebAudio);
                            _this = _super.call(this, params);
                            /** @private */
                            _this.params = params;
                            /** @private */
                            _this.sourceMediaElement = null;
                            return _this;
                        }

                        /**
                         * Initialise the backend, called in `wavesurfer.createBackend()`
                         */
                        _createClass(MediaElementWebAudio, [
                            {
                                key: "init",
                                value: function init() {
                                    this.setPlaybackRate(this.params.audioRate);
                                    this.createTimer();
                                    this.createVolumeNode();
                                    this.createScriptNode();
                                    this.createAnalyserNode();
                                },
                                /**
                                 * Private method called by both `load` (from url)
                                 * and `loadElt` (existing media element) methods.
                                 *
                                 * @param {HTMLMediaElement} media HTML5 Audio or Video element
                                 * @param {number[]|Number.<Array[]>} peaks Array of peak data
                                 * @param {string} preload HTML 5 preload attribute value
                                 * @private
                                 */
                            },
                            {
                                key: "_load",
                                value: function _load(media, peaks, preload) {
                                    _get(
                                        _getPrototypeOf(
                                            MediaElementWebAudio.prototype
                                        ),
                                        "_load",
                                        this
                                    ).call(this, media, peaks, preload);
                                    this.createMediaElementSource(media);
                                },

                                /**
                                 * Create MediaElementSource node
                                 *
                                 * @since 3.2.0
                                 * @param {HTMLMediaElement} mediaElement HTML5 Audio to load
                                 */
                            },
                            {
                                key: "createMediaElementSource",
                                value: function createMediaElementSource(
                                    mediaElement
                                ) {
                                    this.sourceMediaElement =
                                        this.ac.createMediaElementSource(
                                            mediaElement
                                        );
                                    this.sourceMediaElement.connect(
                                        this.analyser
                                    );
                                },
                            },
                            {
                                key: "play",
                                value: function play(start, end) {
                                    this.resumeAudioContext();
                                    return _get(
                                        _getPrototypeOf(
                                            MediaElementWebAudio.prototype
                                        ),
                                        "play",
                                        this
                                    ).call(this, start, end);
                                },

                                /**
                                 * This is called when wavesurfer is destroyed
                                 *
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {
                                    _get(
                                        _getPrototypeOf(
                                            MediaElementWebAudio.prototype
                                        ),
                                        "destroy",
                                        this
                                    ).call(this);
                                    this.destroyWebAudio();
                                },
                            },
                        ]);
                        return MediaElementWebAudio;
                    })(_mediaelement.default);
                    exports["default"] = MediaElementWebAudio;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/mediaelement.js":
                /*!*****************************!*\
  !*** ./src/mediaelement.js ***!
  \*****************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var _webaudio = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./webaudio */ "./src/webaudio.js"
                        )
                    );
                    var util = _interopRequireWildcard(
                        __webpack_require__(/*! ./util */ "./src/util/index.js")
                    );
                    function _getRequireWildcardCache(nodeInterop) {
                        if (typeof WeakMap !== "function") return null;
                        var cacheBabelInterop = new WeakMap();
                        var cacheNodeInterop = new WeakMap();
                        return (_getRequireWildcardCache =
                            function _getRequireWildcardCache(nodeInterop) {
                                return nodeInterop
                                    ? cacheNodeInterop
                                    : cacheBabelInterop;
                            })(nodeInterop);
                    }
                    function _interopRequireWildcard(obj, nodeInterop) {
                        if (!nodeInterop && obj && obj.__esModule) {
                            return obj;
                        }
                        if (
                            obj === null ||
                            (_typeof(obj) !== "object" &&
                                typeof obj !== "function")
                        ) {
                            return { default: obj };
                        }
                        var cache = _getRequireWildcardCache(nodeInterop);
                        if (cache && cache.has(obj)) {
                            return cache.get(obj);
                        }
                        var newObj = {};
                        var hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor;
                        for (var key in obj) {
                            if (
                                key !== "default" &&
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc = hasPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(obj, key)
                                    : null;
                                if (desc && (desc.get || desc.set)) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                        newObj.default = obj;
                        if (cache) {
                            cache.set(obj, newObj);
                        }
                        return newObj;
                    }
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    function _get() {
                        if (typeof Reflect !== "undefined" && Reflect.get) {
                            _get = Reflect.get.bind();
                        } else {
                            _get = function _get(target, property, receiver) {
                                var base = _superPropBase(target, property);
                                if (!base) return;
                                var desc = Object.getOwnPropertyDescriptor(
                                    base,
                                    property
                                );
                                if (desc.get) {
                                    return desc.get.call(
                                        arguments.length < 3 ? target : receiver
                                    );
                                }
                                return desc.value;
                            };
                        }
                        return _get.apply(this, arguments);
                    }
                    function _superPropBase(object, property) {
                        while (
                            !Object.prototype.hasOwnProperty.call(
                                object,
                                property
                            )
                        ) {
                            object = _getPrototypeOf(object);
                            if (object === null) break;
                        }
                        return object;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    /**
                     * MediaElement backend
                     */
                    var MediaElement = /*#__PURE__*/ (function (_WebAudio) {
                        _inherits(MediaElement, _WebAudio);
                        var _super = _createSuper(MediaElement);
                        /**
                         * Construct the backend
                         *
                         * @param {WavesurferParams} params Wavesurfer parameters
                         */
                        function MediaElement(params) {
                            var _this;
                            _classCallCheck(this, MediaElement);
                            _this = _super.call(this, params);
                            /** @private */
                            _this.params = params;

                            /**
                             * Initially a dummy media element to catch errors. Once `_load` is
                             * called, this will contain the actual `HTMLMediaElement`.
                             * @private
                             */
                            _this.media = {
                                currentTime: 0,
                                duration: 0,
                                paused: true,
                                playbackRate: 1,
                                play: function play() {},
                                pause: function pause() {},
                                volume: 0,
                            };

                            /** @private */
                            _this.mediaType = params.mediaType.toLowerCase();
                            /** @private */
                            _this.elementPosition = params.elementPosition;
                            /** @private */
                            _this.peaks = null;
                            /** @private */
                            _this.playbackRate = 1;
                            /** @private */
                            _this.volume = 1;
                            /** @private */
                            _this.isMuted = false;
                            /** @private */
                            _this.buffer = null;
                            /** @private */
                            _this.onPlayEnd = null;
                            /** @private */
                            _this.mediaListeners = {};
                            return _this;
                        }

                        /**
                         * Initialise the backend, called in `wavesurfer.createBackend()`
                         */
                        _createClass(MediaElement, [
                            {
                                key: "init",
                                value: function init() {
                                    this.setPlaybackRate(this.params.audioRate);
                                    this.createTimer();
                                },

                                /**
                                 * Attach event listeners to media element.
                                 */
                            },
                            {
                                key: "_setupMediaListeners",
                                value: function _setupMediaListeners() {
                                    var _this2 = this;
                                    this.mediaListeners.error = function () {
                                        _this2.fireEvent(
                                            "error",
                                            "Error loading media element"
                                        );
                                    };
                                    this.mediaListeners.canplay = function () {
                                        _this2.fireEvent("canplay");
                                    };
                                    this.mediaListeners.ended = function () {
                                        _this2.fireEvent("finish");
                                    };
                                    // listen to and relay play, pause and seeked events to enable
                                    // playback control from the external media element
                                    this.mediaListeners.play = function () {
                                        _this2.fireEvent("play");
                                    };
                                    this.mediaListeners.pause = function () {
                                        _this2.fireEvent("pause");
                                    };
                                    this.mediaListeners.seeked = function (
                                        event
                                    ) {
                                        _this2.fireEvent("seek");
                                    };
                                    this.mediaListeners.volumechange =
                                        function (event) {
                                            _this2.isMuted = _this2.media.muted;
                                            if (_this2.isMuted) {
                                                _this2.volume = 0;
                                            } else {
                                                _this2.volume =
                                                    _this2.media.volume;
                                            }
                                            _this2.fireEvent("volume");
                                        };

                                    // reset event listeners
                                    Object.keys(this.mediaListeners).forEach(
                                        function (id) {
                                            _this2.media.removeEventListener(
                                                id,
                                                _this2.mediaListeners[id]
                                            );
                                            _this2.media.addEventListener(
                                                id,
                                                _this2.mediaListeners[id]
                                            );
                                        }
                                    );
                                },

                                /**
                                 * Create a timer to provide a more precise `audioprocess` event.
                                 */
                            },
                            {
                                key: "createTimer",
                                value: function createTimer() {
                                    var _this3 = this;
                                    var onAudioProcess =
                                        function onAudioProcess() {
                                            if (_this3.isPaused()) {
                                                return;
                                            }
                                            _this3.fireEvent(
                                                "audioprocess",
                                                _this3.getCurrentTime()
                                            );

                                            // Call again in the next frame
                                            util.frame(onAudioProcess)();
                                        };
                                    this.on("play", onAudioProcess);

                                    // Update the progress one more time to prevent it from being stuck in
                                    // case of lower framerates
                                    this.on("pause", function () {
                                        _this3.fireEvent(
                                            "audioprocess",
                                            _this3.getCurrentTime()
                                        );
                                    });
                                },

                                /**
                                 * Create media element with url as its source,
                                 * and append to container element.
                                 *
                                 * @param {string} url Path to media file
                                 * @param {HTMLElement} container HTML element
                                 * @param {number[]|Number.<Array[]>} peaks Array of peak data
                                 * @param {string} preload HTML 5 preload attribute value
                                 * @throws Will throw an error if the `url` argument is not a valid media
                                 * element.
                                 */
                            },
                            {
                                key: "load",
                                value: function load(
                                    url,
                                    container,
                                    peaks,
                                    preload
                                ) {
                                    var media = document.createElement(
                                        this.mediaType
                                    );
                                    media.controls = this.params.mediaControls;
                                    media.autoplay =
                                        this.params.autoplay || false;
                                    media.preload =
                                        preload == null ? "auto" : preload;
                                    media.src = url;
                                    media.style.width = "100%";
                                    var prevMedia = container.querySelector(
                                        this.mediaType
                                    );
                                    if (prevMedia) {
                                        container.removeChild(prevMedia);
                                    }
                                    container.appendChild(media);
                                    this._load(media, peaks, preload);
                                },

                                /**
                                 * Load existing media element.
                                 *
                                 * @param {HTMLMediaElement} elt HTML5 Audio or Video element
                                 * @param {number[]|Number.<Array[]>} peaks Array of peak data
                                 */
                            },
                            {
                                key: "loadElt",
                                value: function loadElt(elt, peaks) {
                                    elt.controls = this.params.mediaControls;
                                    elt.autoplay =
                                        this.params.autoplay || false;
                                    this._load(elt, peaks, elt.preload);
                                },

                                /**
                                 * Method called by both `load` (from url)
                                 * and `loadElt` (existing media element) methods.
                                 *
                                 * @param {HTMLMediaElement} media HTML5 Audio or Video element
                                 * @param {number[]|Number.<Array[]>} peaks Array of peak data
                                 * @param {string} preload HTML 5 preload attribute value
                                 * @throws Will throw an error if the `media` argument is not a valid media
                                 * element.
                                 * @private
                                 */
                            },
                            {
                                key: "_load",
                                value: function _load(media, peaks, preload) {
                                    // verify media element is valid
                                    if (
                                        !(media instanceof HTMLMediaElement) ||
                                        typeof media.addEventListener ===
                                            "undefined"
                                    ) {
                                        throw new Error(
                                            "media parameter is not a valid media element"
                                        );
                                    }

                                    // load must be called manually on iOS, otherwise peaks won't draw
                                    // until a user interaction triggers load --> 'ready' event
                                    //
                                    // note that we avoid calling media.load here when given peaks and preload == 'none'
                                    // as this almost always triggers some browser fetch of the media.
                                    if (
                                        typeof media.load == "function" &&
                                        !(peaks && preload == "none")
                                    ) {
                                        // Resets the media element and restarts the media resource. Any
                                        // pending events are discarded. How much media data is fetched is
                                        // still affected by the preload attribute.
                                        media.load();
                                    }
                                    this.media = media;
                                    this._setupMediaListeners();
                                    this.peaks = peaks;
                                    this.onPlayEnd = null;
                                    this.buffer = null;
                                    this.isMuted = media.muted;
                                    this.setPlaybackRate(this.playbackRate);
                                    this.setVolume(this.volume);
                                },

                                /**
                                 * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
                                 *
                                 * @return {boolean} Media paused or not
                                 */
                            },
                            {
                                key: "isPaused",
                                value: function isPaused() {
                                    return !this.media || this.media.paused;
                                },

                                /**
                                 * Used by `wavesurfer.getDuration()`
                                 *
                                 * @return {number} Duration
                                 */
                            },
                            {
                                key: "getDuration",
                                value: function getDuration() {
                                    if (this.explicitDuration) {
                                        return this.explicitDuration;
                                    }
                                    var duration = (this.buffer || this.media)
                                        .duration;
                                    if (duration >= Infinity) {
                                        // streaming audio
                                        duration = this.media.seekable.end(0);
                                    }
                                    return duration;
                                },

                                /**
                                 * Returns the current time in seconds relative to the audio-clip's
                                 * duration.
                                 *
                                 * @return {number} Current time
                                 */
                            },
                            {
                                key: "getCurrentTime",
                                value: function getCurrentTime() {
                                    return this.media && this.media.currentTime;
                                },

                                /**
                                 * Get the position from 0 to 1
                                 *
                                 * @return {number} Current position
                                 */
                            },
                            {
                                key: "getPlayedPercents",
                                value: function getPlayedPercents() {
                                    return (
                                        this.getCurrentTime() /
                                            this.getDuration() || 0
                                    );
                                },

                                /**
                                 * Get the audio source playback rate.
                                 *
                                 * @return {number} Playback rate
                                 */
                            },
                            {
                                key: "getPlaybackRate",
                                value: function getPlaybackRate() {
                                    return (
                                        this.playbackRate ||
                                        this.media.playbackRate
                                    );
                                },

                                /**
                                 * Set the audio source playback rate.
                                 *
                                 * @param {number} value Playback rate
                                 */
                            },
                            {
                                key: "setPlaybackRate",
                                value: function setPlaybackRate(value) {
                                    this.playbackRate = value || 1;
                                    this.media.playbackRate = this.playbackRate;
                                },

                                /**
                                 * Used by `wavesurfer.seekTo()`
                                 *
                                 * @param {number} start Position to start at in seconds
                                 */
                            },
                            {
                                key: "seekTo",
                                value: function seekTo(start) {
                                    if (start != null && !isNaN(start)) {
                                        this.media.currentTime = start;
                                    }
                                    this.clearPlayEnd();
                                },

                                /**
                                 * Plays the loaded audio region.
                                 *
                                 * @param {number} start Start offset in seconds, relative to the beginning
                                 * of a clip.
                                 * @param {number} end When to stop, relative to the beginning of a clip.
                                 * @emits MediaElement#play
                                 * @return {Promise} Result
                                 */
                            },
                            {
                                key: "play",
                                value: function play(start, end) {
                                    this.seekTo(start);
                                    var promise = this.media.play();
                                    end && this.setPlayEnd(end);
                                    return promise;
                                },

                                /**
                                 * Pauses the loaded audio.
                                 *
                                 * @emits MediaElement#pause
                                 * @return {Promise} Result
                                 */
                            },
                            {
                                key: "pause",
                                value: function pause() {
                                    var promise;
                                    if (this.media) {
                                        promise = this.media.pause();
                                    }
                                    this.clearPlayEnd();
                                    return promise;
                                },

                                /**
                                 * Set the play end
                                 *
                                 * @param {number} end Where to end
                                 */
                            },
                            {
                                key: "setPlayEnd",
                                value: function setPlayEnd(end) {
                                    var _this4 = this;
                                    this.clearPlayEnd();
                                    this._onPlayEnd = function (time) {
                                        if (time >= end) {
                                            _this4.pause();
                                            _this4.seekTo(end);
                                        }
                                    };
                                    this.on("audioprocess", this._onPlayEnd);
                                },

                                /** @private */
                            },
                            {
                                key: "clearPlayEnd",
                                value: function clearPlayEnd() {
                                    if (this._onPlayEnd) {
                                        this.un(
                                            "audioprocess",
                                            this._onPlayEnd
                                        );
                                        this._onPlayEnd = null;
                                    }
                                },

                                /**
                                 * Compute the max and min value of the waveform when broken into
                                 * <length> subranges.
                                 *
                                 * @param {number} length How many subranges to break the waveform into.
                                 * @param {number} first First sample in the required range.
                                 * @param {number} last Last sample in the required range.
                                 * @return {number[]|Number.<Array[]>} Array of 2*<length> peaks or array of
                                 * arrays of peaks consisting of (max, min) values for each subrange.
                                 */
                            },
                            {
                                key: "getPeaks",
                                value: function getPeaks(length, first, last) {
                                    if (this.buffer) {
                                        return _get(
                                            _getPrototypeOf(
                                                MediaElement.prototype
                                            ),
                                            "getPeaks",
                                            this
                                        ).call(this, length, first, last);
                                    }
                                    return this.peaks || [];
                                },

                                /**
                                 * Set the sink id for the media player
                                 *
                                 * @param {string} deviceId String value representing audio device id.
                                 * @returns {Promise} A Promise that resolves to `undefined` when there
                                 * are no errors.
                                 */
                            },
                            {
                                key: "setSinkId",
                                value: function setSinkId(deviceId) {
                                    if (deviceId) {
                                        if (!this.media.setSinkId) {
                                            return Promise.reject(
                                                new Error(
                                                    "setSinkId is not supported in your browser"
                                                )
                                            );
                                        }
                                        return this.media.setSinkId(deviceId);
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "Invalid deviceId: " + deviceId
                                        )
                                    );
                                },

                                /**
                                 * Get the current volume
                                 *
                                 * @return {number} value A floating point value between 0 and 1.
                                 */
                            },
                            {
                                key: "getVolume",
                                value: function getVolume() {
                                    return this.volume;
                                },

                                /**
                                 * Set the audio volume
                                 *
                                 * @param {number} value A floating point value between 0 and 1.
                                 */
                            },
                            {
                                key: "setVolume",
                                value: function setVolume(value) {
                                    this.volume = value;
                                    // no need to change when it's already at that volume
                                    if (this.media.volume !== this.volume) {
                                        this.media.volume = this.volume;
                                    }
                                },

                                /**
                                 * Enable or disable muted audio
                                 *
                                 * @since 4.0.0
                                 * @param {boolean} muted Specify `true` to mute audio.
                                 */
                            },
                            {
                                key: "setMute",
                                value: function setMute(muted) {
                                    // This causes a volume change to be emitted too through the
                                    // volumechange event listener.
                                    this.isMuted = this.media.muted = muted;
                                },

                                /**
                                 * This is called when wavesurfer is destroyed
                                 *
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {
                                    var _this5 = this;
                                    this.pause();
                                    this.unAll();
                                    this.destroyed = true;

                                    // cleanup media event listeners
                                    Object.keys(this.mediaListeners).forEach(
                                        function (id) {
                                            if (_this5.media) {
                                                _this5.media.removeEventListener(
                                                    id,
                                                    _this5.mediaListeners[id]
                                                );
                                            }
                                        }
                                    );
                                    if (
                                        this.params
                                            .removeMediaElementOnDestroy &&
                                        this.media &&
                                        this.media.parentNode
                                    ) {
                                        this.media.parentNode.removeChild(
                                            this.media
                                        );
                                    }
                                    this.media = null;
                                },
                            },
                        ]);
                        return MediaElement;
                    })(_webaudio.default);
                    exports["default"] = MediaElement;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/peakcache.js":
                /*!**************************!*\
  !*** ./src/peakcache.js ***!
  \**************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    /**
                     * Caches the decoded peaks data to improve rendering speed for large audio
                     *
                     * Is used if the option parameter `partialRender` is set to `true`
                     */
                    var PeakCache = /*#__PURE__*/ (function () {
                        /**
                         * Instantiate cache
                         */
                        function PeakCache() {
                            _classCallCheck(this, PeakCache);
                            this.clearPeakCache();
                        }

                        /**
                         * Empty the cache
                         */
                        _createClass(PeakCache, [
                            {
                                key: "clearPeakCache",
                                value: function clearPeakCache() {
                                    /**
                                     * Flat array with entries that are always in pairs to mark the
                                     * beginning and end of each subrange.  This is a convenience so we can
                                     * iterate over the pairs for easy set difference operations.
                                     * @private
                                     */
                                    this.peakCacheRanges = [];
                                    /**
                                     * Length of the entire cachable region, used for resetting the cache
                                     * when this changes (zoom events, for instance).
                                     * @private
                                     */
                                    this.peakCacheLength = -1;
                                },

                                /**
                                 * Add a range of peaks to the cache
                                 *
                                 * @param {number} length The length of the range
                                 * @param {number} start The x offset of the start of the range
                                 * @param {number} end The x offset of the end of the range
                                 * @return {Number.<Array[]>} Array with arrays of numbers
                                 */
                            },
                            {
                                key: "addRangeToPeakCache",
                                value: function addRangeToPeakCache(
                                    length,
                                    start,
                                    end
                                ) {
                                    if (length != this.peakCacheLength) {
                                        this.clearPeakCache();
                                        this.peakCacheLength = length;
                                    }

                                    // Return ranges that weren't in the cache before the call.
                                    var uncachedRanges = [];
                                    var i = 0;
                                    // Skip ranges before the current start.
                                    while (
                                        i < this.peakCacheRanges.length &&
                                        this.peakCacheRanges[i] < start
                                    ) {
                                        i++;
                                    }
                                    // If |i| is even, |start| falls after an existing range.  Otherwise,
                                    // |start| falls between an existing range, and the uncached region
                                    // starts when we encounter the next node in |peakCacheRanges| or
                                    // |end|, whichever comes first.
                                    if (i % 2 == 0) {
                                        uncachedRanges.push(start);
                                    }
                                    while (
                                        i < this.peakCacheRanges.length &&
                                        this.peakCacheRanges[i] <= end
                                    ) {
                                        uncachedRanges.push(
                                            this.peakCacheRanges[i]
                                        );
                                        i++;
                                    }
                                    // If |i| is even, |end| is after all existing ranges.
                                    if (i % 2 == 0) {
                                        uncachedRanges.push(end);
                                    }

                                    // Filter out the 0-length ranges.
                                    uncachedRanges = uncachedRanges.filter(
                                        function (item, pos, arr) {
                                            if (pos == 0) {
                                                return item != arr[pos + 1];
                                            } else if (pos == arr.length - 1) {
                                                return item != arr[pos - 1];
                                            }
                                            return (
                                                item != arr[pos - 1] &&
                                                item != arr[pos + 1]
                                            );
                                        }
                                    );

                                    // Merge the two ranges together, uncachedRanges will either contain
                                    // wholly new points, or duplicates of points in peakCacheRanges.  If
                                    // duplicates are detected, remove both and extend the range.
                                    this.peakCacheRanges =
                                        this.peakCacheRanges.concat(
                                            uncachedRanges
                                        );
                                    this.peakCacheRanges = this.peakCacheRanges
                                        .sort(function (a, b) {
                                            return a - b;
                                        })
                                        .filter(function (item, pos, arr) {
                                            if (pos == 0) {
                                                return item != arr[pos + 1];
                                            } else if (pos == arr.length - 1) {
                                                return item != arr[pos - 1];
                                            }
                                            return (
                                                item != arr[pos - 1] &&
                                                item != arr[pos + 1]
                                            );
                                        });

                                    // Push the uncached ranges into an array of arrays for ease of
                                    // iteration in the functions that call this.
                                    var uncachedRangePairs = [];
                                    for (
                                        i = 0;
                                        i < uncachedRanges.length;
                                        i += 2
                                    ) {
                                        uncachedRangePairs.push([
                                            uncachedRanges[i],
                                            uncachedRanges[i + 1],
                                        ]);
                                    }
                                    return uncachedRangePairs;
                                },

                                /**
                                 * For testing
                                 *
                                 * @return {Number.<Array[]>} Array with arrays of numbers
                                 */
                            },
                            {
                                key: "getCacheRanges",
                                value: function getCacheRanges() {
                                    var peakCacheRangePairs = [];
                                    var i;
                                    for (
                                        i = 0;
                                        i < this.peakCacheRanges.length;
                                        i += 2
                                    ) {
                                        peakCacheRangePairs.push([
                                            this.peakCacheRanges[i],
                                            this.peakCacheRanges[i + 1],
                                        ]);
                                    }
                                    return peakCacheRangePairs;
                                },
                            },
                        ]);
                        return PeakCache;
                    })();
                    exports["default"] = PeakCache;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/absMax.js":
                /*!****************************!*\
  !*** ./src/util/absMax.js ***!
  \****************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = absMax;
                    var _max = _interopRequireDefault(
                        __webpack_require__(/*! ./max */ "./src/util/max.js")
                    );
                    var _min = _interopRequireDefault(
                        __webpack_require__(/*! ./min */ "./src/util/min.js")
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    /**
                     * Get the largest absolute value in an array
                     *
                     * @param   {Array} values Array of numbers
                     * @returns {Number} Largest number found
                     * @example console.log(max([-3, 2, 1]), max([-3, 2, 4])); // logs 3 4
                     * @since 4.3.0
                     */
                    function absMax(values) {
                        var max = (0, _max.default)(values);
                        var min = (0, _min.default)(values);
                        return -min > max ? -min : max;
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/clamp.js":
                /*!***************************!*\
  !*** ./src/util/clamp.js ***!
  \***************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = clamp;
                    /**
                     * Returns a number limited to the given range.
                     *
                     * @param {number} val The number to be limited to a range
                     * @param {number} min The lower boundary of the limit range
                     * @param {number} max The upper boundary of the limit range
                     * @returns {number} A number in the range [min, max]
                     */
                    function clamp(val, min, max) {
                        return Math.min(Math.max(min, val), max);
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/fetch.js":
                /*!***************************!*\
  !*** ./src/util/fetch.js ***!
  \***************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = fetchFile;
                    var _observer = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./observer */ "./src/util/observer.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    var ProgressHandler = /*#__PURE__*/ (function () {
                        /**
                         * Instantiate ProgressHandler
                         *
                         * @param {Observer} instance The `fetchFile` observer instance.
                         * @param {Number} contentLength Content length.
                         * @param {Response} response Response object.
                         */
                        function ProgressHandler(
                            instance,
                            contentLength,
                            response
                        ) {
                            _classCallCheck(this, ProgressHandler);
                            this.instance = instance;
                            this.instance._reader = response.body.getReader();
                            this.total = parseInt(contentLength, 10);
                            this.loaded = 0;
                        }

                        /**
                         * A method that is called once, immediately after the `ReadableStream``
                         * is constructed.
                         *
                         * @param {ReadableStreamDefaultController} controller Controller instance
                         *     used to control the stream.
                         */
                        _createClass(ProgressHandler, [
                            {
                                key: "start",
                                value: function start(controller) {
                                    var _this = this;
                                    var read = function read() {
                                        // instance._reader.read() returns a promise that resolves
                                        // when a value has been received
                                        _this.instance._reader
                                            .read()
                                            .then(function (_ref) {
                                                var done = _ref.done,
                                                    value = _ref.value;
                                                // result objects contain two properties:
                                                // done  - true if the stream has already given you all its data.
                                                // value - some data. Always undefined when done is true.
                                                if (done) {
                                                    // ensure onProgress called when content-length=0
                                                    if (_this.total === 0) {
                                                        _this.instance.onProgress.call(
                                                            _this.instance,
                                                            {
                                                                loaded: _this.loaded,
                                                                total: _this.total,
                                                                lengthComputable: false,
                                                            }
                                                        );
                                                    }
                                                    // no more data needs to be consumed, close the stream
                                                    controller.close();
                                                    return;
                                                }
                                                _this.loaded +=
                                                    value.byteLength;
                                                _this.instance.onProgress.call(
                                                    _this.instance,
                                                    {
                                                        loaded: _this.loaded,
                                                        total: _this.total,
                                                        lengthComputable: !(
                                                            _this.total === 0
                                                        ),
                                                    }
                                                );
                                                // enqueue the next data chunk into our target stream
                                                controller.enqueue(value);
                                                read();
                                            })
                                            .catch(function (error) {
                                                controller.error(error);
                                            });
                                    };
                                    read();
                                },
                            },
                        ]);
                        return ProgressHandler;
                    })();
                    /**
 * Load a file using `fetch`.
 *
 * @param {object} options Request options to use. See example below.
 * @returns {Observer} Observer instance
 * @example
 * // default options
 * let options = {
 *     url: undefined,
 *     method: 'GET',
 *     mode: 'cors',
 *     credentials: 'same-origin',
 *     cache: 'default',
 *     responseType: 'json',
 *     requestHeaders: [],
 *     redirect: 'follow',
 *     referrer: 'client'
 * };
 *
 * // override some options
 * options.url = '../media/demo.wav';

 * // available types: 'arraybuffer', 'blob', 'json' or 'text'
 * options.responseType = 'arraybuffer';
 *
 * // make fetch call
 * let request = util.fetchFile(options);
 *
 * // listen for events
 * request.on('progress', e => {
 *     console.log('progress', e);
 * });
 *
 * request.on('success', data => {
 *     console.log('success!', data);
 * });
 *
 * request.on('error', e => {
 *     console.warn('fetchFile error: ', e);
 * });
 */
                    function fetchFile(options) {
                        if (!options) {
                            throw new Error("fetch options missing");
                        } else if (!options.url) {
                            throw new Error("fetch url missing");
                        }
                        var instance = new _observer.default();
                        var fetchHeaders = new Headers();
                        var fetchRequest = new Request(options.url);

                        // add ability to abort
                        instance.controller = new AbortController();

                        // check if headers have to be added
                        if (options && options.requestHeaders) {
                            // add custom request headers
                            options.requestHeaders.forEach(function (header) {
                                fetchHeaders.append(header.key, header.value);
                            });
                        }

                        // parse fetch options
                        var responseType = options.responseType || "json";
                        var fetchOptions = {
                            method: options.method || "GET",
                            headers: fetchHeaders,
                            mode: options.mode || "cors",
                            credentials: options.credentials || "same-origin",
                            cache: options.cache || "default",
                            redirect: options.redirect || "follow",
                            referrer: options.referrer || "client",
                            signal: instance.controller.signal,
                        };
                        fetch(fetchRequest, fetchOptions)
                            .then(function (response) {
                                // store response reference
                                instance.response = response;
                                var progressAvailable = true;
                                if (!response.body) {
                                    // ReadableStream is not yet supported in this browser
                                    // see https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
                                    progressAvailable = false;
                                }

                                // Server must send CORS header "Access-Control-Expose-Headers: content-length"
                                var contentLength =
                                    response.headers.get("content-length");
                                if (contentLength === null) {
                                    // Content-Length server response header missing.
                                    // Don't evaluate download progress if we can't compare against a total size
                                    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers
                                    progressAvailable = false;
                                }
                                if (!progressAvailable) {
                                    // not able to check download progress so skip it
                                    return response;
                                }

                                // fire progress event when during load
                                instance.onProgress = function (e) {
                                    instance.fireEvent("progress", e);
                                };
                                return new Response(
                                    new ReadableStream(
                                        new ProgressHandler(
                                            instance,
                                            contentLength,
                                            response
                                        )
                                    ),
                                    fetchOptions
                                );
                            })
                            .then(function (response) {
                                var errMsg;
                                if (response.ok) {
                                    switch (responseType) {
                                        case "arraybuffer":
                                            return response.arrayBuffer();
                                        case "json":
                                            return response.json();
                                        case "blob":
                                            return response.blob();
                                        case "text":
                                            return response.text();
                                        default:
                                            errMsg =
                                                "Unknown responseType: " +
                                                responseType;
                                            break;
                                    }
                                }
                                if (!errMsg) {
                                    errMsg =
                                        "HTTP error status: " + response.status;
                                }
                                throw new Error(errMsg);
                            })
                            .then(function (response) {
                                instance.fireEvent("success", response);
                            })
                            .catch(function (error) {
                                instance.fireEvent("error", error);
                            });

                        // return the fetch request
                        instance.fetchRequest = fetchRequest;
                        return instance;
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/frame.js":
                /*!***************************!*\
  !*** ./src/util/frame.js ***!
  \***************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = frame;
                    var _requestAnimationFrame = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./request-animation-frame */ "./src/util/request-animation-frame.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    /**
                     * Create a function which will be called at the next requestAnimationFrame
                     * cycle
                     *
                     * @param {function} func The function to call
                     *
                     * @return {func} The function wrapped within a requestAnimationFrame
                     */
                    function frame(func) {
                        return function () {
                            for (
                                var _len = arguments.length,
                                    args = new Array(_len),
                                    _key = 0;
                                _key < _len;
                                _key++
                            ) {
                                args[_key] = arguments[_key];
                            }
                            return (0, _requestAnimationFrame.default)(
                                function () {
                                    return func.apply(void 0, args);
                                }
                            );
                        };
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/get-id.js":
                /*!****************************!*\
  !*** ./src/util/get-id.js ***!
  \****************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = getId;
                    /**
                     * Get a random prefixed ID
                     *
                     * @param {String} prefix Prefix to use. Default is `'wavesurfer_'`.
                     * @returns {String} Random prefixed ID
                     * @example
                     * console.log(getId()); // logs 'wavesurfer_b5pors4ru6g'
                     *
                     * let prefix = 'foo-';
                     * console.log(getId(prefix)); // logs 'foo-b5pors4ru6g'
                     */
                    function getId(prefix) {
                        if (prefix === undefined) {
                            prefix = "wavesurfer_";
                        }
                        return prefix + Math.random().toString(32).substring(2);
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/index.js":
                /*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
                /***/ (
                    __unused_webpack_module,
                    exports,
                    __webpack_require__
                ) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    Object.defineProperty(exports, "Observer", {
                        enumerable: true,
                        get: function get() {
                            return _observer.default;
                        },
                    });
                    Object.defineProperty(exports, "absMax", {
                        enumerable: true,
                        get: function get() {
                            return _absMax.default;
                        },
                    });
                    Object.defineProperty(exports, "clamp", {
                        enumerable: true,
                        get: function get() {
                            return _clamp.default;
                        },
                    });
                    Object.defineProperty(exports, "debounce", {
                        enumerable: true,
                        get: function get() {
                            return _debounce.default;
                        },
                    });
                    Object.defineProperty(exports, "fetchFile", {
                        enumerable: true,
                        get: function get() {
                            return _fetch.default;
                        },
                    });
                    Object.defineProperty(exports, "frame", {
                        enumerable: true,
                        get: function get() {
                            return _frame.default;
                        },
                    });
                    Object.defineProperty(exports, "getId", {
                        enumerable: true,
                        get: function get() {
                            return _getId.default;
                        },
                    });
                    Object.defineProperty(exports, "ignoreSilenceMode", {
                        enumerable: true,
                        get: function get() {
                            return _silenceMode.default;
                        },
                    });
                    Object.defineProperty(exports, "max", {
                        enumerable: true,
                        get: function get() {
                            return _max.default;
                        },
                    });
                    Object.defineProperty(exports, "min", {
                        enumerable: true,
                        get: function get() {
                            return _min.default;
                        },
                    });
                    Object.defineProperty(exports, "preventClick", {
                        enumerable: true,
                        get: function get() {
                            return _preventClick.default;
                        },
                    });
                    Object.defineProperty(exports, "requestAnimationFrame", {
                        enumerable: true,
                        get: function get() {
                            return _requestAnimationFrame.default;
                        },
                    });
                    Object.defineProperty(exports, "style", {
                        enumerable: true,
                        get: function get() {
                            return _style.default;
                        },
                    });
                    Object.defineProperty(exports, "withOrientation", {
                        enumerable: true,
                        get: function get() {
                            return _orientation.default;
                        },
                    });
                    var _getId = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./get-id */ "./src/util/get-id.js"
                        )
                    );
                    var _max = _interopRequireDefault(
                        __webpack_require__(/*! ./max */ "./src/util/max.js")
                    );
                    var _min = _interopRequireDefault(
                        __webpack_require__(/*! ./min */ "./src/util/min.js")
                    );
                    var _absMax = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./absMax */ "./src/util/absMax.js"
                        )
                    );
                    var _observer = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./observer */ "./src/util/observer.js"
                        )
                    );
                    var _style = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./style */ "./src/util/style.js"
                        )
                    );
                    var _requestAnimationFrame = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./request-animation-frame */ "./src/util/request-animation-frame.js"
                        )
                    );
                    var _frame = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./frame */ "./src/util/frame.js"
                        )
                    );
                    var _debounce = _interopRequireDefault(
                        __webpack_require__(
                            /*! debounce */ "./node_modules/debounce/index.js"
                        )
                    );
                    var _preventClick = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./prevent-click */ "./src/util/prevent-click.js"
                        )
                    );
                    var _fetch = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./fetch */ "./src/util/fetch.js"
                        )
                    );
                    var _clamp = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./clamp */ "./src/util/clamp.js"
                        )
                    );
                    var _orientation = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./orientation */ "./src/util/orientation.js"
                        )
                    );
                    var _silenceMode = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./silence-mode */ "./src/util/silence-mode.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }

                    /***/
                },

            /***/ "./src/util/max.js":
                /*!*************************!*\
  !*** ./src/util/max.js ***!
  \*************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = max;
                    /**
                     * Get the largest value
                     *
                     * @param   {Array} values Array of numbers
                     * @returns {Number} Largest number found
                     * @example console.log(max([1, 2, 3])); // logs 3
                     */
                    function max(values) {
                        var largest = -Infinity;
                        Object.keys(values).forEach(function (i) {
                            if (values[i] > largest) {
                                largest = values[i];
                            }
                        });
                        return largest;
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/min.js":
                /*!*************************!*\
  !*** ./src/util/min.js ***!
  \*************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = min;
                    /**
                     * Get the smallest value
                     *
                     * @param   {Array} values Array of numbers
                     * @returns {Number} Smallest number found
                     * @example console.log(min([1, 2, 3])); // logs 1
                     */
                    function min(values) {
                        var smallest = Number(Infinity);
                        Object.keys(values).forEach(function (i) {
                            if (values[i] < smallest) {
                                smallest = values[i];
                            }
                        });
                        return smallest;
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/observer.js":
                /*!******************************!*\
  !*** ./src/util/observer.js ***!
  \******************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    /**
                     * @typedef {Object} ListenerDescriptor
                     * @property {string} name The name of the event
                     * @property {function} callback The callback
                     * @property {function} un The function to call to remove the listener
                     */
                    /**
                     * Observer class
                     */
                    var Observer = /*#__PURE__*/ (function () {
                        /**
                         * Instantiate Observer
                         */
                        function Observer() {
                            _classCallCheck(this, Observer);
                            /**
                             * @private
                             * @todo Initialise the handlers here already and remove the conditional
                             * assignment in `on()`
                             */
                            this._disabledEventEmissions = [];
                            this.handlers = null;
                        }
                        /**
                         * Attach a handler function for an event.
                         *
                         * @param {string} event Name of the event to listen to
                         * @param {function} fn The callback to trigger when the event is fired
                         * @return {ListenerDescriptor} The event descriptor
                         */
                        _createClass(Observer, [
                            {
                                key: "on",
                                value: function on(event, fn) {
                                    var _this = this;
                                    if (!this.handlers) {
                                        this.handlers = {};
                                    }
                                    var handlers = this.handlers[event];
                                    if (!handlers) {
                                        handlers = this.handlers[event] = [];
                                    }
                                    handlers.push(fn);

                                    // Return an event descriptor
                                    return {
                                        name: event,
                                        callback: fn,
                                        un: function un(e, fn) {
                                            return _this.un(e, fn);
                                        },
                                    };
                                },

                                /**
                                 * Remove an event handler.
                                 *
                                 * @param {string} event Name of the event the listener that should be
                                 * removed listens to
                                 * @param {function} fn The callback that should be removed
                                 */
                            },
                            {
                                key: "un",
                                value: function un(event, fn) {
                                    if (!this.handlers) {
                                        return;
                                    }
                                    var handlers = this.handlers[event];
                                    var i;
                                    if (handlers) {
                                        if (fn) {
                                            for (
                                                i = handlers.length - 1;
                                                i >= 0;
                                                i--
                                            ) {
                                                if (handlers[i] == fn) {
                                                    handlers.splice(i, 1);
                                                }
                                            }
                                        } else {
                                            handlers.length = 0;
                                        }
                                    }
                                },

                                /**
                                 * Remove all event handlers.
                                 */
                            },
                            {
                                key: "unAll",
                                value: function unAll() {
                                    this.handlers = null;
                                },

                                /**
                                 * Attach a handler to an event. The handler is executed at most once per
                                 * event type.
                                 *
                                 * @param {string} event The event to listen to
                                 * @param {function} handler The callback that is only to be called once
                                 * @return {ListenerDescriptor} The event descriptor
                                 */
                            },
                            {
                                key: "once",
                                value: function once(event, handler) {
                                    var _this2 = this;
                                    var fn = function fn() {
                                        for (
                                            var _len = arguments.length,
                                                args = new Array(_len),
                                                _key = 0;
                                            _key < _len;
                                            _key++
                                        ) {
                                            args[_key] = arguments[_key];
                                        }
                                        /*  eslint-disable no-invalid-this */
                                        handler.apply(_this2, args);
                                        /*  eslint-enable no-invalid-this */
                                        setTimeout(function () {
                                            _this2.un(event, fn);
                                        }, 0);
                                    };
                                    return this.on(event, fn);
                                },

                                /**
                                 * Disable firing a list of events by name. When specified, event handlers for any event type
                                 * passed in here will not be called.
                                 *
                                 * @since 4.0.0
                                 * @param {string[]} eventNames an array of event names to disable emissions for
                                 * @example
                                 * // disable seek and interaction events
                                 * wavesurfer.setDisabledEventEmissions(['seek', 'interaction']);
                                 */
                            },
                            {
                                key: "setDisabledEventEmissions",
                                value: function setDisabledEventEmissions(
                                    eventNames
                                ) {
                                    this._disabledEventEmissions = eventNames;
                                },

                                /**
                                 * plugins borrow part of this class without calling the constructor,
                                 * so we have to be careful about _disabledEventEmissions
                                 */
                            },
                            {
                                key: "_isDisabledEventEmission",
                                value: function _isDisabledEventEmission(
                                    event
                                ) {
                                    return (
                                        this._disabledEventEmissions &&
                                        this._disabledEventEmissions.includes(
                                            event
                                        )
                                    );
                                },
                                /**
                                 * Manually fire an event
                                 *
                                 * @param {string} event The event to fire manually
                                 * @param {...any} args The arguments with which to call the listeners
                                 */
                            },
                            {
                                key: "fireEvent",
                                value: function fireEvent(event) {
                                    for (
                                        var _len2 = arguments.length,
                                            args = new Array(
                                                _len2 > 1 ? _len2 - 1 : 0
                                            ),
                                            _key2 = 1;
                                        _key2 < _len2;
                                        _key2++
                                    ) {
                                        args[_key2 - 1] = arguments[_key2];
                                    }
                                    if (
                                        !this.handlers ||
                                        this._isDisabledEventEmission(event)
                                    ) {
                                        return;
                                    }
                                    var handlers = this.handlers[event];
                                    handlers &&
                                        handlers.forEach(function (fn) {
                                            fn.apply(void 0, args);
                                        });
                                },
                            },
                        ]);
                        return Observer;
                    })();
                    exports["default"] = Observer;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/orientation.js":
                /*!*********************************!*\
  !*** ./src/util/orientation.js ***!
  \*********************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = withOrientation;
                    var verticalPropMap = {
                        width: "height",
                        height: "width",
                        overflowX: "overflowY",
                        overflowY: "overflowX",
                        clientWidth: "clientHeight",
                        clientHeight: "clientWidth",
                        clientX: "clientY",
                        clientY: "clientX",
                        scrollWidth: "scrollHeight",
                        scrollLeft: "scrollTop",
                        offsetLeft: "offsetTop",
                        offsetTop: "offsetLeft",
                        offsetHeight: "offsetWidth",
                        offsetWidth: "offsetHeight",
                        left: "top",
                        right: "bottom",
                        top: "left",
                        bottom: "right",
                        borderRightStyle: "borderBottomStyle",
                        borderRightWidth: "borderBottomWidth",
                        borderRightColor: "borderBottomColor",
                    };

                    /**
                     * Convert a horizontally-oriented property name to a vertical one.
                     *
                     * @param {string} prop A property name
                     * @param {bool} vertical Whether the element is oriented vertically
                     * @returns {string} prop, converted appropriately
                     */
                    function mapProp(prop, vertical) {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                verticalPropMap,
                                prop
                            )
                        ) {
                            return vertical ? verticalPropMap[prop] : prop;
                        } else {
                            return prop;
                        }
                    }
                    var isProxy = Symbol("isProxy");

                    /**
                     * Returns an appropriately oriented object based on vertical.
                     * If vertical is true, attribute getting and setting will be mapped through
                     * verticalPropMap, so that e.g. getting the object's .width will give its
                     * .height instead.
                     * Certain methods of an oriented object will return oriented objects as well.
                     * Oriented objects can't be added to the DOM directly since they are Proxy objects
                     * and thus fail typechecks. Use domElement to get the actual element for this.
                     *
                     * @param {object} target The object to be wrapped and oriented
                     * @param {bool} vertical Whether the element is oriented vertically
                     * @returns {Proxy} An oriented object with attr translation via verticalAttrMap
                     * @since 5.0.0
                     */
                    function withOrientation(target, vertical) {
                        if (target[isProxy]) {
                            return target;
                        } else {
                            return new Proxy(target, {
                                get: function get(obj, prop, receiver) {
                                    if (prop === isProxy) {
                                        return true;
                                    } else if (prop === "domElement") {
                                        return obj;
                                    } else if (prop === "style") {
                                        return withOrientation(
                                            obj.style,
                                            vertical
                                        );
                                    } else if (prop === "canvas") {
                                        return withOrientation(
                                            obj.canvas,
                                            vertical
                                        );
                                    } else if (
                                        prop === "getBoundingClientRect"
                                    ) {
                                        return function () {
                                            return withOrientation(
                                                obj.getBoundingClientRect.apply(
                                                    obj,
                                                    arguments
                                                ),
                                                vertical
                                            );
                                        };
                                    } else if (prop === "getContext") {
                                        return function () {
                                            return withOrientation(
                                                obj.getContext.apply(
                                                    obj,
                                                    arguments
                                                ),
                                                vertical
                                            );
                                        };
                                    } else {
                                        var value =
                                            obj[mapProp(prop, vertical)];
                                        return typeof value == "function"
                                            ? value.bind(obj)
                                            : value;
                                    }
                                },
                                set: function set(obj, prop, value) {
                                    obj[mapProp(prop, vertical)] = value;
                                    return true;
                                },
                            });
                        }
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/prevent-click.js":
                /*!***********************************!*\
  !*** ./src/util/prevent-click.js ***!
  \***********************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = preventClick;
                    /**
                     * Stops propagation of click event and removes event listener
                     *
                     * @private
                     * @param {object} event The click event
                     */
                    function preventClickHandler(event) {
                        event.stopPropagation();
                        document.body.removeEventListener(
                            "click",
                            preventClickHandler,
                            true
                        );
                    }

                    /**
                     * Starts listening for click event and prevent propagation
                     *
                     * @param {object} values Values
                     */
                    function preventClick(values) {
                        document.body.addEventListener(
                            "click",
                            preventClickHandler,
                            true
                        );
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/request-animation-frame.js":
                /*!*********************************************!*\
  !*** ./src/util/request-animation-frame.js ***!
  \*********************************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    /* eslint-disable valid-jsdoc */
                    /**
                     * Returns the `requestAnimationFrame` function for the browser, or a shim with
                     * `setTimeout` if the function is not found
                     *
                     * @return {function} Available `requestAnimationFrame` function for the browser
                     */
                    var _default = (
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (callback, element) {
                            return setTimeout(callback, 1000 / 60);
                        }
                    ).bind(window);
                    exports["default"] = _default;
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/silence-mode.js":
                /*!**********************************!*\
  !*** ./src/util/silence-mode.js ***!
  \**********************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = ignoreSilenceMode;
                    /**
                     * Ignores device silence mode when using the `WebAudio` backend.
                     *
                     * Many mobile devices contain a hardware button to mute the ringtone for incoming
                     * calls and messages. Unfortunately, on some platforms like iOS, this also mutes
                     * wavesurfer's audio when using the `WebAudio` backend. This function creates a
                     * temporary `<audio>` element that makes sure the WebAudio backend keeps playing
                     * when muting the device ringer.
                     *
                     * @since 5.2.0
                     */
                    function ignoreSilenceMode() {
                        // Set the src to a short bit of url encoded as a silent mp3
                        // NOTE The silence MP3 must be high quality, when web audio sounds are played
                        // in parallel the web audio sound is mixed to match the bitrate of the html sound
                        // 0.01 seconds of silence VBR220-260 Joint Stereo 859B
                        var audioData =
                            "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADgnABGiAAQBCqgCRMAAgEAH///////////////7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq//////////////////9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";

                        // disable iOS Airplay (setting the attribute in js doesn't work)
                        var tmp = document.createElement("div");
                        tmp.innerHTML =
                            '<audio x-webkit-airplay="deny"></audio>';
                        var audioSilentMode = tmp.children.item(0);
                        audioSilentMode.src = audioData;
                        audioSilentMode.preload = "auto";
                        audioSilentMode.type = "audio/mpeg";
                        audioSilentMode.disableRemotePlayback = true;

                        // play
                        audioSilentMode.play();

                        // cleanup
                        audioSilentMode.remove();
                        tmp.remove();
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/util/style.js":
                /*!***************************!*\
  !*** ./src/util/style.js ***!
  \***************************/
                /***/ (module, exports) => {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = style;
                    /**
                     * Apply a map of styles to an element
                     *
                     * @param {HTMLElement} el The element that the styles will be applied to
                     * @param {Object} styles The map of propName: attribute, both are used as-is
                     *
                     * @return {HTMLElement} el
                     */
                    function style(el, styles) {
                        Object.keys(styles).forEach(function (prop) {
                            if (el.style[prop] !== styles[prop]) {
                                el.style[prop] = styles[prop];
                            }
                        });
                        return el;
                    }
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/wavesurfer.js":
                /*!***************************!*\
  !*** ./src/wavesurfer.js ***!
  \***************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var util = _interopRequireWildcard(
                        __webpack_require__(/*! ./util */ "./src/util/index.js")
                    );
                    var _drawer = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./drawer.multicanvas */ "./src/drawer.multicanvas.js"
                        )
                    );
                    var _webaudio = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./webaudio */ "./src/webaudio.js"
                        )
                    );
                    var _mediaelement = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./mediaelement */ "./src/mediaelement.js"
                        )
                    );
                    var _peakcache = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./peakcache */ "./src/peakcache.js"
                        )
                    );
                    var _mediaelementWebaudio = _interopRequireDefault(
                        __webpack_require__(
                            /*! ./mediaelement-webaudio */ "./src/mediaelement-webaudio.js"
                        )
                    );
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    function _getRequireWildcardCache(nodeInterop) {
                        if (typeof WeakMap !== "function") return null;
                        var cacheBabelInterop = new WeakMap();
                        var cacheNodeInterop = new WeakMap();
                        return (_getRequireWildcardCache =
                            function _getRequireWildcardCache(nodeInterop) {
                                return nodeInterop
                                    ? cacheNodeInterop
                                    : cacheBabelInterop;
                            })(nodeInterop);
                    }
                    function _interopRequireWildcard(obj, nodeInterop) {
                        if (!nodeInterop && obj && obj.__esModule) {
                            return obj;
                        }
                        if (
                            obj === null ||
                            (_typeof(obj) !== "object" &&
                                typeof obj !== "function")
                        ) {
                            return { default: obj };
                        }
                        var cache = _getRequireWildcardCache(nodeInterop);
                        if (cache && cache.has(obj)) {
                            return cache.get(obj);
                        }
                        var newObj = {};
                        var hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor;
                        for (var key in obj) {
                            if (
                                key !== "default" &&
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc = hasPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(obj, key)
                                    : null;
                                if (desc && (desc.get || desc.set)) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                        newObj.default = obj;
                        if (cache) {
                            cache.set(obj, newObj);
                        }
                        return newObj;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    function _defineProperty(obj, key, value) {
                        if (key in obj) {
                            Object.defineProperty(obj, key, {
                                value: value,
                                enumerable: true,
                                configurable: true,
                                writable: true,
                            });
                        } else {
                            obj[key] = value;
                        }
                        return obj;
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    /*
                     * This work is licensed under a BSD-3-Clause License.
                     */
                    /** @external {HTMLElement} https://developer.mozilla.org/en/docs/Web/API/HTMLElement */
                    /** @external {OfflineAudioContext} https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext */
                    /** @external {File} https://developer.mozilla.org/en-US/docs/Web/API/File */
                    /** @external {Blob} https://developer.mozilla.org/en-US/docs/Web/API/Blob */
                    /** @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D */
                    /** @external {MediaStreamConstraints} https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints */
                    /** @external {AudioNode} https://developer.mozilla.org/de/docs/Web/API/AudioNode */
                    /**
                     * @typedef {Object} WavesurferParams
                     * @property {AudioContext} audioContext=null Use your own previously
                     * initialized AudioContext or leave blank.
                     * @property {number} audioRate=1 Speed at which to play audio. Lower number is
                     * slower.
                     * @property {ScriptProcessorNode} audioScriptProcessor=null Use your own previously
                     * initialized ScriptProcessorNode or leave blank.
                     * @property {boolean} autoCenter=true If a scrollbar is present, center the
                     * waveform on current progress
                     * @property {number} autoCenterRate=5 If autoCenter is active, rate at which the
                     * waveform is centered
                     * @property {boolean} autoCenterImmediately=false If autoCenter is active, immediately
                     * center waveform on current progress
                     * @property {string} backend='WebAudio' `'WebAudio'|'MediaElement'|'MediaElementWebAudio'` In most cases
                     * you don't have to set this manually. MediaElement is a fallback for unsupported browsers.
                     * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with
                     * MediaElement backend (HTML5 audio tag). You have to use the same methods of MediaElement backend for loading and
                     * playback, giving also peaks, so the audio data are not decoded. In this way you can use WebAudio features, like filters,
                     * also with audio with big duration. For example:
                     * ` wavesurfer.load(url | HTMLMediaElement, peaks, preload, duration);
                     *   wavesurfer.play();
                     *   wavesurfer.setFilter(customFilter);
                     * `
                     * @property {string} backgroundColor=null Change background color of the
                     * waveform container.
                     * @property {number} barHeight=1 The height of the wave bars.
                     * @property {number} barRadius=0 The radius of the wave bars. Makes bars rounded
                     * @property {number} barGap=null The optional spacing between bars of the wave,
                     * if not provided will be calculated in legacy format.
                     * @property {number} barWidth=null Draw the waveform using bars.
                     * @property {number} barMinHeight=null If specified, draw at least a bar of this height,
                     * eliminating waveform gaps
                     * @property {boolean} closeAudioContext=false Close and nullify all audio
                     * contexts when the destroy method is called.
                     * @property {!string|HTMLElement} container CSS selector or HTML element where
                     * the waveform should be drawn. This is the only required parameter.
                     * @property {string} cursorColor='#333' The fill color of the cursor indicating
                     * the playhead position.
                     * @property {number} cursorWidth=1 Measured in pixels.
                     * @property {object} drawingContextAttributes={desynchronized: false} Drawing context
                     * attributes.
                     * @property {number} duration=null Optional audio length so pre-rendered peaks
                     * can be display immediately for example.
                     * @property {boolean} fillParent=true Whether to fill the entire container or
                     * draw only according to `minPxPerSec`.
                     * @property {boolean} forceDecode=false Force decoding of audio using web audio
                     * when zooming to get a more detailed waveform.
                     * @property {number} height=128 The height of the waveform. Measured in
                     * pixels.
                     * @property {boolean} hideScrollbar=false Whether to hide the horizontal
                     * scrollbar when one would normally be shown.
                     * @property {boolean} hideCursor=false Whether to hide the mouse cursor
                     * when one would normally be shown by default.
                     * @property {boolean} ignoreSilenceMode=false If true, ignores device silence mode
                     * when using the `WebAudio` backend.
                     * @property {boolean} interact=true Whether the mouse interaction will be
                     * enabled at initialization. You can switch this parameter at any time later
                     * on.
                     * @property {boolean} loopSelection=true (Use with regions plugin) Enable
                     * looping of selected regions
                     * @property {number} maxCanvasWidth=4000 Maximum width of a single canvas in
                     * pixels, excluding a small overlap (2 * `pixelRatio`, rounded up to the next
                     * even integer). If the waveform is longer than this value, additional canvases
                     * will be used to render the waveform, which is useful for very large waveforms
                     * that may be too wide for browsers to draw on a single canvas.
                     * @property {boolean} mediaControls=false (Use with backend `MediaElement` or `MediaElementWebAudio`)
                     * this enables the native controls for the media element
                     * @property {string} mediaType='audio' (Use with backend `MediaElement` or `MediaElementWebAudio`)
                     * `'audio'|'video'` ('video' only for `MediaElement`)
                     * @property {number} minPxPerSec=20 Minimum number of pixels per second of
                     * audio.
                     * @property {boolean} normalize=false If true, normalize by the maximum peak
                     * instead of 1.0.
                     * @property {boolean} partialRender=false Use the PeakCache to improve
                     * rendering speed of large waveforms
                     * @property {number} pixelRatio=window.devicePixelRatio The pixel ratio used to
                     * calculate display
                     * @property {PluginDefinition[]} plugins=[] An array of plugin definitions to
                     * register during instantiation, they will be directly initialised unless they
                     * are added with the `deferInit` property set to true.
                     * @property {string} progressColor='#555' The fill color of the part of the
                     * waveform behind the cursor. When `progressColor` and `waveColor` are the same
                     * the progress wave is not rendered at all.
                     * @property {boolean} removeMediaElementOnDestroy=true Set to false to keep the
                     * media element in the DOM when the player is destroyed. This is useful when
                     * reusing an existing media element via the `loadMediaElement` method.
                     * @property {Object} renderer=MultiCanvas Can be used to inject a custom
                     * renderer.
                     * @property {boolean|number} responsive=false If set to `true` resize the
                     * waveform, when the window is resized. This is debounced with a `100ms`
                     * timeout by default. If this parameter is a number it represents that timeout.
                     * @property {boolean} rtl=false If set to `true`, renders waveform from
                     * right-to-left.
                     * @property {boolean} scrollParent=false Whether to scroll the container with a
                     * lengthy waveform. Otherwise the waveform is shrunk to the container width
                     * (see fillParent).
                     * @property {number} skipLength=2 Number of seconds to skip with the
                     * skipForward() and skipBackward() methods.
                     * @property {boolean} splitChannels=false Render with separate waveforms for
                     * the channels of the audio
                     * @property {SplitChannelOptions} splitChannelsOptions={} Options for splitChannel rendering
                     * @property {boolean} vertical=false Render the waveform vertically instead of horizontally.
                     * @property {string} waveColor='#999' The fill color of the waveform after the
                     * cursor.
                     * @property {object} xhr={} XHR options. For example:
                     * `let xhr = {
                     *     cache: 'default',
                     *     mode: 'cors',
                     *     method: 'GET',
                     *     credentials: 'same-origin',
                     *     redirect: 'follow',
                     *     referrer: 'client',
                     *     requestHeaders: [
                     *         {
                     *             key: 'Authorization',
                     *             value: 'my-token'
                     *         }
                     *     ]
                     * };`
                     */
                    /**
                     * @typedef {Object} PluginDefinition
                     * @desc The Object used to describe a plugin
                     * @example wavesurfer.addPlugin(pluginDefinition);
                     * @property {string} name The name of the plugin, the plugin instance will be
                     * added as a property to the wavesurfer instance under this name
                     * @property {?Object} staticProps The properties that should be added to the
                     * wavesurfer instance as static properties
                     * @property {?boolean} deferInit Don't initialise plugin
                     * automatically
                     * @property {Object} params={} The plugin parameters, they are the first parameter
                     * passed to the plugin class constructor function
                     * @property {PluginClass} instance The plugin instance factory, is called with
                     * the dependency specified in extends. Returns the plugin class.
                     */
                    /**
                     * @typedef {Object} SplitChannelOptions
                     * @desc parameters applied when splitChannels option is true
                     * @property {boolean} overlay=false determines whether channels are rendered on top of each other or on separate tracks
                     * @property {object} channelColors={} object describing color for each channel. Example:
                     * {
                     *     0: {
                     *         progressColor: 'green',
                     *         waveColor: 'pink'
                     *     },
                     *     1: {
                     *         progressColor: 'orange',
                     *         waveColor: 'purple'
                     *     }
                     * }
                     * @property {number[]} filterChannels=[] indexes of channels to be hidden from rendering
                     * @property {boolean} relativeNormalization=false determines whether
                     * normalization is done per channel or maintains proportionality between
                     * channels. Only applied when normalize and splitChannels are both true.
                     * @property {boolean} splitDragSelection=false determines if drag selection in regions
                     * plugin works separately on each channel or only one selection for all channels
                     * @since 4.3.0
                     */
                    /**
                     * @interface PluginClass
                     *
                     * @desc This is the interface which is implemented by all plugin classes. Note
                     * that this only turns into an observer after being passed through
                     * `wavesurfer.addPlugin`.
                     *
                     * @extends {Observer}
                     */
                    var PluginClass = /*#__PURE__*/ (function () {
                        /**
                         * Construct the plugin
                         *
                         * @param {Object} params={} The plugin params (specific to the plugin)
                         * @param {Object} ws The wavesurfer instance
                         */
                        function PluginClass(params, ws) {
                            _classCallCheck(this, PluginClass);
                        }
                        /**
                         * Initialise the plugin
                         *
                         * Start doing something. This is called by
                         * `wavesurfer.initPlugin(pluginName)`
                         */
                        _createClass(PluginClass, [
                            {
                                key: "create",
                                value:
                                    /**
                                     * Plugin definition factory
                                     *
                                     * This function must be used to create a plugin definition which can be
                                     * used by wavesurfer to correctly instantiate the plugin.
                                     *
                                     * It returns a `PluginDefinition` object representing the plugin.
                                     *
                                     * @param {Object} params={} The plugin params (specific to the plugin)
                                     */
                                    function create(params) {},
                            },
                            {
                                key: "init",
                                value: function init() {},
                                /**
                                 * Destroy the plugin instance
                                 *
                                 * Stop doing something. This is called by
                                 * `wavesurfer.destroyPlugin(pluginName)`
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {},
                            },
                        ]);
                        return PluginClass;
                    })();
                    /**
                     * WaveSurfer core library class
                     *
                     * @extends {Observer}
                     * @example
                     * const params = {
                     *   container: '#waveform',
                     *   waveColor: 'violet',
                     *   progressColor: 'purple'
                     * };
                     *
                     * // initialise like this
                     * const wavesurfer = WaveSurfer.create(params);
                     *
                     * // or like this ...
                     * const wavesurfer = new WaveSurfer(params);
                     * wavesurfer.init();
                     *
                     * // load audio file
                     * wavesurfer.load('example/media/demo.wav');
                     */
                    var WaveSurfer = /*#__PURE__*/ (function (_util$Observer) {
                        _inherits(WaveSurfer, _util$Observer);
                        var _super = _createSuper(WaveSurfer);
                        /**
                         * Initialise wavesurfer instance
                         *
                         * @param {WavesurferParams} params Instantiation options for wavesurfer
                         * @example
                         * const wavesurfer = new WaveSurfer(params);
                         * @returns {this} Wavesurfer instance
                         */
                        function WaveSurfer(params) {
                            var _this;
                            _classCallCheck(this, WaveSurfer);
                            _this = _super.call(this);
                            /**
                             * Extract relevant parameters (or defaults)
                             * @private
                             */
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "defaultParams",
                                {
                                    audioContext: null,
                                    audioScriptProcessor: null,
                                    audioRate: 1,
                                    autoCenter: true,
                                    autoCenterRate: 5,
                                    autoCenterImmediately: false,
                                    backend: "WebAudio",
                                    backgroundColor: null,
                                    barHeight: 1,
                                    barRadius: 0,
                                    barGap: null,
                                    barMinHeight: null,
                                    container: null,
                                    cursorColor: "#333",
                                    cursorWidth: 1,
                                    dragSelection: true,
                                    drawingContextAttributes: {
                                        // Boolean that hints the user agent to reduce the latency
                                        // by desynchronizing the canvas paint cycle from the event
                                        // loop
                                        desynchronized: false,
                                    },
                                    duration: null,
                                    fillParent: true,
                                    forceDecode: false,
                                    height: 128,
                                    hideScrollbar: false,
                                    hideCursor: false,
                                    ignoreSilenceMode: false,
                                    interact: true,
                                    loopSelection: true,
                                    maxCanvasWidth: 4000,
                                    mediaContainer: null,
                                    mediaControls: false,
                                    mediaType: "audio",
                                    minPxPerSec: 20,
                                    normalize: false,
                                    partialRender: false,
                                    pixelRatio:
                                        window.devicePixelRatio ||
                                        screen.deviceXDPI / screen.logicalXDPI,
                                    plugins: [],
                                    progressColor: "#555",
                                    removeMediaElementOnDestroy: true,
                                    renderer: _drawer.default,
                                    responsive: false,
                                    rtl: false,
                                    scrollParent: false,
                                    skipLength: 2,
                                    splitChannels: false,
                                    splitChannelsOptions: {
                                        overlay: false,
                                        channelColors: {},
                                        filterChannels: [],
                                        relativeNormalization: false,
                                        splitDragSelection: false,
                                    },
                                    vertical: false,
                                    waveColor: "#999",
                                    xhr: {},
                                }
                            );
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "backends",
                                {
                                    MediaElement: _mediaelement.default,
                                    WebAudio: _webaudio.default,
                                    MediaElementWebAudio:
                                        _mediaelementWebaudio.default,
                                }
                            );
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "util",
                                util
                            );
                            _this.params = Object.assign(
                                {},
                                _this.defaultParams,
                                params
                            );
                            _this.params.splitChannelsOptions = Object.assign(
                                {},
                                _this.defaultParams.splitChannelsOptions,
                                params.splitChannelsOptions
                            );
                            /** @private */
                            _this.container =
                                "string" == typeof params.container
                                    ? document.querySelector(
                                          _this.params.container
                                      )
                                    : _this.params.container;
                            if (!_this.container) {
                                throw new Error("Container element not found");
                            }
                            if (_this.params.mediaContainer == null) {
                                /** @private */
                                _this.mediaContainer = _this.container;
                            } else if (
                                typeof _this.params.mediaContainer == "string"
                            ) {
                                /** @private */
                                _this.mediaContainer = document.querySelector(
                                    _this.params.mediaContainer
                                );
                            } else {
                                /** @private */
                                _this.mediaContainer =
                                    _this.params.mediaContainer;
                            }
                            if (!_this.mediaContainer) {
                                throw new Error(
                                    "Media Container element not found"
                                );
                            }
                            if (_this.params.maxCanvasWidth <= 1) {
                                throw new Error(
                                    "maxCanvasWidth must be greater than 1"
                                );
                            } else if (_this.params.maxCanvasWidth % 2 == 1) {
                                throw new Error(
                                    "maxCanvasWidth must be an even number"
                                );
                            }
                            if (_this.params.rtl === true) {
                                if (_this.params.vertical === true) {
                                    util.style(_this.container, {
                                        transform: "rotateX(180deg)",
                                    });
                                } else {
                                    util.style(_this.container, {
                                        transform: "rotateY(180deg)",
                                    });
                                }
                            }
                            if (_this.params.backgroundColor) {
                                _this.setBackgroundColor(
                                    _this.params.backgroundColor
                                );
                            }

                            /**
                             * @private Used to save the current volume when muting so we can
                             * restore once unmuted
                             * @type {number}
                             */
                            _this.savedVolume = 0;

                            /**
                             * @private The current muted state
                             * @type {boolean}
                             */
                            _this.isMuted = false;

                            /**
                             * @private Will hold a list of event descriptors that need to be
                             * canceled on subsequent loads of audio
                             * @type {Object[]}
                             */
                            _this.tmpEvents = [];

                            /**
                             * @private Holds any running audio downloads
                             * @type {Observer}
                             */
                            _this.currentRequest = null;
                            /** @private */
                            _this.arraybuffer = null;
                            /** @private */
                            _this.drawer = null;
                            /** @private */
                            _this.backend = null;
                            /** @private */
                            _this.peakCache = null;

                            // cache constructor objects
                            if (typeof _this.params.renderer !== "function") {
                                throw new Error(
                                    "Renderer parameter is invalid"
                                );
                            }
                            /**
                             * @private The uninitialised Drawer class
                             */
                            _this.Drawer = _this.params.renderer;
                            /**
                             * @private The uninitialised Backend class
                             */
                            // Back compat
                            if (_this.params.backend == "AudioElement") {
                                _this.params.backend = "MediaElement";
                            }
                            if (
                                (_this.params.backend == "WebAudio" ||
                                    _this.params.backend ===
                                        "MediaElementWebAudio") &&
                                !_webaudio.default.prototype.supportsWebAudio.call(
                                    null
                                )
                            ) {
                                _this.params.backend = "MediaElement";
                            }
                            _this.Backend =
                                _this.backends[_this.params.backend];

                            /**
                             * @private map of plugin names that are currently initialised
                             */
                            _this.initialisedPluginList = {};
                            /** @private */
                            _this.isDestroyed = false;

                            /**
                             * Get the current ready status.
                             *
                             * @example const isReady = wavesurfer.isReady;
                             * @return {boolean}
                             */
                            _this.isReady = false;

                            // responsive debounced event listener. If this.params.responsive is not
                            // set, this is never called. Use 100ms or this.params.responsive as
                            // timeout for the debounce function.
                            var prevWidth = 0;
                            _this._onResize = util.debounce(
                                function () {
                                    if (
                                        _this.drawer.wrapper &&
                                        prevWidth !=
                                            _this.drawer.wrapper.clientWidth &&
                                        !_this.params.scrollParent
                                    ) {
                                        prevWidth =
                                            _this.drawer.wrapper.clientWidth;
                                        if (prevWidth) {
                                            // redraw only if waveform container is rendered and has a width
                                            _this.drawer.fireEvent("redraw");
                                        }
                                    }
                                },
                                typeof _this.params.responsive === "number"
                                    ? _this.params.responsive
                                    : 100
                            );
                            return _possibleConstructorReturn(
                                _this,
                                _assertThisInitialized(_this)
                            );
                        }

                        /**
                         * Initialise the wave
                         *
                         * @example
                         * var wavesurfer = new WaveSurfer(params);
                         * wavesurfer.init();
                         * @return {this} The wavesurfer instance
                         */
                        _createClass(
                            WaveSurfer,
                            [
                                {
                                    key: "init",
                                    value: function init() {
                                        this.registerPlugins(
                                            this.params.plugins
                                        );
                                        this.createDrawer();
                                        this.createBackend();
                                        this.createPeakCache();
                                        return this;
                                    },

                                    /**
                                     * Add and initialise array of plugins (if `plugin.deferInit` is falsey),
                                     * this function is called in the init function of wavesurfer
                                     *
                                     * @param {PluginDefinition[]} plugins An array of plugin definitions
                                     * @emits {WaveSurfer#plugins-registered} Called with the array of plugin definitions
                                     * @return {this} The wavesurfer instance
                                     */
                                },
                                {
                                    key: "registerPlugins",
                                    value: function registerPlugins(plugins) {
                                        var _this2 = this;
                                        // first instantiate all the plugins
                                        plugins.forEach(function (plugin) {
                                            return _this2.addPlugin(plugin);
                                        });

                                        // now run the init functions
                                        plugins.forEach(function (plugin) {
                                            // call init function of the plugin if deferInit is falsey
                                            // in that case you would manually use initPlugins()
                                            if (!plugin.deferInit) {
                                                _this2.initPlugin(plugin.name);
                                            }
                                        });
                                        this.fireEvent(
                                            "plugins-registered",
                                            plugins
                                        );
                                        return this;
                                    },

                                    /**
                                     * Get a map of plugin names that are currently initialised
                                     *
                                     * @example wavesurfer.getPlugins();
                                     * @return {Object} Object with plugin names
                                     */
                                },
                                {
                                    key: "getActivePlugins",
                                    value: function getActivePlugins() {
                                        return this.initialisedPluginList;
                                    },

                                    /**
                                     * Add a plugin object to wavesurfer
                                     *
                                     * @param {PluginDefinition} plugin A plugin definition
                                     * @emits {WaveSurfer#plugin-added} Called with the name of the plugin that was added
                                     * @example wavesurfer.addPlugin(WaveSurfer.minimap());
                                     * @return {this} The wavesurfer instance
                                     */
                                },
                                {
                                    key: "addPlugin",
                                    value: function addPlugin(plugin) {
                                        var _this3 = this;
                                        if (!plugin.name) {
                                            throw new Error(
                                                "Plugin does not have a name!"
                                            );
                                        }
                                        if (!plugin.instance) {
                                            throw new Error(
                                                "Plugin ".concat(
                                                    plugin.name,
                                                    " does not have an instance property!"
                                                )
                                            );
                                        }

                                        // staticProps properties are applied to wavesurfer instance
                                        if (plugin.staticProps) {
                                            Object.keys(
                                                plugin.staticProps
                                            ).forEach(function (
                                                pluginStaticProp
                                            ) {
                                                /**
                                                 * Properties defined in a plugin definition's `staticProps` property are added as
                                                 * staticProps properties of the WaveSurfer instance
                                                 */
                                                _this3[pluginStaticProp] =
                                                    plugin.staticProps[
                                                        pluginStaticProp
                                                    ];
                                            });
                                        }
                                        var Instance = plugin.instance;

                                        // turn the plugin instance into an observer
                                        var observerPrototypeKeys =
                                            Object.getOwnPropertyNames(
                                                util.Observer.prototype
                                            );
                                        observerPrototypeKeys.forEach(function (
                                            key
                                        ) {
                                            Instance.prototype[key] =
                                                util.Observer.prototype[key];
                                        });

                                        /**
                                         * Instantiated plugin classes are added as a property of the wavesurfer
                                         * instance
                                         * @type {Object}
                                         */
                                        this[plugin.name] = new Instance(
                                            plugin.params || {},
                                            this
                                        );
                                        this.fireEvent(
                                            "plugin-added",
                                            plugin.name
                                        );
                                        return this;
                                    },

                                    /**
                                     * Initialise a plugin
                                     *
                                     * @param {string} name A plugin name
                                     * @emits WaveSurfer#plugin-initialised
                                     * @example wavesurfer.initPlugin('minimap');
                                     * @return {this} The wavesurfer instance
                                     */
                                },
                                {
                                    key: "initPlugin",
                                    value: function initPlugin(name) {
                                        if (!this[name]) {
                                            throw new Error(
                                                "Plugin ".concat(
                                                    name,
                                                    " has not been added yet!"
                                                )
                                            );
                                        }
                                        if (this.initialisedPluginList[name]) {
                                            // destroy any already initialised plugins
                                            this.destroyPlugin(name);
                                        }
                                        this[name].init();
                                        this.initialisedPluginList[name] = true;
                                        this.fireEvent(
                                            "plugin-initialised",
                                            name
                                        );
                                        return this;
                                    },

                                    /**
                                     * Destroy a plugin
                                     *
                                     * @param {string} name A plugin name
                                     * @emits WaveSurfer#plugin-destroyed
                                     * @example wavesurfer.destroyPlugin('minimap');
                                     * @returns {this} The wavesurfer instance
                                     */
                                },
                                {
                                    key: "destroyPlugin",
                                    value: function destroyPlugin(name) {
                                        if (!this[name]) {
                                            throw new Error(
                                                "Plugin ".concat(
                                                    name,
                                                    " has not been added yet and cannot be destroyed!"
                                                )
                                            );
                                        }
                                        if (!this.initialisedPluginList[name]) {
                                            throw new Error(
                                                "Plugin ".concat(
                                                    name,
                                                    " is not active and cannot be destroyed!"
                                                )
                                            );
                                        }
                                        if (
                                            typeof this[name].destroy !==
                                            "function"
                                        ) {
                                            throw new Error(
                                                "Plugin ".concat(
                                                    name,
                                                    " does not have a destroy function!"
                                                )
                                            );
                                        }
                                        this[name].destroy();
                                        delete this.initialisedPluginList[name];
                                        this.fireEvent(
                                            "plugin-destroyed",
                                            name
                                        );
                                        return this;
                                    },

                                    /**
                                     * Destroy all initialised plugins. Convenience function to use when
                                     * wavesurfer is removed
                                     *
                                     * @private
                                     */
                                },
                                {
                                    key: "destroyAllPlugins",
                                    value: function destroyAllPlugins() {
                                        var _this4 = this;
                                        Object.keys(
                                            this.initialisedPluginList
                                        ).forEach(function (name) {
                                            return _this4.destroyPlugin(name);
                                        });
                                    },

                                    /**
                                     * Create the drawer and draw the waveform
                                     *
                                     * @private
                                     * @emits WaveSurfer#drawer-created
                                     */
                                },
                                {
                                    key: "createDrawer",
                                    value: function createDrawer() {
                                        var _this5 = this;
                                        this.drawer = new this.Drawer(
                                            this.container,
                                            this.params
                                        );
                                        this.drawer.init();
                                        this.fireEvent(
                                            "drawer-created",
                                            this.drawer
                                        );
                                        if (this.params.responsive !== false) {
                                            window.addEventListener(
                                                "resize",
                                                this._onResize,
                                                true
                                            );
                                            window.addEventListener(
                                                "orientationchange",
                                                this._onResize,
                                                true
                                            );
                                        }
                                        this.drawer.on("redraw", function () {
                                            _this5.drawBuffer();
                                            _this5.drawer.progress(
                                                _this5.backend.getPlayedPercents()
                                            );
                                        });

                                        // Click-to-seek
                                        this.drawer.on(
                                            "click",
                                            function (e, progress) {
                                                setTimeout(function () {
                                                    return _this5.seekTo(
                                                        progress
                                                    );
                                                }, 0);
                                            }
                                        );

                                        // Relay the scroll event from the drawer
                                        this.drawer.on("scroll", function (e) {
                                            if (_this5.params.partialRender) {
                                                _this5.drawBuffer();
                                            }
                                            _this5.fireEvent("scroll", e);
                                        });
                                    },

                                    /**
                                     * Create the backend
                                     *
                                     * @private
                                     * @emits WaveSurfer#backend-created
                                     */
                                },
                                {
                                    key: "createBackend",
                                    value: function createBackend() {
                                        var _this6 = this;
                                        if (this.backend) {
                                            this.backend.destroy();
                                        }
                                        this.backend = new this.Backend(
                                            this.params
                                        );
                                        this.backend.init();
                                        this.fireEvent(
                                            "backend-created",
                                            this.backend
                                        );
                                        this.backend.on("finish", function () {
                                            _this6.drawer.progress(
                                                _this6.backend.getPlayedPercents()
                                            );
                                            _this6.fireEvent("finish");
                                        });
                                        this.backend.on("play", function () {
                                            return _this6.fireEvent("play");
                                        });
                                        this.backend.on("pause", function () {
                                            return _this6.fireEvent("pause");
                                        });
                                        this.backend.on(
                                            "audioprocess",
                                            function (time) {
                                                _this6.drawer.progress(
                                                    _this6.backend.getPlayedPercents()
                                                );
                                                _this6.fireEvent(
                                                    "audioprocess",
                                                    time
                                                );
                                            }
                                        );

                                        // only needed for MediaElement and MediaElementWebAudio backend
                                        if (
                                            this.params.backend ===
                                                "MediaElement" ||
                                            this.params.backend ===
                                                "MediaElementWebAudio"
                                        ) {
                                            this.backend.on(
                                                "seek",
                                                function () {
                                                    _this6.drawer.progress(
                                                        _this6.backend.getPlayedPercents()
                                                    );
                                                }
                                            );
                                            this.backend.on(
                                                "volume",
                                                function () {
                                                    var newVolume =
                                                        _this6.getVolume();
                                                    _this6.fireEvent(
                                                        "volume",
                                                        newVolume
                                                    );
                                                    if (
                                                        _this6.backend
                                                            .isMuted !==
                                                        _this6.isMuted
                                                    ) {
                                                        _this6.isMuted =
                                                            _this6.backend.isMuted;
                                                        _this6.fireEvent(
                                                            "mute",
                                                            _this6.isMuted
                                                        );
                                                    }
                                                }
                                            );
                                        }
                                    },

                                    /**
                                     * Create the peak cache
                                     *
                                     * @private
                                     */
                                },
                                {
                                    key: "createPeakCache",
                                    value: function createPeakCache() {
                                        if (this.params.partialRender) {
                                            this.peakCache =
                                                new _peakcache.default();
                                        }
                                    },

                                    /**
                                     * Get the duration of the audio clip
                                     *
                                     * @example const duration = wavesurfer.getDuration();
                                     * @return {number} Duration in seconds
                                     */
                                },
                                {
                                    key: "getDuration",
                                    value: function getDuration() {
                                        return this.backend.getDuration();
                                    },

                                    /**
                                     * Get the current playback position
                                     *
                                     * @example const currentTime = wavesurfer.getCurrentTime();
                                     * @return {number} Playback position in seconds
                                     */
                                },
                                {
                                    key: "getCurrentTime",
                                    value: function getCurrentTime() {
                                        return this.backend.getCurrentTime();
                                    },

                                    /**
                                     * Set the current play time in seconds.
                                     *
                                     * @param {number} seconds A positive number in seconds. E.g. 10 means 10
                                     * seconds, 60 means 1 minute
                                     */
                                },
                                {
                                    key: "setCurrentTime",
                                    value: function setCurrentTime(seconds) {
                                        if (seconds >= this.getDuration()) {
                                            this.seekTo(1);
                                        } else {
                                            this.seekTo(
                                                seconds / this.getDuration()
                                            );
                                        }
                                    },

                                    /**
                                     * Starts playback from the current position. Optional start and end
                                     * measured in seconds can be used to set the range of audio to play.
                                     *
                                     * @param {?number} start Position to start at
                                     * @param {?number} end Position to end at
                                     * @emits WaveSurfer#interaction
                                     * @return {Promise} Result of the backend play method
                                     * @example
                                     * // play from second 1 to 5
                                     * wavesurfer.play(1, 5);
                                     */
                                },
                                {
                                    key: "play",
                                    value: function play(start, end) {
                                        var _this7 = this;
                                        if (this.params.ignoreSilenceMode) {
                                            // ignores device hardware silence mode
                                            util.ignoreSilenceMode();
                                        }
                                        this.fireEvent(
                                            "interaction",
                                            function () {
                                                return _this7.play(start, end);
                                            }
                                        );
                                        return this.backend.play(start, end);
                                    },

                                    /**
                                     * Set a point in seconds for playback to stop at.
                                     *
                                     * @param {number} position Position (in seconds) to stop at
                                     * @version 3.3.0
                                     */
                                },
                                {
                                    key: "setPlayEnd",
                                    value: function setPlayEnd(position) {
                                        this.backend.setPlayEnd(position);
                                    },

                                    /**
                                     * Stops and pauses playback
                                     *
                                     * @example wavesurfer.pause();
                                     * @return {Promise} Result of the backend pause method
                                     */
                                },
                                {
                                    key: "pause",
                                    value: function pause() {
                                        if (!this.backend.isPaused()) {
                                            return this.backend.pause();
                                        }
                                    },

                                    /**
                                     * Toggle playback
                                     *
                                     * @example wavesurfer.playPause();
                                     * @return {Promise} Result of the backend play or pause method
                                     */
                                },
                                {
                                    key: "playPause",
                                    value: function playPause() {
                                        return this.backend.isPaused()
                                            ? this.play()
                                            : this.pause();
                                    },

                                    /**
                                     * Get the current playback state
                                     *
                                     * @example const isPlaying = wavesurfer.isPlaying();
                                     * @return {boolean} False if paused, true if playing
                                     */
                                },
                                {
                                    key: "isPlaying",
                                    value: function isPlaying() {
                                        return !this.backend.isPaused();
                                    },

                                    /**
                                     * Skip backward
                                     *
                                     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
                                     * is used
                                     * @example wavesurfer.skipBackward();
                                     */
                                },
                                {
                                    key: "skipBackward",
                                    value: function skipBackward(seconds) {
                                        this.skip(
                                            -seconds || -this.params.skipLength
                                        );
                                    },

                                    /**
                                     * Skip forward
                                     *
                                     * @param {?number} seconds Amount to skip back, if not specified `skipLength`
                                     * is used
                                     * @example wavesurfer.skipForward();
                                     */
                                },
                                {
                                    key: "skipForward",
                                    value: function skipForward(seconds) {
                                        this.skip(
                                            seconds || this.params.skipLength
                                        );
                                    },

                                    /**
                                     * Skip a number of seconds from the current position (use a negative value
                                     * to go backwards).
                                     *
                                     * @param {number} offset Amount to skip back or forwards
                                     * @example
                                     * // go back 2 seconds
                                     * wavesurfer.skip(-2);
                                     */
                                },
                                {
                                    key: "skip",
                                    value: function skip(offset) {
                                        var duration = this.getDuration() || 1;
                                        var position =
                                            this.getCurrentTime() || 0;
                                        position = Math.max(
                                            0,
                                            Math.min(
                                                duration,
                                                position + (offset || 0)
                                            )
                                        );
                                        this.seekAndCenter(position / duration);
                                    },

                                    /**
                                     * Seeks to a position and centers the view
                                     *
                                     * @param {number} progress Between 0 (=beginning) and 1 (=end)
                                     * @example
                                     * // seek and go to the middle of the audio
                                     * wavesurfer.seekTo(0.5);
                                     */
                                },
                                {
                                    key: "seekAndCenter",
                                    value: function seekAndCenter(progress) {
                                        this.seekTo(progress);
                                        this.drawer.recenter(progress);
                                    },

                                    /**
                                     * Seeks to a position
                                     *
                                     * @param {number} progress Between 0 (=beginning) and 1 (=end)
                                     * @emits WaveSurfer#interaction
                                     * @emits WaveSurfer#seek
                                     * @example
                                     * // seek to the middle of the audio
                                     * wavesurfer.seekTo(0.5);
                                     */
                                },
                                {
                                    key: "seekTo",
                                    value: function seekTo(progress) {
                                        var _this8 = this;
                                        // return an error if progress is not a number between 0 and 1
                                        if (
                                            typeof progress !== "number" ||
                                            !isFinite(progress) ||
                                            progress < 0 ||
                                            progress > 1
                                        ) {
                                            throw new Error(
                                                "Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!"
                                            );
                                        }
                                        this.fireEvent(
                                            "interaction",
                                            function () {
                                                return _this8.seekTo(progress);
                                            }
                                        );
                                        var isWebAudioBackend =
                                            this.params.backend === "WebAudio";
                                        var paused = this.backend.isPaused();
                                        if (isWebAudioBackend && !paused) {
                                            this.backend.pause();
                                        }

                                        // avoid small scrolls while paused seeking
                                        var oldScrollParent =
                                            this.params.scrollParent;
                                        this.params.scrollParent = false;
                                        this.backend.seekTo(
                                            progress * this.getDuration()
                                        );
                                        this.drawer.progress(progress);
                                        if (isWebAudioBackend && !paused) {
                                            this.backend.play();
                                        }
                                        this.params.scrollParent =
                                            oldScrollParent;
                                        this.fireEvent("seek", progress);
                                    },

                                    /**
                                     * Stops and goes to the beginning.
                                     *
                                     * @example wavesurfer.stop();
                                     */
                                },
                                {
                                    key: "stop",
                                    value: function stop() {
                                        this.pause();
                                        this.seekTo(0);
                                        this.drawer.progress(0);
                                    },

                                    /**
                                     * Sets the ID of the audio device to use for output and returns a Promise.
                                     *
                                     * @param {string} deviceId String value representing underlying output
                                     * device
                                     * @returns {Promise} `Promise` that resolves to `undefined` when there are
                                     * no errors detected.
                                     */
                                },
                                {
                                    key: "setSinkId",
                                    value: function setSinkId(deviceId) {
                                        return this.backend.setSinkId(deviceId);
                                    },

                                    /**
                                     * Set the playback volume.
                                     *
                                     * @param {number} newVolume A value between 0 and 1, 0 being no
                                     * volume and 1 being full volume.
                                     * @emits WaveSurfer#volume
                                     */
                                },
                                {
                                    key: "setVolume",
                                    value: function setVolume(newVolume) {
                                        this.backend.setVolume(newVolume);
                                        this.fireEvent("volume", newVolume);
                                    },

                                    /**
                                     * Get the playback volume.
                                     *
                                     * @return {number} A value between 0 and 1, 0 being no
                                     * volume and 1 being full volume.
                                     */
                                },
                                {
                                    key: "getVolume",
                                    value: function getVolume() {
                                        return this.backend.getVolume();
                                    },

                                    /**
                                     * Set the playback rate.
                                     *
                                     * @param {number} rate A positive number. E.g. 0.5 means half the normal
                                     * speed, 2 means double speed and so on.
                                     * @example wavesurfer.setPlaybackRate(2);
                                     */
                                },
                                {
                                    key: "setPlaybackRate",
                                    value: function setPlaybackRate(rate) {
                                        this.backend.setPlaybackRate(rate);
                                    },

                                    /**
                                     * Get the playback rate.
                                     *
                                     * @return {number} The current playback rate.
                                     */
                                },
                                {
                                    key: "getPlaybackRate",
                                    value: function getPlaybackRate() {
                                        return this.backend.getPlaybackRate();
                                    },

                                    /**
                                     * Toggle the volume on and off. If not currently muted it will save the
                                     * current volume value and turn the volume off. If currently muted then it
                                     * will restore the volume to the saved value, and then rest the saved
                                     * value.
                                     *
                                     * @example wavesurfer.toggleMute();
                                     */
                                },
                                {
                                    key: "toggleMute",
                                    value: function toggleMute() {
                                        this.setMute(!this.isMuted);
                                    },

                                    /**
                                     * Enable or disable muted audio
                                     *
                                     * @param {boolean} mute Specify `true` to mute audio.
                                     * @emits WaveSurfer#volume
                                     * @emits WaveSurfer#mute
                                     * @example
                                     * // unmute
                                     * wavesurfer.setMute(false);
                                     * console.log(wavesurfer.getMute()) // logs false
                                     */
                                },
                                {
                                    key: "setMute",
                                    value: function setMute(mute) {
                                        // ignore all muting requests if the audio is already in that state
                                        if (mute === this.isMuted) {
                                            this.fireEvent(
                                                "mute",
                                                this.isMuted
                                            );
                                            return;
                                        }
                                        if (this.backend.setMute) {
                                            // Backends such as the MediaElement backend have their own handling
                                            // of mute, let them handle it.
                                            this.backend.setMute(mute);
                                            this.isMuted = mute;
                                        } else {
                                            if (mute) {
                                                // If currently not muted then save current volume,
                                                // turn off the volume and update the mute properties
                                                this.savedVolume =
                                                    this.backend.getVolume();
                                                this.backend.setVolume(0);
                                                this.isMuted = true;
                                                this.fireEvent("volume", 0);
                                            } else {
                                                // If currently muted then restore to the saved volume
                                                // and update the mute properties
                                                this.backend.setVolume(
                                                    this.savedVolume
                                                );
                                                this.isMuted = false;
                                                this.fireEvent(
                                                    "volume",
                                                    this.savedVolume
                                                );
                                            }
                                        }
                                        this.fireEvent("mute", this.isMuted);
                                    },

                                    /**
                                     * Get the current mute status.
                                     *
                                     * @example const isMuted = wavesurfer.getMute();
                                     * @return {boolean} Current mute status
                                     */
                                },
                                {
                                    key: "getMute",
                                    value: function getMute() {
                                        return this.isMuted;
                                    },

                                    /**
                                     * Get the list of current set filters as an array.
                                     *
                                     * Filters must be set with setFilters method first
                                     *
                                     * @return {array} List of enabled filters
                                     */
                                },
                                {
                                    key: "getFilters",
                                    value: function getFilters() {
                                        return this.backend.filters || [];
                                    },

                                    /**
                                     * Toggles `scrollParent` and redraws
                                     *
                                     * @example wavesurfer.toggleScroll();
                                     */
                                },
                                {
                                    key: "toggleScroll",
                                    value: function toggleScroll() {
                                        this.params.scrollParent =
                                            !this.params.scrollParent;
                                        this.drawBuffer();
                                    },

                                    /**
                                     * Toggle mouse interaction
                                     *
                                     * @example wavesurfer.toggleInteraction();
                                     */
                                },
                                {
                                    key: "toggleInteraction",
                                    value: function toggleInteraction() {
                                        this.params.interact =
                                            !this.params.interact;
                                    },

                                    /**
                                     * Get the fill color of the waveform after the cursor.
                                     *
                                     * @param {?number} channelIdx Optional index of the channel to get its wave color if splitChannels is true
                                     * @return {string|object} A CSS color string, or an array of CSS color strings.
                                     */
                                },
                                {
                                    key: "getWaveColor",
                                    value: function getWaveColor() {
                                        var channelIdx =
                                            arguments.length > 0 &&
                                            arguments[0] !== undefined
                                                ? arguments[0]
                                                : null;
                                        if (
                                            this.params.splitChannelsOptions
                                                .channelColors[channelIdx]
                                        ) {
                                            return this.params
                                                .splitChannelsOptions
                                                .channelColors[channelIdx]
                                                .waveColor;
                                        }
                                        return this.params.waveColor;
                                    },

                                    /**
                                     * Set the fill color of the waveform after the cursor.
                                     *
                                     * @param {string|object} color A CSS color string, or an array of CSS color strings.
                                     * @param {?number} channelIdx Optional index of the channel to set its wave color if splitChannels is true
                                     * @example wavesurfer.setWaveColor('#ddd');
                                     */
                                },
                                {
                                    key: "setWaveColor",
                                    value: function setWaveColor(color) {
                                        var channelIdx =
                                            arguments.length > 1 &&
                                            arguments[1] !== undefined
                                                ? arguments[1]
                                                : null;
                                        if (
                                            this.params.splitChannelsOptions
                                                .channelColors[channelIdx]
                                        ) {
                                            this.params.splitChannelsOptions.channelColors[
                                                channelIdx
                                            ].waveColor = color;
                                        } else {
                                            this.params.waveColor = color;
                                        }
                                        this.drawBuffer();
                                    },

                                    /**
                                     * Get the fill color of the waveform behind the cursor.
                                     *
                                     * @param {?number} channelIdx Optional index of the channel to get its progress color if splitChannels is true
                                     * @return {string|object} A CSS color string, or an array of CSS color strings.
                                     */
                                },
                                {
                                    key: "getProgressColor",
                                    value: function getProgressColor() {
                                        var channelIdx =
                                            arguments.length > 0 &&
                                            arguments[0] !== undefined
                                                ? arguments[0]
                                                : null;
                                        if (
                                            this.params.splitChannelsOptions
                                                .channelColors[channelIdx]
                                        ) {
                                            return this.params
                                                .splitChannelsOptions
                                                .channelColors[channelIdx]
                                                .progressColor;
                                        }
                                        return this.params.progressColor;
                                    },

                                    /**
                                     * Set the fill color of the waveform behind the cursor.
                                     *
                                     * @param {string|object} color A CSS color string, or an array of CSS color strings.
                                     * @param {?number} channelIdx Optional index of the channel to set its progress color if splitChannels is true
                                     * @example wavesurfer.setProgressColor('#400');
                                     */
                                },
                                {
                                    key: "setProgressColor",
                                    value: function setProgressColor(
                                        color,
                                        channelIdx
                                    ) {
                                        if (
                                            this.params.splitChannelsOptions
                                                .channelColors[channelIdx]
                                        ) {
                                            this.params.splitChannelsOptions.channelColors[
                                                channelIdx
                                            ].progressColor = color;
                                        } else {
                                            this.params.progressColor = color;
                                        }
                                        this.drawBuffer();
                                    },

                                    /**
                                     * Get the background color of the waveform container.
                                     *
                                     * @return {string} A CSS color string.
                                     */
                                },
                                {
                                    key: "getBackgroundColor",
                                    value: function getBackgroundColor() {
                                        return this.params.backgroundColor;
                                    },

                                    /**
                                     * Set the background color of the waveform container.
                                     *
                                     * @param {string} color A CSS color string.
                                     * @example wavesurfer.setBackgroundColor('#FF00FF');
                                     */
                                },
                                {
                                    key: "setBackgroundColor",
                                    value: function setBackgroundColor(color) {
                                        this.params.backgroundColor = color;
                                        util.style(this.container, {
                                            background:
                                                this.params.backgroundColor,
                                        });
                                    },

                                    /**
                                     * Get the fill color of the cursor indicating the playhead
                                     * position.
                                     *
                                     * @return {string} A CSS color string.
                                     */
                                },
                                {
                                    key: "getCursorColor",
                                    value: function getCursorColor() {
                                        return this.params.cursorColor;
                                    },

                                    /**
                                     * Set the fill color of the cursor indicating the playhead
                                     * position.
                                     *
                                     * @param {string} color A CSS color string.
                                     * @example wavesurfer.setCursorColor('#222');
                                     */
                                },
                                {
                                    key: "setCursorColor",
                                    value: function setCursorColor(color) {
                                        this.params.cursorColor = color;
                                        this.drawer.updateCursor();
                                    },

                                    /**
                                     * Get the height of the waveform.
                                     *
                                     * @return {number} Height measured in pixels.
                                     */
                                },
                                {
                                    key: "getHeight",
                                    value: function getHeight() {
                                        return this.params.height;
                                    },

                                    /**
                                     * Set the height of the waveform.
                                     *
                                     * @param {number} height Height measured in pixels.
                                     * @example wavesurfer.setHeight(200);
                                     */
                                },
                                {
                                    key: "setHeight",
                                    value: function setHeight(height) {
                                        this.params.height = height;
                                        this.drawer.setHeight(
                                            height * this.params.pixelRatio
                                        );
                                        this.drawBuffer();
                                    },

                                    /**
                                     * Hide channels from being drawn on the waveform if splitting channels.
                                     *
                                     * For example, if we want to draw only the peaks for the right stereo channel:
                                     *
                                     * const wavesurfer = new WaveSurfer.create({...splitChannels: true});
                                     * wavesurfer.load('stereo_audio.mp3');
                                     *
                                     * wavesurfer.setFilteredChannel([0]); <-- hide left channel peaks.
                                     *
                                     * @param {array} channelIndices Channels to be filtered out from drawing.
                                     * @version 4.0.0
                                     */
                                },
                                {
                                    key: "setFilteredChannels",
                                    value: function setFilteredChannels(
                                        channelIndices
                                    ) {
                                        this.params.splitChannelsOptions.filterChannels =
                                            channelIndices;
                                        this.drawBuffer();
                                    },

                                    /**
                                     * Get the correct peaks for current wave view-port and render wave
                                     *
                                     * @private
                                     * @emits WaveSurfer#redraw
                                     */
                                },
                                {
                                    key: "drawBuffer",
                                    value: function drawBuffer() {
                                        var nominalWidth = Math.round(
                                            this.getDuration() *
                                                this.params.minPxPerSec *
                                                this.params.pixelRatio
                                        );
                                        var parentWidth =
                                            this.drawer.getWidth();
                                        var width = nominalWidth;
                                        // always start at 0 after zooming for scrolling : issue redraw left part
                                        var start = 0;
                                        var end = Math.max(
                                            start + parentWidth,
                                            width
                                        );
                                        // Fill container
                                        if (
                                            this.params.fillParent &&
                                            (!this.params.scrollParent ||
                                                nominalWidth < parentWidth)
                                        ) {
                                            width = parentWidth;
                                            start = 0;
                                            end = width;
                                        }
                                        var peaks;
                                        if (this.params.partialRender) {
                                            var newRanges =
                                                this.peakCache.addRangeToPeakCache(
                                                    width,
                                                    start,
                                                    end
                                                );
                                            var i;
                                            for (
                                                i = 0;
                                                i < newRanges.length;
                                                i++
                                            ) {
                                                peaks = this.backend.getPeaks(
                                                    width,
                                                    newRanges[i][0],
                                                    newRanges[i][1]
                                                );
                                                this.drawer.drawPeaks(
                                                    peaks,
                                                    width,
                                                    newRanges[i][0],
                                                    newRanges[i][1]
                                                );
                                            }
                                        } else {
                                            peaks = this.backend.getPeaks(
                                                width,
                                                start,
                                                end
                                            );
                                            this.drawer.drawPeaks(
                                                peaks,
                                                width,
                                                start,
                                                end
                                            );
                                        }
                                        this.fireEvent("redraw", peaks, width);
                                    },

                                    /**
                                     * Horizontally zooms the waveform in and out. It also changes the parameter
                                     * `minPxPerSec` and enables the `scrollParent` option. Calling the function
                                     * with a falsey parameter will reset the zoom state.
                                     *
                                     * @param {?number} pxPerSec Number of horizontal pixels per second of
                                     * audio, if none is set the waveform returns to unzoomed state
                                     * @emits WaveSurfer#zoom
                                     * @example wavesurfer.zoom(20);
                                     */
                                },
                                {
                                    key: "zoom",
                                    value: function zoom(pxPerSec) {
                                        if (!pxPerSec) {
                                            this.params.minPxPerSec =
                                                this.defaultParams.minPxPerSec;
                                            this.params.scrollParent = false;
                                        } else {
                                            this.params.minPxPerSec = pxPerSec;
                                            this.params.scrollParent = true;
                                        }
                                        this.drawBuffer();
                                        this.drawer.progress(
                                            this.backend.getPlayedPercents()
                                        );
                                        this.drawer.recenter(
                                            this.getCurrentTime() /
                                                this.getDuration()
                                        );
                                        this.fireEvent("zoom", pxPerSec);
                                    },

                                    /**
                                     * Decode buffer and load
                                     *
                                     * @private
                                     * @param {ArrayBuffer} arraybuffer Buffer to process
                                     */
                                },
                                {
                                    key: "loadArrayBuffer",
                                    value: function loadArrayBuffer(
                                        arraybuffer
                                    ) {
                                        var _this9 = this;
                                        this.decodeArrayBuffer(
                                            arraybuffer,
                                            function (data) {
                                                if (!_this9.isDestroyed) {
                                                    _this9.loadDecodedBuffer(
                                                        data
                                                    );
                                                }
                                            }
                                        );
                                    },

                                    /**
                                     * Directly load an externally decoded AudioBuffer
                                     *
                                     * @private
                                     * @param {AudioBuffer} buffer Buffer to process
                                     * @emits WaveSurfer#ready
                                     */
                                },
                                {
                                    key: "loadDecodedBuffer",
                                    value: function loadDecodedBuffer(buffer) {
                                        this.backend.load(buffer);
                                        this.drawBuffer();
                                        this.isReady = true;
                                        this.fireEvent("ready");
                                    },

                                    /**
                                     * Loads audio data from a Blob or File object
                                     *
                                     * @param {Blob|File} blob Audio data
                                     * @example
                                     */
                                },
                                {
                                    key: "loadBlob",
                                    value: function loadBlob(blob) {
                                        var _this10 = this;
                                        // Create file reader
                                        var reader = new FileReader();
                                        reader.addEventListener(
                                            "progress",
                                            function (e) {
                                                return _this10.onProgress(e);
                                            }
                                        );
                                        reader.addEventListener(
                                            "load",
                                            function (e) {
                                                return _this10.loadArrayBuffer(
                                                    e.target.result
                                                );
                                            }
                                        );
                                        reader.addEventListener(
                                            "error",
                                            function () {
                                                return _this10.fireEvent(
                                                    "error",
                                                    "Error reading file"
                                                );
                                            }
                                        );
                                        reader.readAsArrayBuffer(blob);
                                        this.empty();
                                    },

                                    /**
                                     * Loads audio and re-renders the waveform.
                                     *
                                     * @param {string|HTMLMediaElement} url The url of the audio file or the
                                     * audio element with the audio
                                     * @param {number[]|Number.<Array[]>} peaks Wavesurfer does not have to decode
                                     * the audio to render the waveform if this is specified
                                     * @param {?string} preload (Use with backend `MediaElement` and `MediaElementWebAudio`)
                                     * `'none'|'metadata'|'auto'` Preload attribute for the media element
                                     * @param {?number} duration The duration of the audio. This is used to
                                     * render the peaks data in the correct size for the audio duration (as
                                     * befits the current `minPxPerSec` and zoom value) without having to decode
                                     * the audio.
                                     * @returns {void}
                                     * @throws Will throw an error if the `url` argument is empty.
                                     * @example
                                     * // uses fetch or media element to load file (depending on backend)
                                     * wavesurfer.load('http://example.com/demo.wav');
                                     *
                                     * // setting preload attribute with media element backend and supplying
                                     * // peaks
                                     * wavesurfer.load(
                                     *   'http://example.com/demo.wav',
                                     *   [0.0218, 0.0183, 0.0165, 0.0198, 0.2137, 0.2888],
                                     *   true
                                     * );
                                     */
                                },
                                {
                                    key: "load",
                                    value: function load(
                                        url,
                                        peaks,
                                        preload,
                                        duration
                                    ) {
                                        if (!url) {
                                            throw new Error(
                                                "url parameter cannot be empty"
                                            );
                                        }
                                        this.empty();
                                        if (preload) {
                                            // check whether the preload attribute will be usable and if not log
                                            // a warning listing the reasons why not and nullify the variable
                                            var preloadIgnoreReasons = {
                                                "Preload is not 'auto', 'none' or 'metadata'":
                                                    [
                                                        "auto",
                                                        "metadata",
                                                        "none",
                                                    ].indexOf(preload) === -1,
                                                "Peaks are not provided":
                                                    !peaks,
                                                "Backend is not of type 'MediaElement' or 'MediaElementWebAudio'":
                                                    [
                                                        "MediaElement",
                                                        "MediaElementWebAudio",
                                                    ].indexOf(
                                                        this.params.backend
                                                    ) === -1,
                                                "Url is not of type string":
                                                    typeof url !== "string",
                                            };
                                            var activeReasons = Object.keys(
                                                preloadIgnoreReasons
                                            ).filter(function (reason) {
                                                return preloadIgnoreReasons[
                                                    reason
                                                ];
                                            });
                                            if (activeReasons.length) {
                                                // eslint-disable-next-line no-console
                                                console.warn(
                                                    "Preload parameter of wavesurfer.load will be ignored because:\n\t- " +
                                                        activeReasons.join(
                                                            "\n\t- "
                                                        )
                                                );
                                                // stop invalid values from being used
                                                preload = null;
                                            }
                                        }

                                        // loadBuffer(url, peaks, duration) requires that url is a string
                                        // but users can pass in a HTMLMediaElement to WaveSurfer
                                        if (
                                            this.params.backend ===
                                                "WebAudio" &&
                                            url instanceof HTMLMediaElement
                                        ) {
                                            url = url.src;
                                        }
                                        switch (this.params.backend) {
                                            case "WebAudio":
                                                return this.loadBuffer(
                                                    url,
                                                    peaks,
                                                    duration
                                                );
                                            case "MediaElement":
                                            case "MediaElementWebAudio":
                                                return this.loadMediaElement(
                                                    url,
                                                    peaks,
                                                    preload,
                                                    duration
                                                );
                                        }
                                    },

                                    /**
                                     * Loads audio using Web Audio buffer backend.
                                     *
                                     * @private
                                     * @emits WaveSurfer#waveform-ready
                                     * @param {string} url URL of audio file
                                     * @param {number[]|Number.<Array[]>} peaks Peaks data
                                     * @param {?number} duration Optional duration of audio file
                                     * @returns {void}
                                     */
                                },
                                {
                                    key: "loadBuffer",
                                    value: function loadBuffer(
                                        url,
                                        peaks,
                                        duration
                                    ) {
                                        var _this11 = this;
                                        var load = function load(action) {
                                            if (action) {
                                                _this11.tmpEvents.push(
                                                    _this11.once(
                                                        "ready",
                                                        action
                                                    )
                                                );
                                            }
                                            return _this11.getArrayBuffer(
                                                url,
                                                function (data) {
                                                    return _this11.loadArrayBuffer(
                                                        data
                                                    );
                                                }
                                            );
                                        };
                                        if (peaks) {
                                            this.backend.setPeaks(
                                                peaks,
                                                duration
                                            );
                                            this.drawBuffer();
                                            this.fireEvent("waveform-ready");
                                            this.tmpEvents.push(
                                                this.once("interaction", load)
                                            );
                                        } else {
                                            return load();
                                        }
                                    },

                                    /**
                                     * Either create a media element, or load an existing media element.
                                     *
                                     * @private
                                     * @emits WaveSurfer#waveform-ready
                                     * @param {string|HTMLMediaElement} urlOrElt Either a path to a media file, or an
                                     * existing HTML5 Audio/Video Element
                                     * @param {number[]|Number.<Array[]>} peaks Array of peaks. Required to bypass web audio
                                     * dependency
                                     * @param {?boolean} preload Set to true if the preload attribute of the
                                     * audio element should be enabled
                                     * @param {?number} duration Optional duration of audio file
                                     */
                                },
                                {
                                    key: "loadMediaElement",
                                    value: function loadMediaElement(
                                        urlOrElt,
                                        peaks,
                                        preload,
                                        duration
                                    ) {
                                        var _this12 = this;
                                        var url = urlOrElt;
                                        if (typeof urlOrElt === "string") {
                                            this.backend.load(
                                                url,
                                                this.mediaContainer,
                                                peaks,
                                                preload
                                            );
                                        } else {
                                            var elt = urlOrElt;
                                            this.backend.loadElt(elt, peaks);

                                            // If peaks are not provided,
                                            // url = element.src so we can get peaks with web audio
                                            url = elt.src;
                                        }
                                        this.tmpEvents.push(
                                            this.backend.once(
                                                "canplay",
                                                function () {
                                                    // ignore when backend was already destroyed
                                                    if (
                                                        !_this12.backend
                                                            .destroyed
                                                    ) {
                                                        _this12.drawBuffer();
                                                        _this12.isReady = true;
                                                        _this12.fireEvent(
                                                            "ready"
                                                        );
                                                    }
                                                }
                                            ),
                                            this.backend.once(
                                                "error",
                                                function (err) {
                                                    return _this12.fireEvent(
                                                        "error",
                                                        err
                                                    );
                                                }
                                            )
                                        );

                                        // If peaks are provided, render them and fire the `waveform-ready` event.
                                        if (peaks) {
                                            this.backend.setPeaks(
                                                peaks,
                                                duration
                                            );
                                            this.drawBuffer();
                                            this.fireEvent("waveform-ready");
                                        }

                                        // If no pre-decoded peaks are provided, or are provided with
                                        // forceDecode flag, attempt to download the audio file and decode it
                                        // with Web Audio.
                                        if (
                                            (!peaks ||
                                                this.params.forceDecode) &&
                                            this.backend.supportsWebAudio()
                                        ) {
                                            this.getArrayBuffer(
                                                url,
                                                function (arraybuffer) {
                                                    _this12.decodeArrayBuffer(
                                                        arraybuffer,
                                                        function (buffer) {
                                                            _this12.backend.buffer =
                                                                buffer;
                                                            _this12.backend.setPeaks(
                                                                null
                                                            );
                                                            _this12.drawBuffer();
                                                            _this12.fireEvent(
                                                                "waveform-ready"
                                                            );
                                                        }
                                                    );
                                                }
                                            );
                                        }
                                    },

                                    /**
                                     * Decode an array buffer and pass data to a callback
                                     *
                                     * @private
                                     * @param {Object} arraybuffer The array buffer to decode
                                     * @param {function} callback The function to call on complete
                                     */
                                },
                                {
                                    key: "decodeArrayBuffer",
                                    value: function decodeArrayBuffer(
                                        arraybuffer,
                                        callback
                                    ) {
                                        var _this13 = this;
                                        if (!this.isDestroyed) {
                                            this.arraybuffer = arraybuffer;
                                            this.backend.decodeArrayBuffer(
                                                arraybuffer,
                                                function (data) {
                                                    // Only use the decoded data if we haven't been destroyed or
                                                    // another decode started in the meantime
                                                    if (
                                                        !_this13.isDestroyed &&
                                                        _this13.arraybuffer ==
                                                            arraybuffer
                                                    ) {
                                                        callback(data);
                                                        _this13.arraybuffer =
                                                            null;
                                                    }
                                                },
                                                function () {
                                                    return _this13.fireEvent(
                                                        "error",
                                                        "Error decoding audiobuffer"
                                                    );
                                                }
                                            );
                                        }
                                    },

                                    /**
                                     * Load an array buffer using fetch and pass the result to a callback
                                     *
                                     * @param {string} url The URL of the file object
                                     * @param {function} callback The function to call on complete
                                     * @returns {util.fetchFile} fetch call
                                     * @private
                                     */
                                },
                                {
                                    key: "getArrayBuffer",
                                    value: function getArrayBuffer(
                                        url,
                                        callback
                                    ) {
                                        var _this14 = this;
                                        var options = Object.assign(
                                            {
                                                url: url,
                                                responseType: "arraybuffer",
                                            },
                                            this.params.xhr
                                        );
                                        var request = util.fetchFile(options);
                                        this.currentRequest = request;
                                        this.tmpEvents.push(
                                            request.on(
                                                "progress",
                                                function (e) {
                                                    _this14.onProgress(e);
                                                }
                                            ),
                                            request.on(
                                                "success",
                                                function (data) {
                                                    callback(data);
                                                    _this14.currentRequest =
                                                        null;
                                                }
                                            ),
                                            request.on("error", function (e) {
                                                _this14.fireEvent("error", e);
                                                _this14.currentRequest = null;
                                            })
                                        );
                                        return request;
                                    },

                                    /**
                                     * Called while the audio file is loading
                                     *
                                     * @private
                                     * @param {Event} e Progress event
                                     * @emits WaveSurfer#loading
                                     */
                                },
                                {
                                    key: "onProgress",
                                    value: function onProgress(e) {
                                        var percentComplete;
                                        if (e.lengthComputable) {
                                            percentComplete =
                                                e.loaded / e.total;
                                        } else {
                                            // Approximate progress with an asymptotic
                                            // function, and assume downloads in the 1-3 MB range.
                                            percentComplete =
                                                e.loaded / (e.loaded + 1000000);
                                        }
                                        this.fireEvent(
                                            "loading",
                                            Math.round(percentComplete * 100),
                                            e.target
                                        );
                                    },

                                    /**
                                     * Exports PCM data into a JSON array and optionally opens in a new window
                                     * as valid JSON Blob instance.
                                     *
                                     * @param {number} length=1024 The scale in which to export the peaks
                                     * @param {number} accuracy=10000
                                     * @param {?boolean} noWindow Set to true to disable opening a new
                                     * window with the JSON
                                     * @param {number} start Start index
                                     * @param {number} end End index
                                     * @return {Promise} Promise that resolves with array of peaks
                                     */
                                },
                                {
                                    key: "exportPCM",
                                    value: function exportPCM(
                                        length,
                                        accuracy,
                                        noWindow,
                                        start,
                                        end
                                    ) {
                                        length = length || 1024;
                                        start = start || 0;
                                        accuracy = accuracy || 10000;
                                        noWindow = noWindow || false;
                                        var peaks = this.backend.getPeaks(
                                            length,
                                            start,
                                            end
                                        );
                                        var arr = [].map.call(
                                            peaks,
                                            function (val) {
                                                return (
                                                    Math.round(val * accuracy) /
                                                    accuracy
                                                );
                                            }
                                        );
                                        return new Promise(function (
                                            resolve,
                                            reject
                                        ) {
                                            if (!noWindow) {
                                                var blobJSON = new Blob(
                                                    [JSON.stringify(arr)],
                                                    {
                                                        type: "application/json;charset=utf-8",
                                                    }
                                                );
                                                var objURL =
                                                    URL.createObjectURL(
                                                        blobJSON
                                                    );
                                                window.open(objURL);
                                                URL.revokeObjectURL(objURL);
                                            }
                                            resolve(arr);
                                        });
                                    },

                                    /**
                                     * Save waveform image as data URI.
                                     *
                                     * The default format is `image/png`. Other supported types are
                                     * `image/jpeg` and `image/webp`.
                                     *
                                     * @param {string} format='image/png' A string indicating the image format.
                                     * The default format type is `image/png`.
                                     * @param {number} quality=1 A number between 0 and 1 indicating the image
                                     * quality to use for image formats that use lossy compression such as
                                     * `image/jpeg` and `image/webp`.
                                     * @param {string} type Image data type to return. Either `dataURL` (default)
                                     * or `blob`.
                                     * @return {string|string[]|Promise} When using `dataURL` type this returns
                                     * a single data URL or an array of data URLs, one for each canvas. When using
                                     * `blob` type this returns a `Promise` resolving with an array of `Blob`
                                     * instances, one for each canvas.
                                     */
                                },
                                {
                                    key: "exportImage",
                                    value: function exportImage(
                                        format,
                                        quality,
                                        type
                                    ) {
                                        if (!format) {
                                            format = "image/png";
                                        }
                                        if (!quality) {
                                            quality = 1;
                                        }
                                        if (!type) {
                                            type = "dataURL";
                                        }
                                        return this.drawer.getImage(
                                            format,
                                            quality,
                                            type
                                        );
                                    },

                                    /**
                                     * Cancel any fetch request currently in progress
                                     */
                                },
                                {
                                    key: "cancelAjax",
                                    value: function cancelAjax() {
                                        if (
                                            this.currentRequest &&
                                            this.currentRequest.controller
                                        ) {
                                            // If the current request has a ProgressHandler, then its ReadableStream might need to be cancelled too
                                            // See: Wavesurfer issue #2042
                                            // See Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
                                            if (this.currentRequest._reader) {
                                                // Ignoring exceptions thrown by call to cancel()
                                                this.currentRequest._reader
                                                    .cancel()
                                                    .catch(function (err) {});
                                            }
                                            this.currentRequest.controller.abort();
                                            this.currentRequest = null;
                                        }
                                    },

                                    /**
                                     * @private
                                     */
                                },
                                {
                                    key: "clearTmpEvents",
                                    value: function clearTmpEvents() {
                                        this.tmpEvents.forEach(function (e) {
                                            return e.un();
                                        });
                                    },

                                    /**
                                     * Display empty waveform.
                                     */
                                },
                                {
                                    key: "empty",
                                    value: function empty() {
                                        if (!this.backend.isPaused()) {
                                            this.stop();
                                            this.backend.disconnectSource();
                                        }
                                        this.isReady = false;
                                        this.cancelAjax();
                                        this.clearTmpEvents();

                                        // empty drawer
                                        this.drawer.progress(0);
                                        this.drawer.setWidth(0);
                                        this.drawer.drawPeaks(
                                            {
                                                length: this.drawer.getWidth(),
                                            },
                                            0
                                        );
                                    },

                                    /**
                                     * Remove events, elements and disconnect WebAudio nodes.
                                     *
                                     * @emits WaveSurfer#destroy
                                     */
                                },
                                {
                                    key: "destroy",
                                    value: function destroy() {
                                        this.destroyAllPlugins();
                                        this.fireEvent("destroy");
                                        this.cancelAjax();
                                        this.clearTmpEvents();
                                        this.unAll();
                                        if (this.params.responsive !== false) {
                                            window.removeEventListener(
                                                "resize",
                                                this._onResize,
                                                true
                                            );
                                            window.removeEventListener(
                                                "orientationchange",
                                                this._onResize,
                                                true
                                            );
                                        }
                                        if (this.backend) {
                                            this.backend.destroy();
                                            // clears memory usage
                                            this.backend = null;
                                        }
                                        if (this.drawer) {
                                            this.drawer.destroy();
                                        }
                                        this.isDestroyed = true;
                                        this.isReady = false;
                                        this.arraybuffer = null;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "create",
                                    /** @private */

                                    value:
                                        /** @private */

                                        /**
                                         * Instantiate this class, call its `init` function and returns it
                                         *
                                         * @param {WavesurferParams} params The wavesurfer parameters
                                         * @return {Object} WaveSurfer instance
                                         * @example const wavesurfer = WaveSurfer.create(params);
                                         */
                                        function create(params) {
                                            var wavesurfer = new WaveSurfer(
                                                params
                                            );
                                            return wavesurfer.init();
                                        },

                                    /**
                                     * The library version number is available as a static property of the
                                     * WaveSurfer class
                                     *
                                     * @type {String}
                                     * @example
                                     * console.log('Using wavesurfer.js ' + WaveSurfer.VERSION);
                                     */
                                },
                            ]
                        );
                        return WaveSurfer;
                    })(util.Observer);
                    exports["default"] = WaveSurfer;
                    _defineProperty(WaveSurfer, "VERSION", "6.4.0");
                    _defineProperty(WaveSurfer, "util", util);
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./src/webaudio.js":
                /*!*************************!*\
  !*** ./src/webaudio.js ***!
  \*************************/
                /***/ (module, exports, __webpack_require__) => {
                    "use strict";

                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        return (
                            (_typeof =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (obj) {
                                          return typeof obj;
                                      }
                                    : function (obj) {
                                          return obj &&
                                              "function" == typeof Symbol &&
                                              obj.constructor === Symbol &&
                                              obj !== Symbol.prototype
                                              ? "symbol"
                                              : typeof obj;
                                      }),
                            _typeof(obj)
                        );
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: true,
                    });
                    exports["default"] = void 0;
                    var util = _interopRequireWildcard(
                        __webpack_require__(/*! ./util */ "./src/util/index.js")
                    );
                    function _getRequireWildcardCache(nodeInterop) {
                        if (typeof WeakMap !== "function") return null;
                        var cacheBabelInterop = new WeakMap();
                        var cacheNodeInterop = new WeakMap();
                        return (_getRequireWildcardCache =
                            function _getRequireWildcardCache(nodeInterop) {
                                return nodeInterop
                                    ? cacheNodeInterop
                                    : cacheBabelInterop;
                            })(nodeInterop);
                    }
                    function _interopRequireWildcard(obj, nodeInterop) {
                        if (!nodeInterop && obj && obj.__esModule) {
                            return obj;
                        }
                        if (
                            obj === null ||
                            (_typeof(obj) !== "object" &&
                                typeof obj !== "function")
                        ) {
                            return { default: obj };
                        }
                        var cache = _getRequireWildcardCache(nodeInterop);
                        if (cache && cache.has(obj)) {
                            return cache.get(obj);
                        }
                        var newObj = {};
                        var hasPropertyDescriptor =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor;
                        for (var key in obj) {
                            if (
                                key !== "default" &&
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc = hasPropertyDescriptor
                                    ? Object.getOwnPropertyDescriptor(obj, key)
                                    : null;
                                if (desc && (desc.get || desc.set)) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                        newObj.default = obj;
                        if (cache) {
                            cache.set(obj, newObj);
                        }
                        return newObj;
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable =
                                descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(
                                target,
                                descriptor.key,
                                descriptor
                            );
                        }
                    }
                    function _createClass(
                        Constructor,
                        protoProps,
                        staticProps
                    ) {
                        if (protoProps)
                            _defineProperties(
                                Constructor.prototype,
                                protoProps
                            );
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false,
                        });
                        return Constructor;
                    }
                    function _inherits(subClass, superClass) {
                        if (
                            typeof superClass !== "function" &&
                            superClass !== null
                        ) {
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        }
                        subClass.prototype = Object.create(
                            superClass && superClass.prototype,
                            {
                                constructor: {
                                    value: subClass,
                                    writable: true,
                                    configurable: true,
                                },
                            }
                        );
                        Object.defineProperty(subClass, "prototype", {
                            writable: false,
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function _setPrototypeOf(o, p) {
                                  o.__proto__ = p;
                                  return o;
                              };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct =
                            _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived),
                                result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget =
                                    _getPrototypeOf(this).constructor;
                                result = Reflect.construct(
                                    Super,
                                    arguments,
                                    NewTarget
                                );
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (
                            call &&
                            (_typeof(call) === "object" ||
                                typeof call === "function")
                        ) {
                            return call;
                        } else if (call !== void 0) {
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (
                            typeof Reflect === "undefined" ||
                            !Reflect.construct
                        )
                            return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function _getPrototypeOf(o) {
                                  return (
                                      o.__proto__ || Object.getPrototypeOf(o)
                                  );
                              };
                        return _getPrototypeOf(o);
                    }
                    function _defineProperty(obj, key, value) {
                        if (key in obj) {
                            Object.defineProperty(obj, key, {
                                value: value,
                                enumerable: true,
                                configurable: true,
                                writable: true,
                            });
                        } else {
                            obj[key] = value;
                        }
                        return obj;
                    }
                    // using constants to prevent someone writing the string wrong
                    var PLAYING = "playing";
                    var PAUSED = "paused";
                    var FINISHED = "finished";

                    /**
                     * WebAudio backend
                     *
                     * @extends {Observer}
                     */
                    var WebAudio = /*#__PURE__*/ (function (_util$Observer) {
                        _inherits(WebAudio, _util$Observer);
                        var _super = _createSuper(WebAudio);
                        /**
                         * Construct the backend
                         *
                         * @param {WavesurferParams} params Wavesurfer parameters
                         */
                        function WebAudio(params) {
                            var _defineProperty2, _this$states;
                            var _this;
                            _classCallCheck(this, WebAudio);
                            _this = _super.call(this);
                            /** @private */
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "audioContext",
                                null
                            );
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "offlineAudioContext",
                                null
                            );
                            _defineProperty(
                                _assertThisInitialized(_this),
                                "stateBehaviors",
                                ((_defineProperty2 = {}),
                                _defineProperty(_defineProperty2, PLAYING, {
                                    init: function init() {
                                        this.addOnAudioProcess();
                                    },
                                    getPlayedPercents:
                                        function getPlayedPercents() {
                                            var duration = this.getDuration();
                                            return (
                                                this.getCurrentTime() /
                                                    duration || 0
                                            );
                                        },
                                    getCurrentTime: function getCurrentTime() {
                                        return (
                                            this.startPosition +
                                            this.getPlayedTime()
                                        );
                                    },
                                }),
                                _defineProperty(_defineProperty2, PAUSED, {
                                    init: function init() {
                                        this.removeOnAudioProcess();
                                    },
                                    getPlayedPercents:
                                        function getPlayedPercents() {
                                            var duration = this.getDuration();
                                            return (
                                                this.getCurrentTime() /
                                                    duration || 0
                                            );
                                        },
                                    getCurrentTime: function getCurrentTime() {
                                        return this.startPosition;
                                    },
                                }),
                                _defineProperty(_defineProperty2, FINISHED, {
                                    init: function init() {
                                        this.removeOnAudioProcess();
                                        this.fireEvent("finish");
                                    },
                                    getPlayedPercents:
                                        function getPlayedPercents() {
                                            return 1;
                                        },
                                    getCurrentTime: function getCurrentTime() {
                                        return this.getDuration();
                                    },
                                }),
                                _defineProperty2)
                            );
                            _this.params = params;
                            /** ac: Audio Context instance */
                            _this.ac =
                                params.audioContext ||
                                (_this.supportsWebAudio()
                                    ? _this.getAudioContext()
                                    : {});
                            /**@private */
                            _this.lastPlay = _this.ac.currentTime;
                            /** @private */
                            _this.startPosition = 0;
                            /** @private */
                            _this.scheduledPause = null;
                            /** @private */
                            _this.states =
                                ((_this$states = {}),
                                _defineProperty(
                                    _this$states,
                                    PLAYING,
                                    Object.create(_this.stateBehaviors[PLAYING])
                                ),
                                _defineProperty(
                                    _this$states,
                                    PAUSED,
                                    Object.create(_this.stateBehaviors[PAUSED])
                                ),
                                _defineProperty(
                                    _this$states,
                                    FINISHED,
                                    Object.create(
                                        _this.stateBehaviors[FINISHED]
                                    )
                                ),
                                _this$states);
                            /** @private */
                            _this.buffer = null;
                            /** @private */
                            _this.filters = [];
                            /** gainNode: allows to control audio volume */
                            _this.gainNode = null;
                            /** @private */
                            _this.mergedPeaks = null;
                            /** @private */
                            _this.offlineAc = null;
                            /** @private */
                            _this.peaks = null;
                            /** @private */
                            _this.playbackRate = 1;
                            /** analyser: provides audio analysis information */
                            _this.analyser = null;
                            /** scriptNode: allows processing audio */
                            _this.scriptNode = null;
                            /** @private */
                            _this.source = null;
                            /** @private */
                            _this.splitPeaks = [];
                            /** @private */
                            _this.state = null;
                            /** @private */
                            _this.explicitDuration = params.duration;
                            /** @private */
                            _this.sinkStreamDestination = null;
                            /** @private */
                            _this.sinkAudioElement = null;
                            /**
                             * Boolean indicating if the backend was destroyed.
                             */
                            _this.destroyed = false;
                            return _this;
                        }

                        /**
                         * Initialise the backend, called in `wavesurfer.createBackend()`
                         */
                        _createClass(WebAudio, [
                            {
                                key: "supportsWebAudio",
                                /** scriptBufferSize: size of the processing buffer */

                                value:
                                    /** audioContext: allows to process audio with WebAudio API */

                                    /** @private */

                                    /** @private */

                                    /**
                                     * Does the browser support this backend
                                     *
                                     * @return {boolean} Whether or not this browser supports this backend
                                     */
                                    function supportsWebAudio() {
                                        return !!(
                                            window.AudioContext ||
                                            window.webkitAudioContext
                                        );
                                    },

                                /**
                                 * Get the audio context used by this backend or create one
                                 *
                                 * @return {AudioContext} Existing audio context, or creates a new one
                                 */
                            },
                            {
                                key: "getAudioContext",
                                value: function getAudioContext() {
                                    if (!window.WaveSurferAudioContext) {
                                        window.WaveSurferAudioContext =
                                            new (window.AudioContext ||
                                                window.webkitAudioContext)();
                                    }
                                    return window.WaveSurferAudioContext;
                                },

                                /**
                                 * Get the offline audio context used by this backend or create one
                                 *
                                 * @param {number} sampleRate The sample rate to use
                                 * @return {OfflineAudioContext} Existing offline audio context, or creates
                                 * a new one
                                 */
                            },
                            {
                                key: "getOfflineAudioContext",
                                value: function getOfflineAudioContext(
                                    sampleRate
                                ) {
                                    if (!window.WaveSurferOfflineAudioContext) {
                                        window.WaveSurferOfflineAudioContext =
                                            new (window.OfflineAudioContext ||
                                                window.webkitOfflineAudioContext)(
                                                1,
                                                2,
                                                sampleRate
                                            );
                                    }
                                    return window.WaveSurferOfflineAudioContext;
                                },
                            },
                            {
                                key: "init",
                                value: function init() {
                                    this.createVolumeNode();
                                    this.createScriptNode();
                                    this.createAnalyserNode();
                                    this.setState(PAUSED);
                                    this.setPlaybackRate(this.params.audioRate);
                                    this.setLength(0);
                                },

                                /** @private */
                            },
                            {
                                key: "disconnectFilters",
                                value: function disconnectFilters() {
                                    if (this.filters) {
                                        this.filters.forEach(function (filter) {
                                            filter && filter.disconnect();
                                        });
                                        this.filters = null;
                                        // Reconnect direct path
                                        this.analyser.connect(this.gainNode);
                                    }
                                },

                                /**
                                 * @private
                                 *
                                 * @param {string} state The new state
                                 */
                            },
                            {
                                key: "setState",
                                value: function setState(state) {
                                    if (this.state !== this.states[state]) {
                                        this.state = this.states[state];
                                        this.state.init.call(this);
                                    }
                                },

                                /**
                                 * Unpacked `setFilters()`
                                 *
                                 * @param {...AudioNode} filters One or more filters to set
                                 */
                            },
                            {
                                key: "setFilter",
                                value: function setFilter() {
                                    for (
                                        var _len = arguments.length,
                                            filters = new Array(_len),
                                            _key = 0;
                                        _key < _len;
                                        _key++
                                    ) {
                                        filters[_key] = arguments[_key];
                                    }
                                    this.setFilters(filters);
                                },

                                /**
                                 * Insert custom Web Audio nodes into the graph
                                 *
                                 * @param {AudioNode[]} filters Packed filters array
                                 * @example
                                 * const lowpass = wavesurfer.backend.ac.createBiquadFilter();
                                 * wavesurfer.backend.setFilter(lowpass);
                                 */
                            },
                            {
                                key: "setFilters",
                                value: function setFilters(filters) {
                                    // Remove existing filters
                                    this.disconnectFilters();

                                    // Insert filters if filter array not empty
                                    if (filters && filters.length) {
                                        this.filters = filters;

                                        // Disconnect direct path before inserting filters
                                        this.analyser.disconnect();

                                        // Connect each filter in turn
                                        filters
                                            .reduce(function (prev, curr) {
                                                prev.connect(curr);
                                                return curr;
                                            }, this.analyser)
                                            .connect(this.gainNode);
                                    }
                                },
                                /** Create ScriptProcessorNode to process audio */
                            },
                            {
                                key: "createScriptNode",
                                value: function createScriptNode() {
                                    if (this.params.audioScriptProcessor) {
                                        this.scriptNode =
                                            this.params.audioScriptProcessor;
                                    } else {
                                        if (this.ac.createScriptProcessor) {
                                            this.scriptNode =
                                                this.ac.createScriptProcessor(
                                                    WebAudio.scriptBufferSize
                                                );
                                        } else {
                                            this.scriptNode =
                                                this.ac.createJavaScriptNode(
                                                    WebAudio.scriptBufferSize
                                                );
                                        }
                                    }
                                    this.scriptNode.connect(
                                        this.ac.destination
                                    );
                                },

                                /** @private */
                            },
                            {
                                key: "addOnAudioProcess",
                                value: function addOnAudioProcess() {
                                    var _this2 = this;
                                    this.scriptNode.onaudioprocess =
                                        function () {
                                            var time = _this2.getCurrentTime();
                                            if (time >= _this2.getDuration()) {
                                                _this2.setState(FINISHED);
                                                _this2.fireEvent("pause");
                                            } else if (
                                                time >= _this2.scheduledPause
                                            ) {
                                                _this2.pause();
                                            } else if (
                                                _this2.state ===
                                                _this2.states[PLAYING]
                                            ) {
                                                _this2.fireEvent(
                                                    "audioprocess",
                                                    time
                                                );
                                            }
                                        };
                                },

                                /** @private */
                            },
                            {
                                key: "removeOnAudioProcess",
                                value: function removeOnAudioProcess() {
                                    this.scriptNode.onaudioprocess = null;
                                },
                                /** Create analyser node to perform audio analysis */
                            },
                            {
                                key: "createAnalyserNode",
                                value: function createAnalyserNode() {
                                    this.analyser = this.ac.createAnalyser();
                                    this.analyser.connect(this.gainNode);
                                },

                                /**
                                 * Create the gain node needed to control the playback volume.
                                 *
                                 */
                            },
                            {
                                key: "createVolumeNode",
                                value: function createVolumeNode() {
                                    // Create gain node using the AudioContext
                                    if (this.ac.createGain) {
                                        this.gainNode = this.ac.createGain();
                                    } else {
                                        this.gainNode =
                                            this.ac.createGainNode();
                                    }
                                    // Add the gain node to the graph
                                    this.gainNode.connect(this.ac.destination);
                                },

                                /**
                                 * Set the sink id for the media player
                                 *
                                 * @param {string} deviceId String value representing audio device id.
                                 * @returns {Promise} A Promise that resolves to `undefined` when there
                                 * are no errors.
                                 */
                            },
                            {
                                key: "setSinkId",
                                value: function setSinkId(deviceId) {
                                    if (deviceId) {
                                        /**
                                         * The webaudio API doesn't currently support setting the device
                                         * output. Here we create an HTMLAudioElement, connect the
                                         * webaudio stream to that element and setSinkId there.
                                         */
                                        if (!this.sinkAudioElement) {
                                            this.sinkAudioElement =
                                                new window.Audio();
                                            // autoplay is necessary since we're not invoking .play()
                                            this.sinkAudioElement.autoplay = true;
                                        }
                                        if (!this.sinkAudioElement.setSinkId) {
                                            return Promise.reject(
                                                new Error(
                                                    "setSinkId is not supported in your browser"
                                                )
                                            );
                                        }
                                        if (!this.sinkStreamDestination) {
                                            this.sinkStreamDestination =
                                                this.ac.createMediaStreamDestination();
                                        }
                                        this.gainNode.disconnect();
                                        this.gainNode.connect(
                                            this.sinkStreamDestination
                                        );
                                        this.sinkAudioElement.srcObject =
                                            this.sinkStreamDestination.stream;
                                        return this.sinkAudioElement.setSinkId(
                                            deviceId
                                        );
                                    } else {
                                        return Promise.reject(
                                            new Error(
                                                "Invalid deviceId: " + deviceId
                                            )
                                        );
                                    }
                                },

                                /**
                                 * Set the audio volume
                                 *
                                 * @param {number} value A floating point value between 0 and 1.
                                 */
                            },
                            {
                                key: "setVolume",
                                value: function setVolume(value) {
                                    this.gainNode.gain.setValueAtTime(
                                        value,
                                        this.ac.currentTime
                                    );
                                },

                                /**
                                 * Get the current volume
                                 *
                                 * @return {number} value A floating point value between 0 and 1.
                                 */
                            },
                            {
                                key: "getVolume",
                                value: function getVolume() {
                                    return this.gainNode.gain.value;
                                },

                                /**
                                 * Decode an array buffer and pass data to a callback
                                 *
                                 * @private
                                 * @param {ArrayBuffer} arraybuffer The array buffer to decode
                                 * @param {function} callback The function to call on complete.
                                 * @param {function} errback The function to call on error.
                                 */
                            },
                            {
                                key: "decodeArrayBuffer",
                                value: function decodeArrayBuffer(
                                    arraybuffer,
                                    callback,
                                    errback
                                ) {
                                    if (!this.offlineAc) {
                                        this.offlineAc =
                                            this.getOfflineAudioContext(
                                                this.ac && this.ac.sampleRate
                                                    ? this.ac.sampleRate
                                                    : 44100
                                            );
                                    }
                                    if ("webkitAudioContext" in window) {
                                        // Safari: no support for Promise-based decodeAudioData enabled
                                        // Enable it in Safari using the Experimental Features > Modern WebAudio API option
                                        this.offlineAc.decodeAudioData(
                                            arraybuffer,
                                            function (data) {
                                                return callback(data);
                                            },
                                            errback
                                        );
                                    } else {
                                        this.offlineAc
                                            .decodeAudioData(arraybuffer)
                                            .then(function (data) {
                                                return callback(data);
                                            })
                                            .catch(function (err) {
                                                return errback(err);
                                            });
                                    }
                                },

                                /**
                                 * Set pre-decoded peaks
                                 *
                                 * @param {number[]|Number.<Array[]>} peaks Peaks data
                                 * @param {?number} duration Explicit duration
                                 */
                            },
                            {
                                key: "setPeaks",
                                value: function setPeaks(peaks, duration) {
                                    if (duration != null) {
                                        this.explicitDuration = duration;
                                    }
                                    this.peaks = peaks;
                                },

                                /**
                                 * Set the rendered length (different from the length of the audio)
                                 *
                                 * @param {number} length The rendered length
                                 */
                            },
                            {
                                key: "setLength",
                                value: function setLength(length) {
                                    // No resize, we can preserve the cached peaks.
                                    if (
                                        this.mergedPeaks &&
                                        length ==
                                            2 * this.mergedPeaks.length - 1 + 2
                                    ) {
                                        return;
                                    }
                                    this.splitPeaks = [];
                                    this.mergedPeaks = [];
                                    // Set the last element of the sparse array so the peak arrays are
                                    // appropriately sized for other calculations.
                                    var channels = this.buffer
                                        ? this.buffer.numberOfChannels
                                        : 1;
                                    var c;
                                    for (c = 0; c < channels; c++) {
                                        this.splitPeaks[c] = [];
                                        this.splitPeaks[c][
                                            2 * (length - 1)
                                        ] = 0;
                                        this.splitPeaks[c][
                                            2 * (length - 1) + 1
                                        ] = 0;
                                    }
                                    this.mergedPeaks[2 * (length - 1)] = 0;
                                    this.mergedPeaks[2 * (length - 1) + 1] = 0;
                                },

                                /**
                                 * Compute the max and min value of the waveform when broken into <length> subranges.
                                 *
                                 * @param {number} length How many subranges to break the waveform into.
                                 * @param {number} first First sample in the required range.
                                 * @param {number} last Last sample in the required range.
                                 * @return {number[]|Number.<Array[]>} Array of 2*<length> peaks or array of arrays of
                                 * peaks consisting of (max, min) values for each subrange.
                                 */
                            },
                            {
                                key: "getPeaks",
                                value: function getPeaks(length, first, last) {
                                    if (this.peaks) {
                                        return this.peaks;
                                    }
                                    if (!this.buffer) {
                                        return [];
                                    }
                                    first = first || 0;
                                    last = last || length - 1;
                                    this.setLength(length);
                                    if (!this.buffer) {
                                        return this.params.splitChannels
                                            ? this.splitPeaks
                                            : this.mergedPeaks;
                                    }

                                    /**
                                     * The following snippet fixes a buffering data issue on the Safari
                                     * browser which returned undefined It creates the missing buffer based
                                     * on 1 channel, 4096 samples and the sampleRate from the current
                                     * webaudio context 4096 samples seemed to be the best fit for rendering
                                     * will review this code once a stable version of Safari TP is out
                                     */
                                    if (!this.buffer.length) {
                                        var newBuffer = this.createBuffer(
                                            1,
                                            4096,
                                            this.sampleRate
                                        );
                                        this.buffer = newBuffer.buffer;
                                    }
                                    var sampleSize =
                                        this.buffer.length / length;
                                    var sampleStep = ~~(sampleSize / 10) || 1;
                                    var channels = this.buffer.numberOfChannels;
                                    var c;
                                    for (c = 0; c < channels; c++) {
                                        var peaks = this.splitPeaks[c];
                                        var chan =
                                            this.buffer.getChannelData(c);
                                        var i = void 0;
                                        for (i = first; i <= last; i++) {
                                            var start = ~~(i * sampleSize);
                                            var end = ~~(start + sampleSize);
                                            /**
                                             * Initialize the max and min to the first sample of this
                                             * subrange, so that even if the samples are entirely
                                             * on one side of zero, we still return the true max and
                                             * min values in the subrange.
                                             */
                                            var min = chan[start];
                                            var max = min;
                                            var j = void 0;
                                            for (
                                                j = start;
                                                j < end;
                                                j += sampleStep
                                            ) {
                                                var value = chan[j];
                                                if (value > max) {
                                                    max = value;
                                                }
                                                if (value < min) {
                                                    min = value;
                                                }
                                            }
                                            peaks[2 * i] = max;
                                            peaks[2 * i + 1] = min;
                                            if (
                                                c == 0 ||
                                                max > this.mergedPeaks[2 * i]
                                            ) {
                                                this.mergedPeaks[2 * i] = max;
                                            }
                                            if (
                                                c == 0 ||
                                                min <
                                                    this.mergedPeaks[2 * i + 1]
                                            ) {
                                                this.mergedPeaks[2 * i + 1] =
                                                    min;
                                            }
                                        }
                                    }
                                    return this.params.splitChannels
                                        ? this.splitPeaks
                                        : this.mergedPeaks;
                                },

                                /**
                                 * Get the position from 0 to 1
                                 *
                                 * @return {number} Position
                                 */
                            },
                            {
                                key: "getPlayedPercents",
                                value: function getPlayedPercents() {
                                    return this.state.getPlayedPercents.call(
                                        this
                                    );
                                },

                                /** @private */
                            },
                            {
                                key: "disconnectSource",
                                value: function disconnectSource() {
                                    if (this.source) {
                                        this.source.disconnect();
                                    }
                                },
                                /**
                                 * Destroy all references with WebAudio, disconnecting audio nodes and closing Audio Context
                                 */
                            },
                            {
                                key: "destroyWebAudio",
                                value: function destroyWebAudio() {
                                    this.disconnectFilters();
                                    this.disconnectSource();
                                    this.gainNode.disconnect();
                                    this.scriptNode.disconnect();
                                    this.analyser.disconnect();

                                    // close the audioContext if closeAudioContext option is set to true
                                    if (this.params.closeAudioContext) {
                                        // check if browser supports AudioContext.close()
                                        if (
                                            typeof this.ac.close ===
                                                "function" &&
                                            this.ac.state != "closed"
                                        ) {
                                            this.ac.close();
                                        }
                                        // clear the reference to the audiocontext
                                        this.ac = null;
                                        // clear the actual audiocontext, either passed as param or the
                                        // global singleton
                                        if (!this.params.audioContext) {
                                            window.WaveSurferAudioContext =
                                                null;
                                        } else {
                                            this.params.audioContext = null;
                                        }
                                        // clear the offlineAudioContext
                                        window.WaveSurferOfflineAudioContext =
                                            null;
                                    }

                                    // disconnect resources used by setSinkId
                                    if (this.sinkStreamDestination) {
                                        this.sinkAudioElement.pause();
                                        this.sinkAudioElement.srcObject = null;
                                        this.sinkStreamDestination.disconnect();
                                        this.sinkStreamDestination = null;
                                    }
                                },
                                /**
                                 * This is called when wavesurfer is destroyed
                                 */
                            },
                            {
                                key: "destroy",
                                value: function destroy() {
                                    if (!this.isPaused()) {
                                        this.pause();
                                    }
                                    this.unAll();
                                    this.buffer = null;
                                    this.destroyed = true;
                                    this.destroyWebAudio();
                                },

                                /**
                                 * Loaded a decoded audio buffer
                                 *
                                 * @param {Object} buffer Decoded audio buffer to load
                                 */
                            },
                            {
                                key: "load",
                                value: function load(buffer) {
                                    this.startPosition = 0;
                                    this.lastPlay = this.ac.currentTime;
                                    this.buffer = buffer;
                                    this.createSource();
                                },

                                /** @private */
                            },
                            {
                                key: "createSource",
                                value: function createSource() {
                                    this.disconnectSource();
                                    this.source = this.ac.createBufferSource();

                                    // adjust for old browsers
                                    this.source.start =
                                        this.source.start ||
                                        this.source.noteGrainOn;
                                    this.source.stop =
                                        this.source.stop || this.source.noteOff;
                                    this.setPlaybackRate(this.playbackRate);
                                    this.source.buffer = this.buffer;
                                    this.source.connect(this.analyser);
                                },

                                /**
                                 * @private
                                 *
                                 * some browsers require an explicit call to #resume before they will play back audio
                                 */
                            },
                            {
                                key: "resumeAudioContext",
                                value: function resumeAudioContext() {
                                    if (this.ac.state == "suspended") {
                                        this.ac.resume && this.ac.resume();
                                    }
                                },

                                /**
                                 * Used by `wavesurfer.isPlaying()` and `wavesurfer.playPause()`
                                 *
                                 * @return {boolean} Whether or not this backend is currently paused
                                 */
                            },
                            {
                                key: "isPaused",
                                value: function isPaused() {
                                    return this.state !== this.states[PLAYING];
                                },

                                /**
                                 * Used by `wavesurfer.getDuration()`
                                 *
                                 * @return {number} Duration of loaded buffer
                                 */
                            },
                            {
                                key: "getDuration",
                                value: function getDuration() {
                                    if (this.explicitDuration) {
                                        return this.explicitDuration;
                                    }
                                    if (!this.buffer) {
                                        return 0;
                                    }
                                    return this.buffer.duration;
                                },

                                /**
                                 * Used by `wavesurfer.seekTo()`
                                 *
                                 * @param {number} start Position to start at in seconds
                                 * @param {number} end Position to end at in seconds
                                 * @return {{start: number, end: number}} Object containing start and end
                                 * positions
                                 */
                            },
                            {
                                key: "seekTo",
                                value: function seekTo(start, end) {
                                    if (!this.buffer) {
                                        return;
                                    }
                                    this.scheduledPause = null;
                                    if (start == null) {
                                        start = this.getCurrentTime();
                                        if (start >= this.getDuration()) {
                                            start = 0;
                                        }
                                    }
                                    if (end == null) {
                                        end = this.getDuration();
                                    }
                                    this.startPosition = start;
                                    this.lastPlay = this.ac.currentTime;
                                    if (this.state === this.states[FINISHED]) {
                                        this.setState(PAUSED);
                                    }
                                    return {
                                        start: start,
                                        end: end,
                                    };
                                },

                                /**
                                 * Get the playback position in seconds
                                 *
                                 * @return {number} The playback position in seconds
                                 */
                            },
                            {
                                key: "getPlayedTime",
                                value: function getPlayedTime() {
                                    return (
                                        (this.ac.currentTime - this.lastPlay) *
                                        this.playbackRate
                                    );
                                },

                                /**
                                 * Plays the loaded audio region.
                                 *
                                 * @param {number} start Start offset in seconds, relative to the beginning
                                 * of a clip.
                                 * @param {number} end When to stop relative to the beginning of a clip.
                                 */
                            },
                            {
                                key: "play",
                                value: function play(start, end) {
                                    if (!this.buffer) {
                                        return;
                                    }

                                    // need to re-create source on each playback
                                    this.createSource();
                                    var adjustedTime = this.seekTo(start, end);
                                    start = adjustedTime.start;
                                    end = adjustedTime.end;
                                    this.scheduledPause = end;
                                    this.source.start(0, start);
                                    this.resumeAudioContext();
                                    this.setState(PLAYING);
                                    this.fireEvent("play");
                                },

                                /**
                                 * Pauses the loaded audio.
                                 */
                            },
                            {
                                key: "pause",
                                value: function pause() {
                                    this.scheduledPause = null;
                                    this.startPosition += this.getPlayedTime();
                                    try {
                                        this.source && this.source.stop(0);
                                    } catch (err) {
                                        // Calling stop can throw the following 2 errors:
                                        // - RangeError (The value specified for when is negative.)
                                        // - InvalidStateNode (The node has not been started by calling start().)
                                        // We can safely ignore both errors, because:
                                        // - The range is surely correct
                                        // - The node might not have been started yet, in which case we just want to carry on without causing any trouble.
                                    }
                                    this.setState(PAUSED);
                                    this.fireEvent("pause");
                                },

                                /**
                                 * Returns the current time in seconds relative to the audio-clip's
                                 * duration.
                                 *
                                 * @return {number} The current time in seconds
                                 */
                            },
                            {
                                key: "getCurrentTime",
                                value: function getCurrentTime() {
                                    return this.state.getCurrentTime.call(this);
                                },

                                /**
                                 * Returns the current playback rate. (0=no playback, 1=normal playback)
                                 *
                                 * @return {number} The current playback rate
                                 */
                            },
                            {
                                key: "getPlaybackRate",
                                value: function getPlaybackRate() {
                                    return this.playbackRate;
                                },

                                /**
                                 * Set the audio source playback rate.
                                 *
                                 * @param {number} value The playback rate to use
                                 */
                            },
                            {
                                key: "setPlaybackRate",
                                value: function setPlaybackRate(value) {
                                    this.playbackRate = value || 1;
                                    this.source &&
                                        this.source.playbackRate.setValueAtTime(
                                            this.playbackRate,
                                            this.ac.currentTime
                                        );
                                },

                                /**
                                 * Set a point in seconds for playback to stop at.
                                 *
                                 * @param {number} end Position to end at
                                 * @version 3.3.0
                                 */
                            },
                            {
                                key: "setPlayEnd",
                                value: function setPlayEnd(end) {
                                    this.scheduledPause = end;
                                },
                            },
                        ]);
                        return WebAudio;
                    })(util.Observer);
                    exports["default"] = WebAudio;
                    _defineProperty(WebAudio, "scriptBufferSize", 256);
                    module.exports = exports.default;

                    /***/
                },

            /***/ "./node_modules/debounce/index.js":
                /*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
                /***/ (module) => {
                    /**
                     * Returns a function, that, as long as it continues to be invoked, will not
                     * be triggered. The function will be called after it stops being called for
                     * N milliseconds. If `immediate` is passed, trigger the function on the
                     * leading edge, instead of the trailing. The function also has a property 'clear'
                     * that is a function which will clear the timer to prevent previously scheduled executions.
                     *
                     * @source underscore.js
                     * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
                     * @param {Function} function to wrap
                     * @param {Number} timeout in ms (`100`)
                     * @param {Boolean} whether to execute at the beginning (`false`)
                     * @api public
                     */
                    function debounce(func, wait, immediate) {
                        var timeout, args, context, timestamp, result;
                        if (null == wait) wait = 100;
                        function later() {
                            var last = Date.now() - timestamp;

                            if (last < wait && last >= 0) {
                                timeout = setTimeout(later, wait - last);
                            } else {
                                timeout = null;
                                if (!immediate) {
                                    result = func.apply(context, args);
                                    context = args = null;
                                }
                            }
                        }

                        var debounced = function () {
                            context = this;
                            args = arguments;
                            timestamp = Date.now();
                            var callNow = immediate && !timeout;
                            if (!timeout) timeout = setTimeout(later, wait);
                            if (callNow) {
                                result = func.apply(context, args);
                                context = args = null;
                            }

                            return result;
                        };

                        debounced.clear = function () {
                            if (timeout) {
                                clearTimeout(timeout);
                                timeout = null;
                            }
                        };

                        debounced.flush = function () {
                            if (timeout) {
                                result = func.apply(context, args);
                                context = args = null;

                                clearTimeout(timeout);
                                timeout = null;
                            }
                        };

                        return debounced;
                    }

                    // Adds compatibility for ES modules
                    debounce.debounce = debounce;

                    module.exports = debounce;

                    /***/
                },

            /******/
        };
        /************************************************************************/
        /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {},
                /******/
            });
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__
            );
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/
        }
        /******/
        /************************************************************************/
        /******/
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ // This entry module is referenced by other modules so it can't be inlined
        /******/ var __webpack_exports__ = __webpack_require__(
            "./src/wavesurfer.js"
        );
        /******/
        /******/ return __webpack_exports__;
        /******/
    })();
});
//# sourceMappingURL=wavesurfer.js.map


// MODULES
const portfolioSlider = new Swiper(".portfolio__slider", {
    direction: "horizontal",

    loop: true,

    navigation: {
        prevEl: ".portfolio__slider-prev",
        nextEl: ".portfolio__slider-next",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        911: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1401: {
            slidesPerView: 2.35,
            spaceBetween: 20,
        },
    },
});

const reviewsSlider = new Swiper(".reviews__slider", {
    direction: "horizontal",

    loop: true,

    navigation: {
        prevEl: ".reviews__slider-prev",
        nextEl: ".reviews__slider-next",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 2.1,
            spaceBetween: 16,
        },
        991: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        1401: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    },
});

(function () {
    const steps = document.querySelectorAll(".presentation__steps-item");
    const contents = document.querySelectorAll(".presentation__content");

    steps[0].classList.add("presentation__steps-item--active");
    contents[0].classList.add("presentation__content--active");

    steps.forEach((element) => {
        element.addEventListener("click", () => {
            steps.forEach((element) =>
                element.classList.remove("presentation__steps-item--active")
            );

            contents.forEach((content) => {
                if (
                    content.getAttribute("data-index") ===
                    element.getAttribute("data-index")
                ) {
                    contents.forEach((content) =>
                        content.classList.remove(
                            "presentation__content--active"
                        )
                    );
                    content.classList.add("presentation__content--active");
                }
            });

            element.classList.add("presentation__steps-item--active");
        });
    });
})();

const faq = document.querySelector(".faq");
const faqAccordions = faq.querySelectorAll(".accordion");

faqAccordions.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("accordion--active");
    });
});

(function () {
    const audio1 = WaveSurfer.create({
        container: "#card-audio-1",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audio2 = WaveSurfer.create({
        container: "#card-audio-2",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audio3 = WaveSurfer.create({
        container: "#card-audio-3",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audios = [audio1, audio2, audio3];

    document.querySelectorAll(".card-review").forEach((element, index) => {
        element.querySelector(".card-review__audio-play").addEventListener("click", () => {
            if (audios[index].isPlaying()) {
                element.querySelector(".card-review__audio-play").innerHTML = `
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5708 12.8575C17.2182 12.4691 17.2182 11.5309 16.5708 11.1425L9.5145 6.9087C8.84797 6.50878 8 6.9889 8 7.76619L8 16.2338C8 17.0111 8.84797 17.4912 9.51449 17.0913L16.5708 12.8575Z"
                    fill="white"
                />
            </svg>
                `;
                audios[index].pause();
            } else {
                element.querySelector(".card-review__audio-play").innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 18V6M16 18V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                `;
                audios[index].play();
            }

            element.classList.add("card-review--active");
        });
    });

    audio1.load("../sounds/audio_1.mp3");
    audio2.load("../sounds/corona.mp3");
    audio3.load("../sounds/stekla.mp3");
})();

(function () {
    const introBtnRequest = document.querySelector(".intro__btn-request");
    const stepThreeBtnConsult = document.querySelector(".card-helper__btn");
    const stepFiveBtnConsult = document.querySelector(".step__helper-btn");
    const badReviewBtn = document.querySelector(".calculation__review-btn-bad");

    const modalConsultV1 = document.getElementById("modal-consult-1");
    const modalConsultV2 = document.getElementById("modal-consult-2");
    const modalConsultV3 = document.getElementById("modal-consult-3");
    const modalPreview = document.querySelector(".modal-preview");

    introBtnRequest.addEventListener("click", () => {
        modalConsultV1.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV1.classList.remove("modal-consult--active");
                });
            });
    });

    stepThreeBtnConsult.addEventListener("click", () => {
        modalConsultV2.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV2.classList.remove("modal-consult--active");
                });
            });
    });

    stepFiveBtnConsult.addEventListener("click", () => {
        modalConsultV3.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV3.classList.remove("modal-consult--active");
                });
            });
    });

    badReviewBtn.addEventListener("click", () => {
        modalPreview.classList.add("modal-preview--active");

        document
            .querySelectorAll(".modal-preview__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalPreview.classList.remove("modal-preview--active");
                });
            });
    });

    window.onclick = (event) => {
        if (event.target == modalConsultV1) {
            modalConsultV1.classList.remove("modal-consult--active");
        }

        if (event.target == modalConsultV2) {
            modalConsultV2.classList.remove("modal-consult--active");
        }

        if (event.target == modalConsultV3) {
            modalConsultV3.classList.remove("modal-consult--active");
        }

        if (event.target == modalPreview) {
            modalPreview.classList.remove("modal-preview--active");
        }
    };
})();

(function () {
    const introScrollToNextSection = document.querySelector(".intro__btn-next");
    const popupScrollToPriceSection =
        document.querySelector(".popup-price__btn");

    popupScrollToPriceSection.addEventListener("click", () => {
        document
            .querySelector(".calculation")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    });

    introScrollToNextSection.addEventListener("click", () => {
        document
            .getElementById("about-1")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    });
})();

(function () {
    const cards = document.querySelectorAll(".step__cards-item");
    const popupPrice = document.querySelector(".popup-price__text-title");
    const calculationPrice = document.querySelector(".calculation__price-title");
    const calculationPromotionPrice = document.querySelector(".calculation__price-additional-title");

    let currentProductType = null;

    let price = 0;
    let promotionPrice = 0;

    // Steps
    const stepOne = document.getElementById("step-1");
    const stepTwo = document.getElementById("step-2");
    const stepThree = document.getElementById("step-3");
    const stepFour = document.getElementById("step-4");
    const stepFive = document.getElementById("step-5");

    cards.forEach((card) =>
        card.addEventListener("click", (event) => {
            let mainClass = card.classList[0];

            if (stepOne.contains(card)) {
                const stepTwoDescirption = stepTwo.querySelector(".step__description");
                const cardsDataToRender = JSON.parse(card.getAttribute("data-render"));
                const stepTwoCards = stepTwo.querySelectorAll(".step__cards-item");

                if (card.classList.contains("step__cards-item--active")) {
                    card.classList.remove(`${mainClass}--active`);
                    card.classList.remove("step__cards-item--active");

                    stepTwoCards.forEach((element) => {
                        element.classList.remove("step__cards-item--hidden");
                    });
                } else {
                    stepOne.querySelectorAll(".step__cards-item").forEach((element) => {
                        element.classList.remove(`${mainClass}--active`);
                        element.classList.remove("step__cards-item--active");
                    });

                    card.classList.add(`${mainClass}--active`);
                    card.classList.add("step__cards-item--active");

                    stepTwoCards.forEach((element) => element.classList.add("step__cards-item--hidden"));

                    stepTwoCards.forEach((element) => {
                        const cardInfo = JSON.parse(element.getAttribute("data-card-info"));

                        stepTwoDescirption.innerHTML = cardsDataToRender.title;

                        if (cardsDataToRender.cards.indexOf(cardInfo.name) !== -1) {
                            element.classList.remove("step__cards-item--hidden");
                        }
                    });
                }

                stepOne.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepTwo.contains(card)) {
                const seoPrice = stepFive
                    .querySelector('[data-card-name="seo"]')
                    .querySelector(".promotion-card__price-title");
                const promoPrice = stepFive
                    .querySelector('[data-card-name="promo"]')
                    .querySelector(".promotion-card__price-title");

                stepTwo.querySelectorAll(".step__cards-item").forEach((element) => {
                    element.classList.remove(`${mainClass}--active`);
                    element.classList.remove(`step__cards-item--active`);
                });

                card.classList.add(`${mainClass}--active`);
                card.classList.add(`step__cards-item--active`);

                currentProductType = JSON.parse(card.getAttribute("data-card-info")).name;

                switch (currentProductType) {
                    case "landing":
                        seoPrice.innerHTML = `от 10 000 ₽`;
                        promoPrice.innerHTML = `от 20 000 ₽`;
                        break;
                    case "visit":
                        seoPrice.innerHTML = `от 10 000 ₽`;
                        promoPrice.innerHTML = `от 20 000 ₽`;
                        break;
                    case "corporate":
                        seoPrice.innerHTML = `от 20 000 ₽`;
                        promoPrice.innerHTML = `от 25 000 ₽`;
                        break;
                    case "catalog":
                        seoPrice.innerHTML = `от 35 000 ₽`;
                        promoPrice.innerHTML = `от 30 000 ₽`;
                        break;
                    case "market":
                        seoPrice.innerHTML = `от 35 000 ₽`;
                        promoPrice.innerHTML = `от 35 000 ₽`;
                        break;
                    default:
                        break;
                }

                stepTwo.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepThree.contains(card)) {
                stepThree.querySelectorAll(".step__cards-item").forEach((element) => {
                    element.classList.remove(`${mainClass}--active`);
                    element.classList.remove(`step__cards-item--active`);
                });

                card.classList.add(`${mainClass}--active`);
                card.classList.add(`step__cards-item--active`);

                stepThree.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepFour.contains(card)) {
                card.classList.toggle(`${mainClass}--active`);
                card.classList.toggle("step__cards-item--active");
                
                stepFour.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepFive.contains(card)) {
                card.classList.toggle(`${mainClass}--active`);
                card.classList.toggle("step__cards-item--active");

                stepFive.querySelector(".step__note").classList.add("step__note--hidden");
                promotionPrice = 0;
            }
            
            document.querySelectorAll(".step__cards-item--active").forEach((element) => {
                price = 0;
                
                try {
                    if (element.getAttribute("data-card-name") === "seo") {
                        if (currentProductType === "landing") {
                            promotionPrice += 10_000;
                        }
                        if (currentProductType === "visit") {
                            promotionPrice += 10_000;
                        }
                        if (currentProductType === "corporate") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "catalog") {
                            promotionPrice += 35_000;
                        }
                        if (currentProductType === "market") {
                            promotionPrice += 35_000;
                        }
                    }
                    if (element.getAttribute("data-card-name") === "promo") {
                        if (currentProductType === "landing") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "visit") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "corporate") {
                            promotionPrice += 25_000;
                        }
                        if (currentProductType === "catalog") {
                            promotionPrice += 30_000;
                        }
                        if (currentProductType === "market") {
                            promotionPrice += 35_000;
                        }
                    }
                } catch (err) {}

                try {
                    cardInfo = JSON.parse(element.getAttribute("data-card-info"));
                    price += cardInfo.hours * 1500;
                } catch (error) {
                    console.log(error);
                }

                popupPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(price)} ₽`;
                calculationPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(price)} ₽`;
                calculationPromotionPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(promotionPrice)} ₽`;
            });
        })
    );
})();

(function(){ 

    const goodReview = document.querySelector('.calculation__review-btn-good');
    const badReview = document.querySelector('.calculation__review-btn-bad');

    goodReview.addEventListener('click', () => {
        goodReview.classList.remove('calculation__review-btn-good--disabled')
        goodReview.classList.add('calculation__review-btn-good--active')
        
        badReview.classList.add('calculation__review-btn-bad--disabled')
        badReview.classList.remove('calculation__review-btn-bad--active')
    })
    
    badReview.addEventListener('click', () => {
        goodReview.classList.remove('calculation__review-btn-good--active')
        goodReview.classList.add('calculation__review-btn-good--disabled')
        
        badReview.classList.remove('calculation__review-btn-bad--disabled')
        badReview.classList.add('calculation__review-btn-bad--active')
    })
})()