function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{dnR8:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("3Pt+"),c=n("tyNb"),o=n("c7TG"),a=n("mrSG"),s=n("PKx9"),u=n("LTmD"),d=n("7L00"),l=n("Y6BA"),f=n("fXoL"),h=n("i/bi");function g(e,t){1&e&&f.ac(0,"ion-menu-button")}function p(e,t){if(1&e&&(f.ec(0,"ion-item"),f.ec(1,"ion-label"),f.ec(2,"ion-text"),f.Hc(3),f.dc(),f.dc(),f.dc()),2&e){var n=f.pc();f.Nb(3),f.Ic(n.InfoNoMessage)}}function m(e,t){if(1&e&&(f.ec(0,"ion-text"),f.Hc(1),f.dc()),2&e){var n=f.pc().$implicit;f.Nb(1),f.Jc("\u6765\u81ea\uff1a",n.author,"")}}function b(e,t){if(1&e&&(f.ec(0,"ion-text"),f.Hc(1),f.dc()),2&e){var n=f.pc().$implicit;f.Nb(1),f.Jc("\u53d1\u9001\u7ed9\uff1a",n.receiver,"")}}function v(e,t){if(1&e){var n=f.fc();f.ec(0,"ion-item-sliding",10),f.ec(1,"ion-item"),f.ec(2,"ion-label"),f.ec(3,"ion-text",11),f.Hc(4),f.dc(),f.ac(5,"br"),f.Fc(6,m,2,1,"ion-text",3),f.Fc(7,b,2,1,"ion-text",3),f.ac(8,"br"),f.ec(9,"p"),f.ec(10,"small"),f.Hc(11),f.dc(),f.dc(),f.dc(),f.ec(12,"ion-buttons",4),f.ec(13,"ion-button",12),f.mc("click",(function(){f.Ac(n);var e=t.$implicit;return f.pc().ShowMessage(e)})),f.ac(14,"ion-icon",13),f.dc(),f.dc(),f.dc(),f.ec(15,"ion-item-options",14),f.ec(16,"ion-item-option",15),f.mc("click",(function(){f.Ac(n);var e=t.$implicit;return f.pc().ReplyMessage(e)})),f.ac(17,"ion-icon",16),f.dc(),f.dc(),f.ec(18,"ion-item-options",17),f.ec(19,"ion-item-option",18),f.mc("click",(function(){f.Ac(n);var e=t.$implicit;return f.pc().DeleteMsg(e)})),f.ac(20,"ion-icon",19),f.dc(),f.dc(),f.dc()}if(2&e){var i=t.$implicit,r=f.pc();f.uc("disabled",!r.ForMe),f.Nb(3),f.uc("color",i.readed?"medium":"dark"),f.Nb(1),f.Jc("\u6807\u9898\uff1a",i.title,""),f.Nb(2),f.uc("ngIf",r.ForMe),f.Nb(1),f.uc("ngIf",!r.ForMe),f.Nb(4),f.Ic(r.ShowTime(i.created)),f.Nb(2),f.uc("color",i.readed?"medium":"primary"),f.Nb(1),f.uc("name",i.readed?"mail":"mail-unread"),f.Nb(2),f.uc("disabled",!i.replyable)("color",i.replyable?"primary":"medium")}}function k(e,t){if(1&e){var n=f.fc();f.ec(0,"div",20),f.ec(1,"sui-pagination",21),f.mc("pageChange",(function(e){return f.Ac(n),f.pc().PageIndex=e})),f.dc(),f.dc()}if(2&e){var i=f.pc();f.Nb(1),f.uc("collectionSize",i.PageSum)("pageSize",20)("maxSize",i.MaxPageButtons)("hasNavigationLinks",!0)("hasBoundaryLinks",!0)("page",i.PageIndex)}}var x,w=((x=function(){function e(t,n,i,r,c,o,a){var s=this;_classCallCheck(this,e),this.loadingController=t,this.modalCtrl=n,this.alertController=i,this.route=r,this.router=c,this.forumservice=o,this.settings=a,this.pageindex=0,this.Messages=[],this.ForMe=!0,this.InfoNoMessage="\u6b63\u5728\u8bfb\u53d6\u60a8\u7684\u6d88\u606f\u3002\u3002\u3002",this.Pages=[0],this.PageSum=0,this.LoadSuccessed=!1,this.CanNaviBack=!0,this.route.params.subscribe((function(e){s.CanNaviBack="true"===e.naviback}))}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.settings.HasUser){e.next=2;break}return e.abrupt("return",(this.presentAlert("\u65e0\u6cd5\u8bbf\u95ee",null,"\u60a8\u8fd8\u6ca1\u6709\u6ce8\u518c\u8d26\u53f7\uff0c\u65e0\u6cd5\u53d1\u9001\u6d88\u606f\u3002"),void this.router.navigateByUrl("/menu/user")));case 2:this.PageIndex=0;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"ShowTime",value:function(e){return new Date(e).toChinaStr(!0)}},{key:"ShowMessage",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.ForMe&&!1===e.readed&&this.forumservice.DeleteMessage(e.id,!1).then((function(){e.readed=!0})),t.next=3,this.modalCtrl.create({component:d.a,componentProps:{Message:e,Read:!0}});case 3:return n=t.sent,t.next=6,n.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"ChangeMode",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ForMe=!this.ForMe,this.Messages=[],this.PageIndex=0;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"DeleteMsg",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showLoading();case 2:this.forumservice.DeleteMessage(e.id,!0).then((function(){n.Messages=n.Messages.filter((function(t){return t.id!==e.id})),0===n.Messages.length&&(n.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f\u3002\u3002\u3002")})).finally((function(){n.closeLoading()}));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"ReplyMessage",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.b)(),i=new Date(e.created).toChinaStr(!0),r={id:n,created:Date.now(),valid:0,author:this.settings.User.id,receiver:e.author,roller:0,readed:!1,private:!0,replyable:!0,title:"\u56de\u590d\uff1a".concat(e.title),content:"\n\n\u539f\u6d88\u606f\uff1a".concat(i,"\n\u539f\u5185\u5bb9\uff1a=======================\n").concat(e.content)},t.next=5,this.modalCtrl.create({component:d.a,componentProps:{Message:r}});case 5:return c=t.sent,t.next=8,c.present();case 8:return t.next=10,c.onWillDismiss();case 10:case"end":return t.stop()}}),t,this)})))}},{key:"doRefresh",value:function(e){this.Messages=[],this.Reload(this.PageIndex).finally((function(){e.target.complete()}))}},{key:"Reload",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showLoading();case 2:return t.abrupt("return",this.forumservice.LoadMessages(e,this.ForMe).then((function(e){return n.BuildPages(e.sum),n.Messages=e.data||[],0===n.Messages.length&&(n.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f"),n.LoadSuccessed=!0,!0})).finally((function(){n.closeLoading()})));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"showLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u8bfb\u53d6\u6211\u7684\u6d88\u606f...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return r=i.sent,i.next=5,r.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"BuildPages",value:function(e){if(0===this.PageIndex)if(0!==e){this.Pages=[];for(var t=Math.ceil(e/20),n=0;n<t;n++)this.Pages.push(n)}else this.Pages=[0]}},{key:"MaxPageButtons",get:function(){return this.settings.DeviceWidth>=400?7:2}},{key:"PageIndex",get:function(){return this.pageindex},set:function(e){this.pageindex=e,this.Reload(e)}}]),e}()).\u0275fac=function(e){return new(e||x)(f.Zb(o.eb),f.Zb(o.fb),f.Zb(o.b),f.Zb(c.a),f.Zb(c.g),f.Zb(s.a),f.Zb(u.a))},x.\u0275cmp=f.Tb({type:x,selectors:[["app-messagelist"]],decls:17,vars:5,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],[4,"ngIf"],["slot","end"],[3,"click"],["slot","fixed",3,"ionRefresh"],["ion-no-padding",""],[3,"disabled",4,"ngFor","ngForOf"],["class","ui very basic segment",4,"ngIf"],[3,"disabled"],[3,"color"],[3,"color","click"],["slot","end",3,"name"],["side","start"],[3,"disabled","color","click"],["slot","icon-only","name","send"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],[1,"ui","very","basic","segment"],[1,"ui","right","floated",3,"collectionSize","pageSize","maxSize","hasNavigationLinks","hasBoundaryLinks","page","pageChange"]],template:function(e,t){1&e&&(f.ec(0,"ion-header"),f.ec(1,"ion-toolbar",0),f.ec(2,"ion-buttons",1),f.ac(3,"ion-back-button",2),f.Fc(4,g,1,0,"ion-menu-button",3),f.dc(),f.ec(5,"ion-title"),f.Hc(6,"\u6211\u7684\u6d88\u606f"),f.dc(),f.ec(7,"ion-buttons",4),f.ec(8,"ion-button",5),f.mc("click",(function(){return t.ChangeMode()})),f.Hc(9),f.dc(),f.dc(),f.dc(),f.dc(),f.ec(10,"ion-content"),f.ec(11,"ion-refresher",6),f.mc("ionRefresh",(function(e){return t.doRefresh(e)})),f.ac(12,"ion-refresher-content"),f.dc(),f.ec(13,"ion-list",7),f.Fc(14,p,4,1,"ion-item",3),f.Fc(15,v,21,10,"ion-item-sliding",8),f.dc(),f.Fc(16,k,2,6,"div",9),f.dc()),2&e&&(f.Nb(4),f.uc("ngIf",!t.CanNaviBack),f.Nb(5),f.Ic(t.ForMe?"\u6536\u5230\u7684":"\u53d1\u9001\u7684"),f.Nb(5),f.uc("ngIf",0===t.Messages.length),f.Nb(1),f.uc("ngForOf",t.Messages),f.Nb(1),f.uc("ngIf",t.LoadSuccessed))},directives:[o.t,o.bb,o.j,o.f,o.g,i.j,o.Z,o.i,o.n,o.L,o.M,o.E,i.i,o.H,o.x,o.D,o.W,o.C,o.u,o.B,o.A,h.f],styles:[""]}),x);n.d(t,"MessagelistPageModule",(function(){return R}));var M,y=[{path:"",component:w}],R=((M=function e(){_classCallCheck(this,e)}).\u0275mod=f.Xb({type:M}),M.\u0275inj=f.Wb({factory:function(e){return new(e||M)},imports:[[i.b,r.c,o.cb,h.e,c.i.forChild(y)]]}),M)}}]);