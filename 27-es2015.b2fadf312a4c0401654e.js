(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+cLM":function(t,i,s){"use strict";s.d(i,"a",(function(){return u}));var e=s("2QJI"),n=s("l+bK"),a=s("uq+3"),h=function(t){return t[t.DaYun=0]="DaYun",t[t.LiuNian=1]="LiuNian",t[t.XiaoYun=2]="XiaoYun",t}({});let r=(()=>{class t{constructor(i,s,e,n){this.Start=i,this.GZ=s,this.birthYear=e,this.type=n,this.type===h.DaYun&&(this.end=new Date(this.Start.getTime()+t.tenyear))}get Old(){return this.Start.getFullYear()-this.birthYear}get End(){return this.end}set End(t){this.end=t||this.end}get Year(){return this.Start.getFullYear()}}return t.oneday=864e5,t.oneyear=365.25*t.oneday,t.tenyear=10*t.oneyear,t})();class u{constructor(t,i){this.Birthday=t,this.Gender=i,this.bazi=n.b.calcBazi(this.Birthday.getFullYear(),this.Birthday.getMonth()+1,this.Birthday.getDate(),this.Birthday.getHours(),this.Birthday.getMinutes()),this.bazi.Y.Base=this.bazi.D,this.bazi.M.Base=this.bazi.D,this.bazi.D.Base=this.bazi.D,this.bazi.T.Base=this.bazi.D,this.initShenSha(),this.initDaYun()}get Y(){return this.bazi.Y}get M(){return this.bazi.M}get D(){return this.bazi.D}get T(){return this.bazi.T}get All(){return[this.bazi.Y,this.bazi.M,this.bazi.D,this.bazi.T]}get Direction(){return("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)}get MingGong(){if(this.minggong)return this.minggong;var t=this.M.Zhi.Index+1+this.T.Zhi.Index+1,i=t<14?14-t:26-t;return new e.b([(this.Y.Gan.QiYueGan+((i-=1)-2+12)%12)%10,i])}get TaiYuan(){return new e.b([(this.M.Gan.Index+1)%10,(this.M.Zhi.Index+3)%12])}get WuXings(){if(this.wuxings)return this.wuxings;let t=[0,0,0,0,0];return t[this.Y.Gan.WuXing.Index]+=1,t[this.M.Gan.WuXing.Index]+=1,t[this.D.Gan.WuXing.Index]+=1,t[this.T.Gan.WuXing.Index]+=1,t[this.Y.Zhi.WuXing.Index]+=1,t[this.M.Zhi.WuXing.Index]+=1,t[this.D.Zhi.WuXing.Index]+=1,t[this.T.Zhi.WuXing.Index]+=1,this.wuxings=[{Name:"\u91d1",Num:t[0]},{Name:"\u6c34",Num:t[1]},{Name:"\u6728",Num:t[2]},{Name:"\u706b",Num:t[3]},{Name:"\u571f",Num:t[4]}],this.wuxings}get ShenSha(){return this.shenshas}get DaYun(){return this.dayun}CalcShenSha(t){let i=new Array;for(let s of this.ShenSha)1==s.Is(t)&&i.push(s.Name);return i.join("\u3001")}CalcLiuNian(t,i){let s=new Array;for(var a=t-1984;a<0;)a+=60;a%=60;let u=this.T.Index+(t-this.Birthday.getFullYear()+1)*this.Direction;u=(u+600)%60;for(let o=t;o<=i;o++){let t=new e.b(a);t.Base=this.D,t.ShenSha=this.CalcShenSha(t);let i=new e.b(u);i.Base=this.D,i.ShenSha=this.CalcShenSha(i);let c=n.b.getSolarTerms(o,2)[0],g=new r(c,t,this.Birthday.getFullYear(),h.LiuNian);g.GZ2=i,s.push(g),a+=1,a%=60,u+=1*this.Direction,u=(u+60)%60}return s}equal(t){return this.Gender==t.Gender&&this.Birthday.toString()==t.Birthday.toString()}initShenSha(){this.shenshas=new Array;let t=this.Y.Index,i=this.M.Index,s=this.D.Index,e=this.T.Index;this.shenshas.push(new a.a("\u5c06\u661f",[s])),this.shenshas.push(new a.a("\u7f8a\u5203",[s])),this.shenshas.push(new a.a("\u7984\u795e",[s])),this.shenshas.push(new a.a("\u534e\u76d6",[s])),this.shenshas.push(new a.a("\u6587\u660c",[s])),this.shenshas.push(new a.a("\u5b66\u5802",[s])),this.shenshas.push(new a.a("\u5929\u559c",[i])),this.shenshas.push(new a.a("\u5929\u533b",[i])),this.shenshas.push(new a.a("\u8d35\u4eba",[s])),this.shenshas.push(new a.a("\u9a7f\u9a6c",[t,s])),this.shenshas.push(new a.a("\u6843\u82b1",[t,s])),this.shenshas.push(new a.a("\u707e\u715e",[t,s])),this.shenshas.push(new a.a("\u52ab\u715e",[t,s])),this.shenshas.push(new a.a("\u65ec\u7a7a",[s])),this.shenshas.push(new a.a("\u9b41\u7f61",[t,i,s,e])),this.shenshas.push(new a.a("\u56db\u5e9f",[t,i,s,e])),this.shenshas.push(new a.a("\u5b64\u8fb0\u5be1\u5bbf",[t,i,s,e])),this.shenshas.push(new a.a("\u9634\u5dee\u9633\u9519",[s]));let n=new a.a("\u5929\u7f57\u5730\u7f51",[t,i,s,e]);n.Gender=this.Gender,this.shenshas.push(n)}initDaYun(){this.dayun=new Array;const t=this.qiDaYun(),i=this.Direction,s=(t.getFullYear(),this.Birthday.getFullYear(),new r(this.Birthday,this.M,this.Birthday.getFullYear(),h.DaYun));s.End=t,this.dayun.push(s);for(let n=0;n<10;n++){const s=new e.b((this.M.Index+(n+1)*i+60)%60);s.Base=this.bazi.D;const a=new Date(t.getTime()+315576e6*n),u=new r(a,s,this.Birthday.getFullYear(),h.DaYun);this.dayun.push(u)}}qiDaYun(){var t=n.b.findNextJieQi(this.Birthday,("m"==this.Gender?1:-1)*(this.Y.Zhi.Index%2==0?1:-1)),i=Math.abs(t.getTime()-this.Birthday.getTime())/6e4*2;return new Date(this.Birthday.getTime()+36e5*i)}}},"06W+":function(t,i,s){"use strict";s.r(i);var e=s("ofXK"),n=s("3Pt+"),a=s("tyNb"),h=s("c7TG"),r=s("mrSG"),u=s("gTpY"),o=s("ylIl"),c=s("LTmD"),g=(s("0eVs"),s("fXoL"));function l(t,i){if(1&t&&g.Zb(0,"app-baziview",9),2&t){const t=g.oc();g.vc("Config",t.Config)("BaziText",t.Bazi)}}function b(t,i){if(1&t&&g.Zb(0,"app-guaview",10),2&t){const t=g.oc();g.vc("Config",t.Config)("GuaText",t.Gua)}}function d(t,i){if(1&t&&g.Zb(0,"ion-img",11),2&t){const t=g.oc();g.vc("src",t.Img)}}let f=(()=>{class t{constructor(t,i,s,e){this.settings=t,this.alertController=i,this.route=s,this.location=e,this.smallSymbol=!1,this.Bazi=null,this.Gua=null}ngOnInit(){return Object(r.b)(this,void 0,void 0,(function*(){yield this.settings.WaitInit(),this.guaconfig=Object(c.b)(this.settings.Gua),this.baziconfig=Object(c.b)(this.settings.Bazi),this.route.params.subscribe(t=>{const i=JSON.parse(t.arg);i&&void 0!==i.ben?this.Gua=i:i&&void 0!==i.male?this.Bazi=i:i&&void 0!==i.img&&(this.Img=atob(i.img),console.log("arg",this.Img))})}))}get Config(){return this.HasGua?this.guaconfig:this.HasBazi?this.baziconfig:null}get HasGua(){return!!this.Gua}get HasBazi(){return!!this.Bazi}ChangSymbol(){!1===this.smallSymbol?(this.guaconfig.shensha=4,this.guaconfig.symbol=1,this.baziconfig.shensha=4):(this.guaconfig=Object(c.b)(this.settings.Gua),this.baziconfig=Object(c.b)(this.settings.Bazi)),this.smallSymbol=!this.smallSymbol,this.guaview&&this.guaview.Reflash(this.guaconfig),this.baziview&&this.baziview.Reflash(this.baziconfig)}GoBack(){this.location.back()}presentAlert(t,i,s){return Object(r.b)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:t||"\u9519\u8bef",subHeader:i||"",message:s,buttons:["\u786e\u5b9a"]});yield e.present()}))}}return t.\u0275fac=function(i){return new(i||t)(g.Yb(c.a),g.Yb(h.b),g.Yb(a.a),g.Yb(e.f))},t.\u0275cmp=g.Sb({type:t,selectors:[["app-panfuviewer"]],viewQuery:function(t,i){var s;1&t&&(g.Oc(u.a,!0),g.Oc(o.a,!0)),2&t&&(g.yc(s=g.mc())&&(i.baziview=s.first),g.yc(s=g.mc())&&(i.guaview=s.first))},decls:18,vars:3,consts:[["color","primary"],["slot","start"],["defaulthref","","text","\u8fd4\u56de"],["slot","end"],[3,"click"],["name","md-options"],[3,"Config","BaziText",4,"ngIf"],[3,"Config","GuaText",4,"ngIf"],[3,"src",4,"ngIf"],[3,"Config","BaziText"],[3,"Config","GuaText"],[3,"src"]],template:function(t,i){1&t&&(g.dc(0,"ion-header"),g.dc(1,"ion-toolbar",0),g.dc(2,"ion-buttons",1),g.Zb(3,"ion-back-button",2),g.cc(),g.dc(4,"ion-title"),g.Jc(5,"\u76d8\u7b26"),g.cc(),g.dc(6,"ion-buttons",3),g.dc(7,"ion-button",4),g.lc("click",(function(){return i.ChangSymbol()})),g.Zb(8,"ion-icon",5),g.cc(),g.cc(),g.cc(),g.cc(),g.dc(9,"ion-content"),g.Hc(10,l,1,2,"app-baziview",6),g.Hc(11,b,1,2,"app-guaview",7),g.Hc(12,d,1,1,"ion-img",8),g.cc(),g.dc(13,"ion-footer"),g.dc(14,"ion-toolbar"),g.dc(15,"ion-buttons",3),g.dc(16,"ion-button",4),g.lc("click",(function(){return i.GoBack()})),g.Jc(17,"\u8fd4\u56de"),g.cc(),g.cc(),g.cc(),g.cc()),2&t&&(g.Nb(10),g.vc("ngIf",i.HasBazi),g.Nb(1),g.vc("ngIf",i.HasGua),g.Nb(1),g.vc("ngIf",i.Img))},directives:[h.t,h.Y,h.j,h.f,h.g,h.W,h.i,h.u,h.n,e.j,h.r,u.a,o.a,h.v],styles:[""]}),t})();var w=s("uEAi"),m=s("n7QD");s.d(i,"PanfuviewerPageModule",(function(){return y}));const p=[{path:"",component:f}];let y=(()=>{class t{}return t.\u0275mod=g.Wb({type:t}),t.\u0275inj=g.Vb({factory:function(i){return new(i||t)},imports:[[w.a,m.a,e.b,n.c,h.Z,a.j.forChild(p)]]}),t})()}}]);