(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{B8lH:function(n,e,c){"use strict";var t=c("c7TG"),i=(c("0eVs"),c("LTmD")),o=c("fXoL"),l=c("ofXK"),s=c("3Pt+");function a(n,e){if(1&n){const n=o.fc();o.ec(0,"ion-item"),o.ec(1,"ion-label"),o.Ic(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),o.dc(),o.ec(3,"ion-checkbox",10),o.mc("ngModelChange",(function(e){return o.Bc(n),o.pc().Global=e})),o.dc(),o.dc()}if(2&n){const n=o.pc();o.Nb(3),o.vc("ngModel",n.Global)}}let d=(()=>{class n{constructor(n){this.settingService=n,this.OnlyGlobal=!1,this.ShowCommon=!0,this.ShowYuanju=!0,this.ShowShiyun=!0}ngOnInit(){this.Settings=Object(i.b)(this.settingService.Bazi)}GetChange(){return this.Global&&(this.settingService.Bazi=Object(i.b)(this.Settings)),this.Settings}}return n.\u0275fac=function(e){return new(e||n)(o.Zb(i.a))},n.\u0275cmp=o.Tb({type:n,selectors:[["app-bazisettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:120,vars:41,consts:[[4,"ngIf"],["color","light"],["size","small","fill","clear","slot","end",3,"click"],[3,"name"],[3,"hidden"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(o.Gc(0,a,4,1,"ion-item",0),o.ec(1,"ion-item",1),o.ec(2,"ion-label"),o.Ic(3,"\u901a\u7528\u8bbe\u7f6e"),o.dc(),o.ec(4,"ion-button",2),o.mc("click",(function(){return e.ShowCommon=!e.ShowCommon})),o.ac(5,"ion-icon",3),o.dc(),o.dc(),o.ec(6,"ion-list",4),o.ec(7,"ion-item"),o.ec(8,"ion-label"),o.Ic(9,"\u5b57\u4f53\u5927\u5c0f"),o.dc(),o.ec(10,"ion-text"),o.Ic(11),o.dc(),o.ec(12,"ion-range",5),o.mc("ngModelChange",(function(n){return e.Settings.fontsize=n})),o.ec(13,"ion-label",6),o.Ic(14,"10"),o.dc(),o.ec(15,"ion-label",7),o.Ic(16,"20"),o.dc(),o.dc(),o.dc(),o.ec(17,"ion-item"),o.ec(18,"ion-label"),o.Ic(19,"\u795e\u715e\u5217\u6570"),o.dc(),o.ec(20,"ion-text"),o.Ic(21),o.dc(),o.ec(22,"ion-range",8),o.mc("ngModelChange",(function(n){return e.Settings.shensha=n})),o.ec(23,"ion-label",6),o.Ic(24,"3"),o.dc(),o.ec(25,"ion-label",7),o.Ic(26,"8"),o.dc(),o.dc(),o.dc(),o.ec(27,"ion-item"),o.ec(28,"ion-label"),o.ec(29,"ion-text",9),o.Ic(30,"\u7b80\u6392"),o.dc(),o.ec(31,"ion-text",9),o.Ic(32,"\u5168\u6392"),o.dc(),o.dc(),o.ec(33,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shortname=n})),o.dc(),o.dc(),o.ec(34,"ion-item"),o.ec(35,"ion-label"),o.ec(36,"ion-text",9),o.Ic(37,"\u6c34\u571f\u5171\u957f\u751f"),o.dc(),o.ec(38,"ion-text",9),o.Ic(39,"\u706b\u571f\u5171\u957f\u751f"),o.dc(),o.ec(40,"ion-text"),o.Ic(41,"(\u5168\u5c40\u8bbe\u5b9a)"),o.dc(),o.dc(),o.ec(42,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shuitu=n})),o.dc(),o.dc(),o.ec(43,"ion-item"),o.ec(44,"ion-label"),o.ec(45,"ion-text",9),o.Ic(46,"\u534e\u9e64\u5341\u795e"),o.dc(),o.ec(47,"ion-text",9),o.Ic(48,"\u4f20\u7edf\u5341\u795e"),o.dc(),o.ec(49,"ion-text"),o.Ic(50,"(\u5168\u5c40\u8bbe\u5b9a)"),o.dc(),o.dc(),o.ec(51,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.huahecai=n})),o.dc(),o.dc(),o.dc(),o.ec(52,"ion-item",1),o.ec(53,"ion-label"),o.Ic(54,"\u539f\u5c40\u663e\u793a\u9879\u76ee"),o.dc(),o.ec(55,"ion-button",2),o.mc("click",(function(){return e.ShowYuanju=!e.ShowYuanju})),o.ac(56,"ion-icon",3),o.dc(),o.dc(),o.ec(57,"ion-list",4),o.ec(58,"ion-item"),o.ec(59,"ion-label"),o.Ic(60,"\u85cf\u5e72"),o.dc(),o.ec(61,"ion-text",9),o.Ic(62,"\u663e\u793a"),o.dc(),o.ec(63,"ion-text",9),o.Ic(64,"\u9690\u85cf"),o.dc(),o.ec(65,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.yuanju.cangan=n})),o.dc(),o.dc(),o.ec(66,"ion-item"),o.ec(67,"ion-label"),o.Ic(68,"\u7eb3\u97f3"),o.dc(),o.ec(69,"ion-text",9),o.Ic(70,"\u663e\u793a"),o.dc(),o.ec(71,"ion-text",9),o.Ic(72,"\u9690\u85cf"),o.dc(),o.ec(73,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.yuanju.nayin=n})),o.dc(),o.dc(),o.ec(74,"ion-item"),o.ec(75,"ion-label"),o.Ic(76,"\u957f\u751f\u5341\u4e8c\u5bab"),o.dc(),o.ec(77,"ion-text",9),o.Ic(78,"\u663e\u793a"),o.dc(),o.ec(79,"ion-text",9),o.Ic(80,"\u9690\u85cf"),o.dc(),o.ec(81,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.yuanju.changshen=n})),o.dc(),o.dc(),o.dc(),o.ec(82,"ion-item",1),o.ec(83,"ion-label"),o.Ic(84,"\u65f6\u8fd0\u663e\u793a\u9879\u76ee"),o.dc(),o.ec(85,"ion-button",2),o.mc("click",(function(){return e.ShowShiyun=!e.ShowShiyun})),o.ac(86,"ion-icon",3),o.dc(),o.dc(),o.ec(87,"ion-list",4),o.ec(88,"ion-item"),o.ec(89,"ion-label"),o.Ic(90,"\u85cf\u5e72"),o.dc(),o.ec(91,"ion-text",9),o.Ic(92,"\u663e\u793a"),o.dc(),o.ec(93,"ion-text",9),o.Ic(94,"\u9690\u85cf"),o.dc(),o.ec(95,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shiyun.cangan=n})),o.dc(),o.dc(),o.ec(96,"ion-item"),o.ec(97,"ion-label"),o.Ic(98,"\u7eb3\u97f3"),o.dc(),o.ec(99,"ion-text",9),o.Ic(100,"\u663e\u793a"),o.dc(),o.ec(101,"ion-text",9),o.Ic(102,"\u9690\u85cf"),o.dc(),o.ec(103,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shiyun.nayin=n})),o.dc(),o.dc(),o.ec(104,"ion-item"),o.ec(105,"ion-label"),o.Ic(106,"\u957f\u751f\u5341\u4e8c\u5bab"),o.dc(),o.ec(107,"ion-text",9),o.Ic(108,"\u663e\u793a"),o.dc(),o.ec(109,"ion-text",9),o.Ic(110,"\u9690\u85cf"),o.dc(),o.ec(111,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shiyun.changshen=n})),o.dc(),o.dc(),o.ec(112,"ion-item"),o.ec(113,"ion-label"),o.Ic(114,"\u795e\u715e"),o.dc(),o.ec(115,"ion-text",9),o.Ic(116,"\u663e\u793a"),o.dc(),o.ec(117,"ion-text",9),o.Ic(118,"\u9690\u85cf"),o.dc(),o.ec(119,"ion-toggle",10),o.mc("ngModelChange",(function(n){return e.Settings.shiyun.shensha=n})),o.dc(),o.dc(),o.dc()),2&n&&(o.vc("ngIf",!e.OnlyGlobal),o.Nb(5),o.vc("name",e.ShowCommon?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!e.ShowCommon),o.Nb(5),o.Jc(e.Settings.fontsize),o.Nb(1),o.vc("ngModel",e.Settings.fontsize),o.Nb(9),o.Jc(e.Settings.shensha),o.Nb(1),o.vc("ngModel",e.Settings.shensha),o.Nb(7),o.vc("hidden",!e.Settings.shortname),o.Nb(2),o.vc("hidden",e.Settings.shortname),o.Nb(2),o.vc("ngModel",e.Settings.shortname),o.Nb(3),o.vc("hidden",!e.Settings.shuitu),o.Nb(2),o.vc("hidden",e.Settings.shuitu),o.Nb(4),o.vc("ngModel",e.Settings.shuitu),o.Nb(3),o.vc("hidden",!e.Settings.huahecai),o.Nb(2),o.vc("hidden",e.Settings.huahecai),o.Nb(4),o.vc("ngModel",e.Settings.huahecai),o.Nb(5),o.vc("name",e.ShowYuanju?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!e.ShowYuanju),o.Nb(4),o.vc("hidden",!e.Settings.yuanju.cangan),o.Nb(2),o.vc("hidden",e.Settings.yuanju.cangan),o.Nb(2),o.vc("ngModel",e.Settings.yuanju.cangan),o.Nb(4),o.vc("hidden",!e.Settings.yuanju.nayin),o.Nb(2),o.vc("hidden",e.Settings.yuanju.nayin),o.Nb(2),o.vc("ngModel",e.Settings.yuanju.nayin),o.Nb(4),o.vc("hidden",!e.Settings.yuanju.changshen),o.Nb(2),o.vc("hidden",e.Settings.yuanju.changshen),o.Nb(2),o.vc("ngModel",e.Settings.yuanju.changshen),o.Nb(5),o.vc("name",e.ShowShiyun?"arrow-dropdown":"arrow-dropleft"),o.Nb(1),o.vc("hidden",!e.ShowShiyun),o.Nb(4),o.vc("hidden",!e.Settings.shiyun.cangan),o.Nb(2),o.vc("hidden",e.Settings.shiyun.cangan),o.Nb(2),o.vc("ngModel",e.Settings.shiyun.cangan),o.Nb(4),o.vc("hidden",!e.Settings.shiyun.nayin),o.Nb(2),o.vc("hidden",e.Settings.shiyun.nayin),o.Nb(2),o.vc("ngModel",e.Settings.shiyun.nayin),o.Nb(4),o.vc("hidden",!e.Settings.shiyun.changshen),o.Nb(2),o.vc("hidden",e.Settings.shiyun.changshen),o.Nb(2),o.vc("ngModel",e.Settings.shiyun.changshen),o.Nb(4),o.vc("hidden",!e.Settings.shiyun.shensha),o.Nb(2),o.vc("hidden",e.Settings.shiyun.shensha),o.Nb(2),o.vc("ngModel",e.Settings.shiyun.shensha))},directives:[l.j,t.x,t.D,t.i,t.u,t.E,t.T,t.I,t.hb,s.f,s.g,t.X,t.c,t.k],styles:[".alignleft[_ngcontent-%COMP%]{float:left;margin-left:10px}.alignright[_ngcontent-%COMP%]{float:right;margin-right:10px}"]}),n})();function g(n,e){if(1&n){const n=o.fc();o.ec(0,"ion-item"),o.ec(1,"ion-label"),o.Ic(2,"\u6b64\u8bbe\u7f6e\u5e94\u7528\u5230\u5168\u5c40"),o.dc(),o.ec(3,"ion-checkbox",6),o.mc("ngModelChange",(function(e){return o.Bc(n),o.pc().Global=e})),o.dc(),o.dc()}if(2&n){const n=o.pc();o.Nb(3),o.vc("ngModel",n.Global)}}let h=(()=>{class n{constructor(n){this.settingService=n,this.OnlyGlobal=!1}ngOnInit(){this.Settings=Object(i.b)(this.settingService.Gua)}get OriginSymbol(){return 1!==this.Settings.symbol}set OriginSymbol(n){this.Settings.symbol=n?0:1}GetChange(){return this.Global&&(this.settingService.Gua=Object(i.b)(this.Settings)),this.Settings}}return n.\u0275fac=function(e){return new(e||n)(o.Zb(i.a))},n.\u0275cmp=o.Tb({type:n,selectors:[["app-guasettings"]],inputs:{Global:"Global",OnlyGlobal:"OnlyGlobal"},decls:36,vars:11,consts:[[4,"ngIf"],["min","10","max","20","color","secondary","slot","end",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","3","max","8","color","secondary","slot","end",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"hidden"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(o.ec(0,"ion-list"),o.Gc(1,g,4,1,"ion-item",0),o.ec(2,"ion-item"),o.ec(3,"ion-label"),o.Ic(4,"\u5b57\u4f53\u5927\u5c0f"),o.dc(),o.ec(5,"ion-text"),o.Ic(6),o.dc(),o.ec(7,"ion-range",1),o.mc("ngModelChange",(function(n){return e.Settings.fontsize=n})),o.ec(8,"ion-label",2),o.Ic(9,"10"),o.dc(),o.ec(10,"ion-label",3),o.Ic(11,"20"),o.dc(),o.dc(),o.dc(),o.ec(12,"ion-item"),o.ec(13,"ion-label"),o.Ic(14,"\u795e\u715e\u5217\u6570"),o.dc(),o.ec(15,"ion-text"),o.Ic(16),o.dc(),o.ec(17,"ion-range",4),o.mc("ngModelChange",(function(n){return e.Settings.shensha=n})),o.ec(18,"ion-label",2),o.Ic(19,"3"),o.dc(),o.ec(20,"ion-label",3),o.Ic(21,"8"),o.dc(),o.dc(),o.dc(),o.ec(22,"ion-item"),o.ec(23,"ion-label"),o.ec(24,"ion-text",5),o.Ic(25,"\u7b26\u53f7\uff1a \u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e\u3001\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e"),o.dc(),o.ec(26,"ion-text",5),o.Ic(27,"\u7b26\u53f7\uff1a=\u3001-"),o.dc(),o.dc(),o.ec(28,"ion-toggle",6),o.mc("ngModelChange",(function(n){return e.OriginSymbol=n})),o.dc(),o.dc(),o.ec(29,"ion-item"),o.ec(30,"ion-label"),o.ec(31,"ion-text",5),o.Ic(32,"\u7b80\u6392"),o.dc(),o.ec(33,"ion-text",5),o.Ic(34,"\u5168\u6392"),o.dc(),o.dc(),o.ec(35,"ion-toggle",6),o.mc("ngModelChange",(function(n){return e.Settings.shortname=n})),o.dc(),o.dc(),o.dc()),2&n&&(o.Nb(1),o.vc("ngIf",!e.OnlyGlobal),o.Nb(5),o.Jc(e.Settings.fontsize),o.Nb(1),o.vc("ngModel",e.Settings.fontsize),o.Nb(9),o.Jc(e.Settings.shensha),o.Nb(1),o.vc("ngModel",e.Settings.shensha),o.Nb(7),o.vc("hidden",!e.OriginSymbol),o.Nb(2),o.vc("hidden",e.OriginSymbol),o.Nb(2),o.vc("ngModel",e.OriginSymbol),o.Nb(3),o.vc("hidden",!e.Settings.shortname),o.Nb(2),o.vc("hidden",e.Settings.shortname),o.Nb(2),o.vc("ngModel",e.Settings.shortname))},directives:[t.E,l.j,t.x,t.D,t.T,t.I,t.hb,s.f,s.g,t.X,t.c,t.k],styles:[""]}),n})();function r(n,e){if(1&n&&o.ac(0,"app-bazisettings",8),2&n){const n=o.pc();o.vc("Global",n.Global)("OnlyGlobal",n.OnlyGlobal)}}function u(n,e){if(1&n&&o.ac(0,"app-guasettings",8),2&n){const n=o.pc();o.vc("Global",n.Global)("OnlyGlobal",n.OnlyGlobal)}}c.d(e,"a",(function(){return b}));let b=(()=>{class n{constructor(n,e){this.modalCtrl=n,this.setting=e,this.OnlyGlobal=!1}ngOnInit(){switch(this.settingComponent){case"bazi":this.Titel="\u516b\u5b57\u547d\u76d8\u8bbe\u7f6e";break;case"gua":this.Titel="\u516d\u723b\u5366\u76d8\u8bbe\u7f6e"}}ngAfterViewInit(){}set SettingComponent(n){this.settingComponent=n}get SettingComponent(){return this.settingComponent}onSave(){const n=(this.baziSettingView||this.guaSettingView).GetChange();this.close(n)}onCancel(){this.close(null)}close(n){this.modalCtrl.dismiss({result:n=n||{}})}}return n.\u0275fac=function(e){return new(e||n)(o.Zb(t.cb),o.Zb(i.a))},n.\u0275cmp=o.Tb({type:n,selectors:[["app-settingdialog"]],viewQuery:function(n,e){var c;1&n&&(o.Nc(d,!0),o.Nc(h,!0)),2&n&&(o.xc(c=o.nc())&&(e.baziSettingView=c.first),o.xc(c=o.nc())&&(e.guaSettingView=c.first))},inputs:{Config:"Config",SettingComponent:"SettingComponent"},decls:17,vars:3,consts:[["color","secondary"],["slot","start"],[3,"click"],["name","close-circle"],["slot","end"],["name","save"],["scrollY","true"],[3,"Global","OnlyGlobal",4,"ngIf"],[3,"Global","OnlyGlobal"]],template:function(n,e){1&n&&(o.ec(0,"ion-header"),o.ec(1,"ion-toolbar",0),o.ec(2,"ion-buttons",1),o.ec(3,"ion-button",2),o.mc("click",(function(){return e.onCancel()})),o.ac(4,"ion-icon",3),o.ec(5,"ion-text"),o.Ic(6,"\u53d6\u6d88"),o.dc(),o.dc(),o.dc(),o.ec(7,"ion-title"),o.Ic(8),o.dc(),o.ec(9,"ion-buttons",4),o.ec(10,"ion-button",2),o.mc("click",(function(){return e.onSave()})),o.ac(11,"ion-icon",5),o.ec(12,"ion-text"),o.Ic(13,"\u786e\u5b9a"),o.dc(),o.dc(),o.dc(),o.dc(),o.dc(),o.ec(14,"ion-content",6),o.Gc(15,r,1,2,"app-bazisettings",7),o.Gc(16,u,1,2,"app-guasettings",7),o.dc()),2&n&&(o.Nb(8),o.Jc(e.Titel),o.Nb(7),o.vc("ngIf","bazi"==e.SettingComponent),o.Nb(1),o.vc("ngIf","gua"==e.SettingComponent))},directives:[t.t,t.Y,t.j,t.i,t.u,t.T,t.W,t.n,l.j,d,h],styles:[""]}),n})()},KPWP:function(n,e,c){"use strict";c.d(e,"a",(function(){return s}));var t=c("ofXK"),i=c("3Pt+"),o=c("c7TG"),l=(c("B8lH"),c("fXoL"));let s=(()=>{class n{}return n.\u0275mod=l.Xb({type:n}),n.\u0275inj=l.Wb({factory:function(e){return new(e||n)},imports:[[t.b,i.c,o.Z]]}),n})()}}]);