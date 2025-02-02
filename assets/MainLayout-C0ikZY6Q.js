import{c as L,g as T,i as I,e as C,l as W,a as g,h as m,b as J,p as N,f as X,j as _,w as P,o as q,k as R,n as V,r as y,m as A,q as O,s as x,t as Y,u as Z,_ as ee,v as te,x as ne,y as oe,z as F,A as ie,B as D}from"./index-CalFfbqW.js";import{s as re,g as le,a as ae,b as se,c as k}from"./scroll-C_EpvXVR.js";const ce=L({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:n}}=T(),t=I(W,C);if(t===C)return console.error("QPageContainer needs to be child of QLayout"),C;N(X,!0);const l=g(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:l.value},J(p.default))}}),{passive:M}=_,ue=["both","horizontal","vertical"],de=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ue.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:re},emits:["scroll"],setup(e,{emit:p}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,a;P(()=>e.scrollTarget,()=>{r(),h()});function s(){t!==null&&t();const c=Math.max(0,ae(l)),w=se(l),d={top:c-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:c,left:w},n.directionChanged=n.direction!==z,n.delta=d,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),p("scroll",{...n})}function h(){l=le(a,e.scrollTarget),l.addEventListener("scroll",i,M),i(!0)}function r(){l!==void 0&&(l.removeEventListener("scroll",i,M),l=void 0)}function i(c){if(c===!0||e.debounce===0||e.debounce==="0")s();else if(t===null){const[w,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];t=()=>{d(w),t=null}}}const{proxy:v}=T();return P(()=>v.$q.lang.rtl,s),q(()=>{a=v.$el.parentNode,h()}),R(()=>{t!==null&&t(),r()}),Object.assign(v,{trigger:i,getPosition:()=>n}),V}});function fe(){const e=y(!A.value);return e.value===!1&&q(()=>{e.value=!0}),{isHydrated:e}}const K=typeof ResizeObserver<"u",j=K===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},B=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:p}){let n=null,t,l={width:-1,height:-1};function a(r){r===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==l.width||i!==l.height)&&(l={width:r,height:i},p("resize",l))}}const{proxy:h}=T();if(h.trigger=a,K===!0){let r;const i=v=>{t=h.$el.parentNode,t?(r=new ResizeObserver(a),r.observe(t),s()):v!==!0&&O(()=>{i(!0)})};return q(()=>{i()}),R(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),V}else{let r=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",a,_.passive),c=void 0)},i=function(){r(),t&&t.contentDocument&&(c=t.contentDocument.defaultView,c.addEventListener("resize",a,_.passive),s())};const{isHydrated:v}=fe();let c;return q(()=>{O(()=>{t=h.$el,t&&i()})}),R(r),()=>{if(v.value===!0)return m("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:i})}}}}),he=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:n}){const{proxy:{$q:t}}=T(),l=y(null),a=y(t.screen.height),s=y(e.container===!0?0:t.screen.width),h=y({position:0,direction:"down",inflectionPoint:0}),r=y(0),i=y(A.value===!0?0:k()),v=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),c=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=g(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const u={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};h.value=u,e.onScroll!==void 0&&n("scroll",u)}}function U(o){const{height:u,width:b}=o;let f=!1;a.value!==u&&(f=!0,a.value=u,e.onScrollHeight!==void 0&&n("scrollHeight",u),H()),s.value!==b&&(f=!0,s.value=b),f===!0&&e.onResize!==void 0&&n("resize",o)}function G({height:o}){r.value!==o&&(r.value=o,H())}function H(){if(e.container===!0){const o=a.value>r.value?k():0;i.value!==o&&(i.value=o)}}let S=null;const Q={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:l,height:a,containerHeight:r,scrollbarWidth:i,totalWidth:g(()=>s.value+i.value),rows:g(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:h,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,u,b){Q[o][u]=b}};if(N(W,Q),k()>0){let o=function(){f=null,$.classList.remove("hide-scrollbar")},u=function(){if(f===null){if($.scrollHeight>t.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(o,300)},b=function(E){f!==null&&E==="remove"&&(clearTimeout(f),o()),window[`${E}EventListener`]("resize",u)},f=null;const $=document.body;P(()=>e.container!==!0?"add":"remove",b),e.container!==!0&&b("add"),Y(()=>{b("remove")})}return()=>{const o=Z(p.default,[m(de,{onScroll:z}),m(B,{onResize:U})]),u=m("div",{class:v.value,style:c.value,ref:e.container===!0?void 0:l,tabindex:-1},o);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:l},[m(B,{onResize:G}),m("div",{class:"absolute-full",style:w.value},[m("div",{class:"scroll",style:d.value},[u])])]):u}}}),ve=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ge=te({name:"MainLayout",setup(){const e=y(!1);return{linksList:ve,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function me(e,p,n,t,l,a){const s=ie("router-view");return oe(),ne(he,{view:"lHh Lpr lFf"},{default:F(()=>[D(ce,null,{default:F(()=>[D(s)]),_:1})]),_:1})}const ye=ee(ge,[["render",me]]);export{ye as default};
