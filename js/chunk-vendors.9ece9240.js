(self["webpackChunkmyproject"]=self["webpackChunkmyproject"]||[]).push([[504],{34:function(t,e,n){"use strict";var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},81:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},116:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},139:function(t,e,n){const r=n(7195);function i(t){this.mode=r.BYTE,this.data="string"===typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return C},EW:function(){return zt},Gc:function(){return _t},IG:function(){return At},IJ:function(){return Pt},KR:function(){return xt},Kh:function(){return wt},Pr:function(){return Ft},QW:function(){return Vt},R1:function(){return Lt},Tm:function(){return It},X2:function(){return h},a1:function(){return Nt},bl:function(){return k},fE:function(){return St},g8:function(){return Tt},hV:function(){return Qt},hZ:function(){return F},i9:function(){return Ot},jr:function(){return u},ju:function(){return Ct},lJ:function(){return Rt},o5:function(){return c},qA:function(){return B},u4:function(){return U},uY:function(){return a},ux:function(){return kt},wB:function(){return Gt},yC:function(){return o}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(t){return new o(t)}function c(){return i}function u(t,e=!1){i&&i.cleanups.push(t)}const l=new WeakSet;class h{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||g(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),v(this);const t=s,e=I;s=this,I=!0;try{return this.fn()}finally{0,w(this),s=t,I=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)E(t);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_(this)&&this.run()}get dirty(){return _(this)}}let d,f,p=0;function g(t,e=!1){if(t.flags|=8,e)return t.next=f,void(f=t);t.next=d,d=t}function m(){p++}function y(){if(--p>0)return;if(f){let t=f;f=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(d){let n=d;d=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function v(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function w(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),E(r),T(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function _(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(b(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function b(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===R)return;if(t.globalVersion=R,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!_(t)))return;t.flags|=2;const e=t.dep,n=s,i=I;s=t,I=!0;try{v(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,I=i,w(t),t.flags&=-3}}function E(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)E(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function T(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let I=!0;const S=[];function C(){S.push(I),I=!1}function k(){const t=S.pop();I=void 0===t||t}function A(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let R=0;class N{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!s||!I||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new N(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,x(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,R++,this.notify(t)}notify(t){m();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{y()}}}function x(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)x(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const P=new WeakMap,D=Symbol(""),M=Symbol(""),L=Symbol("");function U(t,e,n){if(I&&s){let e=P.get(t);e||P.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new O),r.map=e,r.key=n),r.track()}}function F(t,e,n,i,s,o){const a=P.get(t);if(!a)return void R++;const c=t=>{t&&t.trigger()};if(m(),"clear"===e)a.forEach(c);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===L||!(0,r.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(L)),e){case"add":s?o&&c(a.get("length")):(c(a.get(D)),(0,r.CE)(t)&&c(a.get(M)));break;case"delete":s||(c(a.get(D)),(0,r.CE)(t)&&c(a.get(M)));break;case"set":(0,r.CE)(t)&&c(a.get(D));break}}y()}function V(t,e){const n=P.get(t);return n&&n.get(e)}function j(t){const e=kt(t);return e===t?e:(U(e,"iterate",L),St(t)?e:e.map(Rt))}function B(t){return U(t=kt(t),"iterate",L),t}const $={__proto__:null,[Symbol.iterator](){return z(this,Symbol.iterator,Rt)},concat(...t){return j(this).concat(...t.map((t=>(0,r.cy)(t)?j(t):t)))},entries(){return z(this,"entries",(t=>(t[1]=Rt(t[1]),t)))},every(t,e){return q(this,"every",t,e,void 0,arguments)},filter(t,e){return q(this,"filter",t,e,(t=>t.map(Rt)),arguments)},find(t,e){return q(this,"find",t,e,Rt,arguments)},findIndex(t,e){return q(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return q(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return q(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return q(this,"forEach",t,e,void 0,arguments)},includes(...t){return W(this,"includes",t)},indexOf(...t){return W(this,"indexOf",t)},join(t){return j(this).join(t)},lastIndexOf(...t){return W(this,"lastIndexOf",t)},map(t,e){return q(this,"map",t,e,void 0,arguments)},pop(){return G(this,"pop")},push(...t){return G(this,"push",t)},reduce(t,...e){return H(this,"reduce",t,e)},reduceRight(t,...e){return H(this,"reduceRight",t,e)},shift(){return G(this,"shift")},some(t,e){return q(this,"some",t,e,void 0,arguments)},splice(...t){return G(this,"splice",t)},toReversed(){return j(this).toReversed()},toSorted(t){return j(this).toSorted(t)},toSpliced(...t){return j(this).toSpliced(...t)},unshift(...t){return G(this,"unshift",t)},values(){return z(this,"values",Rt)}};function z(t,e,n){const r=B(t),i=r[e]();return r===t||St(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.value&&(t.value=n(t.value)),t}),i}const K=Array.prototype;function q(t,e,n,r,i,s){const o=B(t),a=o!==t&&!St(t),c=o[e];if(c!==K[e]){const e=c.apply(t,s);return a?Rt(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,Rt(e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&i?i(l):l}function H(t,e,n,r){const i=B(t);let s=n;return i!==t&&(St(t)?n.length>3&&(s=function(e,r,i){return n.call(this,e,r,i,t)}):s=function(e,r,i){return n.call(this,e,Rt(r),i,t)}),i[e](s,...r)}function W(t,e,n){const r=kt(t);U(r,"iterate",L);const i=r[e](...n);return-1!==i&&!1!==i||!Ct(n[0])?i:(n[0]=kt(n[0]),r[e](...n))}function G(t,e,n=[]){C(),m();const r=kt(t)[e].apply(t,n);return y(),k(),r}const Q=(0,r.pD)("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function Y(t){(0,r.Bm)(t)||(t=String(t));const e=kt(this);return U(e,"has",t),e.hasOwnProperty(t)}class J{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?mt:gt:s?pt:ft).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=$[e]))return t;if("hasOwnProperty"===e)return Y}const a=Reflect.get(t,e,Ot(t)?t:n);return((0,r.Bm)(e)?X.has(e):Q(e))?a:(i||U(t,"get",e),s?a:Ot(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?bt(a):wt(a):a)}}class Z extends J{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=It(s);if(St(n)||It(n)||(s=kt(s),n=kt(n)),!(0,r.cy)(t)&&Ot(s)&&!Ot(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,Ot(t)?t:i);return t===kt(i)&&(o?(0,r.$H)(n,s)&&F(t,"set",e,n,s):F(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&F(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&X.has(e)||U(t,"has",e),n}ownKeys(t){return U(t,"iterate",(0,r.cy)(t)?"length":D),Reflect.ownKeys(t)}}class tt extends J{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const et=new Z,nt=new tt,rt=new Z(!0),it=t=>t,st=t=>Reflect.getPrototypeOf(t);function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=kt(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?it:e?Nt:Rt;return!e&&U(o,"iterate",u?M:D),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ct(t,e){const n={get(n){const i=this["__v_raw"],s=kt(i),o=kt(n);t||((0,r.$H)(n,o)&&U(s,"get",n),U(s,"get",o));const{has:a}=st(s),c=e?it:t?Nt:Rt;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&U(kt(e),"iterate",D),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],i=kt(n),s=kt(e);return t||((0,r.$H)(e,s)&&U(i,"has",e),U(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=kt(s),a=e?it:t?Nt:Rt;return!t&&U(o,"iterate",D),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear")}:{add(t){e||St(t)||It(t)||(t=kt(t));const n=kt(this),r=st(n),i=r.has.call(n,t);return i||(n.add(t),F(n,"add",t,t)),this},set(t,n){e||St(n)||It(n)||(n=kt(n));const i=kt(this),{has:s,get:o}=st(i);let a=s.call(i,t);a||(t=kt(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&F(i,"set",t,n,c):F(i,"add",t,n),this},delete(t){const e=kt(this),{has:n,get:r}=st(e);let i=n.call(e,t);i||(t=kt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&F(e,"delete",t,void 0,s),o},clear(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&F(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=ot(r,t,e)})),n}function ut(t,e){const n=ct(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},dt={get:ut(!0,!1)};const ft=new WeakMap,pt=new WeakMap,gt=new WeakMap,mt=new WeakMap;function yt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:yt((0,r.Zf)(t))}function wt(t){return It(t)?t:Et(t,!1,et,lt,ft)}function _t(t){return Et(t,!1,rt,ht,pt)}function bt(t){return Et(t,!0,nt,dt,gt)}function Et(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=vt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function Tt(t){return It(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function St(t){return!(!t||!t["__v_isShallow"])}function Ct(t){return!!t&&!!t["__v_raw"]}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function At(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Rt=t=>(0,r.Gv)(t)?wt(t):t,Nt=t=>(0,r.Gv)(t)?bt(t):t;function Ot(t){return!!t&&!0===t["__v_isRef"]}function xt(t){return Dt(t,!1)}function Pt(t){return Dt(t,!0)}function Dt(t,e){return Ot(t)?t:new Mt(t,e)}class Mt{constructor(t,e){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:kt(t),this._value=e?t:Rt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||St(t)||It(t);t=n?t:kt(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:Rt(t),this.dep.trigger())}}function Lt(t){return Ot(t)?t.value:t}const Ut={get:(t,e,n)=>"__v_raw"===e?t:Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ot(i)&&!Ot(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ft(t){return Tt(t)?t:new Proxy(t,Ut)}function Vt(t){const e=(0,r.cy)(t)?new Array(t.length):{};for(const n in t)e[n]=Bt(t,n);return e}class jt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return V(kt(this._object),this._key)}}function Bt(t,e,n){const r=t[e];return Ot(r)?r:new jt(t,e,n)}class $t{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=R-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return g(this,!0),!0}get value(){const t=this.dep.track();return b(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function zt(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new $t(i,s,n);return o}const Kt={},qt=new WeakMap;let Ht;function Wt(t,e=!1,n=Ht){if(n){let e=qt.get(n);e||qt.set(n,e=[]),e.push(t)}else 0}function Gt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:u,call:l}=n,d=t=>s?t:St(t)||!1===s||0===s?Qt(t,1):Qt(t);let f,p,g,m,y=!1,v=!1;if(Ot(t)?(p=()=>t.value,y=St(t)):Tt(t)?(p=()=>d(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some((t=>Tt(t)||St(t))),p=()=>t.map((t=>Ot(t)?t.value:Tt(t)?d(t):(0,r.Tn)(t)?l?l(t,2):t():void 0))):p=(0,r.Tn)(t)?e?l?()=>l(t,2):t:()=>{if(g){C();try{g()}finally{k()}}const e=Ht;Ht=f;try{return l?l(t,3,[m]):t(m)}finally{Ht=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>Qt(t(),e)}const w=c(),_=()=>{f.stop(),w&&w.active&&(0,r.TF)(w.effects,f)};if(o&&e){const t=e;e=(...e)=>{t(...e),_()}}let b=v?new Array(t.length).fill(Kt):Kt;const E=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(s||y||(v?t.some(((t,e)=>(0,r.$H)(t,b[e]))):(0,r.$H)(t,b))){g&&g();const n=Ht;Ht=f;try{const n=[t,b===Kt?void 0:v&&b[0]===Kt?[]:b,m];l?l(e,3,n):e(...n),b=t}finally{Ht=n}}}else f.run()};return u&&u(E),f=new h(p),f.scheduler=a?()=>a(E,!1):E,m=t=>Wt(t,!1,f),g=f.onStop=()=>{const t=qt.get(f);if(t){if(l)l(t,4);else for(const e of t)e();qt.delete(f)}},e?i?E(!0):b=f.run():a?a(E.bind(null,!0),!0):f.run(),_.pause=f.pause.bind(f),_.resume=f.resume.bind(f),_.stop=_,_}function Qt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,Ot(t))Qt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)Qt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{Qt(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)Qt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qt(t[r],e,n)}return t}},262:function(t,e,n){"use strict";n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return gt},om:function(){return ft},Sx:function(){return bt},Wp:function(){return _t},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579);var r=n(798),i=n(6189),s=n(2455);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
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
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===e?.type}const O="@firebase/app",x="0.14.5",P=new i.Vy("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/data-connect",z="@firebase/database-compat",K="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",it="@firebase/firestore-compat",st="firebase",ot="12.5.0",at="[DEFAULT]",ct={[O]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-data-connect",[z]:"fire-rtdb-compat",[K]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){P.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return P.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())dt(n,t);for(const n of lt.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
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
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new s.FA("app","Firebase",mt);
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
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
const wt=ot;function _t(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i={name:at,automaticDataCollectionEnabled:!0,...e},o=i.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw yt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new vt(n,i,c);return ut.set(o,u),u}function bt(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return _t();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){let i=ct[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void P.warn(t.join(" "))}ft(new r.uA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let Ct=null;function kt(){return Ct||(Ct=I(Tt,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function At(t){try{const e=await kt(),n=e.transaction(St),r=await n.objectStore(St).get(Nt(t));return await n.done,r}catch(e){if(e instanceof s.g)P.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});P.warn(t.message)}}}async function Rt(t,e){try{const n=await kt(),r=n.transaction(St,"readwrite"),i=r.objectStore(St);await i.put(e,Nt(t)),await r.done}catch(n){if(n instanceof s.g)P.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:n?.message});P.warn(t.message)}}}function Nt(t){return`${t.name}!${t.options.appId}`}
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
 */const Ot=1024,xt=30;class Pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Dt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>xt){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){P.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Dt(),{heartbeatsToSend:e,unsentEntries:n}=Mt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return P.warn(t),""}}}function Dt(){const t=new Date;return t.toISOString().substring(0,10)}function Mt(t,e=Ot){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await At(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Rt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Rt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
 */function Vt(t){ft(new r.uA("platform-logger",(t=>new R(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Pt(t)),"PRIVATE")),Et(O,x,t),Et(O,x,"esm2020"),Et("fire-js","")}Vt("")},283:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},350:function(t,e,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},397:function(t,e,n){"use strict";var r=n(7751);t.exports=r("document","documentElement")},421:function(t){"use strict";t.exports={}},507:function(t,e,n){"use strict";var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},616:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},655:function(t,e,n){"use strict";var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:function(t,e,n){"use strict";var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},757:function(t,e,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},798:function(t,e,n){"use strict";n.d(e,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(2455);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},851:function(t,e,n){"use strict";var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},866:function(t,e,n){const r=n(7195);function i(t){this.mode=r.NUMERIC,this.data=t.toString()}i.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const i=this.data.length-e;i>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*i+1))},t.exports=i},1006:function(t,e,n){n(8111),n(7588);const r=n(9547),i=n(2039),s=n(1210),o=n(7195),a=n(5847),c=7973,u=r.getBCHDigit(c);function l(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function h(t,e){return o.getCharCountIndicator(t,e)+4}function d(t,e){let n=0;return t.forEach((function(t){const r=h(t.mode,e);n+=r+t.getBitsLength()})),n}function f(t,n){for(let r=1;r<=40;r++){const i=d(t,r);if(i<=e.getCapacity(r,n,o.MIXED))return r}}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=o.BYTE);const s=r.getSymbolTotalCodewords(t),c=i.getTotalCodewordsCount(t,e),u=8*(s-c);if(n===o.MIXED)return u;const l=u-h(n,t);switch(n){case o.NUMERIC:return Math.floor(l/10*3);case o.ALPHANUMERIC:return Math.floor(l/11*2);case o.KANJI:return Math.floor(l/13);case o.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const r=s.from(e,s.M);if(Array.isArray(t)){if(t.length>1)return f(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-u>=0)e^=c<<r.getBCHDigit(e)-u;return t<<12|e}},1072:function(t,e,n){"use strict";var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1148:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return!s(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(t,e,n){"use strict";var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var _=d("state");f[_]=!0,r=function(t,e){if(l(t,_))throw new g(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},s=function(t){return l(t,_)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},1210:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(i){return r}}},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1291:function(t,e,n){"use strict";var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1387:function(t,e,n){"use strict";n.d(e,{LA:function(){return ct},aE:function(){return ie},lq:function(){return ae},rd:function(){return oe}});n(4114),n(8111),n(1148),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(144);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&o(t.default)}const c=Object.assign;function u(t,e){const n={};for(const r in e){const i=e[r];n[r]=h(i)?i.map(t):t(i)}return n}const l=()=>{},h=Array.isArray;const d=/#/g,f=/&/g,p=/\//g,g=/=/g,m=/\?/g,y=/\+/g,v=/%5B/g,w=/%5D/g,_=/%5E/g,b=/%60/g,E=/%7B/g,T=/%7C/g,I=/%7D/g,S=/%20/g;function C(t){return encodeURI(""+t).replace(T,"|").replace(v,"[").replace(w,"]")}function k(t){return C(t).replace(E,"{").replace(I,"}").replace(_,"^")}function A(t){return C(t).replace(y,"%2B").replace(S,"+").replace(d,"%23").replace(f,"%26").replace(b,"`").replace(E,"{").replace(I,"}").replace(_,"^")}function R(t){return A(t).replace(g,"%3D")}function N(t){return C(t).replace(d,"%23").replace(m,"%3F")}function O(t){return null==t?"":N(t).replace(p,"%2F")}function x(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const P=/\/$/,D=t=>t.replace(P,"");function M(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=z(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:x(o)}}function L(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function U(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function F(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(e.matched[r],n.matched[i])&&j(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function V(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!B(t[n],e[n]))return!1;return!0}function B(t,e){return h(t)?$(t,e):h(e)?$(e,t):t===e}function $(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function z(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var q,H;(function(t){t["pop"]="pop",t["push"]="push"})(q||(q={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(H||(H={}));function W(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),D(t)}const G=/^[^#]+#/;function Q(t,e){return t.replace(G,"#")+e}function X(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=X(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Z(t,e){const n=history.state?history.state.position-e:-1;return n+t}const tt=new Map;function et(t,e){tt.set(t,e)}function nt(t){const e=tt.get(t);return tt.delete(t),e}let rt=()=>location.protocol+"//"+location.host;function it(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),U(n,"")}const o=U(n,t);return o+r+i}function st(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=it(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:q.pop,direction:l?l>0?H.forward:H.back:H.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(c({},t.state,{scroll:Y()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ot(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function at(t){const{history:e,location:n}=window,r={value:it(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:rt()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=c({},e.state,ot(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=c({},i.value,e.state,{forward:t,scroll:Y()});s(o.current,o,!0);const a=c({},ot(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ct(t){t=W(t);const e=at(t),n=st(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=c({location:"",base:t,go:r,createHref:Q.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ut(t){return"string"===typeof t||t&&"object"===typeof t}function lt(t){return"string"===typeof t||"symbol"===typeof t}const ht=Symbol("");var dt;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(dt||(dt={}));function ft(t,e){return c(new Error,{type:t,[ht]:!0},e)}function pt(t,e){return t instanceof Error&&ht in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",mt={sensitive:!1,strict:!1,start:!0,end:!0},yt=/[.+*?^${}()[\]/\\]/g;function vt(t,e){const n=c({},mt,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const t=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let e=0;e<c.length;e++){const r=c[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(yt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:u}=r;s.push({name:t,repeatable:n,optional:a});const h=u||gt;if(h!==gt){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(h(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=h(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:u}}function wt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function _t(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=wt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(bt(r))return 1;if(bt(i))return-1}return i.length-r.length}function bt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Et={type:0,value:""},Tt=/[a-zA-Z0-9_]/;function It(t){if(!t)return[[]];if("/"===t)return[[Et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Tt.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function St(t,e,n){const r=vt(It(t.path),n);const i=c(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function Ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=At(t);a.aliasOf=r&&r.record;const h=xt(e,t),d=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(At(c({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a})))}let f,p;for(const e of d){const{path:c}=e;if(n&&"/"!==c[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(c&&r+c)}if(f=St(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!Nt(f)&&o(t.name)),Mt(f)&&u(f),a.children){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f}return p?()=>{o(p)}:l}function o(t){if(lt(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function u(t){const e=Pt(t,n);n.splice(e,0,t),t.record.name&&!Nt(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw ft(1,{location:t});0,o=i.record.name,a=c(kt(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&kt(t.params,i.keys.map((t=>t.name)))),s=i.stringify(a)}else if(null!=t.path)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw ft(1,{location:t,currentLocation:e});o=i.record.name,a=c({},e.params,t.params),s=i.stringify(a)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:u,meta:Ot(u)}}function d(){n.length=0,r.clear()}return e=xt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:i}}function kt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function At(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Rt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Rt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Nt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ot(t){return t.reduce(((t,e)=>c(t,e.meta)),{})}function xt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1,s=_t(t,e[i]);s<0?r=i:n=i+1}const i=Dt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Dt(t){let e=t;while(e=e.parent)if(Mt(e)&&0===_t(t,e))return e}function Mt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(y," "),n=t.indexOf("="),s=x(n<0?t:t.slice(0,n)),o=n<0?null:x(t.slice(n+1));if(s in e){let t=e[s];h(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ut(t){let e="";for(let n in t){const r=t[n];if(n=R(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=h(r)?r.map((t=>t&&A(t))):[r&&A(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=h(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Vt=Symbol(""),jt=Symbol(""),Bt=Symbol(""),$t=Symbol(""),zt=Symbol("");function Kt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,r,i,s=t=>t()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=t=>{!1===t?c(ft(4,{from:n,to:e})):t instanceof Error?c(t):ut(t)?c(ft(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s((()=>t.call(r&&r.instances[i],e,n,u)));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch((t=>c(t)))}))}function Ht(t,e,n,r,i=t=>t()){const s=[];for(const c of t){0;for(const t in c.components){let u=c.components[t];if("beforeRouteEnter"===e||c.instances[t])if(o(u)){const o=u.__vccOpts||u,a=o[e];a&&s.push(qt(a,n,r,c,t,i))}else{let o=u();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${t}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[t]=s,c.components[t]=o;const u=o.__vccOpts||o,l=u[e];return l&&qt(l,n,r,c,t,i)()}))))}}}return s}function Wt(t){const e=(0,r.WQ)(Bt),n=(0,r.WQ)($t);const s=(0,r.EW)((()=>{const n=(0,i.R1)(t.to);return e.resolve(n)})),o=(0,r.EW)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(V.bind(null,r));if(o>-1)return o;const a=Zt(t[e-2]);return e>1&&Zt(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,t[e-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Jt(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&j(n.params,s.value.params)));function u(n={}){if(Yt(n)){const n=e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(l);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}function Gt(t){return 1===t.length?t[0]:t}const Qt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wt,setup(t,{slots:e}){const n=(0,i.Kh)(Wt(t)),{options:s}=(0,r.WQ)(Bt),o=(0,r.EW)((()=>({[te(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[te(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&Gt(e.default(n));return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Xt=Qt;function Yt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const te=(t,e,n)=>null!=t?t:null!=e?e:n,ee=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)(zt),o=(0,r.EW)((()=>t.route||s.value)),a=(0,r.WQ)(jt,0),u=(0,r.EW)((()=>{let t=(0,i.R1)(a);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(jt,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Vt,l),(0,r.Gt)(zt,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&V(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,a=l.value,u=a&&a.components[s];if(!u)return ne(n.default,{Component:u,route:i});const d=a.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(a.instances[s]=null)},g=(0,r.h)(u,c({},f,e,{onVnodeUnmounted:p,ref:h}));return ne(n.default,{Component:g,route:i})||g}}});function ne(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const re=ee;function ie(t){const e=Ct(t.routes,t),n=t.parseQuery||Lt,o=t.stringifyQuery||Ut,a=t.history;const d=Kt(),f=Kt(),p=Kt(),g=(0,i.IJ)(K);let m=K;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=u.bind(null,(t=>""+t)),v=u.bind(null,O),w=u.bind(null,x);function _(t,n){let r,i;return lt(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function b(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function E(){return e.getRoutes().map((t=>t.record))}function T(t){return!!e.getRecordMatcher(t)}function I(t,r){if(r=c({},r||g.value),"string"===typeof t){const i=M(n,t,r.path),s=e.resolve({path:i.path},r),o=a.createHref(i.fullPath);return c(i,s,{params:w(s.params),hash:x(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=t.path)i=c({},t,{path:M(n,t.path,r.path).path});else{const e=c({},t.params);for(const t in e)null==e[t]&&delete e[t];i=c({},t,{params:v(e)}),r.params=v(r.params)}const s=e.resolve(i,r),u=t.hash||"";s.params=y(w(s.params));const l=L(o,c({},t,{hash:k(u),path:s.path})),h=a.createHref(l);return c({fullPath:l,hash:u,query:o===Ut?Ft(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function S(t){return"string"===typeof t?M(n,t,g.value.path):c({},t)}function C(t,e){if(m!==t)return ft(8,{from:e,to:t})}function A(t){return P(t)}function R(t){return A(c(S(t),{replace:!0}))}function N(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),c({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function P(t,e){const n=m=I(t),r=g.value,i=t.state,s=t.force,a=!0===t.replace,u=N(n);if(u)return P(c(S(u),{state:"object"===typeof u?c({},i,u.state):i,force:s,replace:a}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&F(o,r,n)&&(h=ft(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((t=>pt(t)?pt(t,2)?t:tt(t):Q(t,l,r))).then((t=>{if(t){if(pt(t,2))return P(c({replace:a},S(t.to),{state:"object"===typeof t.to?c({},i,t.to.state):i,force:s}),e||l)}else t=B(l,r,!0,a,i);return j(l,r,t),t}))}function D(t,e){const n=C(t,e);return n?Promise.reject(n):Promise.resolve()}function U(t){const e=ot.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function V(t,e){let n;const[r,i,s]=se(t,e);n=Ht(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=D.bind(null,t,e);return n.push(o),ct(n).then((()=>{n=[];for(const r of d.list())n.push(qt(r,t,e));return n.push(o),ct(n)})).then((()=>{n=Ht(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ct(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(s,"beforeRouteEnter",t,e,U),n.push(o),ct(n)))).then((()=>{n=[];for(const r of f.list())n.push(qt(r,t,e));return n.push(o),ct(n)})).catch((t=>pt(t,8)?t:Promise.reject(t)))}function j(t,e,n){p.list().forEach((r=>U((()=>r(t,e,n)))))}function B(t,e,n,r,i){const o=C(t,e);if(o)return o;const u=e===K,l=s?history.state:{};n&&(r||u?a.replace(t.fullPath,c({scroll:u&&l&&l.scroll},i)):a.push(t.fullPath,i)),g.value=t,rt(t,e,n,u),tt()}let $;function z(){$||($=a.listen(((t,e,n)=>{if(!at.listening)return;const r=I(t),i=N(r);if(i)return void P(c(i,{replace:!0,force:!0}),r).catch(l);m=r;const o=g.value;s&&et(Z(o.fullPath,n.delta),Y()),V(r,o).catch((t=>pt(t,12)?t:pt(t,2)?(P(c(S(t.to),{force:!0}),r).then((t=>{pt(t,20)&&!n.delta&&n.type===q.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(t,r,o)))).then((t=>{t=t||B(r,o,!1),t&&(n.delta&&!pt(t,8)?a.go(-n.delta,!1):n.type===q.pop&&pt(t,20)&&a.go(-1,!1)),j(r,o,t)})).catch(l)})))}let H,W=Kt(),G=Kt();function Q(t,e,n){tt(t);const r=G.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function X(){return H&&g.value!==K?Promise.resolve():new Promise(((t,e)=>{W.add([t,e])}))}function tt(t){return H||(H=!t,z(),W.list().forEach((([e,n])=>t?n(t):e())),W.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&nt(Z(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,c))).then((t=>t&&J(t))).catch((t=>Q(t,e,n)))}const it=t=>a.go(t);let st;const ot=new Set,at={currentRoute:g,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:E,resolve:I,options:t,push:A,replace:R,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:X,install(t){const e=this;t.component("RouterLink",Xt),t.component("RouterView",re),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!st&&g.value===K&&(st=!0,A(a.location).catch((t=>{0})));const n={};for(const i in K)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide(Bt,e),t.provide($t,(0,i.Gc)(n)),t.provide(zt,g);const r=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(m=K,$&&$(),$=null,g.value=K,st=!1,H=!1),r()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>U(e)))),Promise.resolve())}return at}function se(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>V(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>V(t,a)))||i.push(a))}return[n,r,i]}function oe(){return(0,r.WQ)(Bt)}function ae(t){return(0,r.WQ)($t)}},1558:function(t,e,n){const r=n(2528);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let i=0;i<t.length;i++)for(let s=0;s<e.length;s++)n[i+s]^=r.mul(t[i],e[s]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let s=0;s<e.length;s++)n[s]^=r.mul(e[s],t);let i=0;while(i<n.length&&0===n[i])i++;n=n.slice(i)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let i=0;i<t;i++)n=e.mul(n,new Uint8Array([1,r.exp(i)]));return n}},1625:function(t,e,n){"use strict";var r=n(9504);t.exports=r({}.isPrototypeOf)},1698:function(t,e,n){"use strict";var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},1701:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(4549),d=n(6395),f=!d&&h("map",TypeError),p=c((function(){var t=this.iterator,e=o(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)}));r({target:"Iterator",proto:!0,real:!0,forced:d||f},{map:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return f?i(f,this,t):new p(a(this),{mapper:t})}})},1767:function(t){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1806:function(t,e,n){"use strict";var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},1828:function(t,e,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1910:function(t,e,n){const r=n(7195),i=n(9547);function s(t){this.mode=r.KANJI,this.data=t}s.getBitsLength=function(t){return 13*t},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=i.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=s},1924:function(t,e,n){"use strict";n.d(e,{qk:function(){return re},c7:function(){return se},KR:function(){return ie},D:function(){return ne}});n(4114),n(8111),n(2489),n(7588),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4979);var r=n(262),i=n(2455),s=n(798);
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
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class l extends i.g{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function v(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(t){return new l(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function A(t){return new l(h.INVALID_ARGUMENT,t)}function R(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function N(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function x(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class P{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=P.makeFromUrl(t,e)}catch(r){return new P(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<w.length;o++){const e=w[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new P(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function M(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function L(t){t(!1)}
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
 */function U(t){return void 0!==t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function V(t){return"string"===typeof t||t instanceof String}function j(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob}function $(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function z(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function K(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
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
function q(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class H{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0,d=!1){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.isUsingEmulator=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!e||q(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new W(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new W(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());U(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?R():b();r(t)}else{const t=_();r(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=M(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,r,i,s,o=!0,a=!1){const c=K(t.urlParams),u=t.url+c,l=Object.assign({},t.headers);return X(l,e),G(l,n),Q(l,s),Y(l,r),new H(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function nt(t){if("undefined"===typeof atob)throw k("base-64");return atob(t)}
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
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case rt.RAW:return new it(ot(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw O(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ft{constructor(t,e){let n=0,r="";j(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(j(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(tt.apply(null,e))}{const e=t.map((t=>V(t)?st(rt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new ft(r,!0)}}uploadData(){return this.data_}}
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
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
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
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t,e){return e}class wt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let _t=null;function bt(t){return!V(t)||t.length<2?t:yt(t)}function Et(){if(_t)return _t;const t=[];function e(t,e){return bt(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),_t=t,_t}function Tt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new P(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Tt(r,t),r}function St(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return It(t,i,n)}function Ct(t,e,n,r){const i=pt(e);if(null===i)return null;if(!V(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=z(a,n,r),u=K({alt:"media",token:e});return c+u}));return c[0]}function kt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */class At{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Rt(t){if(!t)throw p()}function Nt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),i}return n}function Ot(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),Ct(i,r,t.host,t._protocol)}return n}function xt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?m(t.bucket):403===e.getStatus()?w(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Pt(t){const e=xt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=g(t.path)),i.serverResponse=r.serverResponse,i}return n}function Dt(t,e,n){const r=e.fullServerUrl(),i=z(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new At(i,s,Ot(t,n),o);return a.errorHandler=Pt(e),a}function Mt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Lt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Mt(null,e)),r}function Ut(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Lt(e,r,i),l=kt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,r,d);if(null===f)throw S();const p={name:u["fullPath"]},g=z(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new At(g,m,Nt(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=xt(e),v}
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
let Ft=null;class Vt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r,s){if(this.sent_)throw x("cannot .send() more than once");if((0,i.zJ)(t)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class jt extends Vt{initXhr(){this.xhr_.responseType="text"}}function Bt(){return Ft?Ft():new jt}
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
 */
class $t{constructor(t,e){this._service=t,this._location=e instanceof P?e:P.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $t(t,e)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new P(this._location.bucket,t);return new $t(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw N(t)}}function zt(t,e,n){t._throwIfRoot("uploadBytes");const r=Ut(t.storage,t._location,Et(),new ft(e,!0),n);return t.storage.makeRequestWithTokens(r,Bt).then((e=>({metadata:e,ref:t})))}function Kt(t){t._throwIfRoot("getDownloadURL");const e=Dt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,Bt).then((t=>{if(null===t)throw C();return t}))}function qt(t,e){const n=mt(t._location.path,e),r=new P(t._location.bucket,n);return new $t(t.storage,r)}
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
 */function Ht(t){return/^[A-Za-z]+:\/\//.test(t)}function Wt(t,e){return new $t(t,e)}function Gt(t,e){if(t instanceof Jt){const n=t;if(null==n._bucket)throw I();const r=new $t(n,n._bucket);return null!=e?Gt(r,e):r}return void 0!==e?qt(t,e):t}function Qt(t,e){if(e&&Ht(e)){if(t instanceof Jt)return Wt(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return Gt(t,e)}function Xt(t,e){const n=e?.[a];return null==n?null:P.makeFromBucketSpec(n,t)}function Yt(t,e,n,r={}){t.host=`${e}:${n}`;const s=(0,i.zJ)(e);s&&((0,i.gE)(`https://${t.host}/b`),(0,i.P1)("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Fy)(o,t.app.options.projectId))}class Jt{constructor(t,e,n,r,i,s=!1){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?P.makeFromBucketSpec(r,this._host):Xt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=Xt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $t(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new D(R());{const s=J(t,this._appId,n,r,e,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Zt="@firebase/storage",te="0.14.0",ee="storage";function ne(t,e,n){return t=(0,i.Ku)(t),zt(t,e,n)}function re(t){return t=(0,i.Ku)(t),Kt(t)}function ie(t,e){return t=(0,i.Ku)(t),Qt(t,e)}function se(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,ee),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&oe(s,...o),s}function oe(t,e,n,r={}){Yt(t,e,n,r)}
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
 */function ae(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jt(n,i,s,e,r.MF)}function ce(){(0,r.om)(new s.uA(ee,ae,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(Zt,te,""),(0,r.KO)(Zt,te,"esm2020")}ce()},1954:function(t,e,n){n(8111),n(7588);const r=n(9547),i=n(1210),s=n(9188),o=n(9927),a=n(6099),c=n(1955),u=n(2395),l=n(2039),h=n(5987),d=n(1006),f=n(4804),p=n(7195),g=n(7942);function m(t,e){const n=t.size,r=c.getPositions(e);for(let i=0;i<r.length;i++){const e=r[i][0],s=r[i][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let i=-1;i<=7;i++)s+i<=-1||n<=s+i||(r>=0&&r<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===r||6===r)||r>=2&&r<=4&&i>=2&&i<=4?t.set(e+r,s+i,!0,!0):t.set(e+r,s+i,!1,!0))}}function y(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function v(t,e){const n=a.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],i=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,i+r,!0,!0):t.set(e+n,i+r,!1,!0)}}function w(t,e){const n=t.size,r=d.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=1===(r>>a&1),t.set(i,s,o,!0),t.set(s,i,o,!0)}function _(t,e,n){const r=t.size,i=f.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=1===(i>>s&1),s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function b(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2){6===a&&a--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(i,a-n)){let r=!1;o<e.length&&(r=1===(e[o]>>>s&1)),t.set(i,a-n,r),s--,-1===s&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}}function E(t,e,n){const i=new s;n.forEach((function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)}));const o=r.getSymbolTotalCodewords(t),a=l.getTotalCodewordsCount(t,e),c=8*(o-a);i.getLengthInBits()+4<=c&&i.put(0,4);while(i.getLengthInBits()%8!==0)i.putBit(0);const u=(c-i.getLengthInBits())/8;for(let r=0;r<u;r++)i.put(r%2?17:236,8);return T(i,t,e)}function T(t,e,n){const i=r.getSymbolTotalCodewords(e),s=l.getTotalCodewordsCount(e,n),o=i-s,a=l.getBlocksCount(e,n),c=i%a,u=a-c,d=Math.floor(i/a),f=Math.floor(o/a),p=f+1,g=d-f,m=new h(g);let y=0;const v=new Array(a),w=new Array(a);let _=0;const b=new Uint8Array(t.buffer);for(let r=0;r<a;r++){const t=r<u?f:p;v[r]=b.slice(y,y+t),w[r]=m.encode(v[r]),y+=t,_=Math.max(_,t)}const E=new Uint8Array(i);let T,I,S=0;for(T=0;T<_;T++)for(I=0;I<a;I++)T<v[I].length&&(E[S++]=v[I][T]);for(T=0;T<g;T++)for(I=0;I<a;I++)E[S++]=w[I][T];return E}function I(t,e,n,i){let s;if(Array.isArray(t))s=g.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=g.rawSplit(t);r=d.getBestVersionForData(e,n)}s=g.fromString(t,r||40)}}const a=d.getBestVersionForData(s,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;const c=E(e,n,s),l=r.getSymbolSize(e),h=new o(l);return m(h,e),y(h),v(h,e),_(h,n,0),e>=7&&w(h,e),b(h,c),isNaN(i)&&(i=u.getBestMask(h,_.bind(null,h,n))),u.applyMask(i,h),_(h,n,i),{modules:h,version:e,errorCorrectionLevel:n,maskPattern:i,segments:s}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,s,o=i.M;return"undefined"!==typeof e&&(o=i.from(e.errorCorrectionLevel,i.M),n=d.from(e.version),s=u.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),I(t,n,o,s)}},1955:function(t,e,n){const r=n(9547).getSymbolSize,i=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-i,0],[0,e-i]]}},2039:function(t,e,n){const r=n(1210),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],s=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return s[4*(t-1)+0];case r.M:return s[4*(t-1)+1];case r.Q:return s[4*(t-1)+2];case r.H:return s[4*(t-1)+3];default:return}}},2106:function(t,e,n){"use strict";var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:function(t,e,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},2195:function(t,e,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2261:function(t,e,n){"use strict";n.d(e,{Ey:function(){return T},nY:function(){return U}});n(4114),n(8111),n(2489),n(7588),n(1701),n(8237),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(6768);
/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let s;const o=t=>s=t,a=Symbol();function c(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var u;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(u||(u={}));const l="undefined"!==typeof window,h=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function d(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function f(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){v(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function p(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function g(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});t.dispatchEvent(n)}}const m="object"===typeof navigator?navigator:{userAgent:""},y=(()=>/Macintosh/.test(m.userAgent)&&/AppleWebKit/.test(m.userAgent)&&!/Safari/.test(m.userAgent))(),v=l?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!y?w:"msSaveOrOpenBlob"in m?_:b:()=>{};function w(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?p(r.href)?f(t,e,n):(r.target="_blank",g(r)):g(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){g(r)}),0))}function _(t,e="download",n){if("string"===typeof t)if(p(t))f(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){g(e)}))}else navigator.msSaveOrOpenBlob(d(t,n),e)}function b(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return f(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(h.HTMLElement))||"safari"in h,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||y)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}const{assign:E}=Object;function T(){const t=(0,r.uY)(!0),e=t.run((()=>(0,r.KR)({})));let n=[],i=[];const s=(0,r.IG)({install(t){o(s),s._a=t,t.provide(a,s),t.config.globalProperties.$pinia=s,i.forEach((t=>n.push(t))),i=[]},use(t){return this._a?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const I=()=>{};function S(t,e,n,i=I){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),i())};return!n&&(0,r.o5)()&&(0,r.jr)(s),s}function C(t,...e){t.slice().forEach((t=>{t(...e)}))}const k=t=>t(),A=Symbol(),R=Symbol();function N(t,e){t instanceof Map&&e instanceof Map?e.forEach(((e,n)=>t.set(n,e))):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];c(s)&&c(i)&&t.hasOwnProperty(n)&&!(0,r.i9)(i)&&!(0,r.g8)(i)?t[n]=N(s,i):t[n]=i}return t}const O=Symbol();function x(t){return!c(t)||!Object.prototype.hasOwnProperty.call(t,O)}const{assign:P}=Object;function D(t){return!(!(0,r.i9)(t)||!t.effect)}function M(t,e,n,s){const{state:a,actions:c,getters:u}=e,l=n.state.value[t];let h;function d(){l||(n.state.value[t]=a?a():{});const e=(0,r.QW)(n.state.value[t]);return P(e,c,Object.keys(u||{}).reduce(((e,s)=>(e[s]=(0,r.IG)((0,i.EW)((()=>{o(n);const e=n._s.get(t);return u[s].call(e,e)}))),e)),{}))}return h=L(t,d,e,n,s,!0),h}function L(t,e,n={},s,a,c){let l;const h=P({actions:{}},n);const d={deep:!0};let f,p;let g,m=[],y=[];const v=s.state.value[t];c||v||(s.state.value[t]={});(0,r.KR)({});let w;function _(e){let n;f=p=!1,"function"===typeof e?(e(s.state.value[t]),n={type:u.patchFunction,storeId:t,events:g}):(N(s.state.value[t],e),n={type:u.patchObject,payload:e,storeId:t,events:g});const r=w=Symbol();(0,i.dY)().then((()=>{w===r&&(f=!0)})),p=!0,C(m,n,s.state.value[t])}const b=c?function(){const{state:t}=n,e=t?t():{};this.$patch((t=>{P(t,e)}))}:I;function E(){l.stop(),m=[],y=[],s._s.delete(t)}const T=(e,n="")=>{if(A in e)return e[R]=n,e;const r=function(){o(s);const n=Array.from(arguments),i=[],a=[];function c(t){i.push(t)}function u(t){a.push(t)}let l;C(y,{args:n,name:r[R],store:M,after:c,onError:u});try{l=e.apply(this&&this.$id===t?this:M,n)}catch(h){throw C(a,h),h}return l instanceof Promise?l.then((t=>(C(i,t),t))).catch((t=>(C(a,t),Promise.reject(t)))):(C(i,l),l)};return r[A]=!0,r[R]=n,r},O={_p:s,$id:t,$onAction:S.bind(null,y),$patch:_,$reset:b,$subscribe(e,n={}){const r=S(m,e,n.detached,(()=>o())),o=l.run((()=>(0,i.wB)((()=>s.state.value[t]),(r=>{("sync"===n.flush?p:f)&&e({storeId:t,type:u.direct,events:g},r)}),P({},d,n))));return r},$dispose:E},M=(0,r.Kh)(O);s._s.set(t,M);const L=s._a&&s._a.runWithContext||k,U=L((()=>s._e.run((()=>(l=(0,r.uY)()).run((()=>e({action:T})))))));for(const i in U){const e=U[i];if((0,r.i9)(e)&&!D(e)||(0,r.g8)(e))c||(v&&x(e)&&((0,r.i9)(e)?e.value=v[i]:N(e,v[i])),s.state.value[t][i]=e);else if("function"===typeof e){const t=T(e,i);U[i]=t,h.actions[i]=e}else 0}return P(M,U),P((0,r.ux)(M),U),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:t=>{_((e=>{P(e,t)}))}}),s._p.forEach((t=>{P(M,l.run((()=>t({store:M,app:s._a,pinia:s,options:h}))))})),v&&c&&n.hydrate&&n.hydrate(M.$state,v),f=!0,p=!0,M}
/*! #__NO_SIDE_EFFECTS__ */function U(t,e,n){let r;const c="function"===typeof e;function u(n,u){const l=(0,i.PS)();n=n||(l?(0,i.WQ)(a,null):null),n&&o(n),n=s,n._s.has(t)||(c?L(t,e,r,n):M(t,r,n));const h=n._s.get(t);return h}return r=c?n:e,u.$id=t,u}},2360:function(t,e,n){"use strict";var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete _[f][o[t]];return _()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=_(),void 0===e?n:s.f(n,e)}},2395:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,i=0,s=0,o=null,a=null;for(let c=0;c<e;c++){i=s=0,o=a=null;for(let u=0;u<e;u++){let e=t.get(c,u);e===o?i++:(i>=5&&(r+=n.N1+(i-5)),o=e,i=1),e=t.get(u,c),e===a?s++:(s>=5&&(r+=n.N1+(s-5)),a=e,s=1)}i>=5&&(r+=n.N1+(i-5)),s>=5&&(r+=n.N1+(s-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let i=0;i<e-1;i++){const e=t.get(n,i)+t.get(n,i+1)+t.get(n+1,i)+t.get(n+1,i+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,i=0,s=0;for(let n=0;n<e;n++){i=s=0;for(let o=0;o<e;o++)i=i<<1&2047|t.get(n,o),o>=10&&(1488===i||93===i)&&r++,s=s<<1&2047|t.get(o,n),o>=10&&(1488===s||93===s)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const i=Math.abs(Math.ceil(100*e/r/5)-10);return i*n.N4},e.applyMask=function(t,e){const n=e.size;for(let i=0;i<n;i++)for(let s=0;s<n;s++)e.isReserved(s,i)||e.xor(s,i,r(t,s,i))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let i=0,s=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<s&&(s=r,i=o)}return i}},2455:function(t,e,n){"use strict";n.d(e,{cY:function(){return _},FA:function(){return $},g:function(){return B},u:function(){return l},Uj:function(){return u},Fy:function(){return T},tD:function(){return Y},bD:function(){return H},hp:function(){return X},T9:function(){return v},Tj:function(){return m},yU:function(){return y},XA:function(){return w},mS:function(){return h},Ku:function(){return et},ZQ:function(){return R},sr:function(){return P},zJ:function(){return b},c1:function(){return x},Im:function(){return q},lT:function(){return M},zW:function(){return F},jZ:function(){return N},lV:function(){return D},nr:function(){return L},Ov:function(){return U},gE:function(){return E},Am:function(){return G},I9:function(){return Q},P1:function(){return A},eX:function(){return V}});n(4114),n(8111),n(7588),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const d=e<<2|o>>4;if(r.push(d),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
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
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const d=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/capstone/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||d()||f()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>g()?.config,w=t=>g()?.[`_${t}`]
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
 */;class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function b(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function E(t){const e=await fetch(t,{credentials:"include"});return e.ok}
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
 */function T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}const I={};function S(){const t={prod:[],emulator:[]};for(const e of Object.keys(I))I[e]?t.emulator.push(e):t.prod.push(e);return t}function C(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let k=!1;function A(t,e){if("undefined"===typeof window||"undefined"===typeof document||!b(window.location.host)||I[t]===e||I[t]||k)return;function n(t){return`__firebase__banner__${t}`}I[t]=e;const r="__firebase__banner",i=S(),s=i.prod.length>0;function o(){const t=document.getElementById(r);t&&t.remove()}function a(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}function c(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}function u(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{k=!0,o()},t}function l(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}function h(){const t=C(r),e=n("text"),i=document.getElementById(e)||document.createElement("span"),o=n("learnmore"),h=document.getElementById(o)||document.createElement("a"),d=n("preprendIcon"),f=document.getElementById(d)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;a(e),l(h,o);const n=u();c(f,d),e.append(f,i,h,n),document.body.appendChild(e)}s?(i.innerText="Preview backend disconnected.",f.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(f.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
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
 */function R(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function N(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())}function O(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function x(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function P(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function D(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function M(){const t=R();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L(){return!O()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U(){return!O()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function F(){try{return"object"===typeof indexedDB}catch(t){return!1}}function V(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}}))}
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
const j="FirebaseError";class B extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=j,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?z(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new B(r,o,n);return a}}function z(t,e){return t.replace(K,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const K=/\{\$([^}]+)}/g;
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
 */function q(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function H(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(W(n)&&W(s)){if(!H(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function W(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
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
function G(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Q(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function X(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function Y(t,e){const n=new J(t,e);return n.subscribe.bind(n)}class J{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=Z(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=tt),void 0===r.error&&(r.error=tt),void 0===r.complete&&(r.complete=tt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Z(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function tt(){}
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
function et(t){return t&&t._delegate?t._delegate:t}},2475:function(t,e,n){"use strict";var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},2489:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),d=n(4549),f=!l&&d("filter",TypeError),p=c((function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l||f},{filter:function(t){o(this);try{s(t)}catch(e){h(this,"throw",e)}return f?i(f,this,t):new p(a(this),{predicate:t})}})},2528:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},2529:function(t){"use strict";t.exports=function(t,e){return{value:t,done:e}}},2603:function(t,e,n){"use strict";var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:function(t,e,n){"use strict";var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),d=n(9539),f=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,_,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),A=r(e,T),R=function(t){return m&&d(m,"normal",t),new p(!0,t)},N=function(t){return I?(s(t),k?A(t[0],t[1],R):A(t[0],t[1])):k?A(t,R):A(t)};if(S)m=t.iterator;else if(C)m=t;else{if(y=h(t),!y)throw new f(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(_=N(t[v]),_&&u(g,_))return _;return new p(!1)}m=l(t,y)}b=S?t.next:m.next;while(!(E=i(b,m)).done){try{_=N(E.value)}catch(O){d(m,"throw",O)}if("object"==typeof _&&_&&u(g,_))return _}return new p(!1)}},2777:function(t,e,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:function(t,e,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},2796:function(t,e,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},2832:function(t,e,n){"use strict";n.d(e,{gS:function(){return Eu},rJ:function(){return lc},kd:function(){return bu},H9:function(){return hc},x7:function(){return mu},GG:function(){return vu},aU:function(){return mc},AB:function(){return su},My:function(){return ru},P:function(){return Jc},O5:function(){return Su},BN:function(){return wu},mZ:function(){return _u},_M:function(){return tu}});n(4114),n(8111),n(1148),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4979);var r,i,s=n(262),o=n(798),a=n(6189),c=n(2455),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=u;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var u={};function h(t){return-128<=t&&t<128?a(t,(function(t){return new c([0|t],t<0?-1:0)})):new c([0|t],t<0?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return w(d(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(f(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=d(Math.pow(e,8));let r=p;for(let s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s);const o=parseInt(t.substring(s,s+i),e);i<8?(i=d(Math.pow(e,i)),r=r.j(i).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function _(t,e){return t.add(w(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(t.g.length>30){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!y(r);){var o=s.add(r);o.l(t)<=0&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return e=_(t,i.j(e)),new E(i,e)}for(i=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=d(n),o=s.j(e);v(o)||o.l(t)>0;)n-=r,s=d(n),o=s.j(e);y(s)&&(s=g),i=i.add(s),t=_(t,o)}return new E(i,t)}function I(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function S(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);const e=d(Math.pow(t,6));var n=this;let r="";for(;;){const i=T(n,e).g;n=_(n,i.j(e));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=i,y(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(this.l(m)<0&&t.l(m)<0)return d(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,b(n,2*r+2*e),n[2*r+2*e+1]+=i*a,b(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,b(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,b(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,y,v,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",(function(t){return t||Symbol("Symbol.dispose")})),i("Array.prototype.values",(function(t){return t||function(){return this[Symbol.iterator]()}})),i("Object.entries",(function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function I(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class C{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function k(t){o.setTimeout((()=>{throw t}),0)}function A(){var t=D;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class R{constructor(){this.h=this.g=null}add(t,e){const n=N.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var N=new C((()=>new O),(t=>t.reset()));class O{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let x,P=!1,D=new R,M=()=>{const t=Promise.resolve(void 0);x=()=>{t.then(L)}};function L(){for(var t;t=A();){try{t.h.call(t.g)}catch(n){k(n)}var e=N;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}P=!1}function U(){this.u=this.u,this.C=this.C}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}U.prototype.u=!1,U.prototype.dispose=function(){this.u||(this.u=!0,this.N())},U.prototype[Symbol.dispose]=function(){this.dispose()},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function j(t){return/^[\s\xa0]*$/.test(t)}function B(t,e){F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}b(B,F),B.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),z=0;function K(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++z,this.da=this.fa=!1}function q(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function H(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function W(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function G(t){const e={};for(const n in t)e[n]=t[n];return e}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Q.length;e++)n=Q[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){const n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(q(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(let i=0;i<t.length;++i){const s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Y.prototype.add=function(t,e,n,r,i){const s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);const o=Z(t,e,r,i);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new K(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var et="closure_lm_"+(1e6*Math.random()|0),nt={};function rt(t,e,n,r,i){if(r&&r.once)return ot(t,e,n,r,i);if(Array.isArray(e)){for(let s=0;s<e.length;s++)rt(t,e[s],n,r,i);return null}return n=ft(n),t&&t[$]?t.J(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!1,r,i)}function it(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=ht(t);if(c||(t[et]=c=new Y(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=st(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function st(){function t(n){return e.call(t.src,t.listener,n)}const e=lt;return t}function ot(t,e,n,r,i){if(Array.isArray(e)){for(let s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=ft(n),t&&t[$]?t.K(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!0,r,i)}function at(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=ft(n),t&&t[$]?(t=t.i,s=String(e).toString(),s in t.g&&(e=t.g[s],n=Z(e,n,r,i),n>-1&&(q(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--)))):t&&(t=ht(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,i)),(n=t>-1?e[t]:null)&&ct(n))}function ct(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[$])J(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ht(e))?(J(n,t),0==n.h&&(n.src=null,e[et]=null)):q(t)}}}function ut(t){return t in nt?nt[t]:nt[t]="on"+t}function lt(t,e){if(t.da)t=!0;else{e=new B(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&ct(t),t=n.call(r,e)}return t}function ht(t){return t=t[et],t instanceof Y?t:null}var dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ft(t){return"function"===typeof t?t:(t[dt]||(t[dt]=function(e){return t.handleEvent(e)}),t[dt])}function pt(){U.call(this),this.i=new Y(this),this.M=this,this.G=null}function gt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var i=e;e=new F(r,t),X(e,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],i=mt(s,r,!0,e)&&i;if(s=e.g=t,i=mt(s,r,!0,e)&&i,i=mt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=mt(s,r,!1,e)&&i}function mt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let i=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&J(t.i,o),i=!1!==e.call(n,r)&&i}}return i&&!r.defaultPrevented}function yt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function vt(t){t.g=yt((()=>{t.g=null,t.i&&(t.i=!1,vt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}b(pt,U),pt.prototype[$]=!0,pt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)q(n[t]);delete t.g[e],t.h--}}this.G=null},pt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class wt extends U{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(t){U.call(this),this.h=t,this.g={}}b(_t,U);var bt=[];function Et(t){H(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ct(t)}),t),t.g={}}_t.prototype.N=function(){_t.Z.N.call(this),Et(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=o.JSON.stringify,It=o.JSON.parse,St=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function Ct(){}function kt(){}var At={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rt(){F.call(this,"d")}function Nt(){F.call(this,"c")}b(Rt,F),b(Nt,F);var Ot={},xt=null;function Pt(){return xt=xt||new pt}function Dt(t){F.call(this,Ot.Ia,t)}function Mt(t){const e=Pt();gt(e,new Dt(e))}function Lt(t,e){F.call(this,Ot.STAT_EVENT,t),this.stat=e}function Ut(t){const e=Pt();gt(e,new Lt(e,t))}function Ft(t,e){F.call(this,Ot.Ja,t),this.size=e}function Vt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout((function(){t()}),e)}function jt(){this.g=!0}function Bt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function $t(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+qt(t,n)+(r?" "+r:"")}))}function Kt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function qt(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let t=1;t<r.length;t++)r[t]=""}}}return Tt(s)}catch(s){return e}}Ot.Ia="serverreachability",b(Dt,F),Ot.STAT_EVENT="statevent",b(Lt,F),Ot.Ja="timingevent",b(Ft,F),jt.prototype.ua=function(){this.g=!1},jt.prototype.info=function(){};var Ht,Wt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qt(){}function Xt(t){return encodeURIComponent(String(t))}function Yt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Jt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new _t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zt}function Zt(){this.i=null,this.g="",this.h=!1}b(Qt,Ct),Qt.prototype.g=function(){return new XMLHttpRequest},Ht=new Qt;var te={},ee={};function ne(t,e,n){t.M=1,t.A=Re(Ie(e)),t.u=n,t.R=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.B=Ie(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),ze(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Zt,t.g=Mn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new wt(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var i="readystatechange";Array.isArray(i)||(i&&(bt[0]=i.toString()),i=bt);for(let s=0;s<i.length;s++){const t=rt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?G(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Mt(),Bt(t.i,t.v,t.B,t.l,t.S,t.u)}function ie(t){if(!se(t))return t.g.la();const e=fn(t.g);if(""===e)return"";let n="";const r=e.length,i=4==dn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return he(t),le(t),"";t.h.i=new o.TextDecoder}for(let s=0;s<r;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(i&&s==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function se(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ee:(n=Number(e.substring(n,r)),isNaN(n)?te:(r+=1,r+n>e.length?ee:(e=e.slice(r,r+n),t.C=r+n,e)))}function ae(t){t.T=Date.now()+t.H,ce(t,t.H)}function ce(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Vt(u(t.aa,t),e)}function ue(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function le(t){0==t.j.I||t.K||Nn(t.j,t)}function he(t){ue(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,Et(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function de(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ye(n.h,t)))if(!t.L&&ye(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Rn(n),vn(n)}Cn(n),Ut(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Vt(u(n.Va,n),6e3));me(n.h)<=1&&n.ta&&(n.ta=void 0)}else xn(n,11)}else if((t.L||n.g==t)&&Rn(n),!j(e))for(i=n.Ba.g.parse(e),e=0;e<i.length;e++){let u=i[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ve(s,s.h),s.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,Ae(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Dn(r,r.L?r.ba:null,r.W),o.L){we(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ue(a),ae(a)),r.g=o}else Sn(r);n.i.length>0&&_n(n)}else"stop"!=u[0]&&"close"!=u[0]||xn(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?xn(n,7):yn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Mt(4)}catch(l){}}Jt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==dn(t)?e.j():this.Y(t)},Jt.prototype.Y=function(t){try{if(t==this.g)t:{const a=dn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||fn(this.g)))){this.K||4!=a||7==c||Mt(8==c||u<=0?3:2),ue(this);var e=this.g.ca();this.X=e;var n=ie(this);if(this.o=200==e,$t(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var s=r;break e}}s=null}if(!(t=s)){this.o=!1,this.m=3,Ut(12),he(this),le(this);break t}zt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,de(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=oe(this,n),e==ee){4==a&&(this.m=4,Ut(14),t=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}if(e==te){this.m=4,Ut(15),zt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}zt(this.i,this.l,e,null),de(this,e)}if(se(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Ut(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),kn(o),o.P=!0,Ut(11))}}else zt(this.i,this.l,n,"[Invalid Chunked Response]"),he(this),le(this)}else zt(this.i,this.l,n,null),de(this,n);4==a&&he(this),this.o&&!this.K&&(4==a?Nn(this.j,this):(this.o=!1,ae(this)))}else pn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Ut(12)):(this.m=0,Ut(13)),he(this),le(this)}}}catch(tt){}},Jt.prototype.cancel=function(){this.K=!0,he(this)},Jt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Kt(this.i,this.B),2!=this.M&&(Mt(),Ut(17)),he(this),this.m=2,le(this)):ce(this,this.T-t)};var fe=class{constructor(t,e){this.g=t,this.map=e}};function pe(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function me(t){return t.h?1:t.g?t.g.size:0}function ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ve(t,e){t.g?t.g.add(e):t.h=e}function we(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _e(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return I(t.i)}pe.prototype.cancel=function(){if(this.i=_e(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let i,s=null;r>=0?(i=t[n].substring(0,r),s=t[n].substring(r+1)):i=t[n],e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Te(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Te?(this.l=t.l,Se(this,t.j),this.o=t.o,this.g=t.g,Ce(this,t.u),this.h=t.h,ke(this,Ke(t.i)),this.m=t.m):t&&(e=String(t).match(be))?(this.l=!1,Se(this,e[1]||"",!0),this.o=Ne(e[2]||""),this.g=Ne(e[3]||"",!0),Ce(this,e[4]),this.h=Ne(e[5]||"",!0),ke(this,e[6]||"",!0),this.m=Ne(e[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}function Ie(t){return new Te(t)}function Se(t,e,n){t.j=n?Ne(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ce(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function ke(t,e,n){e instanceof Fe?(t.i=e,He(t.i,t.l)):(n||(e=Oe(e,Le)),t.i=new Fe(e,t.l))}function Ae(t,e,n){t.i.set(e,n)}function Re(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ne(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Oe(e,Pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Oe(e,Pe,!0),"@"),t.push(Xt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Oe(n,"/"==n.charAt(0)?Me:De,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Oe(n,Ue)),t.join("")},Te.prototype.resolve=function(t){const e=Ie(this);let n=!!t.j;n?Se(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ce(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=e.h.lastIndexOf("/");-1!=i&&(r=e.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const t=[];for(let e=0;e<i.length;){const n=i[e++];"."==n?r&&e==i.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==i.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=i}return n?e.h=r:n=""!==t.i.toString(),n?ke(e,Ke(t.i)):n=!!t.m,n&&(e.m=t.m),e};var Pe=/[#\/\?@]/g,De=/[#\?:]/g,Me=/[#\?]/g,Le=/[#\?@]/g,Ue=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function je(t,e){Ve(t),e=qe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Ve(t),e=qe(t,e),t.g.has(e)}function $e(t,e){Ve(t);let n=[];if("string"===typeof e)Be(t,e)&&(n=n.concat(t.g.get(qe(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function ze(t,e,n){je(t,e),n.length>0&&(t.i=null,t.g.set(qe(t,e),I(n)),t.h+=n.length)}function Ke(t){const e=new Fe;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function He(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach((function(t,e){const n=e.toLowerCase();e!=n&&(je(this,e),ze(this,n,t))}),t)),t.j=e}function We(t,e){const n=new jt;if(o.Image){const r=new Image;r.onload=l(Qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=l(Qe,n,"TestLoadImage: error",!1,e,r),r.onabort=l(Qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=l(Qe,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ge(t,e){const n=new jt,r=new AbortController,i=setTimeout((()=>{r.abort(),Qe(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),Qe(n,"TestPingServer: error",!1,e)}))}function Qe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Xe(){this.g=new St}function Ye(t){this.i=t.Sb||null,this.h=t.ab||!1}function Je(t,e){pt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.B=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function nn(t){let e="";return H(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function rn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nn(n),"string"===typeof t?null!=n&&Xt(n):Ae(t,e,n))}function sn(t){pt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Fe.prototype,t.add=function(t,e){Ve(this),this.i=null,t=qe(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ve(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.set=function(t,e){return Ve(this),this.i=null,t=qe(this,t),Be(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=$e(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const i=Xt(n);n=$e(this,n);for(let e=0;e<n.length;e++){let r=i;""!==n[e]&&(r+="="+Xt(n[e])),t.push(r)}}return this.i=t.join("&")},b(Ye,Ct),Ye.prototype.g=function(){return new Je(this.i,this.h)},b(Je,pt),t=Je.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,en(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,tn(this))},t.Na=function(t){this.g&&(this.response=t,tn(this))},t.ga=function(){this.g&&tn(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Je.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),b(sn,pt);var on=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,un(t),hn(t)}function un(t){t.A||(t.A=!0,gt(t,"complete"),gt(t,"error"))}function ln(t){if(t.h&&"undefined"!=typeof s)if(t.v&&4==dn(t))setTimeout(t.Ca.bind(t),0);else if(gt(t,"readystatechange"),4==dn(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(be)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!on.test(e?e.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.o=6;try{var i=dn(t)>2?t.g.statusText:""}catch(a){i=""}t.l=i+" ["+t.ca()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||gt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function dn(t){return t.g?t.g.readyState:0}function fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function pn(t){const e={};t=(t.g&&dn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(j(t[r]))continue;var n=Yt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}W(e,(function(t){return t.join(", ")}))}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mn(t){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new pe(t&&t.concurrentRequestLimit),this.Ba=new Xe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function yn(t){if(wn(t),3==t.I){var e=t.V++,n=Ie(t.J);if(Ae(n,"SID",t.M),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Tn(t,n),e=new Jt(t,t.j,e),e.M=2,e.A=Re(Ie(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Mn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),ae(e)}Pn(t)}function vn(t){t.g&&(kn(t),t.g.cancel(),t.g=null)}function wn(t){vn(t),t.v&&(o.clearTimeout(t.v),t.v=null),Rn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function _n(t){if(!ge(t.h)&&!t.m){t.m=!0;var e=t.Ea;x||M(),P||(x(),P=!0),D.add(e,t),t.D=0}}function bn(t,e){return!(me(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Vt(u(t.Ea,t,e),On(t,t.D)),t.D++,!0))}function En(t,e){var n;n=e?e.l:t.V++;const r=Ie(t.J);Ae(r,"SID",t.M),Ae(r,"RID",n),Ae(r,"AID",t.K),Tn(t,r),t.u&&t.o&&rn(r,t.u,t.o),n=new Jt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=In(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ve(t.h,n),ne(n,r,e)}function Tn(t,e){t.H&&H(t.H,(function(t,n){Ae(e,n,t)})),t.l&&H({},(function(t,n){Ae(e,n,t)}))}function In(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=e,s<0)e=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Tt(n)),t.push(s+e+"="+encodeURIComponent(r))}}catch(E){throw t.push(s+"type="+encodeURIComponent("_badmap")),E}}catch(E){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function Sn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;x||M(),P||(x(),P=!0),D.add(e,t),t.A=0}}function Cn(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Vt(u(t.Da,t),On(t,t.A)),t.A++,!0)}function kn(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function An(t){t.g=new Jt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Ie(t.na);Ae(e,"RID","rpc"),Ae(e,"SID",t.M),Ae(e,"AID",t.K),Ae(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&Ae(e,"TO",t.ia),Ae(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&rn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=Re(Ie(e)),n.u=null,n.R=!0,re(n,t)}function Rn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function Nn(t,e){var n=null;if(t.g==e){Rn(t),kn(t),t.g=null;var r=2}else{if(!ye(t.h,e))return;n=e.G,we(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var i=t.D;r=Pt(),gt(r,new Ft(r,n)),_n(t)}else Sn(t);else if(i=e.m,3==i||0==i&&e.X>0||!(1==r&&bn(t,e)||2==r&&Cn(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),i){case 1:xn(t,5);break;case 4:xn(t,10);break;case 3:xn(t,6);break;default:xn(t,2)}}function On(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function xn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Te(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Se(r,"https"),Re(r),e?We(r.toString(),n):Ge(r.toString(),n)}else Ut(2);t.I=0,t.l&&t.l.pa(e),Pn(t),wn(t)}function Pn(t){if(t.I=0,t.ja=[],t.l){const e=_e(t.h);0==e.length&&0==t.i.length||(S(t.ja,e),S(t.ja,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.oa()}}function Dn(t,e,n){var r=n instanceof Te?Ie(n):new Te(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ce(r,r.u);else{var i=o.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;const t=new Te(null);r&&Se(t,r),e&&(t.g=e),i&&Ce(t,i),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ka),Tn(t,r),r}function Mn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new sn(new Ye({ab:n})):new sn(t.ma),e.Fa(t.L),e}function Ln(){}function Un(){}function Fn(t,e){pt.call(this),this.g=new mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!j(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!j(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}function Vn(t){Rt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jn(){Nt.call(this),this.status=1}function Bn(t){this.g=t}t=sn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ht.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void cn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(an,e,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(s){cn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,gt(this,"complete"),gt(this,"abort"),hn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},t.Xa=function(){ln(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return dn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),It(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=mn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Ut(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Dn(this,null,this.W),_n(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Jt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=G(s),X(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=In(this,i,e),n=Ie(this.J),Ae(n,"RID",t),Ae(n,"CVER",22),this.G&&Ae(n,"X-HTTP-Session-Id",this.G),Tn(this,n),s&&(this.R?e="headers="+Xt(nn(s))+"&"+e:this.u&&rn(n,this.u,s)),ve(this.h,i),this.Ra&&Ae(n,"TYPE","init"),this.S?(Ae(n,"$req",e),Ae(n,"SID","null"),i.U=!0,ne(i,n,null)):ne(i,n,e),this.I=2}}else 3==this.I&&(t?En(this,t):0==this.i.length||ge(this.h)||En(this))},t.Da=function(){if(this.v=null,An(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Vt(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ut(10),vn(this),An(this))},t.Va=function(){null!=this.C&&(this.C=null,vn(this),Cn(this),Ut(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Ln.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Un.prototype.g=function(t,e){return new Fn(t,e)},b(Fn,pt),Fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fn.prototype.close=function(){yn(this.g)},Fn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new fe(e.Ya++,t)),3==e.I&&_n(e)},Fn.prototype.N=function(){this.g.l=null,delete this.j,yn(this.g),delete this.g,Fn.Z.N.call(this)},b(Vn,Rt),b(jn,Nt),b(Bn,Ln),Bn.prototype.ra=function(){gt(this.g,"a")},Bn.prototype.qa=function(t){gt(this.g,new Vn(t))},Bn.prototype.pa=function(t){gt(this.g,new jn)},Bn.prototype.oa=function(){gt(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,Fn.prototype.send=Fn.prototype.o,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,v=_.createWebChannelTransport=function(){return new Un},y=_.getStatEventTarget=function(){return Pt()},m=_.Event=Ot,g=_.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wt.NO_ERROR=0,Wt.TIMEOUT=8,Wt.HTTP_ERROR=6,p=_.ErrorCode=Wt,Gt.COMPLETE="complete",f=_.EventType=Gt,kt.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",pt.prototype.listen=pt.prototype.J,d=_.WebChannel=kt,_.FetchXmlHttpFactory=Ye,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,h=_.XhrIo=sn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore",E="4.9.2";
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
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
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
let I="12.3.0";
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
 */const S=new a.Vy("@firebase/firestore");function C(){return S.logLevel}function k(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(N);S.debug(`Firestore (${I}): ${t}`,...n)}}function A(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(N);S.error(`Firestore (${I}): ${t}`,...n)}}function R(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(N);S.warn(`Firestore (${I}): ${t}`,...n)}}function N(t){if("string"==typeof t)return t;try{
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function O(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,x(t,r,n)}function x(t,e,n){let r=`FIRESTORE (${I}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw A(r),new Error(r)}function P(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||x(e,i,r)}function D(t,e){return t}
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class U{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class F{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class j{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class B{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){P(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new U;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new U,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new U)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(P("string"==typeof e.accessToken,31837,{l:e}),new F(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return P(null===t||"string"==typeof t,2055,{h:t}),new T(t)}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class z{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new $(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class K{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){P(void 0===this.o,3512);const n=t=>{null!=t.error&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,k("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new K(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(P("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new K(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function H(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class W{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=H(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function Q(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return J(n)===J(i)?G(n,i):J(n)?1:-1}return G(t.length,e.length)}const X=55296,Y=57343;function J(t){const e=t.charCodeAt(0);return e>=X&&e<=Y}function Z(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
const tt="__name__";class et{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===et.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof et?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=et.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return G(t.length,e.length)}static compareSegments(t,e){const n=et.isNumericId(t),r=et.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?et.extractNumericId(t).compare(et.extractNumericId(e)):Q(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class nt extends et{construct(t,e,n){return new nt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new nt(e)}static emptyPath(){return new nt([])}}const rt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends et{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return rt.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===tt}static keyField(){return new it([tt])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(nt.fromString(t))}static fromName(t){return new st(nt.fromString(t).popFirst(5))}static empty(){return new st(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===nt.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new nt(t.slice()))}}
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
 */function ot(t,e,n){if(!n)throw new L(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function at(t,e,n,r){if(!0===e&&!0===r)throw new L(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ct(t){if(!st.isDocumentKey(t))throw new L(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ut(t){if(st.isDocumentKey(t))throw new L(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lt(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function ht(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O(12329,{type:typeof t})}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ht(t);throw new L(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ft(t,e){if(e<=0)throw new L(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pt(t,e){const n={typeString:t};return e&&(n.value=e),n}function gt(t,e){if(!lt(t))throw new L(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new L(M.INVALID_ARGUMENT,n);return!0}
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
 */const mt=-62135596800,yt=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*yt);return new vt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<mt)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yt}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gt(t,vt._jsonSchema))return new vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-mt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:pt("string",vt._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};
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
class wt{static fromTimestamp(t){return new wt(t)}static min(){return new wt(new vt(0,0))}static max(){return new wt(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */const _t=-1;class bt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}bt.UNKNOWN_ID=-1;function Et(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=wt.fromTimestamp(1e9===r?new vt(n+1,0):new vt(n,r));return new It(i,st.empty(),e)}function Tt(t){return new It(t.readTime,t.key,_t)}class It{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new It(wt.min(),st.empty(),_t)}static max(){return new It(wt.max(),st.empty(),_t)}}function St(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=st.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
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
 */)}const Ct="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function At(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Ct)throw t;k("LocalStore","Unexpectedly lost primary lease")}
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
 */class Rt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Rt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Rt?e:Rt.resolve(e)}catch(t){return Rt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Rt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Rt.reject(e)}static resolve(t){return new Rt(((e,n)=>{e(t)}))}static reject(t){return new Rt(((e,n)=>{n(t)}))}static waitFor(t){return new Rt(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Rt.resolve(!1);for(const n of t)e=e.next((t=>t?Rt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Rt(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Rt(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function Nt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ot(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class xt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}xt.ce=-1;
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
 */const Pt=-1;function Dt(t){return null==t}function Mt(t){return 0===t&&1/t==-1/0}function Lt(t){return"number"==typeof t&&Number.isInteger(t)&&!Mt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Ut="";function Ft(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jt(e)),e=Vt(t.get(n),e);return jt(e)}function Vt(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Ut:n+="";break;default:n+=e}}return n}function jt(t){return t+Ut+""}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Bt="remoteDocuments",$t="owner",zt="mutationQueues",Kt="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const qt="documentMutations",Ht="remoteDocumentsV14",Wt="remoteDocumentGlobal",Gt="targets",Qt="targetDocuments",Xt="targetGlobal",Yt="collectionParents",Jt="clientMetadata",Zt="bundles",te="namedQueries",ee="indexConfiguration",ne="indexState",re="indexEntries",ie="documentOverlays",se="globals",oe=[zt,Kt,qt,Bt,Gt,$t,Xt,Qt,Jt,Wt,Yt,Zt,te],ae=[zt,Kt,qt,Ht,Gt,$t,Xt,Qt,Jt,Wt,Yt,Zt,te,ie],ce=ae,ue=[...ce,ee,ne,re];
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
function le(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function he(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function de(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class fe{constructor(t,e){this.comparator=t,this.root=e||ge.EMPTY}insert(t,e){return new fe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(t){return new fe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ge.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pe(this.root,t,this.comparator,!0)}}class pe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ge{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ge.RED,this.left=null!=r?r:ge.EMPTY,this.right=null!=i?i:ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ge(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ge.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1,ge.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class me{constructor(t){this.comparator=t,this.data=new fe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ye(this.data.getIterator())}getIteratorFrom(t){return new ye(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof me))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new me(this.comparator);return e.data=t,e}}class ye{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ve{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new ve([])}unionWith(t){let e=new me(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ve(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Z(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class we extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class _e{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new we("Invalid base64 string: "+t):t}}(t);return new _e(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _e(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const be=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(t){if(P(!!t,39018),"string"==typeof t){let e=0;const n=be.exec(t);if(P(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ie(t){return"string"==typeof t?_e.fromBase64String(t):_e.fromUint8Array(t)}
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
 */const Se="server_timestamp",Ce="__type__",ke="__previous_value__",Ae="__local_write_time__";function Re(t){const e=(t?.mapValue?.fields||{})[Ce]?.stringValue;return e===Se}function Ne(t){const e=t.mapValue.fields[ke];return Re(e)?Ne(e):e}function Oe(t){const e=Ee(t.mapValue.fields[Ae].timestampValue);return new vt(e.seconds,e.nanos)}
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
 */class xe{constructor(t,e,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u}}const Pe="(default)";class De{constructor(t,e){this.projectId=t,this.database=e||Pe}static empty(){return new De("","")}get isDefaultDatabase(){return this.database===Pe}isEqual(t){return t instanceof De&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Me="__type__",Le="__max__",Ue={mapValue:{fields:{__type__:{stringValue:Le}}}},Fe="__vector__",Ve="value";function je(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Re(t)?4:rn(t)?9007199254740991:en(t)?10:11:O(28295,{value:t})}function Be(t,e){if(t===e)return!0;const n=je(t);if(n!==je(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oe(t).isEqual(Oe(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ee(t.timestampValue),r=Ee(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ie(t.bytesValue).isEqual(Ie(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Te(t.geoPointValue.latitude)===Te(e.geoPointValue.latitude)&&Te(t.geoPointValue.longitude)===Te(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Te(t.integerValue)===Te(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Te(t.doubleValue),r=Te(e.doubleValue);return n===r?Mt(n)===Mt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Z(t.arrayValue.values||[],e.arrayValue.values||[],Be);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(le(n)!==le(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Be(n[i],r[i])))return!1;return!0}(t,e);default:return O(52216,{left:t})}}function $e(t,e){return void 0!==(t.values||[]).find((t=>Be(t,e)))}function ze(t,e){if(t===e)return 0;const n=je(t),r=je(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Te(t.integerValue||t.doubleValue),r=Te(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ke(t.timestampValue,e.timestampValue);case 4:return Ke(Oe(t),Oe(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ie(t),r=Ie(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=G(n[i],r[i]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(Te(t.latitude),Te(e.latitude));return 0!==n?n:G(Te(t.longitude),Te(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qe(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Ve]?.arrayValue,s=r[Ve]?.arrayValue,o=G(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:qe(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ue.mapValue&&e===Ue.mapValue)return 0;if(t===Ue.mapValue)return 1;if(e===Ue.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Q(r[o],s[o]);if(0!==t)return t;const e=ze(n[r[o]],i[s[o]]);if(0!==e)return e}return G(r.length,s.length)}(t.mapValue,e.mapValue);default:throw O(23264,{he:n})}}function Ke(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=Ee(t),r=Ee(e),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function qe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ze(n[i],r[i]);if(t)return t}return G(n.length,r.length)}function He(t){return We(t)}function We(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ee(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ie(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return st.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=We(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${We(t.fields[i])}`;return n+"}"}(t.mapValue):O(61005,{value:t})}function Ge(t){switch(je(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ne(t);return e?16+Ge(e):16;case 5:return 2*t.stringValue.length;case 6:return Ie(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Ge(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return he(t.fields,((t,n)=>{e+=t.length+Ge(n)})),e}(t.mapValue);default:throw O(13486,{value:t})}}function Qe(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xe(t){return!!t&&"integerValue"in t}function Ye(t){return!!t&&"arrayValue"in t}function Je(t){return!!t&&"nullValue"in t}function Ze(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tn(t){return!!t&&"mapValue"in t}function en(t){const e=(t?.mapValue?.fields||{})[Me]?.stringValue;return e===Fe}function nn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return he(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=nn(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nn(t.arrayValue.values[n]);return e}return{...t}}function rn(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Le}
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
class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nn(e)}setAll(t){let e=it.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=nn(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());tn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Be(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){he(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new sn(nn(this.value))}}function on(t){const e=[];return he(t.fields,((t,n)=>{const r=new it([t]);if(tn(n)){const t=on(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ve(e)
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
 */}class an{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new an(t,0,wt.min(),wt.min(),wt.min(),sn.empty(),0)}static newFoundDocument(t,e,n,r){return new an(t,1,e,wt.min(),n,r,0)}static newNoDocument(t,e){return new an(t,2,e,wt.min(),wt.min(),sn.empty(),0)}static newUnknownDocument(t,e){return new an(t,3,e,wt.min(),wt.min(),sn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(wt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof an&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class cn{constructor(t,e){this.position=t,this.inclusive=e}}function un(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ze(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ln(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Be(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class hn{constructor(t,e="asc"){this.field=t,this.dir=e}}function dn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fn{}class pn extends fn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new En(t,e,n):"array-contains"===e?new Cn(t,n):"in"===e?new kn(t,n):"not-in"===e?new An(t,n):"array-contains-any"===e?new Rn(t,n):new pn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Tn(t,n):new In(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(ze(e,this.value)):null!==e&&je(this.value)===je(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends fn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new gn(t,e)}matches(t){return mn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mn(t){return"and"===t.op}function yn(t){return vn(t)&&mn(t)}function vn(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function wn(t){if(t instanceof pn)return t.field.canonicalString()+t.op.toString()+He(t.value);if(yn(t))return t.filters.map((t=>wn(t))).join(",");{const e=t.filters.map((t=>wn(t))).join(",");return`${t.op}(${e})`}}function _n(t,e){return t instanceof pn?function(t,e){return e instanceof pn&&t.op===e.op&&t.field.isEqual(e.field)&&Be(t.value,e.value)}(t,e):t instanceof gn?function(t,e){return e instanceof gn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&_n(n,e.filters[r])),!0)}(t,e):void O(19439)}function bn(t){return t instanceof pn?function(t){return`${t.field.canonicalString()} ${t.op} ${He(t.value)}`}(t):t instanceof gn?function(t){return t.op.toString()+" {"+t.getFilters().map(bn).join(" ,")+"}"}(t):"Filter"}class En extends pn{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tn extends pn{constructor(t,e){super(t,"in",e),this.keys=Sn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class In extends pn{constructor(t,e){super(t,"not-in",e),this.keys=Sn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Sn(t,e){return(e.arrayValue?.values||[]).map((t=>st.fromName(t.referenceValue)))}class Cn extends pn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ye(e)&&$e(e.arrayValue,this.value)}}class kn extends pn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$e(this.value.arrayValue,e)}}class An extends pn{constructor(t,e){super(t,"not-in",e)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!$e(this.value.arrayValue,e)}}class Rn extends pn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ye(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$e(this.value.arrayValue,t)))}}
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
 */class Nn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function On(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Nn(t,e,n,r,i,s,o)}function xn(t){const e=D(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>wn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Dt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>He(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>He(t))).join(",")),e.Te=t}return e.Te}function Pn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_n(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ln(t.startAt,e.startAt)&&ln(t.endAt,e.endAt)}function Dn(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Mn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ln(t,e,n,r,i,s,o,a){return new Mn(t,e,n,r,i,s,o,a)}function Un(t){return new Mn(t)}function Fn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Vn(t){return null!==t.collectionGroup}function jn(t){const e=D(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new me(it.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new hn(r,n))})),t.has(it.keyField().canonicalString())||e.Ie.push(new hn(it.keyField(),n))}return e.Ie}function Bn(t){const e=D(t);return e.Ee||(e.Ee=$n(e,jn(t))),e.Ee}function $n(t,e){if("F"===t.limitType)return On(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new hn(t.field,e)}));const n=t.endAt?new cn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cn(t.startAt.position,t.startAt.inclusive):null;return On(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zn(t,e){const n=t.filters.concat([e]);return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kn(t,e,n){return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qn(t,e){return Pn(Bn(t),Bn(e))&&t.limitType===e.limitType}function Hn(t){return`${xn(Bn(t))}|lt:${t.limitType}`}function Wn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>bn(t))).join(", ")}]`),Dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>He(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>He(t))).join(",")),`Target(${e})`}(Bn(t))}; limitType=${t.limitType})`}function Gn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of jn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=un(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,jn(t),e))&&!(t.endAt&&!function(t,e,n){const r=un(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,jn(t),e))}(t,e)}function Qn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xn(t){return(e,n)=>{let r=!1;for(const i of jn(t)){const t=Yn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Yn(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ze(r,i):O(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:t.dir})}}
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
 */class Jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return de(this.inner)}size(){return this.innerSize}}
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
 */const Zn=new fe(st.comparator);function tr(){return Zn}const er=new fe(st.comparator);function nr(...t){let e=er;for(const n of t)e=e.insert(n.key,n);return e}function rr(t){let e=er;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ir(){return or()}function sr(){return or()}function or(){return new Jn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ar=new fe(st.comparator),cr=new me(st.comparator);function ur(...t){let e=cr;for(const n of t)e=e.add(n);return e}const lr=new me(G);function hr(){return lr}
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
 */function dr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mt(e)?"-0":e}}function fr(t){return{integerValue:""+t}}function pr(t,e){return Lt(e)?fr(e):dr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gr{constructor(){this._=void 0}}function mr(t,e,n){return t instanceof wr?function(t,e){const n={fields:{[Ce]:{stringValue:Se},[Ae]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Re(e)&&(e=Ne(e)),e&&(n.fields[ke]=e),{mapValue:n}}(n,e):t instanceof _r?br(t,e):t instanceof Er?Tr(t,e):function(t,e){const n=vr(t,e),r=Sr(n)+Sr(t.Ae);return Xe(n)&&Xe(t.Ae)?fr(r):dr(t.serializer,r)}(t,e)}function yr(t,e,n){return t instanceof _r?br(t,e):t instanceof Er?Tr(t,e):n}function vr(t,e){return t instanceof Ir?function(t){return Xe(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class wr extends gr{}class _r extends gr{constructor(t){super(),this.elements=t}}function br(t,e){const n=Cr(e);for(const r of t.elements)n.some((t=>Be(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Er extends gr{constructor(t){super(),this.elements=t}}function Tr(t,e){let n=Cr(e);for(const r of t.elements)n=n.filter((t=>!Be(t,r)));return{arrayValue:{values:n}}}class Ir extends gr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Sr(t){return Te(t.integerValue||t.doubleValue)}function Cr(t){return Ye(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class kr{constructor(t,e){this.field=t,this.transform=e}}function Ar(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof _r&&e instanceof _r||t instanceof Er&&e instanceof Er?Z(t.elements,e.elements,Be):t instanceof Ir&&e instanceof Ir?Be(t.Ae,e.Ae):t instanceof wr&&e instanceof wr}(t.transform,e.transform)}class Rr{constructor(t,e){this.version=t,this.transformResults=e}}class Nr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nr}static exists(t){return new Nr(void 0,t)}static updateTime(t){return new Nr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Or(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xr{}function Pr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zr(t.key,Nr.none()):new Fr(t.key,t.data,Nr.none());{const n=t.data,r=sn.empty();let i=new me(it.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Vr(t.key,r,new ve(i.toArray()),Nr.none())}}function Dr(t,e,n){t instanceof Fr?function(t,e,n){const r=t.value.clone(),i=Br(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(t,e,n){if(!Or(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Br(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(jr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Mr(t,e,n,r){return t instanceof Fr?function(t,e,n,r){if(!Or(t.precondition,e))return n;const i=t.value.clone(),s=$r(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(t,e,n,r){if(!Or(t.precondition,e))return n;const i=$r(t.fieldTransforms,r,e),s=e.data;return s.setAll(jr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Or(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Lr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=vr(r.transform,t||null);null!=i&&(null===n&&(n=sn.empty()),n.set(r.field,i))}return n||null}function Ur(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Z(t,e,((t,e)=>Ar(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fr extends xr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vr extends xr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Br(t,e,n){const r=new Map;P(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yr(o,a,n[i]))}return r}function $r(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,mr(t,s,e))}return r}class zr extends xr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kr extends xr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class qr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Dr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sr();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Pr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(wt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ur())}isEqual(t){return this.batchId===t.batchId&&Z(this.mutations,t.mutations,((t,e)=>Ur(t,e)))&&Z(this.baseMutations,t.baseMutations,((t,e)=>Ur(t,e)))}}class Hr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){P(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return ar}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
class Gr{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Qr,Xr;function Yr(t){switch(t){case M.OK:return O(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return O(15467,{code:t})}}function Jr(t){if(void 0===t)return A("GRPC error has no .code"),M.UNKNOWN;switch(t){case Qr.OK:return M.OK;case Qr.CANCELLED:return M.CANCELLED;case Qr.UNKNOWN:return M.UNKNOWN;case Qr.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Qr.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Qr.INTERNAL:return M.INTERNAL;case Qr.UNAVAILABLE:return M.UNAVAILABLE;case Qr.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Qr.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Qr.NOT_FOUND:return M.NOT_FOUND;case Qr.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Qr.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Qr.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Qr.ABORTED:return M.ABORTED;case Qr.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Qr.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Qr.DATA_LOSS:return M.DATA_LOSS;default:return O(39323,{code:t})}}(Xr=Qr||(Qr={}))[Xr.OK=0]="OK",Xr[Xr.CANCELLED=1]="CANCELLED",Xr[Xr.UNKNOWN=2]="UNKNOWN",Xr[Xr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xr[Xr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xr[Xr.NOT_FOUND=5]="NOT_FOUND",Xr[Xr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xr[Xr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xr[Xr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xr[Xr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xr[Xr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xr[Xr.ABORTED=10]="ABORTED",Xr[Xr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xr[Xr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xr[Xr.INTERNAL=13]="INTERNAL",Xr[Xr.UNAVAILABLE=14]="UNAVAILABLE",Xr[Xr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
let Zr=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ti(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const ei=new r([4294967295,4294967295],0);function ni(t){const e=ti().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function ri(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ii{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new si(`Invalid padding: ${e}`);if(n<0)throw new si(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new si(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new si(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(ei)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=ni(t),[n,r]=ri(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ii(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.ge)return;const e=ni(t),[n,r]=ri(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class oi{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ai.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new oi(wt.min(),r,new fe(G),tr(),ur())}}class ai{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ai(n,e,ur(),ur(),ur())}}
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
 */class ci{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class ui{constructor(t,e){this.targetId=t,this.Ce=e}}class li{constructor(t,e,n=_e.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class hi{constructor(){this.ve=0,this.Fe=pi(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ur(),e=ur(),n=ur();return this.Fe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O(38017,{changeType:i})}})),new ai(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=pi()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,P(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class di{constructor(t){this.Ge=t,this.ze=new Map,this.je=tr(),this.Je=fi(),this.He=fi(),this.Ye=new fe(G)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((t,n)=>{this.rt(n)&&e(n)}))}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(Dn(i))if(0===n){const t=new st(i.path);this.et(e,t,an.newNoDocument(t,wt.min()))}else P(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),i=n?this.ct(n,t,r):1;if(0!==i){this.it(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,t)}Zr?.lt(function(t,e,n,r,i){const s={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),s}
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
 */(r,t.Ce,this.Ge.ht(),n,i))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ie(n).toUint8Array()}catch(t){if(t instanceof we)return R("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ii(s,r,i)}catch(t){return R(t instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.et(e,n,null),r++)})),r}Tt(t){const e=new Map;this.ze.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Dn(i.target)){const e=new st(i.target.path);this.It(e).has(r)||this.Et(r,e)||this.et(r,e,an.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}}));let n=ur();this.He.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.je.forEach(((e,n)=>n.setReadTime(t)));const r=new oi(t,e,this.Ye,this.je,n);return this.je=tr(),this.Je=fi(),this.He=fi(),this.Ye=new fe(G),r}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.Qe(e,1):r.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new hi,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new me(G),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new me(G),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||k("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new hi),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function fi(){return new fe(st.comparator)}function pi(){return new fe(st.comparator)}const gi=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),mi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),yi=(()=>{const t={and:"AND",or:"OR"};return t})();class vi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wi(t,e){return t.useProto3Json||Dt(e)?e:{value:e}}function _i(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ei(t,e){return _i(t,e.toTimestamp())}function Ti(t){return P(!!t,49232),wt.fromTimestamp(function(t){const e=Ee(t);return new vt(e.seconds,e.nanos)}(t))}function Ii(t,e){return Si(t,e).canonicalString()}function Si(t,e){const n=function(t){return new nt(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ci(t){const e=nt.fromString(t);return P(Qi(e),10190,{key:e.toString()}),e}function ki(t,e){return Ii(t.databaseId,e.path)}function Ai(t,e){const n=Ci(e);if(n.get(1)!==t.databaseId.projectId)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(xi(n))}function Ri(t,e){return Ii(t.databaseId,e)}function Ni(t){const e=Ci(t);return 4===e.length?nt.emptyPath():xi(e)}function Oi(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xi(t){return P(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function Pi(t,e,n){return{name:ki(t,e),fields:n.value.mapValue.fields}}function Di(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(P(void 0===e||"string"==typeof e,58123),_e.fromBase64String(e||"")):(P(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),_e.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?M.UNKNOWN:Jr(t.code);return new L(e,t.message||"")}(o);n=new li(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ai(t,r.document.name),s=Ti(r.document.updateTime),o=r.document.createTime?Ti(r.document.createTime):wt.min(),a=new sn({mapValue:{fields:r.document.fields}}),c=an.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ci(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ai(t,r.document),s=r.readTime?Ti(r.readTime):wt.min(),o=an.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ai(t,r.document),s=r.removedTargetIds||[];n=new ci([],s,i,null)}else{if(!("filter"in e))return O(11601,{Rt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Gr(r,i),o=t.targetId;n=new ui(o,s)}}return n}function Mi(t,e){let n;if(e instanceof Fr)n={update:Pi(t,e.key,e.value)};else if(e instanceof zr)n={delete:ki(t,e.key)};else if(e instanceof Vr)n={update:Pi(t,e.key,e.data),updateMask:Gi(e.fieldMask)};else{if(!(e instanceof Kr))return O(16599,{Vt:e.type});n={verify:ki(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof wr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _r)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Er)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ir)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw O(20930,{transform:e.transform})}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ei(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O(27497)}(t,e.precondition)),n}function Li(t,e){return t&&t.length>0?(P(void 0!==e,14353),t.map((t=>function(t,e){let n=t.updateTime?Ti(t.updateTime):Ti(e);return n.isEqual(wt.min())&&(n=Ti(e)),new Rr(n,t.transformResults||[])}(t,e)))):[]}function Ui(t,e){return{documents:[Ri(t,e.path)]}}function Fi(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ri(t,i);const s=function(t){if(0!==t.length)return Wi(gn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qi(t.field),direction:$i(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:i}}function Vi(t){let e=Ni(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){P(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Bi(t);return e instanceof gn&&yn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new hn(Hi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Dt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new cn(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new cn(n,e)}(n.endAt)),Ln(e,i,o,s,a,"F",c,u)}function ji(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hi(t.unaryFilter.field);return pn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hi(t.unaryFilter.field);return pn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hi(t.unaryFilter.field);return pn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hi(t.unaryFilter.field);return pn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(t):void 0!==t.fieldFilter?function(t){return pn.create(Hi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return gn.create(t.compositeFilter.filters.map((t=>Bi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(t):O(30097,{filter:t})}function $i(t){return gi[t]}function zi(t){return mi[t]}function Ki(t){return yi[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return it.fromServerFormat(t.fieldPath)}function Wi(t){return t instanceof pn?function(t){if("=="===t.op){if(Ze(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NAN"}};if(Je(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ze(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NOT_NAN"}};if(Je(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(t.field),op:zi(t.op),value:t.value}}}(t):t instanceof gn?function(t){const e=t.getFilters().map((t=>Wi(t)));return 1===e.length?e[0]:{compositeFilter:{op:Ki(t.op),filters:e}}}(t):O(54877,{filter:t})}function Gi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Xi{constructor(t,e,n,r,i=wt.min(),s=wt.min(),o=_e.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Xi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Yi{constructor(t){this.yt=t}}function Ji(t){const e=Vi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Kn(e,e.limit,"L"):e}
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
 */class Zi{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(Te(t.integerValue));else if("doubleValue"in t){const n=Te(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Mt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=Ee(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ie(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?rn(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):en(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):O(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Ve,i=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(Te(i)),this.Ot(r,e),this.Ct(n[r],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),st.fromName(t).path.forEach((t=>{this.Ft(e,60),this.Ut(t,e)}))}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Zi.Kt=new Zi;
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
 */
class ts{constructor(){this.Cn=new es}addToCollectionParentIndex(t,e){return this.Cn.add(e),Rt.resolve()}getCollectionParents(t,e){return Rt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return Rt.resolve()}deleteFieldIndex(t,e){return Rt.resolve()}deleteAllFieldIndexes(t){return Rt.resolve()}createTargetIndexes(t,e){return Rt.resolve()}getDocumentsMatchingTarget(t,e){return Rt.resolve(null)}getIndexType(t,e){return Rt.resolve(0)}getFieldIndexes(t,e){return Rt.resolve([])}getNextCollectionGroupToUpdate(t){return Rt.resolve(null)}getMinOffset(t,e){return Rt.resolve(It.min())}getMinOffsetFromCollectionGroup(t,e){return Rt.resolve(It.min())}updateCollectionGroup(t,e,n){return Rt.resolve()}updateIndexEntries(t,e){return Rt.resolve()}}class es{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new me(nt.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new me(nt.comparator)).toArray()}}
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
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
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
const ns={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rs=41943040;class is{static withCacheSize(t){return new is(t,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */is.DEFAULT_COLLECTION_PERCENTILE=10,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,is.DEFAULT=new is(rs,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),is.DISABLED=new is(-1,0,0);
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
class ss{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ss(0)}static cr(){return new ss(-1)}}
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
const os="LruGarbageCollector",as=1048576;function cs([t,e],[n,r]){const i=G(t,n);return 0===i?G(e,r):i}class us{constructor(t){this.Ir=t,this.buffer=new me(cs),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();cs(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ls{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(t){k(os,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ot(t)?k(os,"Ignoring IndexedDB error during garbage collection: ",t):await At(t)}await this.Vr(3e5)}))}}class hs{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Rt.resolve(xt.ce);const n=new us(e);return this.mr.forEachTarget(t,(t=>n.Ar(t.sequenceNumber))).next((()=>this.mr.pr(t,(t=>n.Ar(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector","Garbage collection skipped; disabled"),Rt.resolve(ns)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ns):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),C()<=a.$b.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Rt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}function ds(t,e){return new hs(t,e)}
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
class fs{constructor(){this.changes=new Jn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,an.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Rt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class ps{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class gs{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mr(n.mutation,t,ve.empty(),vt.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ur()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ur()){const r=ir();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=nr();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ir();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ur())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=tr();const s=or(),o=function(){return or()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Vr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Mr(o.mutation,e,o.mutation.getFieldMask(),vt.now())):s.set(e.key,ve.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>o.set(t,new ps(e,s.get(t)??null)))),o)))}recalculateAndSaveOverlays(t,e){const n=or();let r=new fe(((t,e)=>t-e)),i=ur();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ve.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ur()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=sr();c.forEach((t=>{if(!i.has(t)){const r=Pr(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Rt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Rt.resolve(ir());let o=_t,a=i;return s.next((e=>Rt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Rt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ur()))).next((t=>({batchId:o,changes:rr(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new st(e)).next((t=>{let e=nr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=nr();return this.indexManager.getCollectionParents(t,i).next((o=>Rt.forEach(o,(o=>{const a=function(t,e){return new Mn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,an.newInvalidDocument(r)))}));let n=nr();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Mr(s.mutation,r,ve.empty(),vt.now()),Gn(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class ms{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return Rt.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ti(t.createTime)}}(e)),Rt.resolve()}getNamedQuery(t,e){return Rt.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(t){return{name:t.name,query:Ji(t.bundledQuery),readTime:Ti(t.readTime)}}(e)),Rt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ys{constructor(){this.overlays=new fe(st.comparator),this.qr=new Map}getOverlay(t,e){return Rt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ir();return Rt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.St(t,e,r)})),Rt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.qr.delete(n)),Rt.resolve()}getOverlaysForCollection(t,e,n){const r=ir(),i=e.length+1,s=new st(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Rt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new fe(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ir(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ir(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Rt.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wr(e,n));let i=this.qr.get(e);void 0===i&&(i=ur(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class vs{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(t){return Rt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Rt.resolve()}}
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
 */class ws{constructor(){this.Qr=new me(_s.$r),this.Ur=new me(_s.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new _s(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Gr(new _s(t,e))}zr(t,e){t.forEach((t=>this.removeReference(t,e)))}jr(t){const e=new st(new nt([])),n=new _s(e,t),r=new _s(e,t+1),i=[];return this.Ur.forEachInRange([n,r],(t=>{this.Gr(t),i.push(t.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new st(new nt([])),n=new _s(e,t),r=new _s(e,t+1);let i=ur();return this.Ur.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new _s(t,0),n=this.Qr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _s{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return st.comparator(t.key,e.key)||G(t.Yr,e.Yr)}static Kr(t,e){return G(t.Yr,e.Yr)||st.comparator(t.key,e.key)}}
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
 */class bs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new me(_s.$r)}checkEmpty(t){return Rt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qr(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Zr=this.Zr.add(new _s(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Rt.resolve(s)}lookupMutationBatch(t,e){return Rt.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ei(n),i=r<0?0:r;return Rt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Rt.resolve(0===this.mutationQueue.length?Pt:this.tr-1)}getAllMutationBatches(t){return Rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _s(e,0),r=new _s(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],(t=>{const e=this.Xr(t.Yr);i.push(e)})),Rt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new me(G);return e.forEach((t=>{const e=new _s(t,0),r=new _s(t,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([e,r],(t=>{n=n.add(t.Yr)}))})),Rt.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;st.isDocumentKey(i)||(i=i.child(""));const s=new _s(new st(i),0);let o=new me(G);return this.Zr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Yr)),!0)}),s),Rt.resolve(this.ti(o))}ti(t){const e=[];return t.forEach((t=>{const n=this.Xr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){P(0===this.ni(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Rt.forEach(e.mutations,(r=>{const i=new _s(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Zr=n}))}ir(t){}containsKey(t,e){const n=new _s(e,0),r=this.Zr.firstAfterOrEqual(n);return Rt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Rt.resolve()}ni(t,e){return this.ei(t)}ei(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Es{constructor(t){this.ri=t,this.docs=function(){return new fe(st.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Rt.resolve(n?n.document.mutableCopy():an.newInvalidDocument(e))}getEntries(t,e){let n=tr();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():an.newInvalidDocument(t))})),Rt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=tr();const s=e.path,o=new st(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||St(Tt(o),n)<=0||(r.has(o.key)||Gn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Rt.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O(9500)}ii(t,e){return Rt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ts(this)}getSize(t){return Rt.resolve(this.size)}}class Ts extends fs{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Nr.addEntry(t,r)):this.Nr.removeEntry(n)})),Rt.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}
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
 */class Is{constructor(t){this.persistence=t,this.si=new Jn((t=>xn(t)),Pn),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.oi=0,this._i=new ws,this.targetCount=0,this.ai=ss.ur()}forEachTarget(t,e){return this.si.forEach(((t,n)=>e(n))),Rt.resolve()}getLastRemoteSnapshotVersion(t){return Rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Rt.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Rt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),Rt.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new ss(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,Rt.resolve()}updateTargetData(t,e){return this.Pr(e),Rt.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,Rt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.si.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Rt.waitFor(i).next((()=>r))}getTargetCount(t){return Rt.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return Rt.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),Rt.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Rt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),Rt.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return Rt.resolve(n)}containsKey(t,e){return Rt.resolve(this._i.containsKey(e))}}
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
 */class Ss{constructor(t,e){this.ui={},this.overlays={},this.ci=new xt(0),this.li=!1,this.li=!0,this.hi=new vs,this.referenceDelegate=t(this),this.Pi=new Is(this),this.indexManager=new ts,this.remoteDocumentCache=function(t){return new Es(t)}((t=>this.referenceDelegate.Ti(t))),this.serializer=new Yi(e),this.Ii=new ms(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ys,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new bs(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const r=new Cs(this.ci.next());return this.referenceDelegate.Ei(),n(r).next((t=>this.referenceDelegate.di(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ai(t,e){return Rt.or(Object.values(this.ui).map((n=>()=>n.containsKey(t,e))))}}class Cs extends kt{constructor(t){super(),this.currentSequenceNumber=t}}class ks{constructor(t){this.persistence=t,this.Ri=new ws,this.Vi=null}static mi(t){return new ks(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),Rt.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),Rt.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),Rt.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((t=>this.fi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.fi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Rt.forEach(this.fi,(n=>{const r=st.fromPath(n);return this.gi(t,r).next((t=>{t||e.removeEntry(r,wt.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((t=>{t?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return Rt.or([()=>Rt.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class As{constructor(t,e){this.persistence=t,this.pi=new Jn((t=>Ft(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=ds(this,e)}static mi(t,e){return new As(t,e)}Ei(){}di(t){return Rt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}wr(t){let e=0;return this.pr(t,(t=>{e++})).next((()=>e))}pr(t,e){return Rt.forEach(this.pi,((n,r)=>this.br(t,n,r).next((t=>t?Rt.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(t,(r=>this.br(t,r,e).next((t=>{t||(n++,i.removeEntry(r,wt.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),Rt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Rt.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Rt.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),Rt.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ge(t.data.value)),e}br(t,e,n){return Rt.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.pi.get(e);return Rt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
class Rs{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=r}static As(t,e){let n=ur(),r=ur();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Rs(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ns{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class Os{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return(0,c.nr)()?8:Nt((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.ys(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ws(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Ns;return this.Ss(t,e,n).next((r=>{if(i.result=r,this.Vs)return this.bs(t,e,n,r.size)}))})).next((()=>i.result))}bs(t,e,n,r){return n.documentReadCount<this.fs?(C()<=a.$b.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Wn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Rt.resolve()):(C()<=a.$b.DEBUG&&k("QueryEngine","Query:",Wn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(C()<=a.$b.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Wn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bn(e))):Rt.resolve())}ys(t,e){if(Fn(e))return Rt.resolve(null);let n=Bn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Kn(e,null,"F"),n=Bn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ur(...r);return this.ps.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Ds(e,r);return this.Cs(e,s,i,n.readTime)?this.ys(t,Kn(e,null,"F")):this.vs(t,s,e,n)}))))})))))}ws(t,e,n,r){return Fn(e)||r.isEqual(wt.min())?Rt.resolve(null):this.ps.getDocuments(t,n).next((i=>{const s=this.Ds(e,i);return this.Cs(e,s,n,r)?Rt.resolve(null):(C()<=a.$b.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wn(e)),this.vs(t,s,e,Et(r,_t)).next((t=>t)))}))}Ds(t,e){let n=new me(Xn(t));return e.forEach(((e,r)=>{Gn(t,r)&&(n=n.add(r))})),n}Cs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(t,e,n){return C()<=a.$b.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Wn(e)),this.ps.getDocumentsMatchingQuery(t,e,It.min(),n)}vs(t,e,n,r){return this.ps.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */const xs="LocalStore",Ps=3e8;class Ds{constructor(t,e,n,r){this.persistence=t,this.Fs=e,this.serializer=r,this.Ms=new fe(G),this.xs=new Jn((t=>xn(t)),Pn),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gs(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Ms(t,e,n,r){return new Ds(t,e,n,r)}async function Ls(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=ur();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ls:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Us(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Rt.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);P(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ur();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Fs(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Vs(t,e){const n=D(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Pi.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Pi.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(_e.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Ps)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.Pi.updateTargetData(t,u))}));let a=tr(),c=ur();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(js(t,s,e.documentUpdates).next((t=>{a=t.ks,c=t.qs}))),!r.isEqual(wt.min())){const e=n.Pi.getLastRemoteSnapshotVersion(t).next((e=>n.Pi.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Rt.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ms=i,t)))}function js(t,e,n){let r=ur(),i=ur();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=tr();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(wt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):k(xs,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ks:r,qs:i}}))}function Bs(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=Pt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function $s(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Pi.getTargetData(t,e).next((i=>i?(r=i,Rt.resolve(r)):n.Pi.allocateTargetId(t).next((i=>(r=new Xi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Pi.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ms.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.xs.set(e,t.targetId)),t}))}async function zs(t,e,n){const r=D(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ot(t))throw t;k(xs,`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Ks(t,e,n){const r=D(t);let i=wt.min(),s=ur();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=D(t),i=r.xs.get(n);return void 0!==i?Rt.resolve(r.Ms.get(i)):r.Pi.getTargetData(e,n)}(r,t,Bn(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fs.getDocumentsMatchingQuery(t,e,n?i:wt.min(),n?s:ur()))).next((t=>(qs(r,Qn(e),t),{documents:t,Qs:s})))))}function qs(t,e,n){let r=t.Os.get(e)||wt.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Os.set(e,r)}class Hs{constructor(){this.activeTargetIds=hr()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ws{constructor(){this.Mo=new Hs,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Hs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Gs{Oo(t){}shutdown(){}}
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
 */const Qs="ConnectivityMonitor";class Xs{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){k(Qs,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){k(Qs,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ys=null;function Js(){return null===Ys?Ys=function(){return 268435456+Math.round(2147483648*Math.random())}():Ys++,"0x"+Ys.toString(16)
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
 */}const Zs="RestConnection",to={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eo{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Pe?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(t,e,n,r,i){const s=Js(),o=this.zo(t,e.toUriEncodedString());k(Zs,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,r,i);const{host:u}=new URL(o),l=(0,c.zJ)(u);return this.Jo(t,o,a,n,l).then((e=>(k(Zs,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw R(Zs,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Ho(t,e,n,r,i,s){return this.Go(t,e,n,r,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+I}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}zo(t,e){const n=to[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}
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
 */class no{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}
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
 */const ro="WebChannelConnection";class io extends eo{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,r,i){const s=Js();return new Promise(((i,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();k(ro,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case p.TIMEOUT:k(ro,`RPC '${t}' ${s} timed out`),o(new L(M.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(k(ro,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(e)>=0?e:M.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(M.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{k(ro,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);k(ro,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}T_(t,e,n){const r=Js(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=v(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");k(ro,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);this.I_(l);let h=!1,f=!1;const p=new no({Yo:e=>{f?k(ro,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(k(ro,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),k(ro,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Zo:()=>l.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(l,d.EventType.OPEN,(()=>{f||(k(ro,`RPC '${t}' stream ${r} transport opened.`),p.o_())})),w(l,d.EventType.CLOSE,(()=>{f||(f=!0,k(ro,`RPC '${t}' stream ${r} transport closed`),p.a_(),this.E_(l))})),w(l,d.EventType.ERROR,(e=>{f||(f=!0,R(ro,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),p.a_(new L(M.UNAVAILABLE,"The operation could not be completed")))})),w(l,d.EventType.MESSAGE,(e=>{if(!f){const n=e.data[0];P(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){k(ro,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=Qr[t];if(void 0!==e)return Jr(e)}(e),i=s.message;void 0===n&&(n=M.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,p.a_(new L(n,i)),l.close()}else k(ro,`RPC '${t}' stream ${r} received:`,n),p.u_(n)}})),w(o,m.STAT_EVENT,(e=>{e.stat===g.PROXY?k(ro,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===g.NOPROXY&&k(ro,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.__()}),0),p}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}
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
 */function so(){return"undefined"!=typeof document?document:null}
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
 */function oo(t){return new vi(t,!0)}
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
 */class ao{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
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
 */const co="PersistentStream";class uo{constructor(t,e,n,r,i,s,o,a){this.Mi=t,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ao(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===M.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.D_===e&&this.G_(t,n)}),(e=>{t((()=>{const t=new L(M.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)}))}))}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((t=>{n((()=>this.z_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.F_?this.J_(t):this.onNext(t)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return k(co,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(k(co,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lo extends uo{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Di(this.serializer,t),n=function(t){if(!("targetChange"in t))return wt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?wt.min():e.readTime?Ti(e.readTime):wt.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Oi(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Dn(r)?{documents:Ui(t,r)}:{query:Fi(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=bi(t,e.resumeToken);const r=wi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(wt.min())>0){n.readTime=_i(t,e.snapshotVersion.toTimestamp());const r=wi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=ji(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Oi(this.serializer),e.removeTarget=t,this.q_(e)}}class ho extends uo{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return P(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,P(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){P(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Li(t.writeResults,t.commitTime),n=Ti(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Oi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Mi(this.serializer,t)))};this.q_(e)}}
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
 */class fo{}class po extends fo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Go(t,Si(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())}))}Ho(t,e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Ho(t,Si(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class go{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(A(e),this.aa=!1):k("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const mo="RemoteStore";class yo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((t=>{n.enqueueAndForget((async()=>{Co(this)&&(k(mo,"Restarting streams for network reachability change."),await async function(t){const e=D(t);e.Ea.add(4),await wo(e),e.Ra.set("Unknown"),e.Ea.delete(4),await vo(e)}(this))}))})),this.Ra=new go(n,r)}}async function vo(t){if(Co(t))for(const e of t.da)await e(!0)}async function wo(t){for(const e of t.da)await e(!1)}function _o(t,e){const n=D(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),So(n)?Io(n):qo(n).O_()&&Eo(n,e))}function bo(t,e){const n=D(t),r=qo(n);n.Ia.delete(e),r.O_()&&To(n,e),0===n.Ia.size&&(r.O_()?r.L_():Co(n)&&n.Ra.set("Unknown"))}function Eo(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(wt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(t).Y_(e)}function To(t,e){t.Va.Ue(e),qo(t).Z_(e)}function Io(t){t.Va=new di({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),qo(t).start(),t.Ra.ua()}function So(t){return Co(t)&&!qo(t).x_()&&t.Ia.size>0}function Co(t){return 0===D(t).Ea.size}function ko(t){t.Va=void 0}async function Ao(t){t.Ra.set("Online")}async function Ro(t){t.Ia.forEach(((e,n)=>{Eo(t,e)}))}async function No(t,e){ko(t),So(t)?(t.Ra.ha(e),Io(t)):t.Ra.set("Unknown")}async function Oo(t,e,n){if(t.Ra.set("Online"),e instanceof li&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ia.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ia.delete(r),t.Va.removeTarget(r))}(t,e)}catch(n){k(mo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await xo(t,n)}else if(e instanceof ci?t.Va.Ze(e):e instanceof ui?t.Va.st(e):t.Va.tt(e),!n.isEqual(wt.min()))try{const e=await Fs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Va.Tt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ia.get(r);i&&t.Ia.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Ia.get(e);if(!r)return;t.Ia.set(e,r.withResumeToken(_e.EMPTY_BYTE_STRING,r.snapshotVersion)),To(t,e);const i=new Xi(r.target,e,n,r.sequenceNumber);Eo(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){k(mo,"Failed to raise snapshot:",e),await xo(t,e)}}async function xo(t,e,n){if(!Ot(e))throw e;t.Ea.add(1),await wo(t),t.Ra.set("Offline"),n||(n=()=>Fs(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{k(mo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await vo(t)}))}function Po(t,e){return e().catch((n=>xo(t,n,e)))}async function Do(t){const e=D(t),n=Ho(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pt;for(;Mo(e);)try{const t=await Bs(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,Lo(e,t)}catch(t){await xo(e,t)}Uo(e)&&Fo(e)}function Mo(t){return Co(t)&&t.Ta.length<10}function Lo(t,e){t.Ta.push(e);const n=Ho(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Uo(t){return Co(t)&&!Ho(t).x_()&&t.Ta.length>0}function Fo(t){Ho(t).start()}async function Vo(t){Ho(t).ra()}async function jo(t){const e=Ho(t);for(const n of t.Ta)e.ea(n.mutations)}async function Bo(t,e,n){const r=t.Ta.shift(),i=Hr.from(r,e,n);await Po(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Do(t)}async function $o(t,e){e&&Ho(t).X_&&await async function(t,e){if(function(t){return Yr(t)&&t!==M.ABORTED}(e.code)){const n=t.Ta.shift();Ho(t).B_(),await Po(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Do(t)}}(t,e),Uo(t)&&Fo(t)}async function zo(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),k(mo,"RemoteStore received new credentials");const r=Co(n);n.Ea.add(3),await wo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await vo(n)}async function Ko(t,e){const n=D(t);e?(n.Ea.delete(2),await vo(n)):e||(n.Ea.add(2),await wo(n),n.Ra.set("Unknown"))}function qo(t){return t.ma||(t.ma=function(t,e,n){const r=D(t);return r.sa(),new lo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Xo:Ao.bind(null,t),t_:Ro.bind(null,t),r_:No.bind(null,t),H_:Oo.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),So(t)?Io(t):t.Ra.set("Unknown")):(await t.ma.stop(),ko(t))}))),t.ma}function Ho(t){return t.fa||(t.fa=function(t,e,n){const r=D(t);return r.sa(),new ho(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Vo.bind(null,t),r_:$o.bind(null,t),ta:jo.bind(null,t),na:Bo.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Do(t)):(await t.fa.stop(),t.Ta.length>0&&(k(mo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa
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
 */}class Wo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new U,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Wo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Go(t,e){if(A("AsyncQueue",`${e}: ${t}`),Ot(t))return new L(M.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Qo{static emptySet(t){return new Qo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=nr(),this.sortedSet=new fe(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Qo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Xo{constructor(){this.ga=new fe(st.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Yo{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Yo(t,e,Qo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Jo{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Zo{constructor(){this.queries=ta(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=ta(),r.forEach(((t,n)=>{for(const r of n.Sa)r.onError(e)}))}(this,new L(M.ABORTED,"Firestore shutting down"))}}function ta(){return new Jn((t=>Hn(t)),qn)}async function ea(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Jo,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Go(t,`Initialization of query '${Wn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&sa(n)}async function na(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.Sa.indexOf(e);t>=0&&(s.Sa.splice(t,1),0===s.Sa.length?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ra(t,e){const n=D(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(i)&&(r=!0);e.wa=i}}r&&sa(n)}function ia(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function sa(t){t.Ca.forEach((t=>{t.next()}))}var oa,aa;(aa=oa||(oa={})).Ma="default",aa.Cache="cache";class ca{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Yo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Yo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==oa.Cache}}
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
class ua{constructor(t){this.key=t}}class la{constructor(t){this.key=t}}class ha{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ur(),this.mutatedKeys=ur(),this.eu=Xn(t),this.tu=new Qo(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Xo,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Gn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.su(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tu:s,iu:n,Cs:o,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const s=t.iu.ya();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:t})}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.eu(t.doc,e.doc))),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Xa.size&&this.current&&!r?1:0,c=a!==this.Za;return this.Za=a,0!==s.length||c?{snapshot:new Yo(this.query,t.tu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ur(),this.tu.forEach((t=>{this.uu(t.key)&&(this.Xa=this.Xa.add(t.key))}));const e=[];return t.forEach((t=>{this.Xa.has(t)||e.push(new la(t))})),this.Xa.forEach((n=>{t.has(n)||e.push(new ua(n))})),e}cu(t){this.Ya=t.Qs,this.Xa=ur();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Yo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}const da="SyncEngine";class fa{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class pa{constructor(t){this.key=t,this.hu=!1}}class ga{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Jn((t=>Hn(t)),qn),this.Iu=new Map,this.Eu=new Set,this.du=new fe(st.comparator),this.Au=new Map,this.Ru=new ws,this.Vu={},this.mu=new Map,this.fu=ss.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ma(t,e,n=!0){const r=Fa(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await va(r,e,n,!0),i}async function ya(t,e){const n=Fa(t);await va(n,e,!0,!1)}async function va(t,e,n,r){const i=await $s(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await wa(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&_o(t.remoteStore,i),a}async function wa(t,e,n,r,i){t.pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.ru(n);i.Cs&&(i=await Ks(t.localStore,e.query,!1).then((({documents:t})=>e.view.ru(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return xa(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const s=await Ks(t.localStore,e,!0),o=new ha(e,s.Qs),a=o.ru(s.documents),c=ai.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);xa(t,n,u.au);const l=new fa(e,n,o);return t.Tu.set(e,l),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function _a(t,e,n){const r=D(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter((t=>!qn(t,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&bo(r.remoteStore,i.targetId),Na(r,i.targetId)})).catch(At)):(Na(r,i.targetId),await zs(r.localStore,i.targetId,!0))}async function ba(t,e){const n=D(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bo(n.remoteStore,r.targetId))}async function Ea(t,e,n){const r=Va(t);try{const t=await function(t,e){const n=D(t),r=vt.now(),i=e.reduce(((t,e)=>t.add(e.key)),ur());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=tr(),c=ur();return n.Ns.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Lr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Vr(t.key,e,on(e.value.mapValue),Nr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:rr(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Vu[t.currentUser.toKey()];r||(r=new fe(G)),r=r.insert(e,n),t.Vu[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ma(r,t.changes),await Do(r.remoteStore)}catch(t){const e=Go(t,"Failed to persist write");n.reject(e)}}async function Ta(t,e){const n=D(t);try{const t=await Vs(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Au.get(e);r&&(P(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?P(r.hu,14607):t.removedDocuments.size>0&&(P(r.hu,42227),r.hu=!1))})),await Ma(n,t,e)}catch(t){await At(t)}}function Ia(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach(((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.Sa)i.va(e)&&(r=!0)})),r&&sa(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sa(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let t=new fe(st.comparator);t=t.insert(s,an.newNoDocument(s,wt.min()));const n=ur().add(s),i=new oi(wt.min(),new Map,new fe(G),t,n);await Ta(r,i),r.du=r.du.remove(s),r.Au.delete(e),Da(r)}else await zs(r.localStore,e,!1).then((()=>Na(r,e,n))).catch(At)}async function Ca(t,e){const n=D(t),r=e.batch.batchId;try{const t=await Us(n.localStore,e);Ra(n,r,null),Aa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,t)}catch(t){await At(t)}}async function ka(t,e,n){const r=D(t);try{const t=await function(t,e){const n=D(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(P(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Ra(r,e,n),Aa(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,t)}catch(n){await At(n)}}function Aa(t,e){(t.mu.get(e)||[]).forEach((t=>{t.resolve()})),t.mu.delete(e)}function Ra(t,e,n){const r=D(t);let i=r.Vu[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Na(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((e=>{t.Ru.containsKey(e)||Oa(t,e)}))}function Oa(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);null!==n&&(bo(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Da(t))}function xa(t,e,n){for(const r of n)r instanceof ua?(t.Ru.addReference(r.key,e),Pa(t,r)):r instanceof la?(k(da,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Oa(t,r.key)):O(19791,{wu:r})}function Pa(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(k(da,"New document in limbo: "+n),t.Eu.add(r),Da(t))}function Da(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new st(nt.fromString(e)),r=t.fu.next();t.Au.set(r,new pa(n)),t.du=t.du.insert(n,r),_o(t.remoteStore,new Xi(Bn(Un(n.path)),r,"TargetPurposeLimboResolution",xt.ce))}}async function Ma(t,e,n){const r=D(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((t,a)=>{o.push(r.pu(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=Rs.As(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Pu.H_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Rt.forEach(e,(e=>Rt.forEach(e.Es,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Rt.forEach(e.ds,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ot(t))throw t;k(xs,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ms.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,i)}}}(r.localStore,s))}async function La(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){k(da,"User change. New user:",e.toKey());const t=await Ls(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach((t=>{t.forEach((t=>{t.reject(new L(M.CANCELLED,e))}))})),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ma(n,t.Ls)}}function Ua(t,e){const n=D(t),r=n.Au.get(e);if(r&&r.hu)return ur().add(r.key);{let t=ur();const r=n.Iu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function Fa(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ta.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ua.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sa.bind(null,e),e.Pu.H_=ra.bind(null,e.eventManager),e.Pu.yu=ia.bind(null,e.eventManager),e}function Va(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ca.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ka.bind(null,e),e}class ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=oo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ms(this.persistence,new Os,t.initialUser,this.serializer)}Cu(t){return new Ss(ks.mi,this.serializer)}Du(t){return new Ws}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ja.provider={build:()=>new ja};class Ba extends ja{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){P(this.persistence.referenceDelegate instanceof As,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ls(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?is.withCacheSize(this.cacheSizeBytes):is.DEFAULT;return new Ss((t=>As.mi(t,e)),this.serializer)}}class $a{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ia(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=La.bind(null,this.syncEngine),await Ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zo}()}createDatastore(t){const e=oo(t.databaseInfo.databaseId),n=function(t){return new io(t)}(t.databaseInfo);return function(t,e,n,r){return new po(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new yo(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ia(this.syncEngine,t,0)),function(){return Xs.v()?new Xs:new Gs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ga(t,e,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=D(t);k(mo,"RemoteStore shutting down."),e.Ea.add(5),await wo(e),e.Aa.shutdown(),e.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$a.provider={build:()=>new $a};
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
class za{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
const Ka="FirestoreClient";class qa{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{k(Ka,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(k(Ka,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new U;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Go(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ha(t,e){t.asyncQueue.verifyOperationInProgress(),k(Ka,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ls(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ga(t);k(Ka,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>zo(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>zo(e.remoteStore,n))),t._onlineComponents=e}async function Ga(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k(Ka,"Using user provided OfflineComponentProvider");try{await Ha(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;R("Error using user provided cache. Falling back to memory cache: "+n),await Ha(t,new ja)}}else k(Ka,"Using default OfflineComponentProvider"),await Ha(t,new Ba(void 0));return t._offlineComponents}async function Qa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k(Ka,"Using user provided OnlineComponentProvider"),await Wa(t,t._uninitializedComponentsProvider._online)):(k(Ka,"Using default OnlineComponentProvider"),await Wa(t,new $a))),t._onlineComponents}function Xa(t){return Qa(t).then((t=>t.syncEngine))}async function Ya(t){const e=await Qa(t),n=e.eventManager;return n.onListen=ma.bind(null,e.syncEngine),n.onUnlisten=_a.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ya.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ba.bind(null,e.syncEngine),n}function Ja(t,e,n={}){const r=new U;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new za({next:a=>{s.Nu(),e.enqueueAndForget((()=>na(t,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new L(M.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new L(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new ca(Un(n.path),s,{includeMetadataChanges:!0,qa:!0});return ea(t,o)}(await Ya(t),t.asyncQueue,e,n,r))),r.promise}function Za(t,e,n={}){const r=new U;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new za({next:n=>{s.Nu(),e.enqueueAndForget((()=>na(t,o))),n.fromCache&&"server"===r.source?i.reject(new L(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new ca(n,s,{includeMetadataChanges:!0,qa:!0});return ea(t,o)}(await Ya(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function tc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const ec=new Map,nc="firestore.googleapis.com",rc=!0;
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
 */class ic{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new L(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nc,this.ssl=rc}else this.host=t.host,this.ssl=t.ssl??rc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=rs;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<as)throw new L(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}at("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tc(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ic({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ic(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new V;switch(t.type){case"firstParty":return new z(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ec.get(t);e&&(k("ComponentProvider","Removing Datastore"),ec.delete(t),e.terminate())}(this),Promise.resolve()}}function oc(t,e,n,r={}){t=dt(t,sc);const i=(0,c.zJ)(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&((0,c.gE)(`https://${a}`),(0,c.P1)("Firestore",!0)),s.host!==nc&&s.host!==a&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:a,ssl:i,emulatorOptions:r};if(!(0,c.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new L(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(i)}t._authCredentials=new j(new F(e,n))}}
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
 */class ac{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ac(this.firestore,t,this._query)}}class cc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cc(this.firestore,t,this._key)}toJSON(){return{type:cc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gt(e,cc._jsonSchema))return new cc(t,n||null,new st(nt.fromString(e.referencePath)))}}cc._jsonSchemaVersion="firestore/documentReference/1.0",cc._jsonSchema={type:pt("string",cc._jsonSchemaVersion),referencePath:pt("string")};class uc extends ac{constructor(t,e,n){super(t,e,Un(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cc(this.firestore,null,new st(t))}withConverter(t){return new uc(this.firestore,t,this._path)}}function lc(t,e,...n){if(t=(0,c.Ku)(t),ot("collection","path",e),t instanceof sc){const r=nt.fromString(e,...n);return ut(r),new uc(t,null,r)}{if(!(t instanceof cc||t instanceof uc))throw new L(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return ut(r),new uc(t.firestore,null,r)}}function hc(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=W.newId()),ot("doc","path",e),t instanceof sc){const r=nt.fromString(e,...n);return ct(r),new cc(t,null,new st(r))}{if(!(t instanceof cc||t instanceof uc))throw new L(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return ct(r),new cc(t.firestore,t instanceof uc?t.converter:null,new st(r))}}
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
const dc="AsyncQueue";class fc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ao(this,"async_queue_retry"),this._c=()=>{const t=so();t&&k(dc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=so();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=so();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new U;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ot(t))throw t;k(dc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((t=>{throw this.nc=t,this.rc=!1,A("INTERNAL UNHANDLED ERROR: ",pc(t)),t})).then((t=>(this.rc=!1,t))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Wo.createAndSchedule(this,t,e,n,(t=>this.hc(t)));return this.tc.push(r),r}uc(){this.nc&&O(47125,{Pc:pc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function pc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
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
 */}class gc extends sc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new fc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fc(t),this._firestoreClient=void 0,await t}}}function mc(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Pe,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,c.yU)("firestore");t&&oc(i,...t)}return i}function yc(t){if(t._terminated)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vc(t),t._firestoreClient}function vc(t){const e=t._freezeSettings(),n=function(t,e,n,r){return new xe(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,tc(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new qa(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
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
class wc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wc(_e.fromBase64String(t))}catch(t){throw new L(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new wc(_e.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gt(t,wc._jsonSchema))return wc.fromBase64String(t.bytes)}}wc._jsonSchemaVersion="firestore/bytes/1.0",wc._jsonSchema={type:pt("string",wc._jsonSchemaVersion),bytes:pt("string")};
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
class _c{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class bc{constructor(t){this._methodName=t}}
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
 */class Ec{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ec._jsonSchemaVersion}}static fromJSON(t){if(gt(t,Ec._jsonSchema))return new Ec(t.latitude,t.longitude)}}Ec._jsonSchemaVersion="firestore/geoPoint/1.0",Ec._jsonSchema={type:pt("string",Ec._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};
/**
 * @license
 * Copyright 2024 Google LLC
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
class Tc{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Tc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gt(t,Tc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((t=>"number"==typeof t)))return new Tc(t.vectorValues);throw new L(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tc._jsonSchemaVersion="firestore/vectorValue/1.0",Tc._jsonSchema={type:pt("string",Tc._jsonSchemaVersion),vectorValues:pt("object")};
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
const Ic=/^__.*__$/;class Sc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fr(t,this.data,e,this.fieldTransforms)}}class Cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Vr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function kc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:t})}}class Ac{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ac({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){const e=this.path?.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Kc(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(0===t.length)throw this.Sc("Document fields must not be empty");if(kc(this.Ac)&&Ic.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Rc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||oo(t)}Cc(t,e,n,r=!1){return new Ac({Ac:t,methodName:e,Dc:n,path:it.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(t){const e=t._freezeSettings(),n=oo(t._databaseId);return new Rc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Oc(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);jc("Data must be an object, but it was:",o,r);const a=Fc(r,o);let c,u;if(s.merge)c=new ve(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Bc(e,r,n);if(!o.contains(i))throw new L(M.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);qc(t,i)||t.push(i)}c=new ve(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Sc(new sn(a),c,u)}class xc extends bc{_toFieldTransform(t){if(2!==t.Ac)throw 1===t.Ac?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xc}}class Pc extends bc{_toFieldTransform(t){return new kr(t.path,new wr)}isEqual(t){return t instanceof Pc}}function Dc(t,e,n,r){const i=t.Cc(1,e,n);jc("Data must be an object, but it was:",i,r);const s=[],o=sn.empty();he(r,((t,r)=>{const a=zc(e,t,n);r=(0,c.Ku)(r);const u=i.yc(a);if(r instanceof xc)s.push(a);else{const t=Uc(r,u);null!=t&&(s.push(a),o.set(a,t))}}));const a=new ve(s);return new Cc(o,a,i.fieldTransforms)}function Mc(t,e,n,r,i,s){const o=t.Cc(1,e,n),a=[Bc(e,r,n)],u=[i];if(s.length%2!=0)throw new L(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Bc(e,s[c])),u.push(s[c+1]);const l=[],h=sn.empty();for(let f=a.length-1;f>=0;--f)if(!qc(l,a[f])){const t=a[f];let e=u[f];e=(0,c.Ku)(e);const n=o.yc(t);if(e instanceof xc)l.push(t);else{const r=Uc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ve(l);return new Cc(h,d,o.fieldTransforms)}function Lc(t,e,n,r=!1){return Uc(n,t.Cc(r?4:3,e))}function Uc(t,e){if(Vc(t=(0,c.Ku)(t)))return jc("Unsupported field value:",e,t),Fc(t,e);if(t instanceof bc)return function(t,e){if(!kc(e.Ac))throw e.Sc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Sc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&4!==e.Ac)throw e.Sc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Uc(i,e.wc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return pr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=vt.fromDate(t);return{timestampValue:_i(e.serializer,n)}}if(t instanceof vt){const n=new vt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_i(e.serializer,n)}}if(t instanceof Ec)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wc)return{bytesValue:bi(e.serializer,t._byteString)};if(t instanceof cc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ii(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Tc)return function(t,e){const n={fields:{[Me]:{stringValue:Fe},[Ve]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Sc("VectorValues must only contain numeric values.");return dr(e.serializer,t)}))}}}};return{mapValue:n}}(t,e);throw e.Sc(`Unsupported field value: ${ht(t)}`)}(t,e)}function Fc(t,e){const n={};return de(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):he(t,((t,r)=>{const i=Uc(r,e.mc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Vc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof Ec||t instanceof wc||t instanceof cc||t instanceof bc||t instanceof Tc)}function jc(t,e,n){if(!Vc(n)||!lt(n)){const r=ht(n);throw"an object"===r?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Bc(t,e,n){if((e=(0,c.Ku)(e))instanceof _c)return e._internalPath;if("string"==typeof e)return zc(t,e);throw Kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $c=new RegExp("[~\\*/\\[\\]]");function zc(t,e,n){if(e.search($c)>=0)throw Kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _c(...e.split("."))._internalPath}catch(r){throw Kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(M.INVALID_ARGUMENT,a+t+c)}function qc(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Hc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Wc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Wc extends Hc{data(){return super.data()}}function Gc(t,e){return"string"==typeof e?zc(t,e):e instanceof _c?e._internalPath:e._delegate._internalPath}
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
 */function Qc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xc{}class Yc extends Xc{}function Jc(t,e,...n){let r=[];e instanceof Xc&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof eu)).length,n=t.filter((t=>t instanceof Zc)).length;if(e>1||e>0&&n>0)throw new L(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const i of r)t=i._apply(t);return t}class Zc extends Yc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Zc(t,e,n)}_apply(t){const e=this._parse(t);return cu(t._query,e),new ac(t.firestore,t.converter,zn(t._query,e))}_parse(t){const e=Nc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){au(o,s);const e=[];for(const n of o)e.push(ou(r,t,n));a={arrayValue:{values:e}}}else a=ou(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||au(o,s),a=Lc(n,e,o,"in"===s||"not-in"===s);const c=pn.create(i,s,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function tu(t,e,n){const r=e,i=Gc("where",t);return Zc._create(i,r,n)}class eu extends Xc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new eu(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:gn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)cu(n,i),n=zn(n,i)}(t._query,e),new ac(t.firestore,t.converter,zn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class nu extends Yc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new nu(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new hn(e,n);return r}(t._query,this._field,this._direction);return new ac(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Mn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function ru(t,e="asc"){const n=e,r=Gc("orderBy",t);return nu._create(r,n)}class iu extends Yc{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new iu(t,e,n)}_apply(t){return new ac(t.firestore,t.converter,Kn(t._query,this._limit,this._limitType))}}function su(t){return ft("limit",t),iu._create("limit",t,"F")}function ou(t,e,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new L(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vn(e)&&-1!==n.indexOf("/"))throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(nt.fromString(n));if(!st.isDocumentKey(r))throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qe(t,new st(r))}if(n instanceof cc)return Qe(t,n._key);throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ht(n)}.`)}function au(t,e){if(!Array.isArray(t)||0===t.length)throw new L(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class uu{convertValue(t,e="none"){switch(je(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Te(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return he(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){const e=t.fields?.[Ve].arrayValue?.values?.map((t=>Te(t.doubleValue)));return new Tc(e)}convertGeoPoint(t){return new Ec(Te(t.latitude),Te(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ne(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Oe(t));default:return null}}convertTimestamp(t){const e=Ee(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=nt.fromString(t);P(Qi(n),9688,{name:t});const r=new De(n.get(1),n.get(3)),i=new st(n.popFirst(5));return r.isEqual(e)||A(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function lu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class hu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class du extends Hc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=du._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}du._jsonSchemaVersion="firestore/documentSnapshot/1.0",du._jsonSchema={type:pt("string",du._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class fu extends du{data(t={}){return super.data(t)}}class pu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new hu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new fu(this._firestore,this._userDataWriter,n.key,n,new hu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new fu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new hu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new fu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new hu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:gu(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=pu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=W.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach((t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function gu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:t})}}
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
function mu(t){t=dt(t,cc);const e=dt(t.firestore,gc);return Ja(yc(e),t._key).then((n=>Iu(e,t,n)))}pu._jsonSchemaVersion="firestore/querySnapshot/1.0",pu._jsonSchema={type:pt("string",pu._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class yu extends uu{constructor(t){super(),this.firestore=t}convertBytes(t){return new wc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new cc(this.firestore,null,e)}}function vu(t){t=dt(t,ac);const e=dt(t.firestore,gc),n=yc(e),r=new yu(e);return Qc(t._query),Za(n,t._query).then((n=>new pu(e,r,t,n)))}function wu(t,e,n){t=dt(t,cc);const r=dt(t.firestore,gc),i=lu(t.converter,e,n);return Tu(r,[Oc(Nc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Nr.none())])}function _u(t,e,n,...r){t=dt(t,cc);const i=dt(t.firestore,gc),s=Nc(i);let o;return o="string"==typeof(e=(0,c.Ku)(e))||e instanceof _c?Mc(s,"updateDoc",t._key,e,n,r):Dc(s,"updateDoc",t._key,e),Tu(i,[o.toMutation(t._key,Nr.exists(!0))])}function bu(t){return Tu(dt(t.firestore,gc),[new zr(t._key,Nr.none())])}function Eu(t,e){const n=dt(t.firestore,gc),r=hc(t),i=lu(t.converter,e);return Tu(n,[Oc(Nc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Nr.exists(!1))]).then((()=>r))}function Tu(t,e){return function(t,e){const n=new U;return t.asyncQueue.enqueueAndForget((async()=>Ea(await Xa(t),e,n))),n.promise}(yc(t),e)}function Iu(t,e,n){const r=n.docs.get(e._key),i=new yu(t);return new du(t,i,e._key,r,new hu(n.hasPendingWrites,n.fromCache),e.converter)}function Su(){return new Pc("serverTimestamp")}new WeakMap;
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
 */!function(t,e=!0){!function(t){I=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new gc(new B(t.getProvider("auth-internal")),new q(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new De(t.options.projectId,e)}(i,n),i);return r={useFetchStreams:e,...r},s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,E,t),(0,s.KO)(b,E,"esm2020")}()},2839:function(t,e,n){"use strict";var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},2967:function(t,e,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},3167:function(t,e,n){"use strict";var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3392:function(t,e,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3440:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},3506:function(t,e,n){"use strict";var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},3553:function(t,e,n){const r=n(7027);function i(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function s(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function o(t,e,n){let r="",i=0,o=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||o||(o=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(r+=o?s("M",u+n,.5+l+n):s("m",i,0),i=0,o=!1),u+1<e&&t[c+1]||(r+=s("h",a),a=0)):i++}return r}e.render=function(t,e,n){const s=r.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*s.margin,l=s.color.light.a?"<path "+i(s.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+i(s.color.dark,"stroke")+' d="'+o(c,a,s.margin)+'"/>',d='viewBox="0 0 '+u+" "+u+'"',f=s.width?'width="'+s.width+'" height="'+s.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+f+d+' shape-rendering="crispEdges">'+l+h+"</svg>\n";return"function"===typeof n&&n(null,p),p}},3579:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3650:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},3693:function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const s="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(s,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const o=new RegExp("^"+i+"$"),a=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return c.test(t)}},3706:function(t,e,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},3724:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3789:function(t,e,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new d(t,n)}},3838:function(t,e,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},3853:function(t,e,n){"use strict";var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},3925:function(t,e,n){"use strict";var r=n(34);t.exports=function(t){return r(t)||null===t}},4055:function(t,e,n){"use strict";var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4114:function(t,e,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},4204:function(t,e,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,(function(t){i(c,t)})),c}},4209:function(t,e,n){"use strict";var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4228:function(t,e,n){"use strict";n.d(e,{eJ:function(){return Ue},xI:function(){return ti},hg:function(){return Be},x9:function(){return Fe},CI:function(){return $e}});n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(262),i=n(2455),s=n(6189),o=n(798);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=a,u=new i.FA("auth","Firebase",a()),l=new s.Vy("@firebase/auth");function h(t,...e){l.logLevel<=s.$b.WARN&&l.warn(`Auth (${r.MF}): ${t}`,...e)}function d(t,...e){l.logLevel<=s.$b.ERROR&&l.error(`Auth (${r.MF}): ${t}`,...e)}
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
 */function f(t,...e){throw y(t,...e)}function p(t,...e){return y(t,...e)}function g(t,e,n){const r={...c(),[e]:n},s=new i.FA("auth","Firebase",r);return s.create(e,{appName:t.name})}function m(t){return g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||w(e)}
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
 */function b(){return"undefined"!==typeof self&&self.location?.href||""}function E(){return"http:"===T()||"https:"===T()}function T(){return"undefined"!==typeof self&&self.location?.protocol||null}
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function k(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],O=new C(3e4,6e4);
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
 */function x(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function P(t,e,n,r,s={}){return D(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return(0,i.c1)()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&(0,i.zJ)(t.emulatorConfig.host)&&(u.credentials="include"),A.fetch()(await L(t,t.config.apiHost,n,a),u)}))}async function D(t,e,n){t._canInitEmulator=!1;const r={...R,...e};try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof i.g)throw s;f(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function L(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`;if(N.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){const t=s._getPersistence();return t._getFinalTarget(o).toString()}return o}function U(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),O.get())}))}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
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
 */function j(t){return void 0!==t&&void 0!==t.enterprise}class B{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return U(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
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
 */async function $(t,e){return P(t,"GET","/v2/recaptchaConfig",x(t,e))}
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
 */async function z(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function K(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
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
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function H(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),s=G(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=o?.["sign_in_provider"];return{claims:s,token:r,authTime:q(W(s.auth_time)),issuedAtTime:q(W(s.iat)),expirationTime:q(W(s.exp)),signInProvider:a||null,signInSecondFactor:o?.["sign_in_second_factor"]||null}}function W(t){return 1e3*Number(t)}function G(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Q(t){const e=G(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&Y(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=this.user.stsTokenManager.expirationTime??0,e=t-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Z{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function tt(t){const e=t.auth,n=await t.getIdToken(),r=await X(t,K(e,{idToken:n}));v(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?rt(i.providerUserInfo):[],o=nt(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=!!a&&c,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function et(t){const e=(0,i.Ku)(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function rt(t){return t.map((({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null})))}
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
 */async function it(t,e){const n=await D(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await L(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return t.emulatorConfig&&(0,i.zJ)(t.emulatorConfig.host)&&(c.credentials="include"),A.fetch()(o,c)}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return P(t,"POST","/v2/accounts:revokeToken",x(t,e))}
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
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){v(0!==t.length,"internal-error");const e=Q(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(v(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await it(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new ot;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function at(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor({uid:t,auth:e,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Z(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return et(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>({...t}))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ct({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(m(this.auth));const t=await this.getIdToken();return await X(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>({...t}))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const n=e.displayName??void 0,r=e.email??void 0,i=e.phoneNumber??void 0,s=e.photoURL??void 0,o=e.tenantId??void 0,a=e._redirectEventId??void 0,c=e.createdAt??void 0,u=e.lastLoginAt??void 0,{uid:l,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=e;v(l&&p,t,"internal-error");const g=ot.fromJSON(this.name,p);v("string"===typeof l,t,"internal-error"),at(n,t.name),at(r,t.name),v("boolean"===typeof h,t,"internal-error"),v("boolean"===typeof d,t,"internal-error"),at(i,t.name),at(s,t.name),at(o,t.name),at(a,t.name),at(c,t.name),at(u,t.name);const m=new ct({uid:l,auth:t,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:g,createdAt:c,lastLoginAt:u});return f&&Array.isArray(f)&&(m.providerData=f.map((t=>({...t})))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(t,e,n=!1){const r=new ot;r.updateFromServerResponse(e);const i=new ct({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await tt(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];v(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?rt(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!i?.length,o=new ot;o.updateFromIdToken(n);const a=new ct({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(a,c),a}}
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
 */const ut=new Map;function lt(t){_(t instanceof Function,"Expected a class definition");let e=ut.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ut.set(t,e),e)}
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
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
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
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ft(this.userKey,r.apiKey,i),this.fullPersistenceKey=ft("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if("string"===typeof t){const e=await K(this.auth,{idToken:t}).catch((()=>{}));return e?ct._fromGetAccountInfoResponse(this.auth,e,t):null}return ct._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(lt(dt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||lt(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){let n;if("string"===typeof e){const r=await K(t,{idToken:e}).catch((()=>{}));if(!r)break;n=await ct._fromGetAccountInfoResponse(t,r,e)}else n=ct._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch{}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch{}}))),new pt(i,t,n)):new pt(i,t,n)}}
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
 */function gt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bt(e))return"Blackberry";if(Et(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||vt(e))&&!e.includes("edge/"))return"Chrome";if(_t(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===n?.length)return n[1]}return"Other"}function mt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vt(t=(0,i.ZQ)()){return/crios\//i.test(t)}function wt(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function _t(t=(0,i.ZQ)()){return/android/i.test(t)}function bt(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Et(t=(0,i.ZQ)()){return/webos/i.test(t)}function Tt(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function It(t=(0,i.ZQ)()){return Tt(t)&&!!window.navigator?.standalone}function St(){return(0,i.lT)()&&10===document.documentMode}function Ct(t=(0,i.ZQ)()){return Tt(t)||_t(t)||Et(t)||bt(t)||/windows phone/i.test(t)||wt(t)}
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
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=gt((0,i.ZQ)());break;case"Worker":n=`${gt((0,i.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class At{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Rt(t,e={}){return P(t,"GET","/v2/passwordPolicy",x(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Nt=6;class Ot{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??Nt,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),void 0!==e.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),void 0!==e.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),void 0!==e.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),void 0!==e.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
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
 */class xt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dt(this),this.idTokenSubscription=new Dt(this),this.beforeStateQueue=new At(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((t=>this._resolvePersistenceManagerAvailable=t))}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await K(this,{idToken:t}),n=await ct._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let n=e,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const e=this.redirectUser?._redirectEventId,r=n?._redirectEventId,s=await this.tryRedirectSignIn(t);e&&e!==r||!s?.user||(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=e,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await tt(t)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(m(this));const e=t?(0,i.Ku)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(m(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Rt(this),e=new Ot(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue((async()=>{})),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return t?.error&&h(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Pt(t){return(0,i.Ku)(t)}class Dt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lt(t){Mt=t}function Ut(t){return Mt.loadJS(t)}function Ft(){return Mt.recaptchaEnterpriseScript}function Vt(){return Mt.gapiScript}function jt(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
 */class Bt{constructor(){this.enterprise=new $t}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class $t{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const zt="recaptcha-enterprise",Kt="NO_RECAPTCHA";class qt{constructor(t){this.type=zt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{$(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;j(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Kt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new Bt;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&j(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Ft();0!==e.length&&(e+=n),Ut(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Ht(t,e,n,r=!1,i=!1){const s=new qt(t);let o;if(i)o=Kt;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a={...e};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wt(t,e,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Ht(t,e,n);return r(t,i).catch((async i=>{if("AUDIT"===t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ht(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await Ht(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}async function Gt(t){const e=Pt(t),n=await $(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new B(n);if(null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()){const t=new qt(e);t.verify()}}
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
 */function Qt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,e??{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function Xt(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(lt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Yt(t,e,n){const r=Pt(t);v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,o=Jt(e),{host:a,port:c}=Zt(e),u=null===c?"":`:${c}`,l={url:`${o}//${a}${u}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return v(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void v((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,i.zJ)(a)?((0,i.gE)(`${o}//${a}${u}`),(0,i.P1)("Auth",!0)):s||ee()}function Jt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zt(t){const e=Jt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:te(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:te(e)}}}function te(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ee(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */class ne{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
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
 */async function re(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
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
async function ie(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
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
async function se(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
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
 */class ae extends ne{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ae(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ae(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if(e?.email&&e?.password){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,e,"signInWithPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return se(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,n,"signUpPassword",re,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function ce(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
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
 */const ue="http://localhost";class le extends ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new le(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r,...i}=e;if(!n||!r)return null;const s=new le(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ce(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ce(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ce(t,e)}buildRequest(){const t={requestUri:ue,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
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
 */async function he(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function de(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function fe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const pe={["USER_NOT_FOUND"]:"user-not-found"};async function ge(t,e){const n={...e,operation:"REAUTH"};return M(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),pe)}
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
 */class me extends ne{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new me({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new me({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return de(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return fe(t,{idToken:e,...this._makeVerificationRequest()})}_getReauthenticationResolver(t){return ge(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new me({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ye(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ve(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||e||t}class we{constructor(t){const e=(0,i.I9)((0,i.hp)(t)),n=e["apiKey"]??null,r=e["oobCode"]??null,s=ye(e["mode"]??null);v(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=e["continueUrl"]??null,this.languageCode=e["lang"]??null,this.tenantId=e["tenantId"]??null}static parseLink(t){const e=ve(t);try{return new we(e)}catch{return null}}}
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
class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(t,e){return ae._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=we.parseLink(e);return v(n,"argument-error"),ae._fromEmailAndCode(t,n.code,n.tenantId)}}_e.PROVIDER_ID="password",_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class be{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Ee extends be{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Te extends Ee{constructor(){super("facebook.com")}static credential(t){return le._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com",Te.PROVIDER_ID="facebook.com";
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
class Ie extends Ee{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return le._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ie.credential(e,n)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com",Ie.PROVIDER_ID="google.com";
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
class Se extends Ee{constructor(){super("github.com")}static credential(t){return le._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Se.credential(t.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com",Se.PROVIDER_ID="github.com";
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
class Ce extends Ee{constructor(){super("twitter.com")}static credential(t,e){return le._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ce.credential(e,n)}catch{return null}}}
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
async function ke(t,e){return M(t,"POST","/v1/accounts:signUp",x(t,e))}
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
 */Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";class Ae{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ct._fromIdTokenResponse(t,n,r),s=Re(n),o=new Ae({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Re(n);return new Ae({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Re(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Ne extends i.g{constructor(t,e,n,r){super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ne.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ne(t,e,n,r)}}function Oe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ne._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function xe(t,e,n=!1){const r=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ae._forOperation(t,"link",r)}
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
 */
async function Pe(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(m(i));const s="reauthenticate";try{const r=await X(t,Oe(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=G(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),Ae._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===o?.code&&f(i,"user-mismatch"),o}}
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
 */async function De(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(m(t));const i="signIn",s=await Oe(t,i,e),o=await Ae._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function Me(t,e){return De(Pt(t),e)}
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
async function Le(t){const e=Pt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ue(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(m(t));const i=Pt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},o=Wt(i,s,"signUpPassword",ke,"EMAIL_PASSWORD_PROVIDER"),a=await o.catch((e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Le(t),e})),c=await Ae._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Fe(t,e,n){return(0,r.xZ)(t.app)?Promise.reject(m(t)):Me((0,i.Ku)(t),_e.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Le(t),e}))}
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
 */function Ve(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function je(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Be(t,e,n,r){return(0,i.Ku)(t).onAuthStateChanged(e,n,r)}function $e(t){return(0,i.Ku)(t).signOut()}
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
function ze(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Ke(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}function qe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function He(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const We="__sak";
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
 */class Ge{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(We,"1"),this.storage.removeItem(We),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */const Qe=1e3,Xe=10;class Ye extends Ge{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ct(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);St()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Xe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ye.type="LOCAL";const Je=Ye,Ze=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function tn(t){const e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function en(t){const e="http:"===window.location.protocol;return`${e?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}class nn{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(t){if(void 0===typeof window)return t;const e=new URL(`${window.location.origin}/__cookies__`);return e.searchParams.set("finalTarget",t),e}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(t,e){}async _get(t){if(!this._isAvailable())return null;const e=en(t);if(window.cookieStore){const t=await window.cookieStore.get(e);return t?.value}return tn(e)}async _remove(t){if(!this._isAvailable())return;const e=await this._get(t);if(!e)return;const n=en(t);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch((()=>{}))}_addListener(t,e){if(!this._isAvailable())return;const n=en(t);if(window.cookieStore){const t=t=>{const r=t.changed.find((t=>t.name===n));r&&e(r.value);const i=t.deleted.find((t=>t.name===n));i&&e(null)},r=()=>window.cookieStore.removeEventListener("change",t);return this.listenerUnsubscribes.set(e,r),window.cookieStore.addEventListener("change",t)}let r=tn(n);const i=setInterval((()=>{const t=tn(n);t!==r&&(e(t),r=t)}),Ze),s=()=>clearInterval(i);this.listenerUnsubscribes.set(e,s)}_removeListener(t,e){const n=this.listenerUnsubscribes.get(e);n&&(n(),this.listenerUnsubscribes.delete(e))}}nn.type="COOKIE";
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
class rn extends Ge{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}rn.type="SESSION";const sn=rn;
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
 */function on(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class an{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new an(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!s?.size)return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await on(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function cn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */an.receivers=[];class un{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=cn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function ln(){return window}function hn(t){ln().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function dn(){return"undefined"!==typeof ln()["WorkerGlobalScope"]&&"function"===typeof ln()["importScripts"]}async function fn(){if(!navigator?.serviceWorker)return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch{return null}}function pn(){return navigator?.serviceWorker?.controller||null}function gn(){return dn()?self:null}
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
 */const mn="firebaseLocalStorageDb",yn=1,vn="firebaseLocalStorage",wn="fbase_key";class _n{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function bn(t,e){return t.transaction([vn],e?"readwrite":"readonly").objectStore(vn)}function En(){const t=indexedDB.deleteDatabase(mn);return new _n(t).toPromise()}function Tn(){const t=indexedDB.open(mn,yn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(vn,{keyPath:wn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(vn)?e(n):(n.close(),await En(),e(await Tn()))}))}))}async function In(t,e,n){const r=bn(t,!0).put({[wn]:e,value:n});return new _n(r).toPromise()}async function Sn(t,e){const n=bn(t,!1).get(e),r=await new _n(n).toPromise();return void 0===r?null:r.value}function Cn(t,e){const n=bn(t,!0).delete(e);return new _n(n).toPromise()}const kn=800,An=3;class Rn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Tn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>An)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(gn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){if(this.activeServiceWorker=await fn(),!this.activeServiceWorker)return;this.sender=new un(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&pn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Tn();return await In(t,We,"1"),await Cn(t,We),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>In(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Sn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Cn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=bn(t,!1).getAll();return new _n(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Rn.type="LOCAL";const Nn=Rn;
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
 */function On(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function xn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}function Pn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
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
 */jt("rcb"),new C(3e4,6e4);
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
const Dn="recaptcha";async function Mn(t,e,n){if(!t._getRecaptchaConfig())try{await Gt(t)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){v("enroll"===e.type,t,"internal-error");const i={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===Kt){v(n?.type===Dn,t,"argument-error");const r=await Ln(t,e,n);return ze(t,r)}return ze(t,e)},o=Wt(t,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;v(i,t,"missing-multi-factor-info");const s={mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===Kt){v(n?.type===Dn,t,"argument-error");const r=await Ln(t,e,n);return On(t,r)}return On(t,e)},a=Wt(t,s,"mfaSmsSignIn",o,"PHONE_PROVIDER"),c=await a.catch((t=>Promise.reject(t)));return c.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(t,e)=>{if(e.captchaResponse===Kt){v(n?.type===Dn,t,"argument-error");const r=await Ln(t,e,n);return he(t,r)}return he(t,e)},s=Wt(t,e,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{n?._reset()}}async function Ln(t,e,n){v(n.type===Dn,t,"argument-error");const r=await n.verify();v("string"===typeof r,t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const t=i.phoneEnrollmentInfo.phoneNumber,e=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:r,captchaResponse:e,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const t=i.phoneSignInInfo.captchaResponse,e=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:t,clientType:e,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
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
 */class Un{constructor(t){this.providerId=Un.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return Mn(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return me._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Un.credentialFromTaggedObject(e)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?me._fromTokenResponse(e,n):null}}
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
function Fn(t,e){return e?lt(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Un.PROVIDER_ID="phone",Un.PHONE_SIGN_IN_METHOD="phone";class Vn extends ne{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ce(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ce(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ce(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function jn(t){return De(t.auth,new Vn(t),t.bypassAuthState)}function Bn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Pe(n,new Vn(t),t.bypassAuthState)}async function $n(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),xe(n,new Vn(t),t.bypassAuthState)}
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
 */class zn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return Bn;default:f(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Kn=new C(2e3,1e4);class qn extends zn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const t=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Kn.get())};t()}}qn.currentPopupAction=null;
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
const Hn="pendingRedirect",Wn=new Map;class Gn extends zn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Wn.get(this.auth._key());if(!t){try{const e=await Qn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Wn.set(this.auth._key(),t)}return this.bypassAuthState||Wn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qn(t,e){const n=Jn(e),r=Yn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Xn(t,e){Wn.set(t._key(),e)}function Yn(t){return lt(t._redirectPersistence)}function Jn(t){return ft(Hn,t.config.apiKey,t.name)}
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
 */async function Zn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(m(t));const i=Pt(t),s=Fn(i,e),o=new Gn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
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
const tr=6e5;class er{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!ir(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!rr(t)){const n=t.error.code?.split("auth/")[1]||"internal-error";e.onError(p(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tr&&this.cachedEventUids.clear(),this.cachedEventUids.has(nr(t))}saveEventToCache(t){this.cachedEventUids.add(nr(t)),this.lastProcessedEventTime=Date.now()}}function nr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function rr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===e?.code}function ir(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rr(t);default:return!1}}
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
 */async function sr(t,e={}){return P(t,"GET","/v1/projects",e)}
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
 */const or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^https?/;async function cr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sr(t);for(const n of e)try{if(ur(n))return}catch{}f(t,"unauthorized-domain")}function ur(t){const e=b(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ar.test(n))return!1;if(or.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lr=new C(3e4,6e4);function hr(){const t=ln().___jsl;if(t?.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function dr(t){return new Promise(((e,n)=>{function r(){hr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hr(),n(p(t,"network-request-failed"))},timeout:lr.get()})}if(ln().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else{if(!ln().gapi?.load){const e=jt("iframefcb");return ln()[e]=()=>{gapi.load?r():n(p(t,"network-request-failed"))},Ut(`${Vt()}?onload=${e}`).catch((t=>n(t)))}r()}})).catch((t=>{throw fr=null,t}))}let fr=null;function pr(t){return fr=fr||dr(t),fr}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gr=new C(5e3,15e3),mr="__/auth/iframe",yr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _r(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,yr):`https://${t.config.authDomain}/${mr}`,s={apiKey:e.apiKey,appName:t.name,v:r.MF},o=wr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function br(t){const e=await pr(t),n=ln().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:_r(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=ln().setTimeout((()=>{r(i)}),gr.get());function o(){ln().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tr=500,Ir=600,Sr="_blank",Cr="http://localhost";class kr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ar(t,e,n,r=Tr,s=Ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...Er,width:r.toString(),height:s.toString(),top:o,left:a},l=(0,i.ZQ)().toLowerCase();n&&(c=vt(l)?Sr:n),mt(l)&&(e=e||Cr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(It(l)&&"_self"!==c)return Rr(e||"",c),new kr(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new kr(d)}function Rr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Nr="__/auth/handler",Or="emulator/auth/handler",xr=encodeURIComponent("fac");async function Pr(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(e instanceof be){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Ee){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${xr}=${encodeURIComponent(l)}`:"";return`${Dr(t)}?${(0,i.Am)(u).slice(1)}${h}`}function Dr({config:t}){return t.emulator?k(t,Or):`https://${t.authDomain}/${Nr}`}
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
 */const Mr="webStorageSupport";class Lr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=Zn,this._overrideRedirectResult=Xn}async _openPopup(t,e,n,r){_(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Pr(t,e,n,b(),r);return Ar(t,i,cn())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Pr(t,e,n,b(),r);return hn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await br(t),n=new er(t);return e.register("authEvent",(e=>{v(e?.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Mr,{type:Mr},(n=>{const r=n?.[0]?.[Mr];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=cr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ct()||yt()||Tt()}}const Ur=Lr;class Fr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Vr extends Fr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Vr(t)}_finalizeEnroll(t,e,n){return Ke(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return xn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jr{constructor(){}static assertion(t){return Vr._fromCredential(t)}}jr.FACTOR_ID="phone";class Br{static assertionForEnrollment(t,e){return $r._fromSecret(t,e)}static assertionForSignIn(t,e){return $r._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;v("undefined"!==typeof e.user?.auth,"internal-error");const n=await qe(e.user.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return zr._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}Br.FACTOR_ID="totp";class $r extends Fr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new $r(e,void 0,t)}static _fromEnrollmentId(t,e){return new $r(e,t)}async _finalizeEnroll(t,e,n){return v("undefined"!==typeof this.secret,t,"argument-error"),He(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){v(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Pn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class zr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new zr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){let n=!1;return(Kr(t)||Kr(e))&&(n=!0),n&&(Kr(t)&&(t=this.auth.currentUser?.email||"unknownuser"),Kr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Kr(t){return"undefined"===typeof t||0===t?.length}var qr="@firebase/auth",Hr="1.11.1";
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
class Wr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t(e?.stsTokenManager.accessToken||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Gr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qr(t){(0,r.om)(new o.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},u=new xt(r,i,s,c);return Xt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new o.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Wr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(qr,Hr,Gr(t)),(0,r.KO)(qr,Hr,"esm2020")}
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
 */const Xr=300,Yr=(0,i.XA)("authIdTokenMaxAge")||Xr;let Jr=null;const Zr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yr)return;const i=n?.token;Jr!==i&&(Jr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ti(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qt(t,{popupRedirectResolver:Ur,persistence:[Nn,Je,sn]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Zr(t.toString());je(n,e,(()=>e(n.currentUser))),Ve(n,(t=>e(t)))}}const o=(0,i.Tj)("auth");return o&&Yt(n,`http://${o}`),n}function ei(){return document.getElementsByTagName("head")?.[0]??document}Lt({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",ei().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Qr("Browser")},4232:function(t,e,n){"use strict";n.d(e,{$3:function(){return f},$H:function(){return U},BH:function(){return q},BX:function(){return nt},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return x},Qd:function(){return k},Ro:function(){return B},SU:function(){return R},TF:function(){return h},Tg:function(){return D},Tn:function(){return w},Tr:function(){return H},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return M},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return L},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return A},yL:function(){return T},yQ:function(){return V}});n(4114),n(8111),n(2489),n(7588);
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),w=t=>"function"===typeof t,_=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),k=t=>"[object Object]"===S(t),A=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},O=/-(\w)/g,x=N((t=>t.replace(O,((t,e)=>e?e.toUpperCase():"")))),P=/\B([A-Z])/g,D=N((t=>t.replace(P,"-$1").toLowerCase())),M=N((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=N((t=>{const e=t?`on${M(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",q=r(K);function H(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?X(r):H(r);if(i)for(const t in i)e[t]=i[t]}return e}if(_(t)||E(t))return t}const W=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(W).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(_(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>_(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!w(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!E(e)||p(e)||k(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4270:function(t,e,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},4376:function(t,e,n){"use strict";var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4402:function(t,e,n){"use strict";var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},4449:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},4495:function(t,e,n){"use strict";var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4527:function(t,e,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4549:function(t,e,n){"use strict";var r=n(4576);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return s}},4576:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4659:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},4772:function(t,e,n){const r=n(7195),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function s(t){this.mode=r.ALPHANUMERIC,this.data=t}s.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},s.prototype.getLength=function(){return this.data.length},s.prototype.getBitsLength=function(){return s.getBitsLength(this.data.length)},s.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*i.indexOf(this.data[e]);n+=i.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(i.indexOf(this.data[e]),6)},t.exports=s},4804:function(t,e,n){const r=n(9547),i=1335,s=21522,o=r.getBCHDigit(i);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let a=n<<10;while(r.getBCHDigit(a)-o>=0)a^=i<<r.getBCHDigit(a)-o;return(n<<10|a)^s}},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:function(t,e,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},4916:function(t,e,n){"use strict";var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(c){var o=new n;return o.add(1),o.add(2),e(o[t](s(1/0)))}}}catch(c){return!1}}},4979:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,_);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=s(m),k=C.prototype;if(k.constructor!==C)for(var A in g||a(k,"constructor",o(1,C)),d)if(c(d,A)){var R=d[A],N=R.s;c(C,N)||a(C,N,o(6,R.c))}},5002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5024:function(t,e,n){"use strict";var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},5031:function(t,e,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},5130:function(t,e,n){"use strict";n.d(e,{D$:function(){return st},Ef:function(){return ht},Jo:function(){return Q},XL:function(){return J},aG:function(){return v},jR:function(){return at},lH:function(){return X},u1:function(){return Z}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(pt){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[f];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh"),v={beforeMount(t,{value:e},{transition:n}){t[m]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):w(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),w(t,!0),r.enter(t)):r.leave(t,(()=>{w(t,!1)})):w(t,e))},beforeUnmount(t,{value:e}){w(t,e)}};function w(t,e){t.style.display=e?t[m]:"none",t[y]=!e}const _=Symbol("");const b=/(^|;)\s*display\s*:/;function E(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&I(r,e,"")}else for(const t in e)null==n[t]&&I(r,t,"");for(const t in n)"display"===t&&(o=!0),I(r,t,n[t])}else if(s){if(e!==n){const t=r[_];t&&(n+=";"+t),r.cssText=n,o=b.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[y]&&(r.display="none"))}const T=/\s*!important$/;function I(t,e,n){if((0,i.cy)(n))n.forEach((n=>I(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=k(t,e);T.test(n)?t.setProperty((0,i.Tg)(r),n.replace(T,""),"important"):t[r]=n}}const S=["Webkit","Moz","ms"],C={};function k(t,e){const n=C[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return C[e]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in t)return C[e]=n}return e}const A="http://www.w3.org/1999/xlink";function R(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(A,e.slice(6,e.length)):t.setAttributeNS(A,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function N(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(pt){0}c&&t.removeAttribute(s||e)}function O(t,e,n,r){t.addEventListener(e,n,r)}function x(t,e,n,r){t.removeEventListener(e,n,r)}const P=Symbol("_vei");function D(t,e,n,r,i=null){const s=t[P]||(t[P]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=L(e);if(r){const o=s[e]=j(r,i);O(t,n,o,a)}else o&&(x(t,n,o,a),s[e]=void 0)}}const M=/(?:Once|Passive|Capture)$/;function L(t){let e;if(M.test(t)){let n;e={};while(n=t.match(M))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let U=0;const F=Promise.resolve(),V=()=>U||(F.then((()=>U=0)),U=Date.now());function j(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(B(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function B(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const $=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?E(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||D(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):K(t,e,r,a))?(N(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||R(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),R(t,e,r,a)):N(t,(0,i.PT)(e),r,o,e)};function K(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&$(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!$(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const q=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function H(t){t.target.composing=!0}function W(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const G=Symbol("_assign"),Q={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[G]=q(s);const o=r||s.props&&"number"===s.props.type;O(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[G](r)})),n&&O(t,"change",(()=>{t.value=t.value.trim()})),e||(O(t,"compositionstart",H),O(t,"compositionend",W),O(t,"change",W))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[G]=q(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}}},X={deep:!0,created(t,e,n){t[G]=q(n),O(t,"change",(()=>{const e=t._modelValue,n=et(t),r=t.checked,s=t[G];if((0,i.cy)(e)){const t=(0,i.u3)(e,n),o=-1!==t;if(r&&!o)s(e.concat(n));else if(!r&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,i.vM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),s(t)}else s(nt(t,r))}))},mounted:Y,beforeUpdate(t,e,n){t[G]=q(n),Y(t,e,n)}};function Y(t,{value:e,oldValue:n},r){let s;if(t._modelValue=e,(0,i.cy)(e))s=(0,i.u3)(e,r.props.value)>-1;else if((0,i.vM)(e))s=e.has(r.props.value);else{if(e===n)return;s=(0,i.BX)(e,nt(t,!0))}t.checked!==s&&(t.checked=s)}const J={created(t,{value:e},n){t.checked=(0,i.BX)(e,n.props.value),t[G]=q(n),O(t,"change",(()=>{t[G](et(t))}))},beforeUpdate(t,{value:e,oldValue:n},r){t[G]=q(r),e!==n&&(t.checked=(0,i.BX)(e,r.props.value))}},Z={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.vM)(e);O(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(et(t)):et(t)));t[G](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[G]=q(s)},mounted(t,{value:e}){tt(t,e)},beforeUpdate(t,e,n){t[G]=q(n)},updated(t,{value:e}){t._assigning||tt(t,e)}};function tt(t,e){const n=t.multiple,r=(0,i.cy)(e);if(!n||r||(0,i.vM)(e)){for(let s=0,o=t.options.length;s<o;s++){const o=t.options[s],a=et(o);if(n)if(r){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.u3)(e,a)>-1}else o.selected=e.has(a);else if((0,i.BX)(et(o),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function et(t){return"_value"in t?t._value:t.value}function nt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const rt=["ctrl","shift","alt","meta"],it={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},st=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=it[e[t]];if(r&&r(n,e))return}return t(n,...r)})},ot={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},at=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||ot[t]===r))?t(n):void 0})},ct=(0,i.X$)({patchProp:z},d);let ut;function lt(){return ut||(ut=(0,r.K9)(ct))}const ht=(...t)=>{const e=lt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=ft(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,dt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function dt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function ft(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},5170:function(t,e,n){"use strict";var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},5397:function(t,e,n){"use strict";var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5610:function(t,e,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5745:function(t,e,n){"use strict";var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5827:function(t,e,n){"use strict";n.d(e,{A:function(){return v}});n(8111),n(7588),n(1701);const r=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,i=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,s=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function o(t,e){if(!("__proto__"===t||"constructor"===t&&e&&"object"===typeof e&&"prototype"in e))return e;a(t)}function a(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function c(t,e={}){if("string"!==typeof t)return t;if('"'===t[0]&&'"'===t[t.length-1]&&-1===t.indexOf("\\"))return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!s.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(r.test(t)||i.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,o)}return JSON.parse(t)}catch(a){if(e.strict)throw a;return t}}n(2489),n(8237);function u(t,e){if(null==t)return;let n=t;for(let r=0;r<e.length;r++){if(null==n||null==n[e[r]])return;n=n[e[r]]}return n}function l(t,e,n){if(0===n.length)return e;const r=n[0];return n.length>1&&(e=l("object"===typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,r)?t[r]:Number.isInteger(Number(n[1]))?[]:{},e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function h(t,e){if(null==t||0===e.length)return t;if(1===e.length){if(null==t)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const e in t)n[e]=t[e];return delete n[e[0]],n}if(null==t[e[0]]){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const e in t)n[e]=t[e];return n}return l(t,h(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function d(t,e){return e.map((t=>t.split("."))).map((e=>[e,u(t,e)])).filter((t=>void 0!==t[1])).reduce(((t,e)=>l(t,e[1],e[0])),{})}function f(t,e){return e.map((t=>t.split("."))).reduce(((t,e)=>h(t,e)),t)}function p(t,{storage:e,serializer:n,key:r,debug:i,pick:s,omit:o,beforeHydrate:a,afterHydrate:c},u,l=!0){try{l&&a?.(u);const i=e.getItem(r);if(i){const e=n.deserialize(i),r=s?d(e,s):e,a=o?f(r,o):r;t.$patch(a)}l&&c?.(u)}catch(h){i&&console.error("[pinia-plugin-persistedstate]",h)}}function g(t,{storage:e,serializer:n,key:r,debug:i,pick:s,omit:o}){try{const i=s?d(t,s):t,a=o?f(i,o):i,c=n.serialize(a);e.setItem(r,c)}catch(a){i&&console.error("[pinia-plugin-persistedstate]",a)}}function m(t,e,n){const{pinia:r,store:i,options:{persist:s=n}}=t;if(!s)return;if(!(i.$id in r.state.value)){const t=r._s.get(i.$id.replace("__hot:",""));return void(t&&Promise.resolve().then((()=>t.$persist())))}const o=Array.isArray(s)?s:!0===s?[{}]:[s],a=o.map(e);i.$hydrate=({runHooks:e=!0}={})=>{a.forEach((n=>{p(i,n,t,e)}))},i.$persist=()=>{a.forEach((t=>{g(i.$state,t)}))},a.forEach((e=>{p(i,e,t),i.$subscribe(((t,n)=>g(n,e)),{detached:!0})}))}function y(t={}){return function(e){m(e,(n=>({key:(t.key?t.key:t=>t)(n.key??e.store.$id),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:t=>JSON.stringify(t),deserialize:t=>c(t)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate,afterHydrate:n.afterHydrate,pick:n.pick,omit:n.omit})),t.auto??!1)}}var v=y()},5847:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},5876:function(t,e,n){"use strict";var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",(function(t){return t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},5917:function(t,e,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5966:function(t,e,n){"use strict";var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},5987:function(t,e,n){const r=n(1558);function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),i=this.degree-n.length;if(i>0){const t=new Uint8Array(this.degree);return t.set(n,i),t}return n},t.exports=i},6080:function(t,e,n){"use strict";var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6099:function(t,e,n){n(4114);const r=n(9547).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),i=145===n?26:2*Math.ceil((n-13)/(2*e-2)),s=[n-7];for(let r=1;r<e-1;r++)s[r]=s[r-1]-i;return s.push(6),s.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||n.push([r[e],r[t]]);return n}},6119:function(t,e,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6189:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6193:function(t,e,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6198:function(t,e,n){"use strict";var r=n(8014);t.exports=function(t){return r(t.length)}},6269:function(t){"use strict";t.exports={}},6274:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},6279:function(t,e,n){"use strict";var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6319:function(t,e,n){"use strict";var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},6395:function(t){"use strict";t.exports=!1},6400:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.5.0";
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
(0,r.KO)(i,s,"app")},6518:function(t,e,n){"use strict";var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},6699:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6706:function(t,e,n){"use strict";var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return st},CE:function(){return Ye},Df:function(){return B},EW:function(){return Vn},FK:function(){return je},Fv:function(){return ln},Gt:function(){return Kt},Gy:function(){return M},K9:function(){return fe},Lk:function(){return rn},MZ:function(){return j},OW:function(){return V},PS:function(){return Ht},Q3:function(){return hn},QP:function(){return U},RG:function(){return vt},WQ:function(){return qt},Wv:function(){return Je},bF:function(){return sn},bo:function(){return R},dY:function(){return m},eW:function(){return un},g2:function(){return ft},h:function(){return jn},k6:function(){return A},nI:function(){return bn},pI:function(){return yt},pM:function(){return $},qL:function(){return o},sV:function(){return rt},uX:function(){return He},wB:function(){return Ie},xo:function(){return ot}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(I))}function _(t){(0,i.cy)(t)?h.push(...t):d&&-1===t.id?d.splice(f+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function b(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,d)return void d.push(...t);for(d=t,f=0;f<d.length;f++){const t=d[f];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}d=null,f=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function I(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&I(t)}}let S=null,C=null;function k(t){const e=S;return S=t,C=t&&t.type.__scopeId||null,e}function A(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Qe(-1);const i=k(e);let s;try{s=t(...n)}finally{k(i),r._d&&Qe(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function R(t,e){if(null===S)return t;const n=Ln(S),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,u=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function N(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}const O=Symbol("_vte"),x=t=>t.__isTeleport;const P=Symbol("_leaveCb"),D=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rt((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const L=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function F(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function V(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:_,onAppearCancelled:b}=e,E=String(t.key),T=F(n,t),I=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];I(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[P]&&e[P](!0);const i=T[E];i&&tn(t,i)&&i.el[P]&&i.el[P](),I(r,[e])},enter(t){let e=h,r=d,i=f;if(!n.isMounted){if(!a)return;e=w||h,r=_||d,i=b||f}let s=!1;const o=t[D]=e=>{s||(s=!0,I(e?i:r,[t]),C.delayedLeave&&C.delayedLeave(),t[D]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[D]&&e[D](!0),n.isUnmounting)return r();I(p,[e]);let s=!1;const o=e[P]=n=>{s||(s=!0,r(),I(n?y:m,[e]),e[P]=void 0,T[i]===t&&delete T[i])};T[i]=t,g?S(g,[e,o]):o()},clone(t){const i=V(t,e,n,r,s);return s&&s(i),i}};return C}function j(t,e){6&t.shapeFlag&&t.component?(t.transition=e,j(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function B(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===je?(128&o.patchFlag&&i++,r=r.concat(B(o.children,e,a))):(e||o.type!==$e)&&r.push(null!=a?cn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function z(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function K(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>K(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(q(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&K(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Ln(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:t=>(0,i.$3)(g,t);if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],m(h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,m(h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,de(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const q=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const H=t=>t.type.__isKeepAlive;RegExp,RegExp;function W(t,e){return(0,i.cy)(t)?t.some((t=>W(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function G(t,e){X(t,"a",e)}function Q(t,e){X(t,"da",e)}function X(t,e,n=_n){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(tt(e,r,n),n){let t=n.parent;while(t&&t.parent)H(t.parent.vnode)&&Y(r,e,n,t),t=t.parent}}function Y(t,e,n,r){const s=tt(e,t,r,!0);at((()=>{(0,i.TF)(r[e],s)}),n)}function J(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Z(t){return 128&t.shapeFlag?t.ssContent:t}function tt(t,e,n=_n,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=In(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const et=t=>(e,n=_n)=>{Rn&&"sp"!==t||tt(t,((...t)=>e(...t)),n)},nt=et("bm"),rt=et("m"),it=et("bu"),st=et("u"),ot=et("bum"),at=et("um"),ct=et("sp"),ut=et("rtg"),lt=et("rtc");function ht(t,e=_n){tt("ec",t,e)}const dt="components";function ft(t,e){return gt(dt,t,!0,e)||t}const pt=Symbol.for("v-ndc");function gt(t,e,n=!0,r=!1){const s=S||_n;if(s){const n=s.type;if(t===dt){const t=Un(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=mt(s[t]||n[t],e)||mt(s.appContext[t],e);return!o&&r?n:o}}function mt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function yt(t,e,n,s){let o;const a=n&&n[s],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1,s=!1;n&&(i=!(0,r.fE)(t),s=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(i?s?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}function vt(t,e,n={},r,s){if(S.ce||S.parent&&q(S.parent)&&S.parent.ce)return"default"!==e&&(n.name=e),He(),Je(je,null,[sn("slot",n,r&&r())],64);let o=t[e];o&&o._c&&(o._d=!1),He();const a=o&&wt(o(n)),c=n.key||a&&a.key,u=Je(je,{key:(c&&!(0,i.Bm)(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===t._?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),o&&o._c&&(o._d=!0),u}function wt(t){return t.some((t=>!Ze(t)||t.type!==$e&&!(t.type===je&&!wt(t.children))))?t:null}const _t=t=>t?Cn(t)?Ln(t):_t(t.parent):null,bt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_t(t.parent),$root:t=>_t(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nt(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>Ce.bind(t)}),Et=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Tt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Et(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];St&&(c[e]=0)}}const d=bt[e];let f,p;return d?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Et(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||Et(e,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(bt,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function It(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let St=!0;function Ct(t){const e=Nt(t),n=t.proxy,s=t.ctx;St=!1,e.beforeCreate&&At(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:R,components:N,directives:O,filters:x}=e,P=null;if(h&&kt(h,s,P),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(St=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Vn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Rt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Kt(e,t[e])}))}function D(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&At(d,t,"c"),D(nt,f),D(rt,p),D(it,g),D(st,m),D(G,y),D(Q,v),D(ht,C),D(lt,I),D(ut,S),D(ot,_),D(at,E),D(ct,k),(0,i.cy)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),N&&(t.components=N),O&&(t.directives=O),k&&z(t)}function kt(t,e,n=i.tE){(0,i.cy)(t)&&(t=Mt(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?qt(n.from||s,n.default,!0):qt(n.from||s):qt(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function At(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Rt(t,e,n,r){let s=r.includes(".")?ke(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&Ie(s,n)}else if((0,i.Tn)(t))Ie(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>Rt(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&Ie(s,r,t)}else 0}function Nt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>Ot(u,t,a,!0))),Ot(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Ot(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ot(t,s,n,!0),i&&i.forEach((e=>Ot(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const xt={data:Pt,props:Ft,emits:Ft,methods:Ut,computed:Ut,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Ut,directives:Ut,watch:Vt,provide:Pt,inject:Dt};function Pt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Dt(t,e){return Ut(Mt(t),Mt(e))}function Mt(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Ft(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),It(t),It(null!=e?e:{})):e}function Vt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Lt(t[r],e[r]);return n}function jt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bt=0;function $t(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=jt(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Bt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Bn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!u){0;const c=l._ceVNode||sn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Ln(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=zt;zt=l;try{return t()}finally{zt=e}}};return l}}let zt=null;function Kt(t,e){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[t]=e}else 0}function qt(t,e,n=!1){const r=_n||S;if(r||zt){const s=zt?zt._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function Ht(){return!!(_n||S||zt)}const Wt={},Gt=()=>Object.create(Wt),Qt=t=>Object.getPrototypeOf(t)===Wt;function Xt(t,e,n,i=!1){const s={},o=Gt();t.propsDefaults=Object.create(null),Jt(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Yt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Jt(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Zt(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Oe(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=Zt(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Jt(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Oe(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Zt(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function Zt(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=In(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const te=new WeakMap;function ee(t,e,n=!1){const r=n?te:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=ee(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);ne(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(ne(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function ne(t){return"$"!==t[0]&&!(0,i.SU)(t)}const re=t=>"_"===t[0]||"$stable"===t,ie=t=>(0,i.cy)(t)?t.map(dn):[dn(t)],se=(t,e,n)=>{if(e._n)return e;const r=A(((...t)=>ie(e(...t))),n);return r._c=!1,r},oe=(t,e,n)=>{const r=t._ctx;for(const s in t){if(re(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=se(s,n,r);else if(null!=n){0;const t=ie(n);e[s]=()=>t}}},ae=(t,e)=>{const n=ie(e);t.slots.default=()=>n},ce=(t,e,n)=>{for(const r in e)!n&&re(r)||(t[r]=e[r])},ue=(t,e,n)=>{const r=t.slots=Gt();if(32&t.vnode.shapeFlag){const t=e._;t?(ce(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):oe(e,r)}else e&&ae(t,e)},le=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:ce(s,e,n):(o=!e.$stable,oe(e,s)),a=e}else e&&(ae(t,e),a={default:1});if(o)for(const i in s)re(i)||null!=a[i]||delete s[i]};function he(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const de=Ve;function fe(t){return pe(t)}function pe(t,e){he();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!tn(t,e)&&(r=Z(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Be:w(t,e,n,r);break;case $e:_(t,e,n,r);break;case ze:null==t&&T(e,n,r,o);break;case je:M(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,nt)}null!=l&&i&&K(l,t&&t.ref,s,e||t,!e)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},_=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?k(e,n,r,i,s,o,a,c):x(t,e,i,s,o,a,c)},k=(t,e,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(f=t.el=c(t.type,u,g&&g.is,g),8&m?d(f,t.children):16&m&&R(t.children,f,null,r,o,ge(t,u),l,h),v&&N(t,null,r,"created"),A(f,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(f,t,null,g[t],u,r);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&mn(p,r,t)}v&&N(t,null,r,"beforeMount");const w=ye(o,y);w&&y.beforeEnter(f),s(f,e,n),((p=g&&g.onVnodeMounted)||w||v)&&de((()=>{p&&mn(p,r,t),w&&y.enter(f),v&&N(t,null,r,"mounted")}),o)},A=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||Fe(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?fn(t[u]):dn(t[u]);y(null,c,e,n,r,i,s,o,a)}},x=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&me(n,!1),(m=g.onVnodeBeforeUpdate)&&mn(m,n,e,t),f&&N(e,t,n,"beforeUpdate"),n&&me(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(u,""),h?P(t.dynamicChildren,h,u,n,r,ge(e,s),o):c||B(t,e,u,null,n,r,ge(e,s),o,!1),l>0){if(16&l)D(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||D(u,p,g,n,s);((m=g.onVnodeUpdated)||f)&&de((()=>{m&&mn(m,n,e,t),f&&N(e,t,n,"updated")}),r)},P=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===je||!tn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},M=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(d,n,r),R(e.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(P(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&ve(t,e,!0)):B(t,e,n,d,i,o,a,c,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):U(e,n,r,i,s,o,c):F(t,e,c)},U=(t,e,n,r,i,s,o)=>{const a=t.component=wn(t,r,i);if(H(t)&&(a.ctx.renderer=nt),Nn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!t.el){const t=a.subTree=sn($e);_(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(Me(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=_e(t);if(n)return e&&(e.el=l.el,j(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,d=e;0,me(t,!1),e?(e.el=l.el,j(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&mn(h,s,e,l),me(t,!0);const p=xe(t);0;const g=t.subTree;t.subTree=p,y(g,p,f(g.el),Z(g),t,o,a),e.el=p.el,null===d&&Ue(t,p.el),r&&de(r,o),(h=e.props&&e.props.onVnodeUpdated)&&de((()=>mn(h,s,e,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d,root:f,type:p}=t,g=q(e);if(me(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&mn(r,d,e),me(t,!0),c&&it){const e=()=>{t.subTree=xe(t),it(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&f.ce._injectChildStyle(p);const r=t.subTree=xe(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&de(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;de((()=>mn(r,d,t)),o)}(256&e.shapeFlag||d&&q(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&de(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),d=t.job=l.runIfDirty.bind(l);d.i=t,d.id=t.uid,l.scheduler=()=>v(d),me(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Yt(t,e.props,i,n),le(t,e.children,n),(0,r.C4)(),b(t),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?fn(e[f]):dn(e[f]);y(t[f],r,n,null,s,o,a,c,u)}l>h?J(t,s,o,!0,!1,d):R(e,n,r,s,o,a,c,u,d)},z=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?fn(e[l]):dn(e[l]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?fn(e[f]):dn(e[f]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)y(null,e[l]=u?fn(e[l]):dn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?fn(e[l]):dn(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const _=f-g+1;let b=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(w>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&tn(r,e[v])){i=v;break}void 0===i?G(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const I=b?we(T):i.Oj;for(v=I.length-1,l=_-1;l>=0;l--){const t=g+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==I[v]?W(i,n,d,2):v--)}}},W=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void W(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,nt);if(c===je){s(a,e,n);for(let t=0;t<l.length;t++)W(l[t],e,n,r);return void s(t.anchor,e,n)}if(c===ze)return void I(t,e,n);const d=2!==r&&1&h&&u;if(d)if(0===r)u.beforeEnter(a),s(a,e,n),de((()=>u.enter(a)),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{r(a,(()=>{l(),c&&c()}))};i?i(a,l,h):h()}else s(a,e,n)},G=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:d,dirs:f,cacheIndex:p}=t;if(-2===d&&(s=!1),null!=c&&((0,r.C4)(),K(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const g=1&h&&f,m=!q(t);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&mn(y,e,t),6&h)Y(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);g&&N(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,nt,i):l&&!l.hasOnce&&(o!==je||d>0&&64&d)?J(l,e,n,!1,!0):(o===je&&384&d||!s&&16&h)&&J(u,e,n),i&&Q(t)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&de((()=>{y&&mn(y,e,t),g&&N(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===je)return void X(n,r);if(e===ze)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l,parent:h,slots:{__:d}}=t;be(u),be(l),r&&(0,i.DY)(r),h&&(0,i.cy)(d)&&d.forEach((t=>{h.renderCache[t]=void 0})),s.stop(),o&&(o.flags|=8,G(a,t,e,n)),c&&de(c,e),de((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Z=t=>{if(6&t.shapeFlag)return Z(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[O];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,b(),E(),tt=!1)},nt={p:y,um:G,m:W,r:Q,mt:U,mc:R,pc:B,pbc:P,n:Z,o:t};let rt,it;return e&&([rt,it]=e(nt)),{render:et,hydrate:rt,createApp:$t(et,rt)}}function ge({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function me({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ye(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ve(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=fn(s[i]),e.el=t.el),n||-2===e.patchFlag||ve(t,e)),e.type===Be&&(e.el=t.el),e.type!==$e||e.el||(e.el=t.el)}}function we(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function _e(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_e(e)}function be(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ee=Symbol.for("v-scx"),Te=()=>{{const t=qt(Ee);return t}};function Ie(t,e,n){return Se(t,e,n)}function Se(t,e,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==c;let d;if(Rn)if("sync"===c){const t=Te();d=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const f=_n;l.call=(t,e,n)=>o(t,f,e,n);let p=!1;"post"===c?l.scheduler=t=>{de(t,f&&f.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,f&&(t.id=f.uid,t.i=f))};const g=(0,r.wB)(t,e,l);return Rn&&(d?d.push(g):h&&g()),g}function Ce(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?ke(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=In(this),c=Se(s,o.bind(r),n);return a(),c}function ke(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Ae=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Re(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&Ae(r,e.slice(7));let u;c&&(c.trim&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function Ne(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Ne(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Oe(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function xe(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=k(t);let w,_;try{if(4&n.shapeFlag){const t=s||r,e=t;w=dn(h.call(e,t,d,f,g,p,m)),_=u}else{const t=e;0,w=dn(t.length>1?t(f,{attrs:u,slots:c,emit:l}):t(f,null)),_=e.props?u:Pe(u)}}catch(E){Ke.length=0,a(E,t,1),w=sn($e)}let b=w;if(_&&!1!==y){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.CP)&&(_=De(_,o)),b=cn(b,_,!1,!0))}return n.dirs&&(b=cn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&j(b,n.transition),w=b,k(v),w}const Pe=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},De=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Me(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Le(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Le(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Oe(u,n))return!0}}return!1}function Le(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Oe(n,s))return!0}return!1}function Ue({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Fe=t=>t.__isSuspense;function Ve(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):_(t)}const je=Symbol.for("v-fgt"),Be=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),ze=Symbol.for("v-stc"),Ke=[];let qe=null;function He(t=!1){Ke.push(qe=t?null:[])}function We(){Ke.pop(),qe=Ke[Ke.length-1]||null}let Ge=1;function Qe(t,e=!1){Ge+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function Xe(t){return t.dynamicChildren=Ge>0?qe||i.Oj:null,We(),Ge>0&&qe&&qe.push(t),t}function Ye(t,e,n,r,i,s){return Xe(rn(t,e,n,r,i,s,!0))}function Je(t,e,n,r,i){return Xe(sn(t,e,n,r,i,!0))}function Ze(t){return!!t&&!0===t.__v_isVNode}function tn(t,e){return t.type===e.type&&t.key===e.key}const en=({key:t})=>null!=t?t:null,nn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function rn(t,e=null,n=null,r=0,s=null,o=(t===je?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&en(e),ref:e&&nn(e),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(pn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Ge>0&&!a&&qe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&qe.push(u),u}const sn=on;function on(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==pt||(t=$e),Ze(t)){const r=cn(t,e,!0);return n&&pn(r,n),Ge>0&&!a&&qe&&(6&r.shapeFlag?qe[qe.indexOf(t)]=r:qe.push(r)),r.patchFlag=-2,r}if(Fn(t)&&(t=t.__vccOpts),e){e=an(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:Fe(t)?128:x(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return rn(t,e,n,s,o,c,a,!0)}function an(t){return t?(0,r.ju)(t)||Qt(t)?(0,i.X$)({},t):t:null}function cn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?gn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&en(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(nn(e)):[o,nn(e)]:nn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&j(h,u.clone(h)),h}function un(t=" ",e=0){return sn(Be,null,t,e)}function ln(t,e){const n=sn(ze,null,t);return n.staticCount=e,n}function hn(t="",e=!1){return e?(He(),Je($e,null,t)):sn($e,null,t)}function dn(t){return null==t||"boolean"===typeof t?sn($e):(0,i.cy)(t)?sn(je,null,t.slice()):Ze(t)?fn(t):sn(Be,null,String(t))}function fn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:cn(t)}function pn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),pn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Qt(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,i.Tn)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function gn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function mn(t,e,n,r=null){o(t,e,7,[n,r])}const yn=jt();let vn=0;function wn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||yn,a={uid:vn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ee(s,o),emitsOptions:Ne(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Re.bind(null,a),t.ce&&t.ce(a),a}let _n=null;const bn=()=>_n||S;let En,Tn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};En=e("__VUE_INSTANCE_SETTERS__",(t=>_n=t)),Tn=e("__VUE_SSR_SETTERS__",(t=>Rn=t))}const In=t=>{const e=_n;return En(t),t.scope.on(),()=>{t.scope.off(),En(e)}},Sn=()=>{_n&&_n.scope.off(),En(null)};function Cn(t){return 4&t.vnode.shapeFlag}let kn,An,Rn=!1;function Nn(t,e=!1,n=!1){e&&Tn(e);const{props:r,children:i}=t.vnode,s=Cn(t);Xt(t,r,s,e),ue(t,i,n||e);const o=s?On(t,e):void 0;return e&&Tn(!1),o}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?Mn(t):null,c=In(t),u=s(o,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||q(t)||z(t),l){if(u.then(Sn,Sn),e)return u.then((n=>{xn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else xn(t,u,e)}else Pn(t,e)}function xn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Pn(t,n)}function Pn(t,e,n){const s=t.type;if(!t.render){if(!e&&kn&&!s.render){const e=s.template||Nt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=kn(e,c)}}t.render=s.render||i.tE,An&&An(t)}{const e=In(t);(0,r.C4)();try{Ct(t)}finally{(0,r.bl)(),e()}}}const Dn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Mn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Dn),slots:t.slots,emit:t.emit,expose:e}}function Ln(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in bt?bt[n](t):void 0},has(t,e){return e in t||e in bt}})):t.proxy}function Un(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Fn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Vn=(t,e)=>{const n=(0,r.EW)(t,e,Rn);return n};function jn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Ze(e)?sn(t,null,[e]):sn(t,e):sn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ze(n)&&(n=[n]),sn(t,e,n))}const Bn="3.5.14"},6801:function(t,e,n){"use strict";var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},6840:function(t,e,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6955:function(t,e,n){"use strict";var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},6969:function(t,e,n){"use strict";var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7027:function(t,e,n){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}n(4114),n(8111),n(1701),e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,i=t.scale||4;return{width:n,scale:n?4:i,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const i=n.modules.size,s=n.modules.data,o=e.getScale(i,r),a=Math.floor((i+2*r.margin)*o),c=r.margin*o,u=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),h=r.color.light;if(e>=c&&n>=c&&e<a-c&&n<a-c){const t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);h=u[s[t*i+r]?1:0]}t[l++]=h.r,t[l++]=h.g,t[l++]=h.b,t[l]=h.a}}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},7080:function(t,e,n){"use strict";var r=n(4402).has;t.exports=function(t){return r(t),t}},7195:function(t,e,n){const r=n(5847),i=n(3693);function s(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return i.testNumeric(t)?e.NUMERIC:i.testAlphanumeric(t)?e.ALPHANUMERIC:i.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return s(t)}catch(r){return n}}},7347:function(t,e,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},7476:function(t,e,n){"use strict";var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7549:function(t,e,n){"use strict";n(4114);var r={single_source_shortest_paths:function(t,e,n){var i={},s={};s[e]=0;var o,a,c,u,l,h,d,f,p,g=r.PriorityQueue.make();g.push(e,0);while(!g.empty())for(c in o=g.pop(),a=o.value,u=o.cost,l=t[a]||{},l)l.hasOwnProperty(c)&&(h=l[c],d=u+h,f=s[c],p="undefined"===typeof s[c],(p||f>d)&&(s[c]=d,g.push(c,d),i[c]=a));if("undefined"!==typeof n&&"undefined"===typeof s[n]){var m=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var i=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,i={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},7588:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;s(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},7629:function(t,e,n){"use strict";var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.42.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7642:function(t,e,n){"use strict";var r=n(6518),i=n(3440),s=n(4916),o=!s("difference",(function(t){return 0===t.size}));r({target:"Set",proto:!0,real:!0,forced:o},{difference:i})},7657:function(t,e,n){"use strict";var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o((function(){var t={};return r[p].call(t)!==t}));m?r={}:f&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7676:function(t,e,n){const r=n(7027);function i(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function s(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let o=n,a=e;"undefined"!==typeof o||e&&e.getContext||(o=e,e=void 0),e||(a=s()),o=r.getOptions(o);const c=r.getImageWidth(t.modules.size,o),u=a.getContext("2d"),l=u.createImageData(c,c);return r.qrToImageData(l.data,t,o),i(u,a,c),u.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,r){let i=r;"undefined"!==typeof i||n&&n.getContext||(i=n,n=void 0),i||(i={});const s=e.render(t,n,i),o=i.type||"image/png",a=i.rendererOpts||{};return s.toDataURL(o,a.quality)}},7740:function(t,e,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7750:function(t,e,n){"use strict";var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},7942:function(t,e,n){n(4114),n(8111),n(1701),n(8237);const r=n(7195),i=n(866),s=n(4772),o=n(139),a=n(1910),c=n(3693),u=n(9547),l=n(7549);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,n){const r=[];let i;while(null!==(i=t.exec(n)))r.push({data:i[0],index:i.index,mode:e,length:i[0].length});return r}function f(t){const e=d(c.NUMERIC,r.NUMERIC,t),n=d(c.ALPHANUMERIC,r.ALPHANUMERIC,t);let i,s;u.isKanjiModeEnabled()?(i=d(c.BYTE,r.BYTE,t),s=d(c.KANJI,r.KANJI,t)):(i=d(c.BYTE_KANJI,r.BYTE,t),s=[]);const o=e.concat(n,i,s);return o.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function p(t,e){switch(e){case r.NUMERIC:return i.getBitsLength(t);case r.ALPHANUMERIC:return s.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return o.getBitsLength(t)}}function g(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];switch(i.mode){case r.NUMERIC:e.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.ALPHANUMERIC:e.push([i,{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.KANJI:e.push([i,{data:i.data,mode:r.BYTE,length:h(i.data)}]);break;case r.BYTE:e.push([{data:i.data,mode:r.BYTE,length:h(i.data)}])}}return e}function y(t,e){const n={},i={start:{}};let s=["start"];for(let o=0;o<t.length;o++){const a=t[o],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+o+t;c.push(l),n[l]={node:u,lastCount:0},i[l]={};for(let t=0;t<s.length;t++){const o=s[t];n[o]&&n[o].node.mode===u.mode?(i[o][l]=p(n[o].lastCount+u.length,u.mode)-p(n[o].lastCount,u.mode),n[o].lastCount+=u.length):(n[o]&&(n[o].lastCount=u.length),i[o][l]=p(u.length,u.mode)+4+r.getCharCountIndicator(u.mode,e))}}s=c}for(let r=0;r<s.length;r++)i[s[r]].end=0;return{map:i,table:n}}function v(t,e){let n;const c=r.getBestModeForData(t);if(n=r.from(e,c),n!==r.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(c));switch(n!==r.KANJI||u.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new i(t);case r.ALPHANUMERIC:return new s(t);case r.KANJI:return new a(t);case r.BYTE:return new o(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(v(e,null)):e.data&&t.push(v(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=f(t,u.isKanjiModeEnabled()),i=m(r),s=y(i,n),o=l.find_path(s.map,"start","end"),a=[];for(let e=1;e<o.length-1;e++)a.push(s.table[o[e]].node);return e.fromArray(g(a))},e.rawSplit=function(t){return e.fromArray(f(t,u.isKanjiModeEnabled()))}},8001:function(t,e,n){"use strict";n.d(e,{O0:function(){return c},SJ:function(){return l},dW:function(){return a},de:function(){return p}});n(4114),n(8111),n(7588),n(1701);var r=n(144),i=n(6768),s=n(4232);const o=(0,r.KR)(!1),a=(t,e)=>{const n=document.createElement("script"),r=null!=e&&e.length>0?`&libraries=${e.join(",")}`:"";n.id="kakao-map-api-script",n.src=`//dapi.kakao.com/v2/maps/sdk.js?appkey=${t}&autoload=false${r}`,document.body.appendChild(n),n.onload=()=>{kakao.maps.load((()=>{o.value=!0}))}},c=(0,i.pM)({__name:"KakaoMap",props:{width:{default:"40rem"},height:{default:"30rem"},markerList:{},infoWindowList:{},markerCluster:{},lat:{},lng:{},level:{default:3},mapTypeId:{},draggable:{type:Boolean,default:!0},scrollwheel:{type:Boolean,default:!0},disableDoubleClick:{type:Boolean,default:!1},disableDoubleClickZoom:{type:Boolean,default:!1},projectionId:{default:"kakao.maps.ProjectionId.WCONG"},tileAnimation:{type:Boolean,default:!0},keyboardShortcuts:{type:[Boolean,Object]}},emits:["onLoadKakaoMap","onLoadKakaoMapMarkerCluster"],setup(t,{emit:e}){const n=t,a=e,c=(0,r.KR)(null),u=(0,r.KR)();(0,i.Gt)("mapRef",u);const h=()=>{const t={center:new kakao.maps.LatLng(n.lat,n.lng),...n};null!==c.value&&(u.value=new window.kakao.maps.Map(c.value,t),a("onLoadKakaoMap",u.value))},f=(0,r.KR)(),p=t=>{var e,n;if(void 0===t.markers&&void 0===t.customOverlayProps)throw new Error("클러스터 할 입력값이 없습니다.");if(null!==u.value){if(void 0!==t.markers){const n=(0,r.KR)([]);null==(e=t.markers)||e.forEach((t=>{var e;const r=new kakao.maps.Marker({position:new kakao.maps.LatLng(t.lat,t.lng),image:t.image??void 0,title:t.title??void 0,draggable:"boolean"==typeof t.draggable&&t.draggable,clickable:"boolean"==typeof t.clickable&&t.clickable,zIndex:"number"==typeof t.zIndex?t.zIndex:0,opacity:t.opacity??1,altitude:t.altitude??0,range:t.range??void 0});null==(e=n.value)||e.push(r)})),f.value=new kakao.maps.MarkerClusterer({map:(0,r.ux)(u.value),...t,markers:n.value})}if(void 0!==t.customOverlayProps){const e=(0,r.KR)([]);null==(n=t.customOverlayProps)||n.forEach((t=>{var n;const r=new kakao.maps.CustomOverlay({position:new kakao.maps.LatLng(t.lat,t.lng),content:t.content,xAnchor:t.xAnchor,yAnchor:t.yAnchor,zIndex:t.zIndex,clickable:t.clickable});null==(n=e.value)||n.push(r)})),f.value=new kakao.maps.MarkerClusterer({map:(0,r.ux)(u.value),...t,markers:e.value})}a("onLoadKakaoMapMarkerCluster",f.value)}};(0,i.sV)((()=>{o.value&&(h(),void 0!==n.markerCluster&&p(n.markerCluster))})),(0,i.wB)((()=>o.value),(t=>{t&&(h(),void 0!==n.markerCluster&&p(n.markerCluster))}));const g=(0,i.EW)((()=>({width:isFinite(+n.width)?n.width+"px":n.width,height:isFinite(+n.height)?n.height+"px":n.height})));return(0,i.wB)([()=>n.lat,()=>n.lng],(([t,e])=>{var n;null==(n=u.value)||n.panTo(new kakao.maps.LatLng(t,e))})),(0,i.wB)((()=>n.draggable),(t=>{var e,n;void 0===t||t?null==(e=u.value)||e.setDraggable(!0):null==(n=u.value)||n.setDraggable(!1)})),(0,i.wB)((()=>n.level),(t=>{var e,n;void 0===t?null==(e=u.value)||e.setLevel(3):null==(n=u.value)||n.setLevel(t)})),(0,i.wB)((()=>n.mapTypeId),(t=>{var e,n;void 0===t?null==(e=u.value)||e.setMapTypeId(3):null==(n=u.value)||n.setMapTypeId(t)})),(0,i.wB)((()=>n.scrollwheel),(t=>{var e,n;void 0===t?null==(e=u.value)||e.setZoomable(!0):null==(n=u.value)||n.setZoomable(t)})),(0,i.wB)((()=>n.projectionId),(t=>{var e,n;void 0===t?null==(e=u.value)||e.setProjectionId(kakao.maps.ProjectionId.WCONG):null==(n=u.value)||n.setProjectionId(t)})),(0,i.wB)((()=>n.keyboardShortcuts),(t=>{var e,n;void 0===t?null==(e=u.value)||e.setKeyboardShortcuts(!1):"boolean"==typeof t&&(null==(n=u.value)||n.setKeyboardShortcuts(t))})),(t,e)=>((0,i.uX)(),(0,i.CE)("div",{ref_key:"kakaoMapRef",ref:c,style:(0,s.Tr)(g.value)},[n.markerList&&void 0===n.markerCluster?((0,i.uX)(!0),(0,i.CE)(i.FK,{key:0},(0,i.pI)(n.markerList,((t,e)=>((0,i.uX)(),(0,i.Wv)((0,r.R1)(l),{key:void 0===t.key?e:t.key,lat:t.lat,lng:t.lng,"info-window":null==t?void 0:t.infoWindow,draggable:t.draggable,image:t.image,order:t.order,"order-bottom-margin":t.orderBottomMargin},null,8,["lat","lng","info-window","draggable","image","order","order-bottom-margin"])))),128)):(0,i.Q3)("",!0),n.infoWindowList&&void 0===n.markerCluster?((0,i.uX)(!0),(0,i.CE)(i.FK,{key:1},(0,i.pI)(n.infoWindowList,((t,e)=>((0,i.uX)(),(0,i.Wv)((0,r.R1)(d),{key:void 0===t.key?e:t.key,lat:t.lat,lng:t.lng,content:t.content,visible:t.visible},null,8,["lat","lng","content","visible"])))),128)):(0,i.Q3)("",!0),(0,i.RG)(t.$slots,"default")],4))}}),u={imageSrc:"https://t1.daumcdn.net/mapjsapi/images/2x/marker.png",imageWidth:29,imageHeight:42,imageOption:{}},l=(0,i.pM)({__name:"KakaoMapMarker",props:{lat:{},lng:{},infoWindow:{},visible:{type:Boolean},image:{},title:{},draggable:{type:Boolean},clickable:{type:Boolean},zIndex:{},opacity:{},altitude:{},range:{},order:{},orderBottomMargin:{}},emits:["onLoadKakaoMapMarker","onClickKakaoMapMarker","dragEndKakaoMapMarker","mouseOverKakaoMapMarker","mouseOutKakaoMapMarker","deleteKakaoMapMarker"],setup(t,{emit:e}){const n=e,s=t,a=(0,r.KR)(),c=(0,i.WQ)("mapRef"),l=t=>{if(null!=t){if(void 0===t.imageSrc)throw new Error("이미지 경로가 존재하지 않습니다.")}else t=u;const e=new Image;e.src=t.imageSrc;const n=new kakao.maps.MarkerImage(t.imageSrc,new kakao.maps.Size(t.imageWidth??e.width,t.imageHeight??e.height),t.imageOption);void 0!==a.value&&a.value.setImage(n)},h=t=>{if(void 0===s.lat||void 0===s.lng)throw new Error("marker의 위치가 없습니다.");const e=new kakao.maps.LatLng(s.lat,s.lng);a.value=new kakao.maps.Marker({position:e,title:s.title,draggable:s.draggable,clickable:s.clickable,zIndex:s.zIndex,opacity:s.opacity,altitude:s.altitude,range:s.range}),l(s.image),n("onLoadKakaoMapMarker",a.value),a.value.setMap(t),f(a.value),m(a.value),y(a.value),g(t,a.value)},f=t=>{kakao.maps.event.addListener(t,"click",(()=>{n("onClickKakaoMapMarker")}))},g=(t,e)=>{kakao.maps.event.addListener(e,"dragend",(function(t){n("dragEndKakaoMapMarker",e)}))},m=t=>{kakao.maps.event.addListener(t,"mouseover",(()=>{n("mouseOverKakaoMapMarker")}))},y=t=>{kakao.maps.event.addListener(t,"mouseout",(()=>{n("mouseOutKakaoMapMarker")}))},v=t=>`<div style="position:relative; bottom:${s.orderBottomMargin}">\n        ${t}\n      </div>`;return(0,i.xo)((()=>{var t;n("deleteKakaoMapMarker",a),null==(t=a.value)||t.setMap(null)})),(0,i.wB)([()=>o.value,()=>c,()=>null==c?void 0:c.value],(([t,e,n])=>{t&&void 0!==e&&void 0!==n&&h(n)}),{immediate:!0}),(0,i.wB)([()=>s.lat,()=>s.lng],(([t,e])=>{var n;o.value&&(null==(n=a.value)||n.setPosition(new kakao.maps.LatLng(t,e)))})),(0,i.wB)([()=>s.image],(()=>{l(s.image)})),(0,i.wB)((()=>s.title),(t=>{var e;void 0!==t&&(null==(e=a.value)||e.setTitle(t))})),(0,i.wB)((()=>s.draggable),(t=>{var e;null==(e=a.value)||e.setDraggable(void 0!==t&&t)})),(0,i.wB)((()=>s.clickable),(t=>{var e;null==(e=a.value)||e.setDraggable(void 0!==t&&t)})),(0,i.wB)((()=>s.zIndex),(t=>{var e;void 0!==t&&isFinite(t)&&(null==(e=a.value)||e.setZIndex(Number(t)))})),(0,i.wB)((()=>s.opacity),(t=>{var e,n;void 0!==t&&isFinite(t)?null==(e=a.value)||e.setOpacity(Number(t)):null==(n=a.value)||n.setOpacity(1)})),(t,e)=>{var n,o,c;return(0,i.uX)(),(0,i.CE)("div",null,[t.$slots.infoWindow?((0,i.uX)(),(0,i.Wv)((0,r.R1)(d),{key:0,marker:a.value,lat:s.lat,lng:s.lng,visible:null==(n=null==s?void 0:s.infoWindow)?void 0:n.visible},{default:(0,i.k6)((()=>[(0,i.RG)(t.$slots,"infoWindow")])),_:3},8,["marker","lat","lng","visible"])):s.infoWindow?((0,i.uX)(),(0,i.Wv)((0,r.R1)(d),{key:1,marker:a.value,lat:s.lat,lng:s.lng,content:null==(o=null==s?void 0:s.infoWindow)?void 0:o.content,visible:null==(c=null==s?void 0:s.infoWindow)?void 0:c.visible},null,8,["marker","lat","lng","content","visible"])):(0,i.Q3)("",!0),s.order?((0,i.uX)(),(0,i.Wv)((0,r.R1)(p),{key:2,lat:s.lat,lng:s.lng,"y-anchor":0,content:v(s.order)},null,8,["lat","lng","content"])):(0,i.Q3)("",!0)])}}}),h={key:0},d=(0,i.pM)({__name:"KakaoMapInfoWindow",props:{lat:{},lng:{},marker:{},content:{},disableAutoPan:{type:Boolean},removable:{type:Boolean,default:!1},zIndex:{},altitude:{},range:{default:500},visible:{type:Boolean,default:!0}},emits:["onLoadKakaoMapInfoWindow"],setup(t,{emit:e}){const n=e,s=t,a=(0,r.KR)(),c=(0,r.KR)(),u=(0,i.WQ)("mapRef"),l=t=>{var e,r;if(void 0===s.lat||void 0===s.lng)throw new Error("infoWindow의 위치가 없습니다.");const i=new kakao.maps.LatLng(s.lat,s.lng);a.value=new kakao.maps.InfoWindow({position:i,content:c.value??s.content??"",removable:s.removable,disableAutoPan:s.disableAutoPan,zIndex:s.zIndex,altitude:s.altitude,range:s.range}),s.visible&&(n("onLoadKakaoMapInfoWindow",a.value),void 0!==s.marker?null==(e=null==a?void 0:a.value)||e.open(t,s.marker):null==(r=null==a?void 0:a.value)||r.open(t))};return(0,i.xo)((()=>{null!==(null==a?void 0:a.value)&&void 0!==a.value&&a.value.close()})),(0,i.wB)([()=>o.value,()=>null==u?void 0:u.value,()=>o,()=>u],(([t,e])=>{s.visible&&t&&void 0!==e&&null!==e&&l(e)}),{immediate:!0}),(0,i.wB)((()=>s.marker),(t=>{var e,n,r;!s.visible||void 0===(null==u?void 0:u.value)||(null!=a.value&&(null==(e=a.value)||e.close()),void 0!==t?null==(n=null==a?void 0:a.value)||n.open(null==u?void 0:u.value,t):null==(r=null==a?void 0:a.value)||r.open(null==u?void 0:u.value))}),{immediate:!0}),(0,i.wB)([()=>null==c?void 0:c.value,()=>c],(([t])=>{var e;void 0!==t&&void 0!==a.value&&null!==a.value&&(null==(e=a.value)||e.setContent(t))}),{deep:!0}),(0,i.wB)([()=>s.lat,()=>s.lng],(([t,e])=>{var n;null==(n=a.value)||n.setPosition(new kakao.maps.LatLng(t,e))})),(0,i.wB)((()=>s.content),(t=>{var e;null==(e=a.value)||e.setContent(t??"")})),(0,i.wB)((()=>s.zIndex),(t=>{var e;null==(e=a.value)||e.setZIndex(t??0)})),(0,i.wB)((()=>s.altitude),(t=>{var e;null==(e=a.value)||e.setAltitude(t??0)})),(0,i.wB)((()=>s.range),(t=>{var e;null==(e=a.value)||e.setRange(t??500)})),(0,i.wB)((()=>s.visible),(t=>{t?null!=o&&o.value&&void 0!==(null==u?void 0:u.value)&&null!==(null==u?void 0:u.value)&&l(u.value):null!==(null==a?void 0:a.value)&&void 0!==a.value&&a.value.close()})),(t,e)=>s.content&&s.content.length>0||t.$slots.default?((0,i.uX)(),(0,i.CE)("div",h,[t.$slots.default?((0,i.uX)(),(0,i.CE)("div",{key:0,ref_key:"contentSlot",ref:c},[(0,i.RG)(t.$slots,"default")],512)):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0)}}),f={key:0},p=(0,i.pM)({__name:"KakaoMapCustomOverlay",props:{lat:{},lng:{},content:{},xAnchor:{default:.5},yAnchor:{default:.5},zIndex:{},clickable:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},emits:["onLoadKakaoMapCustomOverlay"],setup(t,{emit:e}){const n=e,s=t,a=(0,r.KR)(),c=(0,r.KR)(),u=(0,i.WQ)("mapRef"),l=t=>{if(void 0===s.lat||void 0===s.lng)throw new Error("KakaoMapCustomOverlay의 위치가 없습니다.");const e=new kakao.maps.LatLng(s.lat,s.lng);a.value=new kakao.maps.CustomOverlay({position:e,content:c.value??s.content??"",xAnchor:s.xAnchor,yAnchor:s.yAnchor,zIndex:s.zIndex,clickable:s.clickable}),s.visible&&(a.value.setMap(t),n("onLoadKakaoMapCustomOverlay",a.value))};return(0,i.xo)((()=>{var t;null!==a.value&&(null==(t=a.value)||t.setMap(null))})),(0,i.wB)([()=>o.value,()=>null==u?void 0:u.value,()=>o,()=>u],(([t,e])=>{s.visible&&t&&void 0!==e&&null!==e&&l(e)}),{immediate:!0}),(0,i.wB)([()=>null==c?void 0:c.value,()=>c],(([t])=>{var e;void 0!==t&&void 0!==a.value&&null!==a.value&&(null==(e=a.value)||e.setContent(t))}),{deep:!0}),(0,i.wB)([()=>s.lat,()=>s.lng],(([t,e])=>{var n;null==(n=a.value)||n.setPosition(new kakao.maps.LatLng(t,e))})),(0,i.wB)((()=>s.content),(t=>{var e;null==(e=a.value)||e.setContent(t??"")})),(0,i.wB)((()=>s.zIndex),(t=>{var e;null==(e=a.value)||e.setZIndex(t??0)})),(0,i.wB)((()=>s.visible),(t=>{var e;t?null!=o&&o.value&&void 0!==(null==u?void 0:u.value)&&null!==(null==u?void 0:u.value)&&l(u.value):null!==(null==a?void 0:a.value)&&void 0!==a.value&&(null==(e=a.value)||e.setMap(null))})),(t,e)=>s.content&&s.content.length>0||t.$slots.default?((0,i.uX)(),(0,i.CE)("div",f,[t.$slots.default?((0,i.uX)(),(0,i.CE)("div",{key:0,ref_key:"contentSlot",ref:c},[(0,i.RG)(t.$slots,"default")],512)):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0)}}),g=(0,i.pM)({__name:"KakaoMapPolyline",props:{latLngList:{},endArrow:{type:Boolean},strokeWeight:{default:3},strokeColor:{default:"#F10000"},strokeOpacity:{default:.6},strokeStyle:{default:"solid"},zIndex:{}},emits:["onLoadKakaoMapPolyline"],setup(t,{emit:e}){const n=e,s=t,a=(0,i.WQ)("mapRef"),c=(0,r.KR)(),u=(0,i.EW)((()=>s.latLngList.map((t=>new kakao.maps.LatLng(t.lat,t.lng))))),l=t=>{c.value=new kakao.maps.Polyline({path:u.value,endArrow:s.endArrow,strokeWeight:s.strokeWeight,strokeColor:s.strokeColor,strokeOpacity:s.strokeOpacity,strokeStyle:s.strokeStyle,zIndex:s.zIndex}),c.value.setMap(t),n("onLoadKakaoMapPolyline",c.value)};return(0,i.wB)([()=>o.value,()=>null==a?void 0:a.value,()=>o,()=>a],(([t,e])=>{t&&void 0!==e&&null!==e&&l(e)}),{immediate:!0}),(0,i.wB)((()=>s.latLngList),(()=>{var t;null==(t=c.value)||t.setPath(u.value)}),{deep:!0}),(0,i.wB)((()=>s.endArrow),(()=>{var t;null==(t=c.value)||t.setMap(null),void 0!==a&&l(a.value)})),(0,i.wB)([()=>s.strokeWeight,()=>s.strokeColor,()=>s.strokeOpacity,()=>s.strokeStyle],(([t,e,n,r])=>{var i;null==(i=c.value)||i.setOptions({strokeWeight:t,strokeColor:e,strokeOpacity:n,strokeStyle:r})})),(0,i.wB)((()=>s.zIndex),(t=>{var e;void 0!==t&&(null==(e=c.value)||e.setZIndex(t))})),(0,i.xo)((()=>{var t;null==(t=c.value)||t.setMap(null)})),(t,e)=>((0,i.uX)(),(0,i.CE)("div",null,[(0,i.RG)(t.$slots,"default")]))}}),m={key:0},y={key:1};Boolean,Boolean},8004:function(t,e,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",(function(t){return 2===t.size&&t.has(1)&&t.has(2)}))||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},8014:function(t,e,n){"use strict";var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8111:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=f("toStringTag"),_=TypeError,b=i[v],E=m||!a(b)||b.prototype!==p||!h((function(){b({})})),T=function(){if(s(this,p),c(this)===p)throw new _("Abstract class Iterator not directly constructable")},I=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new _("You can't redefine this property");d(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};d(p,w)||I(w,v),!E&&d(p,y)&&p[y]!==Object||I(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},8227:function(t,e,n){"use strict";var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},8237:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),d=TypeError,f=h((function(){[].keys().reduce((function(){}),void 0)})),p=!f&&u("reduce",d);r({target:"Iterator",proto:!0,real:!0,forced:f||p},{reduce:function(t){o(this);try{s(t)}catch(h){c(this,"throw",h)}var e=arguments.length<2,n=e?void 0:arguments[1];if(p)return l(p,this,e?[t]:[t,n]);var r=a(this),u=0;if(i(r,(function(r){e?(e=!1,n=r):n=t(n,r,u),u++}),{IS_RECORD:!0}),e)throw new d("Reduce of empty iterator with no initial value");return n}})},8420:function(t,e,n){const r=n(6274),i=n(1954),s=n(7676),o=n(3553);function a(t,e,n,s,o){const a=[].slice.call(arguments,1),c=a.length,u="function"===typeof a[c-1];if(!u&&!r())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=s=void 0):2!==c||e.getContext||(s=n,n=e,e=void 0),new Promise((function(r,o){try{const o=i.create(n,s);r(t(o,e,s))}catch(a){o(a)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(o=n,n=e,e=s=void 0):3===c&&(e.getContext&&"undefined"===typeof o?(o=s,s=void 0):(o=s,s=n,n=e,e=void 0));try{const r=i.create(n,s);o(null,t(r,e,s))}catch(l){o(l)}}e.create=i.create,e.toCanvas=a.bind(null,s.render),e.toDataURL=a.bind(null,s.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return o.render(t,n)}))},8469:function(t,e,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},8480:function(t,e,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8527:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8551:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},8622:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8686:function(t,e,n){"use strict";var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},8750:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8826:function(t,e,n){"use strict";n.d(e,{Uz:function(){return y}});n(8111),n(1701);var r=n(262),i=n(2455),s=n(798);
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
const o="functions";
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
 */i.g;
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
class a{constructor(t,e,n,i){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,(0,r.xZ)(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then((t=>this.auth=t),(()=>{})),this.messaging||n.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||i?.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t?.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const e=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(t){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken(t);return{authToken:e,messagingToken:n,appCheckToken:r}}}
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
 */const c="us-central1";class u{constructor(t,e,n,r,i=c,s=(...t)=>fetch(...t)){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new a(t,e,n,r),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(i);this.customDomain=t.origin+("/"===t.pathname?"":t.pathname),this.region=c}catch(o){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){const n=this.emulatorOrigin;return`${n}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function l(t,e,n){const r=(0,i.zJ)(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&((0,i.gE)(t.emulatorOrigin+"/backends"),(0,i.P1)("Functions",!0))}const h="@firebase/functions",d="0.13.1",f="auth-internal",p="app-check-internal",g="messaging-internal";function m(t){const e=(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider(f),i=t.getProvider(g),s=t.getProvider(p);return new u(n,r,i,s,e)};(0,r.om)(new s.uA(o,e,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(h,d,t),(0,r.KO)(h,d,"esm2020")}
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
 */function y(t=(0,r.Sx)(),e=c){const n=(0,r.j6)((0,i.Ku)(t),o),s=n.getImmediate({identifier:e}),a=(0,i.yU)("functions");return a&&v(s,...a),s}function v(t,e,n){l((0,i.Ku)(t),e,n)}m()},8981:function(t,e,n){"use strict";var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},9188:function(t,e,n){function r(){this.buffer=[],this.length=0}n(4114),r.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},9286:function(t,e,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},9297:function(t,e,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},9306:function(t,e,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},9433:function(t,e,n){"use strict";var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9462:function(t,e,n){"use strict";var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=c.set,y=function(t){var e=c.getterFor(t?g:p);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=u(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(o){return d(i,"throw",o)}return i&&d(i,"normal"),h(void 0,!0)}})},v=y(!0),w=y(!1);s(w,f,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?g:p,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,m(this,i)};return r.prototype=e?v:w,r}},9504:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9519:function(t,e,n){"use strict";var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9547:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},9565:function(t,e,n){"use strict";var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9617:function(t,e,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9927:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e}}]);
//# sourceMappingURL=chunk-vendors.9ece9240.js.map