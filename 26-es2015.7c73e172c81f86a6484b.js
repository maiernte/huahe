(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CGrG:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var i=n("mrSG"),r=n("fXoL");const o=function(){var e={arrayBuffer:0,binaryString:1,dataURL:2,text:3};return e[e.arrayBuffer]="arrayBuffer",e[e.binaryString]="binaryString",e[e.dataURL]="dataURL",e[e.text]="text",e}();class s{constructor(e,t,n){this._underlyingFile=e,this._readMode=t,this._content=n}get name(){return this._underlyingFile.name}get size(){return this._underlyingFile.size}get type(){return this._underlyingFile.type}get readMode(){return this._readMode}get content(){return this._content}get underlyingFile(){return this._underlyingFile}}let c=(()=>{class e{constructor(){this.filter=()=>!0,this.readStart=new r.s,this.readEnd=new r.s}readFiles(e,t){return Object(i.b)(this,void 0,void 0,(function*(){const n=Array.from(e).filter(this.filter),r=n.length;this.readStart.emit(r),yield Promise.all(n.map(e=>Object(i.b)(this,void 0,void 0,(function*(){const n=yield function(e,t){return Object(i.b)(this,void 0,void 0,(function*(){return new Promise((n,i)=>{const r=new FileReader;switch(r.onload=i=>{const r=new s(e,t,i.target.result);n(r)},r.onerror=e=>{i(e)},t){case o.arrayBuffer:r.readAsArrayBuffer(e);break;case o.binaryString:r.readAsBinaryString(e);break;case o.text:r.readAsText(e);break;case o.dataURL:default:r.readAsDataURL(e)}})}))}(e,this.readMode);t(n)})))),this.readEnd.emit(r)}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.Tb({type:e,inputs:{filter:"filter",readMode:"readMode"},outputs:{readStart:"readStart",readEnd:"readEnd"}}),e})(),l=(()=>{class e extends c{constructor(e,t){super(),this.el=e,this.renderer=t,this.accept="",this.filePick=new r.s}get multiple(){return this._multiple}set multiple(e){this._multiple=function(e){return null!=e&&"false"!==`${e}`}(e)}ngOnInit(){this._input=this.renderer.createElement("input"),this.renderer.appendChild(this.el.nativeElement,this._input),this.renderer.setAttribute(this._input,"type","file"),this.renderer.setAttribute(this._input,"accept",this.accept),this.renderer.setStyle(this._input,"display","none"),this.multiple&&this.renderer.setAttribute(this._input,"multiple","multiple"),this.renderer.listen(this._input,"change",e=>this._onListen(e))}reset(){this._input?this._input.value=null:console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}browse(){this._input?this._input.click():console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}_onListen(e){this.readFiles(e.target.files,e=>this.filePick.emit(e))}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(r.q),r.Yb(r.N))},e.\u0275dir=r.Tb({type:e,selectors:[["","ngxFilePicker",""]],hostBindings:function(e,t){1&e&&r.lc("click",(function(){return t.browse()}))},inputs:{accept:"accept",multiple:"multiple"},outputs:{filePick:"filePick"},exportAs:["ngxFilePicker"],features:[r.Kb]}),e})(),a=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(t){return new(t||e)},imports:[[]]}),e})()},Iab2:function(e,t,n){var i,r;void 0===(r="function"==typeof(i=function(){"use strict";function t(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){o(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,s){var c=r.URL||r.webkitURL,l=document.createElement("a");l.download=o=o||e.name||"download",l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):n(l.href)?t(e,o,s):i(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,o){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),r);else if(n(e))t(e,r,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,n,i,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,i);var s="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c)&&"object"==typeof FileReader){var a=new FileReader;a.onloadend=function(){var e=a.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},a.readAsDataURL(e)}else{var d=r.URL||r.webkitURL,u=d.createObjectURL(e);o?o.location=u:location.href=u,o=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});r.saveAs=o.saveAs=o,e.exports=o})?i.apply(t,[]):i)||(e.exports=r)},hBK9:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("3Pt+"),o=n("tyNb"),s=n("c7TG"),c=n("mrSG"),l=n("CGrG"),a=n("LTmD"),d=n("B8lH"),u=n("HULg"),p=n("lEof"),h=n("Y6BA"),f=n("Iab2"),b=n("fXoL");const y=["filePicker"];function g(e,t){1&e&&(b.dc(0,"ion-header"),b.dc(1,"ion-toolbar"),b.dc(2,"ion-buttons",11),b.Zb(3,"ion-menu-button"),b.cc(),b.dc(4,"ion-title"),b.Ic(5,"\u8bbe\u7f6e"),b.cc(),b.cc(),b.cc())}function m(e,t){if(1&e){const e=b.ec();b.dc(0,"ion-item"),b.dc(1,"ion-button",7),b.lc("click",(function(){return b.Bc(e),b.oc().ShowRecord()})),b.Ic(2,"\u67e5\u770b\uff0f\u5220\u9664"),b.cc(),b.cc()}}const v=n("NFKh");let w=(()=>{class e{constructor(e,t,n,i,r){this.settings=e,this.dbservice=t,this.host=n,this.alertController=i,this.modalController=r,this.readMode=l.c.text,this.webapp="",this.document="",this.server="",this.encryp="false"}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.encryp=this.settings.HasUser&&this.settings.Encryp?"true":"false",this.document=this.settings.AppConfig.document,this.webapp=this.settings.AppConfig.website}))}get IsWeb(){return"web"===h.b}get Version(){return`Beta ${this.settings.AppConfig.app.version} (\u6d4b\u8bd5\u7248)`}get HasUser(){return this.settings.HasUser}get Product(){return a.a.Product}get Encryp(){return this.encryp}set Encryp(e){console.log("val",e,typeof e),this.encryp=e,this.settings.Encryp="true"===e,console.log("Encryp",this.settings.Encryp,typeof this.settings.Encryp)}CleanMemory(e){return Object(c.b)(this,void 0,void 0,(function*(){let e=!0;const t=yield this.alertController.create({header:"\u6e05\u7a7a\u7f13\u5b58",message:"\u53ea\u6e05\u7a7a\u672c\u5730\u7684\u7528\u6237\u6570\u636e\u3002\u53ef\u91cd\u65b0\u4e0b\u8f7d\u5728\u670d\u52a1\u5668\u4fdd\u5b58\u7684\u7528\u6237\u6570\u636e\u548c\u6848\u4f8b\u3002",buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield t.present(),yield t.onDidDismiss(),e||(yield this.dbservice.CleanDB(this.settings.User.id),yield this.dbservice.initNano(),this.presentAlert("\u6e05\u7a7a\u5b8c\u6210",null,"\u60a8\u7684\u672c\u5730\u6848\u4f8b\u5df2\u7ecf\u5168\u90e8\u6e05\u7a7a\u3002"))}))}CleanCloud(){return Object(c.b)(this,void 0,void 0,(function*(){let e=!0;const t=yield this.alertController.create({header:"\u6e05\u7a7a\u4e91\u7aef\u6570\u636e",message:"\u7528\u6237\u4fdd\u5b58\u5728\u4e91\u7aef\u7684\u6570\u636e\u3002\u672c\u5730\u6570\u636e\u4ecd\u7136\u4fdd\u7559\u3002",buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});if(yield t.present(),yield t.onWillDismiss(),!0===e)return;const n=this.settings.User,i=(yield this.dbservice.getNodes()).filter(e=>32===e.type);for(const r of i)yield this.host.DeleteRecord(n.id,n.password,r.id);yield this.host.CleanUserRecord(n.id,n.password),this.presentAlert("\u6e05\u7a7a\u4e91\u7aef\u6570\u636e",null,"\u60a8\u7684\u4e91\u7aef\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u3002")}))}onReadStart(e){}onFilePicked(e){try{const t=JSON.parse(e.content);if(null==t.encryp||!t.tree)throw new Error("data corrubt.");{let e,n;if(!0===t.encryp){const i=this.settings.HasUser?this.settings.User.encryp:"";e=this.DecrypData(t.tree,i),n=this.DecrypData(t.books,i)}else e=t.tree,n=t.books;Array.isArray(e)&&Array.isArray(n)&&this.ApplyImport(e,n)}}catch(t){console.log(t),this.presentAlert("\u683c\u5f0f\u9519\u8bef",null,"\u65e0\u6cd5\u8bfb\u53d6\u5bfc\u5165\u7684\u6570\u636e\u6587\u4ef6\u3002")}}onReadEnd(e){this.filePicker.reset()}ApplyImport(e,t){return Object(c.b)(this,void 0,void 0,(function*(){let n=!0;const i=yield this.alertController.create({header:"\u5bfc\u5165\u6570\u636e\u5e93",subHeader:"\u63d0\u9192\u5907\u4efd",message:"\u6b64\u64cd\u4f5c\u5c06\u4f1a\u7528\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u6570\u636e\uff0c\u66ff\u6362\u6389\u60a8\u8f6f\u4ef6\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\u3002\u4e3a\u4e86\u6570\u636e\u5b89\u5168\uff0c\u5efa\u8bae\u60a8\u5148\u5c06\u672c\u5730\u6570\u636e\u4e0a\u4f20\u5230\u4e91\u7aef\u3002\u8bef\u64cd\u4f5c\u540e\u4e5f\u53ef\u4ee5\u91cd\u65b0\u4ece\u4e91\u7aef\u4e0b\u8f7d\u6570\u636e\u3002",buttons:[{text:"\u786e\u5b9a",handler:()=>{n=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});if(yield i.present(),yield i.onWillDismiss(),!0!==n){console.log("save tree");for(const t of e)yield this.dbservice.UpdateObj(this.dbservice.Tables.Node,null,t);for(const e of t){console.log(`save record ${e.nodeid}`);for(const t of e.content)yield this.dbservice.UpdateObj(this.dbservice.Tables.Record,null,t)}this.presentAlert("\u5bfc\u5165\u5b8c\u6210",null,"\u606d\u559c\uff01\u6570\u636e\u5df2\u7ecf\u5bfc\u5165\u5230\u672c\u5730\u6570\u636e\u5e93\u3002")}}))}UpdateServer(){this.host.GetAppSetting().then(e=>{this.document=e.document,this.webapp=e.website;const t=e.servers.filter(e=>e.version===this.settings.AppConfig.app.version);t?(console.log("Found Server!!!!!!!!!!!!"),this.settings.AppConfig.app.accessToken=t.accessToken,this.settings.AppConfig.app.serverUrl=t.serverUrl,this.settings.AppConfig=this.settings.AppConfig):console.log("not found Server!!!!")})}SettingConfig(e){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:d.a,componentProps:{SettingComponent:e,Global:!0,OnlyGlobal:!0,Config:"bazi"===e?Object(a.b)(this.settings.Bazi):Object(a.b)(this.settings.Gua)}});yield t.present(),yield t.onWillDismiss()}))}ShowRecord(){return Object(c.b)(this,void 0,void 0,(function*(){let e=!0;const t=yield this.alertController.create({header:"Show Record",inputs:[{name:"keyid",type:"text",label:"Key",value:"*",placeholder:"enter key"}],buttons:[{text:"\u5220\u9664",role:"destructive",handler:()=>{}},{text:"\u67e5\u770b",role:"cancel",cssClass:"secondary",handler:()=>{e=!1}}]});yield t.present();const{data:n}=yield t.onWillDismiss();if(!n)return;const i=n.values.keyid;e?this.settings.ResetDB():this.settings.ShowData(i.trim())}))}Ticket(){var e,t;return Object(c.b)(this,void 0,void 0,(function*(){let n=!0;const i=this.settings.User,r=yield this.alertController.create({header:"\u62a5\u544a\u95ee\u9898",inputs:[{name:"user",type:"text",label:"\u7528\u6237\u540d",value:null===(e=i)||void 0===e?void 0:e.id,placeholder:"\u7528\u6237\u540d"},{name:"mail",type:"text",label:"\u6ce8\u518c\u90ae\u7bb1",value:null===(t=i)||void 0===t?void 0:t.email,placeholder:"user@mail.com"},{name:"titel",type:"text",label:"\u95ee\u9898",placeholder:"\u4f60\u7684\u95ee\u9898\uff0f\u610f\u89c1"},{name:"comment",type:"text",label:"\u5907\u6ce8",placeholder:"\u5907\u6ce8"}],buttons:[{text:"\u53d1\u9001",handler:()=>{n=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:()=>{}}]});yield r.present();const{data:o}=yield r.onWillDismiss();console.log(o),o&&o.values&&(o.values.user?o.values.mail?o.values.titel?n||this.host.SendTicket(o.values):this.presentAlert("\u8868\u5355\u9519\u8bef","\u95ee\u9898","\u8bf7\u8f93\u5165\u60a8\u7684\u95ee\u9898\u3002"):this.presentAlert("\u8868\u5355\u9519\u8bef","\u6ce8\u518c\u90ae\u7bb1","\u8bf7\u8f93\u5165\u60a8\u7684\u6ce8\u518c\u90ae\u7bb1, \u5426\u5219\u6211\u4eec\u65e0\u6cd5\u56de\u590d\u3002"):this.presentAlert("\u8868\u5355\u9519\u8bef","\u7528\u6237\u540d","\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d, \u5426\u5219\u6211\u4eec\u65e0\u6cd5\u6838\u5b9e\u8d44\u6599\u3002"))}))}ExportDB(){return Object(c.b)(this,void 0,void 0,(function*(){const e=this.settings.Encryp?this.settings.User.encryp:"",t=yield this.dbservice.Export();this.EncrypData(t,e);const n=new Blob([JSON.stringify(t)],{type:"text/plain;charset=utf-8"});Object(f.saveAs)(n,"huaheapp.json")}))}presentAlert(e,t,n){return Object(c.b)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}DecrypData(e,t){try{const n=v.AES.decrypt(e,t).toString(v.enc.Utf8);return JSON.parse(n)}catch(n){throw new Error("\u6587\u4ef6\u5df2\u635f\u574f\uff0c\u6216\u52a0\u5bc6\u53e3\u4ee4\u4e0d\u6b63\u786e\uff0c\u65e0\u6cd5\u6253\u5f00\u6587\u4ef6\u3002")}}EncrypData(e,t){const n=!1===(t||"").IsNullOrEmpty();if(e.encryp=n,console.log("encryp",n,e),n){const n=e.books||[];e.tree=v.AES.encrypt(JSON.stringify(e.tree||[]),t).toString(),e.books=v.AES.encrypt(JSON.stringify(n),t).toString()}return e}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(a.a),b.Yb(u.a),b.Yb(p.a),b.Yb(s.b),b.Yb(s.cb))},e.\u0275cmp=b.Sb({type:e,selectors:[["app-setting"]],viewQuery:function(e,t){var n;1&e&&b.Nc(y,!0),2&e&&b.xc(n=b.mc())&&(t.filePicker=n.first)},decls:43,vars:8,consts:[[4,"ngIf"],["ngxFilePicker","","fill","outline",3,"readMode","readStart","filePick","readEnd"],["filePicker","ngxFilePicker"],[3,"click"],[3,"ngModel","disabled","ngModelChange"],["value","true"],["value","false","checked",""],["fill","outline",3,"click"],["slot","end"],[3,"href"],["color","danger","fill","outline",3,"click"],["slot","start"]],template:function(e,t){1&e&&(b.Gc(0,g,6,0,"ion-header",0),b.dc(1,"ion-content"),b.dc(2,"ion-item"),b.dc(3,"ion-button",1,2),b.lc("readStart",(function(e){return t.onReadStart(e)}))("filePick",(function(e){return t.onFilePicked(e)}))("readEnd",(function(e){return t.onReadEnd(e)})),b.Ic(5,"\u5bfc\u5165\u6848\u4f8b"),b.cc(),b.dc(6,"ion-button",3),b.lc("click",(function(){return t.ExportDB()})),b.Ic(7,"\u5bfc\u51fa\u6848\u4f8b"),b.cc(),b.cc(),b.dc(8,"ion-item"),b.dc(9,"ion-segment",4),b.lc("ngModelChange",(function(e){return t.Encryp=e})),b.dc(10,"ion-segment-button",5),b.Ic(11,"\u4f7f\u7528\u6570\u636e\u52a0\u5bc6"),b.cc(),b.dc(12,"ion-segment-button",6),b.Ic(13,"\u4e0d\u4f7f\u7528\u52a0\u5bc6"),b.cc(),b.cc(),b.cc(),b.dc(14,"ion-item"),b.dc(15,"ion-button",7),b.lc("click",(function(){return t.UpdateServer()})),b.Ic(16,"\u66f4\u65b0\u670d\u52a1\u5730\u5740"),b.cc(),b.dc(17,"ion-buttons",8),b.dc(18,"ion-button",9),b.Ic(19,"\u7f51\u9875\u7248APP"),b.cc(),b.dc(20,"ion-button",9),b.Ic(21,"\u5728\u7ebf\u6587\u6863"),b.cc(),b.cc(),b.cc(),b.dc(22,"ion-item"),b.dc(23,"ion-buttons"),b.dc(24,"ion-button",3),b.lc("click",(function(){return t.SettingConfig("gua")})),b.Ic(25,"\u516d\u723b\u5168\u5c40\u8bbe\u7f6e"),b.cc(),b.dc(26,"ion-button",3),b.lc("click",(function(){return t.SettingConfig("bazi")})),b.Ic(27,"\u516b\u5b57\u5168\u5c40\u8bbe\u7f6e"),b.cc(),b.cc(),b.cc(),b.dc(28,"ion-item"),b.dc(29,"ion-button",7),b.lc("click",(function(){return t.Ticket()})),b.Ic(30,"\u62a5\u544a\u95ee\u9898"),b.cc(),b.cc(),b.dc(31,"ion-item"),b.dc(32,"ion-button",10),b.lc("click",(function(){return t.CleanMemory("recordes")})),b.Ic(33,"\u6e05\u7a7a\u672c\u5730\u6848\u4f8b"),b.cc(),b.dc(34,"ion-button",10),b.lc("click",(function(){return t.CleanMemory("all")})),b.Ic(35,"\u6e05\u7a7a\u7528\u6237\u6570\u636e"),b.cc(),b.dc(36,"ion-button",10),b.lc("click",(function(){return t.CleanCloud()})),b.Ic(37,"\u6e05\u7a7a\u4e91\u7aef\u6570\u636e"),b.cc(),b.cc(),b.Gc(38,m,3,0,"ion-item",0),b.dc(39,"ion-item"),b.dc(40,"ion-label"),b.dc(41,"ion-text"),b.Ic(42),b.cc(),b.cc(),b.cc(),b.cc()),2&e&&(b.vc("ngIf",!t.IsWeb),b.Nb(3),b.vc("readMode",t.readMode),b.Nb(6),b.vc("ngModel",t.Encryp)("disabled",!t.HasUser),b.Nb(9),b.vc("href",t.webapp),b.Nb(2),b.vc("href",t.document),b.Nb(18),b.vc("ngIf",!t.Product),b.Nb(4),b.Kc("\u7248\u672c\u4fe1\u606f\uff1a",t.Version,""))},directives:[i.j,s.n,s.x,s.i,l.a,s.O,s.hb,r.f,r.g,s.P,s.j,s.D,s.T,s.t,s.Y,s.G,s.W],styles:[".spin[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222}"]}),e})();var k=n("KPWP");n.d(t,"SettingPageModule",(function(){return x}));const S=[{path:"",component:w}];let x=(()=>{class e{}return e.\u0275mod=b.Wb({type:e}),e.\u0275inj=b.Vb({factory:function(t){return new(t||e)},imports:[[i.b,r.c,s.Z,l.b,k.a,o.j.forChild(S)]]}),e})()}}]);