function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+cLM":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("2QJI"),c=n("l+bK"),a=n("uq+3"),o=function(e){return e[e.DaYun=0]="DaYun",e[e.LiuNian=1]="LiuNian",e[e.XiaoYun=2]="XiaoYun",e}({}),s=function(){var e=function(){function e(t,n,i,c){_classCallCheck(this,e),this.Start=t,this.GZ=n,this.birthYear=i,this.type=c,this.type===o.DaYun&&(this.end=new Date(this.Start.getTime()+e.tenyear))}return _createClass(e,[{key:"Old",get:function(){return this.Start.getFullYear()-this.birthYear}},{key:"End",get:function(){return this.end},set:function(e){this.end=e||this.end}},{key:"Year",get:function(){return this.Start.getFullYear()}}]),e}();return e.oneday=864e5,e.oneyear=365.25*e.oneday,e.tenyear=10*e.oneyear,e}(),r=function(){function e(t,n){_classCallCheck(this,e),this.Birthday=t,this.Gender=n,this.bazi=c.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}return _createClass(e,[{key:"CalcShenSha",value:function(e){var t=new Array,n=!0,i=!1,c=void 0;try{for(var a,o=this.ShenSha[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;1==s.Is(e)&&t.push(s.Name)}}catch(r){i=!0,c=r}finally{try{n||null==o.return||o.return()}finally{if(i)throw c}}return t.join("\u3001")}},{key:"CalcLiuNian",value:function(e,t){for(var n=new Array,a=e-1984;a<0;)a+=60;a%=60;var r=this.T.Index+(e-this.Birthday.getFullYear()+1)*this.Direction;r=(r+600)%60;for(var u=e;u<=t;u++){var h=new i.b(a);h.Base=this.D,h.ShenSha=this.CalcShenSha(h);var l=new i.b(r);l.Base=this.D,l.ShenSha=this.CalcShenSha(l);var d=c.b.getSolarTerms(u,2)[0],g=new s(d,h,this.Birthday.getFullYear(),o.LiuNian);g.GZ2=l,n.push(g),a+=1,a%=60,r=((r+=1*this.Direction)+60)%60}return n}},{key:"equal",value:function(e){return this.Gender==e.Gender&&this.Birthday.toString()==e.Birthday.toString()}},{key:"initShenSha",value:function(){this.shenshas=new Array;var e=this.Y.Index,t=this.M.Index,n=this.D.Index,i=this.T.Index;this.shenshas.push(new a.a("\u5c06\u661f",[n])),this.shenshas.push(new a.a("\u7f8a\u5203",[n])),this.shenshas.push(new a.a("\u7984\u795e",[n])),this.shenshas.push(new a.a("\u534e\u76d6",[n])),this.shenshas.push(new a.a("\u6587\u660c",[n])),this.shenshas.push(new a.a("\u5b66\u5802",[n])),this.shenshas.push(new a.a("\u5929\u559c",[t])),this.shenshas.push(new a.a("\u5929\u533b",[t])),this.shenshas.push(new a.a("\u8d35\u4eba",[n])),this.shenshas.push(new a.a("\u9a7f\u9a6c",[e,n])),this.shenshas.push(new a.a("\u6843\u82b1",[e,n])),this.shenshas.push(new a.a("\u707e\u715e",[e,n])),this.shenshas.push(new a.a("\u52ab\u715e",[e,n])),this.shenshas.push(new a.a("\u65ec\u7a7a",[n])),this.shenshas.push(new a.a("\u9b41\u7f61",[e,t,n,i])),this.shenshas.push(new a.a("\u56db\u5e9f",[e,t,n,i])),this.shenshas.push(new a.a("\u5b64\u8fb0\u5be1\u5bbf",[e,t,n,i])),this.shenshas.push(new a.a("\u9634\u5dee\u9633\u9519",[n]));var c=new a.a("\u5929\u7f57\u5730\u7f51",[e,t,n,i]);c.Gender=this.Gender,this.shenshas.push(c)}},{key:"initDaYun",value:function(){this.dayun=new Array;var e=this.qiDaYun(),t=this.Direction,n=(e.getFullYear(),this.Birthday.getFullYear(),new s(this.Birthday,this.M,this.Birthday.getFullYear(),o.DaYun));n.End=e,this.dayun.push(n);for(var c=0;c<10;c++){var a=new i.b((this.M.Index+(c+1)*t+60)%60);a.Base=this.bazi.D;var r=new Date(e.getTime()+315576e6*c),u=new s(r,a,this.Birthday.getFullYear(),o.DaYun);this.dayun.push(u)}}},{key:"qiDaYun",value:function(){var e=c.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),t=Math.abs(e.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*t)}},{key:"Y",get:function(){return this.bazi.Y}},{key:"M",get:function(){return this.bazi.M}},{key:"D",get:function(){return this.bazi.D}},{key:"T",get:function(){return this.bazi.T}},{key:"All",get:function(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}},{key:"Direction",get:function(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}},{key:"MingGong",get:function(){if(this.minggong)return this.minggong;var e=this.M.Zhi.Index+1+this.T.Zhi.Index+1,t=e<14?14-e:26-e;return new i.b([(this.Y.Gan.QiYueGan+((t-=1)-2+12)%12)%10,t])}},{key:"TaiYuan",get:function(){return new i.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}},{key:"WuXings",get:function(){if(this.wuxings)return this.wuxings;var e=[0,0,0,0,0];return e[this.Y.Gan.WuXing.Index]+=1,e[this.M.Gan.WuXing.Index]+=1,e[this.D.Gan.WuXing.Index]+=1,e[this.T.Gan.WuXing.Index]+=1,e[this.Y.Zhi.WuXing.Index]+=1,e[this.M.Zhi.WuXing.Index]+=1,e[this.D.Zhi.WuXing.Index]+=1,e[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:e[0]},{Name:"\u6c34",Num:e[1]},{Name:"\u6728",Num:e[2]},{Name:"\u706b",Num:e[3]},{Name:"\u571f",Num:e[4]}],this.wuxings}},{key:"ShenSha",get:function(){return this.shenshas}},{key:"DaYun",get:function(){return this.dayun}}]),e}()},EUVb:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("3Pt+"),a=n("tyNb"),o=n("c7TG"),s=n("fXoL"),r=n("mrSG"),u=n("l+bK");function h(e,t){if(1&e&&(s.ec(0,"ion-select-option",12),s.Hc(1),s.dc()),2&e){var n=t.$implicit;s.uc("value",t.index),s.Nb(1),s.Jc("",n,"\u6708")}}function l(e,t){if(1&e&&(s.ec(0,"ion-select-option",12),s.Hc(1),s.dc()),2&e){var n=t.$implicit;s.uc("value",t.index),s.Nb(1),s.Ic(n)}}var d,g=((d=function(){function e(t){_classCallCheck(this,e),this.modalCtrl=t}return _createClass(e,[{key:"close",value:function(){this.modalCtrl.dismiss({result:this.NlSearch.Result})}},{key:"searchNL",value:function(){var e=this.NlSearch.Year,t=parseInt(this.NlSearch.Month.toString(),10)+1,n=parseInt(this.NlSearch.Date.toString(),10)+1,i="";!0===this.NlSearch.Leap&&(t*=-1,i="\u95f0"),console.log("search ..",e,t,n);var c=u.b.SearchNongli(e,t,n);null!=c?(this.NlSearch.Result=c,this.NlSearch.ResultTX=c.toChinaStr()):(this.NlSearch.ResultTX="\u627e\u4e0d\u5230\u519c\u5386 "+this.NlSearch.Year+"\u5e74 "+i+u.b.M_ChineseMonthNames[this.NlSearch.Month]+"\u6708 "+u.b.M_DayNames[this.NlSearch.Date],this.NlSearch.Result=null)}},{key:"ngOnInit",value:function(){var e=new Date(Date.now());this.NlSearch={Year:e.getFullYear(),MonthOptions:u.b.M_ChineseMonthNames,DateOptions:u.b.M_DayNames,Month:0,Date:0,Leap:!1,Result:null,ResultTX:""}}},{key:"Year",get:function(){return this.year},set:function(e){this.year=e}},{key:"CurrentYear",get:function(){return new Date(Date.now()).getFullYear()}}]),e}()).\u0275fac=function(e){return new(e||d)(s.Zb(o.db))},d.\u0275cmp=s.Tb({type:d,selectors:[["app-searchnoli"]],decls:31,vars:8,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["position","floating"],["type","number","max","2010","min","1640",3,"placeholder","ngModel","ngModelChange"],["placeholder","\u6b63\u6708","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u521d\u4e00","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["slot","start",3,"click"],[1,"ion-text-wrap"],[3,"value"]],template:function(e,t){1&e&&(s.ec(0,"ion-header"),s.ec(1,"ion-toolbar",0),s.ec(2,"ion-buttons",1),s.ec(3,"ion-button",2),s.mc("click",(function(){return t.close()})),s.ac(4,"ion-icon",3),s.dc(),s.dc(),s.ec(5,"ion-title"),s.Hc(6,"\u519c\u5386\u8f6c\u516c\u5386"),s.dc(),s.dc(),s.dc(),s.ec(7,"ion-content"),s.ec(8,"ion-item"),s.ec(9,"ion-label",4),s.Hc(10,"\u5e74\u4efd(1640 ~ 20100)"),s.dc(),s.ec(11,"ion-input",5),s.mc("ngModelChange",(function(e){return t.NlSearch.Year=e})),s.dc(),s.dc(),s.ec(12,"ion-item"),s.ec(13,"ion-label"),s.Hc(14,"\u6708\u4efd"),s.dc(),s.ec(15,"ion-select",6),s.mc("ngModelChange",(function(e){return t.NlSearch.Month=e})),s.Fc(16,h,2,2,"ion-select-option",7),s.dc(),s.dc(),s.ec(17,"ion-item"),s.ec(18,"ion-label"),s.Hc(19,"\u65e5\u5b50"),s.dc(),s.ec(20,"ion-select",8),s.mc("ngModelChange",(function(e){return t.NlSearch.Date=e})),s.Fc(21,l,2,2,"ion-select-option",7),s.dc(),s.dc(),s.ec(22,"ion-item"),s.ec(23,"ion-label"),s.Hc(24,"\u95f0\u6708"),s.dc(),s.ec(25,"ion-toggle",9),s.mc("ngModelChange",(function(e){return t.NlSearch.Leap=e})),s.dc(),s.dc(),s.ec(26,"ion-item"),s.ec(27,"ion-button",10),s.mc("click",(function(){return t.searchNL()})),s.Hc(28,"\u8ba1\u7b97"),s.dc(),s.ec(29,"ion-label",11),s.Hc(30),s.dc(),s.dc(),s.dc()),2&e&&(s.Nb(11),s.uc("placeholder",t.CurrentYear)("ngModel",t.NlSearch.Year),s.Nb(4),s.uc("ngModel",t.NlSearch.Month),s.Nb(1),s.uc("ngForOf",t.NlSearch.MonthOptions),s.Nb(4),s.uc("ngModel",t.NlSearch.Date),s.Nb(1),s.uc("ngForOf",t.NlSearch.DateOptions),s.Nb(4),s.uc("ngModel",t.NlSearch.Leap),s.Nb(5),s.Jc("\u67e5\u8be2\u7ed3\u679c\uff1a",t.NlSearch.ResultTX,""))},directives:[o.t,o.Z,o.j,o.i,o.u,o.X,o.n,o.x,o.D,o.w,o.eb,c.f,c.g,o.Q,o.ib,i.i,o.Y,o.c,o.R],styles:[""]}),d);function f(e,t){if(1&e){var n=s.fc();s.ec(0,"div",22),s.mc("click",(function(){s.Ac(n);var e=t.$implicit;return s.pc(2).changeDate(e)})),s.ec(1,"div"),s.Hc(2),s.dc(),s.ec(3,"div"),s.Hc(4),s.dc(),s.dc()}if(2&e){var i=t.$implicit,c=s.pc(2);s.Qb("xmonth",i.Month!=c.Month)("active",i.Date==c.Date&&i.Month==c.Month),s.Nb(2),s.Ic(i.Display),s.Nb(2),s.Ic(i.DisplayChi)}}function b(e,t){if(1&e&&(s.ec(0,"div",7),s.Fc(1,f,5,6,"div",21),s.dc()),2&e){var n=t.$implicit;s.Nb(1),s.uc("ngForOf",n.Dates)}}var p,m=((p=function(){function e(t){_classCallCheck(this,e),this.modalController=t,this.Weeks=[],this.searchModel=!1,this.inited=!1}return _createClass(e,[{key:"calcFirstDayInCalendarTable",value:function(e,t){var n=new Date(e,t-1,1),i=n.getDay();return i=0==i?7:i,u.b.addDays(-1*i,n)}},{key:"showModal",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:g});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"initWeeks",value:function(e,t,n){for(var i=this.calcFirstDayInCalendarTable(e,t),c=[],a=0;a<6;a++){var o=new v;c.push(o);for(var s=0;s<7;s++){var r=new u.a(i);o.Dates.push(r),i=u.b.addDays(1,i),r.Month==t&&r.Date==n&&(this.TyDate=r)}}this.Weeks=c,this.Month=t,this.Date=n,this.Year=e;var h=new Date(e,t-1,n);this.SelectedDate=h.toDatabaseStr()}},{key:"initDetail",value:function(){var e=this.tyDate.JianChu;this.Good=e.Good,this.Bad=e.Bad,this.Jianchu=e.Titel+": "+e.Mean;var t="";t+=!0===this.tyDate.IsSuiPo?" \u5c81\u7834":"",t+=!0===this.tyDate.IsYuePo?" \u6708\u7834":"",t+=!0===this.tyDate.IsShangSuo?" \u4e0a\u6714":"",t+=!0===this.tyDate.IsYangGong13?" \u6768\u516c\u5341\u4e09\u5fcc":"",this.BadDay=t.trim()}},{key:"changeDate",value:function(e){var t=new Date(Date.now()),n=e?e.Year:t.getFullYear(),i=e?e.Month:t.getMonth()+1,c=e?e.Date:t.getDate();i==this.Month&&e?(this.Date=c,this.TyDate=e,this.SelectedDate=e.date.toDatabaseStr()):this.initWeeks(n,i,c)}},{key:"ngOnInit",value:function(){var e=new Date(Date.now());this.initWeeks(e.getFullYear(),e.getMonth()+1,e.getDate()),this.inited=!0}},{key:"DateGanZhi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.GZmonth,"\u6708 ").concat(this.tyDate.GZdate,"\u65e5")}},{key:"NongLi",get:function(){return"".concat(this.tyDate.GZyear,"\u5e74 ").concat(this.tyDate.NLleap).concat(this.tyDate.NLmonth,"\u6708 ").concat(this.tyDate.NLdate,"\u65e5")}},{key:"SelectedDate",get:function(){return this.selectedDate},set:function(e){if(!1!==this.inited&&""!==e){this.selectedDate=e;var t=new Date(Date.parse(e));t.getFullYear()===this.Year&&t.getMonth()+1===this.Month&&t.getDate()===this.Date||this.initWeeks(t.getFullYear(),t.getMonth()+1,t.getDate())}}},{key:"TyDate",get:function(){return this.tyDate},set:function(e){this.tyDate=e,this.initDetail()}}]),e}()).\u0275fac=function(e){return new(e||p)(s.Zb(o.db))},p.\u0275cmp=s.Tb({type:p,selectors:[["app-wannianli"]],decls:73,vars:10,consts:[["slot","start"],["slot","end"],[3,"click"],["fixed",""],[1,"ui","attached","top","segment"],[1,"ui","top","attached","blue","large","label"],[1,"ui","attached","segment"],[1,"ui","equal","width","grid"],[1,"weekend","th","cell","column"],[1,"weekday","th","cell","column"],["class","ui equal width grid",4,"ngFor","ngForOf"],["side","end"],["color","primary"],["slot","start","color","primary",1,"ion-no-padding"],["color","secondary"],["slot","start","color","warning",1,"ion-no-padding"],["color","warning"],["side","end",1,"ion-text-wrap"],[3,"hidden"],["slot","start","color","danger",1,"ion-no-padding"],["color","secondary",1,"ion-text-wrap"],["class","cell column month td",3,"xmonth","active","click",4,"ngFor","ngForOf"],[1,"cell","column","month","td",3,"click"]],template:function(e,t){1&e&&(s.ec(0,"ion-header"),s.ec(1,"ion-toolbar"),s.ec(2,"ion-buttons",0),s.ac(3,"ion-menu-button"),s.dc(),s.ec(4,"ion-buttons",1),s.ec(5,"ion-button",2),s.mc("click",(function(){return t.showModal()})),s.Hc(6,"\u519c\u5386\u53cd\u67e5"),s.dc(),s.dc(),s.ec(7,"ion-title"),s.Hc(8,"\u5e74\u5386"),s.dc(),s.dc(),s.dc(),s.ec(9,"ion-content"),s.ec(10,"ion-grid",3),s.ec(11,"div",4),s.ec(12,"div",5),s.Hc(13),s.ac(14,"br"),s.Hc(15,"\xa0 "),s.dc(),s.dc(),s.ec(16,"div",6),s.ec(17,"div",7),s.ec(18,"div",8),s.Hc(19,"\u661f\u671f\u5929"),s.ac(20,"br"),s.Hc(21,"\xa0"),s.dc(),s.ec(22,"div",9),s.Hc(23,"\u661f\u671f\u4e00"),s.ac(24,"div"),s.dc(),s.ec(25,"div",9),s.Hc(26,"\u661f\u671f\u4e8c"),s.ac(27,"div"),s.dc(),s.ec(28,"div",9),s.Hc(29,"\u661f\u671f\u4e09"),s.ac(30,"div"),s.dc(),s.ec(31,"div",9),s.Hc(32,"\u661f\u671f\u56db"),s.ac(33,"div"),s.dc(),s.ec(34,"div",9),s.Hc(35,"\u661f\u671f\u4e94"),s.ac(36,"div"),s.dc(),s.ec(37,"div",8),s.Hc(38,"\u661f\u671f\u516d"),s.ac(39,"div"),s.dc(),s.dc(),s.dc(),s.ec(40,"div",6),s.Fc(41,b,2,1,"div",10),s.dc(),s.dc(),s.ec(42,"ion-list"),s.ec(43,"ion-item"),s.ec(44,"ion-label",11),s.ec(45,"ion-text",12),s.ec(46,"p"),s.Hc(47),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(48,"ion-item"),s.ec(49,"ion-note",13),s.ec(50,"ion-text",12),s.ec(51,"h3"),s.Hc(52,"\u5b9c"),s.dc(),s.dc(),s.dc(),s.ec(53,"ion-label",11),s.ec(54,"ion-text",14),s.ec(55,"p"),s.Hc(56),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(57,"ion-item"),s.ec(58,"ion-note",15),s.ec(59,"ion-text",16),s.ec(60,"h3"),s.Hc(61,"\u5fcc"),s.dc(),s.dc(),s.dc(),s.ec(62,"ion-label",17),s.ec(63,"ion-text",14),s.ec(64,"p"),s.Hc(65),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(66,"ion-item",18),s.ec(67,"ion-note",19),s.Hc(68),s.dc(),s.ec(69,"ion-label"),s.ec(70,"ion-text",20),s.ec(71,"p"),s.Hc(72,"\u51e1\u5c81\u7834, \u6708\u7834, \u4e0a\u6714, \u6768\u516c\u5341\u4e09\u5fcc\u7b49\u8bf8\u65e5, \u5927\u4e8b\u4e0d\u5b9c!"),s.dc(),s.dc(),s.dc(),s.dc(),s.dc(),s.dc()),2&e&&(s.Nb(13),s.Lc(" ",t.Year,"\u5e74",t.Month,"\u6708",t.Date,"\u65e5\xa0--\xa0 ",t.DateGanZhi," "),s.Nb(28),s.uc("ngForOf",t.Weeks),s.Nb(6),s.Jc("\u519c\u5386\uff1a",t.NongLi,""),s.Nb(9),s.Ic(t.Jianchu),s.Nb(9),s.Ic(t.Bad),s.Nb(1),s.uc("hidden",""==t.BadDay),s.Nb(2),s.Jc(" ",t.BadDay," "))},directives:[o.t,o.Z,o.j,o.H,o.i,o.X,o.n,o.s,i.i,o.E,o.x,o.D,o.U,o.J],styles:[".column.th.cell[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.th.cell.weekday[_ngcontent-%COMP%]{background-color:#cdc8b1}.th.cell.weekend[_ngcontent-%COMP%]{background-color:#d2691e}.month.column.cell.td[_ngcontent-%COMP%]{text-align:center;padding:0;border:1px solid #a9a9a9}.column.cell.month[_ngcontent-%COMP%]{background-color:#eee9e9;color:#000}.column.cell.xmonth[_ngcontent-%COMP%]{background-color:snow;color:grey}.column.cell.active[_ngcontent-%COMP%]{background-color:#6495ed;color:#000}ion-grid[_ngcontent-%COMP%]{--ion-grid-width:540px}"]}),p),v=function e(){_classCallCheck(this,e),this.Dates=[]},y=n("LvB5"),w=n("B8lH"),D=n("LTmD"),k=n("HULg"),C=n("ylIl"),x=n("mo90");function S(e,t){if(1&e&&s.ac(0,"app-guaview",10),2&e){var n=s.pc();s.uc("Config",n.Config)("GuaText",n.Gua)}}n("0eVs");var N,M=((N=function(){function e(t,n,i){_classCallCheck(this,e),this.modalController=t,this.setting=n,this.dbservice=i,this.smallSymbol=!1}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"SaveGua",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,console.log("select node",i),i&&i.nodeid&&this.dbservice.CreateRecord(i.nodeid,this.gua.question,8,JSON.stringify(this.gua));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"showPaiguaModal",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:y.a});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,this.gua=i.result?i.result:null;case 10:case"end":return e.stop()}}),e,this)})))}},{key:"showSettingModal",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:w.a,componentProps:{SettingComponent:"gua",Config:Object(D.b)(this.Config)}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,Object(D.c)({},i.result)||!Object(D.c)(this.Config,i.result)&&(this.Config=Object(D.b)(i.result),this.guaview&&this.guaview.Reflash(this.Config));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"ChangSymbol",value:function(){var e=Object(D.b)(this.config);!1===this.smallSymbol&&(e.shensha=4,e.symbol=1),this.smallSymbol=!this.smallSymbol,this.guaview.Reflash(e)}},{key:"Config",get:function(){return this.config||(this.config=Object(D.b)(this.setting.Gua)),this.config},set:function(e){e&&(this.config=e)}},{key:"Gua",get:function(){return this.gua}},{key:"HasGua",get:function(){return!!this.Gua}}]),e}()).\u0275fac=function(e){return new(e||N)(s.Zb(o.db),s.Zb(D.a),s.Zb(k.a))},N.\u0275cmp=s.Tb({type:N,selectors:[["app-paigua"]],viewQuery:function(e,t){var n;1&e&&s.Mc(C.a,!0),2&e&&s.wc(n=s.nc())&&(t.guaview=n.first)},decls:17,vars:3,consts:[["slot","start"],[3,"hidden","click"],["name","md-options"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],[3,"Config","GuaText",4,"ngIf"],[3,"Config","GuaText"]],template:function(e,t){1&e&&(s.ec(0,"ion-header"),s.ec(1,"ion-toolbar"),s.ec(2,"ion-buttons",0),s.ac(3,"ion-menu-button"),s.ec(4,"ion-button",1),s.mc("click",(function(){return t.ChangSymbol()})),s.ac(5,"ion-icon",2),s.dc(),s.dc(),s.ec(6,"ion-title"),s.Hc(7,"\u516d\u723b"),s.dc(),s.ec(8,"ion-buttons",3),s.ec(9,"ion-button",4),s.mc("click",(function(){return t.showPaiguaModal()})),s.ac(10,"ion-icon",5),s.dc(),s.ec(11,"ion-button",4),s.mc("click",(function(){return t.showSettingModal()})),s.ac(12,"ion-icon",6),s.dc(),s.ec(13,"ion-button",7),s.mc("click",(function(){return t.SaveGua()})),s.ac(14,"ion-icon",8),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(15,"ion-content"),s.Fc(16,S,1,2,"app-guaview",9),s.dc()),2&e&&(s.Nb(4),s.uc("hidden",!t.HasGua),s.Nb(9),s.uc("disabled",!t.HasGua),s.Nb(3),s.uc("ngIf",t.HasGua))},directives:[o.t,o.Z,o.j,o.H,o.i,o.u,o.X,o.n,i.j,C.a],styles:[""]}),N),Y=n("SRjL"),I=n("gTpY");function H(e,t){if(1&e&&(s.ec(0,"ion-text",11),s.Hc(1),s.dc()),2&e){var n=s.pc();s.Nb(1),s.Ic(n.Slogen)}}function T(e,t){if(1&e&&s.ac(0,"app-baziview",12),2&e){var n=s.pc();s.uc("Config",n.Config)("BaziText",n.Bazi)}}var O,z=((O=function(){function e(t,n,i){_classCallCheck(this,e),this.modalController=t,this.dbservice=n,this.setting=i,this.Slogen=""}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"SaveBazi",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:x.a,componentProps:{Titel:"\u9009\u62e9\u65b0\u76ee\u5f55",SelectDocument:!0,NodeID:""}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,(i=n.data)&&i.nodeid&&this.dbservice.CreateRecord(i.nodeid,this.bazi.person,16,JSON.stringify(this.bazi));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"showPaipanModal",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:Y.a});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,this.bazi=i.result?i.result:null;case 10:case"end":return e.stop()}}),e,this)})))}},{key:"showSettingModal",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:w.a,componentProps:{SettingComponent:"bazi",Config:Object(D.b)(this.Config)}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,i=n.data,Object(D.c)({},i.result)||!Object(D.c)(this.Config,i.result)&&(this.Config=Object(D.b)(i.result),this.baziview&&this.baziview.Reflash(this.Config));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"typingSlogen",value:function(){var e=this;"\u7269\u683c\u800c\u540e\u77e5\u81f3\uff0c\u77e5\u81f3\u800c\u540e\u610f\u8bda\uff0c\u610f\u8bda\u800c\u540e\u5fc3\u6b63\uff0c\u5fc3\u6b63\u800c\u540e\u8eab\u4fee\uff0c\u8eab\u4fee\u800c\u540e\u5bb6\u9f50\uff0c\u5bb6\u9f50\u800c\u540e\u56fd\u6cbb\uff0c\u56fd\u6cbb\u800c\u540e\u5929\u4e0b\u5e73\u3002".split("").forEach((function(t){setTimeout((function(){e.Slogen+=t}),1e3)}))}},{key:"Config",get:function(){return this.config||(this.config=Object(D.b)(this.setting.Bazi)),this.config},set:function(e){e&&(this.config=e)}},{key:"Bazi",get:function(){return this.bazi}},{key:"HasBazi",get:function(){return!!this.bazi}}]),e}()).\u0275fac=function(e){return new(e||O)(s.Zb(o.db),s.Zb(k.a),s.Zb(D.a))},O.\u0275cmp=s.Tb({type:O,selectors:[["app-paibazi"]],viewQuery:function(e,t){var n;1&e&&s.Mc(I.a,!0),2&e&&s.wc(n=s.nc())&&(t.baziview=n.first)},decls:16,vars:3,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","add-circle-outline"],["slot","icon-only","name","settings"],[3,"disabled","click"],["slot","icon-only","name","save"],[2,"margin-bottom","10px"],["class","slogen",4,"ngIf"],[3,"Config","BaziText",4,"ngIf"],[1,"slogen"],[3,"Config","BaziText"]],template:function(e,t){1&e&&(s.ec(0,"ion-header"),s.ec(1,"ion-toolbar",0),s.ec(2,"ion-buttons",1),s.ac(3,"ion-menu-button"),s.dc(),s.ec(4,"ion-title"),s.Hc(5,"\u516b\u5b57"),s.dc(),s.ec(6,"ion-buttons",2),s.ec(7,"ion-button",3),s.mc("click",(function(){return t.showPaipanModal()})),s.ac(8,"ion-icon",4),s.dc(),s.ec(9,"ion-button",3),s.mc("click",(function(){return t.showSettingModal()})),s.ac(10,"ion-icon",5),s.dc(),s.ec(11,"ion-button",6),s.mc("click",(function(){return t.SaveBazi()})),s.ac(12,"ion-icon",7),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(13,"ion-content",8),s.Fc(14,H,2,1,"ion-text",9),s.Fc(15,T,1,2,"app-baziview",10),s.dc()),2&e&&(s.Nb(11),s.uc("disabled",!t.HasBazi),s.Nb(3),s.uc("ngIf",!t.HasBazi),s.Nb(1),s.uc("ngIf",t.HasBazi))},directives:[o.t,o.Z,o.j,o.H,o.X,o.i,o.u,o.n,i.j,o.U,I.a],styles:[""]}),O);function B(e,t){1&e&&s.ac(0,"app-wannianli")}function G(e,t){1&e&&s.ac(0,"app-paigua")}function F(e,t){1&e&&s.ac(0,"app-paibazi")}var _,j,Z,R,W=((_=function(){function e(t){_classCallCheck(this,e),this.router=t,this.Child="\u4e07\u5e74\u5386"}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||_)(s.Zb(a.g))},_.\u0275cmp=s.Tb({type:_,selectors:[["app-paipan"]],decls:14,vars:3,consts:[[4,"ngIf"],["slot","start"],[3,"click"],["slot","end"],[2,"margin-right","10px",3,"click"]],template:function(e,t){1&e&&(s.ec(0,"ion-content"),s.Fc(1,B,1,0,"app-wannianli",0),s.Fc(2,G,1,0,"app-paigua",0),s.Fc(3,F,1,0,"app-paibazi",0),s.dc(),s.ec(4,"ion-footer"),s.ec(5,"ion-toolbar"),s.ec(6,"ion-buttons",1),s.ec(7,"ion-button",2),s.mc("click",(function(){return t.Child="\u4e07\u5e74\u5386"})),s.Hc(8,"\u4e07\u5e74\u5386"),s.dc(),s.dc(),s.ec(9,"ion-buttons",3),s.ec(10,"ion-button",4),s.mc("click",(function(){return t.Child="\u516d\u723b"})),s.Hc(11,"\u516d\u723b"),s.dc(),s.ec(12,"ion-button",2),s.mc("click",(function(){return t.Child="\u516b\u5b57"})),s.Hc(13,"\u516b\u5b57"),s.dc(),s.dc(),s.dc(),s.dc()),2&e&&(s.Nb(1),s.uc("ngIf","\u4e07\u5e74\u5386"===t.Child),s.Nb(1),s.uc("ngIf","\u516d\u723b"===t.Child),s.Nb(1),s.uc("ngIf","\u516b\u5b57"===t.Child))},directives:[o.n,i.j,o.r,o.Z,o.j,o.i,m,M,z],styles:[""]}),_),P=n("Gfuc"),X=n("KPWP"),L=n("n7QD"),J=((j=function e(){_classCallCheck(this,e)}).\u0275mod=s.Xb({type:j}),j.\u0275inj=s.Wb({factory:function(e){return new(e||j)},imports:[[P.a,X.a,L.a,i.b,c.c,o.ab]]}),j),Q=n("9UMr"),q=n("uEAi"),A=((R=function e(){_classCallCheck(this,e)}).\u0275mod=s.Xb({type:R}),R.\u0275inj=s.Wb({factory:function(e){return new(e||R)},imports:[[Q.a,X.a,q.a,i.b,c.c,o.ab]]}),R),E=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=s.Xb({type:Z}),Z.\u0275inj=s.Wb({factory:function(e){return new(e||Z)},imports:[[i.b,c.c,o.ab]]}),Z);n.d(t,"PaipanPageModule",(function(){return K}));var U,$=[{path:"",component:W}],K=((U=function e(){_classCallCheck(this,e)}).\u0275mod=s.Xb({type:U}),U.\u0275inj=s.Wb({factory:function(e){return new(e||U)},imports:[[i.b,c.c,o.ab,J,A,E,a.i.forChild($)]]}),U)}}]);