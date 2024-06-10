var Be=Object.defineProperty;var Oe=(t,e,l)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;var ue=(t,e,l)=>(Oe(t,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();function x(){}function We(t,e){for(const l in e)t[l]=e[l];return t}function Ne(t){return t()}function Ce(){return Object.create(null)}function le(t){t.forEach(Ne)}function Pe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function ze(t,e){return t===e?!0:(ie||(ie=document.createElement("a")),ie.href=e,t===ie.href)}function Je(t){return Object.keys(t).length===0}function Ue(t,e,l,n){if(t){const i=Ee(t,e,l,n);return t[0](i)}}function Ee(t,e,l,n){return t[1]&&n?We(l.ctx.slice(),t[1](n(e))):l.ctx}function Ye(t,e,l,n){if(t[2]&&n){const i=t[2](n(l));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let d=0;d<a;d+=1)s[d]=e.dirty[d]|i[d];return s}return e.dirty|i}return e.dirty}function Ke(t,e,l,n,i,s){if(i){const a=Ee(e,l,n,s);t.p(a,i)}}function Ge(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function u(t,e){t.appendChild(e)}function $(t,e,l){t.insertBefore(e,l||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function f(t){return document.createElement(t)}function Z(t){return document.createTextNode(t)}function k(){return Z(" ")}function Y(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function o(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ve(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function D(t,e){t.value=e??""}function fe(t,e,l,n){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,"")}let te;function ee(t){te=t}function Ze(){if(!te)throw new Error("Function called outside component initialization");return te}function Qe(t){Ze().$$.on_mount.push(t)}const G=[],qe=[];let V=[];const je=[],Xe=Promise.resolve();let ve=!1;function et(){ve||(ve=!0,Xe.then(Fe))}function he(t){V.push(t)}const de=new Set;let K=0;function Fe(){if(K!==0)return;const t=te;do{try{for(;K<G.length;){const e=G[K];K++,ee(e),tt(e.$$)}}catch(e){throw G.length=0,K=0,e}for(ee(null),G.length=0,K=0;qe.length;)qe.pop()();for(let e=0;e<V.length;e+=1){const l=V[e];de.has(l)||(de.add(l),l())}V.length=0}while(G.length);for(;je.length;)je.pop()();ve=!1,de.clear(),ee(t)}function tt(t){if(t.fragment!==null){t.update(),le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}function lt(t){const e=[],l=[];V.forEach(n=>t.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),V=e}const ae=new Set;let nt;function q(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function L(t,e,l,n){if(t&&t.o){if(ae.has(t))return;ae.add(t),nt.c.push(()=>{ae.delete(t)}),t.o(e)}}function O(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function N(t){t&&t.c()}function H(t,e,l){const{fragment:n,after_update:i}=t.$$;n&&n.m(e,l),he(()=>{const s=t.$$.on_mount.map(Ne).filter(Pe);t.$$.on_destroy?t.$$.on_destroy.push(...s):le(s),t.$$.on_mount=[]}),i.forEach(he)}function A(t,e){const l=t.$$;l.fragment!==null&&(lt(l.after_update),le(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(G.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,l,n,i,s,a=null,d=[-1]){const c=te;ee(t);const r=t.$$={fragment:null,ctx:[],props:s,update:x,not_equal:i,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ce(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let _=!1;if(r.ctx=l?l(t,e.props||{},(w,h,...p)=>{const g=p.length?p[0]:h;return r.ctx&&i(r.ctx[w],r.ctx[w]=g)&&(!r.skip_bound&&r.bound[w]&&r.bound[w](g),_&&st(t,w)),h}):[],r.update(),_=!0,le(r.before_update),r.fragment=n?n(r.ctx):!1,e.target){if(e.hydrate){const w=Ve(e.target);r.fragment&&r.fragment.l(w),w.forEach(b)}else r.fragment&&r.fragment.c();e.intro&&q(t.$$.fragment),H(t,e.target,e.anchor),Fe()}ee(c)}class F{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){A(this,1),this.$destroy=x}$on(e,l){if(!Pe(l))return x;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);function at(t){let e;return{c(){e=f("div"),e.innerHTML='<div class="logo svelte-16xh14s"><p>DARZH</p></div> <div class="links"><a class="link  svelte-16xh14s" href="#">Home</a> <a class="link  svelte-16xh14s" href="#projects">Projects</a> <a class="link  svelte-16xh14s" href="#contact">Contacts</a></div>',o(e,"class","nav svelte-16xh14s")},m(l,n){$(l,e,n)},p:x,i:x,o:x,d(l){l&&b(e)}}}class ot extends F{constructor(e){super(),E(this,e,null,at,P,{})}}const rt="/assets/art11-Cq9CfiGm.png";function ct(t){let e,l,n,i,s,a,d,c,r,_;const w=t[2].default,h=Ue(w,t,t[1],null);return{c(){e=f("h1"),l=f("span"),n=f("span"),n.innerHTML='<svg viewBox="0 0 512 512" class="svelte-1p1m9lz"><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" class="svelte-1p1m9lz"></path></svg>',i=k(),s=f("span"),s.innerHTML='<svg viewBox="0 0 512 512" class="svelte-1p1m9lz"><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" class="svelte-1p1m9lz"></path></svg>',a=k(),d=f("span"),d.innerHTML='<svg viewBox="0 0 512 512" class="svelte-1p1m9lz"><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" class="svelte-1p1m9lz"></path></svg>',c=k(),r=f("span"),h&&h.c(),o(n,"class","magic-star svelte-1p1m9lz"),o(s,"class","magic-star svelte-1p1m9lz"),o(d,"class","magic-star svelte-1p1m9lz"),o(r,"class","magic-text svelte-1p1m9lz"),fe(r,"font-size",t[0]),o(l,"class","magic svelte-1p1m9lz"),o(e,"class","svelte-1p1m9lz")},m(p,g){$(p,e,g),u(e,l),u(l,n),u(l,i),u(l,s),u(l,a),u(l,d),u(l,c),u(l,r),h&&h.m(r,null),_=!0},p(p,[g]){h&&h.p&&(!_||g&2)&&Ke(h,w,p,p[1],_?Ye(w,p[1],g,null):Ge(p[1]),null),(!_||g&1)&&fe(r,"font-size",p[0])},i(p){_||(q(h,p),_=!0)},o(p){L(h,p),_=!1},d(p){p&&b(e),h&&h.d(p)}}}const ut=1e3;function dt(t,e,l){let{$$slots:n={},$$scope:i}=e,{fontSize:s="3.5rem"}=e;const a=(c,r)=>Math.floor(Math.random()*(r-c+1))+c,d=c=>{c.style.setProperty("--star-left",`${a(-10,100)}%`),c.style.setProperty("--star-top",`${a(-40,80)}%`),c.style.animation="none",c.offsetHeight,c.style.animation=""};return Qe(()=>{document.querySelectorAll(".magic-star").forEach((r,_)=>{setTimeout(()=>{d(r),setInterval(()=>d(r),1e3)},_*(ut/3))})}),t.$$set=c=>{"fontSize"in c&&l(0,s=c.fontSize),"$$scope"in c&&l(1,i=c.$$scope)},[s,i,n]}class De extends F{constructor(e){super(),E(this,e,dt,ct,P,{fontSize:0})}}function ft(t){let e;return{c(){e=Z("Darsh Shyam")},m(l,n){$(l,e,n)},d(l){l&&b(e)}}}function vt(t){let e,l,n,i,s,a,d,c,r,_,w,h,p;return a=new De({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){e=f("div"),l=f("div"),n=f("p"),n.textContent=`${ht}`,i=k(),s=f("h1"),N(a.$$.fragment),d=k(),c=f("p"),c.textContent=`${pt}`,r=k(),_=f("div"),_.innerHTML='<a class="button svelte-13xan4a" href="/#projects">View Projects</a> <a class="button svelte-13xan4a" href="https://drive.google.com/file/d/1FBL4UdLPD9-FCzxb-2Q34ZK-wYH_xwzD/view?usp=sharing">Download Resume</a>',w=k(),h=f("div"),h.innerHTML=`<img src="${rt}" alt="hero" class="svelte-13xan4a"/>`,o(n,"class","salu fadeup svelte-13xan4a"),o(s,"class","name fadeup svelte-13xan4a"),o(c,"class","desc fadeup svelte-13xan4a"),o(_,"class","btns fadeup svelte-13xan4a"),o(l,"class","text-content svelte-13xan4a"),o(h,"class","content fadeup svelte-13xan4a"),o(e,"class","hero svelte-13xan4a")},m(g,C){$(g,e,C),u(e,l),u(l,n),u(l,i),u(l,s),H(a,s,null),u(l,d),u(l,c),u(l,r),u(l,_),u(e,w),u(e,h),p=!0},p(g,[C]){const y={};C&1&&(y.$$scope={dirty:C,ctx:g}),a.$set(y)},i(g){p||(q(a.$$.fragment,g),p=!0)},o(g){L(a.$$.fragment,g),p=!1},d(g){g&&b(e),A(a)}}}let ht="Full Stack Developer",pt="Crafting digital experiences that leave a lasting impression - one line of code at a time";class mt extends F{constructor(e){super(),E(this,e,null,vt,P,{})}}function Se(t,e,l){const n=t.slice();return n[6]=e[l],n}function Le(t,e,l){const n=t.slice();return n[9]=e[l],n}function Ie(t){let e,l=t[9]+"",n;return{c(){e=f("div"),n=Z(l),o(e,"class","tag svelte-wy88j8"),fe(e,"background",t[5]())},m(i,s){$(i,e,s),u(e,n)},p(i,s){s&1&&l!==(l=i[9]+"")&&pe(n,l)},d(i){i&&b(e)}}}function He(t){let e,l,n=t[4](t[6])+"",i,s;return{c(){e=f("span"),l=f("a"),i=Z(n),o(l,"href",s=t[6]),o(l,"class","svelte-wy88j8"),o(e,"class","link svelte-wy88j8")},m(a,d){$(a,e,d),u(e,l),u(l,i)},p(a,d){d&2&&n!==(n=a[4](a[6])+"")&&pe(i,n),d&2&&s!==(s=a[6])&&o(l,"href",s)},d(a){a&&b(e)}}}function gt(t){let e,l,n,i,s,a,d,c,r,_,w,h,p=O(t[0]),g=[];for(let m=0;m<p.length;m+=1)g[m]=Ie(Le(t,p,m));let C=O(t[1]),y=[];for(let m=0;m<C.length;m+=1)y[m]=He(Se(t,C,m));return{c(){e=f("div"),l=f("div"),n=f("h3"),i=Z(t[3]),s=k(),a=f("div");for(let m=0;m<g.length;m+=1)g[m].c();d=k(),c=f("div"),r=f("img"),w=k(),h=f("div");for(let m=0;m<y.length;m+=1)y[m].c();o(l,"class","title svelte-wy88j8"),o(a,"class","tags svelte-wy88j8"),ze(r.src,_=t[2])||o(r,"src",_),o(r,"alt","showcase"),o(r,"class","svelte-wy88j8"),o(c,"class","showcase svelte-wy88j8"),o(h,"class","links svelte-wy88j8"),o(e,"class","card svelte-wy88j8")},m(m,z){$(m,e,z),u(e,l),u(l,n),u(n,i),u(e,s),u(e,a);for(let v=0;v<g.length;v+=1)g[v]&&g[v].m(a,null);u(e,d),u(e,c),u(c,r),u(e,w),u(e,h);for(let v=0;v<y.length;v+=1)y[v]&&y[v].m(h,null)},p(m,[z]){if(z&8&&pe(i,m[3]),z&33){p=O(m[0]);let v;for(v=0;v<p.length;v+=1){const T=Le(m,p,v);g[v]?g[v].p(T,z):(g[v]=Ie(T),g[v].c(),g[v].m(a,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=p.length}if(z&4&&!ze(r.src,_=m[2])&&o(r,"src",_),z&18){C=O(m[1]);let v;for(v=0;v<C.length;v+=1){const T=Se(m,C,v);y[v]?y[v].p(T,z):(y[v]=He(T),y[v].c(),y[v].m(h,null))}for(;v<y.length;v+=1)y[v].d(1);y.length=C.length}},i:x,o:x,d(m){m&&b(e),oe(g,m),oe(y,m)}}}function _t(t,e,l){let{tech:n=["Nodejs","Javascript","Sqlite","Prisma"]}=e,{links:i=["www.github.com","www.linkedin.com"]}=e,{img:s="https://raw.githubusercontent.com/darzhz/Realnotes/main/assets/0.png"}=e,{title:a="Nodejs Project"}=e;const d=r=>r.split(".")[1],c=()=>{let r=["#F01A4799","#FCAF1799","#3F5EBA99","#00C85399","#FFA70A99","#9D38BD99","#79554899","#FFCC0099","#4CAF5099","#E91E6399","#03A9F499","#EC407A99"];return r[Math.floor(Math.random()*r.length)]};return t.$$set=r=>{"tech"in r&&l(0,n=r.tech),"links"in r&&l(1,i=r.links),"img"in r&&l(2,s=r.img),"title"in r&&l(3,a=r.title)},[n,i,s,a,d,c]}class kt extends F{constructor(e){super(),E(this,e,_t,gt,P,{tech:0,links:1,img:2,title:3})}}const wt={description:"Heya Folks"},bt=[{title:"Artemis : MIS System",tech:["SvelteKit","Nodejs","SQlite","React"],img:"https://i.ibb.co/gZqM5dN/Screenshot-from-2024-05-09-01-44-49.png",links:["https://github.com/darzhz/artemis2"]},{title:"Hakxite : Hackathon Website",tech:["Html","Javascript","CSS"],img:"https://i.ibb.co/PxVnR7h/image.png",links:["https://hakxite.vercel.app/","https://github.com/darzhz/hakxite"]},{title:"RealNotes : RealTime Note Sharing",tech:["Nodejs","Mongodb","Websockets"],img:"https://i.ibb.co/vqZbBv0/image.png",links:["https://realnotes.glitch.me","https://github.com/darzhz/Realnotes"]},{title:"Divert : Url Shortener",tech:["Nodejs","Mongodb","Websockets"],img:"https://i.ibb.co/MNHdrQx/image.png",links:["https://divert.onrender.com/","https://github.com/darzhz/Divert"]},{title:"LLH : A Light Pollution Map",tech:["Javascript","leaflet","python"],img:"https://i.ibb.co/DtWhwj2/image.png",links:["https://llh.glitch.me/","https://github.com/darzhz/lightlesshouse"]},{title:"Mapacova : covid19 ( 2019-nCoV) containment zone mapping",tech:["Javascript","leaflet","p5js"],img:"https://i.ibb.co/WsDkJ3X/image.png",links:["https://github.com/darzhz/mapacova"]},{title:"FDAR : Fall Detection And Activity Recognition Using Human Skeletal Features",tech:["tensorflow.js","ffmpeg","jyuptyer"],img:"https://i.ibb.co/3Mm08gh/unnamed.jpg",links:["https://github.com/darzhz/FDAR"]},{title:"Neha's World",tech:["GML","HME"],img:"https://i.ibb.co/KNvzH79/Screenshot-from-2024-06-10-13-57-43.png",links:["https://nehasworld.vercel.app/"]}],Re={descrption:wt,projects:bt};function $t(t,e,l){const n=t.slice();return n[0]=e[l],n}function yt(t){let e,l,n,i;return l=new kt({props:{title:t[0].title,tech:t[0].tech,img:t[0].img,links:t[0].links}}),{c(){e=f("div"),N(l.$$.fragment),n=k(),o(e,"class","card svelte-fqsbzg")},m(s,a){$(s,e,a),H(l,e,null),u(e,n),i=!0},p:x,i(s){i||(q(l.$$.fragment,s),i=!0)},o(s){L(l.$$.fragment,s),i=!1},d(s){s&&b(e),A(l)}}}function xt(t){let e,l,n,i,s=O(Re.projects),a=[];for(let d=0;d<s.length;d+=1)a[d]=yt($t(t,s,d));return{c(){e=f("div"),e.innerHTML="<h1>My Projects</h1>",l=k(),n=f("div");for(let d=0;d<a.length;d+=1)a[d].c();o(e,"class","title svelte-fqsbzg"),o(n,"class","showcase svelte-fqsbzg")},m(d,c){$(d,e,c),$(d,l,c),$(d,n,c);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(n,null);i=!0},p:x,i(d){if(!i){for(let c=0;c<s.length;c+=1)q(a[c]);i=!0}},o(d){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)L(a[c]);i=!1},d(d){d&&(b(e),b(l),b(n)),oe(a,d)}}}function Mt(t){return console.log(Re),[]}class Ct extends F{constructor(e){super(),E(this,e,Mt,xt,P,{})}}function zt(t){let e,l,n;return{c(){e=f("h1"),e.textContent="About Me",l=k(),n=f("div"),n.innerHTML='<p class="svelte-qct811">With four years of freelance full-stack development experience under my belt, I&#39;ve had the privilege of collaborating with a diverse clientele, primarily students, throughout my bachelor&#39;s degree journey. While my expertise lies in full-stack development – it&#39;s been my bread and butter – I&#39;ve explored a myriad of domains, from machine learning and IoT to web and application development. I&#39;m the kind of developer who thrives on versatility, always eager to dive into new challenges and technologies.</p>',o(e,"class","svelte-qct811"),o(n,"class","text_container svelte-qct811")},m(i,s){$(i,e,s),$(i,l,s),$(i,n,s)},p:x,i:x,o:x,d(i){i&&(b(e),b(l),b(n))}}}class qt extends F{constructor(e){super(),E(this,e,null,zt,P,{})}}function jt(t){let e,l,n,i,s,a,d,c,r,_,w;return{c(){e=f("link"),l=k(),n=f("h1"),n.textContent="My Tech Stacks",i=k(),s=f("div"),s.innerHTML='<div class="Marquee-content svelte-kvohwk"><div class="Marquee-tag svelte-kvohwk"><i class="devicon-svelte-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-javascript-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-php-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-tensorflow-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-googlecloud-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-linux-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-react-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-express-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-go-original-wordmark"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-c-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-figma-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-arduino-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-mongodb-plain"></i></div></div>',a=k(),d=f("h1"),d.textContent="You Name It, I've Built It",c=k(),r=f("div"),r.innerHTML='<p class="svelte-kvohwk">I&#39;m always ready to take on new challenges and explore the latest trends in tech. You name it, I&#39;ve built it – and I&#39;m excited to bring that experience to your next project.</p>',_=k(),w=f("div"),w.innerHTML='<div class="Marquee-content-rev svelte-kvohwk"><div class="Marquee-tag svelte-kvohwk"><i class="devicon-svelte-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-javascript-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-php-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-tensorflow-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-googlecloud-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-linux-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-react-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-express-original"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-go-original-wordmark"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-c-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-figma-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-arduino-plain"></i></div> <div class="Marquee-tag svelte-kvohwk"><i class="devicon-mongodb-plain"></i></div></div>',o(e,"rel","stylesheet"),o(e,"type","text/css"),o(e,"href","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"),o(n,"id","title"),o(n,"class","svelte-kvohwk"),o(s,"class","Marquee svelte-kvohwk"),o(d,"id","tagline"),o(d,"class","svelte-kvohwk"),o(r,"class","hidden svelte-kvohwk"),o(w,"class","Marquee svelte-kvohwk")},m(h,p){u(document.head,e),$(h,l,p),$(h,n,p),$(h,i,p),$(h,s,p),$(h,a,p),$(h,d,p),$(h,c,p),$(h,r,p),$(h,_,p),$(h,w,p)},p:x,i:x,o:x,d(h){h&&(b(l),b(n),b(i),b(s),b(a),b(d),b(c),b(r),b(_),b(w)),b(e)}}}class St extends F{constructor(e){super(),E(this,e,null,jt,P,{})}}function Ae(t,e,l){const n=t.slice();return n[1]=e[l],n}function Te(t){let e,l,n,i,s;return{c(){e=f("div"),l=f("h2"),l.textContent=`${t[1].title}`,n=k(),i=f("p"),i.textContent=`${t[1].description}`,s=k(),o(l,"class","svelte-dngnl2"),o(i,"class","svelte-dngnl2"),o(e,"class","service svelte-dngnl2")},m(a,d){$(a,e,d),u(e,l),u(e,n),u(e,i),u(e,s)},p:x,d(a){a&&b(e)}}}function Lt(t){let e,l,n,i=O(t[0]),s=[];for(let a=0;a<i.length;a+=1)s[a]=Te(Ae(t,i,a));return{c(){e=f("h1"),e.textContent="Services",l=k(),n=f("div");for(let a=0;a<s.length;a+=1)s[a].c();o(e,"class","svelte-dngnl2"),o(n,"class","services svelte-dngnl2")},m(a,d){$(a,e,d),$(a,l,d),$(a,n,d);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null)},p(a,[d]){if(d&1){i=O(a[0]);let c;for(c=0;c<i.length;c+=1){const r=Ae(a,i,c);s[c]?s[c].p(r,d):(s[c]=Te(r),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=i.length}},i:x,o:x,d(a){a&&(b(e),b(l),b(n)),oe(s,a)}}}function It(t){return[[{title:"Web Development",description:"I specialize in building responsive, user-friendly websites that are both visually appealing and functional. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and React."},{title:"Mobile Development",description:"I have experience developing mobile applications for both iOS and Android devices. I am proficient in using tools such as React Native and Flutter to create cross-platform mobile apps."},{title:"Machine Learning",description:"I have a strong background in machine learning and artificial intelligence. I have experience working with popular machine learning libraries such as TensorFlow and Pytorch."},{title:"IoT Development",description:"I have experience developing Internet of Things (IoT) applications. I have worked with a variety of IoT devices and platforms, including Arduino, Raspberry Pi, and NodeMCU."}]]}class Ht extends F{constructor(e){super(),E(this,e,It,Lt,P,{})}}function At(t){let e,l;return{c(){e=Z("Let's Build Something Great"),l=f("br")},m(n,i){$(n,e,i),$(n,l,i)},p:x,d(n){n&&(b(e),b(l))}}}function Tt(t){let e,l,n,i,s,a,d,c,r,_,w,h,p,g,C,y,m,z,v,T,W,I,me,ge,_e,J,j,ke,we,be,U,R,$e,Q,ye,ne,B,re,X,se,ce,xe;return B=new De({props:{fontSize:"3.2vh",$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){e=f("h1"),e.textContent="Contact Me",l=k(),n=f("div"),i=f("div"),s=f("div"),a=f("h4"),a.textContent="GET IN TOUCH",d=k(),c=f("h2"),c.textContent="Ping me an email",r=k(),_=f("div"),w=f("p"),h=f("input"),p=k(),g=f("small"),C=k(),y=f("p"),m=f("input"),z=k(),v=f("small"),T=k(),W=f("p"),I=f("input"),me=k(),ge=f("small"),_e=k(),J=f("p"),j=f("textarea"),ke=k(),we=f("small"),be=k(),U=f("p"),R=f("button"),R.textContent="Send",$e=k(),Q=f("button"),Q.textContent="Reset",ye=k(),ne=f("div"),N(B.$$.fragment),re=k(),X=f("div"),X.innerHTML="<p>© 2024 Darsh Shyam Kumar</p>",o(e,"class","svelte-143dsuo"),o(c,"class","form-headline svelte-143dsuo"),o(h,"id","name"),o(h,"class","form-input svelte-143dsuo"),o(h,"type","text"),o(h,"placeholder","Your Name*"),o(g,"class","name-error"),o(m,"id","email"),o(m,"class","form-input svelte-143dsuo"),o(m,"type","email"),o(m,"placeholder","Your Email*"),o(v,"class","name-error"),o(I,"id","company-name"),o(I,"class","form-input svelte-143dsuo"),o(I,"type","text"),o(I,"placeholder","Company Name*"),I.required=!0,o(W,"class","full-width"),o(j,"minlength","20"),o(j,"id","message"),o(j,"cols","30"),o(j,"rows","7"),o(j,"placeholder","Your Message*"),j.required=!0,o(j,"class","svelte-143dsuo"),o(J,"class","full-width"),o(R,"type","submit"),o(R,"class","submit-btn svelte-143dsuo"),R.value="Submit",o(Q,"class","reset-btn svelte-143dsuo"),o(U,"class","full-width"),o(_,"id","submit-form"),o(s,"class","form svelte-143dsuo"),o(ne,"class","contacts contact-wrapper svelte-143dsuo"),o(i,"class","wrapper svelte-143dsuo"),o(n,"class","contain svelte-143dsuo"),o(X,"class","footer svelte-143dsuo")},m(M,S){$(M,e,S),$(M,l,S),$(M,n,S),u(n,i),u(i,s),u(s,a),u(s,d),u(s,c),u(s,r),u(s,_),u(_,w),u(w,h),D(h,t[0]),u(w,p),u(w,g),u(_,C),u(_,y),u(y,m),D(m,t[1]),u(y,z),u(y,v),u(_,T),u(_,W),u(W,I),D(I,t[2]),u(W,me),u(W,ge),u(_,_e),u(_,J),u(J,j),D(j,t[3]),u(J,ke),u(J,we),u(_,be),u(_,U),u(U,R),u(U,$e),u(U,Q),u(i,ye),u(i,ne),H(B,ne,null),$(M,re,S),$(M,X,S),se=!0,ce||(xe=[Y(h,"input",t[6]),Y(m,"input",t[7]),Y(I,"input",t[8]),Y(j,"input",t[9]),Y(R,"click",t[10]),Y(Q,"click",t[11])],ce=!0)},p(M,[S]){S&1&&h.value!==M[0]&&D(h,M[0]),S&2&&m.value!==M[1]&&D(m,M[1]),S&4&&I.value!==M[2]&&D(I,M[2]),S&8&&D(j,M[3]);const Me={};S&4096&&(Me.$$scope={dirty:S,ctx:M}),B.$set(Me)},i(M){se||(q(B.$$.fragment,M),se=!0)},o(M){L(B.$$.fragment,M),se=!1},d(M){M&&(b(e),b(l),b(n),b(re),b(X)),A(B),ce=!1,le(xe)}}}function Nt(t,e,l){let n="",i="",s="",a="";const d=()=>{l(0,n=""),l(1,i=""),l(2,s=""),l(3,a="")},c=()=>{n===""||i===""||s===""||a===""?alert("Please fill all the fields"):(window.location.href=`mailto:darzhz@protonmail.com?subject=Contact from ${n}&body=${a}`,d())};function r(){n=this.value,l(0,n)}function _(){i=this.value,l(1,i)}function w(){s=this.value,l(2,s)}function h(){a=this.value,l(3,a)}return[n,i,s,a,d,c,r,_,w,h,()=>{c()},()=>{d()}]}class Pt extends F{constructor(e){super(),E(this,e,Nt,Tt,P,{})}}function Et(t){let e,l,n,i,s,a,d,c,r,_,w,h,p,g,C,y,m,z;return n=new ot({}),s=new mt({}),d=new qt({}),r=new St({}),w=new Ht({}),g=new Ct({}),m=new Pt({}),{c(){e=f("div"),l=f("div"),N(n.$$.fragment),i=k(),N(s.$$.fragment),a=k(),N(d.$$.fragment),c=k(),N(r.$$.fragment),_=k(),N(w.$$.fragment),h=k(),p=f("div"),N(g.$$.fragment),C=k(),y=f("div"),N(m.$$.fragment),o(l,"class","navbar svelte-1p7ttlb"),o(p,"id","projects"),o(y,"id","contact"),o(e,"class","app svelte-1p7ttlb")},m(v,T){$(v,e,T),u(e,l),H(n,l,null),u(e,i),H(s,e,null),u(e,a),H(d,e,null),u(e,c),H(r,e,null),u(e,_),H(w,e,null),u(e,h),u(e,p),H(g,p,null),u(e,C),u(e,y),H(m,y,null),z=!0},p:x,i(v){z||(q(n.$$.fragment,v),q(s.$$.fragment,v),q(d.$$.fragment,v),q(r.$$.fragment,v),q(w.$$.fragment,v),q(g.$$.fragment,v),q(m.$$.fragment,v),z=!0)},o(v){L(n.$$.fragment,v),L(s.$$.fragment,v),L(d.$$.fragment,v),L(r.$$.fragment,v),L(w.$$.fragment,v),L(g.$$.fragment,v),L(m.$$.fragment,v),z=!1},d(v){v&&b(e),A(n),A(s),A(d),A(r),A(w),A(g),A(m)}}}class Ft extends F{constructor(e){super(),E(this,e,null,Et,P,{})}}new Ft({target:document.getElementById("app")});
