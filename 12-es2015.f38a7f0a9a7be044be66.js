(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{B8lH:function(n,c,t){"use strict";var e=t("c7TG"),i=(t("0eVs"),t("LTmD")),o=t("fXoL"),l=t("ofXK"),s=t("3Pt+");function a(n,c){if(1&n){const n=o.ec();o.dc(0,"ion-item"),o.dc(1,"ion-label"),o.Jc(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),o.cc(),o.dc(3,"ion-checkbox",10),o.lc("ngModelChange",(function(c){return o.Cc(n),o.oc().Global=c})),o.cc(),o.cc()}if(2&n){const n=o.oc();o.Nb(3),o.vc("ngModel",n.Global)}}let d=(()=>{class n{constructor(n){this.settingService=n,this.OnlyGlobal=!1,this.ShowCommon=!0,this.ShowYuanju=!0,this.ShowShiyun=!0}ngOnInit(){this.Settings=Object(i.b)(this.settingService.Bazi)}GetChange(){return this.Global&&(this.settingService.Bazi=Object(i.b)(this.Settings)),this.Settings}}return n.\u0275fac=function(c){return new(c||n)(o.Yb(i.a))},n.\u0275cmp=o.Sb({type:n,selectors:[["app-bazisettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:120,vars:41,consts:[[4,"ngIf"],["color","light"],["size","small","fill","clear","slot","end",3,"click"],[3,"name"],[3,"hidden"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,c){1&n&&(o.Hc(0,a,4,1,"ion-item",0),o.dc(1,"ion-item",1),o.dc(2,"ion-label"),o.Jc(3,"\u901a\u7528\u8bbe\u7f6e"),o.cc(),o.dc(4,"ion-button",2),o.lc("click",(function(){return c.ShowCommon=!c.ShowCommon})),o.Zb(5,"ion-icon",3),o.cc(),o.cc(),o.dc(6,"ion-list",4),o.dc(7,"ion-item"),o.dc(8,"ion-label"),o.Jc(9,"\u5b57\u4f53\u5927\u5c0f"),o.cc(),o.dc(10,"ion-text"),o.Jc(11),o.cc(),o.dc(12,"ion-range",5),o.lc("ngModelChange",(function(n){return c.Settings.fontsize=n})),o.dc(13,"ion-label",6),o.Jc(14,"10"),o.cc(),o.dc(15,"ion-label",7),o.Jc(16,"20"),o.cc(),o.cc(),o.cc(),o.dc(17,"ion-item"),o.dc(18,"ion-label"),o.Jc(19,"\u795e\u715e\u5217\u6570"),o.cc(),o.dc(20,"ion-text"),o.Jc(21),o.cc(),o.dc(22,"ion-range",8),o.lc("ngModelChange",(function(n){return c.Settings.shensha=n})),o.dc(23,"ion-label",6),o.Jc(24,"3"),o.cc(),o.dc(25,"ion-label",7),o.Jc(26,"8"),o.cc(),o.cc(),o.cc(),o.dc(27,"ion-item"),o.dc(28,"ion-label"),o.dc(29,"ion-text",9),o.Jc(30,"\u7b80\u6392"),o.cc(),o.dc(31,"ion-text",9),o.Jc(32,"\u5168\u6392"),o.cc(),o.cc(),o.dc(33,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shortname=n})),o.cc(),o.cc(),o.dc(34,"ion-item"),o.dc(35,"ion-label"),o.dc(36,"ion-text",9),o.Jc(37,"\u6c34\u571f\u5171\u957f\u751f"),o.cc(),o.dc(38,"ion-text",9),o.Jc(39,"\u706b\u571f\u5171\u957f\u751f"),o.cc(),o.dc(40,"ion-text"),o.Jc(41,"(\u5168\u5c40\u8bbe\u5b9a)"),o.cc(),o.cc(),o.dc(42,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shuitu=n})),o.cc(),o.cc(),o.dc(43,"ion-item"),o.dc(44,"ion-label"),o.dc(45,"ion-text",9),o.Jc(46,"\u534e\u9e64\u5341\u795e"),o.cc(),o.dc(47,"ion-text",9),o.Jc(48,"\u4f20\u7edf\u5341\u795e"),o.cc(),o.dc(49,"ion-text"),o.Jc(50,"(\u5168\u5c40\u8bbe\u5b9a)"),o.cc(),o.cc(),o.dc(51,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.huahecai=n})),o.cc(),o.cc(),o.cc(),o.dc(52,"ion-item",1),o.dc(53,"ion-label"),o.Jc(54,"\u539f\u5c40\u663e\u793a\u9879\u76ee"),o.cc(),o.dc(55,"ion-button",2),o.lc("click",(function(){return c.ShowYuanju=!c.ShowYuanju})),o.Zb(56,"ion-icon",3),o.cc(),o.cc(),o.dc(57,"ion-list",4),o.dc(58,"ion-item"),o.dc(59,"ion-label"),o.Jc(60,"\u85cf\u5e72"),o.cc(),o.dc(61,"ion-text",9),o.Jc(62,"\u663e\u793a"),o.cc(),o.dc(63,"ion-text",9),o.Jc(64,"\u9690\u85cf"),o.cc(),o.dc(65,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.yuanju.cangan=n})),o.cc(),o.cc(),o.dc(66,"ion-item"),o.dc(67,"ion-label"),o.Jc(68,"\u7eb3\u97f3"),o.cc(),o.dc(69,"ion-text",9),o.Jc(70,"\u663e\u793a"),o.cc(),o.dc(71,"ion-text",9),o.Jc(72,"\u9690\u85cf"),o.cc(),o.dc(73,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.yuanju.nayin=n})),o.cc(),o.cc(),o.dc(74,"ion-item"),o.dc(75,"ion-label"),o.Jc(76,"\u957f\u751f\u5341\u4e8c\u5bab"),o.cc(),o.dc(77,"ion-text",9),o.Jc(78,"\u663e\u793a"),o.cc(),o.dc(79,"ion-text",9),o.Jc(80,"\u9690\u85cf"),o.cc(),o.dc(81,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.yuanju.changshen=n})),o.cc(),o.cc(),o.cc(),o.dc(82,"ion-item",1),o.dc(83,"ion-label"),o.Jc(84,"\u65f6\u8fd0\u663e\u793a\u9879\u76ee"),o.cc(),o.dc(85,"ion-button",2),o.lc("click",(function(){return c.ShowShiyun=!c.ShowShiyun})),o.Zb(86,"ion-icon",3),o.cc(),o.cc(),o.dc(87,"ion-list",4),o.dc(88,"ion-item"),o.dc(89,"ion-label"),o.Jc(90,"\u85cf\u5e72"),o.cc(),o.dc(91,"ion-text",9),o.Jc(92,"\u663e\u793a"),o.cc(),o.dc(93,"ion-text",9),o.Jc(94,"\u9690\u85cf"),o.cc(),o.dc(95,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shiyun.cangan=n})),o.cc(),o.cc(),o.dc(96,"ion-item"),o.dc(97,"ion-label"),o.Jc(98,"\u7eb3\u97f3"),o.cc(),o.dc(99,"ion-text",9),o.Jc(100,"\u663e\u793a"),o.cc(),o.dc(101,"ion-text",9),o.Jc(102,"\u9690\u85cf"),o.cc(),o.dc(103,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shiyun.nayin=n})),o.cc(),o.cc(),o.dc(104,"ion-item"),o.dc(105,"ion-label"),o.Jc(106,"\u957f\u751f\u5341\u4e8c\u5bab"),o.cc(),o.dc(107,"ion-text",9),o.Jc(108,"\u663e\u793a"),o.cc(),o.dc(109,"ion-text",9),o.Jc(110,"\u9690\u85cf"),o.cc(),o.dc(111,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shiyun.changshen=n})),o.cc(),o.cc(),o.dc(112,"ion-item"),o.dc(113,"ion-label"),o.Jc(114,"\u795e\u715e"),o.cc(),o.dc(115,"ion-text",9),o.Jc(116,"\u663e\u793a"),o.cc(),o.dc(117,"ion-text",9),o.Jc(118,"\u9690\u85cf"),o.cc(),o.dc(119,"ion-toggle",10),o.lc("ngModelChange",(function(n){return c.Settings.shiyun.shensha=n})),o.cc(),o.cc(),o.cc()),2&n&&(o.vc("ngIf",!c.OnlyGlobal),o.Nb(5),o.vc("name",c.ShowCommon?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!c.ShowCommon),o.Nb(5),o.Kc(c.Settings.fontsize),o.Nb(1),o.vc("ngModel",c.Settings.fontsize),o.Nb(9),o.Kc(c.Settings.shensha),o.Nb(1),o.vc("ngModel",c.Settings.shensha),o.Nb(7),o.vc("hidden",!c.Settings.shortname),o.Nb(2),o.vc("hidden",c.Settings.shortname),o.Nb(2),o.vc("ngModel",c.Settings.shortname),o.Nb(3),o.vc("hidden",!c.Settings.shuitu),o.Nb(2),o.vc("hidden",c.Settings.shuitu),o.Nb(4),o.vc("ngModel",c.Settings.shuitu),o.Nb(3),o.vc("hidden",!c.Settings.huahecai),o.Nb(2),o.vc("hidden",c.Settings.huahecai),o.Nb(4),o.vc("ngModel",c.Settings.huahecai),o.Nb(5),o.vc("name",c.ShowYuanju?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!c.ShowYuanju),o.Nb(4),o.vc("hidden",!c.Settings.yuanju.cangan),o.Nb(2),o.vc("hidden",c.Settings.yuanju.cangan),o.Nb(2),o.vc("ngModel",c.Settings.yuanju.cangan),o.Nb(4),o.vc("hidden",!c.Settings.yuanju.nayin),o.Nb(2),o.vc("hidden",c.Settings.yuanju.nayin),o.Nb(2),o.vc("ngModel",c.Settings.yuanju.nayin),o.Nb(4),o.vc("hidden",!c.Settings.yuanju.changshen),o.Nb(2),o.vc("hidden",c.Settings.yuanju.changshen),o.Nb(2),o.vc("ngModel",c.Settings.yuanju.changshen),o.Nb(5),o.vc("name",c.ShowShiyun?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!c.ShowShiyun),o.Nb(4),o.vc("hidden",!c.Settings.shiyun.cangan),o.Nb(2),o.vc("hidden",c.Settings.shiyun.cangan),o.Nb(2),o.vc("ngModel",c.Settings.shiyun.cangan),o.Nb(4),o.vc("hidden",!c.Settings.shiyun.nayin),o.Nb(2),o.vc("hidden",c.Settings.shiyun.nayin),o.Nb(2),o.vc("ngModel",c.Settings.shiyun.nayin),o.Nb(4),o.vc("hidden",!c.Settings.shiyun.changshen),o.Nb(2),o.vc("hidden",c.Settings.shiyun.changshen),o.Nb(2),o.vc("ngModel",c.Settings.shiyun.changshen),o.Nb(4),o.vc("hidden",!c.Settings.shiyun.shensha),o.Nb(2),o.vc("hidden",c.Settings.shiyun.shensha),o.Nb(2),o.vc("ngModel",c.Settings.shiyun.shensha))},directives:[l.j,e.x,e.D,e.i,e.u,e.E,e.T,e.I,e.hb,s.f,s.g,e.X,e.c,e.k],styles:[".alignleft[_ngcontent-%COMP%]{float:left;margin-left:10px}.alignright[_ngcontent-%COMP%]{float:right;margin-right:10px}"]}),n})();function g(n,c){if(1&n){const n=o.ec();o.dc(0,"ion-item"),o.dc(1,"ion-label"),o.Jc(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),o.cc(),o.dc(3,"ion-checkbox",6),o.lc("ngModelChange",(function(c){return o.Cc(n),o.oc().Global=c})),o.cc(),o.cc()}if(2&n){const n=o.oc();o.Nb(3),o.vc("ngModel",n.Global)}}let h=(()=>{class n{constructor(n){this.settingService=n,this.OnlyGlobal=!1}ngOnInit(){this.Settings=Object(i.b)(this.settingService.Gua)}get OriginSymbol(){return 1!==this.Settings.symbol}set OriginSymbol(n){this.Settings.symbol=n?0:1}GetChange(){return this.Global&&(this.settingService.Gua=Object(i.b)(this.Settings)),this.Settings}}return n.\u0275fac=function(c){return new(c||n)(o.Yb(i.a))},n.\u0275cmp=o.Sb({type:n,selectors:[["app-guasettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:36,vars:11,consts:[[4,"ngIf"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,c){1&n&&(o.dc(0,"ion-list"),o.Hc(1,g,4,1,"ion-item",0),o.dc(2,"ion-item"),o.dc(3,"ion-label"),o.Jc(4,"\u5b57\u4f53\u5927\u5c0f"),o.cc(),o.dc(5,"ion-text"),o.Jc(6),o.cc(),o.dc(7,"ion-range",1),o.lc("ngModelChange",(function(n){return c.Settings.fontsize=n})),o.dc(8,"ion-label",2),o.Jc(9,"10"),o.cc(),o.dc(10,"ion-label",3),o.Jc(11,"20"),o.cc(),o.cc(),o.cc(),o.dc(12,"ion-item"),o.dc(13,"ion-label"),o.Jc(14,"\u795e\u715e\u5217\u6570"),o.cc(),o.dc(15,"ion-text"),o.Jc(16),o.cc(),o.dc(17,"ion-range",4),o.lc("ngModelChange",(function(n){return c.Settings.shensha=n})),o.dc(18,"ion-label",2),o.Jc(19,"3"),o.cc(),o.dc(20,"ion-label",3),o.Jc(21,"8"),o.cc(),o.cc(),o.cc(),o.dc(22,"ion-item"),o.dc(23,"ion-label"),o.dc(24,"ion-text",5),o.Jc(25,"\u7b26\u53f7\uff1a \u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e\u3001\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e"),o.cc(),o.dc(26,"ion-text",5),o.Jc(27,"\u7b26\u53f7\uff1a=\u3001-"),o.cc(),o.cc(),o.dc(28,"ion-toggle",6),o.lc("ngModelChange",(function(n){return c.OriginSymbol=n})),o.cc(),o.cc(),o.dc(29,"ion-item"),o.dc(30,"ion-label"),o.dc(31,"ion-text",5),o.Jc(32,"\u7b80\u6392"),o.cc(),o.dc(33,"ion-text",5),o.Jc(34,"\u5168\u6392"),o.cc(),o.cc(),o.dc(35,"ion-toggle",6),o.lc("ngModelChange",(function(n){return c.Settings.shortname=n})),o.cc(),o.cc(),o.cc()),2&n&&(o.Nb(1),o.vc("ngIf",!c.OnlyGlobal),o.Nb(5),o.Kc(c.Settings.fontsize),o.Nb(1),o.vc("ngModel",c.Settings.fontsize),o.Nb(9),o.Kc(c.Settings.shensha),o.Nb(1),o.vc("ngModel",c.Settings.shensha),o.Nb(7),o.vc("hidden",!c.OriginSymbol),o.Nb(2),o.vc("hidden",c.OriginSymbol),o.Nb(2),o.vc("ngModel",c.OriginSymbol),o.Nb(3),o.vc("hidden",!c.Settings.shortname),o.Nb(2),o.vc("hidden",c.Settings.shortname),o.Nb(2),o.vc("ngModel",c.Settings.shortname))},directives:[e.E,l.j,e.x,e.D,e.T,e.I,e.hb,s.f,s.g,e.X,e.c,e.k],styles:[""]}),n})();function r(n,c){if(1&n&&o.Zb(0,"app-bazisettings",8),2&n){const n=o.oc();o.vc("Global",n.Global)("OnlyGlobal",n.OnlyGlobal)}}function u(n,c){if(1&n&&o.Zb(0,"app-guasettings",8),2&n){const n=o.oc();o.vc("Global",n.Global)("OnlyGlobal",n.OnlyGlobal)}}t.d(c,"a",(function(){return b}));let b=(()=>{class n{constructor(n,c){this.modalCtrl=n,this.setting=c,this.OnlyGlobal=!1}ngOnInit(){switch(this.settingComponent){case"bazi":this.Titel="\u516b\u5b57\u547d\u76d8\u8bbe\u7f6e";break;case"gua":this.Titel="\u516d\u723b\u5366\u76d8\u8bbe\u7f6e"}}ngAfterViewInit(){}set SettingComponent(n){this.settingComponent=n}get SettingComponent(){return this.settingComponent}onSave(){const n=(this.baziSettingView||this.guaSettingView).GetChange();this.close(n)}onCancel(){this.close(null)}close(n){this.modalCtrl.dismiss({result:n=n||{}})}}return n.\u0275fac=function(c){return new(c||n)(o.Yb(e.cb),o.Yb(i.a))},n.\u0275cmp=o.Sb({type:n,selectors:[["app-settingdialog"]],viewQuery:function(n,c){var t;1&n&&(o.Oc(d,!0),o.Oc(h,!0)),2&n&&(o.yc(t=o.mc())&&(c.baziSettingView=t.first),o.yc(t=o.mc())&&(c.guaSettingView=t.first))},inputs:{Config:"Config",SettingComponent:"SettingComponent"},decls:17,vars:3,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["scrollY","true"],[3,"Global","OnlyGlobal",4,"ngIf"],[3,"Global","OnlyGlobal"]],template:function(n,c){1&n&&(o.dc(0,"ion-header"),o.dc(1,"ion-toolbar",0),o.dc(2,"ion-buttons",1),o.dc(3,"ion-button",2),o.lc("click",(function(){return c.onCancel()})),o.Zb(4,"ion-icon",3),o.dc(5,"ion-text"),o.Jc(6,"\u53d6\u6d88"),o.cc(),o.cc(),o.cc(),o.dc(7,"ion-title"),o.Jc(8),o.cc(),o.dc(9,"ion-buttons",4),o.dc(10,"ion-button",2),o.lc("click",(function(){return c.onSave()})),o.Zb(11,"ion-icon",5),o.dc(12,"ion-text"),o.Jc(13,"\u786e\u5b9a"),o.cc(),o.cc(),o.cc(),o.cc(),o.cc(),o.dc(14,"ion-content",6),o.Hc(15,r,1,2,"app-bazisettings",7),o.Hc(16,u,1,2,"app-guasettings",7),o.cc()),2&n&&(o.Nb(8),o.Kc(c.Titel),o.Nb(7),o.vc("ngIf","bazi"==c.SettingComponent),o.Nb(1),o.vc("ngIf","gua"==c.SettingComponent))},directives:[e.t,e.Y,e.j,e.i,e.u,e.T,e.W,e.n,l.j,d,h],styles:[""]}),n})()},KPWP:function(n,c,t){"use strict";t.d(c,"a",(function(){return s}));var e=t("ofXK"),i=t("3Pt+"),o=t("c7TG"),l=(t("B8lH"),t("fXoL"));let s=(()=>{class n{}return n.\u0275mod=l.Wb({type:n}),n.\u0275inj=l.Vb({factory:function(c){return new(c||n)},imports:[[e.b,i.c,o.Z]]}),n})()}}]);