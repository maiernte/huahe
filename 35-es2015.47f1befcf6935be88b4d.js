(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{lotG:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),c=i("3Pt+"),o=i("tyNb"),s=i("c7TG"),d=i("mrSG"),r=i("LTmD"),a=i("gTpY"),l=i("ylIl"),u=i("HULg"),b=i("+z1p"),h=(i("0eVs"),i("fXoL")),f=i("zioG");let g=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.alertController=e,this.Editor=b,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","|","link","undo","redo"]}}ngOnInit(){}onSave(){this.modalCtrl.dismiss(this.Content)}onCancel(){this.modalCtrl.dismiss("cancel")}onDelete(){return Object(d.b)(this,void 0,void 0,(function*(){(yield this.presentConfirm("\u5220\u9664\u5185\u5bb9",null,"\u786e\u5b9a\u5220\u9664\u6b64\u5185\u5bb9\u5417\uff1f"))&&this.modalCtrl.dismiss("delete")}))}onEditorReady(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())}presentConfirm(t,e,i){return Object(d.b)(this,void 0,void 0,(function*(){let n=!1;const c=yield this.alertController.create({header:t||"\u63d0\u793a",subHeader:e||"",message:i,buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});return yield c.present(),yield c.onWillDismiss(),Promise.resolve(n)}))}}return t.\u0275fac=function(e){return new(e||t)(h.Yb(s.cb),h.Yb(s.b))},t.\u0275cmp=h.Sb({type:t,selectors:[["app-recordcontenteditor"]],inputs:{Content:"Content"},decls:20,vars:5,consts:[["color","secondary"],["slot","start"],["color","danger",3,"hidden","click"],["name","trash"],["slot","end"],[3,"click"],["name","close-circle"],["name","save"],["scrollY","true"],[3,"ngModel","config","editor","ngModelChange","ready"]],template:function(t,e){1&t&&(h.dc(0,"ion-header"),h.dc(1,"ion-toolbar",0),h.dc(2,"ion-buttons",1),h.dc(3,"ion-button",2),h.lc("click",(function(){return e.onDelete()})),h.Zb(4,"ion-icon",3),h.dc(5,"ion-label"),h.Ic(6,"\u5220\u9664"),h.cc(),h.cc(),h.cc(),h.dc(7,"ion-title"),h.Ic(8),h.cc(),h.dc(9,"ion-buttons",4),h.dc(10,"ion-button",5),h.lc("click",(function(){return e.onCancel()})),h.Zb(11,"ion-icon",6),h.dc(12,"ion-text"),h.Ic(13,"\u53d6\u6d88"),h.cc(),h.cc(),h.dc(14,"ion-button",5),h.lc("click",(function(){return e.onSave()})),h.Zb(15,"ion-icon",7),h.dc(16,"ion-text"),h.Ic(17,"\u4fdd\u5b58"),h.cc(),h.cc(),h.cc(),h.cc(),h.cc(),h.dc(18,"ion-content",8),h.dc(19,"ckeditor",9),h.lc("ngModelChange",(function(t){return e.Content.text=t}))("ready",(function(t){return e.onEditorReady(t)})),h.cc(),h.cc()),2&t&&(h.Nb(3),h.vc("hidden",0===e.Content.time),h.Nb(5),h.Kc("\u7f16\u8f91\uff1a",e.Content.type,""),h.Nb(11),h.vc("ngModel",e.Content.text)("config",e.EditorConfig)("editor",e.Editor))},directives:[s.t,s.Y,s.j,s.i,s.u,s.D,s.W,s.T,s.n,f.a,c.f,c.g],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}"]}),t})();var m=i("Y6BA"),p=i("i/bi");let v=(()=>{class t{transform(t,e){return new Date(t).toChinaStr(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=h.Xb({name:"chinadate",type:t,pure:!0}),t})();function C(t,e){if(1&t){const t=h.ec();h.dc(0,"ion-header"),h.dc(1,"ion-toolbar"),h.dc(2,"ion-buttons",7),h.Zb(3,"ion-back-button",8),h.cc(),h.dc(4,"ion-title"),h.Ic(5),h.cc(),h.dc(6,"ion-buttons",9),h.dc(7,"ion-button",10),h.lc("click",(function(){h.Bc(t);const e=h.oc();return e.HiddenCode=!e.HiddenCode})),h.Zb(8,"ion-icon",11),h.cc(),h.cc(),h.cc(),h.cc()}if(2&t){const t=h.oc();h.Nb(2),h.vc("hidden",t.EditModul),h.Nb(3),h.Jc(t.NodeName),h.Nb(3),h.vc("name",t.HiddenCode?"arrow-dropup":"arrow-dropdown")}}function x(t,e){if(1&t){const t=h.ec();h.dc(0,"ion-toolbar"),h.dc(1,"ion-buttons",12),h.dc(2,"ion-button",13),h.Ic(3," \u603b\u76ee\u5f55 "),h.cc(),h.dc(4,"ion-button",14),h.lc("click",(function(){return h.Bc(t),h.oc().NextRecord(-1)})),h.Zb(5,"ion-icon",15),h.cc(),h.dc(6,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u80cc\u666f")})),h.Zb(7,"ion-icon",17),h.dc(8,"ion-text"),h.Ic(9,"\u80cc\u666f"),h.cc(),h.cc(),h.dc(10,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u53cd\u9988")})),h.Zb(11,"ion-icon",17),h.dc(12,"ion-text"),h.Ic(13,"\u53cd\u9988"),h.cc(),h.cc(),h.dc(14,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u89e3\u8bfb")})),h.Zb(15,"ion-icon",17),h.dc(16,"ion-text"),h.Ic(17,"\u89e3\u8bfb"),h.cc(),h.cc(),h.dc(18,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().EidtTitel()})),h.Zb(19,"ion-icon",18),h.dc(20,"ion-text"),h.Ic(21,"\u95ee\u5ff5"),h.cc(),h.cc(),h.dc(22,"ion-button",19),h.lc("click",(function(){return h.Bc(t),h.oc().NextRecord(1)})),h.Zb(23,"ion-icon",20),h.cc(),h.cc(),h.dc(24,"ion-buttons",9),h.dc(25,"ion-button",10),h.lc("click",(function(){h.Bc(t);const e=h.oc();return e.HiddenCode=!e.HiddenCode})),h.Zb(26,"ion-icon",11),h.cc(),h.cc(),h.cc()}if(2&t){const t=h.oc();h.Nb(4),h.vc("disabled",0===t.Index),h.Nb(18),h.vc("disabled",t.Index===t.Length-1),h.Nb(4),h.vc("name",t.HiddenCode?"arrow-dropup":"arrow-dropdown")}}function w(t,e){if(1&t&&(h.dc(0,"div",2),h.dc(1,"div",21),h.Ic(2),h.cc(),h.cc()),2&t){const t=h.oc();h.vc("suiCollapse",!t.HiddenCode),h.Nb(2),h.Kc(" ",t.PanName," ")}}function I(t,e){if(1&t&&h.Zb(0,"app-baziview",22),2&t){const t=h.oc();h.vc("Config",t.Config)("BaziText",t.Bazi)}}function N(t,e){if(1&t&&h.Zb(0,"app-guaview",23),2&t){const t=h.oc();h.vc("Config",t.Config)("GuaText",t.Gua)}}function y(t,e){if(1&t){const t=h.ec();h.dc(0,"ion-item",24),h.lc("click",(function(){h.Bc(t);const i=e.$implicit;return h.oc().EditContent(i)})),h.dc(1,"ion-note",12),h.Ic(2),h.cc(),h.dc(3,"ion-label",25),h.Zb(4,"ion-text",26),h.dc(5,"p"),h.dc(6,"small"),h.Ic(7),h.pc(8,"chinadate"),h.cc(),h.cc(),h.cc(),h.cc()}if(2&t){const t=e.$implicit;h.Nb(2),h.Jc(t.type),h.Nb(2),h.vc("innerHtml",t.text,h.Cc),h.Nb(3),h.Jc(h.rc(8,3,t.time,!0))}}function z(t,e){if(1&t){const t=h.ec();h.dc(0,"ion-footer"),h.dc(1,"ion-toolbar"),h.dc(2,"ion-button",14),h.lc("click",(function(){return h.Bc(t),h.oc().NextRecord(-1)})),h.Zb(3,"ion-icon",15),h.cc(),h.dc(4,"ion-buttons"),h.dc(5,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u80cc\u666f")})),h.Zb(6,"ion-icon",17),h.dc(7,"ion-text"),h.Ic(8,"\u80cc\u666f"),h.cc(),h.cc(),h.dc(9,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u53cd\u9988")})),h.Zb(10,"ion-icon",17),h.dc(11,"ion-text"),h.Ic(12,"\u53cd\u9988"),h.cc(),h.cc(),h.dc(13,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().AddContent("\u89e3\u8bfb")})),h.Zb(14,"ion-icon",17),h.dc(15,"ion-text"),h.Ic(16,"\u89e3\u8bfb"),h.cc(),h.cc(),h.dc(17,"ion-button",16),h.lc("click",(function(){return h.Bc(t),h.oc().EidtTitel()})),h.Zb(18,"ion-icon",18),h.dc(19,"ion-text"),h.Ic(20,"\u95ee\u5ff5"),h.cc(),h.cc(),h.cc(),h.dc(21,"ion-button",19),h.lc("click",(function(){return h.Bc(t),h.oc().NextRecord(1)})),h.Zb(22,"ion-icon",20),h.cc(),h.cc(),h.cc()}if(2&t){const t=h.oc();h.Nb(2),h.vc("disabled",0===t.Index),h.Nb(19),h.vc("disabled",t.Index===t.Length-1)}}let k=(()=>{class t{constructor(t,e,i,n,c){this.route=t,this.dbservice=e,this.setting=i,this.alertCtrl=n,this.modalCtrl=c,this.EditModul=!1,this.index=0,this.smallSymbol=!1,this.HiddenCode=!1,this.HiddenTitel="",this.PanName="\u76d8\u7b26",this.route.params.subscribe(t=>{this.nodeid=t.nodeid,this.recid=t.recid})}ngOnInit(){return Object(d.b)(this,void 0,void 0,(function*(){yield this.setting.WaitInit(),this.guaconfig=Object(r.b)(this.setting.Gua),this.baziconfig=Object(r.b)(this.setting.Bazi),this.content=[],yield this.dbservice.WaitInit(),this.dbservice.GetRecordes(this.nodeid).then(t=>{this.recordes=t,this.updateRecord()}),this.dbservice.getNodes().then(t=>{const e=t.find(t=>t.id===this.nodeid);this.nodename=e.name}),setTimeout(()=>{this.HasGua?this.PanName="\u5366\u540d\uff1a"+this.guaview.GuaInText:this.HasBazi&&(this.PanName="\u516b\u5b57\uff1a"+this.baziview.BaziInText)},1e3)}))}get IsWeb(){return"web"===m.b}get Config(){return this.HasGua?this.guaconfig:this.HasBazi?this.baziconfig:null}get NodeName(){return this.nodename||"\u6848\u4f8b"}get Record(){if(this.recordes){const t=this.recordes.find(t=>t.id===this.recid);return this.index=this.recordes.indexOf(t),t}return null}get Gua(){return this.gua}get Bazi(){return this.bazi}get HasGua(){return!!this.Gua}get HasBazi(){return!!this.Bazi}get Index(){return this.index}get Length(){return(this.recordes||[]).length}get Content(){return this.content||[]}ShowHideCode(){this.HiddenCode=!this.HiddenCode,!0===this.HiddenCode&&(this.guaview?this.HiddenTitel=`${this.guaview.GuaInText} \u95ee: ${this.Record.titel}`:this.baziview&&(this.HiddenTitel=`${this.Record.titel}(${this.baziview.Gender}): ${this.baziview.BaziInText}`))}NextRecord(t){this.index=this.index+t,this.recid=this.recordes[this.Index].id,this.updateRecord()}AddContent(t){return Object(d.b)(this,void 0,void 0,(function*(){this.EditContent({type:t,time:0,text:""})}))}EditContent(t){return Object(d.b)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:g,componentProps:{Content:Object(r.b)(t)}});yield e.present();const{data:i}=yield e.onWillDismiss();"cancel"!==i&&("delete"===i?this.content=this.content.filter(e=>e!==t):0===i.time?(i.time=Date.now(),this.content.push(i)):(t.time=Date.now(),t.text=i.text),"cancel"!==i&&(this.Record.content=JSON.stringify(this.content),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{content:JSON.stringify(this.content)})))}))}EidtTitel(){return Object(d.b)(this,void 0,void 0,(function*(){let t=!1;const e=yield this.alertCtrl.create({header:"\u95ee\u5ff5\uff0f\u540d\u5b57",inputs:[{name:"titel",type:"text",id:"titel-id",value:this.Record.titel}],buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"},{text:"\u786e\u5b9a",handler:()=>{t=!0}}]});yield e.present();const{data:i}=yield e.onWillDismiss();if(t){const t=i.values.titel;this.Record.titel=t,this.guaview?(this.gua.question=t,this.Record.arg=JSON.stringify(this.gua),this.guaview.Titel="\u95ee\u5ff5\uff1a"+t):this.baziview&&(this.bazi.person=t,this.Record.arg=JSON.stringify(this.bazi),this.baziview.Person=`${t} (${this.baziview.Gender}\u9020)`),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{titel:t,arg:this.Record.arg})}}))}updateRecord(){const t=this.Record;8===t.type?(this.gua=JSON.parse(t.arg),this.bazi=null):16===t.type&&(this.bazi=JSON.parse(t.arg),this.gua=null),this.content=JSON.parse(t.content||"[]")}}return t.\u0275fac=function(e){return new(e||t)(h.Yb(o.a),h.Yb(u.a),h.Yb(r.a),h.Yb(s.b),h.Yb(s.cb))},t.\u0275cmp=h.Sb({type:t,selectors:[["app-recordviewer"]],viewQuery:function(t,e){var i;1&t&&(h.Nc(a.a,!0),h.Nc(l.a,!0)),2&t&&(h.xc(i=h.mc())&&(e.baziview=i.first),h.xc(i=h.mc())&&(e.guaview=i.first))},decls:11,vars:8,consts:[[4,"ngIf"],[3,"suiCollapse",4,"ngIf"],[3,"suiCollapse"],[2,"margin-bottom","3px"],[3,"Config","BaziText",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],["lines","inset","detail","","class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],["slot","start",3,"hidden"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],[3,"name"],["slot","start"],["routerLink","/menu/nodes","routerDirection","root"],["size","small","slot","start","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-back"],["size","small",3,"click"],["name","add"],["name","md-clipboard"],["size","small","slot","end","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-forward"],[1,"ui","segment",2,"margin-bottom","3px"],[3,"Config","BaziText"],[3,"Config","GuaText"],["lines","inset","detail","",1,"ion-text-wrap",3,"click"],[1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,e){1&t&&(h.Gc(0,C,9,3,"ion-header",0),h.Gc(1,x,27,3,"ion-toolbar",0),h.dc(2,"ion-content"),h.Gc(3,w,3,2,"div",1),h.dc(4,"div",2),h.dc(5,"div",3),h.Gc(6,I,1,2,"app-baziview",4),h.Gc(7,N,1,2,"app-guaview",5),h.cc(),h.cc(),h.dc(8,"ion-list"),h.Gc(9,y,9,6,"ion-item",6),h.cc(),h.cc(),h.Gc(10,z,23,2,"ion-footer",0)),2&t&&(h.vc("ngIf",!e.IsWeb),h.Nb(1),h.vc("ngIf",e.IsWeb),h.Nb(2),h.vc("ngIf",e.HasGua||e.HasBazi),h.Nb(1),h.vc("suiCollapse",e.HiddenCode),h.Nb(2),h.vc("ngIf",e.HasBazi),h.Nb(1),h.vc("ngIf",e.HasGua),h.Nb(2),h.vc("ngForOf",e.Content),h.Nb(1),h.vc("ngIf",!e.IsWeb))},directives:[n.j,s.n,p.c,s.E,n.i,s.t,s.Y,s.j,s.f,s.g,s.W,s.i,s.u,s.gb,o.h,s.T,a.a,l.a,s.x,s.H,s.D,s.r],pipes:[v],styles:[""]}),t})();var B=i("uEAi"),H=i("n7QD");i.d(e,"RecordviewerPageModule",(function(){return R}));const G=[{path:"",component:k}];let R=(()=>{class t{}return t.\u0275mod=h.Wb({type:t}),t.\u0275inj=h.Vb({factory:function(e){return new(e||t)},imports:[[B.a,H.a,f.b,p.e,n.b,c.c,s.Z,o.j.forChild(G)]]}),t})()}}]);