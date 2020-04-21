function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{lotG:function(t,e,n){"use strict";n.r(e);var i,c,o=n("ofXK"),r=n("3Pt+"),a=n("tyNb"),s=n("c7TG"),d=n("mrSG"),u=n("LTmD"),l=n("gTpY"),b=n("ylIl"),f=n("HULg"),h=n("+z1p"),v=(n("0eVs"),n("fXoL")),g=n("zioG"),m=((i=function(){function t(e,n){_classCallCheck(this,t),this.modalCtrl=e,this.alertController=n,this.Editor=h,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","|","link","undo","redo"]}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSave",value:function(){this.modalCtrl.dismiss(this.Content)}},{key:"onCancel",value:function(){this.modalCtrl.dismiss("cancel")}},{key:"onDelete",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.presentConfirm("\u5220\u9664\u5185\u5bb9",null,"\u786e\u5b9a\u5220\u9664\u6b64\u5185\u5bb9\u5417\uff1f");case 2:if(t.t0=t.sent,!t.t0){t.next=5;break}this.modalCtrl.dismiss("delete");case 5:case"end":return t.stop()}}),t,this)})))}},{key:"onEditorReady",value:function(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())}},{key:"presentConfirm",value:function(t,e,n){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c,o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return c=!1,i.next=3,this.alertController.create({header:t||"\u63d0\u793a",subHeader:e||"",message:n,buttons:[{text:"\u786e\u5b9a",handler:function(){c=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return o=i.sent,i.next=6,o.present();case 6:return i.next=8,o.onWillDismiss();case 8:return i.abrupt("return",Promise.resolve(c));case 9:case"end":return i.stop()}}),i,this)})))}}]),t}()).\u0275fac=function(t){return new(t||i)(v.Yb(s.ab),v.Yb(s.b))},i.\u0275cmp=v.Sb({type:i,selectors:[["app-recordcontenteditor"]],inputs:{Content:"Content"},decls:20,vars:5,consts:[["color","secondary"],["slot","start"],["color","danger",3,"hidden","click"],["name","trash"],["slot","end"],[3,"click"],["name","close-circle"],["name","save"],["scrollY","true"],[3,"ngModel","config","editor","ngModelChange","ready"]],template:function(t,e){1&t&&(v.dc(0,"ion-header"),v.dc(1,"ion-toolbar",0),v.dc(2,"ion-buttons",1),v.dc(3,"ion-button",2),v.lc("click",(function(){return e.onDelete()})),v.Zb(4,"ion-icon",3),v.dc(5,"ion-label"),v.Jc(6,"\u5220\u9664"),v.cc(),v.cc(),v.cc(),v.dc(7,"ion-title"),v.Jc(8),v.cc(),v.dc(9,"ion-buttons",4),v.dc(10,"ion-button",5),v.lc("click",(function(){return e.onCancel()})),v.Zb(11,"ion-icon",6),v.dc(12,"ion-text"),v.Jc(13,"\u53d6\u6d88"),v.cc(),v.cc(),v.dc(14,"ion-button",5),v.lc("click",(function(){return e.onSave()})),v.Zb(15,"ion-icon",7),v.dc(16,"ion-text"),v.Jc(17,"\u4fdd\u5b58"),v.cc(),v.cc(),v.cc(),v.cc(),v.cc(),v.dc(18,"ion-content",8),v.dc(19,"ckeditor",9),v.lc("ngModelChange",(function(t){return e.Content.text=t}))("ready",(function(t){return e.onEditorReady(t)})),v.cc(),v.cc()),2&t&&(v.Nb(3),v.vc("hidden",0===e.Content.time),v.Nb(5),v.Lc("\u7f16\u8f91\uff1a",e.Content.type,""),v.Nb(11),v.vc("ngModel",e.Content.text)("config",e.EditorConfig)("editor",e.Editor))},directives:[s.s,s.W,s.i,s.h,s.t,s.C,s.U,s.S,s.m,g.a,r.f,r.g],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}"]}),i),p=n("Y6BA"),C=n("i/bi"),x=((c=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){return new Date(t).toChinaStr(e)}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275pipe=v.Xb({name:"chinadate",type:c,pure:!0}),c);function k(t,e){if(1&t){var n=v.ec();v.dc(0,"ion-header"),v.dc(1,"ion-toolbar"),v.dc(2,"ion-buttons",7),v.Zb(3,"ion-back-button",8),v.cc(),v.dc(4,"ion-title"),v.Jc(5),v.cc(),v.dc(6,"ion-buttons",9),v.dc(7,"ion-button",10),v.lc("click",(function(){v.Cc(n);var t=v.oc();return t.HiddenCode=!t.HiddenCode})),v.Zb(8,"ion-icon",11),v.cc(),v.cc(),v.cc(),v.cc()}if(2&t){var i=v.oc();v.Nb(2),v.vc("hidden",i.EditModul),v.Nb(3),v.Kc(i.NodeName),v.Nb(3),v.vc("name",i.HiddenCode?"arrow-dropup":"arrow-dropdown")}}function w(t,e){if(1&t){var n=v.ec();v.dc(0,"ion-toolbar"),v.dc(1,"ion-buttons",12),v.dc(2,"ion-button",13),v.Jc(3," \u603b\u76ee\u5f55 "),v.cc(),v.dc(4,"ion-button",14),v.lc("click",(function(){return v.Cc(n),v.oc().NextRecord(-1)})),v.Zb(5,"ion-icon",15),v.cc(),v.dc(6,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u80cc\u666f")})),v.Zb(7,"ion-icon",17),v.dc(8,"ion-text"),v.Jc(9,"\u80cc\u666f"),v.cc(),v.cc(),v.dc(10,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u53cd\u9988")})),v.Zb(11,"ion-icon",17),v.dc(12,"ion-text"),v.Jc(13,"\u53cd\u9988"),v.cc(),v.cc(),v.dc(14,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u89e3\u8bfb")})),v.Zb(15,"ion-icon",17),v.dc(16,"ion-text"),v.Jc(17,"\u89e3\u8bfb"),v.cc(),v.cc(),v.dc(18,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().EidtTitel()})),v.Zb(19,"ion-icon",18),v.dc(20,"ion-text"),v.Jc(21,"\u95ee\u5ff5"),v.cc(),v.cc(),v.dc(22,"ion-button",19),v.lc("click",(function(){return v.Cc(n),v.oc().NextRecord(1)})),v.Zb(23,"ion-icon",20),v.cc(),v.cc(),v.dc(24,"ion-buttons",9),v.dc(25,"ion-button",10),v.lc("click",(function(){v.Cc(n);var t=v.oc();return t.HiddenCode=!t.HiddenCode})),v.Zb(26,"ion-icon",11),v.cc(),v.cc(),v.cc()}if(2&t){var i=v.oc();v.Nb(4),v.vc("disabled",0===i.Index),v.Nb(18),v.vc("disabled",i.Index===i.Length-1),v.Nb(4),v.vc("name",i.HiddenCode?"arrow-dropup":"arrow-dropdown")}}function y(t,e){if(1&t&&(v.dc(0,"div",2),v.dc(1,"div",21),v.Jc(2),v.cc(),v.cc()),2&t){var n=v.oc();v.vc("suiCollapse",!n.HiddenCode),v.Nb(2),v.Lc(" ",n.PanName," ")}}function N(t,e){if(1&t&&v.Zb(0,"app-baziview",22),2&t){var n=v.oc();v.vc("Config",n.Config)("BaziText",n.Bazi)}}function R(t,e){if(1&t&&v.Zb(0,"app-guaview",23),2&t){var n=v.oc();v.vc("Config",n.Config)("GuaText",n.Gua)}}function z(t,e){if(1&t){var n=v.ec();v.dc(0,"ion-item",24),v.lc("click",(function(){v.Cc(n);var t=e.$implicit;return v.oc().EditContent(t)})),v.dc(1,"ion-note",12),v.Jc(2),v.cc(),v.dc(3,"ion-label",25),v.Zb(4,"ion-text",26),v.dc(5,"p"),v.dc(6,"small"),v.Jc(7),v.pc(8,"chinadate"),v.cc(),v.cc(),v.cc(),v.cc()}if(2&t){var i=e.$implicit;v.Nb(2),v.Kc(i.type),v.Nb(2),v.vc("innerHtml",i.text,v.Dc),v.Nb(3),v.Kc(v.rc(8,3,i.time,!0))}}function H(t,e){if(1&t){var n=v.ec();v.dc(0,"ion-footer"),v.dc(1,"ion-toolbar"),v.dc(2,"ion-button",14),v.lc("click",(function(){return v.Cc(n),v.oc().NextRecord(-1)})),v.Zb(3,"ion-icon",15),v.cc(),v.dc(4,"ion-buttons"),v.dc(5,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u80cc\u666f")})),v.Zb(6,"ion-icon",17),v.dc(7,"ion-text"),v.Jc(8,"\u80cc\u666f"),v.cc(),v.cc(),v.dc(9,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u53cd\u9988")})),v.Zb(10,"ion-icon",17),v.dc(11,"ion-text"),v.Jc(12,"\u53cd\u9988"),v.cc(),v.cc(),v.dc(13,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().AddContent("\u89e3\u8bfb")})),v.Zb(14,"ion-icon",17),v.dc(15,"ion-text"),v.Jc(16,"\u89e3\u8bfb"),v.cc(),v.cc(),v.dc(17,"ion-button",16),v.lc("click",(function(){return v.Cc(n),v.oc().EidtTitel()})),v.Zb(18,"ion-icon",18),v.dc(19,"ion-text"),v.Jc(20,"\u95ee\u5ff5"),v.cc(),v.cc(),v.cc(),v.dc(21,"ion-button",19),v.lc("click",(function(){return v.Cc(n),v.oc().NextRecord(1)})),v.Zb(22,"ion-icon",20),v.cc(),v.cc(),v.cc()}if(2&t){var i=v.oc();v.Nb(2),v.vc("disabled",0===i.Index),v.Nb(19),v.vc("disabled",i.Index===i.Length-1)}}var I,O=((I=function(){function t(e,n,i,c,o){var r=this;_classCallCheck(this,t),this.route=e,this.dbservice=n,this.setting=i,this.alertCtrl=c,this.modalCtrl=o,this.EditModul=!1,this.index=0,this.smallSymbol=!1,this.HiddenCode=!1,this.HiddenTitel="",this.PanName="\u76d8\u7b26",this.route.params.subscribe((function(t){r.nodeid=t.nodeid,r.recid=t.recid}))}return _createClass(t,[{key:"ngOnInit",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setting.WaitInit();case 2:return this.guaconfig=Object(u.b)(this.setting.Gua),this.baziconfig=Object(u.b)(this.setting.Bazi),this.content=[],t.next=7,this.dbservice.WaitInit();case 7:this.dbservice.GetRecordes(this.nodeid).then((function(t){e.recordes=t,e.updateRecord()})),this.dbservice.getNodes().then((function(t){var n=t.find((function(t){return t.id===e.nodeid}));e.nodename=n.name})),setTimeout((function(){e.HasGua?e.PanName="\u5366\u540d\uff1a"+e.guaview.GuaInText:e.HasBazi&&(e.PanName="\u516b\u5b57\uff1a"+e.baziview.BaziInText)}),1e3);case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ShowHideCode",value:function(){this.HiddenCode=!this.HiddenCode,!0===this.HiddenCode&&(this.guaview?this.HiddenTitel="".concat(this.guaview.GuaInText," \u95ee: ").concat(this.Record.titel):this.baziview&&(this.HiddenTitel="".concat(this.Record.titel,"(").concat(this.baziview.Gender,"): ").concat(this.baziview.BaziInText)))}},{key:"NextRecord",value:function(t){this.index=this.index+t,this.recid=this.recordes[this.Index].id,this.updateRecord()}},{key:"AddContent",value:function(t){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.EditContent({type:t,time:0,text:""});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"EditContent",value:function(t){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:m,componentProps:{Content:Object(u.b)(t)}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.next=7,n.onWillDismiss();case 7:i=e.sent,"cancel"!==(c=i.data)&&("delete"===c?this.content=this.content.filter((function(e){return e!==t})):0===c.time?(c.time=Date.now(),this.content.push(c)):(t.time=Date.now(),t.text=c.text),"cancel"!==c&&(this.Record.content=JSON.stringify(this.content),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{content:JSON.stringify(this.content)})));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"EidtTitel",value:function(){return Object(d.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.next=3,this.alertCtrl.create({header:"\u95ee\u5ff5\uff0f\u540d\u5b57",inputs:[{name:"titel",type:"text",id:"titel-id",value:this.Record.titel}],buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"},{text:"\u786e\u5b9a",handler:function(){e=!0}}]});case 3:return n=t.sent,t.next=6,n.present();case 6:return t.next=8,n.onWillDismiss();case 8:i=t.sent,c=i.data,e&&(o=c.values.titel,this.Record.titel=o,this.guaview?(this.gua.question=o,this.Record.arg=JSON.stringify(this.gua),this.guaview.Titel="\u95ee\u5ff5\uff1a"+o):this.baziview&&(this.bazi.person=o,this.Record.arg=JSON.stringify(this.bazi),this.baziview.Person="".concat(o," (").concat(this.baziview.Gender,"\u9020)")),this.dbservice.SaveRecord(this.Record.id,this.Record.node,{titel:o,arg:this.Record.arg}));case 11:case"end":return t.stop()}}),t,this)})))}},{key:"updateRecord",value:function(){var t=this.Record;8===t.type?(this.gua=JSON.parse(t.arg),this.bazi=null):16===t.type&&(this.bazi=JSON.parse(t.arg),this.gua=null),this.content=JSON.parse(t.content||"[]")}},{key:"IsWeb",get:function(){return"web"===p.b}},{key:"Config",get:function(){return this.HasGua?this.guaconfig:this.HasBazi?this.baziconfig:null}},{key:"NodeName",get:function(){return this.nodename||"\u6848\u4f8b"}},{key:"Record",get:function(){var t=this;if(this.recordes){var e=this.recordes.find((function(e){return e.id===t.recid}));return this.index=this.recordes.indexOf(e),e}return null}},{key:"Gua",get:function(){return this.gua}},{key:"Bazi",get:function(){return this.bazi}},{key:"HasGua",get:function(){return!!this.Gua}},{key:"HasBazi",get:function(){return!!this.Bazi}},{key:"Index",get:function(){return this.index}},{key:"Length",get:function(){return(this.recordes||[]).length}},{key:"Content",get:function(){return this.content||[]}}]),t}()).\u0275fac=function(t){return new(t||I)(v.Yb(a.a),v.Yb(f.a),v.Yb(u.a),v.Yb(s.b),v.Yb(s.ab))},I.\u0275cmp=v.Sb({type:I,selectors:[["app-recordviewer"]],viewQuery:function(t,e){var n;1&t&&(v.Oc(l.a,!0),v.Oc(b.a,!0)),2&t&&(v.yc(n=v.mc())&&(e.baziview=n.first),v.yc(n=v.mc())&&(e.guaview=n.first))},decls:11,vars:8,consts:[[4,"ngIf"],[3,"suiCollapse",4,"ngIf"],[3,"suiCollapse"],[2,"margin-bottom","3px"],[3,"Config","BaziText",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],["lines","inset","detail","","class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],["slot","start",3,"hidden"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],[3,"name"],["slot","start"],["routerLink","/menu/nodes","routerDirection","root"],["size","small","slot","start","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-back"],["size","small",3,"click"],["name","add"],["name","md-clipboard"],["size","small","slot","end","fill","clear",3,"disabled","click"],["slot","icon-only","name","ios-arrow-forward"],[1,"ui","segment",2,"margin-bottom","3px"],[3,"Config","BaziText"],[3,"Config","GuaText"],["lines","inset","detail","",1,"ion-text-wrap",3,"click"],[1,"ion-text-wrap"],[3,"innerHtml"]],template:function(t,e){1&t&&(v.Hc(0,k,9,3,"ion-header",0),v.Hc(1,w,27,3,"ion-toolbar",0),v.dc(2,"ion-content"),v.Hc(3,y,3,2,"div",1),v.dc(4,"div",2),v.dc(5,"div",3),v.Hc(6,N,1,2,"app-baziview",4),v.Hc(7,R,1,2,"app-guaview",5),v.cc(),v.cc(),v.dc(8,"ion-list"),v.Hc(9,z,9,6,"ion-item",6),v.cc(),v.cc(),v.Hc(10,H,23,2,"ion-footer",0)),2&t&&(v.vc("ngIf",!e.IsWeb),v.Nb(1),v.vc("ngIf",e.IsWeb),v.Nb(2),v.vc("ngIf",e.HasGua||e.HasBazi),v.Nb(1),v.vc("suiCollapse",e.HiddenCode),v.Nb(2),v.vc("ngIf",e.HasBazi),v.Nb(1),v.vc("ngIf",e.HasGua),v.Nb(2),v.vc("ngForOf",e.Content),v.Nb(1),v.vc("ngIf",!e.IsWeb))},directives:[o.j,s.m,C.c,s.D,o.i,s.s,s.W,s.i,s.f,s.g,s.U,s.h,s.t,s.eb,a.h,s.S,l.a,b.a,s.w,s.G,s.C,s.q],pipes:[x],styles:[""]}),I),J=n("uEAi"),G=n("n7QD");n.d(e,"RecordviewerPageModule",(function(){return Z}));var T,E=[{path:"",component:O}],Z=((T=function t(){_classCallCheck(this,t)}).\u0275mod=v.Wb({type:T}),T.\u0275inj=v.Vb({factory:function(t){return new(t||T)},imports:[[J.a,G.a,g.b,C.e,o.b,r.c,s.X,a.j.forChild(E)]]}),T)}}]);