function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{B8lH:function(n,t,e){"use strict";var i=e("c7TG"),o=(e("0eVs"),e("LTmD")),b=e("fXoL"),c=e("ofXK"),l=e("3Pt+");function a(n,t){if(1&n){var e=b.ac();b.Zb(0,"ion-item"),b.Zb(1,"ion-label"),b.xc(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),b.Yb(),b.Zb(3,"ion-checkbox",10),b.hc("ngModelChange",(function(n){return b.rc(e),b.jc().Global=n})),b.Yb(),b.Yb()}if(2&n){var i=b.jc();b.Mb(3),b.oc("ngModel",i.Global)}}var s,g=((s=function(){function n(t){_classCallCheck(this,n),this.settingService=t,this.OnlyGlobal=!1,this.ShowCommon=!0,this.ShowYuanju=!0,this.ShowShiyun=!0}return _createClass(n,[{key:"ngOnInit",value:function(){this.Settings=Object(o.b)(this.settingService.Bazi)}},{key:"GetChange",value:function(){return this.Global&&(this.settingService.Bazi=Object(o.b)(this.Settings)),this.Settings}}]),n}()).\u0275fac=function(n){return new(n||s)(b.Wb(o.a))},s.\u0275cmp=b.Qb({type:s,selectors:[["app-bazisettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:120,vars:41,consts:[[4,"ngIf"],["color","light"],["size","small","fill","clear","slot","end",3,"click"],[3,"name"],[3,"hidden"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(b.wc(0,a,4,1,"ion-item",0),b.Zb(1,"ion-item",1),b.Zb(2,"ion-label"),b.xc(3,"\u901a\u7528\u8bbe\u7f6e"),b.Yb(),b.Zb(4,"ion-button",2),b.hc("click",(function(n){return t.ShowCommon=!t.ShowCommon})),b.Xb(5,"ion-icon",3),b.Yb(),b.Yb(),b.Zb(6,"ion-list",4),b.Zb(7,"ion-item"),b.Zb(8,"ion-label"),b.xc(9,"\u5b57\u4f53\u5927\u5c0f"),b.Yb(),b.Zb(10,"ion-text"),b.xc(11),b.Yb(),b.Zb(12,"ion-range",5),b.hc("ngModelChange",(function(n){return t.Settings.fontsize=n})),b.Zb(13,"ion-label",6),b.xc(14,"10"),b.Yb(),b.Zb(15,"ion-label",7),b.xc(16,"20"),b.Yb(),b.Yb(),b.Yb(),b.Zb(17,"ion-item"),b.Zb(18,"ion-label"),b.xc(19,"\u795e\u715e\u5217\u6570"),b.Yb(),b.Zb(20,"ion-text"),b.xc(21),b.Yb(),b.Zb(22,"ion-range",8),b.hc("ngModelChange",(function(n){return t.Settings.shensha=n})),b.Zb(23,"ion-label",6),b.xc(24,"3"),b.Yb(),b.Zb(25,"ion-label",7),b.xc(26,"8"),b.Yb(),b.Yb(),b.Yb(),b.Zb(27,"ion-item"),b.Zb(28,"ion-label"),b.Zb(29,"ion-text",9),b.xc(30,"\u7b80\u6392"),b.Yb(),b.Zb(31,"ion-text",9),b.xc(32,"\u5168\u6392"),b.Yb(),b.Yb(),b.Zb(33,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shortname=n})),b.Yb(),b.Yb(),b.Zb(34,"ion-item"),b.Zb(35,"ion-label"),b.Zb(36,"ion-text",9),b.xc(37,"\u6c34\u571f\u5171\u957f\u751f"),b.Yb(),b.Zb(38,"ion-text",9),b.xc(39,"\u706b\u571f\u5171\u957f\u751f"),b.Yb(),b.Zb(40,"ion-text"),b.xc(41,"(\u5168\u5c40\u8bbe\u5b9a)"),b.Yb(),b.Yb(),b.Zb(42,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shuitu=n})),b.Yb(),b.Yb(),b.Zb(43,"ion-item"),b.Zb(44,"ion-label"),b.Zb(45,"ion-text",9),b.xc(46,"\u534e\u9e64\u5341\u795e"),b.Yb(),b.Zb(47,"ion-text",9),b.xc(48,"\u4f20\u7edf\u5341\u795e"),b.Yb(),b.Zb(49,"ion-text"),b.xc(50,"(\u5168\u5c40\u8bbe\u5b9a)"),b.Yb(),b.Yb(),b.Zb(51,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.huahecai=n})),b.Yb(),b.Yb(),b.Yb(),b.Zb(52,"ion-item",1),b.Zb(53,"ion-label"),b.xc(54,"\u539f\u5c40\u663e\u793a\u9879\u76ee"),b.Yb(),b.Zb(55,"ion-button",2),b.hc("click",(function(n){return t.ShowYuanju=!t.ShowYuanju})),b.Xb(56,"ion-icon",3),b.Yb(),b.Yb(),b.Zb(57,"ion-list",4),b.Zb(58,"ion-item"),b.Zb(59,"ion-label"),b.xc(60,"\u85cf\u5e72"),b.Yb(),b.Zb(61,"ion-text",9),b.xc(62,"\u663e\u793a"),b.Yb(),b.Zb(63,"ion-text",9),b.xc(64,"\u9690\u85cf"),b.Yb(),b.Zb(65,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.yuanju.cangan=n})),b.Yb(),b.Yb(),b.Zb(66,"ion-item"),b.Zb(67,"ion-label"),b.xc(68,"\u7eb3\u97f3"),b.Yb(),b.Zb(69,"ion-text",9),b.xc(70,"\u663e\u793a"),b.Yb(),b.Zb(71,"ion-text",9),b.xc(72,"\u9690\u85cf"),b.Yb(),b.Zb(73,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.yuanju.nayin=n})),b.Yb(),b.Yb(),b.Zb(74,"ion-item"),b.Zb(75,"ion-label"),b.xc(76,"\u957f\u751f\u5341\u4e8c\u5bab"),b.Yb(),b.Zb(77,"ion-text",9),b.xc(78,"\u663e\u793a"),b.Yb(),b.Zb(79,"ion-text",9),b.xc(80,"\u9690\u85cf"),b.Yb(),b.Zb(81,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.yuanju.changshen=n})),b.Yb(),b.Yb(),b.Yb(),b.Zb(82,"ion-item",1),b.Zb(83,"ion-label"),b.xc(84,"\u65f6\u8fd0\u663e\u793a\u9879\u76ee"),b.Yb(),b.Zb(85,"ion-button",2),b.hc("click",(function(n){return t.ShowShiyun=!t.ShowShiyun})),b.Xb(86,"ion-icon",3),b.Yb(),b.Yb(),b.Zb(87,"ion-list",4),b.Zb(88,"ion-item"),b.Zb(89,"ion-label"),b.xc(90,"\u85cf\u5e72"),b.Yb(),b.Zb(91,"ion-text",9),b.xc(92,"\u663e\u793a"),b.Yb(),b.Zb(93,"ion-text",9),b.xc(94,"\u9690\u85cf"),b.Yb(),b.Zb(95,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shiyun.cangan=n})),b.Yb(),b.Yb(),b.Zb(96,"ion-item"),b.Zb(97,"ion-label"),b.xc(98,"\u7eb3\u97f3"),b.Yb(),b.Zb(99,"ion-text",9),b.xc(100,"\u663e\u793a"),b.Yb(),b.Zb(101,"ion-text",9),b.xc(102,"\u9690\u85cf"),b.Yb(),b.Zb(103,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shiyun.nayin=n})),b.Yb(),b.Yb(),b.Zb(104,"ion-item"),b.Zb(105,"ion-label"),b.xc(106,"\u957f\u751f\u5341\u4e8c\u5bab"),b.Yb(),b.Zb(107,"ion-text",9),b.xc(108,"\u663e\u793a"),b.Yb(),b.Zb(109,"ion-text",9),b.xc(110,"\u9690\u85cf"),b.Yb(),b.Zb(111,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shiyun.changshen=n})),b.Yb(),b.Yb(),b.Zb(112,"ion-item"),b.Zb(113,"ion-label"),b.xc(114,"\u795e\u715e"),b.Yb(),b.Zb(115,"ion-text",9),b.xc(116,"\u663e\u793a"),b.Yb(),b.Zb(117,"ion-text",9),b.xc(118,"\u9690\u85cf"),b.Yb(),b.Zb(119,"ion-toggle",10),b.hc("ngModelChange",(function(n){return t.Settings.shiyun.shensha=n})),b.Yb(),b.Yb(),b.Yb()),2&n&&(b.oc("ngIf",!t.OnlyGlobal),b.Mb(5),b.oc("name",t.ShowCommon?"arrow-dropdown":"arrow-dropleft"),b.Mb(1),b.oc("hidden",!t.ShowCommon),b.Mb(5),b.yc(t.Settings.fontsize),b.Mb(1),b.oc("ngModel",t.Settings.fontsize),b.Mb(9),b.yc(t.Settings.shensha),b.Mb(1),b.oc("ngModel",t.Settings.shensha),b.Mb(7),b.oc("hidden",!t.Settings.shortname),b.Mb(2),b.oc("hidden",t.Settings.shortname),b.Mb(2),b.oc("ngModel",t.Settings.shortname),b.Mb(3),b.oc("hidden",!t.Settings.shuitu),b.Mb(2),b.oc("hidden",t.Settings.shuitu),b.Mb(4),b.oc("ngModel",t.Settings.shuitu),b.Mb(3),b.oc("hidden",!t.Settings.huahecai),b.Mb(2),b.oc("hidden",t.Settings.huahecai),b.Mb(4),b.oc("ngModel",t.Settings.huahecai),b.Mb(5),b.oc("name",t.ShowYuanju?"arrow-dropdown":"arrow-dropleft"),b.Mb(1),b.oc("hidden",!t.ShowYuanju),b.Mb(4),b.oc("hidden",!t.Settings.yuanju.cangan),b.Mb(2),b.oc("hidden",t.Settings.yuanju.cangan),b.Mb(2),b.oc("ngModel",t.Settings.yuanju.cangan),b.Mb(4),b.oc("hidden",!t.Settings.yuanju.nayin),b.Mb(2),b.oc("hidden",t.Settings.yuanju.nayin),b.Mb(2),b.oc("ngModel",t.Settings.yuanju.nayin),b.Mb(4),b.oc("hidden",!t.Settings.yuanju.changshen),b.Mb(2),b.oc("hidden",t.Settings.yuanju.changshen),b.Mb(2),b.oc("ngModel",t.Settings.yuanju.changshen),b.Mb(5),b.oc("name",t.ShowShiyun?"arrow-dropdown":"arrow-dropleft"),b.Mb(1),b.oc("hidden",!t.ShowShiyun),b.Mb(4),b.oc("hidden",!t.Settings.shiyun.cangan),b.Mb(2),b.oc("hidden",t.Settings.shiyun.cangan),b.Mb(2),b.oc("ngModel",t.Settings.shiyun.cangan),b.Mb(4),b.oc("hidden",!t.Settings.shiyun.nayin),b.Mb(2),b.oc("hidden",t.Settings.shiyun.nayin),b.Mb(2),b.oc("ngModel",t.Settings.shiyun.nayin),b.Mb(4),b.oc("hidden",!t.Settings.shiyun.changshen),b.Mb(2),b.oc("hidden",t.Settings.shiyun.changshen),b.Mb(2),b.oc("ngModel",t.Settings.shiyun.changshen),b.Mb(4),b.oc("hidden",!t.Settings.shiyun.shensha),b.Mb(2),b.oc("hidden",t.Settings.shiyun.shensha),b.Mb(2),b.oc("ngModel",t.Settings.shiyun.shensha))},directives:[c.j,i.t,i.u,i.h,i.q,i.v,i.O,i.B,i.bb,l.c,l.d,i.S,i.c,i.j],styles:[".alignleft[_ngcontent-%COMP%]{float:left;margin-left:10px}.alignright[_ngcontent-%COMP%]{float:right;margin-right:10px}"]}),s);function h(n,t){if(1&n){var e=b.ac();b.Zb(0,"ion-item"),b.Zb(1,"ion-label"),b.xc(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),b.Yb(),b.Zb(3,"ion-checkbox",6),b.hc("ngModelChange",(function(n){return b.rc(e),b.jc().Global=n})),b.Yb(),b.Yb()}if(2&n){var i=b.jc();b.Mb(3),b.oc("ngModel",i.Global)}}var u,r=((u=function(){function n(t){_classCallCheck(this,n),this.settingService=t,this.OnlyGlobal=!1}return _createClass(n,[{key:"ngOnInit",value:function(){this.Settings=Object(o.b)(this.settingService.Gua)}},{key:"GetChange",value:function(){return this.Global&&(this.settingService.Gua=Object(o.b)(this.Settings)),this.Settings}},{key:"OriginSymbol",get:function(){return 1!==this.Settings.symbol},set:function(n){this.Settings.symbol=n?0:1}}]),n}()).\u0275fac=function(n){return new(n||u)(b.Wb(o.a))},u.\u0275cmp=b.Qb({type:u,selectors:[["app-guasettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:36,vars:11,consts:[[4,"ngIf"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(b.Zb(0,"ion-list"),b.wc(1,h,4,1,"ion-item",0),b.Zb(2,"ion-item"),b.Zb(3,"ion-label"),b.xc(4,"\u5b57\u4f53\u5927\u5c0f"),b.Yb(),b.Zb(5,"ion-text"),b.xc(6),b.Yb(),b.Zb(7,"ion-range",1),b.hc("ngModelChange",(function(n){return t.Settings.fontsize=n})),b.Zb(8,"ion-label",2),b.xc(9,"10"),b.Yb(),b.Zb(10,"ion-label",3),b.xc(11,"20"),b.Yb(),b.Yb(),b.Yb(),b.Zb(12,"ion-item"),b.Zb(13,"ion-label"),b.xc(14,"\u795e\u715e\u5217\u6570"),b.Yb(),b.Zb(15,"ion-text"),b.xc(16),b.Yb(),b.Zb(17,"ion-range",4),b.hc("ngModelChange",(function(n){return t.Settings.shensha=n})),b.Zb(18,"ion-label",2),b.xc(19,"3"),b.Yb(),b.Zb(20,"ion-label",3),b.xc(21,"8"),b.Yb(),b.Yb(),b.Yb(),b.Zb(22,"ion-item"),b.Zb(23,"ion-label"),b.Zb(24,"ion-text",5),b.xc(25,"\u7b26\u53f7\uff1a \u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e\u3001\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e"),b.Yb(),b.Zb(26,"ion-text",5),b.xc(27,"\u7b26\u53f7\uff1a=\u3001-"),b.Yb(),b.Yb(),b.Zb(28,"ion-toggle",6),b.hc("ngModelChange",(function(n){return t.OriginSymbol=n})),b.Yb(),b.Yb(),b.Zb(29,"ion-item"),b.Zb(30,"ion-label"),b.Zb(31,"ion-text",5),b.xc(32,"\u7b80\u6392"),b.Yb(),b.Zb(33,"ion-text",5),b.xc(34,"\u5168\u6392"),b.Yb(),b.Yb(),b.Zb(35,"ion-toggle",6),b.hc("ngModelChange",(function(n){return t.Settings.shortname=n})),b.Yb(),b.Yb(),b.Yb()),2&n&&(b.Mb(1),b.oc("ngIf",!t.OnlyGlobal),b.Mb(5),b.yc(t.Settings.fontsize),b.Mb(1),b.oc("ngModel",t.Settings.fontsize),b.Mb(9),b.yc(t.Settings.shensha),b.Mb(1),b.oc("ngModel",t.Settings.shensha),b.Mb(7),b.oc("hidden",!t.OriginSymbol),b.Mb(2),b.oc("hidden",t.OriginSymbol),b.Mb(2),b.oc("ngModel",t.OriginSymbol),b.Mb(3),b.oc("hidden",!t.Settings.shortname),b.Mb(2),b.oc("hidden",t.Settings.shortname),b.Mb(2),b.oc("ngModel",t.Settings.shortname))},directives:[i.v,c.j,i.t,i.u,i.O,i.B,i.bb,l.c,l.d,i.S,i.c,i.j],styles:[""]}),u);function d(n,t){if(1&n&&b.Xb(0,"app-bazisettings",8),2&n){var e=b.jc();b.oc("Global",e.Global)("OnlyGlobal",e.OnlyGlobal)}}function Y(n,t){if(1&n&&b.Xb(0,"app-guasettings",8),2&n){var e=b.jc();b.oc("Global",e.Global)("OnlyGlobal",e.OnlyGlobal)}}e.d(t,"a",(function(){return f}));var Z,f=((Z=function(){function n(t,e){_classCallCheck(this,n),this.modalCtrl=t,this.setting=e,this.OnlyGlobal=!1}return _createClass(n,[{key:"ngOnInit",value:function(){switch(this.settingComponent){case"bazi":this.Titel="\u516b\u5b57\u547d\u76d8\u8bbe\u7f6e";break;case"gua":this.Titel="\u516d\u723b\u5366\u76d8\u8bbe\u7f6e"}}},{key:"ngAfterViewInit",value:function(){}},{key:"onSave",value:function(){var n=(this.baziSettingView||this.guaSettingView).GetChange();this.close(n)}},{key:"onCancel",value:function(){this.close(null)}},{key:"close",value:function(n){this.modalCtrl.dismiss({result:n=n||{}})}},{key:"SettingComponent",set:function(n){this.settingComponent=n},get:function(){return this.settingComponent}}]),n}()).\u0275fac=function(n){return new(n||Z)(b.Wb(i.W),b.Wb(o.a))},Z.\u0275cmp=b.Qb({type:Z,selectors:[["app-settingdialog"]],viewQuery:function(n,t){var e;1&n&&(b.Ac(g,!0),b.Ac(r,!0)),2&n&&(b.qc(e=b.ic())&&(t.baziSettingView=e.first),b.qc(e=b.ic())&&(t.guaSettingView=e.first))},inputs:{Config:"Config",SettingComponent:"SettingComponent"},decls:17,vars:3,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["scrollY","true"],[3,"Global","OnlyGlobal",4,"ngIf"],[3,"Global","OnlyGlobal"]],template:function(n,t){1&n&&(b.Zb(0,"ion-header"),b.Zb(1,"ion-toolbar",0),b.Zb(2,"ion-buttons",1),b.Zb(3,"ion-button",2),b.hc("click",(function(n){return t.onCancel()})),b.Xb(4,"ion-icon",3),b.Zb(5,"ion-text"),b.xc(6,"\u53d6\u6d88"),b.Yb(),b.Yb(),b.Yb(),b.Zb(7,"ion-title"),b.xc(8),b.Yb(),b.Zb(9,"ion-buttons",4),b.Zb(10,"ion-button",2),b.hc("click",(function(n){return t.onSave()})),b.Xb(11,"ion-icon",5),b.Zb(12,"ion-text"),b.xc(13,"\u786e\u5b9a"),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Zb(14,"ion-content",6),b.wc(15,d,1,2,"app-bazisettings",7),b.wc(16,Y,1,2,"app-guasettings",7),b.Yb()),2&n&&(b.Mb(8),b.yc(t.Titel),b.Mb(7),b.oc("ngIf","bazi"==t.SettingComponent),b.Mb(1),b.oc("ngIf","gua"==t.SettingComponent))},directives:[i.p,i.T,i.i,i.h,i.q,i.O,i.R,i.l,c.j,g,r],styles:[""]}),Z)},KPWP:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var i=e("ofXK"),o=e("3Pt+"),b=e("c7TG"),c=(e("B8lH"),e("fXoL")),l=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=c.Ub({type:n}),n.\u0275inj=c.Tb({factory:function(t){return new(t||n)},imports:[[i.b,o.a,b.U]]}),n}()}}]);