function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{CGrG:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("mrSG"),i=n("fXoL"),o=function(){var e={arrayBuffer:0,binaryString:1,dataURL:2,text:3};return e[e.arrayBuffer]="arrayBuffer",e[e.binaryString]="binaryString",e[e.dataURL]="dataURL",e[e.text]="text",e}(),s=function(){function e(t,n,r){_classCallCheck(this,e),this._underlyingFile=t,this._readMode=n,this._content=r}return _createClass(e,[{key:"name",get:function(){return this._underlyingFile.name}},{key:"size",get:function(){return this._underlyingFile.size}},{key:"type",get:function(){return this._underlyingFile.type}},{key:"readMode",get:function(){return this._readMode}},{key:"content",get:function(){return this._content}},{key:"underlyingFile",get:function(){return this._underlyingFile}}]),e}(),c=function(){var e=function(){function e(){_classCallCheck(this,e),this.filter=function(){return!0},this.readStart=new i.s,this.readEnd=new i.s}return _createClass(e,[{key:"readFiles",value:function(e,t){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,c,a=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Array.from(e).filter(this.filter),c=i.length,this.readStart.emit(c),n.next=4,Promise.all(i.map((function(e){return Object(r.b)(a,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,function(e,t){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,r){var i=new FileReader;switch(i.onload=function(r){var i=new s(e,t,r.target.result);n(i)},i.onerror=function(e){r(e)},t){case o.arrayBuffer:i.readAsArrayBuffer(e);break;case o.binaryString:i.readAsBinaryString(e);break;case o.text:i.readAsText(e);break;case o.dataURL:default:i.readAsDataURL(e)}})));case 1:case"end":return n.stop()}}),n)})))}(e,this.readMode);case 2:i=n.sent,t(i);case 4:case"end":return n.stop()}}),n,this)})))})));case 4:this.readEnd.emit(c);case 5:case"end":return n.stop()}}),n,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.Ub({type:e,inputs:{filter:"filter",readMode:"readMode"},outputs:{readStart:"readStart",readEnd:"readEnd"}}),e}(),a=function(){var e=function(e){function t(e,n){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).el=e,r.renderer=n,r.accept="",r.filePick=new i.s,r}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this._input=this.renderer.createElement("input"),this.renderer.appendChild(this.el.nativeElement,this._input),this.renderer.setAttribute(this._input,"type","file"),this.renderer.setAttribute(this._input,"accept",this.accept),this.renderer.setStyle(this._input,"display","none"),this.multiple&&this.renderer.setAttribute(this._input,"multiple","multiple"),this.renderer.listen(this._input,"change",(function(t){return e._onListen(t)}))}},{key:"reset",value:function(){this._input?this._input.value=null:console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}},{key:"browse",value:function(){this._input?this._input.click():console.error("It seems that ngOnInit() has not been executed or that the hidden _input element is null. Did you mess with the DOM?")}},{key:"_onListen",value:function(e){var t=this;this.readFiles(e.target.files,(function(e){return t.filePick.emit(e)}))}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=function(e){return null!=e&&"false"!=="".concat(e)}(e)}}]),t}(c);return e.\u0275fac=function(t){return new(t||e)(i.Zb(i.q),i.Zb(i.N))},e.\u0275dir=i.Ub({type:e,selectors:[["","ngxFilePicker",""]],hostBindings:function(e,t){1&e&&i.mc("click",(function(){return t.browse()}))},inputs:{accept:"accept",multiple:"multiple"},outputs:{filePick:"filePick"},exportAs:["ngxFilePicker"],features:[i.Kb]}),e}(),u=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Xb({type:e}),e.\u0275inj=i.Wb({factory:function(t){return new(t||e)},imports:[[]]}),e}()},Iab2:function(e,t,n){var r,i;void 0===(i="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){o(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,s){var c=i.URL||i.webkitURL,a=document.createElement("a");a.download=o=o||e.name||"download",a.rel="noopener","string"==typeof e?(a.href=e,a.origin===location.origin?r(a):n(a.href)?t(e,o,s):r(a,a.target="_blank")):(a.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(a.href)}),4e4),setTimeout((function(){r(a)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,o){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),i);else if(n(e))t(e,i,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var s="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||s&&c)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=a?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var l=i.URL||i.webkitURL,d=l.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});i.saveAs=o.saveAs=o,e.exports=o})?r.apply(t,[]):r)||(e.exports=i)},hBK9:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),s=n("c7TG"),c=n("mrSG"),a=n("CGrG"),u=n("LTmD"),l=n("B8lH"),d=n("HULg"),f=n("lEof"),p=n("Iab2"),h=n("fXoL"),b=["filePicker"];function v(e,t){if(1&e){var n=h.fc();h.ec(0,"ion-item"),h.ec(1,"ion-button",7),h.mc("click",(function(){return h.Ac(n),h.pc().ShowRecord()})),h.Hc(2,"\u67e5\u770b\uff0f\u5220\u9664"),h.dc(),h.dc()}}var g,m=n("NFKh"),y=((g=function(){function e(t,n,r,i,o){_classCallCheck(this,e),this.settings=t,this.dbservice=n,this.host=r,this.alertController=i,this.modalController=o,this.readMode=a.c.text,this.webapp="",this.document="",this.server="",this.encryp="false"}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:this.encryp=this.settings.HasUser&&this.settings.Encryp?"true":"false",this.document=this.settings.AppConfig.document,this.webapp=this.settings.AppConfig.website;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"CleanMemory",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,e.next=3,this.alertController.create({header:"\u6e05\u7a7a\u7f13\u5b58",message:"\u53ea\u6e05\u7a7a\u672c\u5730\u7684\u7528\u6237\u6570\u636e\u3002\u53ef\u91cd\u65b0\u4e0b\u8f7d\u5728\u670d\u52a1\u5668\u4fdd\u5b58\u7684\u7528\u6237\u6570\u636e\u548c\u6848\u4f8b\u3002",buttons:[{text:"\u786e\u5b9a",handler:function(){t=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onDidDismiss();case 8:if(e.t0=t,e.t0){e.next=15;break}return e.next=12,this.dbservice.CleanDB(this.settings.User.id);case 12:return e.next=14,this.dbservice.initNano();case 14:this.presentAlert("\u6e05\u7a7a\u5b8c\u6210",null,"\u60a8\u7684\u672c\u5730\u6848\u4f8b\u5df2\u7ecf\u5168\u90e8\u6e05\u7a7a\u3002");case 15:case"end":return e.stop()}}),e,this)})))}},{key:"CleanCloud",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,o,s,c,a,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,e.next=3,this.alertController.create({header:"\u6e05\u7a7a\u4e91\u7aef\u6570\u636e",message:"\u7528\u6237\u4fdd\u5b58\u5728\u4e91\u7aef\u7684\u6570\u636e\u3002\u672c\u5730\u6570\u636e\u4ecd\u7136\u4fdd\u7559\u3002",buttons:[{text:"\u786e\u5b9a",handler:function(){t=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:if(!0!==t){e.next=10;break}return e.abrupt("return");case 10:return r=this.settings.User,e.next=13,this.dbservice.getNodes();case 13:e.t0=function(e){return 32===e.type},i=e.sent.filter(e.t0),o=!0,s=!1,c=void 0,e.prev=18,a=i[Symbol.iterator]();case 20:if(o=(u=a.next()).done){e.next=27;break}return l=u.value,e.next=24,this.host.DeleteRecord(r.id,r.password,l.id);case 24:o=!0,e.next=20;break;case 27:e.next=33;break;case 29:e.prev=29,e.t1=e.catch(18),s=!0,c=e.t1;case 33:e.prev=33,e.prev=34,o||null==a.return||a.return();case 36:if(e.prev=36,!s){e.next=39;break}throw c;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return e.next=43,this.host.CleanUserRecord(r.id,r.password);case 43:this.presentAlert("\u6e05\u7a7a\u4e91\u7aef\u6570\u636e",null,"\u60a8\u7684\u4e91\u7aef\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u3002");case 44:case"end":return e.stop()}}),e,this,[[18,29,33,41],[34,,36,40]])})))}},{key:"onReadStart",value:function(e){}},{key:"onFilePicked",value:function(e){try{var t,n,r=JSON.parse(e.content);if(null==r.encryp||!r.tree)throw new Error("data corrubt.");if(!0===r.encryp){var i=this.settings.HasUser?this.settings.User.encryp:"";t=this.DecrypData(r.tree,i),n=this.DecrypData(r.books,i)}else t=r.tree,n=r.books;Array.isArray(t)&&Array.isArray(n)&&this.ApplyImport(t,n)}catch(o){console.log(o),this.presentAlert("\u683c\u5f0f\u9519\u8bef",null,"\u65e0\u6cd5\u8bfb\u53d6\u5bfc\u5165\u7684\u6570\u636e\u6587\u4ef6\u3002")}}},{key:"onReadEnd",value:function(e){this.filePicker.reset()}},{key:"ApplyImport",value:function(e,t){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,i,o,s,c,a,u,l,d,f,p,h,b,v,g,m,y,k,x,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!0,n.next=3,this.alertController.create({header:"\u5bfc\u5165\u6570\u636e\u5e93",subHeader:"\u63d0\u9192\u5907\u4efd",message:"\u6b64\u64cd\u4f5c\u5c06\u4f1a\u7528\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u6570\u636e\uff0c\u66ff\u6362\u6389\u60a8\u8f6f\u4ef6\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\u3002\u4e3a\u4e86\u6570\u636e\u5b89\u5168\uff0c\u5efa\u8bae\u60a8\u5148\u5c06\u672c\u5730\u6570\u636e\u4e0a\u4f20\u5230\u4e91\u7aef\u3002\u8bef\u64cd\u4f5c\u540e\u4e5f\u53ef\u4ee5\u91cd\u65b0\u4ece\u4e91\u7aef\u4e0b\u8f7d\u6570\u636e\u3002",buttons:[{text:"\u786e\u5b9a",handler:function(){r=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return i=n.sent,n.next=6,i.present();case 6:return n.next=8,i.onWillDismiss();case 8:if(!0===r){n.next=88;break}console.log("save tree"),o=!0,s=!1,c=void 0,n.prev=13,a=e[Symbol.iterator]();case 15:if(o=(u=a.next()).done){n.next=22;break}return l=u.value,n.next=19,this.dbservice.UpdateObj(this.dbservice.Tables.Node,null,l);case 19:o=!0,n.next=15;break;case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(13),s=!0,c=n.t0;case 28:n.prev=28,n.prev=29,o||null==a.return||a.return();case 31:if(n.prev=31,!s){n.next=34;break}throw c;case 34:return n.finish(31);case 35:return n.finish(28);case 36:d=!0,f=!1,p=void 0,n.prev=39,h=t[Symbol.iterator]();case 41:if(d=(b=h.next()).done){n.next=73;break}v=b.value,console.log("save record ".concat(v.nodeid)),g=!0,m=!1,y=void 0,n.prev=47,k=v.content[Symbol.iterator]();case 49:if(g=(x=k.next()).done){n.next=56;break}return w=x.value,n.next=53,this.dbservice.UpdateObj(this.dbservice.Tables.Record,null,w);case 53:g=!0,n.next=49;break;case 56:n.next=62;break;case 58:n.prev=58,n.t1=n.catch(47),m=!0,y=n.t1;case 62:n.prev=62,n.prev=63,g||null==k.return||k.return();case 65:if(n.prev=65,!m){n.next=68;break}throw y;case 68:return n.finish(65);case 69:return n.finish(62);case 70:d=!0,n.next=41;break;case 73:n.next=79;break;case 75:n.prev=75,n.t2=n.catch(39),f=!0,p=n.t2;case 79:n.prev=79,n.prev=80,d||null==h.return||h.return();case 82:if(n.prev=82,!f){n.next=85;break}throw p;case 85:return n.finish(82);case 86:return n.finish(79);case 87:this.presentAlert("\u5bfc\u5165\u5b8c\u6210",null,"\u606d\u559c\uff01\u6570\u636e\u5df2\u7ecf\u5bfc\u5165\u5230\u672c\u5730\u6570\u636e\u5e93\u3002");case 88:case"end":return n.stop()}}),n,this,[[13,24,28,36],[29,,31,35],[39,75,79,87],[47,58,62,70],[63,,65,69],[80,,82,86]])})))}},{key:"UpdateServer",value:function(){var e=this;this.host.GetAppSetting().then((function(t){e.document=t.document,e.webapp=t.website;var n=t.servers.filter((function(t){return t.version===e.settings.AppConfig.app.version}));n?(console.log("Found Server!!!!!!!!!!!!"),e.settings.AppConfig.app.accessToken=n.accessToken,e.settings.AppConfig.app.serverUrl=n.serverUrl,e.settings.AppConfig=e.settings.AppConfig):console.log("not found Server!!!!")}))}},{key:"SettingConfig",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{SettingComponent:e,Global:!0,OnlyGlobal:!0,Config:"bazi"===e?Object(u.b)(this.settings.Bazi):Object(u.b)(this.settings.Gua)}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:case"end":return t.stop()}}),t,this)})))}},{key:"ShowRecord",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,e.next=3,this.alertController.create({header:"Show Record",inputs:[{name:"keyid",type:"text",label:"Key",value:"*",placeholder:"enter key"}],buttons:[{text:"\u5220\u9664",role:"destructive",handler:function(){}},{text:"\u67e5\u770b",role:"cancel",cssClass:"secondary",handler:function(){t=!1}}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:if(r=e.sent,i=r.data){e.next=12;break}return e.abrupt("return");case 12:o=i.values.keyid,t?this.settings.ResetDB():this.settings.ShowData(o.trim());case 14:case"end":return e.stop()}}),e,this)})))}},{key:"Ticket",value:function(){var e,t;return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,i,o,s,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!0,i=this.settings.User,n.next=4,this.alertController.create({header:"\u62a5\u544a\u95ee\u9898",inputs:[{name:"user",type:"text",label:"\u7528\u6237\u540d",value:null===(e=i)||void 0===e?void 0:e.id,placeholder:"\u7528\u6237\u540d"},{name:"mail",type:"text",label:"\u6ce8\u518c\u90ae\u7bb1",value:null===(t=i)||void 0===t?void 0:t.email,placeholder:"user@mail.com"},{name:"titel",type:"text",label:"\u95ee\u9898",placeholder:"\u4f60\u7684\u95ee\u9898\uff0f\u610f\u89c1"},{name:"comment",type:"text",label:"\u5907\u6ce8",placeholder:"\u5907\u6ce8"}],buttons:[{text:"\u53d1\u9001",handler:function(){r=!1}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 4:return o=n.sent,n.next=7,o.present();case 7:return n.next=9,o.onWillDismiss();case 9:s=n.sent,c=s.data,console.log(c),c&&c.values&&(c.values.user?c.values.mail?c.values.titel?r||this.host.SendTicket(c.values):this.presentAlert("\u8868\u5355\u9519\u8bef","\u95ee\u9898","\u8bf7\u8f93\u5165\u60a8\u7684\u95ee\u9898\u3002"):this.presentAlert("\u8868\u5355\u9519\u8bef","\u6ce8\u518c\u90ae\u7bb1","\u8bf7\u8f93\u5165\u60a8\u7684\u6ce8\u518c\u90ae\u7bb1, \u5426\u5219\u6211\u4eec\u65e0\u6cd5\u56de\u590d\u3002"):this.presentAlert("\u8868\u5355\u9519\u8bef","\u7528\u6237\u540d","\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d, \u5426\u5219\u6211\u4eec\u65e0\u6cd5\u6838\u5b9e\u8d44\u6599\u3002"));case 12:case"end":return n.stop()}}),n,this)})))}},{key:"ExportDB",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.settings.Encryp?this.settings.User.encryp:"",e.next=3,this.dbservice.Export();case 3:n=e.sent,this.EncrypData(n,t),r=new Blob([JSON.stringify(n)],{type:"text/plain;charset=utf-8"}),Object(p.saveAs)(r,"huaheapp.json");case 7:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return i=r.sent,r.next=5,i.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"DecrypData",value:function(e,t){try{var n=m.AES.decrypt(e,t).toString(m.enc.Utf8);return JSON.parse(n)}catch(r){throw new Error("\u6587\u4ef6\u5df2\u635f\u574f\uff0c\u6216\u52a0\u5bc6\u53e3\u4ee4\u4e0d\u6b63\u786e\uff0c\u65e0\u6cd5\u6253\u5f00\u6587\u4ef6\u3002")}}},{key:"EncrypData",value:function(e,t){var n=!1===(t||"").IsNullOrEmpty();if(e.encryp=n,console.log("encryp",n,e),n){var r=e.books||[];e.tree=m.AES.encrypt(JSON.stringify(e.tree||[]),t).toString(),e.books=m.AES.encrypt(JSON.stringify(r),t).toString()}return e}},{key:"Version",get:function(){return"Beta ".concat(this.settings.AppConfig.app.version," (\u6d4b\u8bd5\u7248)")}},{key:"HasUser",get:function(){return this.settings.HasUser}},{key:"Product",get:function(){return u.a.Product}},{key:"Encryp",get:function(){return this.encryp},set:function(e){console.log("val",e,typeof e),this.encryp=e,this.settings.Encryp="true"===e,console.log("Encryp",this.settings.Encryp,typeof this.settings.Encryp)}}]),e}()).\u0275fac=function(e){return new(e||g)(h.Zb(u.a),h.Zb(d.a),h.Zb(f.a),h.Zb(s.b),h.Zb(s.fb))},g.\u0275cmp=h.Tb({type:g,selectors:[["app-setting"]],viewQuery:function(e,t){var n;1&e&&h.Mc(b,!0),2&e&&h.wc(n=h.nc())&&(t.filePicker=n.first)},decls:48,vars:7,consts:[["slot","start"],["ngxFilePicker","","fill","outline",3,"readMode","readStart","filePick","readEnd"],["filePicker","ngxFilePicker"],[3,"click"],[3,"ngModel","disabled","ngModelChange"],["value","true"],["value","false","checked",""],["fill","outline",3,"click"],["slot","end"],[3,"href"],["color","danger","fill","outline",3,"click"],[4,"ngIf"]],template:function(e,t){1&e&&(h.ec(0,"ion-header"),h.ec(1,"ion-toolbar"),h.ec(2,"ion-buttons",0),h.ac(3,"ion-menu-button"),h.dc(),h.ec(4,"ion-title"),h.Hc(5,"\u8bbe\u7f6e"),h.dc(),h.dc(),h.dc(),h.ec(6,"ion-content"),h.ec(7,"ion-item"),h.ec(8,"ion-button",1,2),h.mc("readStart",(function(e){return t.onReadStart(e)}))("filePick",(function(e){return t.onFilePicked(e)}))("readEnd",(function(e){return t.onReadEnd(e)})),h.Hc(10,"\u5bfc\u5165\u6848\u4f8b"),h.dc(),h.ec(11,"ion-button",3),h.mc("click",(function(){return t.ExportDB()})),h.Hc(12,"\u5bfc\u51fa\u6848\u4f8b"),h.dc(),h.dc(),h.ec(13,"ion-item"),h.ec(14,"ion-segment",4),h.mc("ngModelChange",(function(e){return t.Encryp=e})),h.ec(15,"ion-segment-button",5),h.Hc(16,"\u4f7f\u7528\u6570\u636e\u52a0\u5bc6"),h.dc(),h.ec(17,"ion-segment-button",6),h.Hc(18,"\u4e0d\u4f7f\u7528\u52a0\u5bc6"),h.dc(),h.dc(),h.dc(),h.ec(19,"ion-item"),h.ec(20,"ion-button",7),h.mc("click",(function(){return t.UpdateServer()})),h.Hc(21,"\u66f4\u65b0\u670d\u52a1\u5730\u5740"),h.dc(),h.ec(22,"ion-buttons",8),h.ec(23,"ion-button",9),h.Hc(24,"\u7f51\u9875\u7248APP"),h.dc(),h.ec(25,"ion-button",9),h.Hc(26,"\u5728\u7ebf\u6587\u6863"),h.dc(),h.dc(),h.dc(),h.ec(27,"ion-item"),h.ec(28,"ion-buttons"),h.ec(29,"ion-button",3),h.mc("click",(function(){return t.SettingConfig("gua")})),h.Hc(30,"\u516d\u723b\u5168\u5c40\u8bbe\u7f6e"),h.dc(),h.ec(31,"ion-button",3),h.mc("click",(function(){return t.SettingConfig("bazi")})),h.Hc(32,"\u516b\u5b57\u5168\u5c40\u8bbe\u7f6e"),h.dc(),h.dc(),h.dc(),h.ec(33,"ion-item"),h.ec(34,"ion-button",7),h.mc("click",(function(){return t.Ticket()})),h.Hc(35,"\u62a5\u544a\u95ee\u9898"),h.dc(),h.dc(),h.ec(36,"ion-item"),h.ec(37,"ion-button",10),h.mc("click",(function(){return t.CleanMemory("recordes")})),h.Hc(38,"\u6e05\u7a7a\u672c\u5730\u6848\u4f8b"),h.dc(),h.ec(39,"ion-button",10),h.mc("click",(function(){return t.CleanMemory("all")})),h.Hc(40,"\u6e05\u7a7a\u7528\u6237\u6570\u636e"),h.dc(),h.ec(41,"ion-button",10),h.mc("click",(function(){return t.CleanCloud()})),h.Hc(42,"\u6e05\u7a7a\u4e91\u7aef\u6570\u636e"),h.dc(),h.dc(),h.Fc(43,v,3,0,"ion-item",11),h.ec(44,"ion-item"),h.ec(45,"ion-label"),h.ec(46,"ion-text"),h.Hc(47),h.dc(),h.dc(),h.dc(),h.dc()),2&e&&(h.Nb(8),h.uc("readMode",t.readMode),h.Nb(6),h.uc("ngModel",t.Encryp)("disabled",!t.HasUser),h.Nb(9),h.uc("href",t.webapp),h.Nb(2),h.uc("href",t.document),h.Nb(18),h.uc("ngIf",!t.Product),h.Nb(4),h.Jc("\u7248\u672c\u4fe1\u606f\uff1a",t.Version,""))},directives:[s.t,s.bb,s.j,s.H,s.Z,s.n,s.x,s.i,a.a,s.Q,s.kb,i.f,i.g,s.R,r.j,s.D,s.W],styles:[".spin[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222}"]}),g),k=n("KPWP");n.d(t,"SettingPageModule",(function(){return C}));var x,w=[{path:"",component:y}],C=((x=function e(){_classCallCheck(this,e)}).\u0275mod=h.Xb({type:x}),x.\u0275inj=h.Wb({factory:function(e){return new(e||x)},imports:[[r.b,i.c,s.cb,a.b,k.a,o.i.forChild(w)]]}),x)}}]);