(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{lotG:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),c=i("3Pt+"),o=i("tyNb"),s=i("c7TG"),d=i("mrSG"),r=i("LTmD"),a=i("gTpY"),l=i("ylIl"),u=i("HULg"),h=i("+z1p"),b=(i("0eVs"),i("fXoL")),f=i("zioG");let g=(()=>{class t{constructor(t){this.modalCtrl=t,this.Editor=h,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","|","link","undo","redo"]}}ngOnInit(){}onSave(){this.modalCtrl.dismiss(this.Content)}onCancel(){this.modalCtrl.dismiss("cancel")}onDelete(){this.modalCtrl.dismiss("delete")}}return t.\u0275fac=function(e){return new(e||t)(b.Zb(s.fb))},t.\u0275cmp=b.Tb({type:t,selectors:[["app-recordcontenteditor"]],inputs:{Content:"Content"},decls:23,vars:5,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["scrollY","true"],[3,"ngModel","config","editor","ngModelChange"],["fill","clear","color","danger",3,"hidden","click"],["name","trash"]],template:function(t,e){1&t&&(b.ec(0,"ion-header"),b.ec(1,"ion-toolbar",0),b.ec(2,"ion-buttons",1),b.ec(3,"ion-button",2),b.mc("click",(function(){return e.onCancel()})),b.ac(4,"ion-icon",3),b.ec(5,"ion-text"),b.Hc(6,"\u53d6\u6d88"),b.dc(),b.dc(),b.dc(),b.ec(7,"ion-title"),b.Hc(8),b.dc(),b.ec(9,"ion-buttons",4),b.ec(10,"ion-button",2),b.mc("click",(function(){return e.onSave()})),b.ac(11,"ion-icon",5),b.ec(12,"ion-text"),b.Hc(13,"\u4fdd\u5b58"),b.dc(),b.dc(),b.dc(),b.dc(),b.dc(),b.ec(14,"ion-content",6),b.ec(15,"ckeditor",7),b.mc("ngModelChange",(function(t){return e.Content.text=t})),b.dc(),b.dc(),b.ec(16,"ion-footer"),b.ec(17,"ion-toolbar"),b.ec(18,"ion-buttons",4),b.ec(19,"ion-button",8),b.mc("click",(function(){return e.onDelete()})),b.ac(20,"ion-icon",9),b.ec(21,"ion-label"),b.Hc(22,"\u5220\u9664"),b.dc(),b.dc(),b.dc(),b.dc(),b.dc()),2&t&&(b.Nb(8),b.Jc("\u7f16\u8f91\uff1a",e.Content.type,""),b.Nb(7),b.uc("ngModel",e.Content.text)("config",e.EditorConfig)("editor",e.Editor),b.Nb(4),b.uc("hidden",0===e.Content.time))},directives:[s.t,s.bb,s.j,s.i,s.u,s.W,s.Z,s.n,f.a,c.f,c.g,s.r,s.D],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}"]}),t})();var m=i("i/bi");let p=(()=>{class t{transform(t,e){return new Date(t).toChinaStr(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=b.Yb({name:"chinadate",type:t,pure:!0}),t})();function C(t,e){if(1&t&&(b.ec(0,"div",6),b.ec(1,"div",18),b.Hc(2),b.dc(),b.dc()),2&t){const t=b.pc();b.uc("suiCollapse",!t.HiddenCode),b.Nb(2),b.Jc(" ",t.PanName," ")}}function v(t,e){if(1&t&&b.ac(0,"app-baziview",19),2&t){const t=b.pc();b.uc("Config",t.Config)("BaziText",t.Bazi)}}function x(t,e){if(1&t&&b.ac(0,"app-guaview",20),2&t){const t=b.pc();b.uc("Config",t.Config)("GuaText",t.Gua)}}function w(t,e){if(1&t){const t=b.fc();b.ec(0,"ion-item",21),b.mc("click",(function(){b.Ac(t);const i=e.$implicit;return b.pc().EditContent(i)})),b.ec(1,"ion-note",22),b.Hc(2),b.dc(),b.ec(3,"ion-label",23),b.ac(4,"ion-text",24),b.ec(5,"p"),b.ec(6,"small"),b.Hc(7),b.qc(8,"chinadate"),b.dc(),b.dc(),b.dc(),b.dc()}if(2&t){const t=e.$implicit;b.Nb(2),b.Ic(t.type),b.Nb(2),b.uc("innerHtml",t.text,b.Bc),b.Nb(3),b.Ic(b.rc(8,3,t.time,!0))}}let z=(()=>{class t{constructor(t,e,i,n,c){this.route=t,this.dbservice=e,this.setting=i,this.alertCtrl=n,this.modalCtrl=c,this.EditModul=!1,this.index=0,this.smallSymbol=!1,this.HiddenCode=!1,this.HiddenTitel="",this.PanName="\u76d8\u7b26",this.route.params.subscribe(t=>{this.nodeid=t.nodeid,this.recid=t.recid})}ngOnInit(){return Object(d.b)(this,void 0,void 0,(function*(){yield this.setting.WaitInit(),this.guaconfig=Object(r.b)(this.setting.Gua),this.baziconfig=Object(r.b)(this.setting.Bazi),this.content=[],yield this.dbservice.WaitInit(),this.dbservice.GetRecordes(this.nodeid).then(t=>{this.recordes=t,this.updateRecord()}),this.dbservice.getNodes().then(t=>{const e=t.find(t=>t.id===this.nodeid);this.nodename=e.name}),setTimeout(()=>{this.HasGua?this.PanName="\u5366\u540d\uff1a"+this.guaview.GuaInText:this.HasBazi&&(this.PanName="\u516b\u5b57\uff1a"+this.baziview.BaziInText)},1e3)}))}get Config(){return this.HasGua?this.guaconfig:this.HasBazi?this.baziconfig:null}get NodeName(){return this.nodename||"\u6848\u4f8b"}get Record(){if(this.recordes){const t=this.recordes.find(t=>t.id===this.recid);return this.index=this.recordes.indexOf(t),t}return null}get Gua(){return this.gua}get Bazi(){return this.bazi}get HasGua(){return!!this.Gua}get HasBazi(){return!!this.Bazi}get Index(){return this.index}get Length(){return(this.recordes||[]).length}get Content(){return this.content||[]}ShowHideCode(){this.HiddenCode=!this.HiddenCode,!0===this.HiddenCode&&(this.guaview?this.HiddenTitel=`${this.guaview.GuaInText} \u95ee: ${this.Record.titel}`:this.baziview&&(this.HiddenTitel=`${this.Record.titel}(${this.baziview.Gender}): ${this.baziview.BaziInText}`))}NextRecord(t){this.index=this.index+t,this.recid=this.recordes[this.Index].id,this.updateRecord()}AddContent(t){return Object(d.b)(this,void 0,void 0,(function*(){this.EditContent({type:t,time:0,text:""})}))}EditContent(t){return Object(d.b)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:g,componentProps:{Content:Object(r.b)(t)}});yield e.present();const{data:i}=yield e.onWillDismiss();"cancel"!==i&&("delete"===i?this.content=this.content.filter(e=>e!==t):0===i.time?(i.time=Date.now(),this.content.push(i)):(t.time=Date.now(),t.text=i.text),"cancel"!==i&&(this.Record.content=JSON.stringify(this.content),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{content:JSON.stringify(this.content)})))}))}EidtTitel(){return Object(d.b)(this,void 0,void 0,(function*(){let t=!1;const e=yield this.alertCtrl.create({header:"\u95ee\u5ff5\uff0f\u540d\u5b57",inputs:[{name:"titel",type:"text",id:"titel-id",value:this.Record.titel}],buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"},{text:"\u786e\u5b9a",handler:()=>{t=!0}}]});yield e.present();const{data:i}=yield e.onWillDismiss();if(t){const t=i.values.titel;this.Record.titel=t,this.guaview?(this.gua.question=t,this.Record.arg=JSON.stringify(this.gua),this.guaview.Titel="\u95ee\u5ff5\uff1a"+t):this.baziview&&(this.bazi.person=t,this.Record.arg=JSON.stringify(this.bazi),this.baziview.Person=`${t} (${this.baziview.Gender}\u9020)`),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{titel:t,arg:this.Record.arg})}}))}updateRecord(){const t=this.Record;8===t.type?(this.gua=JSON.parse(t.arg),this.bazi=null):16===t.type&&(this.bazi=JSON.parse(t.arg),this.gua=null),this.content=JSON.parse(t.content||"[]")}}return t.\u0275fac=function(e){return new(e||t)(b.Zb(o.a),b.Zb(u.a),b.Zb(r.a),b.Zb(s.b),b.Zb(s.fb))},t.\u0275cmp=b.Tb({type:t,selectors:[["app-recordviewer"]],viewQuery:function(t,e){var i;1&t&&(b.Mc(a.a,!0),b.Mc(l.a,!0)),2&t&&(b.wc(i=b.nc())&&(e.baziview=i.first),b.wc(i=b.nc())&&(e.guaview=i.first))},decls:40,vars:10,consts:[["slot","start",3,"hidden"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],[3,"name"],[3,"suiCollapse",4,"ngIf"],[3,"suiCollapse"],[2,"margin-bottom","3px"],[3,"Config","BaziText",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],["lines","inset","detail","","class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],["size","small","slot","start","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-back"],["size","small",3,"click"],["name","add"],["name","md-clipboard"],["size","small","slot","end","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-forward"],[1,"ui","segment",2,"margin-bottom","3px"],[3,"Config","BaziText"],[3,"Config","GuaText"],["lines","inset","detail","",1,"ion-text-wrap",3,"click"],["slot","start"],[1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,e){1&t&&(b.ec(0,"ion-header"),b.ec(1,"ion-toolbar"),b.ec(2,"ion-buttons",0),b.ac(3,"ion-back-button",1),b.dc(),b.ec(4,"ion-title"),b.Hc(5),b.dc(),b.ec(6,"ion-buttons",2),b.ec(7,"ion-button",3),b.mc("click",(function(){return e.HiddenCode=!e.HiddenCode})),b.ac(8,"ion-icon",4),b.dc(),b.dc(),b.dc(),b.dc(),b.ec(9,"ion-content"),b.Fc(10,C,3,2,"div",5),b.ec(11,"div",6),b.ec(12,"div",7),b.Fc(13,v,1,2,"app-baziview",8),b.Fc(14,x,1,2,"app-guaview",9),b.dc(),b.dc(),b.ec(15,"ion-list"),b.Fc(16,w,9,6,"ion-item",10),b.dc(),b.dc(),b.ec(17,"ion-footer"),b.ec(18,"ion-toolbar"),b.ec(19,"ion-button",11),b.mc("click",(function(){return e.NextRecord(-1)})),b.ac(20,"ion-icon",12),b.dc(),b.ec(21,"ion-buttons"),b.ec(22,"ion-button",13),b.mc("click",(function(){return e.AddContent("\u80cc\u666f")})),b.ac(23,"ion-icon",14),b.ec(24,"ion-text"),b.Hc(25,"\u80cc\u666f"),b.dc(),b.dc(),b.ec(26,"ion-button",13),b.mc("click",(function(){return e.AddContent("\u53cd\u9988")})),b.ac(27,"ion-icon",14),b.ec(28,"ion-text"),b.Hc(29,"\u53cd\u9988"),b.dc(),b.dc(),b.ec(30,"ion-button",13),b.mc("click",(function(){return e.AddContent("\u89e3\u8bfb")})),b.ac(31,"ion-icon",14),b.ec(32,"ion-text"),b.Hc(33,"\u89e3\u8bfb"),b.dc(),b.dc(),b.ec(34,"ion-button",13),b.mc("click",(function(){return e.EidtTitel()})),b.ac(35,"ion-icon",15),b.ec(36,"ion-text"),b.Hc(37,"\u95ee\u5ff5"),b.dc(),b.dc(),b.dc(),b.ec(38,"ion-button",16),b.mc("click",(function(){return e.NextRecord(1)})),b.ac(39,"ion-icon",17),b.dc(),b.dc(),b.dc()),2&t&&(b.Nb(2),b.uc("hidden",e.EditModul),b.Nb(3),b.Ic(e.NodeName),b.Nb(3),b.uc("name",e.HiddenCode?"arrow-dropup":"arrow-dropdown"),b.Nb(2),b.uc("ngIf",e.HasGua||e.HasBazi),b.Nb(1),b.uc("suiCollapse",e.HiddenCode),b.Nb(2),b.uc("ngIf",e.HasBazi),b.Nb(1),b.uc("ngIf",e.HasGua),b.Nb(2),b.uc("ngForOf",e.Content),b.Nb(3),b.uc("disabled",0===e.Index),b.Nb(19),b.uc("disabled",e.Index===e.Length-1))},directives:[s.t,s.bb,s.j,s.f,s.g,s.Z,s.i,s.u,s.n,n.j,m.c,s.E,n.i,s.r,s.W,a.a,l.a,s.x,s.J,s.D],pipes:[p],styles:[""]}),t})();var H=i("uEAi"),N=i("n7QD");i.d(e,"RecordviewerPageModule",(function(){return k}));const y=[{path:"",component:z}];let k=(()=>{class t{}return t.\u0275mod=b.Xb({type:t}),t.\u0275inj=b.Wb({factory:function(e){return new(e||t)},imports:[[H.a,N.a,f.b,m.e,n.b,c.c,s.cb,o.i.forChild(y)]]}),t})()}}]);