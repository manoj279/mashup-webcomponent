!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),a=new Map;class i{constructor(t,a){if(this._$cssResult$=!0,a!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=a.get(this.cssText);return t&&void 0===e&&(a.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let a="";for(const e of t.cssRules)a+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(a)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var n;const r=window.trustedTypes,o=r?r.emptyScript:"",c=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?o:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,a)=>{const i=this._$Eh(a,e);void 0!==i&&(this._$Eu.set(i,a),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const a="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of e)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,a;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(a=t.hostConnected)||void 0===a||a.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const a=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{t?e.adoptedStyleSheets=a.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):a.forEach((t=>{const a=document.createElement("style"),i=window.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=t.cssText,e.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ES(t,e,a=h){var i,s;const n=this.constructor._$Eh(t,a);if(void 0!==n&&!0===a.reflect){const r=(null!==(s=null===(i=a.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:l.toAttribute)(e,a.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var a,i,s;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),o=t.converter,c=null!==(s=null!==(i=null===(a=o)||void 0===a?void 0:a.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==s?s:l.fromAttribute;this._$Ei=r,this[r]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,a){let i=!0;void 0!==t&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,a))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(a)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(a)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,v=`<${$}>`,y=document,b=(t="")=>y.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,I=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,_=/"/g,S=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),E=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),L=new WeakMap,M=(t,e,a)=>{var i,s;const n=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==a?void 0:a.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new P(e.insertBefore(b(),t),t,void 0,null!=a?a:{})}return r._$AI(t),r},N=y.createTreeWalker(y,129,null,!1),z=(t,e)=>{const a=t.length-1,i=[];let s,n=2===e?"<svg>":"",r=D;for(let e=0;e<a;e++){const a=t[e];let o,c,l=-1,d=0;for(;d<a.length&&(r.lastIndex=d,c=r.exec(a),null!==c);)d=r.lastIndex,r===D?"!--"===c[1]?r=A:void 0!==c[1]?r=I:void 0!==c[2]?(S.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=x):void 0!==c[3]&&(r=x):r===x?">"===c[0]?(r=null!=s?s:D,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,o=c[1],r=void 0===c[3]?x:'"'===c[3]?_:k):r===_||r===k?r=x:r===A||r===I?r=D:(r=x,s=void 0);const h=r===x&&t[e+1].startsWith("/>")?" ":"";n+=r===D?a+v:l>=0?(i.push(o),a.slice(0,l)+"$lit$"+a.slice(l)+m+h):a+m+(-2===l?(i.push(void 0),e):h)}const o=n+(t[a]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(o):o,i]};class q{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let s=0,n=0;const r=t.length-1,o=this.parts,[c,l]=z(t,e);if(this.el=q.createElement(c,a),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=N.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const a=l[n++];if(t.push(e),void 0!==a){const t=i.getAttribute(a.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(a);o.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?j:"@"===e[1]?B:H})}else o.push({type:6,index:s})}for(const e of t)i.removeAttribute(e)}if(S.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],b()),N.nextNode(),o.push({type:2,index:++s});i.append(t[e],b())}}}else if(8===i.nodeType)if(i.data===$)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)o.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const a=y.createElement("template");return a.innerHTML=t,a}}function O(t,e,a=t,i){var s,n,r,o;if(e===E)return e;let c=void 0!==i?null===(s=a._$Cl)||void 0===s?void 0:s[i]:a._$Cu;const l=C(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,a,i)),void 0!==i?(null!==(r=(o=a)._$Cl)&&void 0!==r?r:o._$Cl=[])[i]=c:a._$Cu=c),void 0!==c&&(e=O(t,c._$AS(t,e.values),c,i)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:a},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(a,!0);N.currentNode=s;let n=N.nextNode(),r=0,o=0,c=i[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new P(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new W(n,this,t)),this.v.push(e),c=i[++o]}r!==(null==c?void 0:c.index)&&(n=N.nextNode(),r++)}return s}m(t){let e=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class P{constructor(t,e,a,i){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),C(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:a,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(a);else{const t=new U(s,this),e=t.p(this.options);t.m(a),this.k(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new q(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const s of t)i===e.length?e.push(a=new P(this.M(b()),this.M(b()),this,this.options)):a=e[i],a._$AI(s),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,a,i,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,a,i){const s=this.strings;let n=!1;if(void 0===s)t=O(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const i=t;let r,o;for(t=s[0],r=0;r<s.length-1;r++)o=O(this,i[a+r],e,r),o===E&&(o=this._$AH[r]),n||(n=!C(o)||o!==this._$AH[r]),o===R?t=R:t!==R&&(t+=(null!=o?o:"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}}const V=g?g.emptyScript:"";class j extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class B extends H{constructor(t,e,a,i,s){super(t,e,a,i,s),this.type=5}_$AI(t,e=this){var a;if((t=null!==(a=O(this,t,e,0))&&void 0!==a?a:R)===E)return;const i=this._$AH,s=t===R&&i!==R||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==R&&(i===R||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==a?a:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Z,J;null==Y||Y(q,P),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.5");class K extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=M(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return E}}K.finalized=!0,K._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:K});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const X=()=>T`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Q=()=>T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,tt=()=>T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,et=()=>T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,at=()=>T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,it=()=>T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,st=(t,e,a,i,s)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const r=document.createElement("div");n.appendChild(r);const o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',c=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",d),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),s&&s()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}c()}},d=t=>{if("Escape"===t.key)return void l(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=n.querySelectorAll(o),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return T`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)c();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),i(r);n.querySelectorAll(o)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",d),n.offsetHeight,n.style=""}else c()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},nt=t=>`0${t}`.slice(-2),rt=t=>`0${t}`.slice(-4),ot=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},ct=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",lt=(t,e,a,i,s)=>{if("string"!=typeof e)return;if(i){const t=ht(i,e);if(t===s||`${t}`==`${s}`||null===t&&""===s)return;dt(i,e,s)}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=s);if(!a)return void dt(t,e,s);const r={};let o=e.substring(0,n);r[e.substring(n+1)]=s;const c=o.indexOf("(");if(-1===c)a.push({instruction:"UPDATE",target:o,content:r});else{const t=o.substring(c+1,o.length-1);o=o.substring(0,c),a.push({instruction:"UPDATE",target:o,listIndex:parseInt(t,10),content:r})}},dt=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let s=t;for(const t in i){let e=i[t];const n=e.indexOf("(");if(-1===n)t<i.length-1?void 0===s[e]&&(s[e]={}):s[e]=a,s=s[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===s[e]&&(s[e]=[]);for(let a=s[e].length;a<t;a++)s[e].push({});s=s[e][t-1]}}},ht=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let i=t;const s=a.split(".");for(const t in s){const e=s[t],a=e.indexOf("(");if(-1===a){if(void 0===i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),s=i[e.substring(0,a)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;i=s[t-1]}}return i},ut=t=>{for(const e in t)"object"==typeof t[e]?ut(t[e]):"string"==typeof t[e]&&(t[e]="")},pt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&pt(i,e)}},gt=(t,e,a)=>{let i=ht(t,e);if(null===i&&(i=[],dt(t,e,i)),!Array.isArray(i))return null;if(a&&"string"==typeof a){const t={},s=a.split(",");for(const e in s)t[s[e]]="";return i.push(t),{instruction:"APPEND",target:e,content:t}}if(0===i.length)return null;const s={...i[0]};return ut(s),i.push(s),{instruction:"APPEND",target:e,content:s}},ft=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),i=i.substring(0,e.lastIndexOf("(")));const s=ht(t,i);if(!Array.isArray(s))return null;if(1===s.length){for(const t in s[0])"pxObjClass"!==t&&(s[0][t]="");return null}return a?s.length<a?null:(s.splice(a-1,1),{instruction:"DELETE",target:i,listIndex:a}):(s.length-=1,{instruction:"DELETE",target:i,listIndex:s.length})},mt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},$t=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function vt(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const yt=(t,e,a)=>{const i=t.replace("@E ","").split("&&");for(const t in i){const s=i[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===s.length){const t=""===a?e[s[0].substring(1)]:ht(e,a+s[0]);if(void 0!==t&&!vt(t,s[1],s[2].replace(/^'|'$/g,"")))return!1}}return!0},bt=(t,e,a,i)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===s.tagName){const n=s.getAttribute("type");if(s.classList.contains("input-date-day")||s.classList.contains("input-date-month")||s.classList.contains("input-date-year")){if(s.classList.contains("input-date-day")){const n=s.closest(".input-date").parentNode,r=n.querySelector(".input-date-month"),o=n.querySelector(".input-date-year");if(null!==r&&null!==o&&""!==s.value&&""!==r.value&&""!==o.value){const n=`${nt(r.value)}/${nt(s.value)}/${rt(o.value)}`;lt(e,t,a,i,n)}}}else if("checkbox"===n)lt(e,t,a,i,s.checked);else if("radio"===n)s.checked&&lt(e,t,a,i,s.value);else if("tel"===n){let n=s.value;"SELECT"===s.parentNode.firstElementChild.tagName&&"field-countrycode"===s.parentNode.firstElementChild.className&&(n=s.parentNode.firstElementChild.value+n),lt(e,t,a,i,n)}else if("date"===n){let n;s.valueAsDate&&(n=new Date(s.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(s.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?(n=new Date(n.getTime()+6e4*n.getTimezoneOffset()),lt(e,t,a,i,`${nt(n.getMonth()+1)}/${nt(n.getDate())}/${n.getFullYear()}`)):lt(e,t,a,i,s.value)}else lt(e,t,a,i,s.value)}else lt(e,t,a,i,s.value)}if(t&&t.querySelectorAll){const n=t.querySelectorAll("[contenteditable]");for(let t=0;t<n.length;t++){const r=n[t],o=r.getAttribute("data-ref");lt(e,o,a,i,(s=r.innerHTML)&&"string"==typeof s?s.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var s},Ct=(t,e,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const s in e){if(e[s].Path===t){a.setInlineError(i,e[s].ValidationMessage);break}if(e[s].erroneousInputOutputFieldInPage===t){a.setInlineError(i,e[s].localizedValue);break}}}},wt=(t,e)=>{const a=e||[],i={};for(const[e,s]of Object.entries(t))if("string"==typeof s||"boolean"==typeof s)i[e]=s;else if("object"==typeof s)if(Array.isArray(s))for(const t in s){const i={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:s[t]};a.push(i)}else{const t={instruction:"UPDATE",target:e,content:s};a.push(t)}return{pageInstructions:a,pageupdate:i}};function Dt(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function At(t,e,a){t(null,{verifier:e,challenge:Dt(String.fromCharCode.apply(null,new Uint8Array(a)))})}const It=()=>new Promise(((t,e)=>{!function(t,e){let a=t;a||(a=43);const i=window.msCrypto||window.crypto,s=Dt(Array.prototype.map.call(i.getRandomValues(new Uint8Array(a)),(t=>String.fromCharCode(t))).join("")).substring(0,a),n=new Uint8Array(s.length);for(let t=0;t<s.length;t++)n[t]=s.charCodeAt(t);const r=i.subtle.digest("SHA-256",n);window.CryptoOperation?(r.onerror=e,r.oncomplete=t=>{At(e,s,t.target.result)}):r.then((t=>{At(e,s,t)})).catch(e)}(43,((a,{verifier:i,challenge:s})=>{a?e(new Error("error")):t({verifier:i,challenge:s})}))})),xt=(t,e,a,i,s)=>{if(null==i)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(i(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&i(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),M(a(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return T`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${s||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},kt=(t,e,a,i)=>st(t,e,a,(t=>{M(_t(t,[]),t),i(t)})),_t=(t,e,a,i,s)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const s=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([s],{type:"text"});i.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[n].ID,target:r})},c=a=>{a.preventDefault(),a.stopPropagation();const s=a.target.closest("button");n=s.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[n].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),s.splice(n,1),M(_t(t,e,a,i,s),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");s[n][t]=e.value}else"SELECT"===e.tagName&&(s[n].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,s=null===a?null:a.closest(".attach-files"),n=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=s&&s.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==s&&s.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<s.length;n++){const r=s[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),i.sendData.call(i,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:r,target:t}))}M(_t(t,e,a,i),t)},p=(s,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}M(_t(t,e,a,i,r),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=s=>{s.stopPropagation();M(_t(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=s=>{s.stopPropagation(),M(_t(t,e,a,i),t)},$=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),T`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":T`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},v=()=>T`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,y=s=>{let o=s.target;if(s.path&&s.path.length>0?o=s.path[0]:s.originalTarget&&(o=s.originalTarget),o){const s=o.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===s?i.fetchData.call(i,"attachment",{id:c,target:r}):"Delete"===s&&(i.sendData.call(i,"deleteattachment",{id:c,target:t}),M(_t(void 0,[],a,i,[]),t))}},b=t=>T`<div class='row-item'>
    <span class='doc-icon'>${it()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${xt(T`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",v,y,"button-action")}
  </div>`,C=(t,e)=>e.loading?T`${$(t,e)}${X()}`:e.editing?"URL"===e.type?T`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:T`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}"
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>T`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${i.attachmentcategories.map((t=>T`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${et()}</button>`:T`${$(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${et()}</button>`,w=t=>{if(!a)return X();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(T`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${C(t[0],t[1])}
            </div>`):e.push(T`<div class='row-item'>
              <span class='doc-icon'>${it()}<span>${a}</span></span>
              ${C(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:T`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),b(e[0])}return T`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${at()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(s&&s.length>0)return i.sendData.call(i,"uploadattachment",{actionid:s[0],target:t}),D=s[0],A=!0,T`<div class='row-item'>
    <span class='doc-icon'>${it()}<span>${D.extension}</span></span>
    <div class='list-item-title'><span>${D.displayName}</span>${A?T`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return b(e[0])}var D,A;let I="Attachments";return void 0!==s&&s.length>0&&(I="URL"===s[0].type?"Attach a link":"Attach files"),T`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(I)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${tt()}</button>
      </div>
    </div>
    ${void 0!==s&&s.length>0?T`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${w(s)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:T`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${at()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${w(e)}
      </form>
    `}
  `},St=(t,e)=>T`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${tt()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`;class Tt extends K{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="Your pending actions",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),a=a.replace(/^"|"$/g,"").trim(),a=ct(a),"object"!=typeof t.langTokens)return a;const i=t.langTokens[a];return i&&""!==i?i.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&M(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Et=2,Rt=t=>(...e)=>({_$litDirective$:t,values:e});class Lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Mt extends Lt{constructor(t){if(super(t),this.it=R,t.type!==Et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this.ft=void 0,this.it=t;if(t===E)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Mt.directiveName="unsafeHTML",Mt.resultType=1;const Nt=Rt(Mt),zt=t=>null!=t?t:R,qt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},Ot=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Ut=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?T`<div class="field-caption dataLabelForWrite ${i}">${ct(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?T`<label class="field-caption dataLabelForWrite">${ct(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?T`<label class="field-caption dataLabelForWrite ${i}" for="${zt(e)}">${ct(t.label)}</label>`:null},Pt=(t,e,a,i)=>void 0===e||-1!==e.indexOf("-table-")?T`
      ${i}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?T`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${Ut(t,e,a)}</legend>${i}</fielset></div>
  `:"field-checkbox"===a?T`
    <div class="flex content-item field-item ${a}">${i}</div>
  `:T`
    <div class="flex content-item field-item ${a}">${Ut(t,e,a)}${i}</div>
  `:null,Ht=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return Pt(t,e,"field-text",Ft(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return Pt(t,e,"field-textinput",Vt(t,e));case"pxInteger":case"pxNumber":return Pt(t,e,"field-numberinput",Bt(t,e));case"pxCurrency":return Pt(t,e,"field-currencyinput",Wt(t,e));case"pxEmail":return Pt(t,e,"field-emailinput",Yt(t,e));case"pxTextArea":return Pt(t,e,"field-textarea",Zt(t,e));case"pxRadioButtons":return Pt(t,e,"field-radiogroup",ae(t,e));case"pxCheckbox":return Pt(t,e,"field-checkbox",ie(t,e));case"pxDropdown":return Pt(t,e,"field-dropdown",se(t,e));case"pxDisplayText":return Pt(t,e,"field-text",Ft(t,e));case"pxIcon":return Pt(t,e,"field-icon",Jt(t,e));case"pxLink":case"pxURL":return Pt(t,e,"field-url",Kt(t,e));case"pxIconDeleteItem":return Pt(t,e,"field-button",Xt(t,e));case"pxButton":return Pt(t,e,"field-button",Gt(t,e));case"pxDateTime":return"TimeOfDay"===t.type?Pt(t,e,"field-time",ee(t,e)):"Date"===t.type?Pt(t,e,"field-date",te(t,e)):Pt(t,e,"field-datetime",Qt(t,e));case"pxAutoComplete":return Pt(t,e,"field-combobox",ne(t,e));case"pxSlider":return Pt(t,e,"field-slider",jt(t,e));default:return null}},Ft=(t,e)=>{if("pxDate"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return T`
      <span class="dataValueRead" data-ref="${t.reference}" id="${zt(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};if("DateTime-Short-YYYY"===t.control.modes[1].dateTimeFormat)e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};else e={};a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return T`
      <span class="dataValueRead" data-ref="${t.reference}" id="${zt(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return T`
      <span class="dataValueRead" data-ref="${t.reference}" id="${zt(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return T`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${zt(e)}" value="${ct(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return"pxCurrency"===t.control.type&&(a=`$${a}`),T`
    <span class="dataValueRead" data-ref="${t.reference}" id="${zt(e)}">${ct(a)}</span>
  `},Vt=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${zt(e)}"
    value="${ct(t.value)}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  />
`,jt=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${zt(e)}"
    value="${ct(t.value)}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  />
`,Bt=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${zt(e)}"
    value="${t.value}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  />
`,Wt=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${zt(e)}"
    value="${t.value}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  />
`,Yt=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${zt(e)}"
    value="${t.value}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  />
`,Zt=(t,e)=>T`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${zt(e)}"
    data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
  >
${ct(t.value)}</textarea
  >
`,Jt=(t,e)=>T`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${zt(e)}"
    value="${t.value}"
  />
`,Kt=(t,e)=>T`
  <a id="${zt(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Gt=(t,e)=>{const a=qt(t,"click");return"deleteRow"===a?Xt(t,e):T`
  <button
  type='button'
    class="${zt(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${zt(e)}"
    data-ref="${zt(Ot(t))}"
    data-action-click="${zt(a)}"
  >${t.control.label}</button>`},Xt=(t,e)=>T`
  <button
    type='button'
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${zt(e)}"
    data-ref="${zt(Ot(t))}"
    data-action-click="deleteRow"
  >${et()}</button>
`,Qt=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${nt(e.getMonth()+1)}-${nt(e.getDate())}T${nt(e.getHours())}:${nt(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${zt(e)}"
      value="${a}"
      data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
    />
  `},te=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${nt(e.getMonth()+1)}-${nt(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${zt(e)}"
      value="${a}"
      data-action-change="${zt(qt(t,"change"))}"
    data-action-click="${zt(qt(t,"click"))}"
    />
  `},ee=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${nt(e.getHours())}-${nt(e.getMinutes())}-${nt(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${zt(e)}"
      value="${a}"
      data-action-change="${zt(qt(t,"change"))}"
      data-action-click="${zt(qt(t,"click"))}"
    />
  `},ae=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:T`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return T`
        <div>
          <input
            data-ref="${t.reference}"
            name=${zt(e)}
            id="${s}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${zt(qt(t,"change"))}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},ie=(t,e)=>T`
  <input
  data-ref="${t.reference}"
  id="${zt(e)}"
  type="checkbox"
  ?checked=${"true"===t.value}
  data-action-change="${zt(qt(t,"change"))}"
  data-action-click="${zt(qt(t,"click"))}"
  />
  <label for="${zt(e)}">${t.control.label}</label>
`,se=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?T`<select
      data-ref="${t.reference}"
      id=${zt(e)}
      ?required="${!0===t.required}"
      data-action-change="${zt(qt(t,"change"))}"
      data-action-click="${zt(qt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>T`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:T`<input
      type='text'
      data-ref="${t.reference}"
      id=${zt(e)}
      ?required="${!0===t.required}"
      data-action-change="${zt(qt(t,"change"))}"
      data-action-click="${zt(qt(t,"click"))}">
      </input>`,ne=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return T`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${zt(e)}"
        value="${ct(t.value)}"
        data-action-change="${zt(qt(t,"change"))}"
        data-action-click="${zt(qt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>T`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),T`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${zt(e)}"
      value="${t.value}"
      data-action-change="${zt(qt(t,"change"))}"
      data-action-click="${zt(qt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},re=t=>""!==t.title?T`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,oe=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return pt(t.newRow,e),T`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${zt(e.join())}"
        data-ref=${a} data-action-click="addRow">${Q()}Add item</button>
      </div>
    `}return null},ce=t=>T`
  ${t.map((t=>T`
    <th scope='col'>${t.caption?T`${t.caption.value}`:""}</th>`))}
`,le=(t,e,a)=>T`
  ${t.map(((t,i)=>{const s=`${e}-table-${i}`;return T`
    <tr>
      ${t.groups.map(((t,e)=>T`
      <td>${Ht(t.field,`${s}-${e}`,a)}</td>`))}
    </tr>`}))}
`,de=(t,e,a,i)=>T`
  ${t.map(((t,s)=>{const n=`${e}-${s}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),s=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return T`
          <div class="${s}">${de(t.layout.view.groups,n,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":default:e=T`<h2>${t.layout.title}</h2>`;break;case"h3":e=T`<h3>${t.layout.title}</h3>`;break;case"h4":e=T`<h4>${t.layout.title}</h4>`}return T`
        ${e}<div class="${s}">${de(t.layout.groups,n,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>T`
  ${re(t.layout)}
  <div class='table-content'>
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${ce(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${le(t.layout.rows,e,a)}
    </tbody>
  </table>
  </div>
  ${oe(t.layout,a)}
`)(t,n,a):he(t,n,a,i):null}if(t.paragraph)return T`<div class='flex content-item field-item flex-paragraph'>${Nt(t.paragraph.value)}</div>`;if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return kt("Upload file","Upload file","",i.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=i.actionID;return((t,e,a)=>{const i=t.control.actionSets[0].actions[0].actionProcess.localAction,s=t.control.actionSets[0].actions[0].actionProcess.target,n=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===s){const s=a=>{M(St(t.control.label,X()),a),e(i,a)};return st(i,t.control.label,n,s,a)}return T`<div><button type="button" @click="${()=>{e(i)}}" class="pzhc pzbutton ${n}">${i18n.t(t.control.label)}</button></<div>`})(t.field,i.displayLocalAction,(()=>{i.reloadAssignment(e)}))}return Ht(t.field,n,a)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?kt("Upload file","Upload file","",i.displayAttachments):de(t.view.groups,n,a,i):null}))}
`,he=(t,e,a,i)=>T`
  ${re(t.layout)}
  <div class="rdl">
    ${ue(t.layout.rows,e,a,i)}
  </div>
  ${oe(t.layout,a)}
`,ue=(t,e,a,i)=>T`
  ${t.map(((t,s)=>{const n=`${e}-row${s}`;return t.groups?T`
        <div>
          ${de(t.groups,n,a,i)}
        </div>
      `:null}))}
`,pe=(t,e,a,i,s,n,r,o,c)=>{const l=T`${at()}<span class='count-badge'>${s}</span>`;if(void 0===e.caseID&&a.content)return T`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} <span>(${a.content.pyID})</span>
      ${""!==i?T`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?kt("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>1?T`
          ${xt("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?T`
  <h3>
    Assignments
  </h3>
  <table>
      <caption class='sr-only'>List of assignments</caption>
      <thead>
      <tr>
        <th span='col'>Priority</th>
        <th span='col'>Task</th>
        <th span='col'>Assigned to</th>
        <th span='col' class="right-aligned">Action</th>
      </tr>
      </thead>
      <tbody>
        ${t.map((t=>T`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.assignments,o)}
    ${((t,e)=>t&&0!==t.length?T`
  <h3>
    ${i18n.t("Related cases")}
  </h3>
  <table>
    <thead>
      <tr>
        <th span='col'>${i18n.t("ID")}</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>T`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.childCases,o)}
    <h3>Requested case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return T`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${d})</span>
    ${""!==i?T`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?kt("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>1?T`
        ${xt("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},ge=(t,e,a,i,s)=>T`
  <div class="flex layout-content-stacked">${de(t,e,!1,s)}</div>
  ${((t,e)=>T`
  <div class="action-button-area">
    ${null!==t?T`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?T`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,fe=(t,e,a,i)=>T`
  <div class="flex layout-content-stacked">${de(t,e,!0,i)}</div>
  ${(t=>null===t?null:T`
  <div class="action-button-area">
  ${null!==t?T`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,me=(t,e,a,i,s)=>T`
  <div class="flex layout-content-stacked">${de(t,e,!1,s)}</div>
  ${((t,e)=>T`
  <div class="action-button-area">
    ${null!==t?T`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,$e=(t,e,a,i)=>T`
  <div class="flex layout-content-stacked">${de(t,e,!1,i)}</div>
  ${(t=>T`
  <div class="action-button-area">
    ${null!==t?T`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,ve=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(T`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return T`
    ${a}
  `},ye=t=>T`
${t.pxResults.map((t=>T`
    <option>
      ${t.pyUserName}
    </option>`))}`;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class be extends Tt{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");bt(e,this.content,this.pageInstructions,this.casedata.content),this.validateForm(e)?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):this.reportFormValidity(e)}else{const t=this.getRenderRoot().querySelector("#case-data");bt(t,this.content,this.pageInstructions,this.casedata.content),this.validateForm(t)?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(t)}return!1};resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),"recentactivity"===this.action&&this.fetchData("recentactivity"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(bt(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",bt(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(T`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return T`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?ve(this.name,this.data):this.casedata.actions?ve(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(bt(a,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&M(X(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(X(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(ye(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(bt(a,this.content,this.pageInstructions,this.casedata.content),i){"path"===i.tagName&&(i=i.parentNode),"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=gt(this.casedata.content,e,i.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=ft(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};fetchData(t,e){const{id:a,actionid:i,target:s,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"recentactivity":c+=`data/D_ServiceItemsHistory?ID=${window.PegaCSWSS.ContactID}&Type=CONTACT`;break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${a}`;break;case"assignment":c+=`assignments/${a}`;break;case"case":c+=`cases/${a}`;break;case"data":c+=`data/${a}`;break;case"page":c+=`cases/${a}/pages/${i}`;break;case"view":c+=`cases/${a}/views/${i}`;break;case"assignmentaction":c+=`assignments/${a}/actions/${i}`;break;case"caseaction":c+=`cases/${a}/actions/${i}`;break;case"attachment":c+=`attachments/${a}`;break;case"attachments":c+=`cases/${a}/attachments`;break;case"attachmentcategories":c+=`cases/${a}/attachment_categories`}fetch(c,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),s&&(s.disabled=!1,s.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&"recentactivity"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"recentactivity":this.cases=e.pxResults,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}M(this.showDataList(e),n.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();M(this.renderSaveCaseLayout(e.view.groups,"Obj"),r),r.focus();break;case"assignmentaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();s?(this.actionID=i,M(St(e.name,this.renderMainLayout(e.view.groups,"Obj")),s),s.focus()):(this.name=e.name,this.requestUpdate(),M(this.renderMainLayout(e.view.groups,"Obj"),r),r.focus());break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}M(this.renderMainLayout(e.groups,"Obj"),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===i?(this.name=e.name,M(this.renderReviewLayout(e.groups,"Obj"),r)):(this.name=e.name,M(this.renderMainLayout(e.groups,"Obj"),r)),r.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!r){console.error("Error: case data are not present when retrieving the newwork");break}M(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const i=e[t];if("object"==typeof i)"radio"===a.type?a.value===i.value&&(a.checked=!0):"checkbox"===a.type?!0!==i.value&&"true"!==i.value||(a.checked=!0):i.value&&(a.value=i.value),i.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===i.length?a.value=i.substring(0,23):a.value=i;else if("date"===a.type){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),dt(e,t,`${nt(i.getMonth()+1)}/${nt(i.getDate())}/${i.getFullYear()}`)):dt(e,t,a.value)}else"string"==typeof i?"radio"===a.type?a.value===i&&(a.checked=!0):"checkbox"===a.type?"true"===i&&(a.checked=!0):a.value=i:"boolean"==typeof i&&"checkbox"===a.type?!0===i&&(a.checked=!0):a.value=i}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,s&&M(_t(s,o,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:i,actionid:s,target:n,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:o},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:d,pageupdate:h}=wt(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:i});break;case"submitassignment":l.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${i}?actionID=${s}`;break;case"savecase":u+=`cases/${i}`,s&&""!==s&&(u+=`?actionID=${s}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${i}/actions/${s}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${i}/actions/${s}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",s,s.name),l.body=t;break;case"attachments":u+=`cases/${i}/attachments`,l.body=JSON.stringify({attachments:s});break;case"deleteattachment":u+=`attachments/${i}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)Ct(n,e.errors[0].ValidationMessages,this),M(this.genPageValidationErrors(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");Ct(t,e.errors[0].ValidationMessages,this),this.validationMsg=this.genPageValidationErrors(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const i=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!i)return void console.error("Error: case data are not present");M("refreshnew"===t?this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"):this.renderMainLayout(e.view.groups,"Obj"),i)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:n}),a)return void a()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const a=s.name.substring(t+1),i=[{type:"File",category:s.category,fileType:a,name:s.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:i,target:n})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(i&&(M(this.genLoadingIndicator(),i),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(i&&(M(this.genLoadingIndicator(),i),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Ce=(t,e,a,i)=>T`
<div class='widgetborder'>
<div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)} <span>(${e})</span>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span></h2>
    ${i?T`<div class="flex layout-content-inline_middle margin-l-auto">
        ${kt("Attachments",at(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data"></div></div>`,we=(t,e)=>T`
  <div class="error">${t}
  ${null!=e?T`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${tt()}</button>`:""}
  </div>`,De=(t,e,a,i,s,n)=>T`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?T`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${xt("Create","Create a new case",a,s)}
    </div>
  </div>
  ${e.length>0?T`
    <div class='widgetborder'>
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>${i18n.t("Reference number")}</th>
              <th span='col'>${i18n.t("Description")}</th>
              <th span='col' class="right-aligned">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>T`
                <tr>
                  <td data-title='Reference number'>${t.caseID.split(" ")[1]}</td>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      </div>
      `:T`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`;class Ae extends be{displayContent(){return""!==this.errorMsg?we(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"recentactivity"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action?(this.bShowCancel="true",this.fetchData("worklist")):"recentactivity"===this.action&&(this.bShowCancel="true",this.fetchData("recentactivity"))),this.bShowConfirm?Ce(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?("recentactivity"===this.action&&(this.casedata.assignments=""),T`
        <div class='widgetborder'>
          ${pe(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
          <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
          <form id="case-data"></form>
        </div>
        `):"workList"===this.action?De(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"recentactivity"===this.action?(this.title,t=this.cases,e=this.displayCasesTypes,a=this.reloadWorkList,i="true"===this.bShowCreate?this.createCase:null,s=this.openCase,T`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t("Your recent activity")}
      ${t.length>0?T`<span>(${t.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the recentactivity")}' @click="${a}">${i18n.t("Refresh")}</button>
      ${xt("Create","Create a new case",e,i)}
    </div>
  </div>
  ${t.length>0?T`
      <div class='widgetborder'>
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>${i18n.t("Reference number")}</th>
              <th span='col'>${i18n.t("Request date")}</th>
              <th span='col'>${i18n.t("Description")}</th>
              <th span='col'>${i18n.t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            ${t.map((t=>T`
                <tr>
                  <td data-title='Reference number'> <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.pzInsKey}">
                  ${t.pyID}</button></td>
                  <td data-title='Request date'>${i18n.t(new Date(t.pxCreateDateTime).toString().split(" ").slice(1,4).join(" ").replace(/ ([^ ]*)$/,",$1"))}</td>
                  <td data-title='Description'>${t.pyLabel}</td>
                  <td data-title='Status'>${t.pyStatusWork}</td>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
        </div>
      `:T`
        <div class="margin-t-2x">${i18n.t("no cases")}</div>
      `}
`):null):(this.sendData("authenticate",{}),null);var t,e,a,i,s}renderMainLayout=(t,e)=>ge(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderSaveCaseLayout=(t,e)=>me(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>fe(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);renderCreateCaseLayout=(t,e)=>$e(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);genPageValidationErrors=t=>(t=>t.errorDetails?T`
    <ul>
      ${t.errorDetails.map((t=>T`<li>${t.localizedValue}</li>`))}
    </ul>`:T`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?T`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:T`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(t);showDataList=t=>ye(t);genLoadingIndicator=()=>X();validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();setInlineError=(t,e)=>{t.setCustomValidity(ct(e)),t.classList.add("error-field"),t.reportValidity()};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),mt(e,"click")?(this.refreshAssignment(e,$t(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),mt(e,"change")&&this.refreshAssignment(e,$t(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-light",class extends Ae{createRenderRoot(){return this}getRenderRoot(){return this}render(){return T`
      ${this.displayContent()}
    `}});
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Ie=(t,e)=>{var a,i;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(i=(a=t)._$AO)||void 0===i||i.call(a,e,!1),Ie(t,e);return!0},xe=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===(null==a?void 0:a.size))},ke=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),Te(e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function _e(t){void 0!==this._$AN?(xe(this),this._$AM=t,ke(this)):this._$AM=t}function Se(t,e=!1,a=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)Ie(i[t],!1),xe(i[t]);else null!=i&&(Ie(i,!1),xe(i));else Ie(this,t)}const Te=t=>{var e,a,i,s;t.type==Et&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Se),null!==(a=(s=t)._$AQ)&&void 0!==a||(s._$AQ=_e))};class Ee extends Lt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),ke(this),this.isConnected=t._$AU}_$AO(t,e=!0){var a,i;t!==this.isConnected&&(this.isConnected=t,t?null===(a=this.reconnected)||void 0===a||a.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(Ie(this,t),xe(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Re{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Le{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Me=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const Ne=Rt(class extends Ee{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Re(this),this._$CK=new Le}render(...t){var e;return null!==(e=t.find((t=>!Me(t))))&&void 0!==e?e:E}update(t,e){const a=this._$Cyt;let i=a.length;this._$Cyt=e;const s=this._$CG,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const r=e[t];if(!Me(r))return this._$Cwt=t,r;t<i&&r===a[t]||(this._$Cwt=1073741823,i=0,Promise.resolve(r).then((async t=>{for(;n.get();)await n.get();const e=s.deref();if(void 0!==e){const a=e._$Cyt.indexOf(r);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}})))}return E}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}),ze=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`;class qe extends Tt{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(bt(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",bt(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return bt(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&M(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=gt(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=ft(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}bt(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:s}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${i}`;break;case"caseaction":o+=`cases/${a}/actions/${i}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const r=this.getRenderRoot().querySelector("#case-data");r&&bt(r,this.casedata.content),this.content={},M(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,M(this.renderReviewLayout(e.uiResources.resources.views[i],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},M(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,s&&M(_t(s,o,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:s}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:c,pageupdate:l}=wt(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(ze())}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:l,pageInstructions:c});break;case"submitassignment":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${i}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${i}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",i,i.name),o.body=t;break;case"attachments":d+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${a}`,o.method="DELETE"}fetch(d,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(a.errors&&a.errors.length>0)return this.errorMsg=`Error: ${a.errors[0].message.trim()}`,void this.requestUpdate();if(a.access_token)this.token=a.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");Ct(t,a.errorDetails,this),this.validationMsg=this.genPageValidationErrors(a,t)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),s&&(s.disabled=!1,s.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&a.data.caseInfo.ID&&""!==a.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:a.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,this.casedata.content=a.data.caseInfo.content,M(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)s&&!s.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:s});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),n=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:s})}if(a.confirmationNote)this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(a.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=a.nextAssignmentInfo.ID,this.data=a,this.casedata=a.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=a.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(M(this.genLoadingIndicator(),e),M(this.renderMainLayout(a.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Oe=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class Ue extends K{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const s=document.createElement("div"),n=i.querySelector("body");s.setAttribute("contenteditable","true"),s.setAttribute("data-ref",e),s.setAttribute("id",a),s.innerHTML=n.innerHTML,this.root=s}render(){return T`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>Oe('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>Oe('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>Oe('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>Oe('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>Oe('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>Oe('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>Oe('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>Oe('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>Oe('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>Oe('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>Oe('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>Oe('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>Oe('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>Oe('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>Oe('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return T`
      ${i.map((e=>T`
          ${e.values?T` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>T` <option value=${t.value}>${t.name}</option>`))}
              </select>`:T` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",Ue);const Pe=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},He=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},Fe=(t,e,a,i)=>void 0===e||""===e?T`
      ${i}
    `:T`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?T`<legend class="field-caption">${t.displaylabel}</legend>`:null:T`
    ${""!==t.label?T`<label class="field-caption dataLabelForWrite ${i}"
    for="${zt(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?T`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,Ve=(t,e,a,i,s)=>{const n=((t,e,a,i,s)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===s||""===s?e:`${s}.${e}`,t.config.displayvalue=ht(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const n=""===s?a:ht(a,s);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const s=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const r=e[i].pxResults[a];t.config.options[a]={key:r[s],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[s]&&a[s].summary_of_lists__[e]&&a[s].summary_of_lists__[e].pxResults){const n=a[s].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[n]&&i.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const s in i.data.data[n].pxResults){const r=i.data.data[n].pxResults[s];t.config.options[s]={key:r[e],value:r[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]){let t=i.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(n=!0,i.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const r=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!yt(t.config.visibility,r,s))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=yt(t.config.readOnly,r,s):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=yt(t.config.required,r,s):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=yt(t.config.disabled,r,s):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,i,s);if("OK"!==n)return n;if(!0===a)return Fe(t.config,e,"field-text",je(t.config,t.type,e));switch(t.type){case"TextContent":return je(t.config,t.type,e);case"Decimal":case"TextInput":return Fe(t.config,e,"field-textinput",Be(t.config,e));case"Phone":return Fe(t.config,e,"field-phoneinput",We(t.config,e));case"Email":return Fe(t.config,e,"field-emailinput",Ke(t.config,e));case"Integer":return Fe(t.config,e,"field-numberinput",Ye(t.config,e));case"Percentage":return Fe(t.config,e,"field-percentage",Ze(t.config,e));case"Currency":return Fe(t.config,e,"field-currencyinput",Je(t.config,e));case"RadioButtons":return Fe(t.config,e,"field-radiogroup",ta(t.config,e));case"TextArea":return Fe(t.config,e,"field-textarea",Ge(t.config,e));case"RichText":return Fe(t.config,e,"field-richtext",Xe(t.config,e));case"Checkbox":return Fe(t.config,e,"field-checkbox",Qe(t.config,e));case"Dropdown":return Fe(t.config,e,"field-dropdown",ea(t.config,e));case"DateTime":return Fe(t.config,e,"field-datetime",aa(t.config,e));case"Date":return Fe(t.config,e,"field-date",ia(t.config,e));case"Time":return Fe(t.config,e,"field-time",sa(t.config,e));case"AutoComplete":return Fe(t.config,e,"field-autocomplete",na(t.config,e));case"SemanticLink":return Fe(t.config,e,"field-semanticlink",ra(t.config));case"Attachment":return Fe(t.config,e,"field-attachment",oa(t.config,e,i));case"Location":return Fe(t.config,e,"field-location",ca(t.config,e));default:return null}},je=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return T`<a data-ref="${t.reference}" id="${zt(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=ot(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return T`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return T`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return T`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return T`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return T`<h4>${i18n.t(t.content)}</h4>`}return T`
    <span class="dataValueRead" data-ref="${t.reference}" id="${zt(a)}">${ct(i)}</span>
  `},Be=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${zt(He(t))}"
    type="text"
    aria-describedby="${zt(Pe(t,e))}"
    id="${zt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,We=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),T`
<div>
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>T`<option ?selected=${t.pyCallingCode===a}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${zt(He(t))}"
   type="tel"
   aria-describedby="${zt(Pe(t,e))}"
   id="${zt(e)}"
   value="${ct(t.displayvalue)}"
 />
 </div>
`},Ye=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${zt(He(t))}"
    type="number"
    aria-describedby="${zt(Pe(t,e))}"
    id="${zt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Ze=(t,e)=>T`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${zt(He(t))}"
   type="text"
   aria-describedby="${zt(Pe(t,e))}"
   id="${zt(e)}"
   value="${ct(t.displayvalue)}"
 />
`,Je=(t,e)=>T`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${zt(He(t))}"
    type="number"
    aria-describedby="${zt(Pe(t,e))}"
    id="${zt(e)}"
    value="${ct(t.displayvalue)}"
  />
  </div>
`,Ke=(t,e)=>T`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${zt(He(t))}"
    type="email"
    aria-describedby="${zt(Pe(t,e))}"
    id="${zt(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Ge=(t,e)=>T`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${zt(He(t))}"
    type="email"
    aria-describedby="${zt(Pe(t,e))}"
    id="${zt(e)}"
  >${ct(t.displayvalue)}</textarea>
`,Xe=(t,e)=>new Ue(ct(t.displayvalue),t.reference,e),Qe=(t,e)=>{const a=t.requiredstate?"icon-required":"";return T`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${zt(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${zt(Pe(t,e))}"
  id=${zt(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${zt(e)}>
  ${t.displaycaption}
    </label>
`},ta=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),T`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return T`
        <div>
          <input
            data-ref="${t.reference}"
            name=${zt(e)}
            id=${s}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${zt(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},ea=(t,e)=>T`<select
  data-ref="${t.reference}"
  aria-describedby="${zt(Pe(t,e))}"
  id=${zt(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${zt(He(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>T`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,aa=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${nt(e.getMonth()+1)}-${nt(e.getDate())}T${nt(e.getHours())}:${nt(e.getMinutes())}`):8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${zt(Pe(t,e))}"
      id="${zt(e)}"
      value="${a}"
    />
  `},ia=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${nt(e.getMonth()+1)}-${nt(e.getDate())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${zt(Pe(t,e))}"
      id="${zt(e)}"
      value="${a}"
    />
  `},sa=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${nt(e.getHours())}-${nt(e.getMinutes())}-${nt(e.getSeconds())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return T`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${zt(Pe(t,e))}"
      id="${zt(e)}"
      value="${a}"
    />
  `},na=(t,e)=>t.options?T`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${zt(He(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${zt(Pe(t,e))}"
        id="${zt(e)}"
        value="${ct(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>T`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,ra=()=>T`
 <a>semantic link</a>
`,oa=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),_t(void 0,i,a.caseID,a)},ca=(t,e)=>T`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${zt(He(t))}"
 type="text"
 aria-describedby="${zt(Pe(t,e))}"
 id="${zt(e)}"
 value="${ct(t.displayvalue)}"
/>`,la=(t,e)=>T`
  ${t.map((t=>T`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:T`<th></th>`}
`,da=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .","").replace("@USER .",""),null)));const a=t.config.referenceList.replace("@P .","").replace("@USER .","");return T`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${Q()}${i18n.t("Add item")}</button>
      </div>
    `}return null},ha=(t,e,a)=>{const i=t.config.referenceList.replace("@P .","").replace("@USER .",""),s=t.config.children[0].children,n=ht(a.data.data.caseInfo.content,i);return n?T`
  ${n.map(((t,n)=>T`
    <tr>
    ${s.map((t=>{const s=t,r=i18n.t(t.config.label);return T`
    <td data-title="${r}">${Ve(s,void 0,e,a,`${i}(${n+1})`)}</td>`}))}${e?null:T`<td><button type="button" class="pzhc pzbutton Simple"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${n+1}).pyTemplate`}
  data-action-click='deleteRow'>${et()}</button></td>`}
    </tr>`))}
`:null},ua=(t,e,a,i,s)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return T`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return ua(t.children,`${e}-0`,!0,i,s);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value);let o=i.data.uiResources.resources.views[t.config.name];if(o){if(Array.isArray(o)&&1===o.length&&"View"===o[0].type&&(o=o[0]),"fieldGroup"===o.config.multiRecordDisplayAs)return ua(o,r,a,i,""===s?e.substring(1):s+e);const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return T`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${ua(o,r,a,i,""===s?e.substring(1):s+e)}</div>`}}return ua(i.data.uiResources.resources.views[t.config.name],r,a,i,s&&""!==s?s+e:e.substring(1))}return Ve(t,r,a,i,s)}))}`;if("SimpleTable"===t.config.template){if("fieldGroup"===t.config.multiRecordDisplayAs){const s=t.config.referenceList.replace("@P .","").replace("@USER .",""),n=ht(i.data.data.caseInfo.content,s);if(!n)return null;const r=t.config.heading.replace("@L ","");return T`${n.map(((n,o)=>T`<div><h4>${`${r} ${o}`}</h4>
        ${ua(t.children[0].children,`${e}-fieldgroup-${o}`,a,i,`${s}(${o+1})`)}</div>`))}`}return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return T`
  <div class='table-content'><table class='responsive'>
    <thead>
      <tr>
        ${la(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${ha(t,i,a)}
    </tbody>
  </table></div>
  ${da(t,i)}`})(t,a,i)}if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),T`
  <table class='responsive'>
    <thead>
      <tr>
        ${la(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${X()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"DetailsTwoColumn":case"TwoColumn":return T`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${ua(t.children[0].children,`${e}-0`,a,i,s)}</div>
            <div class="flex layout-content-stacked">${ua(t.children[1].children,`${e}-1`,a,i,s)}</div>
          </div>
        `;case"DefaultForm":return T`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${ua(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"DataReference":return T`
          <div class="flex layout-content-stacked">
            ${ua(t.children,`${e}-0`,a,i,s)}
          </div>
        `;case"OneColumn":return T`
          <div class="flex layout-content-stacked">
            ${ua(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"Details":return T`
          <div class="flex layout-content-stacked_with_labels_left">
            ${ua(t.children[0].children,`${e}-0`,!0,i,s)}
          </div>
        `;default:return null}},pa=(t,e,a,i,s,n,r,o,c)=>{const l=T`${at()}<span class='count-badge'>${s}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return T`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)} <span>(${t})</span>
      ${""!==i?T`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?kt("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?T`
          ${xt("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?T`
  <h3>
  ${i18n.t("Assignments")}
  </h3>
  <table class='responsive'>
  <caption class='sr-only'>List of assignments</caption>
    <thead>
      <tr>
        <th span='col'>${i18n.t("Priority")}</th>
        <th span='col'>${i18n.t("Task")}</th>
        <th span='col'>${i18n.t("Assigned")} to</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>T`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table> `:null)(a.assignments,o)}
    <h3>${i18n.t("Case information")}</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return T`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)} <span>(${d})</span>
    ${""!==i?T`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?kt("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?T`
        ${xt("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},ga=(t,e,a,i,s)=>T`
  <div>${ua(t,e,!1,s,"")}</div>
  ${((t,e)=>T`
  <div class="action-button-area">
    ${null!==t?T`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?T`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,i)}
`,fa=(t,e,a,i)=>T`
  <div>${ua(t,e,!0,i)}</div>
  ${(t=>null===t?null:T`
  <div class="action-button-area">
  ${null!==t?T`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class ma extends qe{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return we(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):(t=this.url,e=this.clientid,T`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${Ne(It().then((a=>{const{verifier:i,challenge:s}=a,n=`response_type=code&scope=openid&code_challenge=${s}&code_challenge_method=S256&response_mode=query&authentication_service=pega`,r=`${t}/PRRestService/oauth2/v1/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(ze())}&${n}&state=${i}`,o=T`<Button class="pzhc pzbutton" onclick="window.location='${r}'; return false;">
      ${i18n.t("Pega with full page redirect")}</Button>`,c=T`<Button class="pzhc pzbutton" onclick="n=window.open('${r}', 'foo',
      'width=600,height=600');n.focus(); return false;">${i18n.t("Pega with popup")}</Button>`;return T`${c}${o}`})),T`Loading...`)}</div></div>`);var t,e;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?(this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.sendData("newwork",{id:this.casetype})):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return Ce(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?T`
        ${pa(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?De(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}renderMainLayout=(t,e)=>ga(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>fa(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?T`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:T`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>ye(t);genActionsList=(t,e)=>((t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(T`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return T`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(T`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return T`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>X();setInlineError=(t,e)=>{t.setCustomValidity(ct(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),mt(e,"click")?(this.refreshAssignment(e,$t(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),mt(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,$t(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");bt(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),M(ga(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-light-v2",class extends ma{createRenderRoot(){return this}getRenderRoot(){return this}render(){return T`
      ${this.displayContent()}
    `}})}();
