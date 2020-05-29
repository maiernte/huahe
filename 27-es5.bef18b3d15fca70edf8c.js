function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+cLM":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("2QJI"),c=n("l+bK"),a=n("uq+3"),o=function(e){return e[e.DaYun=0]="DaYun",e[e.LiuNian=1]="LiuNian",e[e.XiaoYun=2]="XiaoYun",e}({}),r=function(){var e=function(){function e(t,n,i,c){_classCallCheck(this,e),this.Start=t,this.GZ=n,this.birthYear=i,this.type=c,this.type===o.DaYun&&(this.end=new Date(this.Start.getTime()+e.tenyear))}return _createClass(e,[{key:"Old",get:function(){return this.Start.getFullYear()-this.birthYear}},{key:"End",get:function(){return this.end},set:function(e){this.end=e||this.end}},{key:"Year",get:function(){return this.Start.getFullYear()}}]),e}();return e.oneday=864e5,e.oneyear=365.25*e.oneday,e.tenyear=10*e.oneyear,e}(),s=function(){function e(t,n){_classCallCheck(this,e),this.Birthday=t,this.Gender=n,this.bazi=c.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}return _createClass(e,[{key:"CalcShenSha",value:function(e){var t=new Array,n=!0,i=!1,c=void 0;try{for(var a,o=this.ShenSha[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var r=a.value;1==r.Is(e)&&t.push(r.Name)}}catch(s){i=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(i)throw c}}return t.join("\u3001")}},{key:"CalcLiuNian",value:function(e,t){for(var n=new Array,a=e-1984;a<0;)a+=60;a%=60;var s=this.T.Index+(e-this.Birthday.getFullYear()+1)*this.Direction;s=(s+600)%60;for(var l=e;l<=t;l++){var u=new i.b(a);u.Base=this.D,u.ShenSha=this.CalcShenSha(u);var h=new i.b(s);h.Base=this.D,h.ShenSha=this.CalcShenSha(h);var d=c.b.getSolarTerms(l,2)[0],g=new r(d,u,this.Birthday.getFullYear(),o.LiuNian);g.GZ2=h,n.push(g),a+=1,a%=60,s=((s+=1*this.Direction)+60)%60}return n}},{key:"equal",value:function(e){return this.Gender==e.Gender&&this.Birthday.toString()==e.Birthday.toString()}},{key:"initShenSha",value:function(){this.shenshas=new Array;var e=this.Y.Index,t=this.M.Index,n=this.D.Index,i=this.T.Index;this.shenshas.push(new a.a("\u5c06\u661f",[n])),this.shenshas.push(new a.a("\u7f8a\u5203",[n])),this.shenshas.push(new a.a("\u7984\u795e",[n])),this.shenshas.push(new a.a("\u534e\u76d6",[n])),this.shenshas.push(new a.a("\u6587\u660c",[n])),this.shenshas.push(new a.a("\u5b66\u5802",[n])),this.shenshas.push(new a.a("\u5929\u559c",[t])),this.shenshas.push(new a.a("\u5929\u533b",[t])),this.shenshas.push(new a.a("\u8d35\u4eba",[n])),this.shenshas.push(new a.a("\u9a7f\u9a6c",[e,n])),this.shenshas.push(new a.a("\u6843\u82b1",[e,n])),this.shenshas.push(new a.a("\u707e\u715e",[e,n])),this.shenshas.push(new a.a("\u52ab\u715e",[e,n])),this.shenshas.push(new a.a("\u65ec\u7a7a",[n])),this.shenshas.push(new a.a("\u9b41\u7f61",[e,t,n,i])),this.shenshas.push(new a.a("\u56db\u5e9f",[e,t,n,i])),this.shenshas.push(new a.a("\u5b64\u8fb0\u5be1\u5bbf",[e,t,n,i])),this.shenshas.push(new a.a("\u9634\u5dee\u9633\u9519",[n]));var c=new a.a("\u5929\u7f57\u5730\u7f51",[e,t,n,i]);c.Gender=this.Gender,this.shenshas.push(c)}},{key:"initDaYun",value:function(){this.dayun=new Array;var e=this.qiDaYun(),t=this.Direction,n=(e.getFullYear(),this.Birthday.getFullYear(),new r(this.Birthday,this.M,this.Birthday.getFullYear(),o.DaYun));n.End=e,this.dayun.push(n);for(var c=0;c<10;c++){var a=new i.b((this.M.Index+(c+1)*t+60)%60);a.Base=this.bazi.D;var s=new Date(e.getTime()+315576e6*c),l=new r(s,a,this.Birthday.getFullYear(),o.DaYun);this.dayun.push(l)}}},{key:"qiDaYun",value:function(){var e=c.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),t=Math.abs(e.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*t)}},{key:"Y",get:function(){return this.bazi.Y}},{key:"M",get:function(){return this.bazi.M}},{key:"D",get:function(){return this.bazi.D}},{key:"T",get:function(){return this.bazi.T}},{key:"All",get:function(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}},{key:"Direction",get:function(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}},{key:"MingGong",get:function(){if(this.minggong)return this.minggong;var e=this.M.Zhi.Index+1+this.T.Zhi.Index+1,t=e<14?14-e:26-e;return new i.b([(this.Y.Gan.QiYueGan+((t-=1)-2+12)%12)%10,t])}},{key:"TaiYuan",get:function(){return new i.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}},{key:"WuXings",get:function(){if(this.wuxings)return this.wuxings;var e=[0,0,0,0,0];return e[this.Y.Gan.WuXing.Index]+=1,e[this.M.Gan.WuXing.Index]+=1,e[this.D.Gan.WuXing.Index]+=1,e[this.T.Gan.WuXing.Index]+=1,e[this.Y.Zhi.WuXing.Index]+=1,e[this.M.Zhi.WuXing.Index]+=1,e[this.D.Zhi.WuXing.Index]+=1,e[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:e[0]},{Name:"\u6c34",Num:e[1]},{Name:"\u6728",Num:e[2]},{Name:"\u706b",Num:e[3]},{Name:"\u571f",Num:e[4]}],this.wuxings}},{key:"ShenSha",get:function(){return this.shenshas}},{key:"DaYun",get:function(){return this.dayun}}]),e}()},EUVb:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),a=n("tyNb"),o=n("c7TG"),r=n("Y6BA"),s=n("fXoL"),l=n("mrSG"),u=n("l+bK");function h(e,t){if(1&e&&(s.dc(0,"ion-select-option",12),s.Jc(1),s.cc()),2&e){var n=t.$implicit;s.vc("value",t.index),s.Nb(1),s.Lc("",n,"\u6708")}}function d(e,t){if(1&e&&(s.dc(0,"ion-select-option",12),s.Jc(1),s.cc()),2&e){var n=t.$implicit;s.vc("value",t.index),s.Nb(1),s.Kc(n)}}var g,b=((g=function(){function e(t){_classCallCheck(this,e),this.modalCtrl=t}return _createClass(e,[{key:"close",value:function(){this.modalCtrl.dismiss({result:this.NlSearch.Result})}},{key:"searchNL",value:function(){var e=this.NlSearch.Year,t=parseInt(this.NlSearch.Month.toString(),10)+1,n=parseInt(this.NlSearch.Date.toString(),10)+1,i="";!0===this.NlSearch.Leap&&(t*=-1,i="\u95f0"),console.log("search ..",e,t,n);var c=u.b.SearchNongli(e,t,n);null!=c?(this.NlSearch.Result=c,this.NlSearch.ResultTX=c.toChinaStr()):(this.NlSearch.ResultTX="\u627e\u4e0d\u5230\u519c\u5386 "+this.NlSearch.Year+"\u5e74 "+i+u.b.M_ChineseMonthNames[this.NlSearch.Month]+"\u6708 "+u.b.M_DayNames[this.NlSearch.Date],this.NlSearch.Result=null)}},{key:"ngOnInit",value:function(){var e=new Date(Date.now());this.NlSearch={Year:e.getFullYear(),MonthOptions:u.b.M_ChineseMonthNames,DateOptions:u.b.M_DayNames,Month:0,Date:0,Leap:!1,Result:null,ResultTX:""}}},{key:"Year",get:function(){return this.year},set:function(e){this.year=e}},{key:"CurrentYear",get:function(){return new Date(Date.now()).getFullYear()}}]),e}()).\u0275fac=function(e){return new(e||g)(s.Yb(o.ab))},g.\u0275cmp=s.Sb({type:g,selectors:[["app-searchnoli"]],decls:31,vars:8,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["position","floating"],["type","number","max","2010","min","1640",3,"placeholder","ngModel","ngModelChange"],["placeholder","\u6b63\u6708","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u521d\u4e00","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["slot","start",3,"click"],[1,"ion-text-wrap"],[3,"value"]],template:function(e,t){1&e&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",0),s.dc(2,"ion-buttons",1),s.dc(3,"ion-button",2),s.lc("click",(function(){return t.close()})),s.Zb(4,"ion-icon",3),s.cc(),s.cc(),s.dc(5,"ion-title"),s.Jc(6,"\u519c\u5386\u8f6c\u516c\u5386"),s.cc(),s.cc(),s.cc(),s.dc(7,"ion-content"),s.dc(8,"ion-item"),s.dc(9,"ion-label",4),s.Jc(10,"\u5e74\u4efd(1640 ~ 20100)"),s.cc(),s.dc(11,"ion-input",5),s.lc("ngModelChange",(function(e){return t.NlSearch.Year=e})),s.cc(),s.cc(),s.dc(12,"ion-item"),s.dc(13,"ion-label"),s.Jc(14,"\u6708\u4efd"),s.cc(),s.dc(15,"ion-select",6),s.lc("ngModelChange",(function(e){return t.NlSearch.Month=e})),s.Hc(16,h,2,2,"ion-select-option",7),s.cc(),s.cc(),s.dc(17,"ion-item"),s.dc(18,"ion-label"),s.Jc(19,"\u65e5\u5b50"),s.cc(),s.dc(20,"ion-select",8),s.lc("ngModelChange",(function(e){return t.NlSearch.Date=e})),s.Hc(21,d,2,2,"ion-select-option",7),s.cc(),s.cc(),s.dc(22,"ion-item"),s.dc(23,"ion-label"),s.Jc(24,"\u95f0\u6708"),s.cc(),s.dc(25,"ion-toggle",9),s.lc("ngModelChange",(function(e){return t.NlSearch.Leap=e})),s.cc(),s.cc(),s.dc(26,"ion-item"),s.dc(27,"ion-button",10),s.lc("click",(function(){return t.searchNL()})),s.Jc(28,"\u8ba1\u7b97"),s.cc(),s.dc(29,"ion-label",11),s.Jc(30),s.cc(),s.cc(),s.cc()),2&e&&(s.Nb(11),s.vc("placeholder",t.CurrentYear)("ngModel",t.NlSearch.Year),s.Nb(4),s.vc("ngModel",t.NlSearch.Month),s.Nb(1),s.vc("ngForOf",t.NlSearch.MonthOptions),s.Nb(4),s.vc("ngModel",t.NlSearch.Date),s.Nb(1),s.vc("ngForOf",t.NlSearch.DateOptions),s.Nb(4),s.vc("ngModel",t.NlSearch.Leap),s.Nb(5),s.Lc("\u67e5\u8be2\u7ed3\u679c\uff1a",t.NlSearch.ResultTX,""))},directives:[o.s,o.W,o.i,o.h,o.t,o.U,o.m,o.w,o.C,o.v,o.bb,c.f,c.g,o.P,o.fb,i.i,o.V,o.c,o.Q],styles:[""]}),g),f=n("LTmD");function v(e,t){1&e&&(s.dc(0,"ion-header"),s.dc(1,"ion-toolbar"),s.dc(2,"ion-buttons",10),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Jc(5,"\u5e74\u5386"),s.cc(),s.cc(),s.cc())}function p(e,t){if(1&e&&(s.dc(0,"div",29),s.Jc(1),s.cc()),2&e){var n=s.oc().$implicit;s.Nb(1),s.Kc(n.GZdate)}}function m(e,t){if(1&e){var n=s.ec();s.dc(0,"div",27),s.lc("click",(function(){s.Cc(n);var e=t.$implicit;return s.oc(2).changeDate(e)})),s.dc(1,"div"),s.Jc(2),s.cc(),s.dc(3,"div"),s.Jc(4),s.cc(),s.Hc(5,p,2,1,"div",28),s.cc()}if(2&e){var i=t.$implicit,c=s.oc(2);s.Qb("xmonth",i.Month!=c.Month)("active",i.Date==c.Date&&i.Month==c.Month)("jieqi",!!i.JQname),s.Nb(2),s.Kc(i.Display),s.Nb(2),s.Kc(i.DisplayChi),s.Nb(1),s.vc("ngIf",c.ShowGZ)}}function y(e,t){if(1&e&&(s.dc(0,"div",6),s.Hc(1,m,6,9,"div",26),s.cc()),2&e){var n=t.$implicit;s.Nb(1),s.vc("ngForOf",n.Dates)}}var w,C=function e(){_classCallCheck(this,e),this.Dates=[]},k=((w=function(){function e(t,n){_classCallCheck(this,e),this.modalController=t,this.settings=n,this.Weeks=[],this.searchModel=!1,this.inited=!1}return _createClass(e,[{key:"calcFirstDayInCalendarTable",value:function(e,t){var n=new Date(e,t-1,1),i=n.getDay();return i=0===i?7:i,u.b.addDays(-1*i,n)}},{key:"showModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:b});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"initWeeks",value:function(e,t,n){for(var i=this.calcFirstDayInCalendarTable(e,t),c=[],a=0;a<6;a++){var o=new C;c.push(o);for(var r=0;r<7;r++){var s=new u.a(i);o.Dates.push(s),i=u.b.addDays(1,i),s.Month===t&&s.Date===n&&(this.TyDate=s)}}this.Weeks=c,this.Month=t,this.Date=n,this.Year=e;var l=new Date(e,t-1,n);this.SelectedDate=l.toDatabaseStr()}},{key:"initDetail",value:function(){var e=this.tyDate.JianChu;this.Good=e.Good,this.Bad=e.Bad,this.Jianchu=e.Titel+": "+e.Mean;var t="";t+=!0===this.tyDate.IsSuiPo?" \u5c81\u7834":"",t+=!0===this.tyDate.IsYuePo?" \u6708\u7834":"",t+=!0===this.tyDate.IsShangSuo?" \u4e0a\u6714":"",t+=!0===this.tyDate.IsYangGong13?" \u6768\u516c\u5341\u4e09\u5fcc":"",this.BadDay=t.trim()}},{key:"changeDate",value:function(e){var t=new Date(Date.now()),n=e?e.Year:t.getFullYear(),i=e?e.Month:t.getMonth()+1,c=e?e.Date:t.getDate();i===this.Month&&e?(this.Date=c,this.TyDate=e,this.SelectedDate=e.date.toDatabaseStr()):this.initWeeks(n,i,c)}},{key:"ngOnInit",value:function(){var e=new Date(Date.now());this.initWeeks(e.getFullYear(),e.getMonth()+1,e.getDate()),this.inited=!0}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"DateGanZhi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.GZmonth,"\u6708 ").concat(this.tyDate.GZdate,"\u65e5")}},{key:"NongLi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.NLleap).concat(this.tyDate.NLmonth,"\u6708 ").concat(this.tyDate.NLdate,"\u65e5")}},{key:"SelectedDate",get:function(){return this.selectedDate},set:function(e){if(!1!==this.inited&&""!==e){this.selectedDate=e;var t=new Date(Date.parse(e));t.getFullYear()===this.Year&&t.getMonth()+1===this.Month&&t.getDate()===this.Date||this.initWeeks(t.getFullYear(),t.getMonth()+1,t.getDate())}}},{key:"ShowGZ",get:function(){return this.settings.Calendar.showGanZhi},set:function(e){this.settings.Calendar.showGanZhi=e,this.settings.Calendar=this.settings.Calendar}},{key:"TyDate",get:function(){return this.tyDate},set:function(e){this.tyDate=e,this.initDetail()}}]),e}()).\u0275fac=function(e){return new(e||w)(s.Yb(o.ab),s.Yb(f.a))},w.\u0275cmp=s.Sb({type:w,selectors:[["app-wannianli"]],decls:77,vars:13,consts:[[4,"ngIf"],[2,"background-image","url('assets/img/back_15.jpg')"],["fixed",""],[1,"ui","attached","top","segment"],[1,"ui","top","attached","blue","large","label"],[1,"ui","attached","segment"],[1,"ui","equal","width","grid"],[1,"weekend","th","cell","column"],[1,"weekday","th","cell","column"],["class","ui equal width grid",4,"ngFor","ngForOf"],["slot","start"],["color","primary"],["slot","start","color","primary",1,"ion-no-padding"],["side","end"],["color","secondary"],["slot","start","color","warning",1,"ion-no-padding"],["color","warning"],["side","end",1,"ion-text-wrap"],[3,"hidden"],["slot","start","color","danger",1,"ion-no-padding"],["color","secondary",1,"ion-text-wrap"],[3,"ngModel","ngModelChange"],["slot","end"],[3,"click"],["displayFormat","YYYY\u5e74MM\u6708DD\u65e5","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["lines","none"],["class","cell column month td",3,"xmonth","active","jieqi","click",4,"ngFor","ngForOf"],[1,"cell","column","month","td",3,"click"],["style","color: gray;",4,"ngIf"],[2,"color","gray"]],template:function(e,t){1&e&&(s.Hc(0,v,6,0,"ion-header",0),s.dc(1,"ion-content",1),s.dc(2,"ion-grid",2),s.dc(3,"div",3),s.dc(4,"div",4),s.Jc(5),s.Zb(6,"br"),s.Jc(7,"\xa0 "),s.cc(),s.cc(),s.dc(8,"div",5),s.dc(9,"div",6),s.dc(10,"div",7),s.Jc(11,"\u661f\u671f\u5929"),s.Zb(12,"br"),s.Jc(13,"\xa0"),s.cc(),s.dc(14,"div",8),s.Jc(15,"\u661f\u671f\u4e00"),s.Zb(16,"div"),s.cc(),s.dc(17,"div",8),s.Jc(18,"\u661f\u671f\u4e8c"),s.Zb(19,"div"),s.cc(),s.dc(20,"div",8),s.Jc(21,"\u661f\u671f\u4e09"),s.Zb(22,"div"),s.cc(),s.dc(23,"div",8),s.Jc(24,"\u661f\u671f\u56db"),s.Zb(25,"div"),s.cc(),s.dc(26,"div",8),s.Jc(27,"\u661f\u671f\u4e94"),s.Zb(28,"div"),s.cc(),s.dc(29,"div",7),s.Jc(30,"\u661f\u671f\u516d"),s.Zb(31,"div"),s.cc(),s.cc(),s.cc(),s.dc(32,"div",5),s.Hc(33,y,2,1,"div",9),s.cc(),s.dc(34,"ion-list"),s.dc(35,"ion-item"),s.dc(36,"ion-label",10),s.dc(37,"ion-text",11),s.dc(38,"p"),s.Jc(39),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(40,"ion-item"),s.dc(41,"ion-note",12),s.dc(42,"ion-text",11),s.dc(43,"h3"),s.Jc(44,"\u5b9c"),s.cc(),s.cc(),s.cc(),s.dc(45,"ion-label",13),s.dc(46,"ion-text",14),s.dc(47,"p"),s.Jc(48),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(49,"ion-item"),s.dc(50,"ion-note",15),s.dc(51,"ion-text",16),s.dc(52,"h3"),s.Jc(53,"\u5fcc"),s.cc(),s.cc(),s.cc(),s.dc(54,"ion-label",17),s.dc(55,"ion-text",14),s.dc(56,"p"),s.Jc(57),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(58,"ion-item",18),s.dc(59,"ion-note",19),s.Jc(60),s.cc(),s.dc(61,"ion-label"),s.dc(62,"ion-text",20),s.dc(63,"p"),s.Jc(64,"\u51e1\u5c81\u7834, \u6708\u7834, \u4e0a\u6714, \u6768\u516c\u5341\u4e09\u5fcc\u7b49\u8bf8\u65e5, \u5927\u4e8b\u4e0d\u5b9c!"),s.cc(),s.cc(),s.cc(),s.cc(),s.cc(),s.dc(65,"ion-item"),s.dc(66,"ion-checkbox",21),s.lc("ngModelChange",(function(e){return t.ShowGZ=e})),s.cc(),s.dc(67,"ion-label"),s.Jc(68,"\u663e\u793a\u65e5\u5e72\u652f"),s.cc(),s.dc(69,"ion-buttons",22),s.dc(70,"ion-button",23),s.lc("click",(function(){return t.showModal()})),s.Jc(71,"\u519c\u5386\u53cd\u67e5"),s.cc(),s.cc(),s.cc(),s.dc(72,"ion-item"),s.dc(73,"ion-label"),s.Jc(74,"\u8df3\u8f6c\u5230\uff1a"),s.cc(),s.dc(75,"ion-datetime",24),s.lc("ngModelChange",(function(e){return t.SelectedDate=e})),s.cc(),s.cc(),s.Zb(76,"ion-item",25),s.cc(),s.cc()),2&e&&(s.vc("ngIf",!t.IsWeb),s.Nb(5),s.Nc(" ",t.Year,"\u5e74",t.Month,"\u6708",t.Date,"\u65e5\xa0--\xa0 ",t.DateGanZhi," "),s.Nb(28),s.vc("ngForOf",t.Weeks),s.Nb(6),s.Lc("\u519c\u5386\uff1a",t.NongLi,""),s.Nb(9),s.Kc(t.Jianchu),s.Nb(9),s.Kc(t.Bad),s.Nb(1),s.vc("hidden",""==t.BadDay),s.Nb(2),s.Lc(" ",t.BadDay," "),s.Nb(6),s.vc("ngModel",t.ShowGZ),s.Nb(9),s.vc("ngModel",t.SelectedDate))},directives:[i.j,o.m,o.r,i.i,o.D,o.w,o.C,o.S,o.G,o.j,o.c,c.f,c.g,o.i,o.h,o.n,o.fb,o.s,o.W,o.F,o.U],styles:[".column.th.cell[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.th.cell.weekday[_ngcontent-%COMP%]{background-color:#cdc8b1}.th.cell.weekend[_ngcontent-%COMP%]{background-color:#d2691e}.month.column.cell.td[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.column.cell.month[_ngcontent-%COMP%]{background-color:#eee9e9;color:#000}.column.cell.jieqi[_ngcontent-%COMP%]{background-color:#cdc8b1;color:#000}.column.cell.xmonth[_ngcontent-%COMP%]{background-color:snow;color:grey}.column.cell.active[_ngcontent-%COMP%]{background-color:#6495ed;color:#000}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:540px}"]}),w),D=n("LvB5"),x=n("B8lH"),S=n("HULg"),N=n("ylIl"),M=n("mo90");function Y(e,t){if(1&e){var n=s.ec();s.dc(0,"ion-header"),s.dc(1,"ion-toolbar"),s.dc(2,"ion-buttons",4),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Jc(5,"\u516d\u723b"),s.cc(),s.dc(6,"ion-buttons",5),s.dc(7,"ion-button",6),s.lc("click",(function(){return s.Cc(n),s.oc().showPaiguaModal()})),s.Zb(8,"ion-icon",7),s.cc(),s.dc(9,"ion-button",6),s.lc("click",(function(){return s.Cc(n),s.oc().showSettingModal()})),s.Zb(10,"ion-icon",8),s.cc(),s.dc(11,"ion-button",9),s.lc("click",(function(){return s.Cc(n),s.oc().SaveGua()})),s.Zb(12,"ion-icon",10),s.cc(),s.cc(),s.cc(),s.cc()}if(2&e){var i=s.oc();s.Nb(11),s.vc("disabled",!i.HasGua)}}function I(e,t){if(1&e){var n=s.ec();s.dc(0,"ion-item",11),s.dc(1,"ion-buttons"),s.dc(2,"ion-button",6),s.lc("click",(function(){return s.Cc(n),s.oc().showPaiguaModal()})),s.Zb(3,"ion-icon",12),s.Jc(4," \u6392\u5366 "),s.cc(),s.dc(5,"ion-button",6),s.lc("click",(function(){return s.Cc(n),s.oc().showSettingModal()})),s.Zb(6,"ion-icon",13),s.Jc(7," \u8bbe\u7f6e "),s.cc(),s.dc(8,"ion-button",9),s.lc("click",(function(){return s.Cc(n),s.oc().SaveGua()})),s.Zb(9,"ion-icon",14),s.Jc(10," \u4fdd\u5b58 "),s.cc(),s.cc(),s.cc()}if(2&e){var i=s.oc();s.Nb(8),s.vc("disabled",!i.HasGua)}}n("0eVs");var Z=function(e){return{display:e}};function G(e,t){if(1&e&&(s.dc(0,"div",15),s.dc(1,"div",16),s.Zb(2,"app-guaview",17),s.cc(),s.cc()),2&e){var n=s.oc();s.Nb(1),s.vc("ngStyle",s.xc(3,Z,n.Align)),s.Nb(1),s.vc("Config",n.Config)("GuaText",n.Gua)}}var J,O=((J=function(){function e(t,n,i,c){_classCallCheck(this,e),this.modalController=t,this.alertController=n,this.setting=i,this.dbservice=c,this.smallSymbol=!1}return _createClass(e,[{key:"ngOnInit",value:function(){e.last&&(this.gua=e.last)}},{key:"SaveGua",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dbservice.getNodes();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:if(e.t1=function(e){return 32===e.type},(t=e.t0.filter(e.t1))&&0!==t.length){e.next=9;break}return e.abrupt("return",void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002"));case 9:return e.next=11,this.modalController.create({component:M.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 11:return n=e.sent,e.next=14,n.present();case 14:return e.next=16,n.onWillDismiss();case 16:i=e.sent,c=i.data,console.log("select node",c),c&&c.nodeid&&this.dbservice.CreateRecord(c.nodeid,this.gua.question,8,JSON.stringify(this.gua));case 19:case"end":return e.stop()}}),e,this)})))}},{key:"showPaiguaModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:D.a});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:i=t.sent,(c=i.data).result?(e.last=c.result,this.gua=c.result):this.gua=null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x.a,componentProps:{SettingComponent:"gua",Config:Object(f.b)(this.Config)}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,Object(f.c)({},i.result)||!Object(f.c)(this.Config,i.result)&&(this.Config=Object(f.b)(i.result),this.guaview&&this.guaview.Reflash(this.Config));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"ChangSymbol",value:function(){var e=Object(f.b)(this.config);!1===this.smallSymbol&&(e.shensha=4,e.symbol=1),this.smallSymbol=!this.smallSymbol,this.guaview.Reflash(e)}},{key:"presentAlert",value:function(e,t,n){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=i.sent,i.next=5,c.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"Align",get:function(){return this.setting.DeviceWidth>500?"inline-block":"inline"}},{key:"Config",get:function(){return this.config||(this.config=Object(f.b)(this.setting.Gua)),this.config},set:function(e){e&&(this.config=e)}},{key:"Gua",get:function(){return this.gua}},{key:"HasGua",get:function(){return!!this.Gua}}]),e}()).\u0275fac=function(e){return new(e||J)(s.Yb(o.ab),s.Yb(o.b),s.Yb(f.a),s.Yb(S.a))},J.\u0275cmp=s.Sb({type:J,selectors:[["app-paigua"]],viewQuery:function(e,t){var n;1&e&&s.Oc(N.a,!0),2&e&&s.yc(n=s.mc())&&(t.guaview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],["style","text-align: center;",4,"ngIf"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[2,"text-align","center"],[2,"margin-bottom","3px",3,"ngStyle"],[3,"Config","GuaText"]],template:function(e,t){1&e&&(s.Hc(0,Y,13,1,"ion-header",0),s.dc(1,"ion-content",1),s.Hc(2,I,11,1,"ion-item",2),s.Hc(3,G,3,5,"div",3),s.cc()),2&e&&(s.vc("ngIf",!t.IsWeb),s.Nb(2),s.vc("ngIf",t.IsWeb),s.Nb(1),s.vc("ngIf",t.HasGua))},directives:[i.j,o.m,o.s,o.W,o.i,o.F,o.U,o.h,o.t,o.w,i.k,N.a],styles:[""]}),J),z=n("SRjL"),B=n("gTpY");function T(e,t){if(1&e){var n=s.ec();s.dc(0,"ion-header"),s.dc(1,"ion-toolbar",4),s.dc(2,"ion-buttons",5),s.Zb(3,"ion-menu-button"),s.cc(),s.dc(4,"ion-title"),s.Jc(5,"\u516b\u5b57"),s.cc(),s.dc(6,"ion-buttons",6),s.dc(7,"ion-button",7),s.lc("click",(function(){return s.Cc(n),s.oc().showPaipanModal()})),s.Zb(8,"ion-icon",8),s.cc(),s.dc(9,"ion-button",7),s.lc("click",(function(){return s.Cc(n),s.oc().showSettingModal()})),s.Zb(10,"ion-icon",9),s.cc(),s.dc(11,"ion-button",10),s.lc("click",(function(){return s.Cc(n),s.oc().SaveBazi()})),s.Zb(12,"ion-icon",11),s.cc(),s.cc(),s.cc(),s.cc()}if(2&e){var i=s.oc();s.Nb(11),s.vc("disabled",!i.HasBazi)}}function W(e,t){if(1&e){var n=s.ec();s.dc(0,"ion-item",12),s.dc(1,"ion-buttons"),s.dc(2,"ion-button",7),s.lc("click",(function(){return s.Cc(n),s.oc().showPaipanModal()})),s.Zb(3,"ion-icon",13),s.Jc(4," \u6392\u76d8 "),s.cc(),s.dc(5,"ion-button",7),s.lc("click",(function(){return s.Cc(n),s.oc().showSettingModal()})),s.Zb(6,"ion-icon",14),s.Jc(7," \u8bbe\u7f6e "),s.cc(),s.dc(8,"ion-button",10),s.lc("click",(function(){return s.Cc(n),s.oc().SaveBazi()})),s.Zb(9,"ion-icon",15),s.Jc(10," \u4fdd\u5b58 "),s.cc(),s.cc(),s.cc()}if(2&e){var i=s.oc();s.Nb(8),s.vc("disabled",!i.HasBazi)}}var _=function(e){return{display:e}};function j(e,t){if(1&e&&(s.dc(0,"div",16),s.dc(1,"div",17),s.Zb(2,"app-baziview",18),s.cc(),s.cc()),2&e){var n=s.oc();s.Nb(1),s.vc("ngStyle",s.xc(3,_,n.Align)),s.Nb(1),s.vc("Config",n.Config)("BaziText",n.Bazi)}}var R,F=((R=function(){function e(t,n,i,c){_classCallCheck(this,e),this.modalController=t,this.alertController=n,this.dbservice=i,this.setting=c}return _createClass(e,[{key:"ngOnInit",value:function(){e.last&&(this.bazi=e.last)}},{key:"SaveBazi",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dbservice.getNodes();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:if(e.t1=function(e){return 32===e.type},(t=e.t0.filter(e.t1))&&0!==t.length){e.next=9;break}return e.abrupt("return",void this.presentAlert("\u65e0\u6cd5\u4fdd\u5b58",null,"\u8bf7\u5230\u6848\u4f8b\u9875\u9762\uff0c\u521b\u5efa\u81f3\u5c11\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\u7c7b\u578b\u7684\u76ee\u5f55\u3002"));case 9:return e.next=11,this.modalController.create({component:M.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 11:return n=e.sent,e.next=14,n.present();case 14:return e.next=16,n.onWillDismiss();case 16:i=e.sent,(c=i.data)&&c.nodeid&&this.dbservice.CreateRecord(c.nodeid,this.bazi.person,16,JSON.stringify(this.bazi));case 19:case"end":return e.stop()}}),e,this)})))}},{key:"showPaipanModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:z.a});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onWillDismiss();case 7:i=t.sent,(c=i.data).result?(e.last=c.result,this.bazi=c.result):this.bazi=null;case 10:case"end":return t.stop()}}),t,this)})))}},{key:"showSettingModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x.a,componentProps:{SettingComponent:"bazi",Config:Object(f.b)(this.Config)}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,Object(f.c)({},i.result)||!Object(f.c)(this.Config,i.result)&&(this.Config=Object(f.b)(i.result),this.baziview&&this.baziview.Reflash(this.Config));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlert",value:function(e,t,n){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:e||"\u9519\u8bef",subHeader:t||"",message:n,buttons:["\u786e\u5b9a"]});case 2:return c=i.sent,i.next=5,c.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"IsWeb",get:function(){return"web"===r.b}},{key:"Align",get:function(){return this.setting.DeviceWidth>500?"inline-block":"inline"}},{key:"Config",get:function(){return this.config||(this.config=Object(f.b)(this.setting.Bazi)),this.config},set:function(e){e&&(this.config=e)}},{key:"Bazi",get:function(){return this.bazi}},{key:"HasBazi",get:function(){return!!this.bazi}}]),e}()).\u0275fac=function(e){return new(e||R)(s.Yb(o.ab),s.Yb(o.b),s.Yb(S.a),s.Yb(f.a))},R.\u0275cmp=s.Sb({type:R,selectors:[["app-paibazi"]],viewQuery:function(e,t){var n;1&e&&s.Oc(B.a,!0),2&e&&s.yc(n=s.mc())&&(t.baziview=n.first)},decls:4,vars:3,consts:[[4,"ngIf"],[2,"margin-bottom","10px"],["lines","none",4,"ngIf"],["style","text-align: center;",4,"ngIf"],["color","primary"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],["lines","none"],["name","add-circle-outline"],["name","settings"],["name","save"],[2,"text-align","center"],[2,"margin-bottom","3px",3,"ngStyle"],[3,"Config","BaziText"]],template:function(e,t){1&e&&(s.Hc(0,T,13,1,"ion-header",0),s.dc(1,"ion-content",1),s.Hc(2,W,11,1,"ion-item",2),s.Hc(3,j,3,5,"div",3),s.cc()),2&e&&(s.vc("ngIf",!t.IsWeb),s.Nb(2),s.vc("ngIf",t.IsWeb),s.Nb(1),s.vc("ngIf",t.HasBazi))},directives:[i.j,o.m,o.s,o.W,o.i,o.F,o.U,o.h,o.t,o.w,i.k,B.a],styles:[""]}),R);function P(e,t){1&e&&s.Zb(0,"app-wannianli")}function H(e,t){1&e&&s.Zb(0,"app-paigua")}function L(e,t){1&e&&s.Zb(0,"app-paibazi")}var X,A,q,K,Q=((X=function(){function e(t,n){var i=this;_classCallCheck(this,e),this.router=t,this.route=n,this.ChildrenType={Calendar:"calendar",Gua:"gua",Bazi:"bazi"},this.Child=this.ChildrenType.Calendar,this.route.params.subscribe((function(e){i.Child=e.child||i.ChildrenType.Calendar}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"IsWeb",get:function(){return"web"===r.b}}]),e}()).\u0275fac=function(e){return new(e||X)(s.Yb(a.g),s.Yb(a.a))},X.\u0275cmp=s.Sb({type:X,selectors:[["app-paipan"]],decls:4,vars:3,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(s.dc(0,"ion-content"),s.Hc(1,P,1,0,"app-wannianli",0),s.Hc(2,H,1,0,"app-paigua",0),s.Hc(3,L,1,0,"app-paibazi",0),s.cc()),2&e&&(s.Nb(1),s.vc("ngIf",t.Child===t.ChildrenType.Calendar),s.Nb(1),s.vc("ngIf",t.Child===t.ChildrenType.Gua),s.Nb(1),s.vc("ngIf",t.Child===t.ChildrenType.Bazi))},directives:[o.m,i.j,k,O,F],styles:[""]}),X),U=n("Gfuc"),V=n("KPWP"),$=n("n7QD"),E=((A=function e(){_classCallCheck(this,e)}).\u0275mod=s.Wb({type:A}),A.\u0275inj=s.Vb({factory:function(e){return new(e||A)},imports:[[U.a,V.a,$.a,i.b,c.c,o.X]]}),A),ee=n("9UMr"),te=n("uEAi"),ne=((K=function e(){_classCallCheck(this,e)}).\u0275mod=s.Wb({type:K}),K.\u0275inj=s.Vb({factory:function(e){return new(e||K)},imports:[[ee.a,V.a,te.a,i.b,c.c,o.X]]}),K),ie=((q=function e(){_classCallCheck(this,e)}).\u0275mod=s.Wb({type:q}),q.\u0275inj=s.Vb({factory:function(e){return new(e||q)},imports:[[i.b,c.c,o.X]]}),q);n.d(t,"PaipanPageModule",(function(){return oe}));var ce,ae=[{path:"",component:Q}],oe=((ce=function e(){_classCallCheck(this,e)}).\u0275mod=s.Wb({type:ce}),ce.\u0275inj=s.Vb({factory:function(e){return new(e||ce)},imports:[[i.b,c.c,o.X,E,ne,ie,a.j.forChild(ae)]]}),ce)}}]);