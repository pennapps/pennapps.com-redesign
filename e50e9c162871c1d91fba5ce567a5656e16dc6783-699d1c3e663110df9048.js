"use strict";(self.webpackChunkpennapps_com_redesign=self.webpackChunkpennapps_com_redesign||[]).push([[61],{3723:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return f},M:function(){return E},P:function(){return w},_:function(){return o},a:function(){return s},b:function(){return l},g:function(){return d},h:function(){return c}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,o,c){var l={};i&&(l.backgroundColor=i,"fixed"===a?(l.width=n,l.height=r,l.backgroundColor=i,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),c&&(l.objectPosition=c);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}var u,p=["children"],g=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=o(e,p);return n.createElement(n.Fragment,null,n.createElement(g,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,c=void 0===i?"":i,l=e.shouldLoad,d=o(e,m);return n.createElement("img",s({},d,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:c}))},v=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,c=void 0===i||i,l=o(e,h),d=l.sizes||(null==t?void 0:t.sizes),u=n.createElement(y,s({},l,t,{sizes:d,shouldLoad:c}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:d})})),u):u};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=o(e,b);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set,Z=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,l=e.style,d=e.backgroundColor,u=e.className,p=e.class,g=e.onStartLoad,f=e.onLoad,m=e.onError,h=o(e,S),y=i.width,v=i.height,b=i.layout,w=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(y,v,b),E=w.style,k=w.className,x=o(w,T),Z=(0,n.useRef)(),O=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var _=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,v);return(0,n.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=Z.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(O)):L&&j.has(O)?void 0:(C.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;Z.current&&(Z.current.innerHTML=n(s({isLoading:!0,isLoaded:j.has(O),image:i},h)),j.has(O)||(e=requestAnimationFrame((function(){Z.current&&(t=r(Z.current,O,j,l,g,f,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){j.has(O)&&L&&(Z.current.innerHTML=L(s({isLoading:j.has(O),isLoaded:j.has(O),image:i},h)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(r,s({},x,{style:s({},E,l,{backgroundColor:d}),className:k+(u?" "+u:""),ref:Z,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(Z,e):null}));O.propTypes=x,O.displayName="GatsbyImage";var _,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],N=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:k,width:N,height:N,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(_=O,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=o(e,I);return r&&console.warn(r),a?n.createElement(_,s({image:a},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=z},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3621:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(3723);function i(e){var t=e.name,a=e.title,i=e.image;return n.createElement("div",{className:"organizer-card"},n.createElement("div",{className:"img-container"},n.createElement(r.G,{image:i,imgStyle:{borderRadius:"4px"}})),n.createElement("div",{className:"title-container"},n.createElement("h4",null,t),n.createElement("div",{className:"organizer-title"},a)))}},8532:function(e,t,a){t.Z=a.p+"static/landing-image-0a44b7dd5e7b3a9378602ada9e24f5ea.png"},3585:function(e,t,a){t.Z=a.p+"static/mobile-timeline-18fe532e198adb1dc7eb05fc76d05426.png"},2548:function(e,t,a){t.Z=a.p+"static/anna-fb1246ec1e53f231aa34a79186cea7f2.jpg"},5777:function(e,t,a){t.Z=a.p+"static/anuj-9a3bcab32d8552516a16ead185889718.jpg"},5944:function(e,t,a){t.Z=a.p+"static/audrey-2bb3ad33eaf19267a4cf00e7097d1fdf.jpg"},3975:function(e,t,a){t.Z=a.p+"static/cynthia-cf76941df5da77d934f22814af801a2e.png"},3519:function(e,t,a){t.Z=a.p+"static/heyi-ceaebe6369ae2b3d150f8eb204d42dfa.jpg"},870:function(e,t,a){t.Z=a.p+"static/jason-352304d7575682ef27da21d8b71f9f32.jpg"},5908:function(e,t,a){t.Z=a.p+"static/joe-935df6476ca8b49a7265795acd8f02ff.png"},8140:function(e,t,a){t.Z=a.p+"static/mia-d69eadbe3413cbb868488cc1a87e89ce.png"},2195:function(e,t,a){t.Z=a.p+"static/qijia-5f2e7fc42071cec46e706d6bd0f8f371.jpeg"},5816:function(e,t,a){t.Z=a.p+"static/sai-d0b56eba3639e3a9ec55916f88028116.png"},443:function(e,t,a){t.Z=a.p+"static/sylvia-51a58e1522c1137afb4da8e69908a511.png"},1894:function(e,t,a){t.Z=a.p+"static/wenny-95c0001cb078d9931eddd1b04e756523.png"},8135:function(e,t,a){t.Z=a.p+"static/zachary-5fd0452d35553f1d4aea3f6d717da904.jpg"},6981:function(e,t,a){t.Z=a.p+"static/timeline-9aba137c5fe75955a66f3e00ba43c10d.png"}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-699d1c3e663110df9048.js.map