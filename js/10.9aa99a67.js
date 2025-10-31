"use strict";(self["webpackChunkmyproject"]=self["webpackChunkmyproject"]||[]).push([[10],{7010:function(e,t,n){n.r(t),n.d(t,{default:function(){return lu}});var i=n(6768),s=n(5130),r=n(4232);const o={class:"mypage-container"},l={key:0},a={class:"card"},c={key:1},h={class:"card"},u={class:"card"},d={key:0,class:"list"},p={key:1},_={key:0,class:"card"},f={key:0},g={key:1},m={key:1};function y(e,t,n,y,v,C){const w=(0,i.g2)("User"),k=(0,i.g2)("Smile"),b=(0,i.g2)("Edit2"),T=(0,i.g2)("PawPrint"),I=(0,i.g2)("FileText"),E=(0,i.g2)("BadgeDollarSign");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("h1",null,[(0,i.bF)(w,{class:"icon"}),t[9]||(t[9]=(0,i.eW)(" 마이페이지"))]),v.user?((0,i.uX)(),(0,i.CE)("div",l,[(0,i.Lk)("div",a,[(0,i.Lk)("h2",null,[(0,i.bF)(k,{class:"icon"}),t[10]||(t[10]=(0,i.eW)(" 내 정보 "))]),v.isEditing?((0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>C.saveChanges&&C.saveChanges(...e))},"저장"),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>C.cancelEditing&&C.cancelEditing(...e))},"취소")])):((0,i.uX)(),(0,i.CE)("button",{key:0,class:"edit-button",title:"프로필 편집",onClick:t[0]||(t[0]=(...e)=>C.startEditing&&C.startEditing(...e))},[(0,i.bF)(b,{class:"edit-icon"}),t[11]||(t[11]=(0,i.eW)(" 편집 "))])),(0,i.Lk)("p",null,[t[12]||(t[12]=(0,i.Lk)("strong",null,"닉네임:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[3]||(t[3]=e=>v.editedUser.nickname=e)},null,512)),[[s.Jo,v.editedUser.nickname]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.nickname),1)],64))]),(0,i.Lk)("p",null,[t[13]||(t[13]=(0,i.Lk)("strong",null,"이메일:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[4]||(t[4]=e=>v.editedUser.email=e)},null,512)),[[s.Jo,v.editedUser.email]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.email),1)],64))]),(0,i.Lk)("p",null,[t[14]||(t[14]=(0,i.Lk)("strong",null,"이름:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[5]||(t[5]=e=>v.editedUser.name=e)},null,512)),[[s.Jo,v.editedUser.name]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.name),1)],64))]),(0,i.Lk)("p",null,[t[15]||(t[15]=(0,i.Lk)("strong",null,"전화번호:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[6]||(t[6]=e=>v.editedUser.phone=e)},null,512)),[[s.Jo,v.editedUser.phone]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.phone),1)],64))]),(0,i.Lk)("p",null,[t[16]||(t[16]=(0,i.Lk)("strong",null,"계좌번호:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[7]||(t[7]=e=>v.editedUser.account=e)},null,512)),[[s.Jo,v.editedUser.account]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.account),1)],64))]),(0,i.Lk)("p",null,[t[17]||(t[17]=(0,i.Lk)("strong",null,"은행:",-1)),v.isEditing?(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{key:0,"onUpdate:modelValue":t[8]||(t[8]=e=>v.editedUser.bank=e)},null,512)),[[s.Jo,v.editedUser.bank]]):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,r.v_)(v.user?.bank),1)],64))])]),(0,i.Lk)("div",h,[(0,i.Lk)("h2",null,[(0,i.bF)(T,{class:"icon"}),t[18]||(t[18]=(0,i.eW)(" 내 반려동물 "))]),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(v.user.pets,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,style:{"margin-bottom":"8px"}},[(0,i.Lk)("strong",null,(0,r.v_)(e.name),1),(0,i.eW)(" ("+(0,r.v_)(e.species)+", "+(0,r.v_)(e.age)+"살) ",1)])))),128))])]),(0,i.Lk)("div",u,[(0,i.Lk)("h2",null,[(0,i.bF)(I,{class:"icon"}),t[19]||(t[19]=(0,i.eW)(" 작성한 게시글 관리 "))]),v.user.posts&&v.user.posts.length>0?((0,i.uX)(),(0,i.CE)("ul",d,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(v.user.posts,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,class:"list-item"},[(0,i.Lk)("strong",null,(0,r.v_)(e.title),1),(0,i.Lk)("span",{class:(0,r.C4)(["status-badge","진행중"===e.status?"ongoing":"completed"]),style:{"margin-left":"12px"}},(0,r.v_)(e.status),3)])))),128))])):((0,i.uX)(),(0,i.CE)("p",p,"작성한 게시글이 없습니다."))]),v.user.reward?((0,i.uX)(),(0,i.CE)("div",_,[(0,i.Lk)("h2",null,[(0,i.bF)(E,{class:"icon"}),t[20]||(t[20]=(0,i.eW)(" 사례금 정보 "))]),(0,i.Lk)("p",null,[t[21]||(t[21]=(0,i.Lk)("strong",null,"사례금 액수:",-1)),(0,i.eW)(" "+(0,r.v_)(v.user.reward.amount.toLocaleString())+" 원",1)]),"지급 완료"===v.user.reward.status?((0,i.uX)(),(0,i.CE)("p",f,[t[22]||(t[22]=(0,i.Lk)("strong",null,"지급 일자:",-1)),(0,i.eW)(" "+(0,r.v_)(v.user.reward.date),1)])):((0,i.uX)(),(0,i.CE)("p",g,[t[23]||(t[23]=(0,i.Lk)("strong",null,"상태:",-1)),(0,i.eW)(" "+(0,r.v_)(v.user.reward.status),1)]))])):(0,i.Q3)("",!0)])):((0,i.uX)(),(0,i.CE)("div",m,t[24]||(t[24]=[(0,i.Lk)("p",null,"사용자 정보를 불러오는 중입니다...",-1)])))])}n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function v(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const C={},w=()=>{},k=()=>!1,b=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),T=Object.assign,I=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},E=Object.prototype.hasOwnProperty,S=(e,t)=>E.call(e,t),x=Array.isArray,N=e=>"[object Map]"===q(e),P=e=>"[object Set]"===q(e),R=e=>"[object RegExp]"===q(e),A=e=>"function"===typeof e,D=e=>"string"===typeof e,F=e=>"symbol"===typeof e,L=e=>null!==e&&"object"===typeof e,M=e=>(L(e)||A(e))&&A(e.then)&&A(e.catch),O=Object.prototype.toString,q=e=>O.call(e),W=e=>q(e).slice(8,-1),U=e=>"[object Object]"===q(e),j=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},V=/-(\w)/g,z=(H((e=>e.replace(V,((e,t)=>t?t.toUpperCase():"")))),/\B([A-Z])/g),Y=(H((e=>e.replace(z,"-$1").toLowerCase())),H((e=>e.charAt(0).toUpperCase()+e.slice(1)))),K=(H((e=>{const t=e?`on${Y(e)}`:"";return t})),(e,t)=>!Object.is(e,t)),B=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)};let $;const G=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function Q(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=D(i)?ee(i):Q(i);if(s)for(const e in s)t[e]=s[e]}return t}if(D(e)||L(e))return e}const X=/;(?![^(]*\))/g,J=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function ee(e){const t={};return e.replace(Z,"").split(X).forEach((e=>{if(e){const n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function te(e){let t="";if(D(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const i=te(e[n]);i&&(t+=i+" ")}else if(L(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}let ne,ie;function se(){return ne}const re=new WeakSet;class oe{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ne&&ne.active&&ne.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,re.has(this)&&(re.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||he(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,be(this),pe(this);const e=ie,t=ve;ie=this,ve=!0;try{return this.fn()}finally{0,_e(this),ie=e,ve=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)me(e);this.deps=this.depsTail=void 0,be(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?re.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fe(this)&&this.run()}get dirty(){return fe(this)}}let le,ae,ce=0;function he(e,t=!1){if(e.flags|=8,t)return e.next=ae,void(ae=e);e.next=le,le=e}function ue(){ce++}function de(){if(--ce>0)return;if(ae){let e=ae;ae=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(le){let n=le;le=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=i}}if(e)throw e}function pe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _e(e){let t,n=e.depsTail,i=n;while(i){const e=i.prevDep;-1===i.version?(i===n&&(n=e),me(i),ye(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=t,e.depsTail=n}function fe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ge(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ge(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===Te)return;if(e.globalVersion=Te,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!fe(e)))return;e.flags|=2;const t=e.dep,n=ie,i=ve;ie=e,ve=!0;try{pe(e);const n=e.fn(e._value);(0===t.version||K(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(s){throw t.version++,s}finally{ie=n,ve=i,_e(e),e.flags&=-3}}function me(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)me(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function ye(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ve=!0;const Ce=[];function we(){Ce.push(ve),ve=!1}function ke(){const e=Ce.pop();ve=void 0===e||e}function be(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=ie;ie=void 0;try{t()}finally{ie=e}}}let Te=0;class Ie{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ee{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!ve||ie===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==ie)t=this.activeLink=new Ie(ie,this),ie.deps?(t.prevDep=ie.depsTail,ie.depsTail.nextDep=t,ie.depsTail=t):ie.deps=ie.depsTail=t,Se(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=ie.depsTail,t.nextDep=void 0,ie.depsTail.nextDep=t,ie.depsTail=t,ie.deps===t&&(ie.deps=e)}return t}trigger(e){this.version++,Te++,this.notify(e)}notify(e){ue();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{de()}}}function Se(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Se(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xe=new WeakMap,Ne=Symbol(""),Pe=Symbol(""),Re=Symbol("");function Ae(e,t,n){if(ve&&ie){let t=xe.get(e);t||xe.set(e,t=new Map);let i=t.get(n);i||(t.set(n,i=new Ee),i.map=t,i.key=n),i.track()}}function De(e,t,n,i,s,r){const o=xe.get(e);if(!o)return void Te++;const l=e=>{e&&e.trigger()};if(ue(),"clear"===t)o.forEach(l);else{const s=x(e),r=s&&j(n);if(s&&"length"===n){const e=Number(i);o.forEach(((t,n)=>{("length"===n||n===Re||!F(n)&&n>=e)&&l(t)}))}else switch((void 0!==n||o.has(void 0))&&l(o.get(n)),r&&l(o.get(Re)),t){case"add":s?r&&l(o.get("length")):(l(o.get(Ne)),N(e)&&l(o.get(Pe)));break;case"delete":s||(l(o.get(Ne)),N(e)&&l(o.get(Pe)));break;case"set":N(e)&&l(o.get(Ne));break}}de()}function Fe(e){const t=yt(e);return t===e?t:(Ae(t,"iterate",Re),gt(e)?t:t.map(vt))}function Le(e){return Ae(e=yt(e),"iterate",Re),e}const Me={__proto__:null,[Symbol.iterator](){return Oe(this,Symbol.iterator,vt)},concat(...e){return Fe(this).concat(...e.map((e=>x(e)?Fe(e):e)))},entries(){return Oe(this,"entries",(e=>(e[1]=vt(e[1]),e)))},every(e,t){return We(this,"every",e,t,void 0,arguments)},filter(e,t){return We(this,"filter",e,t,(e=>e.map(vt)),arguments)},find(e,t){return We(this,"find",e,t,vt,arguments)},findIndex(e,t){return We(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return We(this,"findLast",e,t,vt,arguments)},findLastIndex(e,t){return We(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return We(this,"forEach",e,t,void 0,arguments)},includes(...e){return je(this,"includes",e)},indexOf(...e){return je(this,"indexOf",e)},join(e){return Fe(this).join(e)},lastIndexOf(...e){return je(this,"lastIndexOf",e)},map(e,t){return We(this,"map",e,t,void 0,arguments)},pop(){return He(this,"pop")},push(...e){return He(this,"push",e)},reduce(e,...t){return Ue(this,"reduce",e,t)},reduceRight(e,...t){return Ue(this,"reduceRight",e,t)},shift(){return He(this,"shift")},some(e,t){return We(this,"some",e,t,void 0,arguments)},splice(...e){return He(this,"splice",e)},toReversed(){return Fe(this).toReversed()},toSorted(e){return Fe(this).toSorted(e)},toSpliced(...e){return Fe(this).toSpliced(...e)},unshift(...e){return He(this,"unshift",e)},values(){return Oe(this,"values",vt)}};function Oe(e,t,n){const i=Le(e),s=i[t]();return i===e||gt(e)||(s._next=s.next,s.next=()=>{const e=s._next();return e.value&&(e.value=n(e.value)),e}),s}const qe=Array.prototype;function We(e,t,n,i,s,r){const o=Le(e),l=o!==e&&!gt(e),a=o[t];if(a!==qe[t]){const t=a.apply(e,r);return l?vt(t):t}let c=n;o!==e&&(l?c=function(t,i){return n.call(this,vt(t),i,e)}:n.length>2&&(c=function(t,i){return n.call(this,t,i,e)}));const h=a.call(o,c,i);return l&&s?s(h):h}function Ue(e,t,n,i){const s=Le(e);let r=n;return s!==e&&(gt(e)?n.length>3&&(r=function(t,i,s){return n.call(this,t,i,s,e)}):r=function(t,i,s){return n.call(this,t,vt(i),s,e)}),s[t](r,...i)}function je(e,t,n){const i=yt(e);Ae(i,"iterate",Re);const s=i[t](...n);return-1!==s&&!1!==s||!mt(n[0])?s:(n[0]=yt(n[0]),i[t](...n))}function He(e,t,n=[]){we(),ue();const i=yt(e)[t].apply(e,n);return de(),ke(),i}const Ve=v("__proto__,__v_isRef,__isVue"),ze=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(F));function Ye(e){F(e)||(e=String(e));const t=yt(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Ke{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?at:lt:s?ot:rt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const r=x(e);if(!i){let e;if(r&&(e=Me[t]))return e;if("hasOwnProperty"===t)return Ye}const o=Reflect.get(e,t,wt(e)?e:n);return(F(t)?ze.has(t):Ve(t))?o:(i||Ae(e,"get",t),s?o:wt(o)?r&&j(t)?o:o.value:L(o)?i?dt(o):ut(o):o)}}class Be extends Ke{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=ft(s);if(gt(n)||ft(n)||(s=yt(s),n=yt(n)),!x(e)&&wt(s)&&!wt(n))return!t&&(s.value=n,!0)}const r=x(e)&&j(t)?Number(t)<e.length:S(e,t),o=Reflect.set(e,t,n,wt(e)?e:i);return e===yt(i)&&(r?K(n,s)&&De(e,"set",t,n,s):De(e,"add",t,n)),o}deleteProperty(e,t){const n=S(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&De(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return F(t)&&ze.has(t)||Ae(e,"has",t),n}ownKeys(e){return Ae(e,"iterate",x(e)?"length":Ne),Reflect.ownKeys(e)}}class $e extends Ke{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ge=new Be,Qe=new $e,Xe=e=>e,Je=e=>Reflect.getPrototypeOf(e);function Ze(e,t,n){return function(...i){const s=this["__v_raw"],r=yt(s),o=N(r),l="entries"===e||e===Symbol.iterator&&o,a="keys"===e&&o,c=s[e](...i),h=n?Xe:t?Ct:vt;return!t&&Ae(r,"iterate",a?Pe:Ne),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function tt(e,t){const n={get(n){const i=this["__v_raw"],s=yt(i),r=yt(n);e||(K(n,r)&&Ae(s,"get",n),Ae(s,"get",r));const{has:o}=Je(s),l=t?Xe:e?Ct:vt;return o.call(s,n)?l(i.get(n)):o.call(s,r)?l(i.get(r)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&Ae(yt(t),"iterate",Ne),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=yt(n),s=yt(t);return e||(K(t,s)&&Ae(i,"has",t),Ae(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,i){const s=this,r=s["__v_raw"],o=yt(r),l=t?Xe:e?Ct:vt;return!e&&Ae(o,"iterate",Ne),r.forEach(((e,t)=>n.call(i,l(e),l(t),s)))}};T(n,e?{add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear")}:{add(e){t||gt(e)||ft(e)||(e=yt(e));const n=yt(this),i=Je(n),s=i.has.call(n,e);return s||(n.add(e),De(n,"add",e,e)),this},set(e,n){t||gt(n)||ft(n)||(n=yt(n));const i=yt(this),{has:s,get:r}=Je(i);let o=s.call(i,e);o||(e=yt(e),o=s.call(i,e));const l=r.call(i,e);return i.set(e,n),o?K(n,l)&&De(i,"set",e,n,l):De(i,"add",e,n),this},delete(e){const t=yt(this),{has:n,get:i}=Je(t);let s=n.call(t,e);s||(e=yt(e),s=n.call(t,e));const r=i?i.call(t,e):void 0,o=t.delete(e);return s&&De(t,"delete",e,void 0,r),o},clear(){const e=yt(this),t=0!==e.size,n=void 0,i=e.clear();return t&&De(e,"clear",void 0,void 0,n),i}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{n[i]=Ze(i,e,t)})),n}function nt(e,t){const n=tt(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(S(n,i)&&i in t?n:t,i,s)}const it={get:nt(!1,!1)},st={get:nt(!0,!1)};const rt=new WeakMap,ot=new WeakMap,lt=new WeakMap,at=new WeakMap;function ct(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ht(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ct(W(e))}function ut(e){return ft(e)?e:pt(e,!1,Ge,it,rt)}function dt(e){return pt(e,!0,Qe,st,lt)}function pt(e,t,n,i,s){if(!L(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const r=ht(e);if(0===r)return e;const o=s.get(e);if(o)return o;const l=new Proxy(e,2===r?i:n);return s.set(e,l),l}function _t(e){return ft(e)?_t(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ft(e){return!(!e||!e["__v_isReadonly"])}function gt(e){return!(!e||!e["__v_isShallow"])}function mt(e){return!!e&&!!e["__v_raw"]}function yt(e){const t=e&&e["__v_raw"];return t?yt(t):e}const vt=e=>L(e)?ut(e):e,Ct=e=>L(e)?dt(e):e;function wt(e){return!!e&&!0===e["__v_isRef"]}const kt={},bt=new WeakMap;let Tt;function It(e,t=!1,n=Tt){if(n){let t=bt.get(n);t||bt.set(n,t=[]),t.push(e)}else 0}function Et(e,t,n=C){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:a}=n,c=e=>s?e:gt(e)||!1===s||0===s?St(e,1):St(e);let h,u,d,p,_=!1,f=!1;if(wt(e)?(u=()=>e.value,_=gt(e)):_t(e)?(u=()=>c(e),_=!0):x(e)?(f=!0,_=e.some((e=>_t(e)||gt(e))),u=()=>e.map((e=>wt(e)?e.value:_t(e)?c(e):A(e)?a?a(e,2):e():void 0))):u=A(e)?t?a?()=>a(e,2):e:()=>{if(d){we();try{d()}finally{ke()}}const t=Tt;Tt=h;try{return a?a(e,3,[p]):e(p)}finally{Tt=t}}:w,t&&s){const e=u,t=!0===s?1/0:s;u=()=>St(e(),t)}const g=se(),m=()=>{h.stop(),g&&g.active&&I(g.effects,h)};if(r&&t){const e=t;t=(...t)=>{e(...t),m()}}let y=f?new Array(e.length).fill(kt):kt;const v=e=>{if(1&h.flags&&(h.dirty||e))if(t){const e=h.run();if(s||_||(f?e.some(((e,t)=>K(e,y[t]))):K(e,y))){d&&d();const n=Tt;Tt=h;try{const n=[e,y===kt?void 0:f&&y[0]===kt?[]:y,p];a?a(t,3,n):t(...n),y=e}finally{Tt=n}}}else h.run()};return l&&l(v),h=new oe(u),h.scheduler=o?()=>o(v,!1):v,p=e=>It(e,!1,h),d=h.onStop=()=>{const e=bt.get(h);if(e){if(a)a(e,4);else for(const t of e)t();bt.delete(h)}},t?i?v(!0):y=h.run():o?o(v.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function St(e,t=1/0,n){if(t<=0||!L(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,wt(e))St(e.value,t,n);else if(x(e))for(let i=0;i<e.length;i++)St(e[i],t,n);else if(P(e)||N(e))e.forEach((e=>{St(e,t,n)}));else if(U(e)){for(const i in e)St(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&St(e[i],t,n)}return e}function xt(e,t,n,i){try{return i?e(...i):e()}catch(s){Pt(s,t,n)}}function Nt(e,t,n,i){if(A(e)){const s=xt(e,t,n,i);return s&&M(s)&&s.catch((e=>{Pt(e,t,n)})),s}if(x(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Nt(e[r],t,n,i));return s}}function Pt(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||C;if(t){let i=t.parent;const s=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;i=i.parent}if(r)return we(),xt(r,null,10,[e,s,o]),void ke()}Rt(e,n,s,i,o)}function Rt(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const At=[];let Dt=-1;const Ft=[];let Lt=null,Mt=0;const Ot=Promise.resolve();let qt=null;function Wt(e){let t=Dt+1,n=At.length;while(t<n){const i=t+n>>>1,s=At[i],r=zt(s);r<e||r===e&&2&s.flags?t=i+1:n=i}return t}function Ut(e){if(!(1&e.flags)){const t=zt(e),n=At[At.length-1];!n||!(2&e.flags)&&t>=zt(n)?At.push(e):At.splice(Wt(t),0,e),e.flags|=1,jt()}}function jt(){qt||(qt=Ot.then(Yt))}function Ht(e){x(e)?Ft.push(...e):Lt&&-1===e.id?Lt.splice(Mt+1,0,e):1&e.flags||(Ft.push(e),e.flags|=1),jt()}function Vt(e){if(Ft.length){const e=[...new Set(Ft)].sort(((e,t)=>zt(e)-zt(t)));if(Ft.length=0,Lt)return void Lt.push(...e);for(Lt=e,Mt=0;Mt<Lt.length;Mt++){const e=Lt[Mt];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}Lt=null,Mt=0}}const zt=e=>null==e.id?2&e.flags?-1:1/0:e.id;function Yt(e){try{for(Dt=0;Dt<At.length;Dt++){const e=At[Dt];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),xt(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;Dt<At.length;Dt++){const e=At[Dt];e&&(e.flags&=-2)}Dt=-1,At.length=0,Vt(e),qt=null,(At.length||Ft.length)&&Yt(e)}}let Kt=null,Bt=null;Symbol("_vte");const $t=e=>e.__isTeleport;Symbol("_leaveCb"),Symbol("_enterCb");const Gt=[Function,Array];Boolean,Boolean;function Qt(e,t){6&e.shapeFlag&&e.component?(e.transition=t,Qt(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}G().requestIdleCallback,G().cancelIdleCallback;const Xt=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;RegExp,RegExp;function Jt(e,t){return x(e)?e.some((e=>Jt(e,t))):D(e)?e.split(",").includes(t):!!R(e)&&(e.lastIndex=0,e.test(t))}function Zt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function en(e){return 128&e.shapeFlag?e.ssContent:e}function tn(e,t,n=Wn,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{we();const s=Vn(n),r=Nt(t,n,e,i);return s(),ke(),r});return i?s.unshift(r):s.push(r),r}}const nn=e=>(t,n=Wn)=>{zn&&"sp"!==e||tn(e,((...e)=>t(...e)),n)},sn=(nn("bm"),nn("m")),rn=(nn("bu"),nn("u")),on=nn("bum");nn("um"),nn("sp"),nn("rtg"),nn("rtc");const ln=Symbol.for("v-ndc");function an(){return{app:null,config:{isNativeTag:k,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cn=null;function hn(e,t,n=!1){const i=Wn||Kt;if(i||cn){const s=cn?cn._context.provides:i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&A(t)?t.call(i&&i.proxy):t}else 0}const un={},dn=e=>Object.getPrototypeOf(e)===un;const pn=Cn;function _n(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fn=Symbol.for("v-scx"),gn=()=>{{const e=hn(fn);return e}};function mn(e,t,n){return yn(e,t,n)}function yn(e,t,n=C){const{immediate:i,deep:s,flush:r,once:o}=n;const l=T({},n);const a=t&&i||!t&&"post"!==r;let c;if(zn)if("sync"===r){const e=gn();c=e.__watcherHandles||(e.__watcherHandles=[])}else if(!a){const e=()=>{};return e.stop=w,e.resume=w,e.pause=w,e}const h=Wn;l.call=(e,t,n)=>Nt(e,h,t,n);let u=!1;"post"===r?l.scheduler=e=>{pn(e,h&&h.suspense)}:"sync"!==r&&(u=!0,l.scheduler=(e,t)=>{t?e():Ut(e)}),l.augmentJob=e=>{t&&(e.flags|=4),u&&(e.flags|=2,h&&(e.id=h.uid,e.i=h))};const d=Et(e,t,l);return zn&&(c?c.push(d):a&&d()),d}const vn=e=>e.__isSuspense;function Cn(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Ht(e)}const wn=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),bn=Symbol.for("v-cmt");Symbol.for("v-stc");let Tn=null;let In=1;function En(e){return!!e&&!0===e.__v_isVNode}function Sn(e,t){return e.type===t.type&&e.key===t.key}const xn=({key:e})=>null!=e?e:null,Nn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?D(e)||wt(e)||A(e)?{i:Kt,r:e,k:t,f:!!n}:e:null);function Pn(e,t=null,n=null,i=0,s=null,r=(e===wn?0:1),o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xn(t),ref:t&&Nn(t),scopeId:Bt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kt};return l?(Mn(a,n),128&r&&e.normalize(a)):n&&(a.shapeFlag|=D(n)?8:16),In>0&&!o&&Tn&&(a.patchFlag>0||6&r)&&32!==a.patchFlag&&Tn.push(a),a}const Rn=An;function An(e,t=null,n=null,i=0,s=null,r=!1){if(e&&e!==ln||(e=bn),En(e)){const i=Fn(e,t,!0);return n&&Mn(i,n),In>0&&!r&&Tn&&(6&i.shapeFlag?Tn[Tn.indexOf(e)]=i:Tn.push(i)),i.patchFlag=-2,i}if(Kn(e)&&(e=e.__vccOpts),t){t=Dn(t);let{class:e,style:n}=t;e&&!D(e)&&(t.class=te(e)),L(n)&&(mt(n)&&!x(n)&&(n=T({},n)),t.style=Q(n))}const o=D(e)?1:vn(e)?128:$t(e)?64:L(e)?4:A(e)?2:0;return Pn(e,t,n,i,s,o,r,!0)}function Dn(e){return e?mt(e)||dn(e)?T({},e):e:null}function Fn(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:a}=e,c=t?On(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&xn(c),ref:t&&t.ref?n&&r?x(r)?r.concat(Nn(t)):[r,Nn(t)]:Nn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==wn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&Qt(h,a.clone(h)),h}function Ln(e=" ",t=0){return Rn(kn,null,e,t)}function Mn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(x(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Mn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||dn(t)?3===i&&Kt&&(1===Kt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Kt}}else A(t)?(t={default:t,_ctx:Kt},n=32):(t=String(t),64&i?(n=16,t=[Ln(t)]):n=8);e.children=t,e.shapeFlag|=n}function On(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=te([t.class,i.class]));else if("style"===e)t.style=Q([t.style,i.style]);else if(b(e)){const n=t[e],s=i[e];!s||n===s||x(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function qn(e,t,n,i=null){Nt(e,t,7,[n,i])}an();let Wn=null;const Un=()=>Wn||Kt;let jn,Hn;{const e=G(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach((t=>t(e))):i[0](e)}};jn=t("__VUE_INSTANCE_SETTERS__",(e=>Wn=e)),Hn=t("__VUE_SSR_SETTERS__",(e=>zn=e))}const Vn=e=>{const t=Wn;return jn(e),e.scope.on(),()=>{e.scope.off(),jn(t)}};let zn=!1;function Yn(e,t=!0){return A(e)?e.displayName||e.name:e.name||t&&e.__name}function Kn(e){return A(e)&&"__vccOpts"in e}function Bn(e,t,n){const i=arguments.length;return 2===i?L(t)&&!x(t)?En(t)?Rn(e,null,[t]):Rn(e,t):Rn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&En(n)&&(n=[n]),Rn(e,t,n))}const $n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,n)=>n?n.toUpperCase():t.toLowerCase())),Qn=e=>{const t=Gn(e);return t.charAt(0).toUpperCase()+t.slice(1)},Xn=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim();
/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:i,iconNode:s,name:r,class:o,...l},{slots:a})=>Bn("svg",{...Jn,width:e||Jn.width,height:e||Jn.height,stroke:i||Jn.stroke,"stroke-width":n?24*Number(t)/Number(e):t,class:Xn("lucide",...r?[`lucide-${$n(Qn(r))}-icon`,`lucide-${$n(r)}`]:["lucide-icon"]),...l},[...s.map((e=>Bn(...e))),...a.default?[a.default()]:[]]),ei=(e,t)=>(n,{slots:i})=>Bn(Zn,{...n,iconNode:t,name:e},i),ti=ei("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ni=ei("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),ii=ei("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),si=ei("paw-print",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),ri=ei("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),oi=ei("badge-dollar-sign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);n(116);var li=n(262),ai=n(798),ci=n(2455),hi=n(6189);const ui="@firebase/database",di="1.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi="";function _i(e){pi=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,ci.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,ci.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,ci.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new fi(t)}}catch(t){}return new gi},yi=mi("localStorage"),vi=mi("sessionStorage"),Ci=new hi.Vy("@firebase/database"),wi=function(){let e=1;return function(){return e++}}(),ki=function(e){const t=(0,ci.kj)(e),n=new ci.gz;n.update(t);const i=n.digest();return ci.K3.encodeByteArray(i)},bi=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=bi.apply(null,i):t+="object"===typeof i?(0,ci.As)(i):i,t+=" "}return t};let Ti=null,Ii=!0;const Ei=function(e,t){(0,ci.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ci.logLevel=hi.$b.VERBOSE,Ti=Ci.log.bind(Ci),t&&vi.set("logging_enabled",!0)):"function"===typeof e?Ti=e:(Ti=null,vi.remove("logging_enabled"))},Si=function(...e){if(!0===Ii&&(Ii=!1,null===Ti&&!0===vi.get("logging_enabled")&&Ei(!0)),Ti){const t=bi.apply(null,e);Ti(t)}},xi=function(e){return function(...t){Si(e,...t)}},Ni=function(...e){const t="FIREBASE INTERNAL ERROR: "+bi(...e);Ci.error(t)},Pi=function(...e){const t=`FIREBASE FATAL ERROR: ${bi(...e)}`;throw Ci.error(t),new Error(t)},Ri=function(...e){const t="FIREBASE WARNING: "+bi(...e);Ci.warn(t)},Ai=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ri("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Di=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Fi=function(e){if((0,ci.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Mi="[MAX_NAME]",Oi=function(e,t){if(e===t)return 0;if(e===Li||t===Mi)return-1;if(t===Li||e===Mi)return 1;{const n=Qi(e),i=Qi(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},qi=function(e,t){return e===t?0:e<t?-1:1},Wi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,ci.As)(t))},Ui=function(e){if("object"!==typeof e||null===e)return(0,ci.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,ci.As)(t[i]),n+=":",n+=Ui(e[t[i]]);return n+="}",n},ji=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Hi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Vi=function(e){(0,ci.vA)(!Di(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,l,a;0===e?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=l+i,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let e=parseInt(h.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},zi=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Yi=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function Ki(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const Bi=new RegExp("^-?(0*)\\d{1,10}$"),$i=-2147483648,Gi=2147483647,Qi=function(e){if(Bi.test(e)){const t=Number(e);if(t>=$i&&t<=Gi)return t}return null},Xi=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Ri("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Ji=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,(0,li.xZ)(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then((e=>this.appCheck=e))}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.appCheckProvider?.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ri(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Si("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ri(e)}}class ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ns.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const is="5",ss="v",rs="s",os="r",ls="f",as=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cs="ls",hs="p",us="ac",ds="websocket",ps="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s{constructor(e,t,n,i,s=!1,r="",o=!1,l=!1,a=null){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=l,this.emulatorOptions=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yi.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fs(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function gs(e,t,n){let i;if((0,ci.vA)("string"===typeof t,"typeof type must == string"),(0,ci.vA)("object"===typeof n,"typeof params must == object"),t===ds)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ps)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}fs(e)&&(n["ns"]=e.namespace);const s=[];return Hi(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,ci.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,ci.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={},vs={};function Cs(e){const t=e.toString();return ys[t]||(ys[t]=new ms),ys[t]}function ws(e,t){const n=e.toString();return vs[n]||(vs[n]=t()),vs[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Xi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="start",Ts="close",Is="pLPCommand",Es="pRTLPCB",Ss="id",xs="pw",Ns="ser",Ps="cb",Rs="seg",As="ts",Ds="d",Fs="dframe",Ls=1870,Ms=30,Os=Ls-Ms,qs=25e3,Ws=3e4;class Us{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xi(e),this.stats_=Cs(t),this.urlFn=e=>(this.appCheckToken&&(e[us]=this.appCheckToken),gs(t,ps,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ks(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Ws)),Fi((()=>{if(this.isClosed_)return;this.scriptTagHolder=new js(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===bs)this.id=n,this.password=i;else{if(t!==Ts)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[bs]="t",e[Ns]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ps]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ss]=is,this.transportSessionId&&(e[rs]=this.transportSessionId),this.lastSessionId&&(e[cs]=this.lastSessionId),this.applicationId&&(e[hs]=this.applicationId),this.appCheckToken&&(e[us]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&as.test(location.hostname)&&(e[os]=ls);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Us.forceAllow_=!0}static forceDisallow(){Us.forceDisallow_=!0}static isAvailable(){return!(0,ci.$g)()&&(!!Us.forceAllow_||!Us.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!zi()&&!Yi())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,ci.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,ci.KA)(t),i=ji(n,Os);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,ci.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Fs]="t",n[Ss]=e,n[xs]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,ci.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class js{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,ci.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=wi(),window[Is+this.uniqueCallbackIdentifier]=e,window[Es+this.uniqueCallbackIdentifier]=t,this.myIFrame=js.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){Si("frame writing exception"),s.stack&&Si(s.stack),Si(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||Si("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ss]=this.myID,e[xs]=this.myPW,e[Ns]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ms+n.length<=Ls))break;{const e=this.pendingSegs.shift();n=n+"&"+Rs+i+"="+e.seg+"&"+As+i+"="+e.ts+"&"+Ds+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(qs)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,ci.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Si("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=16384,Vs=45e3;let zs=null;"undefined"!==typeof MozWebSocket?zs=MozWebSocket:"undefined"!==typeof WebSocket&&(zs=WebSocket);class Ys{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xi(this.connId),this.stats_=Cs(t),this.connURL=Ys.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[ss]=is,!(0,ci.$g)()&&"undefined"!==typeof location&&location.hostname&&as.test(location.hostname)&&(r[os]=ls),t&&(r[rs]=t),n&&(r[cs]=n),i&&(r[us]=i),s&&(r[hs]=s),gs(e,ds,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yi.set("previous_websocket_failure",!0);try{let e;if((0,ci.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${is}/${pi}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/capstone/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new zs(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==zs&&!Ys.forceDisallow_}static previouslyFailed(){return yi.isInMemoryStorage||!0===yi.get("previous_websocket_failure")}markConnectionHealthy(){yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,ci.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,ci.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,ci.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ji(t,Hs);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Vs))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ys.responsesRequiredToBeHealthy=2,Ys.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{static get ALL_TRANSPORTS(){return[Us,Ys]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ys&&Ys["isAvailable"]();let n=t&&!Ys.previouslyFailed();if(e.webSocketOnly&&(t||Ri("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ys];else{const e=this.transports_=[];for(const t of Ks.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ks.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bs=6e4,$s=5e3,Gs=10240,Qs=102400,Xs="t",Js="d",Zs="s",er="r",tr="e",nr="o",ir="a",sr="n",rr="p",or="h";class lr{constructor(e,t,n,i,s,r,o,l,a,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xi("c:"+this.id+":"),this.transportManager_=new Ks(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Zi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qs?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gs?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xs in e){const t=e[Xs];t===ir?this.upgradeIfSecondaryHealthy_():t===er?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===nr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wi("t",e),n=Wi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ir,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wi("t",e),n=Wi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wi(Xs,e);if(Js in e){const n=e[Js];if(t===or){const e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===sr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Zs?this.onConnectionShutdown_(n):t===er?this.onReset_(n):t===tr?Ni("Server Error: "+n):t===nr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ni("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),is!==n&&Ri("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Zi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Bs))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor($s))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,ci.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){(0,ci.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends cr{static getInstance(){return new hr}constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,ci.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return(0,ci.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=32,dr=768;class pr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function _r(){return new pr("")}function fr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function gr(e){return e.pieces_.length-e.pieceNum_}function mr(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new pr(e.pieces_,t)}function yr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vr(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Cr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function wr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new pr(t,0)}function kr(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof pr)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pr(n,0)}function br(e){return e.pieceNum_>=e.pieces_.length}function Tr(e,t){const n=fr(e),i=fr(t);if(null===n)return t;if(n===i)return Tr(mr(e),mr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ir(e,t){if(gr(e)!==gr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Er(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(gr(e)>gr(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Sr{constructor(e,t){this.errorPrefix_=t,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,ci.OE)(this.parts_[n]);Pr(this)}}function xr(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,ci.OE)(t),Pr(e)}function Nr(e){const t=e.parts_.pop();e.byteLength_-=(0,ci.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Pr(e){if(e.byteLength_>dr)throw new Error(e.errorPrefix_+"has a key path longer than "+dr+" bytes ("+e.byteLength_+").");if(e.parts_.length>ur)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ur+") or object contains a cycle "+Rr(e))}function Rr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends cr{static getInstance(){return new Ar}constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return(0,ci.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1e3,Fr=3e5,Lr=3e4,Mr=1.3,Or=3e4,qr="server_kill",Wr=3;class Ur extends ar{constructor(e,t,n,i,s,r,o,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=Ur.nextPersistentConnectionId_++,this.log_=xi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=Fr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,ci.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ar.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,ci.As)(s)),(0,ci.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new ci.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,ci.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,ci.vA)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];Ur.warnOnListenWarnings_(r,t);const l=this.listens.get(n)&&this.listens.get(n).get(i);l===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,ci.gR)(e,"w")){const n=(0,ci.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ri(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,ci.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,ci.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,ci.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,ci.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):Ni("Unrecognized action received from server: "+(0,ci.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,ci.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Or&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mr)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ur.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const l=function(){o?o.close():(r=!0,n())},a=function(e){(0,ci.vA)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:l,sendRequest:a};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[l,a]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?Si("getToken() completed but was canceled"):(Si("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=a&&a.token,o=new lr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ri(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(qr)}),s))}catch(Ni){this.log_("Failed to get token: "+Ni),r||(this.repoInfo_.nodeAdmin&&Ri(Ni),l())}}}interrupt(e){Si("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Si("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,ci.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ui(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new pr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Si("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wr&&(this.reconnectDelay_=Lr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Si("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,ci.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+pi.replace(/\./g,"-")]=1,(0,ci.jZ)()?e["framework.cordova"]=1:(0,ci.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hr.getInstance().currentlyOnline();return(0,ci.Im)(this.interruptReasons_)&&e}}Ur.nextPersistentConnectionId_=0,Ur.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new jr(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new jr(Li,e),i=new jr(Li,t);return 0!==this.compare(n,i)}minPost(){return jr.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class zr extends Hr{static get __EMPTY_NODE(){return Vr}static set __EMPTY_NODE(e){Vr=e}compare(e,t){return Oi(e.name,t.name)}isDefinedOn(e){throw(0,ci.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return jr.MIN}maxPost(){return new jr(Mi,Vr)}makePost(e,t){return(0,ci.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new jr(e,Vr)}toString(){return".key"}}const Yr=new zr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Br{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Br.RED,this.left=null!=i?i:Gr.EMPTY_NODE,this.right=null!=s?s:Gr.EMPTY_NODE}copy(e,t,n,i,s){return new Br(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gr.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gr.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Br.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Br.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Br.RED=!0,Br.BLACK=!1;class $r{copy(e,t,n,i,s){return this}insert(e,t,n){return new Br(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gr{constructor(e,t=Gr.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gr(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Br.BLACK,null,null))}remove(e){return new Gr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Br.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kr(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return Oi(e.name,t.name)}function Xr(e,t){return Oi(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;function Zr(e){Jr=e}Gr.EMPTY_NODE=new $r;const eo=function(e){return"number"===typeof e?"number:"+Vi(e):"string:"+e},to=function(e){if(e.isLeafNode()){const t=e.val();(0,ci.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,ci.gR)(t,".sv"),"Priority must be a string or number.")}else(0,ci.vA)(e===Jr||e.isEmpty(),"priority of unexpected type.");(0,ci.vA)(e===Jr||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let no,io,so;class ro{static set __childrenNodeConstructor(e){no=e}static get __childrenNodeConstructor(){return no}constructor(e,t=ro.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,ci.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),to(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ro(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ro.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return br(e)?this:".priority"===fr(e)?this.priorityNode_:ro.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ro.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=fr(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,ci.vA)(".priority"!==n||1===gr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ro.__childrenNodeConstructor.EMPTY_NODE.updateChild(mr(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Vi(this.value_):this.value_,this.lazyHash_=ki(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ro.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ro.__childrenNodeConstructor?-1:((0,ci.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ro.VALUE_TYPE_ORDER.indexOf(t),s=ro.VALUE_TYPE_ORDER.indexOf(n);return(0,ci.vA)(i>=0,"Unknown leaf type: "+t),(0,ci.vA)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function oo(e){io=e}function lo(e){so=e}ro.VALUE_TYPE_ORDER=["object","boolean","number","string"];class ao extends Hr{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Oi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return jr.MIN}maxPost(){return new jr(Mi,new ro("[PRIORITY-POST]",so))}makePost(e,t){const n=io(e);return new jr(t,new ro("[PRIORITY-POST]",n))}toString(){return".priority"}}const co=new ao,ho=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){const t=e=>parseInt(Math.log(e)/ho,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const po=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,l;if(0===r)return null;if(1===r)return o=e[t],l=n?n(o):o,new Br(l,o.node,Br.BLACK,null,null);{const a=parseInt(r/2,10)+t,c=s(t,a),h=s(a+1,i);return o=e[a],l=n?n(o):o,new Br(l,o.node,Br.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const l=function(t,i){const r=o-t,l=o;o-=t;const c=s(r+1,l),h=e[r],u=n?n(h):h;a(new Br(u,h.node,i,null,c))},a=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?l(i,Br.BLACK):(l(i,Br.BLACK),l(i,Br.RED))}return r},o=new uo(e.length),l=r(o);return new Gr(i||t,l)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;const fo={};class go{static get Default(){return(0,ci.vA)(fo&&co,"ChildrenNode.ts has not been loaded"),_o=_o||new go({".priority":fo},{".priority":co}),_o}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=(0,ci.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gr?t:null}hasIndex(e){return(0,ci.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,ci.vA)(e!==Yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(jr.Wrap);let r,o=s.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?po(n,e.getCompare()):fo;const l=e.toString(),a={...this.indexSet_};a[l]=e;const c={...this.indexes_};return c[l]=r,new go(c,a)}addToIndexes(e,t){const n=(0,ci.kH)(this.indexes_,((n,i)=>{const s=(0,ci.yw)(this.indexSet_,i);if((0,ci.vA)(s,"Missing index implementation for "+i),n===fo){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(jr.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),po(n,s.getCompare())}return fo}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new jr(e.name,i))),s.insert(e,e.node)}}));return new go(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,ci.kH)(this.indexes_,(n=>{if(n===fo)return n;{const i=t.get(e.name);return i?n.remove(new jr(e.name,i)):n}}));return new go(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class yo{static get EMPTY_NODE(){return mo||(mo=new yo(new Gr(Xr),null,go.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&to(this.priorityNode_),this.children_.isEmpty()&&(0,ci.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mo}updatePriority(e){return this.children_.isEmpty()?this:new yo(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mo:t}}getChild(e){const t=fr(e);return null===t?this:this.getImmediateChild(t).getChild(mr(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,ci.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new jr(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?mo:this.priorityNode_;return new yo(i,r,s)}}updateChild(e,t){const n=fr(e);if(null===n)return t;{(0,ci.vA)(".priority"!==fr(e)||1===gr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(mr(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(co,((r,o)=>{t[r]=o.val(e),n++,s&&yo.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+eo(this.getPriority().val())+":"),this.forEachChild(co,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":ki(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new jr(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new jr(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new jr(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,jr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,jr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===Yr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new yo(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(co),n=t.getIterator(co);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Yr?null:this.indexMap_.get(e.toString())}}yo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vo extends yo{constructor(){super(new Gr(Xr),yo.EMPTY_NODE,go.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return yo.EMPTY_NODE}isEmpty(){return!1}}const Co=new vo;Object.defineProperties(jr,{MIN:{value:new jr(Li,yo.EMPTY_NODE)},MAX:{value:new jr(Mi,Co)}}),zr.__EMPTY_NODE=yo.EMPTY_NODE,ro.__childrenNodeConstructor=yo,Zr(Co),lo(Co);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wo=!0;function ko(e,t=null){if(null===e)return yo.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,ci.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new ro(n,ko(t))}if(e instanceof Array||!wo){let n=yo.EMPTY_NODE;return Hi(e,((t,i)=>{if((0,ci.gR)(e,t)&&"."!==t.substring(0,1)){const e=ko(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ko(t))}{const n=[];let i=!1;const s=e;if(Hi(s,((e,t)=>{if("."!==e.substring(0,1)){const s=ko(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new jr(e,s)))}})),0===n.length)return yo.EMPTY_NODE;const r=po(n,Qr,(e=>e.name),Xr);if(i){const e=po(n,co.getCompare());return new yo(r,ko(t),new go({".priority":e},{".priority":co}))}return new yo(r,ko(t),go.Default)}}oo(ko);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo extends Hr{constructor(e){super(),this.indexPath_=e,(0,ci.vA)(!br(e)&&".priority"!==fr(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Oi(e.name,t.name):s}makePost(e,t){const n=ko(e),i=yo.EMPTY_NODE.updateChild(this.indexPath_,n);return new jr(t,i)}maxPost(){const e=yo.EMPTY_NODE.updateChild(this.indexPath_,Co);return new jr(Mi,e)}toString(){return Cr(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Hr{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Oi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return jr.MIN}maxPost(){return jr.MAX}makePost(e,t){const n=ko(e);return new jr(t,n)}toString(){return".value"}}const Io=new To;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){return{type:"value",snapshotNode:e}}function So(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function xo(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function No(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Po(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,ci.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(xo(t,o)):(0,ci.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(So(t,n)):r.trackChildChange(No(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(co,((e,i)=>{t.hasChild(e)||n.trackChildChange(xo(e,i))})),t.isLeafNode()||t.forEachChild(co,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(No(t,i,s))}else n.trackChildChange(So(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?yo.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.indexedFilter_=new Ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ao.getStartPost_(e),this.endPost_=Ao.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new jr(t,n))||(n=yo.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=yo.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(yo.EMPTY_NODE);const s=this;return t.forEachChild(co,((e,t)=>{s.matches(new jr(e,t))||(i=i.updateImmediateChild(e,yo.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ao(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new jr(t,n))||(n=yo.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=yo.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=yo.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(yo.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),s=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);s?n++:i=i.updateImmediateChild(t.name,yo.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;(0,ci.vA)(o.numChildren()===this.limit_,"");const l=new jr(t,n),a=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,a,this.reverse_);while(null!=h&&(h.name===t||o.hasChild(h.name)))h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,l),d=c&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(No(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(xo(t,e));const n=o.updateImmediateChild(t,yo.EMPTY_NODE),i=null!=h&&this.rangedFilter_.matches(h);return i?(null!=s&&s.trackChildChange(So(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(a,l)>=0?(null!=s&&(s.trackChildChange(xo(a.name,a.node)),s.trackChildChange(So(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(a.name,yo.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=co}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,ci.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,ci.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,ci.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,ci.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,ci.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===co}copy(){const e=new Fo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lo(e){return e.loadsAllData()?new Ro(e.getIndex()):e.hasLimit()?new Do(e):new Ao(e)}function Mo(e){const t={};if(e.isDefault())return t;let n;if(e.index_===co?n="$priority":e.index_===Io?n="$value":e.index_===Yr?n="$key":((0,ci.vA)(e.index_ instanceof bo,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,ci.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,ci.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,ci.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,ci.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,ci.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Oo(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==co&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends ar{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,ci.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=xi("p:rest:"),this.listens_={}}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=qo.getListenId_(e,n),o={};this.listens_[r]=o;const l=Mo(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,ci.yw)(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=qo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mo(e._queryParams),n=e._path.toString(),i=new ci.cY;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,ci.Am)(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,ci.$L)(o.responseText)}catch(e){Ri("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Ri("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.rootNode_=yo.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return{value:null,children:new Map}}function jo(e,t,n){if(br(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=fr(t);e.children.has(i)||e.children.set(i,Uo());const s=e.children.get(i);t=mr(t),jo(s,t,n)}}function Ho(e,t,n){null!==e.value?n(t,e.value):Vo(e,((e,i)=>{const s=new pr(t.toString()+"/"+e);Ho(i,s,n)}))}function Vo(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Hi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e4,Ko=3e4,Bo=3e5;class $o{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zo(e);const n=Yo+(Ko-Yo)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Hi(e,((e,i)=>{i>0&&(0,ci.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Zi(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bo))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Go;function Qo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jo(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Go||(Go={}));class Zo{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Go.ACK_USER_WRITE,this.source=Qo()}operationForChild(e){if(br(this.path)){if(null!=this.affectedTree.value)return(0,ci.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pr(e));return new Zo(_r(),t,this.revert)}}return(0,ci.vA)(fr(this.path)===e,"operationForChild called for unrelated child."),new Zo(mr(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.source=e,this.path=t,this.type=Go.LISTEN_COMPLETE}operationForChild(e){return br(this.path)?new el(this.source,_r()):new el(this.source,mr(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Go.OVERWRITE}operationForChild(e){return br(this.path)?new tl(this.source,_r(),this.snap.getImmediateChild(e)):new tl(this.source,mr(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Go.MERGE}operationForChild(e){if(br(this.path)){const t=this.children.subtree(new pr(e));return t.isEmpty()?null:t.value?new tl(this.source,_r(),t.value):new nl(this.source,_r(),t)}return(0,ci.vA)(fr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nl(this.source,mr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(br(e))return this.isFullyInitialized()&&!this.filtered_;const t=fr(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rl(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Po(t.childName,t.snapshotNode))})),ol(e,s,"child_removed",t,i,n),ol(e,s,"child_added",t,i,n),ol(e,s,"child_moved",r,i,n),ol(e,s,"child_changed",t,i,n),ol(e,s,"value",t,i,n),s}function ol(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>al(e,t,n))),o.forEach((n=>{const i=ll(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function ll(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function al(e,t,n){if(null==t.childName||null==n.childName)throw(0,ci.Hk)("Should only compare child_ events.");const i=new jr(t.childName,t.snapshotNode),s=new jr(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e,t){return{eventCache:e,serverCache:t}}function hl(e,t,n,i){return cl(new il(t,n,i),e.serverCache)}function ul(e,t,n,i){return cl(e.eventCache,new il(t,n,i))}function dl(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function pl(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;const fl=()=>(_l||(_l=new Gr(qi)),_l);class gl{static fromObject(e){let t=new gl(null);return Hi(e,((e,n)=>{t=t.set(new pr(e),n)})),t}constructor(e,t=fl()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:_r(),value:this.value};if(br(e))return null;{const n=fr(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(mr(e),t);if(null!=s){const e=kr(new pr(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(br(e))return this;{const t=fr(e),n=this.children.get(t);return null!==n?n.subtree(mr(e)):new gl(null)}}set(e,t){if(br(e))return new gl(t,this.children);{const n=fr(e),i=this.children.get(n)||new gl(null),s=i.set(mr(e),t),r=this.children.insert(n,s);return new gl(this.value,r)}}remove(e){if(br(e))return this.children.isEmpty()?new gl(null):new gl(null,this.children);{const t=fr(e),n=this.children.get(t);if(n){const i=n.remove(mr(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new gl(null):new gl(this.value,s)}return this}}get(e){if(br(e))return this.value;{const t=fr(e),n=this.children.get(t);return n?n.get(mr(e)):null}}setTree(e,t){if(br(e))return t;{const n=fr(e),i=this.children.get(n)||new gl(null),s=i.setTree(mr(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new gl(this.value,r)}}fold(e){return this.fold_(_r(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(kr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,_r(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(br(e))return null;{const i=fr(e),s=this.children.get(i);return s?s.findOnPath_(mr(e),kr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_r(),t)}foreachOnPath_(e,t,n){if(br(e))return this;{this.value&&n(t,this.value);const i=fr(e),s=this.children.get(i);return s?s.foreachOnPath_(mr(e),kr(t,i),n):new gl(null)}}foreach(e){this.foreach_(_r(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(kr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.writeTree_=e}static empty(){return new ml(new gl(null))}}function yl(e,t,n){if(br(t))return new ml(new gl(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Tr(s,t);return r=r.updateChild(o,n),new ml(e.writeTree_.set(s,r))}{const i=new gl(n),s=e.writeTree_.setTree(t,i);return new ml(s)}}}function vl(e,t,n){let i=e;return Hi(n,((e,n)=>{i=yl(i,kr(t,e),n)})),i}function Cl(e,t){if(br(t))return ml.empty();{const n=e.writeTree_.setTree(t,new gl(null));return new ml(n)}}function wl(e,t){return null!=kl(e,t)}function kl(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Tr(n.path,t)):null}function bl(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(co,((e,n)=>{t.push(new jr(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new jr(e,n.value))})),t}function Tl(e,t){if(br(t))return e;{const n=kl(e,t);return new ml(null!=n?new gl(n):e.writeTree_.subtree(t))}}function Il(e){return e.writeTree_.isEmpty()}function El(e,t){return Sl(_r(),e.writeTree_,t)}function Sl(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,ci.vA)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Sl(kr(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(kr(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(e,t){return Ql(t,e)}function Nl(e,t,n,i,s){(0,ci.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=yl(e.visibleWrites,t,n)),e.lastWriteId=i}function Pl(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Rl(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,ci.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;while(s&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Al(t,i.path)?s=!1:Er(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return Dl(e),!0;if(i.snap)e.visibleWrites=Cl(e.visibleWrites,i.path);else{const t=i.children;Hi(t,(t=>{e.visibleWrites=Cl(e.visibleWrites,kr(i.path,t))}))}return!0}return!1}function Al(e,t){if(e.snap)return Er(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Er(kr(e.path,n),t))return!0;return!1}function Dl(e){e.visibleWrites=Ll(e.allWrites,Fl,_r()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Fl(e){return e.visible}function Ll(e,t,n){let i=ml.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Er(n,e)?(t=Tr(n,e),i=yl(i,t,r.snap)):Er(e,n)&&(t=Tr(e,n),i=yl(i,_r(),r.snap.getChild(t)));else{if(!r.children)throw(0,ci.Hk)("WriteRecord should have .snap or .children");if(Er(n,e))t=Tr(n,e),i=vl(i,t,r.children);else if(Er(e,n))if(t=Tr(e,n),br(t))i=vl(i,_r(),r.children);else{const e=(0,ci.yw)(r.children,fr(t));if(e){const n=e.getChild(mr(t));i=yl(i,_r(),n)}}}}}return i}function Ml(e,t,n,i,s){if(i||s){const r=Tl(e.visibleWrites,t);if(!s&&Il(r))return n;if(s||null!=n||wl(r,_r())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Er(e.path,t)||Er(t,e.path))},o=Ll(e.allWrites,r,t),l=n||yo.EMPTY_NODE;return El(o,l)}return null}{const i=kl(e.visibleWrites,t);if(null!=i)return i;{const i=Tl(e.visibleWrites,t);if(Il(i))return n;if(null!=n||wl(i,_r())){const e=n||yo.EMPTY_NODE;return El(i,e)}return null}}}function Ol(e,t,n){let i=yo.EMPTY_NODE;const s=kl(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(co,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Tl(e.visibleWrites,t);return n.forEachChild(co,((e,t)=>{const n=El(Tl(s,new pr(e)),t);i=i.updateImmediateChild(e,n)})),bl(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Tl(e.visibleWrites,t);return bl(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ql(e,t,n,i,s){(0,ci.vA)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=kr(t,n);if(wl(e.visibleWrites,r))return null;{const t=Tl(e.visibleWrites,r);return Il(t)?s.getChild(n):El(t,s.getChild(n))}}function Wl(e,t,n,i){const s=kr(t,n),r=kl(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=Tl(e.visibleWrites,s);return El(t,i.getNode().getImmediateChild(n))}return null}function Ul(e,t){return kl(e.visibleWrites,t)}function jl(e,t,n,i,s,r,o){let l;const a=Tl(e.visibleWrites,t),c=kl(a,_r());if(null!=c)l=c;else{if(null==n)return[];l=El(a,n)}if(l=l.withIndex(o),l.isEmpty()||l.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let a=n.getNext();while(a&&e.length<s)0!==t(a,i)&&e.push(a),a=n.getNext();return e}}function Hl(){return{visibleWrites:ml.empty(),allWrites:[],lastWriteId:-1}}function Vl(e,t,n,i){return Ml(e.writeTree,e.treePath,t,n,i)}function zl(e,t){return Ol(e.writeTree,e.treePath,t)}function Yl(e,t,n,i){return ql(e.writeTree,e.treePath,t,n,i)}function Kl(e,t){return Ul(e.writeTree,kr(e.treePath,t))}function Bl(e,t,n,i,s,r){return jl(e.writeTree,e.treePath,t,n,i,s,r)}function $l(e,t,n){return Wl(e.writeTree,e.treePath,t,n)}function Gl(e,t){return Ql(kr(e.treePath,t),e.writeTree)}function Ql(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,ci.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,ci.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,No(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,xo(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,So(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,ci.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,No(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zl=new Jl;class ea{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new il(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $l(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:pl(this.viewCache_),s=Bl(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return{filter:e}}function na(e,t){(0,ci.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,ci.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ia(e,t,n,i,s){const r=new Xl;let o,l;if(n.type===Go.OVERWRITE){const a=n;a.source.fromUser?o=la(e,t,a.path,a.snap,i,s,r):((0,ci.vA)(a.source.fromServer,"Unknown source."),l=a.source.tagged||t.serverCache.isFiltered()&&!br(a.path),o=oa(e,t,a.path,a.snap,i,s,l,r))}else if(n.type===Go.MERGE){const a=n;a.source.fromUser?o=ca(e,t,a.path,a.children,i,s,r):((0,ci.vA)(a.source.fromServer,"Unknown source."),l=a.source.tagged||t.serverCache.isFiltered(),o=ua(e,t,a.path,a.children,i,s,l,r))}else if(n.type===Go.ACK_USER_WRITE){const l=n;o=l.revert?_a(e,t,l.path,i,s,r):da(e,t,l.path,l.affectedTree,i,s,r)}else{if(n.type!==Go.LISTEN_COMPLETE)throw(0,ci.Hk)("Unknown operation type: "+n.type);o=pa(e,t,n.path,i,r)}const a=r.getChanges();return sa(t,o,a),{viewCache:o,changes:a}}function sa(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=dl(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Eo(dl(t)))}}function ra(e,t,n,i,s,r){const o=t.eventCache;if(null!=Kl(i,n))return t;{let l,a;if(br(n))if((0,ci.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=pl(t),s=n instanceof yo?n:yo.EMPTY_NODE,o=zl(i,s);l=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=Vl(i,pl(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=fr(n);if(".priority"===c){(0,ci.vA)(1===gr(n),"Can't have a priority with additional path components");const s=o.getNode();a=t.serverCache.getNode();const r=Yl(i,n,s,a);l=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=mr(n);let u;if(o.isCompleteForChild(c)){a=t.serverCache.getNode();const e=Yl(i,n,o.getNode(),a);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=$l(i,c,t.serverCache);l=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return hl(t,l,o.isFullyInitialized()||br(n),e.filter.filtersNodes())}}function oa(e,t,n,i,s,r,o,l){const a=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(br(n))c=h.updateFullNode(a.getNode(),i,null);else if(h.filtersNodes()&&!a.isFiltered()){const e=a.getNode().updateChild(n,i);c=h.updateFullNode(a.getNode(),e,null)}else{const e=fr(n);if(!a.isCompleteForPath(n)&&gr(n)>1)return t;const s=mr(n),r=a.getNode().getImmediateChild(e),o=r.updateChild(s,i);c=".priority"===e?h.updatePriority(a.getNode(),o):h.updateChild(a.getNode(),e,o,s,Zl,null)}const u=ul(t,c,a.isFullyInitialized()||br(n),h.filtersNodes()),d=new ea(s,u,r);return ra(e,u,n,s,d,l)}function la(e,t,n,i,s,r,o){const l=t.eventCache;let a,c;const h=new ea(s,t,r);if(br(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=hl(t,c,!0,e.filter.filtersNodes());else{const s=fr(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),a=hl(t,c,l.isFullyInitialized(),l.isFiltered());else{const r=mr(n),c=l.getNode().getImmediateChild(s);let u;if(br(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===yr(r)&&e.getChild(wr(r)).isEmpty()?e:e.updateChild(r,i):yo.EMPTY_NODE}if(c.equals(u))a=t;else{const n=e.filter.updateChild(l.getNode(),s,u,r,h,o);a=hl(t,n,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function aa(e,t){return e.eventCache.isCompleteForChild(t)}function ca(e,t,n,i,s,r,o){let l=t;return i.foreach(((i,a)=>{const c=kr(n,i);aa(t,fr(c))&&(l=la(e,l,c,a,s,r,o))})),i.foreach(((i,a)=>{const c=kr(n,i);aa(t,fr(c))||(l=la(e,l,c,a,s,r,o))})),l}function ha(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ua(e,t,n,i,s,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a,c=t;a=br(n)?i:new gl(null).setTree(n,i);const h=t.serverCache.getNode();return a.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const a=t.serverCache.getNode().getImmediateChild(n),h=ha(e,a,i);c=oa(e,c,new pr(n),h,s,r,o,l)}})),a.children.inorderTraversal(((n,i)=>{const a=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!a){const a=t.serverCache.getNode().getImmediateChild(n),h=ha(e,a,i);c=oa(e,c,new pr(n),h,s,r,o,l)}})),c}function da(e,t,n,i,s,r,o){if(null!=Kl(s,n))return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(null!=i.value){if(br(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return oa(e,t,n,a.getNode().getChild(n),s,r,l,o);if(br(n)){let i=new gl(null);return a.getNode().forEachChild(Yr,((e,t)=>{i=i.set(new pr(e),t)})),ua(e,t,n,i,s,r,l,o)}return t}{let c=new gl(null);return i.foreach(((e,t)=>{const i=kr(n,e);a.isCompleteForPath(i)&&(c=c.set(e,a.getNode().getChild(i)))})),ua(e,t,n,c,s,r,l,o)}}function pa(e,t,n,i,s){const r=t.serverCache,o=ul(t,r.getNode(),r.isFullyInitialized()||br(n),r.isFiltered());return ra(e,o,n,i,Zl,s)}function _a(e,t,n,i,s,r){let o;if(null!=Kl(i,n))return t;{const l=new ea(i,t,s),a=t.eventCache.getNode();let c;if(br(n)||".priority"===fr(n)){let n;if(t.serverCache.isFullyInitialized())n=Vl(i,pl(t));else{const e=t.serverCache.getNode();(0,ci.vA)(e instanceof yo,"serverChildren would be complete if leaf node"),n=zl(i,e)}c=e.filter.updateFullNode(a,n,r)}else{const s=fr(n);let h=$l(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=a.getImmediateChild(s)),c=null!=h?e.filter.updateChild(a,s,h,mr(n),l,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(a,s,yo.EMPTY_NODE,mr(n),l,r):a,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Vl(i,pl(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Kl(i,_r()),hl(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ro(n.getIndex()),s=Lo(n);this.processor_=ta(s);const r=t.serverCache,o=t.eventCache,l=i.updateFullNode(yo.EMPTY_NODE,r.getNode(),null),a=s.updateFullNode(yo.EMPTY_NODE,o.getNode(),null),c=new il(l,r.isFullyInitialized(),i.filtersNodes()),h=new il(a,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=cl(h,c),this.eventGenerator_=new sl(this.query_)}get query(){return this.query_}}function ga(e){return e.viewCache_.serverCache.getNode()}function ma(e,t){const n=pl(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!br(t)&&!n.getImmediateChild(fr(t)).isEmpty())?n.getChild(t):null}function ya(e){return 0===e.eventRegistrations_.length}function va(e,t){e.eventRegistrations_.push(t)}function Ca(e,t,n){const i=[];if(n){(0,ci.vA)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function wa(e,t,n,i){t.type===Go.MERGE&&null!==t.source.queryId&&((0,ci.vA)(pl(e.viewCache_),"We should always have a full cache before handling merges"),(0,ci.vA)(dl(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=ia(e.processor_,s,t,n,i);return na(e.processor_,r.viewCache),(0,ci.vA)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ba(e,r.changes,r.viewCache.eventCache.getNode(),null)}function ka(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(co,((e,t)=>{i.push(So(e,t))}))}return n.isFullyInitialized()&&i.push(Eo(n.getNode())),ba(e,i,n.getNode(),t)}function ba(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return rl(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta,Ia;class Ea{constructor(){this.views=new Map}}function Sa(e){(0,ci.vA)(!Ta,"__referenceConstructor has already been defined"),Ta=e}function xa(){return(0,ci.vA)(Ta,"Reference.ts has not been loaded"),Ta}function Na(e){return 0===e.views.size}function Pa(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,ci.vA)(null!=r,"SyncTree gave us an op for an invalid query."),wa(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(wa(r,t,n,i));return s}}function Ra(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Vl(n,s?i:null),r=!1;e?r=!0:i instanceof yo?(e=zl(n,i),r=!1):(e=yo.EMPTY_NODE,r=!1);const o=cl(new il(e,r,!1),new il(i,s,!1));return new fa(t,o)}return o}function Aa(e,t,n,i,s,r){const o=Ra(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),va(o,n),ka(o,n)}function Da(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const l=qa(e);if("default"===s)for(const[a,c]of e.views.entries())o=o.concat(Ca(c,n,i)),ya(c)&&(e.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const t=e.views.get(s);t&&(o=o.concat(Ca(t,n,i)),ya(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return l&&!qa(e)&&r.push(new(xa())(t._repo,t._path)),{removed:r,events:o}}function Fa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function La(e,t){let n=null;for(const i of e.views.values())n=n||ma(i,t);return n}function Ma(e,t){const n=t._queryParams;if(n.loadsAllData())return Wa(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Oa(e,t){return null!=Ma(e,t)}function qa(e){return null!=Wa(e)}function Wa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e){(0,ci.vA)(!Ia,"__referenceConstructor has already been defined"),Ia=e}function ja(){return(0,ci.vA)(Ia,"Reference.ts has not been loaded"),Ia}let Ha=1;class Va{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gl(null),this.pendingWriteTree_=Hl(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function za(e,t,n,i,s){return Nl(e.pendingWriteTree_,t,n,i,s),s?tc(e,new tl(Qo(),t,n)):[]}function Ya(e,t,n=!1){const i=Pl(e.pendingWriteTree_,t),s=Rl(e.pendingWriteTree_,t);if(s){let t=new gl(null);return null!=i.snap?t=t.set(_r(),!0):Hi(i.children,(e=>{t=t.set(new pr(e),!0)})),tc(e,new Zo(i.path,t,n))}return[]}function Ka(e,t,n){return tc(e,new tl(Xo(),t,n))}function Ba(e,t,n){const i=gl.fromObject(n);return tc(e,new nl(Xo(),t,i))}function $a(e,t){return tc(e,new el(Xo(),t))}function Ga(e,t,n){const i=lc(e,n);if(i){const n=ac(i),s=n.path,r=n.queryId,o=Tr(s,t),l=new el(Jo(r),o);return cc(e,s,l)}return[]}function Qa(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let l=[];if(o&&("default"===t._queryIdentifier||Oa(o,t))){const a=Da(o,t,n,i);Na(o)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>qa(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=hc(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=sc(e,i);e.listenProvider_.startListening(uc(s),rc(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(uc(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(oc(t));e.listenProvider_.stopListening(uc(t),n)}))}dc(e,c)}return l}function Xa(e,t,n,i){const s=lc(e,i);if(null!=s){const i=ac(s),r=i.path,o=i.queryId,l=Tr(r,t),a=new tl(Jo(o),l,n);return cc(e,r,a)}return[]}function Ja(e,t,n,i){const s=lc(e,i);if(s){const i=ac(s),r=i.path,o=i.queryId,l=Tr(r,t),a=gl.fromObject(n),c=new nl(Jo(o),l,a);return cc(e,r,c)}return[]}function Za(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Tr(e,s);r=r||La(t,n),o=o||qa(t)}));let l,a=e.syncPointTree_.get(s);if(a?(o=o||qa(a),r=r||La(a,_r())):(a=new Ea,e.syncPointTree_=e.syncPointTree_.set(s,a)),null!=r)l=!0;else{l=!1,r=yo.EMPTY_NODE;const t=e.syncPointTree_.subtree(s);t.foreachChild(((e,t)=>{const n=La(t,_r());n&&(r=r.updateImmediateChild(e,n))}))}const c=Oa(a,t);if(!c&&!t._queryParams.loadsAllData()){const n=oc(t);(0,ci.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=pc();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=xl(e.pendingWriteTree_,s);let u=Aa(a,t,n,h,r,l);if(!c&&!o&&!i){const n=Ma(a,t);u=u.concat(_c(e,t,n))}return u}function ec(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Tr(e,t),s=La(n,i);if(s)return s}));return Ml(s,t,r,n,i)}function tc(e,t){return nc(t,e.syncPointTree_,null,xl(e.pendingWriteTree_,_r()))}function nc(e,t,n,i){if(br(e.path))return ic(e,t,n,i);{const s=t.get(_r());null==n&&null!=s&&(n=La(s,_r()));let r=[];const o=fr(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const e=n?n.getImmediateChild(o):null,t=Gl(i,o);r=r.concat(nc(l,a,e,t))}return s&&(r=r.concat(Pa(s,e,i,n))),r}}function ic(e,t,n,i){const s=t.get(_r());null==n&&null!=s&&(n=La(s,_r()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,l=Gl(i,t),a=e.operationForChild(t);a&&(r=r.concat(ic(a,s,o,l)))})),s&&(r=r.concat(Pa(s,e,i,n))),r}function sc(e,t){const n=t.query,i=rc(e,n);return{hashFn:()=>{const e=ga(t)||yo.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Ga(e,n._path,i):$a(e,n._path);{const i=Ki(t,n);return Qa(e,n,null,i)}}}}function rc(e,t){const n=oc(t);return e.queryToTagMap.get(n)}function oc(e){return e._path.toString()+"$"+e._queryIdentifier}function lc(e,t){return e.tagToQueryMap.get(t)}function ac(e){const t=e.indexOf("$");return(0,ci.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pr(e.substr(0,t))}}function cc(e,t,n){const i=e.syncPointTree_.get(t);(0,ci.vA)(i,"Missing sync point for query tag that we're tracking");const s=xl(e.pendingWriteTree_,t);return Pa(i,n,s,null)}function hc(e){return e.fold(((e,t,n)=>{if(t&&qa(t)){const e=Wa(t);return[e]}{let e=[];return t&&(e=Fa(t)),Hi(n,((t,n)=>{e=e.concat(n)})),e}}))}function uc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ja())(e._repo,e._path):e}function dc(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=oc(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function pc(){return Ha++}function _c(e,t,n){const i=t._path,s=rc(e,t),r=sc(e,n),o=e.listenProvider_.startListening(uc(t),s,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,ci.vA)(!qa(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!br(e)&&t&&qa(t))return[Wa(t).query];{let e=[];return t&&(e=e.concat(Fa(t).map((e=>e.query)))),Hi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(uc(i),rc(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fc(t)}node(){return this.node_}}class gc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=kr(this.path_,e);return new gc(this.syncTree_,t)}node(){return ec(this.syncTree_,this.path_)}}const mc=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},yc=function(e,t,n){return e&&"object"===typeof e?((0,ci.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?vc(e[".sv"],t,n):"object"===typeof e[".sv"]?Cc(e[".sv"],t):void(0,ci.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vc=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,ci.vA)(!1,"Unexpected server value: "+e)}},Cc=function(e,t,n){e.hasOwnProperty("increment")||(0,ci.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,ci.vA)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,ci.vA)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s,o=r.getValue();return"number"!==typeof o?i:o+i},wc=function(e,t,n,i){return bc(t,new gc(n,e),i)},kc=function(e,t,n){return bc(e,new fc(t),n)};function bc(e,t,n){const i=e.getPriority().val(),s=yc(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=yc(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new ro(r,ko(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new ro(s))),i.forEachChild(co,((e,i)=>{const s=bc(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ic(e,t){let n=t instanceof pr?t:new pr(t),i=e,s=fr(n);while(null!==s){const e=(0,ci.yw)(i.node.children,s)||{children:{},childCount:0};i=new Tc(s,i,e),n=mr(n),s=fr(n)}return i}function Ec(e){return e.node.value}function Sc(e,t){e.node.value=t,Fc(e)}function xc(e){return e.node.childCount>0}function Nc(e){return void 0===Ec(e)&&!xc(e)}function Pc(e,t){Hi(e.node.children,((n,i)=>{t(new Tc(n,e,i))}))}function Rc(e,t,n,i){n&&!i&&t(e),Pc(e,(e=>{Rc(e,t,!0,i)})),n&&i&&t(e)}function Ac(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Dc(e){return new pr(null===e.parent?e.name:Dc(e.parent)+"/"+e.name)}function Fc(e){null!==e.parent&&Lc(e.parent,e.name,e)}function Lc(e,t,n){const i=Nc(n),s=(0,ci.gR)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Fc(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Fc(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=/[\[\].#$\/\u0000-\u001F\u007F]/,Oc=/[\[\].#$\u0000-\u001F\u007F]/,qc=10485760,Wc=function(e){return"string"===typeof e&&0!==e.length&&!Mc.test(e)},Uc=function(e){return"string"===typeof e&&0!==e.length&&!Oc.test(e)},jc=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Uc(e)},Hc=function(e,t,n,i){i&&void 0===t||Vc((0,ci.dI)(e,"value"),t,n)},Vc=function(e,t,n){const i=n instanceof pr?new Sr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Rr(i));if("function"===typeof t)throw new Error(e+"contains a function "+Rr(i)+" with contents = "+t.toString());if(Di(t))throw new Error(e+"contains "+t.toString()+" "+Rr(i));if("string"===typeof t&&t.length>qc/3&&(0,ci.OE)(t)>qc)throw new Error(e+"contains a string greater than "+qc+" utf8 bytes "+Rr(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(Hi(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Wc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Rr(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');xr(i,t),Vc(e,r,i),Nr(i)})),n&&s)throw new Error(e+' contains ".value" child '+Rr(i)+" in addition to actual children.")}},zc=function(e,t,n,i){if((!i||void 0!==n)&&!Uc(n))throw new Error((0,ci.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Yc=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zc(e,t,n,i)},Kc=function(e,t){if(".info"===fr(t))throw new Error(e+" failed = Can't modify data under /.info/")},Bc=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Wc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!jc(n))throw new Error((0,ci.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gc(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Ir(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Qc(e,t,n){Gc(e,n),Jc(e,(e=>Ir(e,t)))}function Xc(e,t,n){Gc(e,n),Jc(e,(e=>Er(e,t)||Er(t,e)))}function Jc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Zc(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Zc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Ti&&Si("event: "+n.toString()),Xi(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="repo_interrupt",th=25;class nh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $c,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uo(),this.transactionQueueTree_=new Tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ih(e,t,n){if(e.stats_=Cs(e.repoInfo_),e.forceRestClient_||Ji())e.server_=new qo(e.repoInfo_,((t,n,i,s)=>{oh(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>lh(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,ci.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ur(e.repoInfo_,t,((t,n,i,s)=>{oh(e,t,n,i,s)}),(t=>{lh(e,t)}),(t=>{ah(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ws(e.repoInfo_,(()=>new $o(e.stats_,e.server_))),e.infoData_=new Wo,e.infoSyncTree_=new Va({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ka(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ch(e,"connected",!1),e.serverSyncTree_=new Va({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Xc(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function sh(e){const t=e.infoData_.getNode(new pr(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function rh(e){return mc({timestamp:sh(e)})}function oh(e,t,n,i,s){e.dataUpdateCount++;const r=new pr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=(0,ci.kH)(n,(e=>ko(e)));o=Ja(e.serverSyncTree_,r,t,s)}else{const t=ko(n);o=Xa(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,ci.kH)(n,(e=>ko(e)));o=Ba(e.serverSyncTree_,r,t)}else{const t=ko(n);o=Ka(e.serverSyncTree_,r,t)}let l=r;o.length>0&&(l=wh(e,r)),Xc(e.eventQueue_,l,o)}function lh(e,t){ch(e,"connected",t),!1===t&&dh(e)}function ah(e,t){Hi(t,((t,n)=>{ch(e,t,n)}))}function ch(e,t,n){const i=new pr("/.info/"+t),s=ko(n);e.infoData_.updateSnapshot(i,s);const r=Ka(e.infoSyncTree_,i,s);Xc(e.eventQueue_,i,r)}function hh(e){return e.nextWriteId_++}function uh(e,t,n,i,s){gh(e,"set",{path:t.toString(),value:n,priority:i});const r=rh(e),o=ko(n,i),l=ec(e.serverSyncTree_,t),a=kc(o,l,r),c=hh(e),h=za(e.serverSyncTree_,t,a,c,!0);Gc(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||Ri("set at "+t+" failed: "+n);const o=Ya(e.serverSyncTree_,c,!r);Xc(e.eventQueue_,t,o),mh(e,s,n,i)}));const u=Sh(e,t);wh(e,u),Xc(e.eventQueue_,u,[])}function dh(e){gh(e,"onDisconnectEvents");const t=rh(e),n=Uo();Ho(e.onDisconnect_,_r(),((i,s)=>{const r=wc(i,s,e.serverSyncTree_,t);jo(n,i,r)}));let i=[];Ho(n,_r(),((t,n)=>{i=i.concat(Ka(e.serverSyncTree_,t,n));const s=Sh(e,t);wh(e,s)})),e.onDisconnect_=Uo(),Xc(e.eventQueue_,_r(),i)}function ph(e,t,n){let i;i=".info"===fr(t._path)?Za(e.infoSyncTree_,t,n):Za(e.serverSyncTree_,t,n),Qc(e.eventQueue_,t._path,i)}function _h(e,t,n){let i;i=".info"===fr(t._path)?Qa(e.infoSyncTree_,t,n):Qa(e.serverSyncTree_,t,n),Qc(e.eventQueue_,t._path,i)}function fh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(eh)}function gh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Si(n,...t)}function mh(e,t,n,i){t&&Xi((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function yh(e,t,n){return ec(e.serverSyncTree_,t,n)||yo.EMPTY_NODE}function vh(e,t=e.transactionQueueTree_){if(t||Eh(e,t),Ec(t)){const n=Th(e,t);(0,ci.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Ch(e,Dc(t),n)}else xc(t)&&Pc(t,(t=>{vh(e,t)}))}function Ch(e,t,n){const i=n.map((e=>e.currentWriteId)),s=yh(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const e=n[c];(0,ci.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Tr(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const l=r.val(!0),a=t;e.server_.put(a.toString(),l,(i=>{gh(e,"transaction put response",{path:a.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ya(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Eh(e,Ic(e.transactionQueueTree_,t)),vh(e,e.transactionQueueTree_),Xc(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Xi(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ri("transaction at "+a.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}wh(e,t)}}),o)}function wh(e,t){const n=bh(e,t),i=Dc(n),s=Th(e,n);return kh(e,s,i),i}function kh(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const r=t[l],a=Tr(n,r.path);let c,h=!1;if((0,ci.vA)(null!==a,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)h=!0,c=r.abortReason,s=s.concat(Ya(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=th)h=!0,c="maxretry",s=s.concat(Ya(e.serverSyncTree_,r.currentWriteId,!0));else{const n=yh(e,r.path,o);r.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Vc("transaction failed: Data returned ",i,r.path);let t=ko(i);const l="object"===typeof i&&null!=i&&(0,ci.gR)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const a=r.currentWriteId,c=rh(e),h=kc(t,n,c);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=h,r.currentWriteId=hh(e),o.splice(o.indexOf(a),1),s=s.concat(za(e.serverSyncTree_,r.path,h,r.currentWriteId,r.applyLocally)),s=s.concat(Ya(e.serverSyncTree_,a,!0))}else h=!0,c="nodata",s=s.concat(Ya(e.serverSyncTree_,r.currentWriteId,!0))}Xc(e.eventQueue_,n,s),s=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===c?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(c),!1,null)))))}Eh(e,e.transactionQueueTree_);for(let l=0;l<i.length;l++)Xi(i[l]);vh(e,e.transactionQueueTree_)}function bh(e,t){let n,i=e.transactionQueueTree_;n=fr(t);while(null!==n&&void 0===Ec(i))i=Ic(i,n),t=mr(t),n=fr(t);return i}function Th(e,t){const n=[];return Ih(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ih(e,t,n){const i=Ec(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Pc(t,(t=>{Ih(e,t,n)}))}function Eh(e,t){const n=Ec(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Sc(t,n.length>0?n:void 0)}Pc(t,(t=>{Eh(e,t)}))}function Sh(e,t){const n=Dc(bh(e,t)),i=Ic(e.transactionQueueTree_,t);return Ac(i,(t=>{xh(e,t)})),xh(e,i),Rc(i,(t=>{xh(e,t)})),n}function xh(e,t){const n=Ec(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,ci.vA)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,ci.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ya(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Sc(t,void 0):n.length=r+1,Xc(e.eventQueue_,Dc(t),s);for(let e=0;e<i.length;e++)Xi(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Ph(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ri(`Invalid query segment '${n}' in query '${e}'`)}return t}const Rh=function(e,t){const n=Ah(e),i=n.namespace;"firebase.com"===n.domain&&Pi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Pi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ai();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new _s(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new pr(n.pathString)}},Ah=function(e){let t="",n="",i="",s="",r="",o=!0,l="https",a=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(l=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=Nh(e.substring(h,u)));const d=Ph(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===l||"wss"===l,a=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}},Dh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fh{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,ci.As)(this.snapshot.exportVal())}}class Lh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,ci.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return br(this._path)?null:yr(this._path)}get ref(){return new qh(this._repo,this._path)}get _queryIdentifier(){const e=Oo(this._queryParams),t=Ui(e);return"{}"===t?"default":t}get _queryObject(){return Oo(this._queryParams)}isEqual(e){if(e=(0,ci.Ku)(e),!(e instanceof Oh))return!1;const t=this._repo===e._repo,n=Ir(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vr(this._path)}}class qh extends Oh{constructor(e,t){super(e,t,new Fo,!1)}get parent(){const e=wr(this._path);return null===e?null:new qh(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Wh{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pr(e),n=jh(this.ref,e);return new Wh(this._node.getChild(t),n,co)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Wh(n,jh(this.ref,t),co))))}hasChild(e){const t=new pr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uh(e,t){return e=(0,ci.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?jh(e._root,t):e._root}function jh(e,t){return e=(0,ci.Ku)(e),null===fr(e._path)?Yc("child","path",t,!1):zc("child","path",t,!1),new qh(e._repo,kr(e._path,t))}function Hh(e,t){e=(0,ci.Ku)(e),Kc("set",e._path),Hc("set",t,e._path,!1);const n=new ci.cY;return uh(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Vh{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Fh("value",this,new Wh(e.snapshotNode,new qh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lh(this,e,t):null}matches(e){return e instanceof Vh&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class zh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lh(this,e,t):null}createEvent(e,t){(0,ci.vA)(null!=e.childName,"Child events should have a childName.");const n=jh(new qh(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Fh(e.type,this,new Wh(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zh&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Yh(e,t,n,i,s){let r;if("object"===typeof i&&(r=void 0,s=i),"function"===typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{_h(e._repo,e,l),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Mh(n,r||void 0),l="value"===t?new Vh(o):new zh(t,o);return ph(e._repo,e,l),()=>_h(e._repo,e,l)}function Kh(e,t,n,i){return Yh(e,"value",t,n,i)}Sa(qh),Ua(qh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bh="FIREBASE_DATABASE_EMULATOR_HOST",$h={};let Gh=!1;function Qh(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Pi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Si("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,l,a=Rh(r,s),c=a.repoInfo;"undefined"!==typeof process&&(l={NODE_ENV:"production",BASE_URL:"/capstone/"}[Bh]),l?(o=!0,r=`http://${l}?ns=${c.namespace}`,a=Rh(r,s),c=a.repoInfo):o=!a.repoInfo.secure;const h=s&&o?new ns(ns.OWNER):new ts(e.name,e.options,t);Bc("Invalid Firebase Database URL",a),br(a.path)||Pi("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Jh(c,e,h,new es(e,n));return new Zh(u,e)}function Xh(e,t){const n=$h[t];n&&n[e.key]===e||Pi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fh(e),delete n[e.key]}function Jh(e,t,n,i){let s=$h[t.name];s||(s={},$h[t.name]=s);let r=s[e.toURLString()];return r&&Pi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nh(e,Gh,n,i),s[e.toURLString()]=r,r}class Zh{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ih(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qh(this._repo,_r())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Xh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Pi("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eu(e){_i(li.MF),(0,li.om)(new ai.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Qh(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),(0,li.KO)(ui,di,e),(0,li.KO)(ui,di,"esm2020")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ur.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};eu();var tu=n(5328),nu=n(4228),iu=n(4783),su={name:"MyPage",components:{User:ti,Smile:ni,Edit2:ii,PawPrint:si,FileText:ri,BadgeDollarSign:oi},created(){this.userStore=(0,iu.k)()},data(){return{user:null,isEditing:!1,editedUser:null}},methods:{startEditing(){this.isEditing=!0,this.editedUser={...this.user}},async saveChanges(){const e=tu.j2.currentUser?.uid;if(e)try{await Hh(Uh(tu.db,`users/${e}`),this.editedUser),this.user={...this.editedUser},this.userStore.setUser(this.editedUser),this.isEditing=!1,alert("정보가 저장되었습니다.")}catch(Ni){console.error("저장 실패:",Ni),alert("오류가 발생했습니다.")}},cancelEditing(){this.isEditing=!1,this.editedUser=null}},mounted(){(0,nu.hg)(tu.j2,(e=>{if(e){const t=e.uid,n=Uh(tu.db,`users/${t}`);Kh(n,(e=>{e.exists()?this.user=e.val():console.log("No user data found.")}))}else console.log("User not logged in.")}))}},ru=n(1241);const ou=(0,ru.A)(su,[["render",y],["__scopeId","data-v-42e51be7"]]);var lu=ou}}]);
//# sourceMappingURL=10.9aa99a67.js.map