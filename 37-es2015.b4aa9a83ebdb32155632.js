(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{oR3u:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),s=n("tyNb"),o=n("c7TG"),r=n("CGrG"),l=n("mrSG"),d=n("LTmD"),a=n("HULg"),h=n("lEof"),u=n("PKx9"),g=n("+z1p"),b=n("fXoL"),p=n("zioG");let m=(()=>{class e{constructor(e,t,n,i,c,s){this.modalCtrl=e,this.loadingController=t,this.alertController=n,this.settings=i,this.host=c,this.forumservice=s,this.describe="",this.gender="none",this.birthday=null,this.Editor=g,this.EditorConfig={toolbar:["heading","|","bold","italic","bulletedList","numberedList","|","link","undo","redo"]}}ngOnInit(){return Object(l.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.user=this.settings.User,this.loadingView=yield this.loadingController.create({message:"\u4e0b\u8f7d\u6570\u636e...",duration:6e4}),yield this.loadingView.present(),this.forumservice.GetUserInfo(this.user.id).then(e=>{this.describe=e.describe?e.describe:"",this.gender=e.gender?e.gender:this.gender,this.birthday=e.birthday||""}).catch(e=>{this.presentAlert("\u5931\u8d25",null,"\u4e0b\u8f7d\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002")}).finally(()=>{this.loadingView.dismiss()})}))}onSave(){return Object(l.b)(this,void 0,void 0,(function*(){this.loadingView=yield this.loadingController.create({message:"\u4e0a\u4f20\u6570\u636e...",duration:6e4});let e=null;if(this.SelectedTime&&this.SelectedDate){const t=new Date(this.SelectedDate),n=new Date(this.SelectedTime);e=new Date(t.getFullYear(),t.getMonth(),t.getDate(),n.getHours(),n.getMinutes()).toDatabaseStr()}yield this.loadingView.present(),this.host.UpdateUser(this.user,{describe:this.describe,gender:this.gender,birthday:e||this.birthday},!1).then(e=>{console.log("update vuser:",e)}).catch(e=>{this.presentAlert("\u5931\u8d25",null,"\u4e0a\u4f20\u5931\u8d25")}).finally(()=>{this.loadingView.dismiss(),this.modalCtrl.dismiss()})}))}onCancel(){this.modalCtrl.dismiss(!1)}DeleteTime(){this.SelectedDate=null,this.SelectedTime=null}presentAlert(e,t,n){return Object(l.b)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(o.cb),b.Yb(o.bb),b.Yb(o.b),b.Yb(d.a),b.Yb(h.a),b.Yb(u.a))},e.\u0275cmp=b.Sb({type:e,selectors:[["app-profileditor"]],decls:37,vars:7,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["value","none"],["value","male"],["value","female"],[1,"ion-margin-start"],["fill","outline",3,"click"],["placeholder","\u65e5\u671f","displayFormat","YYYY\u5e74MM\u6708DD\u65e5","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u65f6\u95f4","displayFormat","HH:mm","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","config","editor","ngModelChange"]],template:function(e,t){1&e&&(b.dc(0,"ion-header"),b.dc(1,"ion-toolbar",0),b.dc(2,"ion-buttons",1),b.dc(3,"ion-button",2),b.lc("click",(function(){return t.onCancel()})),b.Zb(4,"ion-icon",3),b.dc(5,"ion-text"),b.Jc(6,"\u53d6\u6d88"),b.cc(),b.cc(),b.cc(),b.dc(7,"ion-title"),b.Jc(8,"\u7f16\u8f91\u7b80\u4ecb/\u8d44\u5386"),b.cc(),b.dc(9,"ion-buttons",4),b.dc(10,"ion-button",2),b.lc("click",(function(){return t.onSave()})),b.Zb(11,"ion-icon",5),b.dc(12,"ion-text"),b.Jc(13,"\u4fdd\u5b58"),b.cc(),b.cc(),b.cc(),b.cc(),b.cc(),b.dc(14,"ion-content"),b.dc(15,"ion-item"),b.dc(16,"ion-label"),b.dc(17,"ion-text"),b.Jc(18,"\u6027\u522b"),b.cc(),b.cc(),b.dc(19,"ion-select",6),b.lc("ngModelChange",(function(e){return t.gender=e})),b.dc(20,"ion-select-option",7),b.Jc(21,"\u4e0d\u516c\u5f00"),b.cc(),b.dc(22,"ion-select-option",8),b.Jc(23,"\u7537\u58eb"),b.cc(),b.dc(24,"ion-select-option",9),b.Jc(25,"\u5973\u58eb"),b.cc(),b.cc(),b.cc(),b.dc(26,"ion-item"),b.dc(27,"ion-label"),b.dc(28,"ion-text"),b.Jc(29,"\u751f\u65e5"),b.cc(),b.dc(30,"ion-text",10),b.Jc(31),b.cc(),b.cc(),b.dc(32,"ion-button",11),b.lc("click",(function(){return t.DeleteTime()})),b.Jc(33,"\u5220\u9664"),b.cc(),b.dc(34,"ion-datetime",12),b.lc("ngModelChange",(function(e){return t.SelectedDate=e})),b.cc(),b.dc(35,"ion-datetime",13),b.lc("ngModelChange",(function(e){return t.SelectedTime=e})),b.cc(),b.cc(),b.dc(36,"ckeditor",14),b.lc("ngModelChange",(function(e){return t.describe=e})),b.cc(),b.cc()),2&e&&(b.Nb(19),b.vc("ngModel",t.gender),b.Nb(12),b.Kc(t.birthday),b.Nb(3),b.vc("ngModel",t.SelectedDate),b.Nb(1),b.vc("ngModel",t.SelectedTime),b.Nb(1),b.vc("ngModel",t.describe)("config",t.EditorConfig)("editor",t.Editor))},directives:[o.t,o.Y,o.j,o.i,o.u,o.T,o.W,o.n,o.x,o.D,o.Q,o.hb,c.f,c.g,o.R,o.o,p.a],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[contenteditable][_ngcontent-%COMP%], ckeditor[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}"]}),e})();var f=n("7L00");let y=(()=>{class e{constructor(e,t){this.modalCtrl=e,this.alertController=t,this.quadCode="https://huaheapp.oss-cn-hangzhou.aliyuncs.com/app/weixinpay"}ngOnInit(){}get QuadCode(){return`${this.quadCode}${this.PaySum.toString().padStart(2,"0")}.png`}onclose(){return Object(l.b)(this,void 0,void 0,(function*(){yield this.presentAlert("\u591a\u8c22\uff01",null,"\u518d\u6b21\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e3a\u60a8\u670d\u52a1\uff01"),this.modalCtrl.dismiss()}))}presentAlert(e,t,n){return Object(l.b)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(o.cb),b.Yb(o.b))},e.\u0275cmp=b.Sb({type:e,selectors:[["app-payment"]],inputs:{PaySum:"PaySum"},decls:18,vars:1,consts:[["color","primary"],["slot","end"],[3,"click"],["name","cash"],[1,"ion-text-wrap"],[3,"src"]],template:function(e,t){1&e&&(b.dc(0,"ion-header"),b.dc(1,"ion-toolbar",0),b.dc(2,"ion-title"),b.Jc(3,"\u8d2d\u4e70VIP"),b.cc(),b.dc(4,"ion-buttons",1),b.dc(5,"ion-button",2),b.lc("click",(function(){return t.onclose()})),b.Zb(6,"ion-icon",3),b.Jc(7," \u786e\u5b9a "),b.cc(),b.cc(),b.cc(),b.cc(),b.dc(8,"ion-content"),b.dc(9,"ion-item"),b.dc(10,"ion-label",4),b.dc(11,"ion-text"),b.Jc(12,"\u975e\u5e38\u611f\u8c22\u60a8\u7684\u652f\u6301\uff01"),b.cc(),b.Zb(13,"br"),b.dc(14,"ion-text"),b.Jc(15,"\u8bf7\u60a8\u5728\u652f\u4ed8\u7684\u65f6\u5019\uff0c\u5907\u6ce8\u91cc\u586b\u5199\u5728\u672c\u8f6f\u4ef6\u4e2d\u4f7f\u7528\u7684\u8d26\u53f7\uff0c\u65b9\u4fbf\u6211\u4eec\u5c3d\u5feb\u4e3a\u60a8\u5f00\u901aVIP\u6743\u9650\u3002"),b.cc(),b.cc(),b.cc(),b.dc(16,"ion-item"),b.Zb(17,"ion-img",5),b.cc(),b.cc()),2&e&&(b.Nb(17),b.vc("src",t.QuadCode))},directives:[o.t,o.Y,o.W,o.j,o.i,o.u,o.n,o.x,o.D,o.T,o.v],styles:[""]}),e})();var v=n("i/He"),C=n("Y6BA");const w=["filePicker"];function S(e,t){1&e&&(b.dc(0,"ion-header"),b.dc(1,"ion-toolbar"),b.dc(2,"ion-buttons",1),b.Zb(3,"ion-menu-button"),b.cc(),b.dc(4,"ion-title"),b.Jc(5,"\u7528\u6237"),b.cc(),b.cc(),b.cc())}function I(e,t){if(1&e){const e=b.ec();b.dc(0,"ion-list"),b.dc(1,"ion-list-header"),b.dc(2,"ion-label"),b.Jc(3,"\u7528\u6237\u767b\u5f55"),b.cc(),b.cc(),b.dc(4,"ion-item"),b.dc(5,"ion-label",2),b.Jc(6,"\u7528\u6237\u540d"),b.cc(),b.dc(7,"ion-input",3),b.lc("ngModelChange",(function(t){return b.Cc(e),b.oc().SignIn.name=t})),b.cc(),b.cc(),b.dc(8,"ion-item"),b.dc(9,"ion-label",2),b.Jc(10,"\u5bc6\u7801"),b.cc(),b.dc(11,"ion-input",4),b.lc("ngModelChange",(function(t){return b.Cc(e),b.oc().SignIn.password=t})),b.cc(),b.cc(),b.dc(12,"ion-item"),b.dc(13,"ion-buttons",1),b.dc(14,"ion-button",5),b.lc("click",(function(){return b.Cc(e),b.oc().UserSignIn("signin")})),b.Jc(15,"\u767b\u5f55"),b.cc(),b.dc(16,"ion-button",5),b.lc("click",(function(){return b.Cc(e),b.oc().UserSignUp()})),b.Jc(17,"\u6ce8\u518c\u65b0\u7528\u6237"),b.cc(),b.cc(),b.dc(18,"ion-buttons",6),b.dc(19,"ion-button",7),b.lc("click",(function(){return b.Cc(e),b.oc().SendPW2Mail()})),b.Jc(20,"\u5fd8\u8bb0\u5bc6\u7801"),b.cc(),b.cc(),b.cc(),b.cc()}if(2&e){const e=b.oc();b.Nb(7),b.vc("ngModel",e.SignIn.name),b.Nb(4),b.vc("ngModel",e.SignIn.password)}}function P(e,t){if(1&e&&(b.dc(0,"ion-chip"),b.dc(1,"ion-avatar"),b.Zb(2,"img",8),b.cc(),b.dc(3,"ion-text"),b.Jc(4),b.cc(),b.cc()),2&e){const e=t.$implicit;b.Nb(2),b.vc("src",e.icon,b.Ec),b.Nb(2),b.Kc(e.name)}}function M(e,t){1&e&&b.Zb(0,"ion-icon",22)}function k(e,t){if(1&e){const e=b.ec();b.dc(0,"ion-button",5),b.lc("click",(function(){return b.Cc(e),b.oc(2).EditMessage()})),b.Zb(1,"ion-icon",23),b.Jc(2," \u516c\u5171\u4fe1\u606f "),b.cc()}}function U(e,t){if(1&e){const e=b.ec();b.dc(0,"ion-list"),b.dc(1,"ion-item"),b.dc(2,"ion-thumbnail",1),b.Zb(3,"ion-img",8),b.cc(),b.dc(4,"ion-label",9),b.dc(5,"ion-text"),b.dc(6,"h1"),b.Jc(7),b.cc(),b.cc(),b.Zb(8,"p"),b.Hc(9,P,5,2,"ion-chip",10),b.cc(),b.cc(),b.dc(10,"ion-item"),b.dc(11,"ion-button",11,12),b.lc("readStart",(function(t){return b.Cc(e),b.oc().onReadStart(t)}))("filePick",(function(t){return b.Cc(e),b.oc().onFilePicked(t)}))("readEnd",(function(t){return b.Cc(e),b.oc().onReadEnd(t)})),b.Zb(13,"ion-icon",13),b.Jc(14," \u66f4\u6362\u5934\u50cf "),b.cc(),b.dc(15,"ion-button",14),b.lc("click",(function(){return b.Cc(e),b.oc().ReLoad()})),b.Zb(16,"ion-icon",15),b.Jc(17," \u66f4\u65b0\u8d44\u6599 "),b.cc(),b.dc(18,"ion-button",14),b.lc("click",(function(){return b.Cc(e),b.oc().EditVC()})),b.Zb(19,"ion-icon",16),b.Jc(20," \u7f16\u5199\u7b80\u4ecb "),b.cc(),b.cc(),b.dc(21,"ion-item"),b.dc(22,"ion-label"),b.dc(23,"ion-button",14),b.lc("click",(function(){return b.Cc(e),b.oc().Payment()})),b.Jc(24," VIP \u81f3\u5230 "),b.cc(),b.cc(),b.dc(25,"ion-label"),b.dc(26,"ion-text"),b.Jc(27),b.cc(),b.cc(),b.cc(),b.dc(28,"ion-item"),b.dc(29,"ion-label"),b.dc(30,"ion-button",14),b.lc("click",(function(){return b.Cc(e),b.oc().SendVerifyEmail()})),b.Zb(31,"ion-icon",17),b.Jc(32," \u90ae\u7bb1 "),b.cc(),b.cc(),b.dc(33,"ion-text"),b.Jc(34),b.cc(),b.Hc(35,M,1,0,"ion-icon",18),b.cc(),b.dc(36,"ion-item"),b.dc(37,"ion-text"),b.Jc(38,"\u4e0a\u6b21\u767b\u5f55\u65f6\u95f4\uff1a"),b.cc(),b.dc(39,"ion-text"),b.Jc(40),b.cc(),b.cc(),b.dc(41,"ion-item"),b.dc(42,"ion-buttons",1),b.dc(43,"ion-button",5),b.lc("click",(function(){return b.Cc(e),b.oc().LogOut()})),b.Zb(44,"ion-icon",19),b.Jc(45," \u9000\u51fa "),b.cc(),b.Hc(46,k,3,0,"ion-button",20),b.cc(),b.dc(47,"ion-buttons",6),b.dc(48,"ion-button",5),b.lc("click",(function(){return b.Cc(e),b.oc().ChangePassword()})),b.Zb(49,"ion-icon",21),b.Jc(50," \u66f4\u6539\u5bc6\u7801 "),b.cc(),b.cc(),b.cc(),b.cc()}if(2&e){const e=b.oc();b.Nb(3),b.vc("src",e.Avatar),b.Nb(4),b.Kc(e.UserProfile.name),b.Nb(2),b.vc("ngForOf",e.Rolers),b.Nb(2),b.vc("readMode",e.readMode),b.Nb(16),b.Lc(" ",e.VIPbis," "),b.Nb(7),b.Kc(e.UserProfile.email),b.Nb(1),b.vc("ngIf",e.HasEmail),b.Nb(5),b.Kc(e.LastLogin),b.Nb(6),b.vc("ngIf",e.IsAdmin)}}const x=n("mxV5");let O=(()=>{class e{constructor(e,t,n,i,c,s,o){this.settings=e,this.dbservice=t,this.host=n,this.loadingController=i,this.toastController=c,this.alertController=s,this.modalCtrl=o,this.ShowVipPayment=!0,this.PageModes={SignIn:"signin",SignIned:"signined"},this.SignIn={name:"",password:""},this.mode=this.PageModes.SignIn,this.readMode=r.c.arrayBuffer}ngOnInit(){return Object(l.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.mode=this.settings.HasUser?this.PageModes.SignIned:this.PageModes.SignIn,this.mode===this.PageModes.SignIned&&this.ReLoad(!1),this.settings.AppConfig.appSetting&&(this.ShowVipPayment=!0===this.settings.AppConfig.appSetting.showVIP)}))}get IsWeb(){return"web"===C.b}get Mode(){return this.mode}set Mode(e){this.mode=e}get UserProfile(){return this.settings.User}get Rolers(){return this.settings.UserRolers(this.settings.User.roller)}get VIPbis(){return new Date(this.settings.User.vip).toChinaStr()}get IsAdmin(){return this.settings.User&&this.settings.User.roller>=256}get HasEmail(){return!!this.settings.User&&!!this.settings.User.email&&!this.settings.User.email.IsNullOrEmpty()}get HasPhone(){return!!this.settings.User&&!!this.settings.User.phone&&!this.settings.User.phone.IsNullOrEmpty()}get Avatar(){const e=this.settings.User;return e.avatar&&!e.avatar.IsNullOrEmpty()?e.avatar:this.settings.Avatar()}get LastLogin(){const e=new Date(this.UserProfile.lastlogin);return`${e.toChinaStr()} ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`}Payment(){return Object(l.b)(this,void 0,void 0,(function*(){if(!0!==this.ShowVipPayment)return void this.presentAlert("\u6682\u4e0d\u652f\u6301",null,"\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002");let e=!1;const t=yield this.alertController.create({header:"\u5ef6\u957fVIP\u65f6\u95f4",inputs:[{name:"3months",type:"radio",label:"3 \u4e2a\u6708",value:3,checked:!1},{name:"6months",type:"radio",label:"\u534a\u5e74",value:6,checked:!1},{name:"12months",type:"radio",label:"\u4e00\u5e74",value:12,checked:!0}],buttons:[{text:"\u786e\u5b9a",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});yield t.present();const{data:n}=yield t.onWillDismiss();if(!1===e)return;const i=yield this.modalCtrl.create({component:y,componentProps:{PaySum:n.values}});yield i.present()}))}onReadStart(e){}onFilePicked(e){return Object(l.b)(this,void 0,void 0,(function*(){const t=v.Buffer.from(e.content);if(t.length/1024>300)return void this.presentAlert("\u6587\u4ef6\u592a\u5927",null,"\u76ee\u524d\u53ea\u63a5\u53d7\u5c0f\u4e8e 300KB \u7684\u56fe\u7247\u3002");const n=e.name.split("."),i=n[n.length-1].toLowerCase();if(!["jpg","png","jpeg"].includes(i))return void this.presentAlert("\u6587\u4ef6\u683c\u5f0f",null,"\u53ea\u63a5\u53d7 jpg, jpeg, png \u683c\u5f0f\u7684\u56fe\u7247\u3002");yield this.showLoading();const c=this.settings.User;let s="";this.host.GetAliToken(c.id,c.password,"osstoken").then(e=>{const n=`avatar/${c.id}.${i}`;return new x({region:e.region,accessKeyId:e.token.accessKeyId,accessKeySecret:e.token.accessKeySecret,stsToken:e.token.securityToken,bucket:"huaheapp",endpoint:e.endpoint}).put(n,t)}).then(e=>(s=e.url,this.host.UpdateUser(this.UserProfile,{avatar:e.url},!0))).then(e=>{this.settings.User.avatar=s,this.settings.User=this.settings.User,this.presentAlert("\u4e0a\u4f20\u6210\u529f\uff01",null,"\u8bf7\u70b9\u51fb\u66f4\u65b0\u7528\u6237\u8d44\u6599\uff0c\u66f4\u65b0\u5934\u50cf\u94fe\u63a5\u3002")}).catch(e=>{this.presentAlert("\u4e0a\u4f20\u5934\u50cf\u5931\u8d25",null," \u8bf7\u786e\u5b9a\u60a8\u62e5\u6709\u64cd\u4f5c\u6743\u9650\u3002\u8bf7\u91cd\u65b0\u4e0a\u4f20\uff0c\u6216\u7a0d\u540e\u518d\u8bd5\u3002")})}))}onReadEnd(e){this.filePicker.reset()}ChangeUIMode(e){this.SignIn.name="",this.SignIn.password="",this.mode=e}LogOut(){return Object(l.b)(this,void 0,void 0,(function*(){this.ChangeUIMode(this.PageModes.SignIn),this.settings.User=null,this.dbservice.initNano()}))}UserSignIn(e){return Object(l.b)(this,void 0,void 0,(function*(){this.SignIn.name.IsNullOrEmpty()||this.SignIn.password.IsNullOrEmpty()?this.presentAlert(null,null,"\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):(yield this.showLoading(),this.host.SignIn(this.SignIn.name,this.SignIn.password).then(e=>{this.settings.User=e,this.ChangeUIMode(this.PageModes.SignIned),this.dbservice.initNano()}).catch(e=>{this.presentAlert("\u767b\u5f55\u5931\u8d25",null,e)}).finally(()=>{this.closeLoading()}))}))}UserSignUp(){return Object(l.b)(this,void 0,void 0,(function*(){yield this.showLoading(),this.host.SignUp(this.SignIn.name,this.SignIn.password).then(e=>{this.settings.User=e,this.ChangeUIMode(this.PageModes.SignIned)}).catch(e=>{this.presentAlert("\u6ce8\u518c\u5931\u8d25",null,e)}).finally(()=>{this.closeLoading()})}))}ReLoad(e=!0){return Object(l.b)(this,void 0,void 0,(function*(){const t=this.settings.User;e&&(yield this.showLoading()),this.host.SignIn(t.id,t.password).then(e=>{e?this.settings.User=e:this.presentAlert(null,null,"\u627e\u4e0d\u5230\u60a8\u7684\u7528\u6237\u8d44\u6599\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u3002")}).catch(e=>{this.presentAlert(null,null,e.toString())}).finally(()=>{this.closeLoading()})}))}SendVerifyEmail(){return Object(l.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u6ce8\u518c\u90ae\u7bb1",inputs:[{name:"keymail",type:"email",label:"Key",placeholder:"\u586b\u5199\u90ae\u7bb1\u5730\u5740"}],buttons:[{text:"\u53d1\u9001",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});yield t.present();const{data:n}=yield t.onWillDismiss(),i=n.values.keymail;!1!==e&&(!1!==this.validateEmail(i)?(yield this.showLoading(),this.host.VerifyEmail(this.UserProfile.id,this.UserProfile.password,i).then(e=>{this.presentAlert("\u6ce8\u518c\u90ae\u7bb1",null,e)}).catch(()=>{this.presentAlert("\u90ae\u4ef6\u9a8c\u8bc1\u5931\u8d25",null,"\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002")})):this.presentAlert("\u9519\u8bef","\u90ae\u7bb1","\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\u3002"))}))}ChangePassword(){return Object(l.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u66f4\u6539\u5bc6\u7801",inputs:[{name:"pwo",type:"password",placeholder:"\u8bf7\u8f93\u5165\u65e7\u5bc6\u7801"},{name:"pw1",type:"password",placeholder:"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801"},{name:"pw2",type:"password",placeholder:"\u8bf7\u91cd\u590d\u65b0\u5bc6\u7801"}],buttons:[{text:"\u66f4\u6539",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});yield t.present();const{data:n}=yield t.onWillDismiss();!1!==e&&(n.values.pwo===this.settings.User.password?n.values.pw1===n.values.pw2?/^[\S]{4,20}$/i.test(n.values.pw1)?(yield this.showLoading(),this.host.UpdateUser(this.UserProfile,{password:n.values.pw1},!0).then(e=>{this.UserProfile.password=n.values.pw1,this.settings.User=this.UserProfile,this.presentAlert("\u4fee\u6539\u5bc6\u7801",null,"\u4fee\u6539\u5bc6\u7801\u6210\u529f\uff01")}).catch(e=>{this.presentAlert("\u4fee\u6539\u5bc6\u7801\u5931\u8d25",null,JSON.stringify(e))})):this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\u3002"):this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4\uff0c\u8bf7\u91cd\u65b0\u786e\u8ba4\u3002"):this.presentAlert("\u9519\u8bef","\u4fee\u6539\u5bc6\u7801","\u60a8\u8f93\u5165\u7684\u65e7\u5bc6\u7801\u6709\u8bef\u3002"))}))}SendPW2Mail(){return Object(l.b)(this,void 0,void 0,(function*(){let e=!1;const t=yield this.alertController.create({header:"\u5fd8\u8bb0\u5bc6\u7801",inputs:[{name:"name",type:"text",label:"name",placeholder:"\u7528\u6237\u540d"},{name:"mail",type:"text",label:"mail",placeholder:"\u90ae\u7bb1"}],buttons:[{text:"\u53d1\u9001",handler:()=>{e=!0}},{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary"}]});yield t.present();const{data:n}=yield t.onWillDismiss();!1!==e&&(yield this.showLoading(),this.host.SendPW2Email(n.values.name,n.values.mail).then(e=>{e.statue?this.presentAlert("\u4fe1\u606f","\u83b7\u53d6\u5bc6\u7801",e.statue):this.presentAlert("\u5931\u8d25","\u83b7\u53d6\u5bc6\u7801\u5931\u8d25",e.error)}).catch(e=>{this.presentAlert("\u5931\u8d25","\u83b7\u53d6\u5bc6\u7801\u5931\u8d25",e.toString())}))}))}EditVC(){return Object(l.b)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:m,componentProps:{}});yield e.present();const{data:t}=yield e.onWillDismiss();console.log(t)}))}EditMessage(){return Object(l.b)(this,void 0,void 0,(function*(){const e={id:Object(C.c)(),created:Date.now(),valid:0,author:this.settings.User.id,receiver:null,roller:1,readed:!1,private:!1,replyable:!1,title:"\u3002\u3002\u3002\u4f60\u597d\uff01",content:""},t=yield this.modalCtrl.create({component:f.a,componentProps:{Message:e}});yield t.present(),yield t.onWillDismiss()}))}presentAlert(e,t,n){return Object(l.b)(this,void 0,void 0,(function*(){yield this.closeLoading();const i=yield this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});yield i.present()}))}showLoading(){return Object(l.b)(this,void 0,void 0,(function*(){this.loadingView||(this.loadingView=yield this.loadingController.create({message:"\u6b63\u5728\u4f20\u8f93\u6570\u636e...",duration:6e5})),yield this.loadingView.present()}))}closeLoading(){return Object(l.b)(this,void 0,void 0,(function*(){this.loadingView&&(yield this.loadingView.dismiss(),this.loadingView=null)}))}validateEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((e||"").toLowerCase())}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(d.a),b.Yb(a.a),b.Yb(h.a),b.Yb(o.bb),b.Yb(o.jb),b.Yb(o.b),b.Yb(o.cb))},e.\u0275cmp=b.Sb({type:e,selectors:[["app-userprofil"]],viewQuery:function(e,t){var n;1&e&&b.Oc(w,!0),2&e&&b.yc(n=b.mc())&&(t.filePicker=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],["slot","start"],["position","stacked"],[3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],[3,"click"],["slot","end"],["slot","end",3,"click"],[3,"src"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["ngxFilePicker","","fill","outline",3,"readMode","readStart","filePick","readEnd"],["filePicker","ngxFilePicker"],["name","contact"],["fill","outline",3,"click"],["name","ios-repeat"],["name","card"],["name","mail"],["name","checkmark",4,"ngIf"],["name","exit"],[3,"click",4,"ngIf"],["name","key"],["name","checkmark"],["name","send"]],template:function(e,t){1&e&&(b.Hc(0,S,6,0,"ion-header",0),b.dc(1,"ion-content"),b.Hc(2,I,21,2,"ion-list",0),b.Hc(3,U,51,9,"ion-list",0),b.cc()),2&e&&(b.vc("ngIf",!t.IsWeb),b.Nb(2),b.vc("ngIf",t.Mode===t.PageModes.SignIn),b.Nb(1),b.vc("ngIf",t.Mode===t.PageModes.SignIned))},directives:[i.j,o.n,o.t,o.Y,o.j,o.G,o.W,o.E,o.F,o.D,o.x,o.w,o.ib,c.f,c.g,o.i,o.V,o.v,o.T,i.i,r.a,o.u,o.l,o.e],styles:[""]}),e})();n.d(t,"UserprofilPageModule",(function(){return J}));const A=[{path:"",component:O}];let J=(()=>{class e{}return e.\u0275mod=b.Wb({type:e}),e.\u0275inj=b.Vb({factory:function(t){return new(t||e)},imports:[[p.b,i.b,c.c,o.Z,r.b,s.j.forChild(A)]]}),e})()}}]);