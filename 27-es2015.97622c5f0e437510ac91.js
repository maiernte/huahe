(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+eMj":function(e,t,o){"use strict";o.r(t);var n=o("ofXK"),i=o("3Pt+"),r=o("tyNb"),a=o("c7TG"),s=o("LTmD"),l=o("fXoL");function c(e,t){if(1&e&&(l.Zb(0,"ion-menu-toggle",6),l.Zb(1,"ion-item",7),l.Xb(2,"ion-icon",8),l.Zb(3,"ion-label"),l.xc(4),l.Yb(),l.Yb(),l.Yb()),2&e){const e=t.$implicit,o=l.jc();l.Mb(1),l.Ob("active-item",o.selectedPath.startsWith(e.url)),l.oc("routerLink",e.url),l.Mb(1),l.oc("name",e.icon),l.Mb(2),l.zc(" ",e.title," ")}}let d=(()=>{class e{constructor(e,t,o){this.router=e,this.platform=t,this.settings=o,this.selectedPath="",this.pages=[{title:"\u6392\u76d8",url:"/menu/paipan",icon:"home"},{title:"\u6848\u4f8b",url:"/menu/nodes",icon:"list"},{title:"\u7528\u6237",url:"/menu/user",icon:"person"},{title:"\u8bbe\u7f6e",url:"/menu/setting",icon:"settings"}],this.IsWebApp=!1}ngOnInit(){this.platform.platforms(),navigator.app||(this.IsWebApp=!0)}closeApp(){navigator.app?navigator.app.exitApp():console.log("platforms",this.platform.platforms(),navigator)}}return e.\u0275fac=function(t){return new(t||e)(l.Wb(r.g),l.Wb(a.Y),l.Wb(s.a))},e.\u0275cmp=l.Qb({type:e,selectors:[["app-menu"]],decls:13,vars:2,consts:[["disabled","true"],["contentId","content"],["auto-hide","false",4,"ngFor","ngForOf"],["tappable","",3,"hidden","click"],["name","exit","slot","start"],["id","content","main",""],["auto-hide","false"],["routerDirection","root",3,"routerLink"],["slot","start",3,"name"]],template:function(e,t){1&e&&(l.Zb(0,"ion-split-pane",0),l.Zb(1,"ion-menu",1),l.Zb(2,"ion-header"),l.Zb(3,"ion-toolbar"),l.Zb(4,"ion-text"),l.xc(5,"\u83dc\u5355"),l.Yb(),l.Yb(),l.Yb(),l.Zb(6,"ion-content"),l.Zb(7,"ion-list"),l.wc(8,c,5,5,"ion-menu-toggle",2),l.Zb(9,"ion-item",3),l.hc("click",(function(e){return t.closeApp()})),l.Xb(10,"ion-icon",4),l.xc(11," \u9000\u51fa "),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Xb(12,"ion-router-outlet",5),l.Yb()),2&e&&(l.Mb(8),l.oc("ngForOf",t.pages),l.Mb(1),l.oc("hidden",t.IsWebApp))},directives:[a.K,a.x,a.p,a.T,a.O,a.l,a.v,n.i,a.t,a.q,a.C,a.z,a.ab,r.h,a.u],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px}"]}),e})();o.d(t,"MenuPageModule",(function(){return u}));const p=[{path:"",component:d,children:[{path:"paipan",loadChildren:"../paipan/paipan.module#PaipanPageModule"},{path:"recordes/:id",loadChildren:"../recordes/recordes.module#RecordesPageModule"},{path:"nodes",loadChildren:"../nodes/nodes.module#NodesPageModule"},{path:"user",loadChildren:"../user/user.module#UserPageModule"},{path:"setting",loadChildren:"../setting/setting.module#SettingPageModule"},{path:"recordview/:nodeid/:recid",loadChildren:"../recordviewer/recordviewer.module#RecordviewerPageModule"}]}];let u=(()=>{class e{}return e.\u0275mod=l.Ub({type:e}),e.\u0275inj=l.Tb({factory:function(t){return new(t||e)},imports:[[n.b,i.a,a.U,r.i.forChild(p)]]}),e})()}}]);