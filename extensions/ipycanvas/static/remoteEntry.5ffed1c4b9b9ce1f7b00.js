var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipycanvas=(()=>{"use strict";var e,r,t,n,o,a,i,u,l,s,f,d,p,c,h,v,g,b,y={75:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(723),t.e(367),t.e(568)]).then((()=>()=>t(568))),"./extension":()=>Promise.all([t.e(723),t.e(367),t.e(480)]).then((()=>()=>t(480)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},m={};function w(e){if(m[e])return m[e].exports;var r=m[e]={exports:{}};return y[e].call(r.exports,r,r.exports,w),r.exports}return w.m=y,w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{367:"085b2bf14dc164930556",480:"5a3378a0c87eea43eeba",568:"11a5b1a7e1486eab32e2",723:"f364af8728c1f7fdc773",764:"2ffc892ef350173898eb"}[e]+".js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ipycanvas:",w.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="ipycanvas",u=(e,r,t)=>{var n=a[e]=a[e]||{},o=n[r];(!o||!o.loaded&&i>o.from)&&(n[r]={get:t,from:i})},l=[];switch(t){case"default":u("buffer","4.9.2",(()=>w.e(764).then((()=>()=>w(764))))),u("ipycanvas","0.10.2",(()=>Promise.all([w.e(723),w.e(367),w.e(568)]).then((()=>()=>w(568)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return r}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():o(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==d?u>n&&!o:""==d!=o);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",s=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,o,n)),d(e[t][o])},f=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),c=(p=e=>function(r,t,n,o){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),h=p(((e,r,t,n,o)=>{var a=r&&w.o(r,t)&&f(r,t,n);return a?d(a):o()})),v={},g={602:()=>h("default","buffer",[1,4,9,2],(()=>w.e(764).then((()=>()=>w(764))))),648:()=>c("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2,0,1],1,1])},b={367:[602,648]},w.f.consumes=(e,r)=>{w.o(b,e)&&b[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,y[e]=t=>{delete m[e],t.exports=r()}},n=r=>{delete v[e],y[e]=t=>{throw delete m[e],r}};try{var o=g[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={143:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,o,[a,i,u]=t,l=0,s=[];l<a.length;l++)o=a[l],w.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in i)w.o(i,n)&&(w.m[n]=i[n]);for(u&&u(w),r&&r(t);s.length;)s.shift()()},t=self.webpackChunkipycanvas=self.webpackChunkipycanvas||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w(75)})();