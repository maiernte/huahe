(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return i}));var o=n("dSyh"),c=n("kBU6");const i=e=>new Promise((t,n)=>{Object(o.m)(()=>{r(e),s(e).then(n=>{n.animation&&n.animation.destroy(),d(e),t(n)},t=>{d(e),n(t)})})}),r=e=>{const t=e.enteringEl,n=e.leavingEl;N(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),n&&w(n,!1)},s=async e=>{const t=await l(e);return t?a(t,e):u(e)},d=e=>{const t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},l=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await n.e(118).then(n.bind(null,"Lu00"))).iosTransitionAnimation:(await n.e(119).then(n.bind(null,"wxTh"))).mdTransitionAnimation},a=async(e,t)=>{let o;await h(t,!0);try{const c=await n.e(15).then(n.bind(null,"gHMO"));o=await c.create(e,t.baseEl,t)}catch(i){o=e(t.baseEl,t)}m(t.enteringEl,t.leavingEl);const c=await p(o,t);return t.progressCallback&&t.progressCallback(void 0),c&&b(t.enteringEl,t.leavingEl),{hasCompleted:c,animation:o}},u=async e=>{const t=e.enteringEl,n=e.leavingEl;return await h(e,!1),m(t,n),b(t,n),{hasCompleted:!0}},h=async(e,t)=>{const n=(void 0!==e.deepWait?e.deepWait:t)?[S(e.enteringEl),S(e.leavingEl)]:[v(e.enteringEl),v(e.leavingEl)];await Promise.all(n),await f(e.viewIsReady,e.enteringEl)},f=async(e,t)=>{e&&await e(t)},p=(e,t)=>{const n=t.progressCallback,o=new Promise(t=>{e.onFinish(n=>{"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)})});return n?(e.progressStart(!0),n(e)):e.play(),o},m=(e,t)=>{g(t,c.c),g(e,c.a)},b=(e,t)=>{g(e,c.b),g(t,c.d)},g=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},v=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),S=async e=>{const t=e;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(S))}},w=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},N=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},y=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},"9UMr":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("ofXK"),c=n("3Pt+"),i=n("c7TG"),r=(n("SRjL"),n("fXoL"));let s=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(t){return new(t||e)},imports:[[o.b,c.c,i.Z]]}),e})()},Dl6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s}));const o=(e,t)=>null!==t.closest(e),c=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},r=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!r.test(e)){const o=document.querySelector("ion-router");if(o)return null!=t&&t.preventDefault(),o.push(e,n)}return!1}},Gfuc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("ofXK"),c=n("3Pt+"),i=n("c7TG"),r=(n("LvB5"),n("fXoL"));let s=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(t){return new(t||e)},imports:[[o.b,c.c,i.Z]]}),e})()},YtD4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,s.forEach(e=>{const n=t.querySelectorAll(e);for(let o=n.length-1;o>=0;o--){const e=n[o];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const r=i(e);for(let t=0;t<r.length;t++)c(r[t])}});const o=i(t);for(let e=0;e<o.length;e++)c(o[e]);const r=document.createElement("div");r.appendChild(t);const d=r.querySelector("div");return null!==d?d.innerHTML:r.innerHTML}catch(t){return console.error(t),""}},c=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),o=t.name;if(!r.includes(o.toLowerCase())){e.removeAttribute(o);continue}const c=t.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}const t=i(e);for(let n=0;n<t.length;n++)c(t[n])},i=e=>null!=e.children?e.children:e.childNodes,r=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},m9yc:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));const o=async(e,t,n,o,c)=>{if(e)return e.attachViewToDom(t,n,c,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return o&&o.forEach(e=>i.classList.add(e)),c&&Object.assign(i,c),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},c=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},mo90:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("HULg"),c=n("xPBH"),i=n("c7TG"),r=n("fXoL"),s=n("ofXK"),d=n("vBXD");function l(e,t){if(1&e&&(r.dc(0,"ion-item"),r.dc(1,"ion-text"),r.Jc(2,"\u539f\u76ee\u5f55\uff1a"),r.cc(),r.dc(3,"ion-text",5),r.Jc(4),r.cc(),r.cc()),2&e){const e=r.oc();r.Nb(4),r.Kc(e.From)}}let a=(()=>{class e{constructor(e,t){this.dbservice=e,this.modalCtrl=t,this.NodeID="",this.SelectDocument=!1,this.SelectedNode=null,this.To="\u6839\u76ee\u5f55",this.From=""}ngOnInit(){this.dbservice.getNodes().then(e=>{this.Nodes=this.buildNodeTree(e,null),this.From=this.NodeID?c.a.getNodePath(null,this.NodeID,this.Nodes).join("/"):""})}onclose(e){var t;let n={};e&&(n={nodeid:(null===(t=this.SelectedNode)||void 0===t?void 0:t.ID)||"root"}),this.modalCtrl.dismiss(n)}onNodeSelecte(e){this.SelectDocument&&!e.IsFile||!this.SelectDocument&&e.IsFile||e.ID!==this.NodeID&&(e.Sub.select(e=>e.ID).includes(this.NodeID)||(this.SelectedNode&&(this.SelectedNode.IsSelected=!1),e!==this.SelectedNode&&e&&(this.SelectedNode=e,this.SelectedNode.IsSelected=!0,this.To=c.a.getNodePath(null,this.SelectedNode.ID,this.Nodes).join("/"))))}restore(){this.To="\u6839\u76ee\u5f55",this.SelectedNode&&(this.SelectedNode.IsSelected=!1,this.SelectedNode=null)}buildNodeTree(e,t){let n=[];return(t||"").IsNullOrEmpty(),t=null!=t?t:"",n=e.where(e=>(e.parent||"")===t).sortByKey("created").select(e=>{const t=new c.a(e.type,e.name,e.id);return t.ID=e.id||null,t.ShowButton=!1,t}),n.forEach(t=>{t.Sub=this.buildNodeTree(e,t.ID)}),n}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.a),r.Yb(i.cb))},e.\u0275cmp=r.Sb({type:e,selectors:[["app-picknode"]],inputs:{Titel:"Titel",NodeID:"NodeID",SelectDocument:"SelectDocument"},decls:21,vars:4,consts:[["color","secondary"],["slot","start"],[3,"click"],["slot","end"],[4,"ngIf"],["color","medium"],["slot","end",3,"click"],["name","md-backspace"],[3,"nodes","nodeSelected"]],template:function(e,t){1&e&&(r.dc(0,"ion-header"),r.dc(1,"ion-toolbar",0),r.dc(2,"ion-buttons",1),r.dc(3,"ion-button",2),r.lc("click",(function(){return t.onclose(!1)})),r.Jc(4," \u53d6\u6d88 "),r.cc(),r.cc(),r.dc(5,"ion-title"),r.Jc(6),r.cc(),r.dc(7,"ion-buttons",3),r.dc(8,"ion-button",2),r.lc("click",(function(){return t.onclose(!0)})),r.Jc(9," \u786e\u5b9a "),r.cc(),r.cc(),r.cc(),r.cc(),r.dc(10,"ion-content"),r.dc(11,"ion-list"),r.Hc(12,l,5,1,"ion-item",4),r.dc(13,"ion-item"),r.dc(14,"ion-text"),r.Jc(15,"\u76ee\u6807\u76ee\u5f55\uff1a"),r.cc(),r.dc(16,"ion-text",5),r.Jc(17),r.cc(),r.dc(18,"ion-button",6),r.lc("click",(function(){return t.restore()})),r.Zb(19,"ion-icon",7),r.cc(),r.cc(),r.dc(20,"app-tree-node",8),r.lc("nodeSelected",(function(e){return t.onNodeSelecte(e)})),r.cc(),r.cc(),r.cc()),2&e&&(r.Nb(6),r.Kc(t.Titel),r.Nb(6),r.vc("ngIf",""!==t.From),r.Nb(5),r.Kc(t.To),r.Nb(3),r.vc("nodes",t.Nodes))},directives:[i.t,i.Y,i.j,i.i,i.W,i.n,i.E,s.j,i.x,i.T,i.u,d.a],styles:[""]}),e})()},"nN+u":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const o=(e,t,n)=>{const o=new MutationObserver(e=>{n(c(e,t))});return o.observe(e,{childList:!0,subtree:!0}),o},c=(e,t)=>{let n;return e.forEach(e=>{for(let o=0;o<e.addedNodes.length;o++)n=i(e.addedNodes[o],t)||n}),n},i=(e,t)=>{if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(e=>!0===e.checked)}},opz7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o}));const o=()=>{const e=window.TapticEngine;e&&e.selection()},c=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},r=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},qaSm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));class o{constructor(e,t){this.x=e,this.y=t}}const c=(e,t,n,o,c)=>{const s=r(e.y,t.y,n.y,o.y,c);return i(e.x,t.x,n.x,o.x,s[0])},i=(e,t,n,o,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*n*c+3*n+o*c))-e*Math.pow(c-1,3),r=(e,t,n,o,c)=>s((o-=c)-3*(n-=c)+3*(t-=c)-(e-=c),3*n-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),s=(e,t,n,o)=>{if(0===e)return((e,t,n)=>{const o=t*t-4*e*n;return o<0?[]:[(-t+Math.sqrt(o))/(2*e),(-t-Math.sqrt(o))/(2*e)]})(t,n,o);const c=(3*(n/=e)-(t/=e)*t)/3,i=(2*t*t*t-9*t*n+27*(o/=e))/27;if(0===c)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-c),-Math.sqrt(-c)];const r=Math.pow(i/2,2)+Math.pow(c/3,3);if(0===r)return[Math.pow(i/2,.5)-t/3];if(r>0)return[Math.pow(-i/2+Math.sqrt(r),1/3)-Math.pow(i/2+Math.sqrt(r),1/3)-t/3];const s=Math.sqrt(Math.pow(-c/3,3)),d=Math.acos(-i/(2*Math.sqrt(Math.pow(-c/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(d/3)-t/3,l*Math.cos((d+2*Math.PI)/3)-t/3,l*Math.cos((d+4*Math.PI)/3)-t/3]}},vBXD:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("mrSG"),c=n("fXoL"),i=(n("xPBH"),n("ofXK")),r=n("c7TG");function s(e,t){if(1&e&&c.Zb(0,"ion-icon",12),2&e){const e=c.oc().$implicit;c.vc("color",e.IsExpanded?"primary":"dark")("name",e.IsExpanded?"arrow-down":"arrow-up")}}function d(e,t){if(1&e&&c.Zb(0,"ion-icon",13),2&e){const e=c.oc().$implicit;c.vc("name",e.Icon)}}function l(e,t){1&e&&c.Zb(0,"ion-badge",14)}function a(e,t){if(1&e){const e=c.ec();c.dc(0,"ion-button",8),c.lc("click",(function(){c.Cc(e);const t=c.oc().$implicit;return c.oc().CreateNode(t)})),c.Zb(1,"ion-icon",15),c.dc(2,"ion-text"),c.Jc(3,"\u5b50\u76ee\u5f55"),c.cc(),c.cc()}if(2&e){const e=c.oc().$implicit;c.vc("hidden",!e.IsSelected||!e.ShowButton)}}function u(e,t){if(1&e){const e=c.ec();c.dc(0,"app-tree-node",16),c.lc("nodeOpen",(function(t){return c.Cc(e),c.oc(2).onSubNodeOpen(t)}))("nodeSelected",(function(t){return c.Cc(e),c.oc(2).onSubNodeSelecte(t)}))("nodeAdd",(function(t){return c.Cc(e),c.oc(2).onSubNodeAdd(t)})),c.cc()}if(2&e){const e=c.oc().$implicit;c.vc("nodes",e.Sub)("hidden",!e.IsExpanded)}}const h=function(e){return{active:e}};function f(e,t){if(1&e){const e=c.ec();c.dc(0,"div",1),c.dc(1,"ion-item",2),c.lc("click",(function(){c.Cc(e);const n=t.$implicit,o=c.oc();return n.IsExpanded=!n.IsExpanded,o.clickNode(n)})),c.dc(2,"ion-label"),c.Hc(3,s,1,2,"ion-icon",3),c.Hc(4,d,1,1,"ion-icon",4),c.Hc(5,l,1,0,"ion-badge",5),c.dc(6,"ion-text",6),c.Jc(7),c.cc(),c.cc(),c.dc(8,"ion-buttons",7),c.dc(9,"ion-button",8),c.lc("click",(function(){c.Cc(e);const n=t.$implicit;return c.oc().OpenBook(n)})),c.Zb(10,"ion-icon",9),c.cc(),c.Hc(11,a,4,1,"ion-button",10),c.cc(),c.cc(),c.Hc(12,u,1,2,"app-tree-node",11),c.cc()}if(2&e){const e=t.$implicit;c.Nb(1),c.vc("ngClass",c.xc(10,h,e.IsExpanded))("color",e.ColorB),c.Nb(2),c.vc("ngIf",!e.IsFile&&e.Sub.length>0),c.Nb(1),c.vc("ngIf",e.Icon),c.Nb(1),c.vc("ngIf",0!==e.Sync),c.Nb(1),c.vc("color",e.Color),c.Nb(1),c.Kc(e.Title),c.Nb(2),c.vc("hidden",!e.IsSelected),c.Nb(2),c.vc("ngIf",32!==e.Type),c.Nb(1),c.vc("ngIf",e.Sub.length>0)}}let p=(()=>{class e{constructor(){this.nodeSelected=new c.s,this.nodeAdd=new c.s,this.nodeOpen=new c.s}ngOnInit(){}clickNode(e){this.nodeSelected.emit(e)}CreateNode(e){return Object(o.b)(this,void 0,void 0,(function*(){this.nodeAdd.emit(e)}))}OpenBook(e){this.nodeOpen.emit(e)}onSubNodeSelecte(e){this.nodeSelected.emit(e)}onSubNodeAdd(e){this.nodeAdd.emit(e)}onSubNodeOpen(e){this.nodeOpen.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Sb({type:e,selectors:[["app-tree-node"]],inputs:{nodes:"nodes"},outputs:{nodeSelected:"nodeSelected",nodeAdd:"nodeAdd",nodeOpen:"nodeOpen"},decls:1,vars:1,consts:[["class","divitem",4,"ngFor","ngForOf"],[1,"divitem"],["detail","false","lines","none",3,"ngClass","color","click"],["slot","start",3,"color","name",4,"ngIf"],["class","iconNode","color","dark",3,"name",4,"ngIf"],["slot","start","color","danger",4,"ngIf"],[3,"color"],["slot","end"],["color","primary",3,"hidden","click"],["name","arrow-dropright"],["color","primary",3,"hidden","click",4,"ngIf"],[3,"nodes","hidden","nodeOpen","nodeSelected","nodeAdd",4,"ngIf"],["slot","start",3,"color","name"],["color","dark",1,"iconNode",3,"name"],["slot","start","color","danger"],["name","add"],[3,"nodes","hidden","nodeOpen","nodeSelected","nodeAdd"]],template:function(e,t){1&e&&c.Hc(0,f,13,12,"div",0),2&e&&c.vc("ngForOf",t.nodes)},directives:[i.i,r.x,i.h,r.D,i.j,r.T,r.j,r.i,r.u,r.h,e],styles:[".spanCursor[_ngcontent-%COMP%]{min-width:1em}.divitem[_ngcontent-%COMP%]{padding:0 0 0 15px;margin:0}.iconNode[_ngcontent-%COMP%]{margin-right:.5em}.selectedNode[_ngcontent-%COMP%]{background-color:#5f9ea0}"]}),e})()},xPBH:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{constructor(e,t,n,o=!1){this.Type=e,this.Title=t,this.ShowButton=!0,this.Version=0,this.isExpanded=!1,this.isSelected=!1,this.url="",this.sub=[],this.ID=n}static getNodePath(e,t,n=null){var o,c;const i=e?e.Sub:n;if((t||"").IsNullOrEmpty())return["\u6839\u76ee\u5f55"];if((null===(o=e)||void 0===o?void 0:o.ID)===t)return[e.Title];if(!(i.length>0))return null;for(const r of i){const n=this.getNodePath(r,t);if(n)return n.insert(0,(null===(c=e)||void 0===c?void 0:c.Title)||""),n}}get IsFile(){return 32===this.Type}get IsSelected(){return this.isSelected}set IsSelected(e){this.isSelected=e}get IsExpanded(){return this.isExpanded||!1}set IsExpanded(e){0!==this.Sub.length&&(this.isExpanded=e)}get Icon(){switch(this.Type){case 2:return"person";case 4:return"lock";case 8:return"menu";case 16:return"walk";case 32:return"document";case 1:default:return"folder"}}get Url(){return this.url}get Sub(){return this.sub}set Sub(e){this.sub=e}get Color(){return this.isSelected?"primary":""}get ColorB(){return this.isSelected?"light":""}SubNodesId(e){e.push(this.ID);for(const t of this.Sub)t.SubNodesId(e)}}}}]);