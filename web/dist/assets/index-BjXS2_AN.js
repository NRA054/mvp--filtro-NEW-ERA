var c0=Object.defineProperty;var f0=(n,e,t)=>e in n?c0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Jd=(n,e,t)=>f0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function d0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sg={exports:{}},Kl={},og={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),h0=Symbol.for("react.portal"),p0=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),y0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),eh=Symbol.iterator;function E0(n){return n===null||typeof n!="object"?null:(n=eh&&n[eh]||n["@@iterator"],typeof n=="function"?n:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,ug={};function qs(n,e,t){this.props=n,this.context=e,this.refs=ug,this.updater=t||ag}qs.prototype.isReactComponent={};qs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};qs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function cg(){}cg.prototype=qs.prototype;function Bf(n,e,t){this.props=n,this.context=e,this.refs=ug,this.updater=t||ag}var zf=Bf.prototype=new cg;zf.constructor=Bf;lg(zf,qs.prototype);zf.isPureReactComponent=!0;var th=Array.isArray,fg=Object.prototype.hasOwnProperty,Hf={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fg.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:na,type:n,key:s,ref:o,props:r,_owner:Hf.current}}function T0(n,e){return{$$typeof:na,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Vf(n){return typeof n=="object"&&n!==null&&n.$$typeof===na}function A0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var nh=/\/+/g;function Su(n,e){return typeof n=="object"&&n!==null&&n.key!=null?A0(""+n.key):e.toString(36)}function rl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case na:case h0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Su(o,0):i,th(r)?(t="",n!=null&&(t=n.replace(nh,"$&/")+"/"),rl(r,e,t,"",function(u){return u})):r!=null&&(Vf(r)&&(r=T0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(nh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",th(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Su(s,a);o+=rl(s,e,t,l,r)}else if(l=E0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Su(s,a++),o+=rl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(n,e,t){if(n==null)return n;var i=[],r=0;return rl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function w0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var nn={current:null},sl={transition:null},R0={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:sl,ReactCurrentOwner:Hf};function pg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:da,forEach:function(n,e,t){da(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return da(n,function(){e++}),e},toArray:function(n){return da(n,function(e){return e})||[]},only:function(n){if(!Vf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=qs;Ge.Fragment=p0;Ge.Profiler=g0;Ge.PureComponent=Bf;Ge.StrictMode=m0;Ge.Suspense=x0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Ge.act=pg;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=lg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)fg.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:na,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:v0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:_0,_context:n},n.Consumer=n};Ge.createElement=hg;Ge.createFactory=function(n){var e=hg.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:y0,render:n}};Ge.isValidElement=Vf;Ge.lazy=function(n){return{$$typeof:M0,_payload:{_status:-1,_result:n},_init:w0}};Ge.memo=function(n,e){return{$$typeof:S0,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=sl.transition;sl.transition={};try{n()}finally{sl.transition=e}};Ge.unstable_act=pg;Ge.useCallback=function(n,e){return nn.current.useCallback(n,e)};Ge.useContext=function(n){return nn.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return nn.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return nn.current.useEffect(n,e)};Ge.useId=function(){return nn.current.useId()};Ge.useImperativeHandle=function(n,e,t){return nn.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return nn.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return nn.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return nn.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return nn.current.useReducer(n,e,t)};Ge.useRef=function(n){return nn.current.useRef(n)};Ge.useState=function(n){return nn.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return nn.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return nn.current.useTransition()};Ge.version="18.3.1";og.exports=Ge;var Xt=og.exports;const b0=d0(Xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=Xt,L0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,N0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function mg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:L0,type:n,key:s,ref:o,props:r,_owner:N0.current}}Kl.Fragment=P0;Kl.jsx=mg;Kl.jsxs=mg;sg.exports=Kl;var Ze=sg.exports,gg={exports:{}},xn={},_g={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,G){var B=O.length;O.push(G);e:for(;0<B;){var N=B-1>>>1,F=O[N];if(0<r(F,G))O[N]=G,O[B]=F,B=N;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var G=O[0],B=O.pop();if(B!==G){O[0]=B;e:for(var N=0,F=O.length,ue=F>>>1;N<ue;){var ce=2*(N+1)-1,de=O[ce],ye=ce+1,Ne=O[ye];if(0>r(de,B))ye<F&&0>r(Ne,de)?(O[N]=Ne,O[ye]=B,N=ye):(O[N]=de,O[ce]=B,N=ce);else if(ye<F&&0>r(Ne,B))O[N]=Ne,O[ye]=B,N=ye;else break e}}return G}function r(O,G){var B=O.sortIndex-G.sortIndex;return B!==0?B:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=O)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function x(O){if(y=!1,g(O),!_)if(t(l)!==null)_=!0,$(S);else{var G=t(u);G!==null&&q(x,G.startTime-O)}}function S(O,G){_=!1,y&&(y=!1,h(L),L=-1),p=!0;var B=d;try{for(g(G),f=t(l);f!==null&&(!(f.expirationTime>G)||O&&!V());){var N=f.callback;if(typeof N=="function"){f.callback=null,d=f.priorityLevel;var F=N(f.expirationTime<=G);G=n.unstable_now(),typeof F=="function"?f.callback=F:f===t(l)&&i(l),g(G)}else i(l);f=t(l)}if(f!==null)var ue=!0;else{var ce=t(u);ce!==null&&q(x,ce.startTime-G),ue=!1}return ue}finally{f=null,d=B,p=!1}}var R=!1,T=null,L=-1,E=5,w=-1;function V(){return!(n.unstable_now()-w<E)}function Y(){if(T!==null){var O=n.unstable_now();w=O;var G=!0;try{G=T(!0,O)}finally{G?Q():(R=!1,T=null)}}else R=!1}var Q;if(typeof v=="function")Q=function(){v(Y)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=Y,Q=function(){H.postMessage(null)}}else Q=function(){m(Y,0)};function $(O){T=O,R||(R=!0,Q())}function q(O,G){L=m(function(){O(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,$(S))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var B=d;d=G;try{return O()}finally{d=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=d;d=O;try{return G()}finally{d=B}},n.unstable_scheduleCallback=function(O,G,B){var N=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?N+B:N):B=N,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,O={id:c++,callback:G,priorityLevel:O,startTime:B,expirationTime:F,sortIndex:-1},B>N?(O.sortIndex=B,e(u,O),t(l)===null&&O===t(u)&&(y?(h(L),L=-1):y=!0,q(x,B-N))):(O.sortIndex=F,e(l,O),_||p||(_=!0,$(S))),O},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(O){var G=d;return function(){var B=d;d=G;try{return O.apply(this,arguments)}finally{d=B}}}})(vg);_g.exports=vg;var U0=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=Xt,yn=U0;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,Oo={};function zr(n,e){Ps(n,e),Ps(n+"Capture",e)}function Ps(n,e){for(Oo[n]=e,n=0;n<e.length;n++)yg.add(e[n])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},rh={};function k0(n){return Pc.call(rh,n)?!0:Pc.call(ih,n)?!1:F0.test(n)?rh[n]=!0:(ih[n]=!0,!1)}function B0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z0(n,e,t,i){if(e===null||typeof e>"u"||B0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new rn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new rn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new rn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new rn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new rn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new rn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){kt[n]=new rn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){kt[n]=new rn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){kt[n]=new rn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Wf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Gf,Wf);kt[e]=new rn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Gf,Wf);kt[e]=new rn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Gf,Wf);kt[e]=new rn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new rn(n,1,!1,n.toLowerCase(),null,!1,!1)});kt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){kt[n]=new rn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xf(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,t,r,i)&&(t=null),i||r===null?k0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Li=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),qf=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),Mg=Symbol.for("react.offscreen"),sh=Symbol.iterator;function no(n){return n===null||typeof n!="object"?null:(n=sh&&n[sh]||n["@@iterator"],typeof n=="function"?n:null)}var pt=Object.assign,Mu;function yo(n){if(Mu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||""}return`
`+Mu+n}var Eu=!1;function Tu(n,e){if(!n||Eu)return"";Eu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Eu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?yo(n):""}function H0(n){switch(n.tag){case 5:return yo(n.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return n=Tu(n.type,!1),n;case 11:return n=Tu(n.type.render,!1),n;case 1:return n=Tu(n.type,!0),n;default:return""}}function Uc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case cs:return"Fragment";case us:return"Portal";case Dc:return"Profiler";case jf:return"StrictMode";case Nc:return"Suspense";case Ic:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Sg:return(n.displayName||"Context")+".Consumer";case xg:return(n._context.displayName||"Context")+".Provider";case Yf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qf:return e=n.displayName||null,e!==null?e:Uc(n.type)||"Memo";case ki:e=n._payload,n=n._init;try{return Uc(n(e))}catch{}}return null}function V0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Eg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(n){var e=Eg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function pa(n){n._valueTracker||(n._valueTracker=G0(n))}function Tg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Eg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function vl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Oc(n,e){var t=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function oh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(n,e){e=e.checked,e!=null&&Xf(n,"checked",e,!1)}function Fc(n,e){Ag(n,e);var t=rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?kc(n,e.type,t):e.hasOwnProperty("defaultValue")&&kc(n,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ah(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function kc(n,e,t){(e!=="number"||vl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var xo=Array.isArray;function Ms(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Bc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function lh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(xo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:rr(t)}}function wg(n,e){var t=rr(e.value),i=rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function uh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Rg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Rg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ma,bg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(n){W0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),To[e]=To[n]})});function Cg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||To.hasOwnProperty(n)&&To[n]?(""+e).trim():e+"px"}function Lg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Cg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var X0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(n,e){if(e){if(X0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Vc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function Kf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wc=null,Es=null,Ts=null;function ch(n){if(n=sa(n)){if(typeof Wc!="function")throw Error(te(280));var e=n.stateNode;e&&(e=eu(e),Wc(n.stateNode,n.type,e))}}function Pg(n){Es?Ts?Ts.push(n):Ts=[n]:Es=n}function Dg(){if(Es){var n=Es,e=Ts;if(Ts=Es=null,ch(n),e)for(n=0;n<e.length;n++)ch(e[n])}}function Ng(n,e){return n(e)}function Ig(){}var Au=!1;function Ug(n,e,t){if(Au)return n(e,t);Au=!0;try{return Ng(n,e,t)}finally{Au=!1,(Es!==null||Ts!==null)&&(Ig(),Dg())}}function ko(n,e){var t=n.stateNode;if(t===null)return null;var i=eu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Xc=!1;if(Ai)try{var io={};Object.defineProperty(io,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Xc=!1}function j0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ao=!1,yl=null,xl=!1,jc=null,Y0={onError:function(n){Ao=!0,yl=n}};function q0(n,e,t,i,r,s,o,a,l){Ao=!1,yl=null,j0.apply(Y0,arguments)}function K0(n,e,t,i,r,s,o,a,l){if(q0.apply(this,arguments),Ao){if(Ao){var u=yl;Ao=!1,yl=null}else throw Error(te(198));xl||(xl=!0,jc=u)}}function Hr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Og(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function fh(n){if(Hr(n)!==n)throw Error(te(188))}function $0(n){var e=n.alternate;if(!e){if(e=Hr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return fh(r),n;if(s===i)return fh(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function Fg(n){return n=$0(n),n!==null?kg(n):null}function kg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=kg(n);if(e!==null)return e;n=n.sibling}return null}var Bg=yn.unstable_scheduleCallback,dh=yn.unstable_cancelCallback,Z0=yn.unstable_shouldYield,Q0=yn.unstable_requestPaint,vt=yn.unstable_now,J0=yn.unstable_getCurrentPriorityLevel,$f=yn.unstable_ImmediatePriority,zg=yn.unstable_UserBlockingPriority,Sl=yn.unstable_NormalPriority,ey=yn.unstable_LowPriority,Hg=yn.unstable_IdlePriority,$l=null,ti=null;function ty(n){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot($l,n,void 0,(n.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:ry,ny=Math.log,iy=Math.LN2;function ry(n){return n>>>=0,n===0?32:31-(ny(n)/iy|0)|0}var ga=64,_a=4194304;function So(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ml(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=So(a):(s&=o,s!==0&&(i=So(s)))}else o=t&~r,o!==0?i=So(o):s!==0&&(i=So(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Gn(e),r=1<<t,i|=n[t],e&=~r;return i}function sy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=sy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Yc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vg(){var n=ga;return ga<<=1,!(ga&4194240)&&(ga=64),n}function wu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ia(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Gn(e),n[e]=t}function ay(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Gn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Zf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Gn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Je=0;function Gg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wg,Qf,Xg,jg,Yg,qc=!1,va=[],Yi=null,qi=null,Ki=null,Bo=new Map,zo=new Map,Vi=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(n,e){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function ro(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Qf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function uy(n,e,t,i,r){switch(e){case"focusin":return Yi=ro(Yi,n,e,t,i,r),!0;case"dragenter":return qi=ro(qi,n,e,t,i,r),!0;case"mouseover":return Ki=ro(Ki,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Bo.set(s,ro(Bo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,ro(zo.get(s)||null,n,e,t,i,r)),!0}return!1}function qg(n){var e=Mr(n.target);if(e!==null){var t=Hr(e);if(t!==null){if(e=t.tag,e===13){if(e=Og(t),e!==null){n.blockedOn=e,Yg(n.priority,function(){Xg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ol(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Kc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Gc=i,t.target.dispatchEvent(i),Gc=null}else return e=sa(t),e!==null&&Qf(e),n.blockedOn=t,!1;e.shift()}return!0}function ph(n,e,t){ol(n)&&t.delete(e)}function cy(){qc=!1,Yi!==null&&ol(Yi)&&(Yi=null),qi!==null&&ol(qi)&&(qi=null),Ki!==null&&ol(Ki)&&(Ki=null),Bo.forEach(ph),zo.forEach(ph)}function so(n,e){n.blockedOn===e&&(n.blockedOn=null,qc||(qc=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,cy)))}function Ho(n){function e(r){return so(r,n)}if(0<va.length){so(va[0],n);for(var t=1;t<va.length;t++){var i=va[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Yi!==null&&so(Yi,n),qi!==null&&so(qi,n),Ki!==null&&so(Ki,n),Bo.forEach(e),zo.forEach(e),t=0;t<Vi.length;t++)i=Vi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Vi.length&&(t=Vi[0],t.blockedOn===null);)qg(t),t.blockedOn===null&&Vi.shift()}var As=Li.ReactCurrentBatchConfig,El=!0;function fy(n,e,t,i){var r=Je,s=As.transition;As.transition=null;try{Je=1,Jf(n,e,t,i)}finally{Je=r,As.transition=s}}function dy(n,e,t,i){var r=Je,s=As.transition;As.transition=null;try{Je=4,Jf(n,e,t,i)}finally{Je=r,As.transition=s}}function Jf(n,e,t,i){if(El){var r=Kc(n,e,t,i);if(r===null)Ou(n,e,i,Tl,t),hh(n,i);else if(uy(r,n,e,t,i))i.stopPropagation();else if(hh(n,i),e&4&&-1<ly.indexOf(n)){for(;r!==null;){var s=sa(r);if(s!==null&&Wg(s),s=Kc(n,e,t,i),s===null&&Ou(n,e,i,Tl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ou(n,e,i,null,t)}}var Tl=null;function Kc(n,e,t,i){if(Tl=null,n=Kf(i),n=Mr(n),n!==null)if(e=Hr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Og(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Tl=n,null}function Kg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case $f:return 1;case zg:return 4;case Sl:case ey:return 16;case Hg:return 536870912;default:return 16}default:return 16}}var Wi=null,ed=null,al=null;function $g(){if(al)return al;var n,e=ed,t=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return al=r.slice(n,1<i?1-i:void 0)}function ll(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function mh(){return!1}function Sn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:mh,this.isPropagationStopped=mh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=Sn(Ks),ra=pt({},Ks,{view:0,detail:0}),hy=Sn(ra),Ru,bu,oo,Zl=pt({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Ru=n.screenX-oo.screenX,bu=n.screenY-oo.screenY):bu=Ru=0,oo=n),Ru)},movementY:function(n){return"movementY"in n?n.movementY:bu}}),gh=Sn(Zl),py=pt({},Zl,{dataTransfer:0}),my=Sn(py),gy=pt({},ra,{relatedTarget:0}),Cu=Sn(gy),_y=pt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Sn(_y),yy=pt({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xy=Sn(yy),Sy=pt({},Ks,{data:0}),_h=Sn(Sy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ty[n])?!!e[n]:!1}function nd(){return Ay}var wy=pt({},ra,{key:function(n){if(n.key){var e=My[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ll(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ey[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(n){return n.type==="keypress"?ll(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ll(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ry=Sn(wy),by=pt({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Sn(by),Cy=pt({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),Ly=Sn(Cy),Py=pt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Sn(Py),Ny=pt({},Zl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Sn(Ny),Uy=[9,13,27,32],id=Ai&&"CompositionEvent"in window,wo=null;Ai&&"documentMode"in document&&(wo=document.documentMode);var Oy=Ai&&"TextEvent"in window&&!wo,Zg=Ai&&(!id||wo&&8<wo&&11>=wo),yh=" ",xh=!1;function Qg(n,e){switch(n){case"keyup":return Uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Fy(n,e){switch(n){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(xh=!0,yh);case"textInput":return n=e.data,n===yh&&xh?null:n;default:return null}}function ky(n,e){if(fs)return n==="compositionend"||!id&&Qg(n,e)?(n=$g(),al=ed=Wi=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!By[n.type]:e==="textarea"}function e_(n,e,t,i){Pg(i),e=Al(e,"onChange"),0<e.length&&(t=new td("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ro=null,Vo=null;function zy(n){f_(n,0)}function Ql(n){var e=ps(n);if(Tg(e))return n}function Hy(n,e){if(n==="change")return e}var t_=!1;if(Ai){var Lu;if(Ai){var Pu="oninput"in document;if(!Pu){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),Pu=typeof Mh.oninput=="function"}Lu=Pu}else Lu=!1;t_=Lu&&(!document.documentMode||9<document.documentMode)}function Eh(){Ro&&(Ro.detachEvent("onpropertychange",n_),Vo=Ro=null)}function n_(n){if(n.propertyName==="value"&&Ql(Vo)){var e=[];e_(e,Vo,n,Kf(n)),Ug(zy,e)}}function Vy(n,e,t){n==="focusin"?(Eh(),Ro=e,Vo=t,Ro.attachEvent("onpropertychange",n_)):n==="focusout"&&Eh()}function Gy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ql(Vo)}function Wy(n,e){if(n==="click")return Ql(e)}function Xy(n,e){if(n==="input"||n==="change")return Ql(e)}function jy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var jn=typeof Object.is=="function"?Object.is:jy;function Go(n,e){if(jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Pc.call(e,r)||!jn(n[r],e[r]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ah(n,e){var t=Th(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Th(t)}}function i_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?i_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var n=window,e=vl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=vl(n.document)}return e}function rd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Yy(n){var e=r_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&i_(t.ownerDocument.documentElement,t)){if(i!==null&&rd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ah(t,s);var o=Ah(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qy=Ai&&"documentMode"in document&&11>=document.documentMode,ds=null,$c=null,bo=null,Zc=!1;function wh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zc||ds==null||ds!==vl(i)||(i=ds,"selectionStart"in i&&rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Go(bo,i)||(bo=i,i=Al($c,"onSelect"),0<i.length&&(e=new td("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ds)))}function xa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var hs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Du={},s_={};Ai&&(s_=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Jl(n){if(Du[n])return Du[n];if(!hs[n])return n;var e=hs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in s_)return Du[n]=e[t];return n}var o_=Jl("animationend"),a_=Jl("animationiteration"),l_=Jl("animationstart"),u_=Jl("transitionend"),c_=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,e){c_.set(n,e),zr(e,[n])}for(var Nu=0;Nu<Rh.length;Nu++){var Iu=Rh[Nu],Ky=Iu.toLowerCase(),$y=Iu[0].toUpperCase()+Iu.slice(1);or(Ky,"on"+$y)}or(o_,"onAnimationEnd");or(a_,"onAnimationIteration");or(l_,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(u_,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function bh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,K0(i,e,void 0,n),n.currentTarget=null}function f_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;bh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;bh(r,a,u),s=l}}}if(xl)throw n=jc,xl=!1,jc=null,n}function st(n,e){var t=e[nf];t===void 0&&(t=e[nf]=new Set);var i=n+"__bubble";t.has(i)||(d_(e,n,2,!1),t.add(i))}function Uu(n,e,t){var i=0;e&&(i|=4),d_(t,n,i,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[Sa]){n[Sa]=!0,yg.forEach(function(t){t!=="selectionchange"&&(Zy.has(t)||Uu(t,!1,n),Uu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,Uu("selectionchange",!1,e))}}function d_(n,e,t,i){switch(Kg(e)){case 1:var r=fy;break;case 4:r=dy;break;default:r=Jf}t=r.bind(null,e,t,n),r=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ou(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ug(function(){var u=s,c=Kf(t),f=[];e:{var d=c_.get(n);if(d!==void 0){var p=td,_=n;switch(n){case"keypress":if(ll(t)===0)break e;case"keydown":case"keyup":p=Ry;break;case"focusin":_="focus",p=Cu;break;case"focusout":_="blur",p=Cu;break;case"beforeblur":case"afterblur":p=Cu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ly;break;case o_:case a_:case l_:p=vy;break;case u_:p=Dy;break;case"scroll":p=hy;break;case"wheel":p=Iy;break;case"copy":case"cut":case"paste":p=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vh}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=ko(v,h),x!=null&&y.push(Xo(v,x,g)))),m)break;v=v.return}0<y.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Gc&&(_=t.relatedTarget||t.fromElement)&&(Mr(_)||_[wi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Mr(_):null,_!==null&&(m=Hr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=gh,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=vh,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:ps(p),g=_==null?d:ps(_),d=new y(x,v+"leave",p,t,c),d.target=m,d.relatedTarget=g,x=null,Mr(c)===u&&(y=new y(h,v+"enter",_,t,c),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=Gr(g))v++;for(g=0,x=h;x;x=Gr(x))g++;for(;0<v-g;)y=Gr(y),v--;for(;0<g-v;)h=Gr(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Gr(y),h=Gr(h)}y=null}else y=null;p!==null&&Ch(f,d,p,y,!1),_!==null&&m!==null&&Ch(f,m,_,y,!0)}}e:{if(d=u?ps(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=Hy;else if(Sh(d))if(t_)S=Xy;else{S=Gy;var R=Vy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Wy);if(S&&(S=S(n,u))){e_(f,S,t,c);break e}R&&R(n,d,u),n==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&kc(d,"number",d.value)}switch(R=u?ps(u):window,n){case"focusin":(Sh(R)||R.contentEditable==="true")&&(ds=R,$c=u,bo=null);break;case"focusout":bo=$c=ds=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,wh(f,t,c);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":wh(f,t,c)}var T;if(id)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else fs?Qg(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Zg&&t.locale!=="ko"&&(fs||L!=="onCompositionStart"?L==="onCompositionEnd"&&fs&&(T=$g()):(Wi=c,ed="value"in Wi?Wi.value:Wi.textContent,fs=!0)),R=Al(u,L),0<R.length&&(L=new _h(L,n,null,t,c),f.push({event:L,listeners:R}),T?L.data=T:(T=Jg(t),T!==null&&(L.data=T)))),(T=Oy?Fy(n,t):ky(n,t))&&(u=Al(u,"onBeforeInput"),0<u.length&&(c=new _h("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=T))}f_(f,e)})}function Xo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Al(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(n,t),s!=null&&i.unshift(Xo(n,s,r)),s=ko(n,e),s!=null&&i.push(Xo(n,s,r))),n=n.return}return i}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ch(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ko(t,s),l!=null&&o.unshift(Xo(t,l,a))):r||(l=ko(t,s),l!=null&&o.push(Xo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Qy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Lh(n){return(typeof n=="string"?n:""+n).replace(Qy,`
`).replace(Jy,"")}function Ma(n,e,t){if(e=Lh(e),Lh(n)!==e&&t)throw Error(te(425))}function wl(){}var Qc=null,Jc=null;function ef(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tf=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(n){return Ph.resolve(null).then(n).catch(nx)}:tf;function nx(n){setTimeout(function(){throw n})}function Fu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ho(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ho(e)}function $i(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Dh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Qn="__reactFiber$"+$s,jo="__reactProps$"+$s,wi="__reactContainer$"+$s,nf="__reactEvents$"+$s,ix="__reactListeners$"+$s,rx="__reactHandles$"+$s;function Mr(n){var e=n[Qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[wi]||t[Qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Dh(n);n!==null;){if(t=n[Qn])return t;n=Dh(n)}return e}n=t,t=n.parentNode}return null}function sa(n){return n=n[Qn]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function eu(n){return n[jo]||null}var rf=[],ms=-1;function ar(n){return{current:n}}function at(n){0>ms||(n.current=rf[ms],rf[ms]=null,ms--)}function it(n,e){ms++,rf[ms]=n.current,n.current=e}var sr={},Yt=ar(sr),ln=ar(!1),Pr=sr;function Ds(n,e){var t=n.type.contextTypes;if(!t)return sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function Rl(){at(ln),at(Yt)}function Nh(n,e,t){if(Yt.current!==sr)throw Error(te(168));it(Yt,e),it(ln,t)}function h_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,V0(n)||"Unknown",r));return pt({},t,i)}function bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Pr=Yt.current,it(Yt,n),it(ln,ln.current),!0}function Ih(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=h_(n,e,Pr),i.__reactInternalMemoizedMergedChildContext=n,at(ln),at(Yt),it(Yt,n)):at(ln),it(ln,t)}var _i=null,tu=!1,ku=!1;function p_(n){_i===null?_i=[n]:_i.push(n)}function sx(n){tu=!0,p_(n)}function lr(){if(!ku&&_i!==null){ku=!0;var n=0,e=Je;try{var t=_i;for(Je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}_i=null,tu=!1}catch(r){throw _i!==null&&(_i=_i.slice(n+1)),Bg($f,lr),r}finally{Je=e,ku=!1}}return null}var gs=[],_s=0,Cl=null,Ll=0,An=[],wn=0,Dr=null,vi=1,yi="";function _r(n,e){gs[_s++]=Ll,gs[_s++]=Cl,Cl=n,Ll=e}function m_(n,e,t){An[wn++]=vi,An[wn++]=yi,An[wn++]=Dr,Dr=n;var i=vi;n=yi;var r=32-Gn(i)-1;i&=~(1<<r),t+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-Gn(e)+r|t<<r|i,yi=s+n}else vi=1<<s|t<<r|i,yi=n}function sd(n){n.return!==null&&(_r(n,1),m_(n,1,0))}function od(n){for(;n===Cl;)Cl=gs[--_s],gs[_s]=null,Ll=gs[--_s],gs[_s]=null;for(;n===Dr;)Dr=An[--wn],An[wn]=null,yi=An[--wn],An[wn]=null,vi=An[--wn],An[wn]=null}var vn=null,_n=null,ct=!1,Hn=null;function g_(n,e){var t=Ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Uh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,_n=$i(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Dr!==null?{id:vi,overflow:yi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,_n=null,!0):!1;default:return!1}}function sf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function of(n){if(ct){var e=_n;if(e){var t=e;if(!Uh(n,e)){if(sf(n))throw Error(te(418));e=$i(t.nextSibling);var i=vn;e&&Uh(n,e)?g_(i,t):(n.flags=n.flags&-4097|2,ct=!1,vn=n)}}else{if(sf(n))throw Error(te(418));n.flags=n.flags&-4097|2,ct=!1,vn=n}}}function Oh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function Ea(n){if(n!==vn)return!1;if(!ct)return Oh(n),ct=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ef(n.type,n.memoizedProps)),e&&(e=_n)){if(sf(n))throw __(),Error(te(418));for(;e;)g_(n,e),e=$i(e.nextSibling)}if(Oh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){_n=$i(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}_n=null}}else _n=vn?$i(n.stateNode.nextSibling):null;return!0}function __(){for(var n=_n;n;)n=$i(n.nextSibling)}function Ns(){_n=vn=null,ct=!1}function ad(n){Hn===null?Hn=[n]:Hn.push(n)}var ox=Li.ReactCurrentBatchConfig;function ao(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ta(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Fh(n){var e=n._init;return e(n._payload)}function v_(n){function e(h,v){if(n){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=er(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,n?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,x){return v===null||v.tag!==6?(v=Xu(g,h.mode,x),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,x){var S=g.type;return S===cs?c(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ki&&Fh(S)===v.type)?(x=r(v,g.props),x.ref=ao(h,v,g),x.return=h,x):(x=ml(g.type,g.key,g.props,null,h.mode,x),x.ref=ao(h,v,g),x.return=h,x)}function u(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=ju(g,h.mode,x),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function c(h,v,g,x,S){return v===null||v.tag!==7?(v=br(g,h.mode,x,S),v.return=h,v):(v=r(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return g=ml(v.type,v.key,v.props,null,h.mode,g),g.ref=ao(h,null,v),g.return=h,g;case us:return v=ju(v,h.mode,g),v.return=h,v;case ki:var x=v._init;return f(h,x(v._payload),g)}if(xo(v)||no(v))return v=br(v,h.mode,g,null),v.return=h,v;Ta(h,v)}return null}function d(h,v,g,x){var S=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ha:return g.key===S?l(h,v,g,x):null;case us:return g.key===S?u(h,v,g,x):null;case ki:return S=g._init,d(h,v,S(g._payload),x)}if(xo(g)||no(g))return S!==null?null:c(h,v,g,x,null);Ta(h,g)}return null}function p(h,v,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(v,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:return h=h.get(x.key===null?g:x.key)||null,l(v,h,x,S);case us:return h=h.get(x.key===null?g:x.key)||null,u(v,h,x,S);case ki:var R=x._init;return p(h,v,g,R(x._payload),S)}if(xo(x)||no(x))return h=h.get(g)||null,c(v,h,x,S,null);Ta(v,x)}return null}function _(h,v,g,x){for(var S=null,R=null,T=v,L=v=0,E=null;T!==null&&L<g.length;L++){T.index>L?(E=T,T=null):E=T.sibling;var w=d(h,T,g[L],x);if(w===null){T===null&&(T=E);break}n&&T&&w.alternate===null&&e(h,T),v=s(w,v,L),R===null?S=w:R.sibling=w,R=w,T=E}if(L===g.length)return t(h,T),ct&&_r(h,L),S;if(T===null){for(;L<g.length;L++)T=f(h,g[L],x),T!==null&&(v=s(T,v,L),R===null?S=T:R.sibling=T,R=T);return ct&&_r(h,L),S}for(T=i(h,T);L<g.length;L++)E=p(T,h,L,g[L],x),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?L:E.key),v=s(E,v,L),R===null?S=E:R.sibling=E,R=E);return n&&T.forEach(function(V){return e(h,V)}),ct&&_r(h,L),S}function y(h,v,g,x){var S=no(g);if(typeof S!="function")throw Error(te(150));if(g=S.call(g),g==null)throw Error(te(151));for(var R=S=null,T=v,L=v=0,E=null,w=g.next();T!==null&&!w.done;L++,w=g.next()){T.index>L?(E=T,T=null):E=T.sibling;var V=d(h,T,w.value,x);if(V===null){T===null&&(T=E);break}n&&T&&V.alternate===null&&e(h,T),v=s(V,v,L),R===null?S=V:R.sibling=V,R=V,T=E}if(w.done)return t(h,T),ct&&_r(h,L),S;if(T===null){for(;!w.done;L++,w=g.next())w=f(h,w.value,x),w!==null&&(v=s(w,v,L),R===null?S=w:R.sibling=w,R=w);return ct&&_r(h,L),S}for(T=i(h,T);!w.done;L++,w=g.next())w=p(T,h,L,w.value,x),w!==null&&(n&&w.alternate!==null&&T.delete(w.key===null?L:w.key),v=s(w,v,L),R===null?S=w:R.sibling=w,R=w);return n&&T.forEach(function(Y){return e(h,Y)}),ct&&_r(h,L),S}function m(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===cs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ha:e:{for(var S=g.key,R=v;R!==null;){if(R.key===S){if(S=g.type,S===cs){if(R.tag===7){t(h,R.sibling),v=r(R,g.props.children),v.return=h,h=v;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ki&&Fh(S)===R.type){t(h,R.sibling),v=r(R,g.props),v.ref=ao(h,R,g),v.return=h,h=v;break e}t(h,R);break}else e(h,R);R=R.sibling}g.type===cs?(v=br(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=ml(g.type,g.key,g.props,null,h.mode,x),x.ref=ao(h,v,g),x.return=h,h=x)}return o(h);case us:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=ju(g,h.mode,x),v.return=h,h=v}return o(h);case ki:return R=g._init,m(h,v,R(g._payload),x)}if(xo(g))return _(h,v,g,x);if(no(g))return y(h,v,g,x);Ta(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,g),v.return=h,h=v):(t(h,v),v=Xu(g,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return m}var Is=v_(!0),y_=v_(!1),Pl=ar(null),Dl=null,vs=null,ld=null;function ud(){ld=vs=Dl=null}function cd(n){var e=Pl.current;at(Pl),n._currentValue=e}function af(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ws(n,e){Dl=n,ld=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(an=!0),n.firstContext=null)}function Nn(n){var e=n._currentValue;if(ld!==n)if(n={context:n,memoizedValue:e,next:null},vs===null){if(Dl===null)throw Error(te(308));vs=n,Dl.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return e}var Er=null;function fd(n){Er===null?Er=[n]:Er.push(n)}function x_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,fd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ri(n,i)}function Ri(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Bi=!1;function dd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Mi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(n,t)}return r=i.interleaved,r===null?(e.next=e,fd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(n,t)}function ul(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zf(n,t)}}function kh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Nl(n,e,t,i){var r=n.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(d=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=pt({},f,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,n.lanes=o,n.memoizedState=f}}function Bh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var oa={},ni=ar(oa),Yo=ar(oa),qo=ar(oa);function Tr(n){if(n===oa)throw Error(te(174));return n}function hd(n,e){switch(it(qo,e),it(Yo,n),it(ni,oa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=zc(e,n)}at(ni),it(ni,e)}function Us(){at(ni),at(Yo),at(qo)}function M_(n){Tr(qo.current);var e=Tr(ni.current),t=zc(e,n.type);e!==t&&(it(Yo,n),it(ni,t))}function pd(n){Yo.current===n&&(at(ni),at(Yo))}var dt=ar(0);function Il(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bu=[];function md(){for(var n=0;n<Bu.length;n++)Bu[n]._workInProgressVersionPrimary=null;Bu.length=0}var cl=Li.ReactCurrentDispatcher,zu=Li.ReactCurrentBatchConfig,Nr=0,ht=null,Tt=null,Pt=null,Ul=!1,Co=!1,Ko=0,ax=0;function Ht(){throw Error(te(321))}function gd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!jn(n[t],e[t]))return!1;return!0}function _d(n,e,t,i,r,s){if(Nr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=n===null||n.memoizedState===null?fx:dx,n=t(i,r),Co){s=0;do{if(Co=!1,Ko=0,25<=s)throw Error(te(301));s+=1,Pt=Tt=null,e.updateQueue=null,cl.current=hx,n=t(i,r)}while(Co)}if(cl.current=Ol,e=Tt!==null&&Tt.next!==null,Nr=0,Pt=Tt=ht=null,Ul=!1,e)throw Error(te(300));return n}function vd(){var n=Ko!==0;return Ko=0,n}function $n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ht.memoizedState=Pt=n:Pt=Pt.next=n,Pt}function In(){if(Tt===null){var n=ht.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var e=Pt===null?ht.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=n;else{if(n===null)throw Error(te(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?ht.memoizedState=Pt=n:Pt=Pt.next=n}return Pt}function $o(n,e){return typeof e=="function"?e(n):e}function Hu(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Tt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ht.lanes|=s,Ir|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Vu(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function E_(){}function T_(n,e){var t=ht,i=In(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,yd(R_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(t.flags|=2048,Zo(9,w_.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(te(349));Nr&30||A_(t,e,r)}return r}function A_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function w_(n,e,t,i){e.value=t,e.getSnapshot=i,b_(e)&&C_(n)}function R_(n,e,t){return t(function(){b_(e)&&C_(n)})}function b_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!jn(n,t)}catch{return!0}}function C_(n){var e=Ri(n,1);e!==null&&Wn(e,n,1,-1)}function zh(n){var e=$n();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:n},e.queue=n,n=n.dispatch=cx.bind(null,ht,n),[e.memoizedState,n]}function Zo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function L_(){return In().memoizedState}function fl(n,e,t,i){var r=$n();ht.flags|=n,r.memoizedState=Zo(1|e,t,void 0,i===void 0?null:i)}function nu(n,e,t,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&gd(i,o.deps)){r.memoizedState=Zo(e,t,s,i);return}}ht.flags|=n,r.memoizedState=Zo(1|e,t,s,i)}function Hh(n,e){return fl(8390656,8,n,e)}function yd(n,e){return nu(2048,8,n,e)}function P_(n,e){return nu(4,2,n,e)}function D_(n,e){return nu(4,4,n,e)}function N_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function I_(n,e,t){return t=t!=null?t.concat([n]):null,nu(4,4,N_.bind(null,e,n),t)}function xd(){}function U_(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function O_(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&gd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function F_(n,e,t){return Nr&21?(jn(t,e)||(t=Vg(),ht.lanes|=t,Ir|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,an=!0),n.memoizedState=t)}function lx(n,e){var t=Je;Je=t!==0&&4>t?t:4,n(!0);var i=zu.transition;zu.transition={};try{n(!1),e()}finally{Je=t,zu.transition=i}}function k_(){return In().memoizedState}function ux(n,e,t){var i=Ji(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},B_(n))z_(e,t);else if(t=x_(n,e,t,i),t!==null){var r=en();Wn(t,n,i,r),H_(t,e,i)}}function cx(n,e,t){var i=Ji(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(B_(n))z_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,fd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=x_(n,e,r,i),t!==null&&(r=en(),Wn(t,n,i,r),H_(t,e,i))}}function B_(n){var e=n.alternate;return n===ht||e!==null&&e===ht}function z_(n,e){Co=Ul=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function H_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zf(n,t)}}var Ol={readContext:Nn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},fx={readContext:Nn,useCallback:function(n,e){return $n().memoizedState=[n,e===void 0?null:e],n},useContext:Nn,useEffect:Hh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,fl(4194308,4,N_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return fl(4194308,4,n,e)},useInsertionEffect:function(n,e){return fl(4,2,n,e)},useMemo:function(n,e){var t=$n();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=$n();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ux.bind(null,ht,n),[i.memoizedState,n]},useRef:function(n){var e=$n();return n={current:n},e.memoizedState=n},useState:zh,useDebugValue:xd,useDeferredValue:function(n){return $n().memoizedState=n},useTransition:function(){var n=zh(!1),e=n[0];return n=lx.bind(null,n[1]),$n().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ht,r=$n();if(ct){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Nt===null)throw Error(te(349));Nr&30||A_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Hh(R_.bind(null,i,s,n),[n]),i.flags|=2048,Zo(9,w_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=$n(),e=Nt.identifierPrefix;if(ct){var t=yi,i=vi;t=(i&~(1<<32-Gn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ko++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ax++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dx={readContext:Nn,useCallback:U_,useContext:Nn,useEffect:yd,useImperativeHandle:I_,useInsertionEffect:P_,useLayoutEffect:D_,useMemo:O_,useReducer:Hu,useRef:L_,useState:function(){return Hu($o)},useDebugValue:xd,useDeferredValue:function(n){var e=In();return F_(e,Tt.memoizedState,n)},useTransition:function(){var n=Hu($o)[0],e=In().memoizedState;return[n,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:k_,unstable_isNewReconciler:!1},hx={readContext:Nn,useCallback:U_,useContext:Nn,useEffect:yd,useImperativeHandle:I_,useInsertionEffect:P_,useLayoutEffect:D_,useMemo:O_,useReducer:Vu,useRef:L_,useState:function(){return Vu($o)},useDebugValue:xd,useDeferredValue:function(n){var e=In();return Tt===null?e.memoizedState=n:F_(e,Tt.memoizedState,n)},useTransition:function(){var n=Vu($o)[0],e=In().memoizedState;return[n,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:k_,unstable_isNewReconciler:!1};function Bn(n,e){if(n&&n.defaultProps){e=pt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function lf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:pt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var iu={isMounted:function(n){return(n=n._reactInternals)?Hr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=en(),r=Ji(n),s=Mi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Wn(e,n,r,i),ul(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=en(),r=Ji(n),s=Mi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Wn(e,n,r,i),ul(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=en(),i=Ji(n),r=Mi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(n,r,i),e!==null&&(Wn(e,n,i,t),ul(e,n,i))}};function Vh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(t,i)||!Go(r,s):!0}function V_(n,e,t){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=un(e)?Pr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ds(n,r):sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Gh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&iu.enqueueReplaceState(e,e.state,null)}function uf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},dd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=un(e)?Pr:Yt.current,r.context=Ds(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Nl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,e){try{var t="",i=e;do t+=H0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Gu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function cf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var px=typeof WeakMap=="function"?WeakMap:Map;function G_(n,e,t){t=Mi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){kl||(kl=!0,xf=i),cf(n,e)},t}function W_(n,e,t){t=Mi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){cf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){cf(n,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Wh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new px;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=bx.bind(null,n,e,t),e.then(n,n))}function Xh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function jh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Mi(-1,1),e.tag=2,Zi(t,e,1))),t.lanes|=1),n)}var mx=Li.ReactCurrentOwner,an=!1;function Qt(n,e,t,i){e.child=n===null?y_(e,null,t,i):Is(e,n.child,t,i)}function Yh(n,e,t,i,r){t=t.render;var s=e.ref;return ws(e,r),i=_d(n,e,t,i,s,r),t=vd(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,bi(n,e,r)):(ct&&t&&sd(e),e.flags|=1,Qt(n,e,i,r),e.child)}function qh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,X_(n,e,s,i,r)):(n=ml(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Go,t(o,i)&&n.ref===e.ref)return bi(n,e,r)}return e.flags|=1,n=er(s,i),n.ref=e.ref,n.return=e,e.child=n}function X_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Go(s,i)&&n.ref===e.ref)if(an=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(an=!0);else return e.lanes=n.lanes,bi(n,e,r)}return ff(n,e,t,i,r)}function j_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(xs,gn),gn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(xs,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(xs,gn),gn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(xs,gn),gn|=i;return Qt(n,e,r,t),e.child}function Y_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ff(n,e,t,i,r){var s=un(t)?Pr:Yt.current;return s=Ds(e,s),ws(e,r),t=_d(n,e,t,i,s,r),i=vd(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,bi(n,e,r)):(ct&&i&&sd(e),e.flags|=1,Qt(n,e,t,r),e.child)}function Kh(n,e,t,i,r){if(un(t)){var s=!0;bl(e)}else s=!1;if(ws(e,r),e.stateNode===null)dl(n,e),V_(e,t,i),uf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=un(t)?Pr:Yt.current,u=Ds(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gh(e,o,i,u),Bi=!1;var d=e.memoizedState;o.state=d,Nl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ln.current||Bi?(typeof c=="function"&&(lf(e,t,c,i),l=e.memoizedState),(a=Bi||Vh(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,S_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(t)?Pr:Yt.current,l=Ds(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Gh(e,o,i,l),Bi=!1,d=e.memoizedState,o.state=d,Nl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||ln.current||Bi?(typeof p=="function"&&(lf(e,t,p,i),_=e.memoizedState),(u=Bi||Vh(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return df(n,e,t,i,s,r)}function df(n,e,t,i,r,s){Y_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ih(e,t,!1),bi(n,e,s);i=e.stateNode,mx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Is(e,n.child,null,s),e.child=Is(e,null,a,s)):Qt(n,e,a,s),e.memoizedState=i.state,r&&Ih(e,t,!0),e.child}function q_(n){var e=n.stateNode;e.pendingContext?Nh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Nh(n,e.context,!1),hd(n,e.containerInfo)}function $h(n,e,t,i,r){return Ns(),ad(r),e.flags|=256,Qt(n,e,t,i),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(n){return{baseLanes:n,cachePool:null,transitions:null}}function K_(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(dt,r&1),n===null)return of(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),n=br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=pf(t),e.memoizedState=hf,n):Sd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=br(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?pf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=hf,i}return s=n.child,n=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sd(n,e){return e=ou({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Aa(n,e,t,i){return i!==null&&ad(i),Is(e,n.child,null,t),n=Sd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function gx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Gu(Error(te(422))),Aa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,n.child,null,o),e.child.memoizedState=pf(o),e.memoizedState=hf,s);if(!(e.mode&1))return Aa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Gu(s,i,void 0),Aa(n,e,o,i)}if(a=(o&n.childLanes)!==0,an||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(n,r),Wn(i,n,r,-1))}return Rd(),i=Gu(Error(te(421))),Aa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Cx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,_n=$i(r.nextSibling),vn=e,ct=!0,Hn=null,n!==null&&(An[wn++]=vi,An[wn++]=yi,An[wn++]=Dr,vi=n.id,yi=n.overflow,Dr=e),e=Sd(e,i.children),e.flags|=4096,e)}function Zh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),af(n.return,e,t)}function Wu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function $_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zh(n,t,e);else if(n.tag===19)Zh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Il(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Wu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Il(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Wu(e,!0,t,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function bi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ir|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function _x(n,e,t){switch(e.tag){case 3:q_(e),Ns();break;case 5:M_(e);break;case 1:un(e.type)&&bl(e);break;case 4:hd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?K_(n,e,t):(it(dt,dt.current&1),n=bi(n,e,t),n!==null?n.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return $_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,j_(n,e,t)}return bi(n,e,t)}var Z_,mf,Q_,J_;Z_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};mf=function(){};Q_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Tr(ni.current);var s=null;switch(t){case"input":r=Oc(n,r),i=Oc(n,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Bc(n,r),i=Bc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=wl)}Hc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};J_=function(n,e,t,i){t!==i&&(e.flags|=4)};function lo(n,e){if(!ct)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Vt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function vx(n,e,t){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&Rl(),Vt(e),null;case 3:return i=e.stateNode,Us(),at(ln),at(Yt),md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ea(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Ef(Hn),Hn=null))),mf(n,e),Vt(e),null;case 5:pd(e);var r=Tr(qo.current);if(t=e.type,n!==null&&e.stateNode!=null)Q_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(n=Tr(ni.current),Ea(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[jo]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)st(Mo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":oh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":lh(i,s),st("invalid",i)}Hc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,n),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":pa(i),ah(i,s,!0);break;case"textarea":pa(i),uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Rg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Qn]=e,n[jo]=i,Z_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Vc(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)st(Mo[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":oh(n,i),r=Oc(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",n);break;case"textarea":lh(n,i),r=Bc(n,i),st("invalid",n);break;default:r=i}Hc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fo(n,l):typeof l=="number"&&Fo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Xf(n,s,l,o))}switch(t){case"input":pa(n),ah(n,i,!1);break;case"textarea":pa(n),uh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ms(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=wl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(n&&e.stateNode!=null)J_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Tr(qo.current),Tr(ni.current),Ea(e)){if(i=e.stateNode,t=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:Ma(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ma(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Vt(e),null;case 13:if(at(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ct&&_n!==null&&e.mode&1&&!(e.flags&128))__(),Ns(),e.flags|=98560,s=!1;else if(s=Ea(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Qn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(Ef(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?At===0&&(At=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Us(),mf(n,e),n===null&&Wo(e.stateNode.containerInfo),Vt(e),null;case 10:return cd(e.type._context),Vt(e),null;case 17:return un(e.type)&&Rl(),Vt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)lo(s,!1);else{if(At!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Il(n),o!==null){for(e.flags|=128,lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&vt()>Fs&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Il(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Vt(e),null}else 2*vt()-s.renderingStartTime>Fs&&t!==1073741824&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,t=dt.current,it(dt,i?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return wd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function yx(n,e){switch(od(e),e.tag){case 1:return un(e.type)&&Rl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Us(),at(ln),at(Yt),md(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pd(e),null;case 13:if(at(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ns()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(dt),null;case 4:return Us(),null;case 10:return cd(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var wa=!1,jt=!1,xx=typeof WeakSet=="function"?WeakSet:Set,me=null;function ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){gt(n,e,i)}else t.current=null}function gf(n,e,t){try{t()}catch(i){gt(n,e,i)}}var Qh=!1;function Sx(n,e){if(Qc=El,n=r_(),rd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jc={focusedElem:n,selectionRange:t},El=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Bn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){gt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return _=Qh,Qh=!1,_}function Lo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&gf(e,t,s)}r=r.next}while(r!==i)}}function ru(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function _f(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ev(n){var e=n.alternate;e!==null&&(n.alternate=null,ev(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Qn],delete e[jo],delete e[nf],delete e[ix],delete e[rx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tv(n){return n.tag===5||n.tag===3||n.tag===4}function Jh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(n=n.child,n!==null))for(vf(n,e,t),n=n.sibling;n!==null;)vf(n,e,t),n=n.sibling}function yf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(yf(n,e,t),n=n.sibling;n!==null;)yf(n,e,t),n=n.sibling}var Ut=null,zn=!1;function Pi(n,e,t){for(t=t.child;t!==null;)nv(n,e,t),t=t.sibling}function nv(n,e,t){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount($l,t)}catch{}switch(t.tag){case 5:jt||ys(t,e);case 6:var i=Ut,r=zn;Ut=null,Pi(n,e,t),Ut=i,zn=r,Ut!==null&&(zn?(n=Ut,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ut.removeChild(t.stateNode));break;case 18:Ut!==null&&(zn?(n=Ut,t=t.stateNode,n.nodeType===8?Fu(n.parentNode,t):n.nodeType===1&&Fu(n,t),Ho(n)):Fu(Ut,t.stateNode));break;case 4:i=Ut,r=zn,Ut=t.stateNode.containerInfo,zn=!0,Pi(n,e,t),Ut=i,zn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gf(t,e,o),r=r.next}while(r!==i)}Pi(n,e,t);break;case 1:if(!jt&&(ys(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){gt(t,e,a)}Pi(n,e,t);break;case 21:Pi(n,e,t);break;case 22:t.mode&1?(jt=(i=jt)||t.memoizedState!==null,Pi(n,e,t),jt=i):Pi(n,e,t);break;default:Pi(n,e,t)}}function ep(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new xx),e.forEach(function(i){var r=Lx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Un(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,zn=!1;break e;case 3:Ut=a.stateNode.containerInfo,zn=!0;break e;case 4:Ut=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ut===null)throw Error(te(160));nv(s,o,r),Ut=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iv(e,n),e=e.sibling}function iv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(e,n),Kn(n),i&4){try{Lo(3,n,n.return),ru(3,n)}catch(y){gt(n,n.return,y)}try{Lo(5,n,n.return)}catch(y){gt(n,n.return,y)}}break;case 1:Un(e,n),Kn(n),i&512&&t!==null&&ys(t,t.return);break;case 5:if(Un(e,n),Kn(n),i&512&&t!==null&&ys(t,t.return),n.flags&32){var r=n.stateNode;try{Fo(r,"")}catch(y){gt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ag(r,s),Vc(a,o);var u=Vc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Lg(r,f):c==="dangerouslySetInnerHTML"?bg(r,f):c==="children"?Fo(r,f):Xf(r,c,f,u)}switch(a){case"input":Fc(r,s);break;case"textarea":wg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(y){gt(n,n.return,y)}}break;case 6:if(Un(e,n),Kn(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){gt(n,n.return,y)}}break;case 3:if(Un(e,n),Kn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(y){gt(n,n.return,y)}break;case 4:Un(e,n),Kn(n);break;case 13:Un(e,n),Kn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=vt())),i&4&&ep(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(jt=(u=jt)||c,Un(e,n),jt=u):Un(e,n),Kn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(me=n,c=n.child;c!==null;){for(f=me=c;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Lo(4,d,d.return);break;case 1:ys(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){gt(i,t,y)}}break;case 5:ys(d,d.return);break;case 22:if(d.memoizedState!==null){np(f);continue}}p!==null?(p.return=d,me=p):np(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(y){gt(n,n.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){gt(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,n),Kn(n),i&4&&ep(n);break;case 21:break;default:Un(e,n),Kn(n)}}function Kn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(tv(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=Jh(n);yf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jh(n);vf(n,a,o);break;default:throw Error(te(161))}}catch(l){gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Mx(n,e,t){me=n,rv(n)}function rv(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=wa;var u=jt;if(wa=o,(jt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?ip(r):l!==null?(l.return=o,me=l):ip(r);for(;s!==null;)me=s,rv(s),s=s.sibling;me=r,wa=a,jt=u}tp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):tp(n)}}function tp(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Bn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Bh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ho(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}jt||e.flags&512&&_f(e)}catch(d){gt(e,e.return,d)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function np(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function ip(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ru(4,e)}catch(l){gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{_f(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{_f(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Ex=Math.ceil,Fl=Li.ReactCurrentDispatcher,Md=Li.ReactCurrentOwner,Dn=Li.ReactCurrentBatchConfig,Ke=0,Nt=null,Et=null,Ft=0,gn=0,xs=ar(0),At=0,Qo=null,Ir=0,su=0,Ed=0,Po=null,sn=null,Td=0,Fs=1/0,gi=null,kl=!1,xf=null,Qi=null,Ra=!1,Xi=null,Bl=0,Do=0,Sf=null,hl=-1,pl=0;function en(){return Ke&6?vt():hl!==-1?hl:hl=vt()}function Ji(n){return n.mode&1?Ke&2&&Ft!==0?Ft&-Ft:ox.transition!==null?(pl===0&&(pl=Vg()),pl):(n=Je,n!==0||(n=window.event,n=n===void 0?16:Kg(n.type)),n):1}function Wn(n,e,t,i){if(50<Do)throw Do=0,Sf=null,Error(te(185));ia(n,t,i),(!(Ke&2)||n!==Nt)&&(n===Nt&&(!(Ke&2)&&(su|=t),At===4&&Gi(n,Ft)),cn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Fs=vt()+500,tu&&lr()))}function cn(n,e){var t=n.callbackNode;oy(n,e);var i=Ml(n,n===Nt?Ft:0);if(i===0)t!==null&&dh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&dh(t),e===1)n.tag===0?sx(rp.bind(null,n)):p_(rp.bind(null,n)),tx(function(){!(Ke&6)&&lr()}),t=null;else{switch(Gg(i)){case 1:t=$f;break;case 4:t=zg;break;case 16:t=Sl;break;case 536870912:t=Hg;break;default:t=Sl}t=dv(t,sv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function sv(n,e){if(hl=-1,pl=0,Ke&6)throw Error(te(327));var t=n.callbackNode;if(Rs()&&n.callbackNode!==t)return null;var i=Ml(n,n===Nt?Ft:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=zl(n,i);else{e=i;var r=Ke;Ke|=2;var s=av();(Nt!==n||Ft!==e)&&(gi=null,Fs=vt()+500,Rr(n,e));do try{wx();break}catch(a){ov(n,a)}while(!0);ud(),Fl.current=s,Ke=r,Et!==null?e=0:(Nt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=Yc(n),r!==0&&(i=r,e=Mf(n,r))),e===1)throw t=Qo,Rr(n,0),Gi(n,i),cn(n,vt()),t;if(e===6)Gi(n,i);else{if(r=n.current.alternate,!(i&30)&&!Tx(r)&&(e=zl(n,i),e===2&&(s=Yc(n),s!==0&&(i=s,e=Mf(n,s))),e===1))throw t=Qo,Rr(n,0),Gi(n,i),cn(n,vt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:vr(n,sn,gi);break;case 3:if(Gi(n,i),(i&130023424)===i&&(e=Td+500-vt(),10<e)){if(Ml(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){en(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=tf(vr.bind(null,n,sn,gi),e);break}vr(n,sn,gi);break;case 4:if(Gi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ex(i/1960))-i,10<i){n.timeoutHandle=tf(vr.bind(null,n,sn,gi),i);break}vr(n,sn,gi);break;case 5:vr(n,sn,gi);break;default:throw Error(te(329))}}}return cn(n,vt()),n.callbackNode===t?sv.bind(null,n):null}function Mf(n,e){var t=Po;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=zl(n,e),n!==2&&(e=sn,sn=t,e!==null&&Ef(e)),n}function Ef(n){sn===null?sn=n:sn.push.apply(sn,n)}function Tx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(n,e){for(e&=~Ed,e&=~su,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Gn(e),i=1<<t;n[t]=-1,e&=~i}}function rp(n){if(Ke&6)throw Error(te(327));Rs();var e=Ml(n,0);if(!(e&1))return cn(n,vt()),null;var t=zl(n,e);if(n.tag!==0&&t===2){var i=Yc(n);i!==0&&(e=i,t=Mf(n,i))}if(t===1)throw t=Qo,Rr(n,0),Gi(n,e),cn(n,vt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,vr(n,sn,gi),cn(n,vt()),null}function Ad(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Fs=vt()+500,tu&&lr())}}function Ur(n){Xi!==null&&Xi.tag===0&&!(Ke&6)&&Rs();var e=Ke;Ke|=1;var t=Dn.transition,i=Je;try{if(Dn.transition=null,Je=1,n)return n()}finally{Je=i,Dn.transition=t,Ke=e,!(Ke&6)&&lr()}}function wd(){gn=xs.current,at(xs)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ex(t)),Et!==null)for(t=Et.return;t!==null;){var i=t;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:Us(),at(ln),at(Yt),md();break;case 5:pd(i);break;case 4:Us();break;case 13:at(dt);break;case 19:at(dt);break;case 10:cd(i.type._context);break;case 22:case 23:wd()}t=t.return}if(Nt=n,Et=n=er(n.current,null),Ft=gn=e,At=0,Qo=null,Ed=su=Ir=0,sn=Po=null,Er!==null){for(e=0;e<Er.length;e++)if(t=Er[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Er=null}return n}function ov(n,e){do{var t=Et;try{if(ud(),cl.current=Ol,Ul){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Nr=0,Pt=Tt=ht=null,Co=!1,Ko=0,Md.current=null,t===null||t.return===null){At=1,Qo=e,Et=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xh(o);if(p!==null){p.flags&=-257,jh(p,o,a,s,e),p.mode&1&&Wh(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Wh(s,u,e),Rd();break e}l=Error(te(426))}}else if(ct&&a.mode&1){var m=Xh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),jh(m,o,a,s,e),ad(Os(l,a));break e}}s=l=Os(l,a),At!==4&&(At=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=G_(s,l,e);kh(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qi===null||!Qi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=W_(s,a,e);kh(s,x);break e}}s=s.return}while(s!==null)}uv(t)}catch(S){e=S,Et===t&&t!==null&&(Et=t=t.return);continue}break}while(!0)}function av(){var n=Fl.current;return Fl.current=Ol,n===null?Ol:n}function Rd(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(Ir&268435455)&&!(su&268435455)||Gi(Nt,Ft)}function zl(n,e){var t=Ke;Ke|=2;var i=av();(Nt!==n||Ft!==e)&&(gi=null,Rr(n,e));do try{Ax();break}catch(r){ov(n,r)}while(!0);if(ud(),Ke=t,Fl.current=i,Et!==null)throw Error(te(261));return Nt=null,Ft=0,At}function Ax(){for(;Et!==null;)lv(Et)}function wx(){for(;Et!==null&&!Z0();)lv(Et)}function lv(n){var e=fv(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?uv(n):Et=e,Md.current=null}function uv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=yx(t,e),t!==null){t.flags&=32767,Et=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,Et=null;return}}else if(t=vx(t,e,gn),t!==null){Et=t;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=n}while(e!==null);At===0&&(At=5)}function vr(n,e,t){var i=Je,r=Dn.transition;try{Dn.transition=null,Je=1,Rx(n,e,t,i)}finally{Dn.transition=r,Je=i}return null}function Rx(n,e,t,i){do Rs();while(Xi!==null);if(Ke&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ay(n,s),n===Nt&&(Et=Nt=null,Ft=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ra||(Ra=!0,dv(Sl,function(){return Rs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Je;Je=1;var a=Ke;Ke|=4,Md.current=null,Sx(n,t),iv(t,n),Yy(Jc),El=!!Qc,Jc=Qc=null,n.current=t,Mx(t),Q0(),Ke=a,Je=o,Dn.transition=s}else n.current=t;if(Ra&&(Ra=!1,Xi=n,Bl=r),s=n.pendingLanes,s===0&&(Qi=null),ty(t.stateNode),cn(n,vt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,n=xf,xf=null,n;return Bl&1&&n.tag!==0&&Rs(),s=n.pendingLanes,s&1?n===Sf?Do++:(Do=0,Sf=n):Do=0,lr(),null}function Rs(){if(Xi!==null){var n=Gg(Bl),e=Dn.transition,t=Je;try{if(Dn.transition=null,Je=16>n?16:n,Xi===null)var i=!1;else{if(n=Xi,Xi=null,Bl=0,Ke&6)throw Error(te(331));var r=Ke;for(Ke|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Lo(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var d=c.sibling,p=c.return;if(ev(c),c===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(S){gt(a,a.return,S)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ke=r,lr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot($l,n)}catch{}i=!0}return i}finally{Je=t,Dn.transition=e}}return!1}function sp(n,e,t){e=Os(t,e),e=G_(n,e,1),n=Zi(n,e,1),e=en(),n!==null&&(ia(n,1,e),cn(n,e))}function gt(n,e,t){if(n.tag===3)sp(n,n,t);else for(;e!==null;){if(e.tag===3){sp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){n=Os(t,n),n=W_(e,n,1),e=Zi(e,n,1),n=en(),e!==null&&(ia(e,1,n),cn(e,n));break}}e=e.return}}function bx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=en(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(Ft&t)===t&&(At===4||At===3&&(Ft&130023424)===Ft&&500>vt()-Td?Rr(n,0):Ed|=t),cn(n,e)}function cv(n,e){e===0&&(n.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var t=en();n=Ri(n,e),n!==null&&(ia(n,e,t),cn(n,t))}function Cx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),cv(n,t)}function Lx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),cv(n,t)}var fv;fv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return an=!1,_x(n,e,t);an=!!(n.flags&131072)}else an=!1,ct&&e.flags&1048576&&m_(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dl(n,e),n=e.pendingProps;var r=Ds(e,Yt.current);ws(e,t),r=_d(null,e,i,n,r,t);var s=vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dd(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,uf(e,i,n,t),e=df(null,e,i,!0,s,t)):(e.tag=0,ct&&s&&sd(e),Qt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(dl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dx(i),n=Bn(i,n),r){case 0:e=ff(null,e,i,n,t);break e;case 1:e=Kh(null,e,i,n,t);break e;case 11:e=Yh(null,e,i,n,t);break e;case 14:e=qh(null,e,i,Bn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ff(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Kh(n,e,i,r,t);case 3:e:{if(q_(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,S_(n,e),Nl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(te(423)),e),e=$h(n,e,i,t,r);break e}else if(i!==r){r=Os(Error(te(424)),e),e=$h(n,e,i,t,r);break e}else for(_n=$i(e.stateNode.containerInfo.firstChild),vn=e,ct=!0,Hn=null,t=y_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ns(),i===r){e=bi(n,e,t);break e}Qt(n,e,i,t)}e=e.child}return e;case 5:return M_(e),n===null&&of(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ef(i,r)?o=null:s!==null&&ef(i,s)&&(e.flags|=32),Y_(n,e),Qt(n,e,o,t),e.child;case 6:return n===null&&of(e),null;case 13:return K_(n,e,t);case 4:return hd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Is(e,null,i,t):Qt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Yh(n,e,i,r,t);case 7:return Qt(n,e,e.pendingProps,t),e.child;case 8:return Qt(n,e,e.pendingProps.children,t),e.child;case 12:return Qt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Pl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!ln.current){e=bi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),af(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),af(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,t),r=Nn(r),i=i(r),e.flags|=1,Qt(n,e,i,t),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),qh(n,e,i,r,t);case 15:return X_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),dl(n,e),e.tag=1,un(i)?(n=!0,bl(e)):n=!1,ws(e,t),V_(e,i,r),uf(e,i,r,t),df(null,e,i,!0,n,t);case 19:return $_(n,e,t);case 22:return j_(n,e,t)}throw Error(te(156,e.tag))};function dv(n,e){return Bg(n,e)}function Px(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(n,e,t,i){return new Px(n,e,t,i)}function bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dx(n){if(typeof n=="function")return bd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Yf)return 11;if(n===qf)return 14}return 2}function er(n,e){var t=n.alternate;return t===null?(t=Ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ml(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")bd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case cs:return br(t.children,r,s,e);case jf:o=8,r|=8;break;case Dc:return n=Ln(12,t,e,r|2),n.elementType=Dc,n.lanes=s,n;case Nc:return n=Ln(13,t,e,r),n.elementType=Nc,n.lanes=s,n;case Ic:return n=Ln(19,t,e,r),n.elementType=Ic,n.lanes=s,n;case Mg:return ou(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xg:o=10;break e;case Sg:o=9;break e;case Yf:o=11;break e;case qf:o=14;break e;case ki:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function br(n,e,t,i){return n=Ln(7,n,i,e),n.lanes=t,n}function ou(n,e,t,i){return n=Ln(22,n,i,e),n.elementType=Mg,n.lanes=t,n.stateNode={isHidden:!1},n}function Xu(n,e,t){return n=Ln(6,n,null,e),n.lanes=t,n}function ju(n,e,t){return e=Ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Nx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cd(n,e,t,i,r,s,o,a,l){return n=new Nx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(s),n}function Ix(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function hv(n){if(!n)return sr;n=n._reactInternals;e:{if(Hr(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(un(t))return h_(n,t,e)}return e}function pv(n,e,t,i,r,s,o,a,l){return n=Cd(t,i,!0,n,r,s,o,a,l),n.context=hv(null),t=n.current,i=en(),r=Ji(t),s=Mi(i,r),s.callback=e??null,Zi(t,s,r),n.current.lanes=r,ia(n,r,i),cn(n,i),n}function au(n,e,t,i){var r=e.current,s=en(),o=Ji(r);return t=hv(t),e.context===null?e.context=t:e.pendingContext=t,e=Mi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zi(r,e,o),n!==null&&(Wn(n,r,o,s),ul(n,r,o)),o}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function op(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ld(n,e){op(n,e),(n=n.alternate)&&op(n,e)}function Ux(){return null}var mv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pd(n){this._internalRoot=n}lu.prototype.render=Pd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));au(n,e,null,null)};lu.prototype.unmount=Pd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ur(function(){au(null,n,null,null)}),e[wi]=null}};function lu(n){this._internalRoot=n}lu.prototype.unstable_scheduleHydration=function(n){if(n){var e=jg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Vi.length&&e!==0&&e<Vi[t].priority;t++);Vi.splice(t,0,n),t===0&&qg(n)}};function Dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ap(){}function Ox(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Hl(o);s.call(u)}}var o=pv(e,i,n,0,null,!1,!1,"",ap);return n._reactRootContainer=o,n[wi]=o.current,Wo(n.nodeType===8?n.parentNode:n),Ur(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Hl(l);a.call(u)}}var l=Cd(n,0,!1,null,null,!1,!1,"",ap);return n._reactRootContainer=l,n[wi]=l.current,Wo(n.nodeType===8?n.parentNode:n),Ur(function(){au(e,l,t,i)}),l}function cu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hl(o);a.call(l)}}au(e,o,n,r)}else o=Ox(t,e,n,r,i);return Hl(o)}Wg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=So(e.pendingLanes);t!==0&&(Zf(e,t|1),cn(e,vt()),!(Ke&6)&&(Fs=vt()+500,lr()))}break;case 13:Ur(function(){var i=Ri(n,1);if(i!==null){var r=en();Wn(i,n,1,r)}}),Ld(n,1)}};Qf=function(n){if(n.tag===13){var e=Ri(n,134217728);if(e!==null){var t=en();Wn(e,n,134217728,t)}Ld(n,134217728)}};Xg=function(n){if(n.tag===13){var e=Ji(n),t=Ri(n,e);if(t!==null){var i=en();Wn(t,n,e,i)}Ld(n,e)}};jg=function(){return Je};Yg=function(n,e){var t=Je;try{return Je=n,e()}finally{Je=t}};Wc=function(n,e,t){switch(e){case"input":if(Fc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=eu(i);if(!r)throw Error(te(90));Tg(i),Fc(i,r)}}}break;case"textarea":wg(n,t);break;case"select":e=t.value,e!=null&&Ms(n,!!t.multiple,e,!1)}};Ng=Ad;Ig=Ur;var Fx={usingClientEntryPoint:!1,Events:[sa,ps,eu,Pg,Dg,Ad]},uo={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kx={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fg(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{$l=ba.inject(kx),ti=ba}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;xn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(te(200));return Ix(n,e,null,t)};xn.createRoot=function(n,e){if(!Dd(n))throw Error(te(299));var t=!1,i="",r=mv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cd(n,1,!1,null,null,t,!1,i,r),n[wi]=e.current,Wo(n.nodeType===8?n.parentNode:n),new Pd(e)};xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=Fg(e),n=n===null?null:n.stateNode,n};xn.flushSync=function(n){return Ur(n)};xn.hydrate=function(n,e,t){if(!uu(e))throw Error(te(200));return cu(null,n,e,!0,t)};xn.hydrateRoot=function(n,e,t){if(!Dd(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=mv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=pv(e,null,n,1,t??null,r,!1,s,o),n[wi]=e.current,Wo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new lu(e)};xn.render=function(n,e,t){if(!uu(e))throw Error(te(200));return cu(null,n,e,!1,t)};xn.unmountComponentAtNode=function(n){if(!uu(n))throw Error(te(40));return n._reactRootContainer?(Ur(function(){cu(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1};xn.unstable_batchedUpdates=Ad;xn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!uu(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return cu(n,e,t,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(n){console.error(n)}}gv(),gg.exports=xn;var Bx=gg.exports,_v,lp=Bx;_v=lp.createRoot,lp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="158",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zx=0,up=1,Hx=2,vv=1,Vx=2,mi=3,Ci=0,fn=1,Jn=2,tr=0,bs=1,cp=2,fp=3,dp=4,Gx=5,xr=100,Wx=101,Xx=102,hp=103,pp=104,jx=200,Yx=201,qx=202,Kx=203,Tf=204,Af=205,$x=206,Zx=207,Qx=208,Jx=209,eS=210,tS=211,nS=212,iS=213,rS=214,sS=0,oS=1,aS=2,Vl=3,lS=4,uS=5,cS=6,fS=7,yv=0,dS=1,hS=2,nr=0,pS=1,mS=2,gS=3,_S=4,vS=5,mp="attached",yS="detached",xv=300,ks=301,Bs=302,wf=303,Rf=304,fu=306,zs=1e3,Rn=1001,Gl=1002,Dt=1003,bf=1004,gl=1005,on=1006,Sv=1007,Or=1008,ir=1009,xS=1010,SS=1011,Id=1012,Mv=1013,ji=1014,xi=1015,Jo=1016,Ev=1017,Tv=1018,Cr=1020,MS=1021,bn=1023,ES=1024,TS=1025,Lr=1026,Hs=1027,AS=1028,Av=1029,wS=1030,wv=1031,Rv=1033,Yu=33776,qu=33777,Ku=33778,$u=33779,gp=35840,_p=35841,vp=35842,yp=35843,RS=36196,xp=37492,Sp=37496,Mp=37808,Ep=37809,Tp=37810,Ap=37811,wp=37812,Rp=37813,bp=37814,Cp=37815,Lp=37816,Pp=37817,Dp=37818,Np=37819,Ip=37820,Up=37821,Zu=36492,Op=36494,Fp=36495,bS=36283,kp=36284,Bp=36285,zp=36286,ea=2300,Vs=2301,Qu=2302,Hp=2400,Vp=2401,Gp=2402,CS=2500,LS=0,bv=1,Cf=2,Cv=3e3,Ei=3001,PS=3200,DS=3201,Lv=0,NS=1,Cn="",ut="srgb",Bt="srgb-linear",Ud="display-p3",du="display-p3-linear",Wl="linear",ot="srgb",Xl="rec709",jl="p3",jr=7680,Wp=519,IS=512,US=513,OS=514,FS=515,kS=516,BS=517,zS=518,HS=519,Lf=35044,Xp="300 es",Pf=1035,Si=2e3,Yl=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const No=Math.PI/180,Gs=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Od(n,e){return(n%e+e)%e}function VS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function GS(n,e,t){return n!==e?(t-n)/(e-n):0}function Io(n,e,t){return(1-t)*n+t*e}function WS(n,e,t,i){return Io(n,e,1-Math.exp(-t*i))}function XS(n,e=1){return e-Math.abs(Od(n,e*2)-e)}function jS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function YS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function KS(n,e){return n+Math.random()*(e-n)}function $S(n){return n*(.5-Math.random())}function ZS(n){n!==void 0&&(jp=n);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function QS(n){return n*No}function JS(n){return n*Gs}function Df(n){return(n&n-1)===0&&n!==0}function Pv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ql(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dv={DEG2RAD:No,RAD2DEG:Gs,generateUUID:Xn,clamp:Ot,euclideanModulo:Od,mapLinear:VS,inverseLerp:GS,lerp:Io,damp:WS,pingpong:XS,smoothstep:jS,smootherstep:YS,randInt:qS,randFloat:KS,randFloatSpread:$S,seededRandom:ZS,degToRad:QS,radToDeg:JS,isPowerOfTwo:Df,ceilPowerOfTwo:Pv,floorPowerOfTwo:ql,setQuaternionFromProperEuler:eM,normalize:et,denormalize:ei};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],x=r[7],S=r[2],R=r[5],T=r[8];return s[0]=o*y+a*v+l*S,s[3]=o*m+a*g+l*R,s[6]=o*h+a*x+l*T,s[1]=u*y+c*v+f*S,s[4]=u*m+c*g+f*R,s[7]=u*h+c*x+f*T,s[2]=d*y+p*v+_*S,s[5]=d*m+p*g+_*R,s[8]=d*h+p*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-u*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new He;function Nv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tM(){const n=ta("canvas");return n.style.display="block",n}const Yp={};function Uo(n){n in Yp||(Yp[n]=!0,console.warn(n))}const qp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Bt]:{transfer:Wl,primaries:Xl,toReference:n=>n,fromReference:n=>n},[ut]:{transfer:ot,primaries:Xl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[du]:{transfer:Wl,primaries:jl,toReference:n=>n.applyMatrix3(Kp),fromReference:n=>n.applyMatrix3(qp)},[Ud]:{transfer:ot,primaries:jl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kp),fromReference:n=>n.applyMatrix3(qp).convertLinearToSRGB()}},nM=new Set([Bt,du]),$e={enabled:!0,_workingColorSpace:Bt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ca[e].toReference,r=Ca[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ca[n].primaries},getTransfer:function(n){return n===Cn?Wl:Ca[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ec(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yr;class Iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=ta("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class Uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tc(r[o].image)):s.push(tc(r[o]))}else s=tc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class It extends Vr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Rn,r=Rn,s=on,o=Or,a=bn,l=ir,u=It.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Xn(),this.name="",this.source=new Uv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ei?ut:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Ei:Cv}set encoding(e){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?ut:Cn}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=xv;It.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,x=(p+1)/2,S=(h+1)/2,R=(c+d)/4,T=(f+y)/4,L=(_+m)/4;return g>x&&g>S?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=T/i):x>S?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=L/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?ut:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends sM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ov extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(f!==y||l!==d||u!==p||c!==_){let m=1-a;const h=l*d+u*p+c*_+f*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const S=Math.sqrt(g),R=Math.atan2(S,h*v);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}const x=a*v;if(l=l*m+d*x,u=u*m+p*x,c=c*m+_*x,f=f*m+y*x,m===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-a*p,e[t+2]=u*_+c*p+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new P,$p=new ri;class si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Pa.subVectors(this.max,co),qr.subVectors(e.a,co),Kr.subVectors(e.b,co),$r.subVectors(e.c,co),Di.subVectors(Kr,qr),Ni.subVectors($r,Kr),dr.subVectors(qr,$r);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-dr.z,dr.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,dr.z,0,-dr.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-dr.y,dr.x,0];return!ic(t,qr,Kr,$r,Pa)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,qr,Kr,$r,Pa))?!1:(Da.crossVectors(Di,Ni),t=[Da.x,Da.y,Da.z],ic(t,qr,Kr,$r,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,La=new si,qr=new P,Kr=new P,$r=new P,Di=new P,Ni=new P,dr=new P,co=new P,Pa=new P,Da=new P,hr=new P;function ic(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=t.dot(hr),c=i.dot(hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const aM=new si,fo=new P,rc=new P;class Yn{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(rc)),this.expandByPoint(fo.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new P,sc=new P,Na=new P,Ii=new P,oc=new P,Ia=new P,ac=new P;class aa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sc.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(sc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=Ii.dot(this.direction),l=-Ii.dot(Na),u=Ii.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(Na,d),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){oc.subVectors(t,e),Ia.subVectors(i,e),ac.crossVectors(oc,Ia);let o=this.direction.dot(ac),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Ii,Ia));if(l<0)return null;const u=a*this.direction.dot(oc.cross(Ii));if(u<0||l+u>o)return null;const c=-a*Ii.dot(ac);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,_,y,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,y,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,y=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-y*u,t[9]=-a*l,t[2]=y-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,y=u*f;t[0]=d+y*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,y=u*f;t[0]=d-y*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=y-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,y=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+y,t[1]=l*f,t[5]=y*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*c,t[4]=y-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+y,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,uM)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ui.crossVectors(i,pn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ui.crossVectors(i,pn)),Ui.normalize(),Ua.crossVectors(pn,Ui),r[0]=Ui.x,r[4]=Ua.x,r[8]=pn.x,r[1]=Ui.y,r[5]=Ua.y,r[9]=pn.y,r[2]=Ui.z,r[6]=Ua.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],x=i[11],S=i[15],R=r[0],T=r[4],L=r[8],E=r[12],w=r[1],V=r[5],Y=r[9],Q=r[13],I=r[2],H=r[6],$=r[10],q=r[14],O=r[3],G=r[7],B=r[11],N=r[15];return s[0]=o*R+a*w+l*I+u*O,s[4]=o*T+a*V+l*H+u*G,s[8]=o*L+a*Y+l*$+u*B,s[12]=o*E+a*Q+l*q+u*N,s[1]=c*R+f*w+d*I+p*O,s[5]=c*T+f*V+d*H+p*G,s[9]=c*L+f*Y+d*$+p*B,s[13]=c*E+f*Q+d*q+p*N,s[2]=_*R+y*w+m*I+h*O,s[6]=_*T+y*V+m*H+h*G,s[10]=_*L+y*Y+m*$+h*B,s[14]=_*E+y*Q+m*q+h*N,s[3]=v*R+g*w+x*I+S*O,s[7]=v*T+g*V+x*H+S*G,s[11]=v*L+g*Y+x*$+S*B,s[15]=v*E+g*Q+x*q+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=f*m*u-y*d*u+y*l*p-a*m*p-f*l*h+a*d*h,g=_*d*u-c*m*u-_*l*p+o*m*p+c*l*h-o*d*h,x=c*y*u-_*f*u+_*a*p-o*y*p-c*a*h+o*f*h,S=_*f*l-c*y*l-_*a*d+o*y*d+c*a*m-o*f*m,R=t*v+i*g+r*x+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(c*m*s-_*d*s+_*r*p-t*m*p-c*r*h+t*d*h)*T,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*T,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*T,e[8]=x*T,e[9]=(_*f*s-c*y*s-_*i*p+t*y*p+c*i*h-t*f*h)*T,e[10]=(o*y*s-_*a*s+_*i*u-t*y*u-o*i*h+t*a*h)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=S*T,e[13]=(c*y*r-_*f*r+_*i*d-t*y*d-c*i*m+t*f*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,y=o*c,m=o*f,h=a*f,v=l*u,g=l*c,x=l*f,S=i.x,R=i.y,T=i.z;return r[0]=(1-(y+h))*S,r[1]=(p+x)*S,r[2]=(_-g)*S,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(d+h))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/s,c=1/o,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=c,Fn.elements[5]*=c,Fn.elements[6]*=c,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Si)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Yl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*c;let _,y;if(a===Si)_=(o+s)*f,y=-2*f;else if(a===Yl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zr=new P,Fn=new Ve,lM=new P(0,0,0),uM=new P(1,1,1),Ui=new P,Ua=new P,pn=new P,Zp=new Ve,Qp=new ri;class hu{constructor(e=0,t=0,i=0,r=hu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hu.DEFAULT_ORDER="XYZ";class Fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Jp=new P,Qr=new ri,fi=new Ve,Oa=new P,ho=new P,fM=new P,dM=new ri,em=new P(1,0,0),tm=new P(0,1,0),nm=new P(0,0,1),hM={type:"added"},pM={type:"removed"};class ft extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new P,t=new hu,i=new ri,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new He}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,t){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ho,Oa,this.up):fi.lookAt(Oa,ho,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(fi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ft.DEFAULT_UP=new P(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,di=new P,lc=new P,hi=new P,Jr=new P,es=new P,im=new P,uc=new P,cc=new P,fc=new P;let Fa=!1;class Vn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),di.subVectors(i,t),lc.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(di),l=kn.dot(lc),u=di.dot(di),c=di.dot(lc),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,hi),l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),di.subVectors(e,t),kn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),es.subVectors(s,i),uc.subVectors(e,i);const l=Jr.dot(uc),u=es.dot(uc);if(l<=0&&u<=0)return t.copy(i);cc.subVectors(e,r);const c=Jr.dot(cc),f=es.dot(cc);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Jr,o);fc.subVectors(e,s);const p=Jr.dot(fc),_=es.dot(fc);if(_>=0&&p<=_)return t.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(es,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return im.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(im,a);const h=1/(m+y+d);return o=y*h,a=d*h,t.copy(i).addScaledVector(Jr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function dc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Od(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=dc(o,s,e+1/3),this.g=dc(o,s,e),this.b=dc(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return $e.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ot(Wt.r*255,0,255))*65536+Math.round(Ot(Wt.g*255,0,255))*256+Math.round(Ot(Wt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ut){$e.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ka);const i=Io(Oi.h,ka.h,t),r=Io(Oi.s,ka.s,t),s=Io(Oi.l,ka.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new we;we.NAMES=kv;let mM=0;class ii extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=bs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=Af,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tf&&(i.blendSrc=this.blendSrc),this.blendDst!==Af&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ar extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new P,Ba=new Pe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lf,this.updateRange={offset:0,count:-1},this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bv extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zv extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gM=0;const En=new Ve,hc=new ft,ts=new P,mn=new si,po=new si,Lt=new P;class oi extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?zv:Bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(mn.min,po.min),mn.expandByPoint(Lt),Lt.addVectors(mn.max,po.max),mn.expandByPoint(Lt)):(mn.expandByPoint(po.min),mn.expandByPoint(po.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(ts.fromBufferAttribute(e,u),Lt.add(ts)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new P,c[w]=new P;const f=new P,d=new P,p=new P,_=new Pe,y=new Pe,m=new Pe,h=new P,v=new P;function g(w,V,Y){f.fromArray(r,w*3),d.fromArray(r,V*3),p.fromArray(r,Y*3),_.fromArray(o,w*2),y.fromArray(o,V*2),m.fromArray(o,Y*2),d.sub(f),p.sub(f),y.sub(_),m.sub(_);const Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(Q),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(Q),u[w].add(h),u[V].add(h),u[Y].add(h),c[w].add(v),c[V].add(v),c[Y].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,V=x.length;w<V;++w){const Y=x[w],Q=Y.start,I=Y.count;for(let H=Q,$=Q+I;H<$;H+=3)g(i[H+0],i[H+1],i[H+2])}const S=new P,R=new P,T=new P,L=new P;function E(w){T.fromArray(s,w*3),L.copy(T);const V=u[w];S.copy(V),S.sub(T.multiplyScalar(T.dot(V))).normalize(),R.crossVectors(L,V);const Q=R.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=Q}for(let w=0,V=x.length;w<V;++w){const Y=x[w],Q=Y.start,I=Y.count;for(let H=Q,$=Q+I;H<$;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,u=new P,c=new P,f=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new tn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Ve,pr=new aa,za=new Yn,sm=new P,ns=new P,is=new P,rs=new P,pc=new P,Ha=new P,Va=new Pe,Ga=new Pe,Wa=new Pe,om=new P,am=new P,lm=new P,Xa=new P,ja=new P;class Pn extends ft{constructor(e=new oi,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(pc.fromBufferAttribute(f,e),o?Ha.addScaledVector(pc,c):Ha.addScaledVector(pc.sub(t),c))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(za.containsPoint(pr.origin)===!1&&(pr.intersectSphere(za,sm)===null||pr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),pr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,S=g;x<S;x+=3){const R=a.getX(x),T=a.getX(x+1),L=a.getX(x+2);r=Ya(this,h,e,i,u,c,f,R,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Ya(this,o,e,i,u,c,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,S=g;x<S;x+=3){const R=x,T=x+1,L=x+2;r=Ya(this,h,e,i,u,c,f,R,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,x=m+2;r=Ya(this,o,e,i,u,c,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function _M(n,e,t,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ci,a),l===null)return null;ja.copy(a),ja.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ja);return u<t.near||u>t.far?null:{distance:u,point:ja.clone(),object:n}}function Ya(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ns),n.getVertexPosition(l,is),n.getVertexPosition(u,rs);const c=_M(n,e,t,i,ns,is,rs,Xa);if(c){r&&(Va.fromBufferAttribute(r,a),Ga.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,u),c.uv=Vn.getInterpolation(Xa,ns,is,rs,Va,Ga,Wa,new Pe)),s&&(Va.fromBufferAttribute(s,a),Ga.fromBufferAttribute(s,l),Wa.fromBufferAttribute(s,u),c.uv1=Vn.getInterpolation(Xa,ns,is,rs,Va,Ga,Wa,new Pe),c.uv2=c.uv1),o&&(om.fromBufferAttribute(o,a),am.fromBufferAttribute(o,l),lm.fromBufferAttribute(o,u),c.normal=Vn.getInterpolation(Xa,ns,is,rs,om,am,lm,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new P,materialIndex:0};Vn.getNormal(ns,is,rs,f.normal),c.face=f}return c}class la extends oi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(u,3)),this.setAttribute("normal",new Ti(c,3)),this.setAttribute("uv",new Ti(f,2));function _(y,m,h,v,g,x,S,R,T,L,E){const w=x/T,V=S/L,Y=x/2,Q=S/2,I=R/2,H=T+1,$=L+1;let q=0,O=0;const G=new P;for(let B=0;B<$;B++){const N=B*V-Q;for(let F=0;F<H;F++){const ue=F*w-Y;G[y]=ue*v,G[m]=N*g,G[h]=I,u.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[h]=R>0?1:-1,c.push(G.x,G.y,G.z),f.push(F/T),f.push(1-B/L),q+=1}}for(let B=0;B<L;B++)for(let N=0;N<T;N++){const F=d+N+H*B,ue=d+N+H*(B+1),ce=d+(N+1)+H*(B+1),de=d+(N+1)+H*B;l.push(F,ue,de),l.push(ue,ce,de),O+=6}a.addGroup(p,O,E),p+=O,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const r in i)e[r]=i[r]}return e}function vM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hv(n){return n.getRenderTarget()===null?n.outputColorSpace:$e.workingColorSpace}const yM={clone:Ws,merge:Zt};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=vM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vv extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Vv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,os=1;class MM extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(ss,os,e,t);r.layers=this.layers,this.add(r);const s=new Jt(ss,os,e,t);s.layers=this.layers,this.add(s);const o=new Jt(ss,os,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ss,os,e,t);a.layers=this.layers,this.add(a);const l=new Jt(ss,os,e,t);l.layers=this.layers,this.add(l);const u=new Jt(ss,os,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gv extends It{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?ut:Cn),this.texture=new Gv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new la(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:tr});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=on),new MM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const mc=new P,TM=new P,AM=new He;class zi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=mc.subVectors(i,t).cross(TM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AM.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Yn,qa=new P;class Fd{constructor(e=new zi,t=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-h).normalize(),i[1].setComponents(l+s,d+u,m+p,x+h).normalize(),i[2].setComponents(l+o,d+c,m+_,x+v).normalize(),i[3].setComponents(l-o,d-c,m-_,x-v).normalize(),i[4].setComponents(l-a,d-f,m-y,x-g).normalize(),t===Si)i[5].setComponents(l+a,d+f,m+y,x+g).normalize();else if(t===Yl)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;n.bindBuffer(f,u),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class kd extends oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],_=[],y=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let g=0;g<u;g++){const x=g*f-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+u*h,x=v+u*(h+1),S=v+1+u*(h+1),R=v+1+u*h;p.push(g,x,R),p.push(x,S,R)}this.setIndex(p),this.setAttribute("position",new Ti(_,3)),this.setAttribute("normal",new Ti(y,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.width,e.height,e.widthSegments,e.heightSegments)}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,DT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:RM,alphahash_pars_fragment:bM,alphamap_fragment:CM,alphamap_pars_fragment:LM,alphatest_fragment:PM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:IM,begin_vertex:UM,beginnormal_vertex:OM,bsdfs:FM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:jM,color_vertex:YM,common:qM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:$M,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:uE,fog_fragment:cE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_fragment:hE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:yE,lights_toon_pars_fragment:xE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:wE,lights_fragment_end:RE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:PE,map_fragment:DE,map_pars_fragment:NE,map_particle_fragment:IE,map_particle_pars_fragment:UE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:FE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:oT,shadowmap_pars_vertex:aT,shadowmap_vertex:lT,shadowmask_pars_fragment:uT,skinbase_vertex:cT,skinning_pars_vertex:fT,skinning_vertex:dT,skinnormal_vertex:hT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:_T,transmission_fragment:vT,transmission_pars_fragment:yT,uv_pars_fragment:xT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:AT,backgroundCube_vert:wT,backgroundCube_frag:RT,cube_vert:bT,cube_frag:CT,depth_vert:LT,depth_frag:PT,distanceRGBA_vert:DT,distanceRGBA_frag:NT,equirect_vert:IT,equirect_frag:UT,linedashed_vert:OT,linedashed_frag:FT,meshbasic_vert:kT,meshbasic_frag:BT,meshlambert_vert:zT,meshlambert_frag:HT,meshmatcap_vert:VT,meshmatcap_frag:GT,meshnormal_vert:WT,meshnormal_frag:XT,meshphong_vert:jT,meshphong_frag:YT,meshphysical_vert:qT,meshphysical_frag:KT,meshtoon_vert:$T,meshtoon_frag:ZT,points_vert:QT,points_frag:JT,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},le={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Zn={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:Zt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ka={r:0,b:0,g:0};function rA(n,e,t,i,r,s,o){const a=new we(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===fu)?(c===void 0&&(c=new Pn(new la(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Ws(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=$e.getTransfer(g.colorSpace)!==ot,(f!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Pn(new kd(2,2),new kr({name:"BackgroundMaterial",uniforms:Ws(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=$e.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Ka,Hv(n)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function sA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(I,H,$,q,O){let G=!1;if(o){const B=y(q,$,H);u!==B&&(u=B,p(u.object)),G=h(I,q,$,O),G&&v(I,q,$,O)}else{const B=H.wireframe===!0;(u.geometry!==q.id||u.program!==$.id||u.wireframe!==B)&&(u.geometry=q.id,u.program=$.id,u.wireframe=B,G=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,L(I,H,$,q),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,H,$){const q=$.wireframe===!0;let O=a[I.id];O===void 0&&(O={},a[I.id]=O);let G=O[H.id];G===void 0&&(G={},O[H.id]=G);let B=G[q];return B===void 0&&(B=m(d()),G[q]=B),B}function m(I){const H=[],$=[],q=[];for(let O=0;O<r;O++)H[O]=0,$[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:q,object:I,attributes:{},index:null}}function h(I,H,$,q){const O=u.attributes,G=H.attributes;let B=0;const N=$.getAttributes();for(const F in N)if(N[F].location>=0){const ce=O[F];let de=G[F];if(de===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;B++}return u.attributesNum!==B||u.index!==q}function v(I,H,$,q){const O={},G=H.attributes;let B=0;const N=$.getAttributes();for(const F in N)if(N[F].location>=0){let ce=G[F];ce===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));const de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),O[F]=de,B++}u.attributes=O,u.attributesNum=B,u.index=q}function g(){const I=u.newAttributes;for(let H=0,$=I.length;H<$;H++)I[H]=0}function x(I){S(I,0)}function S(I,H){const $=u.newAttributes,q=u.enabledAttributes,O=u.attributeDivisors;$[I]=1,q[I]===0&&(n.enableVertexAttribArray(I),q[I]=1),O[I]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),O[I]=H)}function R(){const I=u.newAttributes,H=u.enabledAttributes;for(let $=0,q=H.length;$<q;$++)H[$]!==I[$]&&(n.disableVertexAttribArray($),H[$]=0)}function T(I,H,$,q,O,G,B){B===!0?n.vertexAttribIPointer(I,H,$,O,G):n.vertexAttribPointer(I,H,$,q,O,G)}function L(I,H,$,q){if(i.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const O=q.attributes,G=$.getAttributes(),B=H.defaultAttributeValues;for(const N in G){const F=G[N];if(F.location>=0){let ue=O[N];if(ue===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const ce=ue.normalized,de=ue.itemSize,ye=t.get(ue);if(ye===void 0)continue;const Ne=ye.buffer,Re=ye.type,De=ye.bytesPerElement,rt=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||ue.gpuType===Mv);if(ue.isInterleavedBufferAttribute){const ke=ue.data,k=ke.stride,zt=ue.offset;if(ke.isInstancedInterleavedBuffer){for(let Me=0;Me<F.locationSize;Me++)S(F.location+Me,ke.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Me=0;Me<F.locationSize;Me++)x(F.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Me=0;Me<F.locationSize;Me++)T(F.location+Me,de/F.locationSize,Re,ce,k*De,(zt+de/F.locationSize*Me)*De,rt)}else{if(ue.isInstancedBufferAttribute){for(let ke=0;ke<F.locationSize;ke++)S(F.location+ke,ue.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<F.locationSize;ke++)x(F.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ke=0;ke<F.locationSize;ke++)T(F.location+ke,de/F.locationSize,Re,ce,de*De,de/F.locationSize*ke*De,rt)}}else if(B!==void 0){const ce=B[N];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(F.location,ce);break;case 3:n.vertexAttrib3fv(F.location,ce);break;case 4:n.vertexAttrib4fv(F.location,ce);break;default:n.vertexAttrib1fv(F.location,ce)}}}}R()}function E(){Y();for(const I in a){const H=a[I];for(const $ in H){const q=H[$];for(const O in q)_(q[O].object),delete q[O];delete H[$]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const $ in H){const q=H[$];for(const O in q)_(q[O].object),delete q[O];delete H[$]}delete a[I.id]}function V(I){for(const H in a){const $=a[H];if($[I.id]===void 0)continue;const q=$[I.id];for(const O in q)_(q[O].object),delete q[O];delete $[I.id]}}function Y(){Q(),c=!0,u!==l&&(u=l,p(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:x,disableUnusedAttributes:R}}function oA(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function aA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,x=o||e.has("OES_texture_float"),S=g&&x,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:R}}function lA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let x=h.clippingState||null;l.value=x,x=c(_,d,g,p);for(let S=0;S!==g;++S)x[S]=t[S];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function uA(n){let e=new WeakMap;function t(o,a){return a===wf?o.mapping=ks:a===Rf&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wf||a===Rf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new EM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bd extends Vv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ss=4,um=[.125,.215,.35,.446,.526,.582],Sr=20,gc=new Bd,cm=new we;let _c=null,vc=0,yc=0;const yr=(1+Math.sqrt(5))/2,as=1/yr,fm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yr,as),new P(0,yr,-as),new P(as,0,yr),new P(-as,0,yr),new P(yr,as,0),new P(-yr,as,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Jo,format:bn,colorSpace:Bt,depthBuffer:!1},r=hm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cA(s)),this._blurMaterial=fA(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(cm),c.toneMapping=nr,c.autoClear=!1;const p=new Ar({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Pn(new la,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(cm),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const g=this._cubeSize;$a(r,v*g,h>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ks||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fm[(r-1)%fm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Pn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const h=[];let v=0;for(let T=0;T<Sr;++T){const L=T/y,E=Math.exp(-L*L/2);h.push(E),T===0?v+=E:T<m&&(v+=2*E)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const x=this._sizeLods[r],S=3*x*(r>g-Ss?r-g+Ss:0),R=4*(this._cubeSize-x);$a(t,S,R,3*x,2*x),l.setRenderTarget(t),l.render(f,gc)}}function cA(n){const e=[],t=[],i=[];let r=n;const s=n-Ss+1+um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ss?l=um[o-n+Ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,L=R>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(E,y*_*R),g.set(d,m*_*R);const w=[R,R,R,R,R,R];x.set(w,h*_*R)}const S=new oi;S.setAttribute("position",new tn(v,y)),S.setAttribute("uv",new tn(g,m)),S.setAttribute("faceIndex",new tn(x,h)),e.push(S),r>Ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hm(n,e,t){const i=new Fr(n,e,t);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fA(n,e,t){const i=new Float32Array(Sr),r=new P(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function pm(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function mm(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===wf||l===Rf,c=l===ks||l===Bs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new dm(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new dm(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pA(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const S=v[g+0],R=v[g+1],T=v[g+2];d.push(S,R,R,T,T,S)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const S=g+0,R=g+1,T=g+2;d.push(S,R,R,T,T,S)}}else return;const m=new(Nv(d)?zv:Bv)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function mA(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,a,d*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function gA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _A(n,e){return n[0]-e[0]}function vA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let H=function(){Q.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),S===!0&&(E=3);let w=c.attributes.position.count*E,V=1;w>e.maxTextureSize&&(V=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Y=new Float32Array(w*V*4*y),Q=new Ov(Y,w,V,y);Q.type=xi,Q.needsUpdate=!0;const I=E*4;for(let $=0;$<y;$++){const q=R[$],O=T[$],G=L[$],B=w*V*4*$;for(let N=0;N<q.count;N++){const F=N*I;g===!0&&(o.fromBufferAttribute(q,N),Y[B+F+0]=o.x,Y[B+F+1]=o.y,Y[B+F+2]=o.z,Y[B+F+3]=0),x===!0&&(o.fromBufferAttribute(O,N),Y[B+F+4]=o.x,Y[B+F+5]=o.y,Y[B+F+6]=o.z,Y[B+F+7]=0),S===!0&&(o.fromBufferAttribute(G,N),Y[B+F+8]=o.x,Y[B+F+9]=o.y,Y[B+F+10]=o.z,Y[B+F+11]=G.itemSize===4?o.w:1)}}m={count:y,texture:Q,size:new Pe(w,V)},s.set(c,m),c.addEventListener("dispose",H)}let h=0;for(let g=0;g<d.length;g++)h+=d[g];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<_;x++){const S=y[x];S[0]=x,S[1]=d[x]}y.sort(vA);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(_A);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const S=a[x],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+x)!==m[R]&&c.setAttribute("morphTarget"+x,m[R]),h&&c.getAttribute("morphNormal"+x)!==h[R]&&c.setAttribute("morphNormal"+x,h[R]),r[x]=T,v+=T):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Xv=new It,jv=new Ov,Yv=new oM,qv=new Gv,gm=[],_m=[],vm=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pu(n,e){let t=_m[e];t===void 0&&(t=new Int32Array(e),_m[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function AA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),Rt(t,i)}}function wA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;ym.set(i),n.uniformMatrix3fv(this.addr,!1,ym),Rt(t,i)}}function RA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;vm.set(i),n.uniformMatrix4fv(this.addr,!1,vm),Rt(t,i)}}function bA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function LA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function DA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function OA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Xv,r)}function FA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yv,r)}function kA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qv,r)}function BA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jv,r)}function zA(n){switch(n){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return bA;case 35667:case 35671:return CA;case 35668:case 35672:return LA;case 35669:case 35673:return PA;case 5125:return DA;case 36294:return NA;case 36295:return IA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(n,e){n.uniform1fv(this.addr,e)}function VA(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function GA(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function WA(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function XA(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jA(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YA(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qA(n,e){n.uniform1iv(this.addr,e)}function KA(n,e){n.uniform2iv(this.addr,e)}function $A(n,e){n.uniform3iv(this.addr,e)}function ZA(n,e){n.uniform4iv(this.addr,e)}function QA(n,e){n.uniform1uiv(this.addr,e)}function JA(n,e){n.uniform2uiv(this.addr,e)}function ew(n,e){n.uniform3uiv(this.addr,e)}function tw(n,e){n.uniform4uiv(this.addr,e)}function nw(n,e,t){const i=this.cache,r=e.length,s=pu(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xv,s[o])}function iw(n,e,t){const i=this.cache,r=e.length,s=pu(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yv,s[o])}function rw(n,e,t){const i=this.cache,r=e.length,s=pu(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qv,s[o])}function sw(n,e,t){const i=this.cache,r=e.length,s=pu(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jv,s[o])}function ow(n){switch(n){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return XA;case 35675:return jA;case 35676:return YA;case 5124:case 35670:return qA;case 35667:case 35671:return KA;case 35668:case 35672:return $A;case 35669:case 35673:return ZA;case 5125:return QA;case 36294:return JA;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}class aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=zA(t.type)}}class lw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ow(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function Sm(n,e){n.seq.push(e),n.map[e.id]=e}function cw(n,e,t){const i=n.name,r=i.length;for(xc.lastIndex=0;;){const s=xc.exec(i),o=xc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sm(t,u===void 0?new aw(a,n,e):new lw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new uw(a),Sm(t,f)),t=f}}}class _l{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fw=37297;let dw=0;function hw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pw(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===jl&&t===Xl?i="LinearDisplayP3ToLinearSRGB":e===Xl&&t===jl&&(i="LinearSRGBToLinearDisplayP3"),n){case Bt:case du:return[i,"LinearTransferOETF"];case ut:case Ud:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Em(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hw(n.getShaderSource(e),o)}else return r}function mw(n,e){const t=pw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gw(n,e){let t;switch(e){case pS:t="Linear";break;case mS:t="Reinhard";break;case gS:t="OptimizedCineon";break;case _S:t="ACESFilmic";break;case vS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _w(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function vw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Eo(n){return n!==""}function Tm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(n){return n.replace(xw,Mw)}const Sw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mw(n,e){let t=Be[e];if(t===void 0){const i=Sw.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nf(t)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(n){return n.replace(Ew,Tw)}function Tw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Aw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yv:e="ENVMAP_BLENDING_MULTIPLY";break;case dS:e="ENVMAP_BLENDING_MIX";break;case hS:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Lw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Aw(t),u=ww(t),c=Rw(t),f=bw(t),d=Cw(t),p=t.isWebGL2?"":_w(t),_=vw(s),y=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),h.length>0&&(h+=`
`)):(m=[Rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),h=[p,Rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Be.tonemapping_pars_fragment:"",t.toneMapping!==nr?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Nf(o),o=Tm(o,t),o=Am(o,t),a=Nf(a),a=Tm(a,t),a=Am(a,t),o=wm(o),a=wm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,x=v+h+a,S=Mm(r,r.VERTEX_SHADER,g),R=Mm(r,r.FRAGMENT_SHADER,x);r.attachShader(y,S),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(V){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(y).trim(),Q=r.getShaderInfoLog(S).trim(),I=r.getShaderInfoLog(R).trim();let H=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,S,R);else{const q=Em(r,S,"vertex"),O=Em(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+q+`
`+O)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Q===""||I==="")&&($=!1);$&&(V.diagnostics={runnable:H,programLog:Y,vertexShader:{log:Q,prefix:m},fragmentShader:{log:I,prefix:h}})}r.deleteShader(S),r.deleteShader(R),L=new _l(r,y),E=yw(r,y)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,fw)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=R,this}let Pw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nw(e),t.set(e,i)),i}}class Nw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(n,e,t,i,r,s,o){const a=new Fv,l=new Dw,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,w,V,Y,Q){const I=Y.fog,H=Q.geometry,$=E.isMeshStandardMaterial?Y.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),O=q&&q.mapping===fu?q.image.height:null,G=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,N=B!==void 0?B.length:0;let F=0;H.morphAttributes.position!==void 0&&(F=1),H.morphAttributes.normal!==void 0&&(F=2),H.morphAttributes.color!==void 0&&(F=3);let ue,ce,de,ye;if(G){const xt=Zn[G];ue=xt.vertexShader,ce=xt.fragmentShader}else ue=E.vertexShader,ce=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const Ne=n.getRenderTarget(),Re=Q.isInstancedMesh===!0,De=!!E.map,rt=!!E.matcap,ke=!!q,k=!!E.aoMap,zt=!!E.lightMap,Me=!!E.bumpMap,be=!!E.normalMap,Ce=!!E.displacementMap,lt=!!E.emissiveMap,Oe=!!E.metalnessMap,Ie=!!E.roughnessMap,qe=E.anisotropy>0,yt=E.clearcoat>0,bt=E.iridescence>0,b=E.sheen>0,M=E.transmission>0,z=qe&&!!E.anisotropyMap,ne=yt&&!!E.clearcoatMap,J=yt&&!!E.clearcoatNormalMap,ie=yt&&!!E.clearcoatRoughnessMap,_e=bt&&!!E.iridescenceMap,oe=bt&&!!E.iridescenceThicknessMap,fe=b&&!!E.sheenColorMap,C=b&&!!E.sheenRoughnessMap,se=!!E.specularMap,Z=!!E.specularColorMap,Te=!!E.specularIntensityMap,ve=M&&!!E.transmissionMap,Ee=M&&!!E.thicknessMap,ge=!!E.gradientMap,pe=!!E.alphaMap,We=E.alphaTest>0,D=!!E.alphaHash,ae=!!E.extensions,ee=!!H.attributes.uv1,K=!!H.attributes.uv2,re=!!H.attributes.uv3;let Se=nr;return E.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Se=n.toneMapping),{isWebGL2:c,shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:ce,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:Re,instancingColor:Re&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Bt,map:De,matcap:rt,envMap:ke,envMapMode:ke&&q.mapping,envMapCubeUVHeight:O,aoMap:k,lightMap:zt,bumpMap:Me,normalMap:be,displacementMap:d&&Ce,emissiveMap:lt,normalMapObjectSpace:be&&E.normalMapType===NS,normalMapTangentSpace:be&&E.normalMapType===Lv,metalnessMap:Oe,roughnessMap:Ie,anisotropy:qe,anisotropyMap:z,clearcoat:yt,clearcoatMap:ne,clearcoatNormalMap:J,clearcoatRoughnessMap:ie,iridescence:bt,iridescenceMap:_e,iridescenceThicknessMap:oe,sheen:b,sheenColorMap:fe,sheenRoughnessMap:C,specularMap:se,specularColorMap:Z,specularIntensityMap:Te,transmission:M,transmissionMap:ve,thicknessMap:Ee,gradientMap:ge,opaque:E.transparent===!1&&E.blending===bs,alphaMap:pe,alphaTest:We,alphaHash:D,combine:E.combine,mapUv:De&&y(E.map.channel),aoMapUv:k&&y(E.aoMap.channel),lightMapUv:zt&&y(E.lightMap.channel),bumpMapUv:Me&&y(E.bumpMap.channel),normalMapUv:be&&y(E.normalMap.channel),displacementMapUv:Ce&&y(E.displacementMap.channel),emissiveMapUv:lt&&y(E.emissiveMap.channel),metalnessMapUv:Oe&&y(E.metalnessMap.channel),roughnessMapUv:Ie&&y(E.roughnessMap.channel),anisotropyMapUv:z&&y(E.anisotropyMap.channel),clearcoatMapUv:ne&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:C&&y(E.sheenRoughnessMap.channel),specularMapUv:se&&y(E.specularMap.channel),specularColorMapUv:Z&&y(E.specularColorMap.channel),specularIntensityMapUv:Te&&y(E.specularIntensityMap.channel),transmissionMapUv:ve&&y(E.transmissionMap.channel),thicknessMapUv:Ee&&y(E.thicknessMap.channel),alphaMapUv:pe&&y(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:K,vertexUv3s:re,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(De||pe),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:F,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jn,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)w.push(V),w.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(v(w,E),g(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function g(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const w=_[E.type];let V;if(w){const Y=Zn[w];V=yM.clone(Y.uniforms)}else V=E.uniforms;return V}function S(E,w){let V;for(let Y=0,Q=u.length;Y<Q;Y++){const I=u[Y];if(I.cacheKey===w){V=I,++V.usedTimes;break}}return V===void 0&&(V=new Lw(n,w,E,s),u.push(V)),V}function R(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:L}}function Uw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ow(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||Ow),i.length>1&&i.sort(d||bm),r.length>1&&r.sort(d||bm)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Fw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cm,n.set(i,[o])):r>=s.length?(o=new Cm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new we};break;case"SpotLight":t={position:new P,direction:new P,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Bw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zw=0;function Hw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vw(n,e){const t=new kw,i=Bw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new P);const s=new P,o=new Ve,a=new Ve;function l(c,f){let d=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,m=0,h=0,v=0,g=0,x=0,S=0,R=0,T=0,L=0,E=0;c.sort(Hw);const w=f===!0?Math.PI:1;for(let Y=0,Q=c.length;Y<Q;Y++){const I=c[Y],H=I.color,$=I.intensity,q=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*$*w,p+=H.g*$*w,_+=H.b*$*w;else if(I.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(I.sh.coefficients[G],$);E++}else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const B=I.shadow,N=i.get(I);N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,r.directionalShadow[y]=N,r.directionalShadowMap[y]=O,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=G,y++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(H).multiplyScalar($*w),G.distance=q,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,r.spot[h]=G;const B=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,B.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[h]=B.matrix,I.castShadow){const N=i.get(I);N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,r.spotShadow[h]=N,r.spotShadowMap[h]=O,R++}h++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(H).multiplyScalar($),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=G,v++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),G.distance=I.distance,G.decay=I.decay,I.castShadow){const B=I.shadow,N=i.get(I);N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=I.shadow.matrix,S++}r.point[m]=G,m++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar($*w),G.groundColor.copy(I.groundColor).multiplyScalar($*w),r.hemi[g]=G,g++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==y||V.pointLength!==m||V.spotLength!==h||V.rectAreaLength!==v||V.hemiLength!==g||V.numDirectionalShadows!==x||V.numPointShadows!==S||V.numSpotShadows!==R||V.numSpotMaps!==T||V.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=E,V.directionalLength=y,V.pointLength=m,V.spotLength=h,V.rectAreaLength=v,V.hemiLength=g,V.numDirectionalShadows=x,V.numPointShadows=S,V.numSpotShadows=R,V.numSpotMaps=T,V.numLightProbes=E,r.version=zw++)}function u(c,f){let d=0,p=0,_=0,y=0,m=0;const h=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const x=c[v];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),d++}else if(x.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Lm(n,e){const t=new Vw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Gw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Lm(n,e),t.set(s,[l])):o>=a.length?(l=new Lm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ww extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(n,e,t){let i=new Fd;const r=new Pe,s=new Pe,o=new tt,a=new Ww({depthPacking:DS}),l=new Xw,u={},c=t.maxTextureSize,f={[Ci]:fn,[fn]:Ci,[Jn]:Jn},d=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:jw,fragmentShader:Yw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new oi;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vv;let h=this.type;this.render=function(S,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),V=n.state;V.setBlending(tr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=h!==mi&&this.type===mi,Q=h===mi&&this.type!==mi;for(let I=0,H=S.length;I<H;I++){const $=S[I],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const O=q.getFrameExtents();if(r.multiply(O),s.copy(q.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,q.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,q.mapSize.y=s.y)),q.map===null||Y===!0||Q===!0){const B=this.type!==mi?{minFilter:Dt,magFilter:Dt}:{};q.map!==null&&q.map.dispose(),q.map=new Fr(r.x,r.y,B),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const G=q.getViewportCount();for(let B=0;B<G;B++){const N=q.getViewport(B);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),V.viewport(o),q.updateMatrices($,B),i=q.getFrustum(),x(R,T,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===mi&&v(q,T),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(L,E,w)};function v(S,R){const T=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Fr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,T,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,T,p,y,null)}function g(S,R,T,L){let E=null;const w=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)E=w;else if(E=T.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=E.uuid,Y=R.uuid;let Q=u[V];Q===void 0&&(Q={},u[V]=Q);let I=Q[Y];I===void 0&&(I=E.clone(),Q[Y]=I),E=I}if(E.visible=R.visible,E.wireframe=R.wireframe,L===mi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=n.properties.get(E);V.light=T}return E}function x(S,R,T,L,E){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),Q=S.material;if(Array.isArray(Q)){const I=Y.groups;for(let H=0,$=I.length;H<$;H++){const q=I[H],O=Q[q.materialIndex];if(O&&O.visible){const G=g(S,O,L,E);n.renderBufferDirect(T,null,Y,G,S,q)}}}else if(Q.visible){const I=g(S,Q,L,E);n.renderBufferDirect(T,null,Y,I,S,null)}}const V=S.children;for(let Y=0,Q=V.length;Y<Q;Y++)x(V[Y],R,T,L,E)}}function Kw(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ae=new tt;let ee=null;const K=new tt(0,0,0,0);return{setMask:function(re){ee!==re&&!D&&(n.colorMask(re,re,re,re),ee=re)},setLocked:function(re){D=re},setClear:function(re,Se,Xe,xt,Mn){Mn===!0&&(re*=xt,Se*=xt,Xe*=xt),ae.set(re,Se,Xe,xt),K.equals(ae)===!1&&(n.clearColor(re,Se,Xe,xt),K.copy(ae))},reset:function(){D=!1,ee=null,K.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,ee=null,K=null;return{setTest:function(re){re?De(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(re){ae!==re&&!D&&(n.depthMask(re),ae=re)},setFunc:function(re){if(ee!==re){switch(re){case sS:n.depthFunc(n.NEVER);break;case oS:n.depthFunc(n.ALWAYS);break;case aS:n.depthFunc(n.LESS);break;case Vl:n.depthFunc(n.LEQUAL);break;case lS:n.depthFunc(n.EQUAL);break;case uS:n.depthFunc(n.GEQUAL);break;case cS:n.depthFunc(n.GREATER);break;case fS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=re}},setLocked:function(re){D=re},setClear:function(re){K!==re&&(n.clearDepth(re),K=re)},reset:function(){D=!1,ae=null,ee=null,K=null}}}function o(){let D=!1,ae=null,ee=null,K=null,re=null,Se=null,Xe=null,xt=null,Mn=null;return{setTest:function(nt){D||(nt?De(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!D&&(n.stencilMask(nt),ae=nt)},setFunc:function(nt,qt,qn){(ee!==nt||K!==qt||re!==qn)&&(n.stencilFunc(nt,qt,qn),ee=nt,K=qt,re=qn)},setOp:function(nt,qt,qn){(Se!==nt||Xe!==qt||xt!==qn)&&(n.stencilOp(nt,qt,qn),Se=nt,Xe=qt,xt=qn)},setLocked:function(nt){D=nt},setClear:function(nt){Mn!==nt&&(n.clearStencil(nt),Mn=nt)},reset:function(){D=!1,ae=null,ee=null,K=null,re=null,Se=null,Xe=null,xt=null,Mn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,S=null,R=null,T=null,L=null,E=new we(0,0,0),w=0,V=!1,Y=null,Q=null,I=null,H=null,$=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=G>=2);let N=null,F={};const ue=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),de=new tt().fromArray(ue),ye=new tt().fromArray(ce);function Ne(D,ae,ee,K){const re=new Uint8Array(4),Se=n.createTexture();n.bindTexture(D,Se),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ee;Xe++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ae+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Se}const Re={};Re[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(Vl),Oe(!1),Ie(up),De(n.CULL_FACE),Ce(tr);function De(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function rt(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function ke(D,ae){return p[D]!==ae?(n.bindFramebuffer(D,ae),p[D]=ae,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(D,ae){let ee=y,K=!1;if(D)if(ee=_.get(ae),ee===void 0&&(ee=[],_.set(ae,ee)),D.isWebGLMultipleRenderTargets){const re=D.texture;if(ee.length!==re.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Xe=re.length;Se<Xe;Se++)ee[Se]=n.COLOR_ATTACHMENT0+Se;ee.length=re.length,K=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,K=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,K=!0);K&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function zt(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Me={[xr]:n.FUNC_ADD,[Wx]:n.FUNC_SUBTRACT,[Xx]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[hp]=n.MIN,Me[pp]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[hp]=D.MIN_EXT,Me[pp]=D.MAX_EXT)}const be={[jx]:n.ZERO,[Yx]:n.ONE,[qx]:n.SRC_COLOR,[Tf]:n.SRC_ALPHA,[eS]:n.SRC_ALPHA_SATURATE,[Qx]:n.DST_COLOR,[$x]:n.DST_ALPHA,[Kx]:n.ONE_MINUS_SRC_COLOR,[Af]:n.ONE_MINUS_SRC_ALPHA,[Jx]:n.ONE_MINUS_DST_COLOR,[Zx]:n.ONE_MINUS_DST_ALPHA,[tS]:n.CONSTANT_COLOR,[nS]:n.ONE_MINUS_CONSTANT_COLOR,[iS]:n.CONSTANT_ALPHA,[rS]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(D,ae,ee,K,re,Se,Xe,xt,Mn,nt){if(D===tr){h===!0&&(rt(n.BLEND),h=!1);return}if(h===!1&&(De(n.BLEND),h=!0),D!==Gx){if(D!==v||nt!==V){if((g!==xr||R!==xr)&&(n.blendEquation(n.FUNC_ADD),g=xr,R=xr),nt)switch(D){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFunc(n.ONE,n.ONE);break;case fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,S=null,T=null,L=null,E.set(0,0,0),w=0,v=D,V=nt}return}re=re||ae,Se=Se||ee,Xe=Xe||K,(ae!==g||re!==R)&&(n.blendEquationSeparate(Me[ae],Me[re]),g=ae,R=re),(ee!==x||K!==S||Se!==T||Xe!==L)&&(n.blendFuncSeparate(be[ee],be[K],be[Se],be[Xe]),x=ee,S=K,T=Se,L=Xe),(xt.equals(E)===!1||Mn!==w)&&(n.blendColor(xt.r,xt.g,xt.b,Mn),E.copy(xt),w=Mn),v=D,V=!1}function lt(D,ae){D.side===Jn?rt(n.CULL_FACE):De(n.CULL_FACE);let ee=D.side===fn;ae&&(ee=!ee),Oe(ee),D.blending===bs&&D.transparent===!1?Ce(tr):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const K=D.stencilWrite;u.setTest(K),K&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){Y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Y=D)}function Ie(D){D!==zx?(De(n.CULL_FACE),D!==Q&&(D===up?n.cullFace(n.BACK):D===Hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),Q=D}function qe(D){D!==I&&(O&&n.lineWidth(D),I=D)}function yt(D,ae,ee){D?(De(n.POLYGON_OFFSET_FILL),(H!==ae||$!==ee)&&(n.polygonOffset(ae,ee),H=ae,$=ee)):rt(n.POLYGON_OFFSET_FILL)}function bt(D){D?De(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function b(D){D===void 0&&(D=n.TEXTURE0+q-1),N!==D&&(n.activeTexture(D),N=D)}function M(D,ae,ee){ee===void 0&&(N===null?ee=n.TEXTURE0+q-1:ee=N);let K=F[ee];K===void 0&&(K={type:void 0,texture:void 0},F[ee]=K),(K.type!==D||K.texture!==ae)&&(N!==ee&&(n.activeTexture(ee),N=ee),n.bindTexture(D,ae||Re[D]),K.type=D,K.texture=ae)}function z(){const D=F[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){de.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function Ee(D){ye.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function ge(D,ae){let ee=f.get(ae);ee===void 0&&(ee=new WeakMap,f.set(ae,ee));let K=ee.get(D);K===void 0&&(K=n.getUniformBlockIndex(ae,D.name),ee.set(D,K))}function pe(D,ae){const K=f.get(ae).get(D);c.get(ae)!==K&&(n.uniformBlockBinding(ae,K,D.__bindingPointIndex),c.set(ae,K))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},N=null,F={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,S=null,R=null,T=null,L=null,E=new we(0,0,0),w=0,V=!1,Y=null,Q=null,I=null,H=null,$=null,de.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:rt,bindFramebuffer:ke,drawBuffers:k,useProgram:zt,setBlending:Ce,setMaterial:lt,setFlipSided:Oe,setCullFace:Ie,setLineWidth:qe,setPolygonOffset:yt,setScissorTest:bt,activeTexture:b,bindTexture:M,unbindTexture:z,compressedTexImage2D:ne,compressedTexImage3D:J,texImage2D:Z,texImage3D:Te,updateUBOMapping:ge,uniformBlockBinding:pe,texStorage2D:C,texStorage3D:se,texSubImage2D:ie,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:ve,viewport:Ee,reset:We}}function $w(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return h?new OffscreenCanvas(b,M):ta("canvas")}function g(b,M,z,ne){let J=1;if((b.width>ne||b.height>ne)&&(J=ne/Math.max(b.width,b.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=M?ql:Math.floor,_e=ie(J*b.width),oe=ie(J*b.height);y===void 0&&(y=v(_e,oe));const fe=z?v(_e,oe):y;return fe.width=_e,fe.height=oe,fe.getContext("2d").drawImage(b,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+oe+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return Df(b.width)&&Df(b.height)}function S(b){return a?!1:b.wrapS!==Rn||b.wrapT!==Rn||b.minFilter!==Dt&&b.minFilter!==on}function R(b,M){return b.generateMipmaps&&M&&b.minFilter!==Dt&&b.minFilter!==on}function T(b){n.generateMipmap(b)}function L(b,M,z,ne,J=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=M;if(M===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),M===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8)),M===n.RGBA){const _e=J?Wl:$e.getTransfer(ne);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=_e===ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(b,M,z){return R(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){return b===Dt||b===bf||b===gl?n.NEAREST:n.LINEAR}function V(b){const M=b.target;M.removeEventListener("dispose",V),Q(M),M.isVideoTexture&&_.delete(M)}function Y(b){const M=b.target;M.removeEventListener("dispose",Y),H(M)}function Q(b){const M=i.get(b);if(M.__webglInit===void 0)return;const z=b.source,ne=m.get(z);if(ne){const J=ne[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(b),Object.keys(ne).length===0&&m.delete(z)}i.remove(b)}function I(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const z=b.source,ne=m.get(z);delete ne[M.__cacheKey],o.memory.textures--}function H(b){const M=b.texture,z=i.get(b),ne=i.get(M);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(z.__webglFramebuffer[J]))for(let ie=0;ie<z.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(z.__webglFramebuffer[J]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[J])}else{if(Array.isArray(z.__webglFramebuffer))for(let J=0;J<z.__webglFramebuffer.length;J++)n.deleteFramebuffer(z.__webglFramebuffer[J]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let J=0;J<z.__webglColorRenderbuffer.length;J++)z.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[J]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ie=M.length;J<ie;J++){const _e=i.get(M[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(b)}let $=0;function q(){$=0}function O(){const b=$;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),$+=1,b}function G(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function B(b,M){const z=i.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(z,b,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function N(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){De(z,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function F(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){De(z,b,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function ue(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){rt(z,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const ce={[zs]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},de={[Dt]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[gl]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Sv]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},ye={[IS]:n.NEVER,[HS]:n.ALWAYS,[US]:n.LESS,[FS]:n.LEQUAL,[OS]:n.EQUAL,[zS]:n.GEQUAL,[kS]:n.GREATER,[BS]:n.NOTEQUAL};function Ne(b,M,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,ce[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ce[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ce[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[M.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Rn||M.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(M.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Dt&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Dt||M.minFilter!==gl&&M.minFilter!==Or||M.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Jo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Re(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",V));const ne=M.source;let J=m.get(ne);J===void 0&&(J={},m.set(ne,J));const ie=G(M);if(ie!==b.__cacheKey){J[ie]===void 0&&(J[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ie].usedTimes++;const _e=J[b.__cacheKey];_e!==void 0&&(J[b.__cacheKey].usedTimes--,_e.usedTimes===0&&I(M)),b.__cacheKey=ie,b.__webglTexture=J[ie].texture}return z}function De(b,M,z){let ne=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=n.TEXTURE_3D);const J=Re(b,M),ie=M.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+z);const _e=i.get(ie);if(ie.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const oe=$e.getPrimaries($e.workingColorSpace),fe=M.colorSpace===Cn?null:$e.getPrimaries(M.colorSpace),C=M.colorSpace===Cn||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const se=S(M)&&x(M.image)===!1;let Z=g(M.image,se,!1,c);Z=bt(M,Z);const Te=x(Z)||a,ve=s.convert(M.format,M.colorSpace);let Ee=s.convert(M.type),ge=L(M.internalFormat,ve,Ee,M.colorSpace,M.isVideoTexture);Ne(ne,M,Te);let pe;const We=M.mipmaps,D=a&&M.isVideoTexture!==!0,ae=_e.__version===void 0||J===!0,ee=E(M,Z,Te);if(M.isDepthTexture)ge=n.DEPTH_COMPONENT,a?M.type===xi?ge=n.DEPTH_COMPONENT32F:M.type===ji?ge=n.DEPTH_COMPONENT24:M.type===Cr?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:M.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Lr&&ge===n.DEPTH_COMPONENT&&M.type!==Id&&M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ji,Ee=s.convert(M.type)),M.format===Hs&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,M.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Cr,Ee=s.convert(M.type))),ae&&(D?t.texStorage2D(n.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,ve,Ee,null));else if(M.isDataTexture)if(We.length>0&&Te){D&&ae&&t.texStorage2D(n.TEXTURE_2D,ee,ge,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)pe=We[K],D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,pe.width,pe.height,ve,Ee,pe.data):t.texImage2D(n.TEXTURE_2D,K,ge,pe.width,pe.height,0,ve,Ee,pe.data);M.generateMipmaps=!1}else D?(ae&&t.texStorage2D(n.TEXTURE_2D,ee,ge,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,ve,Ee,Z.data)):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,ve,Ee,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ge,We[0].width,We[0].height,Z.depth);for(let K=0,re=We.length;K<re;K++)pe=We[K],M.format!==bn?ve!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,Z.depth,ve,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ge,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,Z.depth,ve,Ee,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ge,pe.width,pe.height,Z.depth,0,ve,Ee,pe.data)}else{D&&ae&&t.texStorage2D(n.TEXTURE_2D,ee,ge,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)pe=We[K],M.format!==bn?ve!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,pe.width,pe.height,ve,Ee,pe.data):t.texImage2D(n.TEXTURE_2D,K,ge,pe.width,pe.height,0,ve,Ee,pe.data)}else if(M.isDataArrayTexture)D?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ve,Ee,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,ve,Ee,Z.data);else if(M.isData3DTexture)D?(ae&&t.texStorage3D(n.TEXTURE_3D,ee,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ve,Ee,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,ve,Ee,Z.data);else if(M.isFramebufferTexture){if(ae)if(D)t.texStorage2D(n.TEXTURE_2D,ee,ge,Z.width,Z.height);else{let K=Z.width,re=Z.height;for(let Se=0;Se<ee;Se++)t.texImage2D(n.TEXTURE_2D,Se,ge,K,re,0,ve,Ee,null),K>>=1,re>>=1}}else if(We.length>0&&Te){D&&ae&&t.texStorage2D(n.TEXTURE_2D,ee,ge,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)pe=We[K],D?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,Ee,pe):t.texImage2D(n.TEXTURE_2D,K,ge,ve,Ee,pe);M.generateMipmaps=!1}else D?(ae&&t.texStorage2D(n.TEXTURE_2D,ee,ge,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ee,Z)):t.texImage2D(n.TEXTURE_2D,0,ge,ve,Ee,Z);R(M,Te)&&T(ne),_e.__version=ie.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function rt(b,M,z){if(M.image.length!==6)return;const ne=Re(b,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const ie=i.get(J);if(J.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const _e=$e.getPrimaries($e.workingColorSpace),oe=M.colorSpace===Cn?null:$e.getPrimaries(M.colorSpace),fe=M.colorSpace===Cn||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const C=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let K=0;K<6;K++)!C&&!se?Z[K]=g(M.image[K],!1,!0,u):Z[K]=se?M.image[K].image:M.image[K],Z[K]=bt(M,Z[K]);const Te=Z[0],ve=x(Te)||a,Ee=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),pe=L(M.internalFormat,Ee,ge,M.colorSpace),We=a&&M.isVideoTexture!==!0,D=ie.__version===void 0||ne===!0;let ae=E(M,Te,ve);Ne(n.TEXTURE_CUBE_MAP,M,ve);let ee;if(C){We&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,pe,Te.width,Te.height);for(let K=0;K<6;K++){ee=Z[K].mipmaps;for(let re=0;re<ee.length;re++){const Se=ee[re];M.format!==bn?Ee!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Se.width,Se.height,Ee,ge,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,pe,Se.width,Se.height,0,Ee,ge,Se.data)}}}else{ee=M.mipmaps,We&&D&&(ee.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,pe,Z[0].width,Z[0].height));for(let K=0;K<6;K++)if(se){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Z[K].width,Z[K].height,Ee,ge,Z[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,Z[K].width,Z[K].height,0,Ee,ge,Z[K].data);for(let re=0;re<ee.length;re++){const Xe=ee[re].image[K].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Xe.width,Xe.height,Ee,ge,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,pe,Xe.width,Xe.height,0,Ee,ge,Xe.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ge,Z[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,Ee,ge,Z[K]);for(let re=0;re<ee.length;re++){const Se=ee[re];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Ee,ge,Se.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,pe,Ee,ge,Se.image[K])}}}R(M,ve)&&T(n.TEXTURE_CUBE_MAP),ie.__version=J.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ke(b,M,z,ne,J,ie){const _e=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),fe=L(z.internalFormat,_e,oe,z.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>ie),Z=Math.max(1,M.height>>ie);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,fe,se,Z,M.depth,0,_e,oe,null):t.texImage2D(J,ie,fe,se,Z,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),qe(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,i.get(z).__webglTexture,0,Ie(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,i.get(z).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(b,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||qe(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===xi?ne=n.DEPTH_COMPONENT32F:J.type===ji&&(ne=n.DEPTH_COMPONENT24));const ie=Ie(M);qe(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ne=Ie(M);z&&qe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,M.width,M.height):qe(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<ne.length;J++){const ie=ne[J],_e=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),fe=L(ie.internalFormat,_e,oe,ie.colorSpace),C=Ie(M);z&&qe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,fe,M.width,M.height):qe(M)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,fe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,fe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,J=Ie(M);if(M.depthTexture.format===Lr)qe(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Hs)qe(M)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Me(b){const M=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");zt(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=n.createRenderbuffer(),k(M.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),k(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,M,z){const ne=i.get(b);M!==void 0&&ke(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Me(b)}function Ce(b){const M=b.texture,z=i.get(b),ne=i.get(M);b.addEventListener("dispose",Y),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=M.version,o.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,_e=x(b)||a;if(J){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else z.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)z.__webglFramebuffer[oe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const oe=b.texture;for(let fe=0,C=oe.length;fe<C;fe++){const se=i.get(oe[fe]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&qe(b)===!1){const oe=ie?M:[M];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const C=oe[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const se=s.convert(C.format,C.colorSpace),Z=s.convert(C.type),Te=L(C.internalFormat,se,Z,C.colorSpace,b.isXRRenderTarget===!0),ve=Ie(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Te,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),k(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M,_e);for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ke(z.__webglFramebuffer[oe][fe],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ke(z.__webglFramebuffer[oe],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);R(M,_e)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=b.texture;for(let fe=0,C=oe.length;fe<C;fe++){const se=oe[fe],Z=i.get(se);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),Ne(n.TEXTURE_2D,se,_e),ke(z.__webglFramebuffer,b,se,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),R(se,_e)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),Ne(oe,M,_e),a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)ke(z.__webglFramebuffer[fe],b,M,n.COLOR_ATTACHMENT0,oe,fe);else ke(z.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,oe,0);R(M,_e)&&T(oe),t.unbindTexture()}b.depthBuffer&&Me(b)}function lt(b){const M=x(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,J=z.length;ne<J;ne++){const ie=z[ne];if(R(ie,M)){const _e=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(ie).__webglTexture;t.bindTexture(_e,oe),T(_e),t.unbindTexture()}}}function Oe(b){if(a&&b.samples>0&&qe(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let J=n.COLOR_BUFFER_BIT;const ie=[],_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let C=0;C<M.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let C=0;C<M.length;C++){ie.push(n.COLOR_ATTACHMENT0+C),b.depthBuffer&&ie.push(_e);const se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(se===!1&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),fe){const Z=i.get(M[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,J,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let C=0;C<M.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]);const se=i.get(M[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ie(b){return Math.min(f,b.samples)}function qe(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(b){const M=o.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function bt(b,M){const z=b.colorSpace,ne=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Pf||z!==Bt&&z!==Cn&&($e.getTransfer(z)===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===bn?(b.format=Pf,b.minFilter=on,b.generateMipmaps=!1):M=Iv.sRGBToLinear(M):(ne!==bn||J!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=O,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=ue,this.rebindTextures=be,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=qe}function Zw(n,e,t){const i=t.isWebGL2;function r(s,o=Cn){let a;const l=$e.getTransfer(o);if(s===ir)return n.UNSIGNED_BYTE;if(s===Ev)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Tv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===xS)return n.BYTE;if(s===SS)return n.SHORT;if(s===Id)return n.UNSIGNED_SHORT;if(s===Mv)return n.INT;if(s===ji)return n.UNSIGNED_INT;if(s===xi)return n.FLOAT;if(s===Jo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===MS)return n.ALPHA;if(s===bn)return n.RGBA;if(s===ES)return n.LUMINANCE;if(s===TS)return n.LUMINANCE_ALPHA;if(s===Lr)return n.DEPTH_COMPONENT;if(s===Hs)return n.DEPTH_STENCIL;if(s===Pf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===AS)return n.RED;if(s===Av)return n.RED_INTEGER;if(s===wS)return n.RG;if(s===wv)return n.RG_INTEGER;if(s===Rv)return n.RGBA_INTEGER;if(s===Yu||s===qu||s===Ku||s===$u)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ku)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$u)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gp||s===_p||s===vp||s===yp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_p)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===RS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xp||s===Sp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xp)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Sp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mp||s===Ep||s===Tp||s===Ap||s===wp||s===Rp||s===bp||s===Cp||s===Lp||s===Pp||s===Dp||s===Np||s===Ip||s===Up)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Mp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ep)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ap)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Np)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zu||s===Op||s===Fp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zu)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bS||s===kp||s===Bp||s===zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Qw extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class e1 extends It{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Lr,c!==Lr&&c!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Lr&&(i=ji),i===void 0&&c===Hs&&(i=Cr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t1 extends Vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const y=t.getContextAttributes();let m=null,h=null;const v=[],g=[],x=new Jt;x.layers.enable(1),x.viewport=new tt;const S=new Jt;S.layers.enable(2),S.viewport=new tt;const R=[x,S],T=new Qw;T.layers.enable(1),T.layers.enable(2);let L=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let F=v[N];return F===void 0&&(F=new Sc,v[N]=F),F.getTargetRaySpace()},this.getControllerGrip=function(N){let F=v[N];return F===void 0&&(F=new Sc,v[N]=F),F.getGripSpace()},this.getHand=function(N){let F=v[N];return F===void 0&&(F=new Sc,v[N]=F),F.getHandSpace()};function w(N){const F=g.indexOf(N.inputSource);if(F===-1)return;const ue=v[F];ue!==void 0&&(ue.update(N.inputSource,N.frame,u||o),ue.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let N=0;N<v.length;N++){const F=g[N];F!==null&&(g[N]=null,v[N].disconnect(F))}L=null,E=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:p}),h=new Fr(p.framebufferWidth,p.framebufferHeight,{format:bn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let F=null,ue=null,ce=null;y.depth&&(ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=y.stencil?Hs:Lr,ue=y.stencil?Cr:ji);const de={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),h=new Fr(d.textureWidth,d.textureHeight,{format:bn,type:ir,depthTexture:new e1(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(N){for(let F=0;F<N.removed.length;F++){const ue=N.removed[F],ce=g.indexOf(ue);ce>=0&&(g[ce]=null,v[ce].disconnect(ue))}for(let F=0;F<N.added.length;F++){const ue=N.added[F];let ce=g.indexOf(ue);if(ce===-1){for(let ye=0;ye<v.length;ye++)if(ye>=g.length){g.push(ue),ce=ye;break}else if(g[ye]===null){g[ye]=ue,ce=ye;break}if(ce===-1)break}const de=v[ce];de&&de.connect(ue)}}const Q=new P,I=new P;function H(N,F,ue){Q.setFromMatrixPosition(F.matrixWorld),I.setFromMatrixPosition(ue.matrixWorld);const ce=Q.distanceTo(I),de=F.projectionMatrix.elements,ye=ue.projectionMatrix.elements,Ne=de[14]/(de[10]-1),Re=de[14]/(de[10]+1),De=(de[9]+1)/de[5],rt=(de[9]-1)/de[5],ke=(de[8]-1)/de[0],k=(ye[8]+1)/ye[0],zt=Ne*ke,Me=Ne*k,be=ce/(-ke+k),Ce=be*-ke;F.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ce),N.translateZ(be),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const lt=Ne+be,Oe=Re+be,Ie=zt-Ce,qe=Me+(ce-Ce),yt=De*Re/Oe*lt,bt=rt*Re/Oe*lt;N.projectionMatrix.makePerspective(Ie,qe,yt,bt,lt,Oe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function $(N,F){F===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(F.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;T.near=S.near=x.near=N.near,T.far=S.far=x.far=N.far,(L!==T.near||E!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,E=T.far);const F=N.parent,ue=T.cameras;$(T,F);for(let ce=0;ce<ue.length;ce++)$(ue[ce],F);ue.length===2?H(T,x,S):T.projectionMatrix.copy(x.projectionMatrix),q(N,T,F)};function q(N,F,ue){ue===null?N.matrix.copy(F.matrixWorld):(N.matrix.copy(ue.matrixWorld),N.matrix.invert(),N.matrix.multiply(F.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(F.projectionMatrix),N.projectionMatrixInverse.copy(F.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Gs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let O=null;function G(N,F){if(c=F.getViewerPose(u||o),_=F,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;ue.length!==T.cameras.length&&(T.cameras.length=0,ce=!0);for(let de=0;de<ue.length;de++){const ye=ue[de];let Ne=null;if(p!==null)Ne=p.getViewport(ye);else{const De=f.getViewSubImage(d,ye);Ne=De.viewport,de===0&&(e.setRenderTargetTextures(h,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(h))}let Re=R[de];Re===void 0&&(Re=new Jt,Re.layers.enable(de),Re.viewport=new tt,R[de]=Re),Re.matrix.fromArray(ye.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ye.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),de===0&&(T.matrix.copy(Re.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ce===!0&&T.cameras.push(Re)}}for(let ue=0;ue<v.length;ue++){const ce=g[ue],de=v[ue];ce!==null&&de!==void 0&&de.update(ce,F,u||o)}O&&O(N,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const B=new Wv;B.setAnimationLoop(G),this.setAnimationLoop=function(N){O=N},this.dispose=function(){}}}function n1(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Hv(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===fn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function u(v,g){let x=r[v.id];x===void 0&&(_(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const S=g.program;i.updateUBOMapping(v,S);const R=e.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function c(v){const g=f();v.__bindingPointIndex=g;const x=n.createBuffer(),S=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],x=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,T=x.length;R<T;R++){const L=x[R];if(p(L,R,S)===!0){const E=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let Y=0;Y<w.length;Y++){const Q=w[Y],I=y(Q);typeof Q=="number"?(L.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,E+V,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=Q.elements[0],L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=Q.elements[0],L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=Q.elements[0]):(Q.toArray(L.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,x){const S=v.value;if(x[g]===void 0){if(typeof S=="number")x[g]=S;else{const R=Array.isArray(S)?S:[S],T=[];for(let L=0;L<R.length;L++)T.push(R[L].clone());x[g]=T}return!0}else if(typeof S=="number"){if(x[g]!==S)return x[g]=S,!0}else{const R=Array.isArray(x[g])?x[g]:[x[g]],T=Array.isArray(S)?S:[S];for(let L=0;L<R.length;L++){const E=R[L];if(E.equals(T[L])===!1)return E.copy(T[L]),!0}}return!1}function _(v){const g=v.uniforms;let x=0;const S=16;let R=0;for(let T=0,L=g.length;T<L;T++){const E=g[T],w={boundary:0,storage:0},V=Array.isArray(E.value)?E.value:[E.value];for(let Y=0,Q=V.length;Y<Q;Y++){const I=V[Y],H=y(I);w.boundary+=H.boundary,w.storage+=H.storage}if(E.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,T>0){R=x%S;const Y=S-R;R!==0&&Y-w.boundary<0&&(x+=S-R,E.__offset=x)}x+=w.storage}return R=x%S,R>0&&(x+=S-R),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Kv{constructor(e={}){const{canvas:t=tM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const g=this;let x=!1,S=0,R=0,T=null,L=-1,E=null;const w=new tt,V=new tt;let Y=null;const Q=new we(0);let I=0,H=t.width,$=t.height,q=1,O=null,G=null;const B=new tt(0,0,H,$),N=new tt(0,0,H,$);let F=!1;const ue=new Fd;let ce=!1,de=!1,ye=null;const Ne=new Ve,Re=new Pe,De=new P,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return T===null?q:1}let k=i;function zt(A,U){for(let W=0;W<A.length;W++){const X=A[W],j=t.getContext(X,U);if(j!==null)return j}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),k=zt(U,A),k===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,be,Ce,lt,Oe,Ie,qe,yt,bt,b,M,z,ne,J,ie,_e,oe,fe,C,se,Z,Te,ve,Ee;function ge(){Me=new hA(k),be=new aA(k,Me,e),Me.init(be),Te=new Zw(k,Me,be),Ce=new Kw(k,Me,be),lt=new gA(k),Oe=new Uw,Ie=new $w(k,Me,Ce,Oe,be,Te,lt),qe=new uA(g),yt=new dA(g),bt=new wM(k,be),ve=new sA(k,Me,bt,be),b=new pA(k,bt,lt,ve),M=new xA(k,b,bt,lt),C=new yA(k,be,Ie),_e=new lA(Oe),z=new Iw(g,qe,yt,Me,be,ve,_e),ne=new n1(g,Oe),J=new Fw,ie=new Gw(Me,be),fe=new rA(g,qe,yt,Ce,M,d,l),oe=new qw(g,M,be),Ee=new i1(k,lt,be,Ce),se=new oA(k,Me,lt,be),Z=new mA(k,Me,lt,be),lt.programs=z.programs,g.capabilities=be,g.extensions=Me,g.properties=Oe,g.renderLists=J,g.shadowMap=oe,g.state=Ce,g.info=lt}ge();const pe=new t1(g,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,U,W=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=U,t.width=Math.floor(A*q),t.height=Math.floor(U*q),W===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(H*q,$*q).floor()},this.setDrawingBufferSize=function(A,U,W){H=A,$=U,q=W,t.width=Math.floor(A*W),t.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,U,W,X){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,U,W,X),Ce.viewport(w.copy(B).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,U,W,X){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,U,W,X),Ce.scissor(V.copy(N).multiplyScalar(q).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(A){Ce.setScissorTest(F=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(A=!0,U=!0,W=!0){let X=0;if(A){let j=!1;if(T!==null){const he=T.texture.format;j=he===Rv||he===wv||he===Av}if(j){const he=T.texture.type,xe=he===ir||he===ji||he===Id||he===Cr||he===Ev||he===Tv,Ae=fe.getClearColor(),Le=fe.getClearAlpha(),ze=Ae.r,Ue=Ae.g,Fe=Ae.b;xe?(p[0]=ze,p[1]=Ue,p[2]=Fe,p[3]=Le,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=ze,_[1]=Ue,_[2]=Fe,_[3]=Le,k.clearBufferiv(k.COLOR,0,_))}else X|=k.COLOR_BUFFER_BIT}U&&(X|=k.DEPTH_BUFFER_BIT),W&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),J.dispose(),ie.dispose(),Oe.dispose(),qe.dispose(),yt.dispose(),M.dispose(),ve.dispose(),Ee.dispose(),z.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Mn),pe.removeEventListener("sessionend",nt),ye&&(ye.dispose(),ye=null),qt.stop()};function We(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=lt.autoReset,U=oe.enabled,W=oe.autoUpdate,X=oe.needsUpdate,j=oe.type;ge(),lt.autoReset=A,oe.enabled=U,oe.autoUpdate=W,oe.needsUpdate=X,oe.type=j}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const U=A.target;U.removeEventListener("dispose",ee),K(U)}function K(A){re(A),Oe.remove(A)}function re(A){const U=Oe.get(A).programs;U!==void 0&&(U.forEach(function(W){z.releaseProgram(W)}),A.isShaderMaterial&&z.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,X,j,he){U===null&&(U=rt);const xe=j.isMesh&&j.matrixWorld.determinant()<0,Ae=o0(A,U,W,X,j);Ce.setMaterial(X,xe);let Le=W.index,ze=1;if(X.wireframe===!0){if(Le=b.getWireframeAttribute(W),Le===void 0)return;ze=2}const Ue=W.drawRange,Fe=W.attributes.position;let _t=Ue.start*ze,dn=(Ue.start+Ue.count)*ze;he!==null&&(_t=Math.max(_t,he.start*ze),dn=Math.min(dn,(he.start+he.count)*ze)),Le!==null?(_t=Math.max(_t,0),dn=Math.min(dn,Le.count)):Fe!=null&&(_t=Math.max(_t,0),dn=Math.min(dn,Fe.count));const Ct=dn-_t;if(Ct<0||Ct===1/0)return;ve.setup(j,X,Ae,W,Le);let li,mt=se;if(Le!==null&&(li=bt.get(Le),mt=Z,mt.setIndex(li)),j.isMesh)X.wireframe===!0?(Ce.setLineWidth(X.wireframeLinewidth*ke()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(j.isLine){let je=X.linewidth;je===void 0&&(je=1),Ce.setLineWidth(je*ke()),j.isLineSegments?mt.setMode(k.LINES):j.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else j.isPoints?mt.setMode(k.POINTS):j.isSprite&&mt.setMode(k.TRIANGLES);if(j.isInstancedMesh)mt.renderInstances(_t,Ct,j.count);else if(W.isInstancedBufferGeometry){const je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_u=Math.min(W.instanceCount,je);mt.renderInstances(_t,Ct,_u)}else mt.render(_t,Ct)};function Se(A,U,W){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,fa(A,U,W),A.side=Ci,A.needsUpdate=!0,fa(A,U,W),A.side=Jn):fa(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),m=ie.get(W),m.init(),v.push(m),W.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),A!==W&&A.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(g._useLegacyLights);const X=new Set;return A.traverse(function(j){const he=j.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ae=he[xe];Se(Ae,W,j),X.add(Ae)}else Se(he,W,j),X.add(he)}),v.pop(),m=null,X},this.compileAsync=function(A,U,W=null){const X=this.compile(A,U,W);return new Promise(j=>{function he(){if(X.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){j(A);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function xt(A){Xe&&Xe(A)}function Mn(){qt.stop()}function nt(){qt.start()}const qt=new Wv;qt.setAnimationLoop(xt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){Xe=A,pe.setAnimationLoop(A),A===null?qt.stop():qt.start()},pe.addEventListener("sessionstart",Mn),pe.addEventListener("sessionend",nt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,U,T),m=ie.get(A,v.length),m.init(),v.push(m),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ue.setFromProjectionMatrix(Ne),de=this.localClippingEnabled,ce=_e.init(this.clippingPlanes,de),y=J.get(A,h.length),y.init(),h.push(y),qn(A,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(O,G),this.info.render.frame++,ce===!0&&_e.beginShadows();const W=m.state.shadowsArray;if(oe.render(W,A,U),ce===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(y,A),m.setupLights(g._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let j=0,he=X.length;j<he;j++){const xe=X[j];Yd(y,A,xe,xe.viewport)}}else Yd(y,A,U);T!==null&&(Ie.updateMultisampleRenderTarget(T),Ie.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,U),ve.resetDefaultState(),L=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function qn(A,U,W,X){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){X&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ne);const xe=M.update(A),Ae=A.material;Ae.visible&&y.push(A,xe,Ae,W,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const xe=M.update(A),Ae=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ae)){const Le=xe.groups;for(let ze=0,Ue=Le.length;ze<Ue;ze++){const Fe=Le[ze],_t=Ae[Fe.materialIndex];_t&&_t.visible&&y.push(A,xe,_t,W,De.z,Fe)}}else Ae.visible&&y.push(A,xe,Ae,W,De.z,null)}}const he=A.children;for(let xe=0,Ae=he.length;xe<Ae;xe++)qn(he[xe],U,W,X)}function Yd(A,U,W,X){const j=A.opaque,he=A.transmissive,xe=A.transparent;m.setupLightsView(W),ce===!0&&_e.setGlobalState(g.clippingPlanes,W),he.length>0&&s0(j,he,U,W),X&&Ce.viewport(w.copy(X)),j.length>0&&ca(j,U,W),he.length>0&&ca(he,U,W),xe.length>0&&ca(xe,U,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function s0(A,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const he=be.isWebGL2;ye===null&&(ye=new Fr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Jo:ir,minFilter:Or,samples:he?4:0})),g.getDrawingBufferSize(Re),he?ye.setSize(Re.x,Re.y):ye.setSize(ql(Re.x),ql(Re.y));const xe=g.getRenderTarget();g.setRenderTarget(ye),g.getClearColor(Q),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Ae=g.toneMapping;g.toneMapping=nr,ca(A,W,X),Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye);let Le=!1;for(let ze=0,Ue=U.length;ze<Ue;ze++){const Fe=U[ze],_t=Fe.object,dn=Fe.geometry,Ct=Fe.material,li=Fe.group;if(Ct.side===Jn&&_t.layers.test(X.layers)){const mt=Ct.side;Ct.side=fn,Ct.needsUpdate=!0,qd(_t,W,X,dn,Ct,li),Ct.side=mt,Ct.needsUpdate=!0,Le=!0}}Le===!0&&(Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye)),g.setRenderTarget(xe),g.setClearColor(Q,I),g.toneMapping=Ae}function ca(A,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let j=0,he=A.length;j<he;j++){const xe=A[j],Ae=xe.object,Le=xe.geometry,ze=X===null?xe.material:X,Ue=xe.group;Ae.layers.test(W.layers)&&qd(Ae,U,W,Le,ze,Ue)}}function qd(A,U,W,X,j,he){A.onBeforeRender(g,U,W,X,j,he),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(g,U,W,X,A,he),j.transparent===!0&&j.side===Jn&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,g.renderBufferDirect(W,U,X,j,A,he),j.side=Ci,j.needsUpdate=!0,g.renderBufferDirect(W,U,X,j,A,he),j.side=Jn):g.renderBufferDirect(W,U,X,j,A,he),A.onAfterRender(g,U,W,X,j,he)}function fa(A,U,W){U.isScene!==!0&&(U=rt);const X=Oe.get(A),j=m.state.lights,he=m.state.shadowsArray,xe=j.state.version,Ae=z.getParameters(A,j.state,he,U,W),Le=z.getProgramCacheKey(Ae);let ze=X.programs;X.environment=A.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(A.isMeshStandardMaterial?yt:qe).get(A.envMap||X.environment),ze===void 0&&(A.addEventListener("dispose",ee),ze=new Map,X.programs=ze);let Ue=ze.get(Le);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===xe)return $d(A,Ae),Ue}else Ae.uniforms=z.getUniforms(A),A.onBuild(W,Ae,g),A.onBeforeCompile(Ae,g),Ue=z.acquireProgram(Ae,Le),ze.set(Le,Ue),X.uniforms=Ae.uniforms;const Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=_e.uniform),$d(A,Ae),X.needsLights=l0(A),X.lightsStateVersion=xe,X.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function Kd(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=_l.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function $d(A,U){const W=Oe.get(A);W.outputColorSpace=U.outputColorSpace,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function o0(A,U,W,X,j){U.isScene!==!0&&(U=rt),Ie.resetTextureUnits();const he=U.fog,xe=X.isMeshStandardMaterial?U.environment:null,Ae=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bt,Le=(X.isMeshStandardMaterial?yt:qe).get(X.envMap||xe),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,_t=!!W.morphAttributes.normal,dn=!!W.morphAttributes.color;let Ct=nr;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=g.toneMapping);const li=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=li!==void 0?li.length:0,je=Oe.get(X),_u=m.state.lights;if(ce===!0&&(de===!0||A!==E)){const hn=A===E&&X.id===L;_e.setState(X,A,hn)}let St=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==_u.state.version||je.outputColorSpace!==Ae||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==Le||X.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==_e.numPlanes||je.numIntersection!==_e.numIntersection)||je.vertexAlphas!==ze||je.vertexTangents!==Ue||je.morphTargets!==Fe||je.morphNormals!==_t||je.morphColors!==dn||je.toneMapping!==Ct||be.isWebGL2===!0&&je.morphTargetsCount!==mt)&&(St=!0):(St=!0,je.__version=X.version);let cr=je.currentProgram;St===!0&&(cr=fa(X,U,j));let Zd=!1,to=!1,vu=!1;const Kt=cr.getUniforms(),fr=je.uniforms;if(Ce.useProgram(cr.program)&&(Zd=!0,to=!0,vu=!0),X.id!==L&&(L=X.id,to=!0),Zd||E!==A){Kt.setValue(k,"projectionMatrix",A.projectionMatrix),Kt.setValue(k,"viewMatrix",A.matrixWorldInverse);const hn=Kt.map.cameraPosition;hn!==void 0&&hn.setValue(k,De.setFromMatrixPosition(A.matrixWorld)),be.logarithmicDepthBuffer&&Kt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Kt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,to=!0,vu=!0)}if(j.isSkinnedMesh){Kt.setOptional(k,j,"bindMatrix"),Kt.setOptional(k,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(be.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Kt.setValue(k,"boneTexture",hn.boneTexture,Ie),Kt.setValue(k,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yu=W.morphAttributes;if((yu.position!==void 0||yu.normal!==void 0||yu.color!==void 0&&be.isWebGL2===!0)&&C.update(j,W,cr),(to||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Kt.setValue(k,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(fr.envMap.value=Le,fr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),to&&(Kt.setValue(k,"toneMappingExposure",g.toneMappingExposure),je.needsLights&&a0(fr,vu),he&&X.fog===!0&&ne.refreshFogUniforms(fr,he),ne.refreshMaterialUniforms(fr,X,q,$,ye),_l.upload(k,Kd(je),fr,Ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_l.upload(k,Kd(je),fr,Ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Kt.setValue(k,"center",j.center),Kt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Kt.setValue(k,"normalMatrix",j.normalMatrix),Kt.setValue(k,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const hn=X.uniformsGroups;for(let xu=0,u0=hn.length;xu<u0;xu++)if(be.isWebGL2){const Qd=hn[xu];Ee.update(Qd,cr),Ee.bind(Qd,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function a0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function l0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,W){Oe.get(A.texture).__webglTexture=U,Oe.get(A.depthTexture).__webglTexture=W;const X=Oe.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const W=Oe.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){T=A,S=U,R=W;let X=!0,j=null,he=!1,xe=!1;if(A){const Le=Oe.get(A);Le.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Le.__webglFramebuffer===void 0?Ie.setupRenderTarget(A):Le.__hasExternalTextures&&Ie.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const Ue=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?j=Ue[U][W]:j=Ue[U],he=!0):be.isWebGL2&&A.samples>0&&Ie.useMultisampledRTT(A)===!1?j=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?j=Ue[W]:j=Ue,w.copy(A.viewport),V.copy(A.scissor),Y=A.scissorTest}else w.copy(B).multiplyScalar(q).floor(),V.copy(N).multiplyScalar(q).floor(),Y=F;if(Ce.bindFramebuffer(k.FRAMEBUFFER,j)&&be.drawBuffers&&X&&Ce.drawBuffers(A,j),Ce.viewport(w),Ce.scissor(V),Ce.setScissorTest(Y),he){const Le=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,W)}else if(xe){const Le=Oe.get(A.texture),ze=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,ze)}L=-1},this.readRenderTargetPixels=function(A,U,W,X,j,he,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){Ce.bindFramebuffer(k.FRAMEBUFFER,Ae);try{const Le=A.texture,ze=Le.format,Ue=Le.type;if(ze!==bn&&Te.convert(ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Jo&&(Me.has("EXT_color_buffer_half_float")||be.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ue!==ir&&Te.convert(Ue)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===xi&&(be.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-X&&W>=0&&W<=A.height-j&&k.readPixels(U,W,X,j,Te.convert(ze),Te.convert(Ue),he)}finally{const Le=T!==null?Oe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,U,W=0){const X=Math.pow(2,-W),j=Math.floor(U.image.width*X),he=Math.floor(U.image.height*X);Ie.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,A.x,A.y,j,he),Ce.unbindTexture()},this.copyTextureToTexture=function(A,U,W,X=0){const j=U.image.width,he=U.image.height,xe=Te.convert(W.format),Ae=Te.convert(W.type);Ie.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,A.x,A.y,j,he,xe,Ae,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,A.x,A.y,xe,Ae,U.image),X===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W,X,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Le=Te.convert(X.format),ze=Te.convert(X.type);let Ue;if(X.isData3DTexture)Ie.setTexture3D(X,0),Ue=k.TEXTURE_3D;else if(X.isDataArrayTexture)Ie.setTexture2DArray(X,0),Ue=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ct=k.getParameter(k.UNPACK_SKIP_ROWS),li=k.getParameter(k.UNPACK_SKIP_IMAGES),mt=W.isCompressedTexture?W.mipmaps[0]:W.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?k.texSubImage3D(Ue,j,U.x,U.y,U.z,he,xe,Ae,Le,ze,mt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ue,j,U.x,U.y,U.z,he,xe,Ae,Le,mt.data)):k.texSubImage3D(Ue,j,U.x,U.y,U.z,he,xe,Ae,Le,ze,mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,li),j===0&&X.generateMipmaps&&k.generateMipmap(Ue),Ce.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ie.setTextureCube(A,0):A.isData3DTexture?Ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ie.setTexture2DArray(A,0):Ie.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){S=0,R=0,T=null,Ce.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ud?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===du?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Ei:Cv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?ut:Bt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r1 extends Kv{}r1.prototype.isWebGL1Renderer=!0;class s1 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new P;class Hd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pm=new P,Dm=new tt,Nm=new tt,a1=new P,Im=new Ve,Za=new P,Mc=new Yn,Um=new Ve,Ec=new aa;class l1 extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mp,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(r),e.ray.intersectsSphere(Mc)!==!1&&(Um.copy(r).invert(),Ec.copy(e.ray).applyMatrix4(Um),!(this.boundingBox!==null&&Ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Dm.fromBufferAttribute(r.attributes.skinIndex,e),Nm.fromBufferAttribute(r.attributes.skinWeight,e),Pm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Nm.getComponent(s);if(o!==0){const a=Dm.getComponent(s);Im.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(a1.copy(Pm).applyMatrix4(Im),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $v extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class u1 extends It{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Dt,c=Dt,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Om=new Ve,c1=new Ve;class Vd{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:c1;Om.multiplyMatrices(a,t[s]),Om.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Vd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Pv(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new u1(t,e,e,bn,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new $v),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class If extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Ve,Fm=new Ve,Qa=[],km=new si,f1=new Ve,mo=new Pn,go=new Yn;class d1 extends Pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new If(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,f1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ls),km.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(km)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ls),go.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(i),e.ray.intersectsSphere(go)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),Fm.multiplyMatrices(i,ls),mo.matrixWorld=Fm,mo.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){const l=Qa[o];l.instanceId=s,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new If(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Zv extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bm=new P,zm=new P,Hm=new Ve,Tc=new aa,Ja=new Yn;class Gd extends ft{constructor(e=new oi,t=new Zv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bm.fromBufferAttribute(t,r-1),zm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bm.distanceTo(zm);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Hm.copy(r).invert(),Tc.copy(e.ray).applyMatrix4(Hm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new P,c=new P,f=new P,d=new P,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){const S=_.getX(g),R=_.getX(g+1);if(u.fromBufferAttribute(m,S),c.fromBufferAttribute(m,R),Tc.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),Tc.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vm=new P,Gm=new P;class h1 extends Gd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vm.fromBufferAttribute(t,r),Gm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vm.distanceTo(Gm);e.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p1 extends Gd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qv extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new Ve,Uf=new aa,el=new Yn,tl=new P;class m1 extends ft{constructor(e=new oi,t=new Qv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Wm.copy(r).invert(),Uf.copy(e.ray).applyMatrix4(Wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,y=p;_<y;_++){const m=u.getX(_);tl.fromBufferAttribute(f,m),Xm(tl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,y=p;_<y;_++)tl.fromBufferAttribute(f,_),Xm(tl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xm(n,e,t,i,r,s,o){const a=Uf.distanceSqToPoint(n);if(a<t){const l=new P;Uf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class g1 extends It{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mu extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lv,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ur extends mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function nl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function v1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function jm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Jv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ua{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class y1 extends ua{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hp,endingEnd:Hp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vp:s=e,a=2*t-i;break;case Gp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vp:o=e,l=2*i-t;break;case Gp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),y=_*_,m=y*_,h=-d*m+2*d*y-d*_,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*_+1,g=(-1-p)*m+(1.5+p)*y+.5*_,x=p*m-p*y;for(let S=0;S!==a;++S)s[S]=h*o[c+S]+v*o[u+S]+g*o[l+S]+x*o[f+S];return s}}class x1 extends ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let d=0;d!==a;++d)s[d]=o[u+d]*f+o[l+d]*c;return s}}class S1 extends ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nl(t,this.TimeBufferType),this.values=nl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nl(e.times,Array),values:nl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new S1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new y1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case Qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_1(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const y=t[f+_];if(y!==t[d+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Vs;class Qs extends ai{}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=ea;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class e0 extends ai{}e0.prototype.ValueTypeName="color";class Xs extends ai{}Xs.prototype.ValueTypeName="number";class M1 extends ua{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)ri.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Br extends ai{InterpolantFactoryMethodLinear(e){return new M1(this.times,this.values,this.getValueSize(),e)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.DefaultInterpolation=Vs;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends ai{}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=ea;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends ai{}js.prototype.ValueTypeName="vector";class E1{constructor(e,t=-1,i,r=CS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(A1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ai.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=v1(l);l=jm(l,1,c),u=jm(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,y){if(p.length!==0){const m=[],h=[];Jv(p,m,h,_),m.length!==0&&y.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let y=0;y<d[_].morphTargets.length;y++)p[d[_].morphTargets[y]]=-1;for(const y in p){const m=[],h=[];for(let v=0;v!==d[_].morphTargets.length;++v){const g=d[_];m.push(g.time),h.push(g.morphTarget===y?1:0)}r.push(new Xs(".morphTargetInfluence["+y+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(js,p+".position",d,"pos",r),i(Br,p+".quaternion",d,"rot",r),i(js,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function T1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return e0;case"quaternion":return Br;case"bool":case"boolean":return Qs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function A1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=T1(n.type);if(n.times===void 0){const t=[],i=[];Jv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ys={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class w1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const R1=new w1;class eo{constructor(e){this.manager=e!==void 0?e:R1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class b1 extends Error{constructor(e,t){super(e),this.response=t}}class t0 extends eo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ys.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:i,onError:r});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=pi[e],f=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let y=0;const m=new ReadableStream({start(h){v();function v(){f.read().then(({done:g,value:x})=>{if(g)h.close();else{y+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let R=0,T=c.length;R<T;R++){const L=c[R];L.onProgress&&L.onProgress(S)}h.enqueue(x),v()}})}}});return new Response(m)}else throw new b1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Ys.add(e,u);const c=pi[e];delete pi[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=pi[e];if(c===void 0)throw this.manager.itemError(e),u;delete pi[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class C1 extends eo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ys.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ta("img");function l(){c(),Ys.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class L1 extends eo{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new C1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class gu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class P1 extends gu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ac=new Ve,Ym=new P,qm=new P;class Wd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D1 extends Wd{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N1 extends gu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new D1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Km=new Ve,_o=new P,wc=new P;class I1 extends Wd{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),i.position.copy(_o),wc.copy(i.position),wc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wc),i.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),Km.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class U1 extends gu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new I1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O1 extends Wd{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends gu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Of{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class F1 extends eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ys.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ys.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Xd="\\[\\]\\.:\\/",k1=new RegExp("["+Xd+"]","g"),jd="[^"+Xd+"]",B1="[^"+Xd.replace("\\.","")+"]",z1=/((?:WC+[\/:])*)/.source.replace("WC",jd),H1=/(WCOD+)?/.source.replace("WCOD",B1),V1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jd),G1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jd),W1=new RegExp("^"+z1+H1+V1+G1+"$"),X1=["material","materials","bones","map"];class j1{constructor(e,t,i){const r=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k1,"")}static parseTrackName(e){const t=W1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);X1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=j1;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $m{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function Zm(n,e){if(e===LS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Cf||e===bv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Cf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Y1 extends eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q1(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new cR(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Of.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new t0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===i0){try{o[Ye.KHR_BINARY_GLTF]=new fR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new TR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(f){case Ye.KHR_MATERIALS_UNLIT:o[f]=new $1;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[f]=new dR(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[f]=new hR;break;case Ye.KHR_MESH_QUANTIZATION:o[f]=new pR;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function q1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new we(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Bt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new n0(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new U1(c),u.distance=f;break;case"spot":u=new N1(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Hi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class $1{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Ar}extendParams(e,t,i){const r=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,ut))}return Promise.all(r)}}class Z1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Q1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Bt),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class rR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ur}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class oR{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class aR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uR{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*f);return o.decodeGltfBuffer(new Uint8Array(p),c,f,d,r.mode,r.filter),p})})}else return null}}class cR{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==Tn.TRIANGLES&&u.mode!==Tn.TRIANGLE_STRIP&&u.mode!==Tn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],d=u[0].count,p=[];for(const _ of f){const y=new Ve,m=new P,h=new ri,v=new P(1,1,1),g=new d1(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),g.setMatrixAt(x,y.compose(m,h,v));for(const x in l)if(x==="_COLOR_0"){const S=l[x];g.instanceColor=new If(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);ft.prototype.copy.call(g,_),this.parser.assignFinalMaterial(g),p.push(g)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const i0="glTF",vo=12,Qm={JSON:1313821514,BIN:5130562};class fR{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==i0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-vo,s=new DataView(e,vo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Qm.JSON){const u=new Uint8Array(e,vo+o,a);this.content=i.decode(u)}else if(l===Qm.BIN){const u=vo+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const f=Ff[c]||c.toLowerCase();a[f]=o[c]}for(const c in e.attributes){const f=Ff[c]||c.toLowerCase();if(o[c]!==void 0){const d=i.accessors[e.attributes[c]],p=Ls[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f){r.decodeDracoFile(c,function(d){for(const p in d.attributes){const _=d.attributes[p],y=l[p];y!==void 0&&(_.normalized=y)}f(d)},a,u)})})}}class hR{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pR{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class r0 extends ua{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=r-t,f=(i-t)/c,d=f*f,p=d*f,_=e*u,y=_-u,m=-2*p+3*d,h=p-d,v=1-m,g=h-d+f;for(let x=0;x!==a;x++){const S=o[y+x+a],R=o[y+x+l]*c,T=o[_+x+a],L=o[_+x]*c;s[x]=v*S+g*R+m*T+h*L}return s}}const mR=new ri;class gR extends r0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return mR.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jm={9728:Dt,9729:on,9984:bf,9985:Sv,9986:gl,9987:Or},eg={33071:Rn,33648:Gl,10497:zs},Rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ff={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_R={CUBICSPLINE:void 0,LINEAR:Vs,STEP:ea},bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new mu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),n.DefaultMaterial}function gr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Hi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yR(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function xR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SR(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cc(t.attributes):e=n.indices+":"+Cc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Cc(n.targets[i]);return e}function Cc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function kf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ER=new Ve;class TR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new L1(this.options.manager):this.textureLoader=new F1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new t0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return gr(s,a,r),Hi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())s(c,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Of.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Rc[r.type],a=Ls[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new tn(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Rc[r.type],u=Ls[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let y,m;if(p&&p!==f){const h=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let g=t.cache.get(v);g||(y=new u(a,h*p,r.count*p/c),g=new o1(y,p/c),t.cache.add(v,g)),m=new Hd(g,l,d%p/c,_)}else a===null?y=new u(r.count*l):y=new u(a,d,r.count*l),m=new tn(y,l,_);if(r.sparse!==void 0){const h=Rc.SCALAR,v=Ls[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new v(o[1],g,r.sparse.count*h),R=new u(o[2],x,r.sparse.count*l);a!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized));for(let T=0,L=S.length;T<L;T++){const E=S[T];if(m.setX(E,R[T*l]),l>=2&&m.setY(E,R[T*l+1]),l>=3&&m.setZ(E,R[T*l+2]),l>=4&&m.setW(E,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return c.magFilter=Jm[d.magFilter]||on,c.minFilter=Jm[d.minFilter]||Or,c.wrapS=eg[d.wrapS]||zs,c.wrapT=eg[d.wrapT]||zs,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(y){const m=new It(y);m.needsUpdate=!0,d(m)}),t.load(Of.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return u===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||MR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qv,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Zv,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return mu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const f=r[Ye.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Bt),a.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",f.baseColorTexture,ut)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Jn);const c=s.alphaMode||bc.OPAQUE;if(c===bc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===bc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ar&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ar&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ar){const f=s.emissiveFactor;a.emissive=new we().setRGB(f[0],f[1],f[2],Bt)}return s.emissiveTexture!==void 0&&o!==Ar&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ut)),Promise.all(u).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Hi(f,s),t.associations.set(f,{materials:e}),s.extensions&&gr(r,f,s),f})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return tg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=SR(u),f=r[c];if(f)o.push(f.promise);else{let d;u.extensions&&u.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=tg(new oi,u,t),r[c]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?vR(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,_=c.length;p<_;p++){const y=c[p],m=o[p];let h;const v=u[p];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new l1(y,v):new Pn(y,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?h.geometry=Zm(h.geometry,bv):m.mode===Tn.TRIANGLE_FAN&&(h.geometry=Zm(h.geometry,Cf));else if(m.mode===Tn.LINES)h=new h1(y,v);else if(m.mode===Tn.LINE_STRIP)h=new Gd(y,v);else if(m.mode===Tn.LINE_LOOP)h=new p1(y,v);else if(m.mode===Tn.POINTS)h=new m1(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&xR(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Hi(h,s),m.extensions&&gr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&gr(r,f[0],s),f[0];const d=new wr;s.extensions&&gr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Dv.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Bd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Hi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const f=o[u];if(f){a.push(f);const d=new Ve;s!==null&&d.fromArray(s.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Vd(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],y=p.target,m=y.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),u.push(_),c.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(f){const d=f[0],p=f[1],_=f[2],y=f[3],m=f[4],h=[];for(let v=0,g=d.length;v<g;v++){const x=d[v],S=p[v],R=_[v],T=y[v],L=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=i._createAnimationTracks(x,S,R,T,L);if(E)for(let w=0;w<E.length;w++)h.push(E[w])}return new E1(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,c=a.length;u<c;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const c=u[0],f=u[1],d=u[2];d!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(d,ER)});for(let p=0,_=f.length;p<_;p++)c.add(f[p]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(s.isBone===!0?c=new $v:u.length>1?c=new wr:u.length===1?c=u[0]:c=new ft,c!==u[0])for(let f=0,d=u.length;f<d;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=o),Hi(c,s),s.extensions&&gr(i,c,s),s.matrix!==void 0){const f=new Ve;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new wr;i.name&&(s.name=r.createUniqueName(i.name)),Hi(s,i),i.extensions&&gr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,f=l.length;c<f;c++)s.add(l[c]);const u=c=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof ii||d instanceof It)&&f.set(d,p);return c.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(Fi[s.path]){case Fi.weights:u=Xs;break;case Fi.rotation:u=Br;break;case Fi.position:case Fi.scale:u=js;break;default:switch(i.itemSize){case 1:u=Xs;break;case 2:case 3:default:u=js;break}break}const c=r.interpolation!==void 0?_R[r.interpolation]:Vs,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const _=new u(l[d]+"."+Fi[s.path],t.array,f,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=kf(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Br?gR:r0;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AR(n,e,t){const i=e.attributes,r=new si;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(u[0],u[1],u[2])),a.normalized){const c=kf(Ls[a.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const y=kf(Ls[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Yn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function tg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Ff[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return $e.workingColorSpace!==Bt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Hi(n,e),AR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?yR(n,e.targets,t):n})}const ng={type:"change"},Lc={type:"start"},ig={type:"end"},il=new aa,rg=new zi,wR=Math.cos(70*Dv.DEG2RAD);class RR extends Vr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",M),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ng),i.update(),s=r.NONE},this.update=function(){const C=new P,se=new ri().setFromUnitVectors(e.up,new P(0,1,0)),Z=se.clone().invert(),Te=new P,ve=new ri,Ee=new P,ge=2*Math.PI;return function(We=null){const D=i.object.position;C.copy(D).sub(i.target),C.applyQuaternion(se),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&V(E(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ae=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(ae)&&isFinite(ee)&&(ae<-Math.PI?ae+=ge:ae>Math.PI&&(ae-=ge),ee<-Math.PI?ee+=ge:ee>Math.PI&&(ee-=ge),ae<=ee?a.theta=Math.max(ae,Math.min(ee,a.theta)):a.theta=a.theta>(ae+ee)/2?Math.max(ae,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=G(a.radius):a.radius=G(a.radius*u),C.setFromSpherical(a),C.applyQuaternion(Z),D.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let K=!1;if(i.zoomToCursor&&R){let re=null;if(i.object.isPerspectiveCamera){const Se=C.length();re=G(Se*u);const Xe=Se-re;i.object.position.addScaledVector(x,Xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Se=new P(S.x,S.y,0);Se.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),K=!0;const Xe=new P(S.x,S.y,0);Xe.unproject(i.object),i.object.position.sub(Xe).add(Se),i.object.updateMatrixWorld(),re=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(il.origin.copy(i.object.position),il.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(il.direction))<wR?e.lookAt(i.target):(rg.setFromNormalAndCoplanarPoint(i.object.up,i.target),il.intersectPlane(rg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),K=!0);return u=1,R=!1,K||Te.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||Ee.distanceToSquared(i.target)>0?(i.dispatchEvent(ng),Te.copy(i.object.position),ve.copy(i.object.quaternion),Ee.copy(i.target),K=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $m,l=new $m;let u=1;const c=new P,f=new Pe,d=new Pe,p=new Pe,_=new Pe,y=new Pe,m=new Pe,h=new Pe,v=new Pe,g=new Pe,x=new P,S=new Pe;let R=!1;const T=[],L={};function E(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function V(C){l.theta-=C}function Y(C){l.phi-=C}const Q=function(){const C=new P;return function(Z,Te){C.setFromMatrixColumn(Te,0),C.multiplyScalar(-Z),c.add(C)}}(),I=function(){const C=new P;return function(Z,Te){i.screenSpacePanning===!0?C.setFromMatrixColumn(Te,1):(C.setFromMatrixColumn(Te,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Z),c.add(C)}}(),H=function(){const C=new P;return function(Z,Te){const ve=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;C.copy(Ee).sub(i.target);let ge=C.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*Z*ge/ve.clientHeight,i.object.matrix),I(2*Te*ge/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(Z*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),I(Te*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(C){if(!i.zoomToCursor)return;R=!0;const se=i.domElement.getBoundingClientRect(),Z=C.clientX-se.left,Te=C.clientY-se.top,ve=se.width,Ee=se.height;S.x=Z/ve*2-1,S.y=-(Te/Ee)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function B(C){f.set(C.clientX,C.clientY)}function N(C){O(C),h.set(C.clientX,C.clientY)}function F(C){_.set(C.clientX,C.clientY)}function ue(C){d.set(C.clientX,C.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;V(2*Math.PI*p.x/se.clientHeight),Y(2*Math.PI*p.y/se.clientHeight),f.copy(d),i.update()}function ce(C){v.set(C.clientX,C.clientY),g.subVectors(v,h),g.y>0?$(w()):g.y<0&&q(w()),h.copy(v),i.update()}function de(C){y.set(C.clientX,C.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(y),i.update()}function ye(C){O(C),C.deltaY<0?q(w()):C.deltaY>0&&$(w()),i.update()}function Ne(C){let se=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),se=!0;break}se&&(C.preventDefault(),i.update())}function Re(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);f.set(C,se)}}function De(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);_.set(C,se)}}function rt(){const C=T[0].pageX-T[1].pageX,se=T[0].pageY-T[1].pageY,Z=Math.sqrt(C*C+se*se);h.set(0,Z)}function ke(){i.enableZoom&&rt(),i.enablePan&&De()}function k(){i.enableZoom&&rt(),i.enableRotate&&Re()}function zt(C){if(T.length==1)d.set(C.pageX,C.pageY);else{const Z=fe(C),Te=.5*(C.pageX+Z.x),ve=.5*(C.pageY+Z.y);d.set(Te,ve)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;V(2*Math.PI*p.x/se.clientHeight),Y(2*Math.PI*p.y/se.clientHeight),f.copy(d)}function Me(C){if(T.length===1)y.set(C.pageX,C.pageY);else{const se=fe(C),Z=.5*(C.pageX+se.x),Te=.5*(C.pageY+se.y);y.set(Z,Te)}m.subVectors(y,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(y)}function be(C){const se=fe(C),Z=C.pageX-se.x,Te=C.pageY-se.y,ve=Math.sqrt(Z*Z+Te*Te);v.set(0,ve),g.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),$(g.y),h.copy(v)}function Ce(C){i.enableZoom&&be(C),i.enablePan&&Me(C)}function lt(C){i.enableZoom&&be(C),i.enableRotate&&zt(C)}function Oe(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",qe)),ie(C),C.pointerType==="touch"?z(C):yt(C))}function Ie(C){i.enabled!==!1&&(C.pointerType==="touch"?ne(C):bt(C))}function qe(C){_e(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(ig),s=r.NONE}function yt(C){let se;switch(C.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Wr.DOLLY:if(i.enableZoom===!1)return;N(C),s=r.DOLLY;break;case Wr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;F(C),s=r.PAN}else{if(i.enableRotate===!1)return;B(C),s=r.ROTATE}break;case Wr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;B(C),s=r.ROTATE}else{if(i.enablePan===!1)return;F(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lc)}function bt(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ue(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(C);break;case r.PAN:if(i.enablePan===!1)return;de(C);break}}function b(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Lc),ye(C),i.dispatchEvent(ig))}function M(C){i.enabled===!1||i.enablePan===!1||Ne(C)}function z(C){switch(oe(C),T.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;Re(),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;De(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lc)}function ne(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;zt(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(C),i.update();break;default:s=r.NONE}}function J(C){i.enabled!==!1&&C.preventDefault()}function ie(C){T.push(C)}function _e(C){delete L[C.pointerId];for(let se=0;se<T.length;se++)if(T[se].pointerId==C.pointerId){T.splice(se,1);return}}function oe(C){let se=L[C.pointerId];se===void 0&&(se=new Pe,L[C.pointerId]=se),se.set(C.pageX,C.pageY)}function fe(C){const se=C.pointerId===T[0].pointerId?T[1]:T[0];return L[se.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}class bR{constructor(e){Jd(this,"name","KHR_materials_pbrSpecularGlossiness");this.parser=e}getMaterialType(){return mu}extendMaterialParams(e,t){var a;const i=this.parser,s=(a=i.json.materials[e].extensions)==null?void 0:a[this.name];if(!s)return Promise.resolve();const o=[];if(t.color=new we(1,1,1),t.opacity=1,t.metalness=0,t.roughness=1,Array.isArray(s.diffuseFactor)&&(t.color.setRGB(s.diffuseFactor[0],s.diffuseFactor[1],s.diffuseFactor[2]),t.opacity=s.diffuseFactor[3]??1),s.diffuseTexture!==void 0&&o.push(i.assignTexture(t,"map",s.diffuseTexture,ut)),s.glossinessFactor!==void 0&&(t.roughness=1-s.glossinessFactor),Array.isArray(s.specularFactor)){const l=(s.specularFactor[0]+s.specularFactor[1]+s.specularFactor[2])/3;t.roughness=Math.min(Math.max(1-l,0),1)}return s.specularGlossinessTexture!==void 0&&(o.push(i.assignTexture(t,"roughnessMap",s.specularGlossinessTexture)),o.push(i.assignTexture(t,"metalnessMap",s.specularGlossinessTexture))),Promise.all(o)}}function CR({defaultModel:n}){const e=Xt.useRef(null),t=Xt.useRef(null),i=Xt.useRef(null),r=Xt.useRef(null),s=Xt.useRef(null),o=Xt.useRef(null),a=Xt.useRef(null),l=Xt.useRef(null),u=Xt.useRef(new Map),[c,f]=Xt.useState(null),[d,p]=Xt.useState(!1),[_,y]=Xt.useState(null),m=S=>{const R=r.current,T=s.current,L=a.current;if(!R||!T||!L)return;const E=new si().setFromObject(S.scene),w=E.getCenter(new P),V=E.getBoundingSphere(new Yn);S.scene.position.sub(w);const Y=Math.max(E.getSize(new P).x,E.getSize(new P).y,E.getSize(new P).z),I=Y>0?Math.min(Math.max(2/Y,.6),1.2):1;S.scene.scale.setScalar(I);const H=Math.max(V.radius*I,.5),$=T.fov*(Math.PI/180),q=H/Math.sin($/2)*3.5;T.position.set(0,H*1,q),T.near=Math.max(.1,q/100),T.far=q*12,T.lookAt(0,0,0),T.updateProjectionMatrix(),L.target.set(0,0,0),L.update()};Xt.useEffect(()=>{const S=e.current;if(!S)return;const R=new s1;R.background=new we(16185078),r.current=R;const T=new Jt(45,S.clientWidth/S.clientHeight,.1,1e3);T.position.set(0,.8,2.5),s.current=T;const L=new Kv({antialias:!0});L.setSize(S.clientWidth,S.clientHeight),"outputColorSpace"in L?L.outputColorSpace=ut:L.outputEncoding=Ei,o.current=L,S.appendChild(L.domElement);const E=new P1(16777215,4473924,1);E.position.set(0,2,0),R.add(E);const w=new n0(16777215,.8);w.position.set(5,10,7.5),R.add(w);const V=new Y1;V.register(H=>new bR(H)),l.current=V;const Y=new RR(T,L.domElement);Y.enableDamping=!0,Y.dampingFactor=.05,Y.autoRotate=!1,Y.enablePan=!1,Y.minDistance=.5,Y.maxDistance=10,Y.minPolarAngle=Math.PI/4,Y.maxPolarAngle=Math.PI/2,a.current=Y;const Q=()=>{requestAnimationFrame(Q),Y.update(),L.render(R,T)};Q();const I=()=>{T.aspect=S.clientWidth/S.clientHeight,T.updateProjectionMatrix(),L.setSize(S.clientWidth,S.clientHeight)};return window.addEventListener("resize",I),n&&V.load(n,H=>{i.current&&i.current.scene&&R.remove(i.current.scene),i.current=H,u.current.clear(),H.scene.traverse($=>{$.isMesh&&$.material&&u.current.set($.uuid,$.material.clone())}),R.add(H.scene),m(H)},void 0,H=>{y("Error cargando el modelo por defecto. Revisa la ruta."),console.error("GLTFLoader error:",H)}),()=>{window.removeEventListener("resize",I),Y.dispose(),L.dispose(),L.domElement.parentElement===S&&S.removeChild(L.domElement),r.current=null,s.current=null,o.current=null,a.current=null,l.current=null}},[n]);const h=async()=>{try{const S=await navigator.mediaDevices.getUserMedia({video:!0});f(null),p(!0),t.current&&(t.current.srcObject=S,await t.current.play())}catch(S){f((S==null?void 0:S.message)||"No se pudo acceder a la cámara."),p(!1)}},v=S=>{const R=URL.createObjectURL(S);if(!l.current||!r.current){URL.revokeObjectURL(R);return}y(null),l.current.load(R,T=>{i.current&&i.current.scene&&r.current.remove(i.current.scene),i.current=T,u.current.clear(),T.scene.traverse(L=>{L.isMesh&&L.material&&u.current.set(L.uuid,L.material.clone())}),r.current.add(T.scene),m(T),URL.revokeObjectURL(R)},void 0,T=>{y("Error al cargar el archivo local."),console.error("GLTFLoader local error:",T),URL.revokeObjectURL(R)})},g=async S=>{if(!i.current)return;const R=[];i.current.scene.traverse(T=>{if(T.isMesh&&T.material){const L=T.material;L.map?R.push(new Promise(E=>{const w=L.map.image,V=document.createElement("canvas");V.width=(w==null?void 0:w.width)||1024,V.height=(w==null?void 0:w.height)||1024;const Y=V.getContext("2d");w instanceof ImageBitmap||w instanceof HTMLImageElement?Y.drawImage(w,0,0,V.width,V.height):(Y.fillStyle="#ffffff",Y.fillRect(0,0,V.width,V.height)),Y.globalCompositeOperation="source-atop",Y.fillStyle=S,Y.fillRect(0,0,V.width,V.height);const Q=new g1(V);Q.encoding=Ei,L.map=Q,L.needsUpdate=!0,E()})):L.color&&(L.color=new we(S))}}),await Promise.all(R)},x=()=>{i.current&&i.current.scene.traverse(S=>{if(S.isMesh){const R=u.current.get(S.uuid);R&&(S.material=R.clone())}})};return Ze.jsxs("div",{children:[Ze.jsxs("div",{style:{marginBottom:8,display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[Ze.jsxs("label",{children:["Modelo 3D:",Ze.jsx("input",{type:"file",accept:".glb,.gltf",style:{marginLeft:8},onChange:S=>{var T;const R=(T=S.target.files)==null?void 0:T[0];R&&v(R)}})]}),Ze.jsxs("label",{style:{display:"flex",alignItems:"center"},children:["Color:",Ze.jsx("input",{id:"color",type:"color",defaultValue:"#ff0000",style:{marginLeft:8}})]}),Ze.jsx("button",{onClick:()=>g(document.getElementById("color").value),children:"Aplicar color"}),Ze.jsx("button",{onClick:x,children:"Reset"}),Ze.jsx("button",{onClick:h,children:d?"Cámara activa":"Activar cámara"})]}),c?Ze.jsx("div",{style:{color:"red",marginBottom:8},children:c}):null,_?Ze.jsx("div",{style:{color:"red",marginBottom:8},children:_}):null,Ze.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[Ze.jsx("div",{ref:e,style:{flex:1,minHeight:480,minWidth:300,border:"1px solid #ddd"}}),Ze.jsxs("div",{style:{width:260,display:"flex",flexDirection:"column",gap:8},children:[Ze.jsxs("div",{children:[Ze.jsx("strong",{children:"Vista previa de cámara"}),Ze.jsx("video",{ref:t,style:{width:"100%",height:240,background:"#000"},autoPlay:!0,muted:!0,playsInline:!0})]}),Ze.jsxs("div",{style:{padding:8,background:"#fafafa",border:"1px solid #ececec",borderRadius:4},children:[Ze.jsx("strong",{children:"Indicaciones"}),Ze.jsxs("p",{style:{margin:4,fontSize:12},children:["Pulsa el botón de cámara para pedir permiso. Si hay un modelo por defecto, se cargará desde ",Ze.jsx("code",{children:"/Assets/baseball_cap.glb"}),"."]})]})]})]})]})}function LR(){return Ze.jsxs("div",{style:{fontFamily:"Arial, sans-serif"},children:[Ze.jsx("header",{style:{padding:12,borderBottom:"1px solid #eee"},children:Ze.jsx("h2",{children:"MVP Filtro New Era"})}),Ze.jsxs("main",{style:{padding:12},children:[Ze.jsx("p",{children:"Sube un archivo `.glb` o usa `Assets/baseball_cap.glb` y prueba colores en tiempo real."}),Ze.jsx(CR,{defaultModel:"/Assets/baseball_cap.glb"})]})]})}_v(document.getElementById("root")).render(Ze.jsx(b0.StrictMode,{children:Ze.jsx(LR,{})}));
