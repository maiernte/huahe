function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var c=0;c<n.length;c++){var t=n[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,c){return n&&_defineProperties(e.prototype,n),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{LvB5:function(e,n,c){"use strict";c.d(n,"a",(function(){return N}));var t=c("c7TG"),i=c("2QJI"),o=c("pNW8"),a=(c("0eVs"),c("fXoL")),l=c("3Pt+"),d=c("ofXK");function s(e,n){if(1&e){var c=a.ec();a.dc(0,"ion-item"),a.dc(1,"ion-label"),a.Jc(2,"\u516c\u5386"),a.cc(),a.dc(3,"ion-datetime",11),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().SelectedDate=e})),a.cc(),a.dc(4,"ion-datetime",12),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().SelectedTime=e})),a.cc(),a.cc()}if(2&e){var t=a.oc();a.Nb(3),a.vc("ngModel",t.SelectedDate),a.Nb(1),a.vc("ngModel",t.SelectedTime)}}function r(e,n){if(1&e&&(a.dc(0,"ion-select-option",7),a.Jc(1),a.cc()),2&e){var c=n.$implicit;a.vc("value",c),a.Nb(1),a.Lc("",c,"\u6708")}}function u(e,n){if(1&e&&(a.dc(0,"ion-select-option",7),a.Jc(1),a.cc()),2&e){var c=n.$implicit;a.vc("value",c),a.Nb(1),a.Lc("",c,"\u65e5")}}function g(e,n){if(1&e){var c=a.ec();a.dc(0,"ion-item"),a.dc(1,"ion-label"),a.Jc(2,"\u5e72\u652f"),a.cc(),a.dc(3,"ion-select",13),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().Yue=e})),a.Hc(4,r,2,2,"ion-select-option",14),a.cc(),a.dc(5,"ion-select",15),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().Ri=e})),a.Hc(6,u,2,2,"ion-select-option",14),a.cc(),a.cc()}if(2&e){var t=a.oc();a.Nb(3),a.vc("ngModel",t.Yue),a.Nb(1),a.vc("ngForOf",t.JaziFull),a.Nb(1),a.vc("ngModel",t.Ri),a.Nb(1),a.vc("ngForOf",t.Jazi60)}}function m(e,n){if(1&e&&(a.dc(0,"ion-select-option",19),a.Jc(1),a.cc()),2&e){var c=n.$implicit;a.vc("value",c.name)("disabled",c.divider),a.Nb(1),a.Kc(c.name)}}function h(e,n){if(1&e&&(a.dc(0,"ion-select-option",19),a.Jc(1),a.cc()),2&e){var c=n.$implicit;a.vc("value",c.name)("disabled",c.divider),a.Nb(1),a.Kc(c.name)}}function f(e,n){if(1&e){var c=a.ec();a.dc(0,"ion-item"),a.dc(1,"ion-label"),a.Jc(2,"\u5366\u540d"),a.cc(),a.dc(3,"ion-select",16),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().Ben=e})),a.Hc(4,m,2,3,"ion-select-option",17),a.cc(),a.dc(5,"ion-select",18),a.lc("ngModelChange",(function(e){return a.Cc(c),a.oc().Bian=e})),a.Hc(6,h,2,3,"ion-select-option",17),a.cc(),a.cc()}if(2&e){var t=a.oc();a.Nb(3),a.vc("ngModel",t.Ben),a.Nb(1),a.vc("ngForOf",t.GuaNames),a.Nb(1),a.vc("ngModel",t.Bian),a.Nb(1),a.vc("ngForOf",t.GuaNames)}}function v(e,n){if(1&e){var c=a.ec();a.dc(0,"ion-text",22),a.lc("click",(function(){a.Cc(c);var e=a.oc().$implicit;return e.value=(e.value+1)%4})),a.Jc(1),a.cc()}if(2&e){var t=a.oc().$implicit,i=a.oc(2);a.Nb(1),a.Mc(" ",i.YaoSymbols[t.value].sym," ",i.YaoSymbols[t.value].name," ")}}function M(e,n){if(1&e){var c=a.ec();a.dc(0,"ion-text",22),a.lc("click",(function(){return a.Cc(c),a.oc().$implicit.value=0})),a.Jc(1," \u8bf7\u70b9\u51fb "),a.cc()}}function b(e,n){if(1&e&&(a.dc(0,"ion-item"),a.dc(1,"ion-label"),a.dc(2,"ion-text"),a.Jc(3),a.cc(),a.cc(),a.Hc(4,v,2,2,"ion-text",21),a.Hc(5,M,2,0,"ion-text",21),a.cc()),2&e){var c=n.$implicit;a.Nb(3),a.Kc(c.name),a.Nb(1),a.vc("ngIf",c.value>-1),a.Nb(1),a.vc("ngIf",-1===c.value)}}function p(e,n){if(1&e&&(a.dc(0,"ion-list"),a.Hc(1,b,6,3,"ion-item",20),a.cc()),2&e){var c=a.oc();a.Nb(1),a.vc("ngForOf",c.SelectYaos)}}function C(e,n){1&e&&(a.dc(0,"ion-item"),a.dc(1,"ion-label"),a.dc(2,"ion-text"),a.Jc(3,"\u8bf7\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\uff0c\u5373\u53ef\u5f97\u5230\u968f\u673a\u5366\u4f8b\u3002"),a.cc(),a.cc(),a.cc())}var N=function(){var e=function(){function e(n){_classCallCheck(this,e),this.modalCtrl=n,this.PaiguaModels={Name:"guaname",Yao:"guayao",Random:"random"},this.TimeModel=!0,this.GuanameModel=this.PaiguaModels.Name,this.YaoSymbols=[{sym:"\u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e",name:"\u5c11\u9634"},{sym:"\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e",name:"\u5c11\u9633"},{sym:"X\u25fc\ufe0e\u25fb\ufe0e\u25fc\ufe0e",name:"\u8001\u9634"},{sym:"O\u25fc\ufe0e\u25fc\ufe0e\u25fc\ufe0e",name:"\u8001\u9633"}],this.SelectYaos=[{name:"\u4e0a\u723b",value:-1},{name:"\u4e94\u723b",value:-1},{name:"\u56db\u723b",value:-1},{name:"\u4e09\u723b",value:-1},{name:"\u4e8c\u723b",value:-1},{name:"\u521d\u723b",value:-1}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.selecteddate=new Date(Date.now()),this.Jazi60=i.b.GanZhiNames,this.JaziFull=Object(i.d)().concat(this.Jazi60),this.initGuaNames()}},{key:"initGuaNames",value:function(){this.GuaNames=[];for(var e=0;e<8;e++){var n=Object(o.b)(8*e+e);this.GuaNames.push({name:"\u4e0a\u5366 - "+n.Shang.Name,Items:[],divider:!0});for(var c=0;c<8;c++){var t=Object(o.b)(8*e+c);this.GuaNames.push({name:t.Name,divider:!1})}}}},{key:"onOK",value:function(){if(this.GuanameModel!==this.PaiguaModels.Random){var e=new Date(this.SelectedTime||Date.now()),n=this.SelectedTime?"".concat(e.getHours(),":").concat(e.getMinutes(),":00"):"00:00:00",c=new Date(this.SelectedDate||Date.now()).toChinaStr(),t=this.GuanameModel===this.PaiguaModels.Name,i=t?-1:parseInt(this.SelectYaos.select((function(e){return e.value%2})).join(""),2),o=t?-1:parseInt(this.SelectYaos.select((function(e){return Math.floor(e.value+e.value/2)%2})).join(""),2),a={question:this.Question||"\u95ee\u5ff5",time:this.TimeModel?c+" "+n:[this.Yue||this.Jazi60[0],this.Ri||this.Jazi60[0]],ben:t?this.Ben||this.GuaNames[1].name:i.toString(),bian:t?this.Bian||this.GuaNames[1].name:o.toString()};this.close(a)}else this.onRandom()}},{key:"onRandom",value:function(){for(var e=new Date(Date.now()),n=[],c=0;c<6;c++){var t=Math.floor(8*Math.random()),i=t>=3&&t<6?1:0;i=6===t?2:i,i=7===t?3:i,n.push(i)}var o=n.select((function(e){return e%2})).join(""),a=n.select((function(e){return e>1?(e+1)%2:e})).join(""),l={question:this.Question||"\u95ee\u5ff5",time:e.toChinaStr()+" "+"".concat(e.getHours(),":").concat(e.getMinutes(),":00"),ben:parseInt(o,2).toString(),bian:parseInt(a,2).toString()};this.close(l)}},{key:"onCancel",value:function(){this.close(null)}},{key:"close",value:function(e){this.modalCtrl.dismiss({result:e})}},{key:"Yue",get:function(){return this.yue},set:function(e){this.yue=e}},{key:"Ri",get:function(){return this.ri},set:function(e){this.ri=e}},{key:"Question",get:function(){return this.question},set:function(e){this.question=e}},{key:"SelectedDate",get:function(){return this.selecteddate},set:function(e){this.selecteddate=e}},{key:"EnablePaigua",get:function(){return this.GuanameModel===this.PaiguaModels.Name?!!this.Ben&&!!this.Bian:this.GuanameModel!==this.PaiguaModels.Name||void 0===this.SelectYaos.find((function(e){return e.value<0}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Yb(t.ab))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-paiguadialog"]],decls:38,vars:13,consts:[["color","primary"],["required","","type","text","placeholder","\u8d77\u5366\u95ee\u5ff5\uff1a",3,"ngModel","ngModelChange"],[1,"ion-no-margin","ion-no-padding"],[2,"margin-right","10px",3,"hidden"],[1,"ion-no-margin","ion-no-padding",3,"ngModel","ngModelChange"],[4,"ngIf"],["slot","end",3,"ngModel","ngModelChange"],[3,"value"],["size","small",1,"alignleft",3,"click"],["size","small","color","medium",1,"alignright",3,"click"],["lines","none"],["placeholder","\u65e5\u671f","displayFormat","YYYY\u5e74MM\u6708DD\u65e5","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u65f6\u95f4","displayFormat","HH:mm","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u6708\u4ee4","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u65e5\u4ee4","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u672c\u5366","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value","disabled",4,"ngFor","ngForOf"],["placeholder","\u53d8\u5366","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value","disabled"],[4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){1&e&&(a.dc(0,"ion-header"),a.dc(1,"ion-toolbar",0),a.dc(2,"ion-title"),a.Jc(3,"\u6392\u5366"),a.cc(),a.cc(),a.cc(),a.dc(4,"ion-content"),a.dc(5,"ion-item"),a.dc(6,"ion-input",1),a.lc("ngModelChange",(function(e){return n.Question=e})),a.cc(),a.cc(),a.dc(7,"ion-list",2),a.dc(8,"ion-item"),a.dc(9,"ion-label"),a.Jc(10,"\u65f6\u4ee4"),a.cc(),a.dc(11,"ion-text",3),a.Jc(12,"\u516c\u5386"),a.cc(),a.dc(13,"ion-text",3),a.Jc(14,"\u5e72\u652f"),a.cc(),a.dc(15,"ion-toggle",4),a.lc("ngModelChange",(function(e){return n.TimeModel=e})),a.cc(),a.cc(),a.Hc(16,s,5,2,"ion-item",5),a.Hc(17,g,7,4,"ion-item",5),a.cc(),a.dc(18,"ion-list",2),a.dc(19,"ion-item"),a.dc(20,"ion-label"),a.Jc(21,"\u6392\u5366\u65b9\u5f0f"),a.cc(),a.dc(22,"ion-segment",6),a.lc("ngModelChange",(function(e){return n.GuanameModel=e})),a.dc(23,"ion-segment-button",7),a.Jc(24," \u5366\u540d "),a.cc(),a.dc(25,"ion-segment-button",7),a.Jc(26," \u5366\u723b "),a.cc(),a.dc(27,"ion-segment-button",7),a.Jc(28," \u968f\u673a "),a.cc(),a.cc(),a.cc(),a.Hc(29,f,7,4,"ion-item",5),a.Hc(30,p,2,1,"ion-list",5),a.cc(),a.Hc(31,C,4,0,"ion-item",5),a.dc(32,"section"),a.dc(33,"ion-button",8),a.lc("click",(function(){return n.onOK()})),a.Jc(34,"\u786e\u5b9a"),a.cc(),a.dc(35,"ion-button",9),a.lc("click",(function(){return n.onCancel()})),a.Jc(36,"\u53d6\u6d88"),a.cc(),a.cc(),a.Zb(37,"ion-item",10),a.cc()),2&e&&(a.Nb(6),a.vc("ngModel",n.Question),a.Nb(5),a.vc("hidden",!n.TimeModel),a.Nb(2),a.vc("hidden",n.TimeModel),a.Nb(2),a.vc("ngModel",n.TimeModel),a.Nb(1),a.vc("ngIf",n.TimeModel),a.Nb(1),a.vc("ngIf",!n.TimeModel),a.Nb(5),a.vc("ngModel",n.GuanameModel),a.Nb(1),a.vc("value",n.PaiguaModels.Name),a.Nb(2),a.vc("value",n.PaiguaModels.Yao),a.Nb(2),a.vc("value",n.PaiguaModels.Random),a.Nb(2),a.vc("ngIf",n.GuanameModel===n.PaiguaModels.Name),a.Nb(1),a.vc("ngIf",n.GuanameModel===n.PaiguaModels.Yao),a.Nb(1),a.vc("ngIf",n.GuanameModel===n.PaiguaModels.Random))},directives:[t.s,t.W,t.U,t.m,t.w,t.v,t.gb,l.h,l.f,l.g,t.D,t.C,t.S,t.V,t.c,d.j,t.N,t.fb,t.O,t.h,t.n,t.P,d.i,t.Q],styles:["section[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:2.5em}.alignleft[_ngcontent-%COMP%]{float:left;margin-left:10px}.alignright[_ngcontent-%COMP%]{float:right;margin-right:10px}"]}),e}()},SRjL:function(e,n,c){"use strict";c.d(n,"a",(function(){return r}));var t=c("c7TG"),i=c("FiP+"),o=c("fXoL"),a=c("3Pt+"),l=c("ofXK");function d(e,n){if(1&e&&(o.dc(0,"ion-select-option",11),o.Jc(1),o.cc()),2&e){var c=n.$implicit;o.vc("value",c),o.Nb(1),o.Kc(c)}}function s(e,n){if(1&e&&(o.dc(0,"ion-select-option",11),o.Jc(1),o.cc()),2&e){var c=n.$implicit;o.vc("value",c),o.Nb(1),o.Kc(c)}}var r=function(){var e=function(){function e(n){_classCallCheck(this,e),this.modalCtrl=n,this.Male=!0,this.RealTime=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.map=i.a.Maps,this.LandNames=this.map.map((function(e){return e.Name})),this.CityNames=["\u672a\u77e5"]}},{key:"onOK",value:function(){var e=new Date(this.SelectedTime||Date.now()),n=this.SelectedTime?"".concat(e.getHours(),":").concat(e.getMinutes(),":00"):"00:00:00",c=new Date(this.SelectedDate||Date.now()).toChinaStr();this.close({person:this.Person||"\u67d0\u4eba",male:this.Male,time:c+" "+n,place:[this.Land||this.LandNames[0],this.City||this.CityNames[0]],realsuntime:this.RealTime})}},{key:"onCancel",value:function(){this.close(null)}},{key:"close",value:function(e){this.modalCtrl.dismiss({result:e})}},{key:"Land",get:function(){return this.selectedLand},set:function(e){if(e!==this.selectedLand){this.selectedLand=e;var n=this.map.where((function(n){return n.Name===e}))[0];this.CityNames=n.Cities.select((function(e){return e.Name}))}}},{key:"City",get:function(){return this.selectedCity},set:function(e){this.selectedCity=e}}]),e}();return e.\u0275fac=function(n){return new(n||e)(o.Yb(t.ab))},e.\u0275cmp=o.Sb({type:e,selectors:[["app-paibazidialog"]],decls:40,vars:13,consts:[["color","primary"],["required","","type","text","placeholder","\u547d\u4e3b\uff1a",3,"ngModel","ngModelChange"],[3,"hidden"],[3,"ngModel","ngModelChange"],["placeholder","\u65e5\u671f","displayFormat","YYYY\u5e74MM\u6708DD\u65e5","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u65f6\u95f4","displayFormat","HH:mm","cancelText","\u53d6\u6d88","doneText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["placeholder","\u7701/\u76f4\u8f96\u5e02","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","\u5e02/\u533a/\u53bf","cancelText","\u53d6\u6d88","okText","\u786e\u5b9a",3,"ngModel","ngModelChange"],["size","small",1,"alignleft",3,"click"],["size","small","color","medium",1,"alignright",3,"click"],[3,"value"]],template:function(e,n){1&e&&(o.dc(0,"ion-header"),o.dc(1,"ion-toolbar",0),o.dc(2,"ion-title"),o.Jc(3,"\u6392\u516b\u5b57"),o.cc(),o.cc(),o.cc(),o.dc(4,"ion-content"),o.dc(5,"ion-item"),o.dc(6,"ion-input",1),o.lc("ngModelChange",(function(e){return n.Person=e})),o.cc(),o.cc(),o.dc(7,"ion-item"),o.dc(8,"ion-label"),o.Jc(9,"\u6027\u522b"),o.cc(),o.dc(10,"ion-text",2),o.Jc(11,"\u7537"),o.cc(),o.dc(12,"ion-text",2),o.Jc(13,"\u5973"),o.cc(),o.dc(14,"ion-toggle",3),o.lc("ngModelChange",(function(e){return n.Male=e})),o.cc(),o.cc(),o.dc(15,"ion-item"),o.dc(16,"ion-label"),o.Jc(17,"\u51fa\u751f\u65f6\u95f4"),o.cc(),o.dc(18,"ion-datetime",4),o.lc("ngModelChange",(function(e){return n.SelectedDate=e})),o.cc(),o.dc(19,"ion-datetime",5),o.lc("ngModelChange",(function(e){return n.SelectedTime=e})),o.cc(),o.cc(),o.dc(20,"ion-item"),o.dc(21,"ion-label"),o.Jc(22,"\u51fa\u751f\u5730\u70b9"),o.cc(),o.dc(23,"ion-select",6),o.lc("ngModelChange",(function(e){return n.Land=e})),o.Hc(24,d,2,2,"ion-select-option",7),o.cc(),o.dc(25,"ion-select",8),o.lc("ngModelChange",(function(e){return n.City=e})),o.Hc(26,s,2,2,"ion-select-option",7),o.cc(),o.cc(),o.dc(27,"ion-item"),o.dc(28,"ion-label"),o.Jc(29,"\u4f7f\u7528\u771f\u592a\u9633\u65f6"),o.cc(),o.dc(30,"ion-text",2),o.Jc(31,"\u5f00"),o.cc(),o.dc(32,"ion-text",2),o.Jc(33,"\u5173"),o.cc(),o.dc(34,"ion-toggle",3),o.lc("ngModelChange",(function(e){return n.RealTime=e})),o.cc(),o.cc(),o.dc(35,"section"),o.dc(36,"ion-button",9),o.lc("click",(function(){return n.onOK()})),o.Jc(37,"\u786e\u5b9a"),o.cc(),o.dc(38,"ion-button",10),o.lc("click",(function(){return n.onCancel()})),o.Jc(39,"\u53d6\u6d88"),o.cc(),o.cc(),o.cc()),2&e&&(o.Nb(6),o.vc("ngModel",n.Person),o.Nb(4),o.vc("hidden",!n.Male),o.Nb(2),o.vc("hidden",n.Male),o.Nb(2),o.vc("ngModel",n.Male),o.Nb(4),o.vc("ngModel",n.SelectedDate),o.Nb(1),o.vc("ngModel",n.SelectedTime),o.Nb(4),o.vc("ngModel",n.Land),o.Nb(1),o.vc("ngForOf",n.LandNames),o.Nb(1),o.vc("ngModel",n.City),o.Nb(1),o.vc("ngForOf",n.CityNames),o.Nb(4),o.vc("hidden",!n.RealTime),o.Nb(2),o.vc("hidden",n.RealTime),o.Nb(2),o.vc("ngModel",n.RealTime))},directives:[t.s,t.W,t.U,t.m,t.w,t.v,t.gb,a.h,a.f,a.g,t.C,t.S,t.V,t.c,t.n,t.fb,t.P,l.i,t.h,t.Q],styles:["section[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:2.5em}.alignleft[_ngcontent-%COMP%]{float:left;margin-left:10px}.alignright[_ngcontent-%COMP%]{float:right;margin-right:10px}"]}),e}()}}]);