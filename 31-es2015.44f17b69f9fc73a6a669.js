(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"8PFr":function(e,t,o){"use strict";o.r(t);var i=o("ofXK"),n=o("3Pt+"),c=o("tyNb"),s=o("c7TG"),r=o("mrSG"),d=o("HQI1"),l=o("LvB5"),b=o("SRjL"),h=o("mo90"),a=(o("0eVs"),o("Y6BA"),o("pLZG")),u=o("HULg"),f=o("fXoL");function m(e,t){if(1&e){const e=f.ac();f.Zb(0,"ion-item"),f.Zb(1,"ion-label"),f.xc(2),f.Yb(),f.Zb(3,"ion-note",16),f.xc(4),f.Yb(),f.Zb(5,"ion-text"),f.Zb(6,"small"),f.xc(7),f.Yb(),f.Yb(),f.Zb(8,"ion-button",17),f.hc("click",(function(){f.rc(e);const o=t.$implicit;return f.jc().ShowRecordes(o)})),f.Xb(9,"ion-icon",18),f.Yb(),f.Zb(10,"ion-checkbox",19),f.hc("ngModelChange",(function(o){return f.rc(e),t.$implicit.isChecked=o})),f.Yb(),f.Yb()}if(2&e){const e=t.$implicit,o=f.jc();f.Mb(2),f.yc(e.titel),f.Mb(2),f.yc(e.type),f.Mb(3),f.yc(e.time),f.Mb(1),f.oc("hidden",o.EditModul),f.Mb(2),f.oc("hidden",!o.EditModul)("ngModel",e.isChecked)}}let p=(()=>{class e{constructor(e,t,o,i,n,s,r){this.dbservice=e,this.actionsheetctrl=t,this.alertCtrl=o,this.popoverCtrl=i,this.modalController=n,this.route=s,this.router=r,this.docNodes=[],this.columns=[{prop:"time"},{name:"titel"},{name:"type"}],this.SortKey="created",this.SortName="\u521b\u5efa\u65e5\u671f",this.EditModul=!1,this.route.params.subscribe(e=>{this.node_id=e.id}),this.router.events.pipe(Object(a.a)(e=>e instanceof c.c)).subscribe(e=>{e.url.match(/\/menu\/recordes\/(?<nodeid>[0-9]+)/i)})}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){this.recordes=[],this.recordesOrigin=[],yield this.dbservice.getNodes().then(e=>(this.docNodes="*"===this.node_id?e.where(e=>32===e.type).select(e=>e.id):this.node_id.split("-"),!0)),this.Reload()}))}sortOptions(e){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.popoverCtrl.create({component:d.a,event:e,componentProps:{items:[{name:"\u76ee\u5f55\u540d\u79f0",value:"titel"},{name:"\u521b\u5efa\u65f6\u95f4",value:"created"},{name:"\u4fee\u6539\u65f6\u95f4",value:"modified"}],currentOption:this.SortKey},translucent:!0});yield t.present();const{data:o}=yield t.onDidDismiss();if((o||this.SortKey)!==this.SortKey){switch(this.SortKey=o.toString(),this.SortKey){case"titel":this.SortName="\u76ee\u5f55\u540d\u79f0";break;case"created":this.SortName="\u521b\u5efa\u65f6\u95f4";break;case"modified":this.SortName="\u4fee\u6539\u65f6\u95f4";break;default:this.SortName="\u9ed8\u8ba4"}this.recordes=this.recordesOrigin.sortByKey(this.SortKey).select(e=>this.Convert(e))}}))}get Recordes(){return this.recordes||[]}loadRecordes(e){return this.dbservice.GetRecordes(e).then(e=>{const t=e.select(e=>this.Convert(e));return this.recordesOrigin=this.recordesOrigin.concat(e||[]),t}).catch(t=>{t===[]?console.log(`loadRecordes ${e} not found in local`):console.log(`Err loadRecordes ${e}`,t)})}showPaiguaModal(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.selectNode();if(!e)return;const t=yield this.modalController.create({component:l.a});yield t.present();const{data:o}=yield t.onWillDismiss();if(o.result){const t=o.result;this.dbservice.CreateRecord(e,t.question,8,JSON.stringify(t)).then(e=>{this.recordes.push(this.Convert(e))})}}))}showPaibaziModal(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.selectNode();if(!e)return;const t=yield this.modalController.create({component:b.a});yield t.present();const{data:o}=yield t.onWillDismiss();if(o.result){const t=o.result;this.dbservice.CreateRecord(e,t.person,16,JSON.stringify(t)).then(e=>{this.recordes.push(this.Convert(e))})}}))}showHelp(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({header:"\u5e2e\u52a9",message:"\u5f53\u6848\u4f8b\u6765\u81ea\u591a\u4e2a\u6587\u4ef6\u5939\u7684\u65f6\u5019\uff0c\u65e0\u6cd5\u7f16\u8f91\u3002\u5982\u9700\u7f16\u8f91\uff0c\u8bf7\u8fd4\u56de\u76ee\u5f55\u754c\u9762\uff0c\u6253\u5f00\u4e00\u4e2a\u5355\u4e00\u7684\u6587\u4ef6\u5939\u76ee\u5f55\u3002",buttons:["\u786e\u5b9a"]});yield e.present()}))}CheckAll(){this.checkAll=!this.checkAll,this.recordes.forEach(e=>e.isChecked=this.checkAll)}ShowActions(){return Object(r.b)(this,void 0,void 0,(function*(){if(0===this.recordes.filter(e=>e.isChecked).length){const e=yield this.alertCtrl.create({header:"\u5e2e\u52a9",message:"\u8bf7\u9009\u5b9a\u81f3\u5c11\u4e00\u4f8b\u88ab\u7f16\u8f91\u7684\u6848\u4f8b\u3002",buttons:["\u786e\u5b9a"]});return void(yield e.present())}const e=yield this.actionsheetctrl.create({header:"\u7f16\u8f91",buttons:[{text:"\u5220\u9664",role:"destructive",icon:"trash",handler:()=>{this.DeleteNode()}},{text:"\u8fc1\u79fb\u76ee\u5f55",icon:"arrow-round-back",handler:()=>{this.MoveNode()}},{text:" \u53d6\u6d88",icon:"close",role:"cancel",handler:()=>{}}]});yield e.present()}))}MoveNode(){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:h.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:this.docNodes.length>1?null:this.docNodes[0]}});yield e.present();const{data:t}=yield e.onWillDismiss();if(t.nodeid&&!t.nodeid.IsNullOrEmpty()){this.EditModul=!1;const e=this.recordes.filter(e=>e.isChecked);for(const o of e)yield this.dbservice.MoveRecord(o.nodeid,t.nodeid,o.id);this.Reload()}}))}DeleteNode(){return Object(r.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertCtrl.create({header:"\u5220\u9664\u6848\u4f8b",message:"\u786e\u5b9a\u5220\u9664\u9009\u5b9a\u7684\u6848\u4f8b\u5417\uff1f",buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"},{text:"\u786e\u5b9a",handler:()=>{e=!0}}]});if(yield t.present(),yield t.onDidDismiss(),!1===e)return;const o=this.recordes.where(e=>e.isChecked);this.EditModul=!1;for(const i of o)yield this.dbservice.DeleteRecord(i.id,i.nodeid);this.Reload()}))}ShowRecordes(e){this.router.navigateByUrl(`/menu/recordview/${e.nodeid}/${e.id}`)}Reload(){this.recordes=[];for(const e of this.docNodes)this.loadRecordes(e).then(e=>{this.recordes=this.Recordes.concat(e||[])})}Convert(e){return{time:new Date("modified"===this.SortKey?e.modified:e.created).toChinaStr(),titel:e.titel,type:8===e.type?"\u516d\u723b":"\u516b\u5b57",id:e.id,nodeid:e.node,isChecked:!1}}selectNode(){return Object(r.b)(this,void 0,void 0,(function*(){if(1===this.docNodes.length)return Promise.resolve(this.docNodes[0]);let e=!1,t=yield this.dbservice.getNodes();t=t.filter(e=>this.docNodes.includes(e.id));const o=t.map(e=>({name:e.id,type:"radio",label:e.name,value:e.id,checked:!1}));o[0].checked=!0;const i=yield this.alertCtrl.create({header:"\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\u5939",inputs:o,buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});yield i.present();const{data:n}=yield i.onWillDismiss();return n.values}))}}return e.\u0275fac=function(t){return new(t||e)(f.Wb(u.a),f.Wb(s.a),f.Wb(s.b),f.Wb(s.gb),f.Wb(s.db),f.Wb(c.a),f.Wb(c.g))},e.\u0275cmp=f.Qb({type:e,selectors:[["app-recordes"]],decls:43,vars:9,consts:[["slot","start",3,"hidden"],["defaulthref","","text","\u8fd4\u56de"],["rdbackbtn",""],["slot","end",3,"hidden"],[3,"click"],["name","md-funnel"],[3,"hidden"],["color","light","showCancelButton","focus","cancelButtonText","\u53d6\u6d88","placeholder","\u641c\u7d22\u95ee\u5ff5/\u540d\u5b57"],[4,"ngFor","ngForOf"],["slot","start"],[3,"hidden","click"],["name","add"],["name","build"],["slot","end"],["name","md-reorder"],["name","md-help-circle"],["button",""],["color","light",3,"hidden","click"],["icon-only","","name","ios-arrow-forward"],[3,"hidden","ngModel","ngModelChange"]],template:function(e,t){1&e&&(f.Zb(0,"ion-header"),f.Zb(1,"ion-toolbar"),f.Zb(2,"ion-buttons",0),f.Xb(3,"ion-back-button",1,2),f.Yb(),f.Zb(5,"ion-title"),f.xc(6,"\u6613\u5b66\u6848\u4f8b"),f.Yb(),f.Zb(7,"ion-buttons",3),f.Zb(8,"ion-button",4),f.hc("click",(function(e){return t.sortOptions(e)})),f.Xb(9,"ion-icon",5),f.Zb(10,"ion-text"),f.xc(11),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Zb(12,"ion-content"),f.Zb(13,"ion-list"),f.Zb(14,"ion-list-header",6),f.Xb(15,"ion-searchbar",7),f.Yb(),f.wc(16,m,11,6,"ion-item",8),f.Yb(),f.Yb(),f.Zb(17,"ion-footer"),f.Zb(18,"ion-toolbar"),f.Zb(19,"ion-buttons",9),f.Zb(20,"ion-button",10),f.hc("click",(function(){return t.showPaiguaModal()})),f.Xb(21,"ion-icon",11),f.Zb(22,"ion-text"),f.xc(23,"\u5366\u4f8b"),f.Yb(),f.Yb(),f.Zb(24,"ion-button",10),f.hc("click",(function(){return t.showPaibaziModal()})),f.Xb(25,"ion-icon",11),f.Zb(26,"ion-text"),f.xc(27,"\u547d\u4f8b"),f.Yb(),f.Yb(),f.Zb(28,"ion-button",10),f.hc("click",(function(){return t.ShowActions()})),f.Xb(29,"ion-icon",12),f.Zb(30,"ion-text"),f.xc(31,"\u7f16\u8f91"),f.Yb(),f.Yb(),f.Zb(32,"ion-button",10),f.hc("click",(function(){return t.CheckAll()})),f.Zb(33,"ion-text"),f.xc(34,"\u5168\u9009"),f.Yb(),f.Yb(),f.Yb(),f.Zb(35,"ion-buttons",13),f.Zb(36,"ion-button",4),f.hc("click",(function(){return t.EditModul=!t.EditModul})),f.Xb(37,"ion-icon",14),f.Yb(),f.Yb(),f.Zb(38,"ion-buttons",13),f.Zb(39,"ion-button",4),f.hc("click",(function(){return t.showHelp()})),f.Xb(40,"ion-icon",15),f.Zb(41,"ion-text"),f.xc(42,"\u5e2e\u52a9"),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Yb()),2&e&&(f.Mb(2),f.oc("hidden",t.EditModul),f.Mb(5),f.oc("hidden",t.EditModul),f.Mb(4),f.yc(t.SortName),f.Mb(3),f.oc("hidden",t.EditModul),f.Mb(2),f.oc("ngForOf",t.Recordes),f.Mb(4),f.oc("hidden",t.EditModul),f.Mb(4),f.oc("hidden",t.EditModul),f.Mb(4),f.oc("hidden",!t.EditModul),f.Mb(4),f.oc("hidden",!t.EditModul))},directives:[s.t,s.Z,s.j,s.f,s.g,s.X,s.i,s.u,s.U,s.n,s.E,s.F,s.N,s.jb,i.i,s.r,s.x,s.D,s.J,s.k,s.c,n.c,n.d],styles:[""]}),e})();o.d(t,"RecordesPageModule",(function(){return v}));const y=[{path:"",component:p}];let v=(()=>{class e{}return e.\u0275mod=f.Ub({type:e}),e.\u0275inj=f.Tb({factory:function(t){return new(t||e)},imports:[[i.b,n.a,s.ab,c.i.forChild(y)]]}),e})()},HQI1:function(e,t,o){"use strict";o.d(t,"a",(function(){return b}));var i=o("c7TG"),n=o("fXoL"),c=o("ofXK");function s(e,t){if(1&e){const e=n.ac();n.Zb(0,"ion-item",2),n.hc("click",(function(){n.rc(e);const o=t.$implicit;return n.jc(2).onSelect(o.value)})),n.Zb(1,"ion-text"),n.xc(2),n.Yb(),n.Yb()}if(2&e){const e=t.$implicit,o=n.jc(2);n.oc("color",e.value===o.currentOption?"light":""),n.Mb(2),n.yc(e.name)}}function r(e,t){if(1&e&&(n.Zb(0,"div"),n.wc(1,s,3,2,"ion-item",1),n.Yb()),2&e){const e=n.jc();n.Mb(1),n.oc("ngForOf",e.items)}}function d(e,t){if(1&e&&(n.Zb(0,"ion-item",4),n.Zb(1,"ion-note"),n.xc(2),n.Yb(),n.Zb(3,"ion-label",5),n.xc(4),n.Yb(),n.Yb()),2&e){const e=t.$implicit;n.Mb(2),n.yc(e.name),n.Mb(2),n.zc(" ",e.value," ")}}function l(e,t){if(1&e&&(n.Zb(0,"small"),n.wc(1,d,5,2,"ion-item",3),n.Yb()),2&e){const e=n.jc();n.Mb(1),n.oc("ngForOf",e.items)}}let b=(()=>{class e{constructor(e){this.popoverCtrl=e,this.toselect=!0}ngOnInit(){}onSelect(e){this.popoverCtrl.dismiss(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Wb(i.gb))},e.\u0275cmp=n.Qb({type:e,selectors:[["app-optionpopover"]],inputs:{currentOption:"currentOption",items:"items",toselect:"toselect"},decls:2,vars:2,consts:[[4,"ngIf"],["button","",3,"color","click",4,"ngFor","ngForOf"],["button","",3,"color","click"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","end",1,"ion-text-wrap"]],template:function(e,t){1&e&&(n.wc(0,r,2,1,"div",0),n.wc(1,l,2,1,"small",0)),2&e&&(n.oc("ngIf",t.toselect),n.Mb(1),n.oc("ngIf",!t.toselect))},directives:[c.j,c.i,i.x,i.U,i.J,i.D],styles:[""]}),e})()}}]);