function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{dnR8:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),r=n("tyNb"),o=n("c7TG"),s=n("mrSG"),a=n("PKx9"),u=n("LTmD"),d=n("7L00"),l=n("Y6BA"),f=n("fXoL"),g=n("i/bi");function h(e,t){1&e&&f.Zb(0,"ion-menu-button")}function b(e,t){if(1&e){var n=f.ec();f.dc(0,"ion-header"),f.dc(1,"ion-toolbar",6),f.dc(2,"ion-buttons",7),f.Zb(3,"ion-back-button",8),f.Hc(4,h,1,0,"ion-menu-button",0),f.cc(),f.dc(5,"ion-title"),f.Jc(6,"\u6211\u7684\u6d88\u606f"),f.cc(),f.dc(7,"ion-buttons",9),f.dc(8,"ion-button",10),f.lc("click",(function(){return f.Cc(n),f.oc().ChangeMode()})),f.Jc(9),f.cc(),f.cc(),f.cc(),f.cc()}if(2&e){var i=f.oc();f.Nb(4),f.vc("ngIf",!i.CanNaviBack),f.Nb(5),f.Kc(i.ForMe?"\u6536\u5230\u7684":"\u53d1\u9001\u7684")}}function v(e,t){if(1&e){var n=f.ec();f.dc(0,"ion-item",11),f.dc(1,"ion-buttons",9),f.dc(2,"ion-segment",12),f.lc("ionChange",(function(){return f.Cc(n),f.oc().ChangeMode()})),f.dc(3,"ion-segment-button",13),f.Jc(4,"\u6536\u5230\u7684\u6d88\u606f"),f.cc(),f.dc(5,"ion-segment-button",14),f.Jc(6,"\u53d1\u9001\u7684\u6d88\u606f"),f.cc(),f.cc(),f.cc(),f.cc()}}function m(e,t){if(1&e&&(f.dc(0,"ion-item"),f.dc(1,"ion-label"),f.dc(2,"ion-text"),f.Jc(3),f.cc(),f.cc(),f.cc()),2&e){var n=f.oc();f.Nb(3),f.Kc(n.InfoNoMessage)}}function p(e,t){if(1&e&&(f.dc(0,"ion-text"),f.Jc(1),f.cc()),2&e){var n=f.oc().$implicit;f.Nb(1),f.Lc("\u6765\u81ea\uff1a",n.author,"")}}function k(e,t){if(1&e&&(f.dc(0,"ion-text"),f.Jc(1),f.cc()),2&e){var n=f.oc().$implicit;f.Nb(1),f.Lc("\u53d1\u9001\u7ed9\uff1a",n.receiver,"")}}function w(e,t){if(1&e){var n=f.ec();f.dc(0,"ion-item-sliding",15),f.dc(1,"ion-item"),f.dc(2,"ion-label"),f.dc(3,"ion-text",16),f.Jc(4),f.cc(),f.Zb(5,"br"),f.Hc(6,p,2,1,"ion-text",0),f.Hc(7,k,2,1,"ion-text",0),f.Zb(8,"br"),f.dc(9,"p"),f.dc(10,"small"),f.Jc(11),f.cc(),f.cc(),f.cc(),f.dc(12,"ion-buttons",9),f.dc(13,"ion-button",17),f.lc("click",(function(){f.Cc(n);var e=t.$implicit;return f.oc().ShowMessage(e)})),f.Zb(14,"ion-icon",18),f.cc(),f.cc(),f.cc(),f.dc(15,"ion-item-options",19),f.dc(16,"ion-item-option",20),f.lc("click",(function(){f.Cc(n);var e=t.$implicit;return f.oc().ReplyMessage(e)})),f.Zb(17,"ion-icon",21),f.cc(),f.cc(),f.dc(18,"ion-item-options",22),f.dc(19,"ion-item-option",23),f.lc("click",(function(){f.Cc(n);var e=t.$implicit;return f.oc().DeleteMsg(e)})),f.Zb(20,"ion-icon",24),f.cc(),f.cc(),f.cc()}if(2&e){var i=t.$implicit,c=f.oc();f.vc("disabled",!c.ForMe),f.Nb(3),f.vc("color",i.readed?"medium":"dark"),f.Nb(1),f.Lc("\u6807\u9898\uff1a",i.title,""),f.Nb(2),f.vc("ngIf",c.ForMe),f.Nb(1),f.vc("ngIf",!c.ForMe),f.Nb(4),f.Kc(c.ShowTime(i.created)),f.Nb(2),f.vc("color",i.readed?"medium":"primary"),f.Nb(1),f.vc("name",i.readed?"mail":"mail-unread"),f.Nb(2),f.vc("disabled",!i.replyable)("color",i.replyable?"primary":"medium")}}function x(e,t){if(1&e){var n=f.ec();f.dc(0,"div",25),f.dc(1,"sui-pagination",26),f.lc("pageChange",(function(e){return f.Cc(n),f.oc().PageIndex=e})),f.cc(),f.cc()}if(2&e){var i=f.oc();f.Nb(1),f.vc("collectionSize",i.PageSum)("pageSize",20)("maxSize",i.MaxPageButtons)("hasNavigationLinks",!0)("hasBoundaryLinks",!0)("page",i.PageIndex)}}var y,M=((y=function(){function e(t,n,i,c,r,o,s){var a=this;_classCallCheck(this,e),this.loadingController=t,this.modalCtrl=n,this.alertController=i,this.route=c,this.router=r,this.forumservice=o,this.settings=s,this.pageindex=0,this.Messages=[],this.ForMe=!0,this.InfoNoMessage="\u6b63\u5728\u8bfb\u53d6\u60a8\u7684\u6d88\u606f\u3002\u3002\u3002",this.Pages=[0],this.PageSum=0,this.LoadSuccessed=!1,this.CanNaviBack=!0,this.route.params.subscribe((function(e){a.CanNaviBack="true"===e.naviback}))}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.settings.HasUser){e.next=2;break}return e.abrupt("return",(this.presentAlert("\u65e0\u6cd5\u8bbf\u95ee",null,"\u60a8\u8fd8\u6ca1\u6709\u6ce8\u518c\u8d26\u53f7\uff0c\u65e0\u6cd5\u53d1\u9001\u6d88\u606f\u3002"),void this.router.navigateByUrl("/menu/user")));case 2:this.PageIndex=0;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"ShowTime",value:function(e){return new Date(e).toChinaStr(!0)}},{key:"ShowMessage",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.ForMe&&!1===e.readed&&this.forumservice.DeleteMessage(e.id,!1).then((function(){e.readed=!0})),t.next=3,this.modalCtrl.create({component:d.a,componentProps:{Message:e,Read:!0}});case 3:return n=t.sent,t.next=6,n.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"ChangeMode",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ForMe=!this.ForMe,this.Messages=[],this.PageIndex=0;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"DeleteMsg",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showLoading();case 2:this.forumservice.DeleteMessage(e.id,!0).then((function(){n.Messages=n.Messages.filter((function(t){return t.id!==e.id})),0===n.Messages.length&&(n.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f\u3002\u3002\u3002")})).finally((function(){n.closeLoading()}));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"ReplyMessage",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.c)(),i=new Date(e.created).toChinaStr(!0),c={id:n,created:Date.now(),valid:0,author:this.settings.User.id,receiver:e.author,roller:0,readed:!1,private:!0,replyable:!0,title:"\u56de\u590d\uff1a".concat(e.title),content:"\n\n\u539f\u6d88\u606f\uff1a".concat(i,"\n\u539f\u5185\u5bb9\uff1a=======================\n").concat(e.content)},t.next=5,this.modalCtrl.create({component:d.a,componentProps:{Message:c}});case 5:return r=t.sent,t.next=8,r.present();case 8:return t.next=10,r.onWillDismiss();case 10:case"end":return t.stop()}}),t,this)})))}},{key:"doRefresh",value:function(e){this.Messages=[],this.Reload(this.PageIndex).finally((function(){e.target.complete()}))}},{key:"Reload",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.showLoading();case 2:return t.abrupt("return",this.forumservice.LoadMessages(e,this.ForMe).then((function(e){return n.BuildPages(e.sum),n.Messages=e.data||[],0===n.Messages.length&&(n.InfoNoMessage="\u60a8\u6ca1\u6709\u4efb\u4f55\u6d88\u606f"),n.LoadSuccessed=!0,!0})).finally((function(){n.closeLoading()})));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"showLoading",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,e.t0){e.next=5;break}return e.next=4,this.loadingController.create({message:"\u8bfb\u53d6\u6211\u7684\u6d88\u606f...",duration:6e4});case 4:this.loadingView=e.sent;case 5:return e.next=7,this.loadingView.present();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"closeLoading",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.loadingView,!e.t0){e.next=5;break}return e.next=4,this.loadingView.dismiss();case 4:this.loadingView=null;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=i.sent,i.next=5,c.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"BuildPages",value:function(e){if(0===this.PageIndex)if(0!==e){this.Pages=[];for(var t=Math.ceil(e/20),n=0;n<t;n++)this.Pages.push(n)}else this.Pages=[0]}},{key:"IsWeb",get:function(){return"web"===l.b}},{key:"MaxPageButtons",get:function(){return this.settings.DeviceWidth>=400?7:2}},{key:"PageIndex",get:function(){return this.pageindex},set:function(e){this.pageindex=e,this.Reload(e)}}]),e}()).\u0275fac=function(e){return new(e||y)(f.Yb(o.Z),f.Yb(o.ab),f.Yb(o.b),f.Yb(r.a),f.Yb(r.g),f.Yb(a.a),f.Yb(u.a))},y.\u0275cmp=f.Sb({type:y,selectors:[["app-messagelist"]],decls:9,vars:5,consts:[[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["ion-no-padding",""],["lines","none",4,"ngIf"],[3,"disabled",4,"ngFor","ngForOf"],["class","ui very basic segment",4,"ngIf"],["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],["lines","none"],[3,"ionChange"],["value","true"],["value","false"],[3,"disabled"],[3,"color"],[3,"color","click"],["slot","end",3,"name"],["side","start"],[3,"disabled","color","click"],["slot","icon-only","name","send"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],[1,"ui","very","basic","segment"],[1,"ui","right","floated",3,"collectionSize","pageSize","maxSize","hasNavigationLinks","hasBoundaryLinks","page","pageChange"]],template:function(e,t){1&e&&(f.Hc(0,b,10,2,"ion-header",0),f.dc(1,"ion-content"),f.dc(2,"ion-refresher",1),f.lc("ionRefresh",(function(e){return t.doRefresh(e)})),f.Zb(3,"ion-refresher-content"),f.cc(),f.dc(4,"ion-list",2),f.Hc(5,v,7,0,"ion-item",3),f.Hc(6,m,4,1,"ion-item",0),f.Hc(7,w,21,10,"ion-item-sliding",4),f.cc(),f.Hc(8,x,2,6,"div",5),f.cc()),2&e&&(f.vc("ngIf",!t.IsWeb),f.Nb(5),f.vc("ngIf",t.IsWeb),f.Nb(1),f.vc("ngIf",0===t.Messages.length),f.Nb(1),f.vc("ngForOf",t.Messages),f.Nb(1),f.vc("ngIf",t.LoadSuccessed))},directives:[i.j,o.m,o.I,o.J,o.D,i.i,o.s,o.W,o.i,o.f,o.g,o.U,o.h,o.F,o.w,o.N,o.fb,o.O,o.C,o.S,o.B,o.t,o.A,o.z,g.f],styles:[""]}),y);n.d(t,"MessagelistPageModule",(function(){return R}));var C,N=[{path:"",component:M}],R=((C=function e(){_classCallCheck(this,e)}).\u0275mod=f.Wb({type:C}),C.\u0275inj=f.Vb({factory:function(e){return new(e||C)},imports:[[i.b,c.c,o.X,g.e,r.j.forChild(N)]]}),C)}}]);