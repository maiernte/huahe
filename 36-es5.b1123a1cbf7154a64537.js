function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{oR3u:function(e,t,n){"use strict";n.r(t);var r,i,c=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),a=n("c7TG"),l=n("CGrG"),u=n("mrSG"),d=n("LTmD"),h=n("HULg"),g=n("lEof"),p=n("PKx9"),f=n("+z1p"),m=n("fXoL"),b=n("zioG"),v=((r=function(){function e(t,n,r,i,c,s){_classCallCheck(this,e),this.modalCtrl=t,this.loadingController=n,this.alertController=r,this.settings=i,this.host=c,this.forumservice=s,this.describe="",this.gender="none",this.birthday=null,this.Editor=f,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","|","link","undo","redo"]}}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:return this.user=this.settings.User,e.next=5,this.loadingController.create({message:"\u4e0b\u8f7d\u6570\u636e...",duration:6e4});case 5:return this.loadingView=e.sent,e.next=8,this.loadingView.present();case 8:this.forumservice.GetUserInfo(this.user.id).then((function(e){t.describe=e.describe?e.describe:"",t.gender=e.gender?e.gender:t.gender,t.birthday=e.birthday||""})).catch((function(e){t.presentAlert("\u5931\u8d25",null,"\u4e0b\u8f7d\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002")})).finally((function(){t.loadingView.dismiss()}));case 9:case"end":return e.stop()}}),e,this)})))}},{key:"onSave",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"\u4e0a\u4f20\u6570\u636e...",duration:6e4});case 2:return this.loadingView=e.sent,t=null,this.SelectedTime&&this.SelectedDate&&(n=new Date(this.SelectedDate),r=new Date(this.SelectedTime),t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),r.getHours(),r.getMinutes()).toDatabaseStr()),e.next=7,this.loadingView.present();case 7:this.host.UpdateUser(this.user,{describe:this.describe,gender:this.gender,birthday:t||this.birthday},!1).then((function(e){console.log("update vuser:",e)})).catch((function(e){i.presentAlert("\u5931\u8d25",null,"\u4e0a\u4f20\u5931\u8d25")})).finally((function(){i.loadingView.dismiss(),i.modalCtrl.dismiss()}));case 8:case"end":return e.stop()}}),e,this)})))}},{key:"onCancel",value:function(){this.modalCtrl.dismiss(!1)}},{key:"DeleteTime",value:function(){this.SelectedDate=null,this.SelectedTime=null}},{key:"presentAlert",value:function(e,t,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return i=r.sent,r.next=5,i.present();case 5:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||r)(m.Yb(a.ab),m.Yb(a.Z),m.Yb(a.b),m.Yb(d.a),m.Yb(g.a),m.Yb(p.a))},r.\u0275cmp=m.Sb({type:r,selectors:[["app-profileditor"]],decls:37,vars:7,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["value","none"],["value","male"],["value","female"],[1,"ion-margin-start"],["fill","outline",3,"click"],["placeholder","\u65e5\u671f","displayFormat","YYYY\u5e74MM\u6708DD\u65e5","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u65f6\u95f4","displayFormat","HH:mm","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","config","editor","ngModelChange"]],template:function(e,t){1&e&&(m.dc(0,"ion-header"),m.dc(1,"ion-toolbar",0),m.dc(2,"ion-buttons",1),m.dc(3,"ion-button",2),m.lc("click",(function(){return t.onCancel()})),m.Zb(4,"ion-icon",3),m.dc(5,"ion-text"),m.Jc(6,"\u53d6\u6d88"),m.cc(),m.cc(),m.cc(),m.dc(7,"ion-title"),m.Jc(8,"\u7f16\u8f91\u7b80\u4ecb/\u8d44\u5386"),m.cc(),m.dc(9,"ion-buttons",4),m.dc(10,"ion-button",2),m.lc("click",(function(){return t.onSave()})),m.Zb(11,"ion-icon",5),m.dc(12,"ion-text"),m.Jc(13,"\u4fdd\u5b58"),m.cc(),m.cc(),m.cc(),m.cc(),m.cc(),m.dc(14,"ion-content"),m.dc(15,"ion-item"),m.dc(16,"ion-label"),m.dc(17,"ion-text"),m.Jc(18,"\u6027\u522b"),m.cc(),m.cc(),m.dc(19,"ion-select",6),m.lc("ngModelChange",(function(e){return t.gender=e})),m.dc(20,"ion-select-option",7),m.Jc(21,"\u4e0d\u516c\u5f00"),m.cc(),m.dc(22,"ion-select-option",8),m.Jc(23,"\u7537\u58eb"),m.cc(),m.dc(24,"ion-select-option",9),m.Jc(25,"\u5973\u58eb"),m.cc(),m.cc(),m.cc(),m.dc(26,"ion-item"),m.dc(27,"ion-label"),m.dc(28,"ion-text"),m.Jc(29,"\u751f\u65e5"),m.cc(),m.dc(30,"ion-text",10),m.Jc(31),m.cc(),m.cc(),m.dc(32,"ion-button",11),m.lc("click",(function(){return t.DeleteTime()})),m.Jc(33,"\u5220\u9664"),m.cc(),m.dc(34,"ion-datetime",12),m.lc("ngModelChange",(function(e){return t.SelectedDate=e})),m.cc(),m.dc(35,"ion-datetime",13),m.lc("ngModelChange",(function(e){return t.SelectedTime=e})),m.cc(),m.cc(),m.dc(36,"ckeditor",14),m.lc("ngModelChange",(function(e){return t.describe=e})),m.cc(),m.cc()),2&e&&(m.Nb(19),m.vc("ngModel",t.gender),m.Nb(12),m.Kc(t.birthday),m.Nb(3),m.vc("ngModel",t.SelectedDate),m.Nb(1),m.vc("ngModel",t.SelectedTime),m.Nb(1),m.vc("ngModel",t.describe)("config",t.EditorConfig)("editor",t.Editor))},directives:[a.s,a.W,a.i,a.h,a.t,a.S,a.U,a.m,a.w,a.C,a.P,a.fb,s.f,s.g,a.Q,a.n,b.a],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}"]}),r),k=n("7L00"),x=((i=function(){function e(t,n){_classCallCheck(this,e),this.modalCtrl=t,this.alertController=n,this.quadCode="https://huaheapp.oss-cn-hangzhou.aliyuncs.com/app/weixinpay"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onclose",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.presentAlert("\u591a\u8c22\uff01",null,"\u518d\u6b21\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e3a\u60a8\u670d\u52a1\uff01");case 2:this.modalCtrl.dismiss();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return i=r.sent,r.next=5,i.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"QuadCode",get:function(){return"".concat(this.quadCode).concat(this.PaySum.toString().padStart(2,"0"),".png")}}]),e}()).\u0275fac=function(e){return new(e||i)(m.Yb(a.ab),m.Yb(a.b))},i.\u0275cmp=m.Sb({type:i,selectors:[["app-payment"]],inputs:{PaySum:"PaySum"},decls:18,vars:1,consts:[["color","primary"],["slot","end"],[3,"click"],["name","cash"],[1,"ion-text-wrap"],[3,"src"]],template:function(e,t){1&e&&(m.dc(0,"ion-header"),m.dc(1,"ion-toolbar",0),m.dc(2,"ion-title"),m.Jc(3,"\u8d2d\u4e70VIP"),m.cc(),m.dc(4,"ion-buttons",1),m.dc(5,"ion-button",2),m.lc("click",(function(){return t.onclose()})),m.Zb(6,"ion-icon",3),m.Jc(7," \u786e\u5b9a "),m.cc(),m.cc(),m.cc(),m.cc(),m.dc(8,"ion-content"),m.dc(9,"ion-item"),m.dc(10,"ion-label",4),m.dc(11,"ion-text"),m.Jc(12,"\u975e\u5e38\u611f\u8c22\u60a8\u7684\u652f\u6301\uff01"),m.cc(),m.Zb(13,"br"),m.dc(14,"ion-text"),m.Jc(15,"\u8bf7\u60a8\u5728\u652f\u4ed8\u7684\u65f6\u5019\uff0c\u5907\u6ce8\u91cc\u586b\u5199\u5728\u672c\u8f6f\u4ef6\u4e2d\u4f7f\u7528\u7684\u8d26\u53f7\uff0c\u65b9\u4fbf\u6211\u4eec\u5c3d\u5feb\u4e3a\u60a8\u5f00\u901aVIP\u6743\u9650\u3002"),m.cc(),m.cc(),m.cc(),m.dc(16,"ion-item"),m.Zb(17,"ion-img",5),m.cc(),m.cc()),2&e&&(m.Nb(17),m.vc("src",t.QuadCode))},directives:[a.s,a.W,a.U,a.i,a.h,a.t,a.m,a.w,a.C,a.S,a.u],styles:[""]}),i),w=n("i/He"),y=n("Y6BA"),C=["filePicker"];function S(e,t){1&e&&(m.dc(0,"ion-header"),m.dc(1,"ion-toolbar"),m.dc(2,"ion-buttons",1),m.Zb(3,"ion-menu-button"),m.cc(),m.dc(4,"ion-title"),m.Jc(5,"\u7528\u6237"),m.cc(),m.cc(),m.cc())}function P(e,t){if(1&e){var n=m.ec();m.dc(0,"ion-list"),m.dc(1,"ion-list-header"),m.dc(2,"ion-label"),m.Jc(3,"\u7528\u6237\u767b\u5f55"),m.cc(),m.cc(),m.dc(4,"ion-item"),m.dc(5,"ion-label",2),m.Jc(6,"\u7528\u6237\u540d"),m.cc(),m.dc(7,"ion-input",3),m.lc("ngModelChange",(function(e){return m.Cc(n),m.oc().SignIn.name=e})),m.cc(),m.cc(),m.dc(8,"ion-item"),m.dc(9,"ion-label",2),m.Jc(10,"\u5bc6\u7801"),m.cc(),m.dc(11,"ion-input",4),m.lc("ngModelChange",(function(e){return m.Cc(n),m.oc().SignIn.password=e})),m.cc(),m.cc(),m.dc(12,"ion-item"),m.dc(13,"ion-buttons",1),m.dc(14,"ion-button",5),m.lc("click",(function(){return m.Cc(n),m.oc().UserSignIn("signin")})),m.Jc(15,"\u767b\u5f55"),m.cc(),m.dc(16,"ion-button",5),m.lc("click",(function(){return m.Cc(n),m.oc().UserSignUp()})),m.Jc(17,"\u6ce8\u518c\u65b0\u7528\u6237"),m.cc(),m.cc(),m.dc(18,"ion-buttons",6),m.dc(19,"ion-button",7),m.lc("click",(function(){return m.Cc(n),m.oc().SendPW2Mail()})),m.Jc(20,"\u5fd8\u8bb0\u5bc6\u7801"),m.cc(),m.cc(),m.cc(),m.cc()}if(2&e){var r=m.oc();m.Nb(7),m.vc("ngModel",r.SignIn.name),m.Nb(4),m.vc("ngModel",r.SignIn.password)}}function I(e,t){if(1&e&&(m.dc(0,"ion-chip"),m.dc(1,"ion-avatar"),m.Zb(2,"img",8),m.cc(),m.dc(3,"ion-text"),m.Jc(4),m.cc(),m.cc()),2&e){var n=t.$implicit;m.Nb(2),m.vc("src",n.icon,m.Ec),m.Nb(2),m.Kc(n.name)}}function U(e,t){1&e&&m.Zb(0,"ion-icon",22)}function M(e,t){if(1&e){var n=m.ec();m.dc(0,"ion-button",5),m.lc("click",(function(){return m.Cc(n),m.oc(2).EditMessage()})),m.Zb(1,"ion-icon",23),m.Jc(2," \u516c\u5171\u4fe1\u606f "),m.cc()}}function R(e,t){if(1&e){var n=m.ec();m.dc(0,"ion-list"),m.dc(1,"ion-item"),m.dc(2,"ion-thumbnail",1),m.Zb(3,"ion-img",8),m.cc(),m.dc(4,"ion-label",9),m.dc(5,"ion-text"),m.dc(6,"h1"),m.Jc(7),m.cc(),m.cc(),m.Zb(8,"p"),m.Hc(9,I,5,2,"ion-chip",10),m.cc(),m.cc(),m.dc(10,"ion-item"),m.dc(11,"ion-button",11,12),m.lc("readStart",(function(e){return m.Cc(n),m.oc().onReadStart(e)}))("filePick",(function(e){return m.Cc(n),m.oc().onFilePicked(e)}))("readEnd",(function(e){return m.Cc(n),m.oc().onReadEnd(e)})),m.Zb(13,"ion-icon",13),m.Jc(14," \u66f4\u6362\u5934\u50cf "),m.cc(),m.dc(15,"ion-button",14),m.lc("click",(function(){return m.Cc(n),m.oc().ReLoad()})),m.Zb(16,"ion-icon",15),m.Jc(17," \u66f4\u65b0\u8d44\u6599 "),m.cc(),m.dc(18,"ion-button",14),m.lc("click",(function(){return m.Cc(n),m.oc().EditVC()})),m.Zb(19,"ion-icon",16),m.Jc(20," \u7f16\u5199\u7b80\u4ecb "),m.cc(),m.cc(),m.dc(21,"ion-item"),m.dc(22,"ion-label"),m.dc(23,"ion-button",14),m.lc("click",(function(){return m.Cc(n),m.oc().Payment()})),m.Jc(24," VIP \u81f3\u5230 "),m.cc(),m.cc(),m.dc(25,"ion-label"),m.dc(26,"ion-text"),m.Jc(27),m.cc(),m.cc(),m.cc(),m.dc(28,"ion-item"),m.dc(29,"ion-label"),m.dc(30,"ion-button",14),m.lc("click",(function(){return m.Cc(n),m.oc().SendVerifyEmail()})),m.Zb(31,"ion-icon",17),m.Jc(32," \u90ae\u7bb1 "),m.cc(),m.cc(),m.dc(33,"ion-text"),m.Jc(34),m.cc(),m.Hc(35,U,1,0,"ion-icon",18),m.cc(),m.dc(36,"ion-item"),m.dc(37,"ion-text"),m.Jc(38,"\u4e0a\u6b21\u767b\u5f55\u65f6\u95f4\uff1a"),m.cc(),m.dc(39,"ion-text"),m.Jc(40),m.cc(),m.cc(),m.dc(41,"ion-item"),m.dc(42,"ion-buttons",1),m.dc(43,"ion-button",5),m.lc("click",(function(){return m.Cc(n),m.oc().LogOut()})),m.Zb(44,"ion-icon",19),m.Jc(45," \u9000\u51fa "),m.cc(),m.Hc(46,M,3,0,"ion-button",20),m.cc(),m.dc(47,"ion-buttons",6),m.dc(48,"ion-button",5),m.lc("click",(function(){return m.Cc(n),m.oc().ChangePassword()})),m.Zb(49,"ion-icon",21),m.Jc(50," \u66f4\u6539\u5bc6\u7801 "),m.cc(),m.cc(),m.cc(),m.cc()}if(2&e){var r=m.oc();m.Nb(3),m.vc("src",r.Avatar),m.Nb(4),m.Kc(r.UserProfile.name),m.Nb(2),m.vc("ngForOf",r.Rolers),m.Nb(2),m.vc("readMode",r.readMode),m.Nb(16),m.Lc(" ",r.VIPbis," "),m.Nb(7),m.Kc(r.UserProfile.email),m.Nb(1),m.vc("ngIf",r.HasEmail),m.Nb(5),m.Kc(r.LastLogin),m.Nb(6),m.vc("ngIf",r.IsAdmin)}}var O,A=n("mxV5"),J=((O=function(){function e(t,n,r,i,c,s,o){_classCallCheck(this,e),this.settings=t,this.dbservice=n,this.host=r,this.loadingController=i,this.toastController=c,this.alertController=s,this.modalCtrl=o,this.ShowVipPayment=!0,this.PageModes={SignIn:"signin",SignIned:"signined"},this.SignIn={name:"",password:""},this.mode=this.PageModes.SignIn,this.readMode=l.c.arrayBuffer}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settings.WaitInit();case 2:this.mode=this.settings.HasUser?this.PageModes.SignIned:this.PageModes.SignIn,this.mode===this.PageModes.SignIned&&this.ReLoad(!1),this.settings.AppConfig.appSetting&&(this.ShowVipPayment=!0===this.settings.AppConfig.appSetting.showVIP);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"Payment",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===this.ShowVipPayment){e.next=2;break}return e.abrupt("return",void this.presentAlert("\u6682\u4e0d\u652f\u6301",null,"\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002"));case 2:return t=!1,e.next=5,this.alertController.create({header:"\u5ef6\u957fVIP\u65f6\u95f4",inputs:[{name:"3months",type:"radio",label:"3 \u4e2a\u6708",value:3,checked:!1},{name:"6months",type:"radio",label:"\u534a\u5e74",value:6,checked:!1},{name:"12months",type:"radio",label:"\u4e00\u5e74",value:12,checked:!0}],buttons:[{text:"\u786e\u5b9a",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});case 5:return n=e.sent,e.next=8,n.present();case 8:return e.next=10,n.onWillDismiss();case 10:if(r=e.sent,i=r.data,!1!==t){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,this.modalCtrl.create({component:x,componentProps:{PaySum:i.values}});case 16:return c=e.sent,e.next=19,c.present();case 19:case"end":return e.stop()}}),e,this)})))}},{key:"onReadStart",value:function(e){}},{key:"onFilePicked",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i,c,s,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=w.Buffer.from(e.content)).length/1024>300)){t.next=3;break}return t.abrupt("return",void this.presentAlert("\u6587\u4ef6\u592a\u5927",null,"\u76ee\u524d\u53ea\u63a5\u53d7\u5c0f\u4e8e 300KB \u7684\u56fe\u7247\u3002"));case 3:if(r=e.name.split("."),i=r[r.length-1].toLowerCase(),["jpg","png","jpeg"].includes(i)){t.next=6;break}return t.abrupt("return",void this.presentAlert("\u6587\u4ef6\u683c\u5f0f",null,"\u53ea\u63a5\u53d7 jpg, jpeg, png \u683c\u5f0f\u7684\u56fe\u7247\u3002"));case 6:return t.next=8,this.showLoading();case 8:c=this.settings.User,s="",this.host.GetAliToken(c.id,c.password,"osstoken").then((function(e){var t="avatar/".concat(c.id,".").concat(i);return new A({region:e.region,accessKeyId:e.token.accessKeyId,accessKeySecret:e.token.accessKeySecret,stsToken:e.token.securityToken,bucket:"huaheapp",endpoint:e.endpoint}).put(t,n)})).then((function(e){return s=e.url,o.host.UpdateUser(o.UserProfile,{avatar:e.url},!0)})).then((function(e){o.settings.User.avatar=s,o.settings.User=o.settings.User,o.presentAlert("\u4e0a\u4f20\u6210\u529f\uff01",null,"\u8bf7\u70b9\u51fb\u66f4\u65b0\u7528\u6237\u8d44\u6599\uff0c\u66f4\u65b0\u5934\u50cf\u94fe\u63a5\u3002")})).catch((function(e){o.presentAlert("\u4e0a\u4f20\u5934\u50cf\u5931\u8d25",null," \u8bf7\u786e\u5b9a\u60a8\u62e5\u6709\u64cd\u4f5c\u6743\u9650\u3002\u8bf7\u91cd\u65b0\u4e0a\u4f20\uff0c\u6216\u7a0d\u540e\u518d\u8bd5\u3002")}));case 11:case"end":return t.stop()}}),t,this)})))}},{key:"onReadEnd",value:function(e){this.filePicker.reset()}},{key:"ChangeUIMode",value:function(e){this.SignIn.name="",this.SignIn.password="",this.mode=e}},{key:"LogOut",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ChangeUIMode(this.PageModes.SignIn),this.settings.User=null,this.dbservice.initNano();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"UserSignIn",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.SignIn.name.IsNullOrEmpty()&&!this.SignIn.password.IsNullOrEmpty()){e.next=4;break}this.presentAlert(null,null,"\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"),e.next=7;break;case 4:return e.next=6,this.showLoading();case 6:this.host.SignIn(this.SignIn.name,this.SignIn.password).then((function(e){t.settings.User=e,t.ChangeUIMode(t.PageModes.SignIned),t.dbservice.initNano()})).catch((function(e){t.presentAlert("\u767b\u5f55\u5931\u8d25",null,e)})).finally((function(){t.closeLoading()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"UserSignUp",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.SignUpForm();case 2:if(t=e.sent,e.t0=null!==t,!e.t0){e.next=8;break}return e.next=7,this.showLoading();case 7:this.host.SignUp(t.username,t.pw).then((function(e){n.settings.User=e,n.ChangeUIMode(n.PageModes.SignIned)})).catch((function(e){n.presentAlert("\u6ce8\u518c\u5931\u8d25",null,e)})).finally((function(){n.closeLoading()}));case 8:case"end":return e.stop()}}),e,this)})))}},{key:"ReLoad",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.settings.User,t.t0=e,!t.t0){t.next=5;break}return t.next=5,this.showLoading();case 5:this.host.SignIn(n.id,n.password).then((function(e){e?r.settings.User=e:r.presentAlert(null,null,"\u627e\u4e0d\u5230\u60a8\u7684\u7528\u6237\u8d44\u6599\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002")})).catch((function(e){r.presentAlert(null,null,e.toString())})).finally((function(){r.closeLoading()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"SendVerifyEmail",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,c,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,this.alertController.create({header:"\u6ce8\u518c\u90ae\u7bb1",inputs:[{name:"keymail",type:"email",label:"Key",placeholder:"\u586b\u5199\u90ae\u7bb1\u5730\u5740"}],buttons:[{text:"\u53d1\u9001",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:if(r=e.sent,i=r.data,c=i.values.keymail,e.t0=!1!==t,!e.t0){e.next=20;break}if(!1===this.validateEmail(c)){e.next=19;break}return e.next=16,this.showLoading();case 16:this.host.VerifyEmail(this.UserProfile.id,this.UserProfile.password,c).then((function(e){s.presentAlert("\u6ce8\u518c\u90ae\u7bb1",null,e)})).catch((function(){s.presentAlert("\u90ae\u4ef6\u9a8c\u8bc1\u5931\u8d25",null,"\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002")})),e.next=20;break;case 19:this.presentAlert("\u9519\u8bef","\u90ae\u7bb1","\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\u3002");case 20:case"end":return e.stop()}}),e,this)})))}},{key:"ChangePassword",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,this.alertController.create({header:"\u66f4\u6539\u5bc6\u7801",inputs:[{name:"pwo",type:"password",placeholder:"\u8bf7\u8f93\u5165\u65e7\u5bc6\u7801"},{name:"pw1",type:"password",placeholder:"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801"},{name:"pw2",type:"password",placeholder:"\u8bf7\u91cd\u590d\u65b0\u5bc6\u7801"}],buttons:[{text:"\u66f4\u6539",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:if(r=e.sent,i=r.data,e.t0=!1!==t,!e.t0){e.next=27;break}if(i.values.pwo!==this.settings.User.password){e.next=26;break}if(i.values.pw1!==i.values.pw2){e.next=23;break}if(!/^[\S]{4,20}$/i.test(i.values.pw1)){e.next=20;break}return e.next=17,this.showLoading();case 17:this.host.UpdateUser(this.UserProfile,{password:i.values.pw1},!0).then((function(e){c.UserProfile.password=i.values.pw1,c.settings.User=c.UserProfile,c.presentAlert("\u4fee\u6539\u5bc6\u7801",null,"\u4fee\u6539\u5bc6\u7801\u6210\u529f\uff01")})).catch((function(e){c.presentAlert("\u4fee\u6539\u5bc6\u7801\u5931\u8d25",null,JSON.stringify(e))})),e.next=21;break;case 20:this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\u3002");case 21:e.next=24;break;case 23:this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4\uff0c\u8bf7\u91cd\u65b0\u786e\u8ba4\u3002");case 24:e.next=27;break;case 26:this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u60a8\u8f93\u5165\u7684\u65e7\u5bc6\u7801\u6709\u8bef\u3002");case 27:case"end":return e.stop()}}),e,this)})))}},{key:"SendPW2Mail",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,this.alertController.create({header:"\u5fd8\u8bb0\u5bc6\u7801",inputs:[{name:"name",type:"text",label:"name",placeholder:"\u7528\u6237\u540d"},{name:"mail",type:"text",label:"mail",placeholder:"\u90ae\u7bb1"}],buttons:[{text:"\u53d1\u9001",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:if(r=e.sent,i=r.data,e.t0=!1!==t,!e.t0){e.next=15;break}return e.next=14,this.showLoading();case 14:this.host.SendPW2Email(i.values.name,i.values.mail).then((function(e){e.statue?c.presentAlert("\u4fe1\u606f","\u83b7\u53d6\u5bc6\u7801",e.statue):c.presentAlert("\u5931\u8d25","\u83b7\u53d6\u5bc6\u7801\u5931\u8d25",e.error)})).catch((function(e){c.presentAlert("\u5931\u8d25","\u83b7\u53d6\u5bc6\u7801\u5931\u8d25",e.toString())}));case 15:case"end":return e.stop()}}),e,this)})))}},{key:"EditVC",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:v,componentProps:{}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,r=n.data,console.log(r);case 10:case"end":return e.stop()}}),e,this)})))}},{key:"EditMessage",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:Object(y.c)(),created:Date.now(),valid:0,author:this.settings.User.id,receiver:null,roller:1,readed:!1,private:!1,replyable:!1,title:"\u3002\u3002\u3002\u4f60\u597d\uff01",content:""},e.next=3,this.modalCtrl.create({component:k.a,componentProps:{Message:t}});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:case"end":return e.stop()}}),e,this)})))}},{key:"SignUpForm",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,this.alertController.create({header:"\u7528\u6237\u6ce8\u518c",inputs:[{name:"username",type:"text",label:"\u7528\u6237\u540d",placeholder:"\u586b\u5199\u7528\u6237\u540d",value:""},{name:"key1",type:"password",label:"\u8bbe\u5b9a\u5bc6\u7801",placeholder:"\u586b\u5199\u60a8\u7684\u5bc6\u7801",value:""},{name:"key2",type:"password",label:"\u91cd\u590d\u5bc6\u7801",placeholder:"\u91cd\u590d\u60a8\u7684\u5bc6\u7801",value:""}],buttons:[{text:"\u6ce8\u518c",handler:function(){t=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}}]});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.next=8,n.onWillDismiss();case 8:return r=e.sent,i=r.data,e.abrupt("return",t?i.values.username&&i.values.key1?i.values.key2!==i.values.key1?(this.presentAlert("\u65e0\u6548\u8f93\u5165",null,"\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4\u3002"),null):{username:i.values.username,pw:i.values.key1}:(this.presentAlert("\u65e0\u6548\u8f93\u5165",null,"\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26\u3002"),null):null);case 11:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.closeLoading();case 2:return r.next=4,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 4:return i=r.sent,r.next=7,i.present();case 7:case"end":return r.stop()}}),r,this)})))}},{key:"showLoading",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u6b63\u5728\u4f20\u8f93\u6570\u636e...",duration:6e5});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((e||"").toLowerCase())}},{key:"IsWeb",get:function(){return"web"===y.b}},{key:"Mode",get:function(){return this.mode},set:function(e){this.mode=e}},{key:"UserProfile",get:function(){return this.settings.User}},{key:"Rolers",get:function(){return this.settings.UserRolers(this.settings.User.roller)}},{key:"VIPbis",get:function(){return new Date(this.settings.User.vip).toChinaStr()}},{key:"IsAdmin",get:function(){return this.settings.User&&this.settings.User.roller>=256}},{key:"HasEmail",get:function(){return!!this.settings.User&&!!this.settings.User.email&&!this.settings.User.email.IsNullOrEmpty()}},{key:"HasPhone",get:function(){return!!this.settings.User&&!!this.settings.User.phone&&!this.settings.User.phone.IsNullOrEmpty()}},{key:"Avatar",get:function(){var e=this.settings.User;return e.avatar&&!e.avatar.IsNullOrEmpty()?e.avatar:this.settings.Avatar()}},{key:"LastLogin",get:function(){var e=new Date(this.UserProfile.lastlogin);return"".concat(e.toChinaStr()," ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())}}]),e}()).\u0275fac=function(e){return new(e||O)(m.Yb(d.a),m.Yb(h.a),m.Yb(g.a),m.Yb(a.Z),m.Yb(a.hb),m.Yb(a.b),m.Yb(a.ab))},O.\u0275cmp=m.Sb({type:O,selectors:[["app-userprofil"]],viewQuery:function(e,t){var n;1&e&&m.Oc(C,!0),2&e&&m.yc(n=m.mc())&&(t.filePicker=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],["slot","start"],["position","stacked"],[3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],[3,"click"],["slot","end"],["slot","end",3,"click"],[3,"src"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["ngxFilePicker","","fill","outline",3,"readMode","readStart","filePick","readEnd"],["filePicker","ngxFilePicker"],["name","contact"],["fill","outline",3,"click"],["name","ios-repeat"],["name","card"],["name","mail"],["name","checkmark",4,"ngIf"],["name","exit"],[3,"click",4,"ngIf"],["name","key"],["name","checkmark"],["name","send"]],template:function(e,t){1&e&&(m.Hc(0,S,6,0,"ion-header",0),m.dc(1,"ion-content"),m.Hc(2,P,21,2,"ion-list",0),m.Hc(3,R,51,9,"ion-list",0),m.cc()),2&e&&(m.vc("ngIf",!t.IsWeb),m.Nb(2),m.vc("ngIf",t.Mode===t.PageModes.SignIn),m.Nb(1),m.vc("ngIf",t.Mode===t.PageModes.SignIned))},directives:[c.j,a.m,a.s,a.W,a.i,a.F,a.U,a.D,a.E,a.C,a.w,a.v,a.gb,s.f,s.g,a.h,a.T,a.u,a.S,c.i,l.a,a.t,a.k,a.e],styles:[""]}),O);n.d(t,"UserprofilPageModule",(function(){return N}));var L,j=[{path:"",component:J}],N=((L=function e(){_classCallCheck(this,e)}).\u0275mod=m.Wb({type:L}),L.\u0275inj=m.Vb({factory:function(e){return new(e||L)},imports:[[b.b,c.b,s.c,a.X,l.b,o.j.forChild(j)]]}),L)}}]);