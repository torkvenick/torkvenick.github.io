"use strict";(self.webpackChunkdog_app=self.webpackChunkdog_app||[]).push([[9718],{9718:(W,m,E)=>{E.r(m),E.d(m,{startTapClick:()=>I});var u=E(5730);const I=o=>{let e,p,r,s=10*-h,a=0;const y=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{s=(0,u.u)(t),R(t)},A=()=>{clearTimeout(r),r=void 0,e&&(S(!1),e=void 0)},D=t=>{e||w(M(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;clearTimeout(r),r=void 0;const{x:d,y:c}=(0,u.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||g(e,d,c),S(!0)}if(t){const b=f.get(t);b&&(clearTimeout(b),f.delete(t));const O=v(t)?0:k;t.classList.remove(l),r=setTimeout(()=>{g(t,d,c),r=void 0},O)}e=t},g=(t,n,d)=>{if(a=Date.now(),t.classList.add(l),!y)return;const c=_(t);null!==c&&(C(),p=c.addRipple(n,d))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+a;if(t&&d>0&&!v(n)){const c=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,c)}else n.classList.remove(l)},i=document;i.addEventListener("ionGestureCaptured",A),i.addEventListener("touchstart",t=>{s=(0,u.u)(t),D(t)},!0),i.addEventListener("touchcancel",L,!0),i.addEventListener("touchend",L,!0),i.addEventListener("pointercancel",A,!0),i.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-h;s<n&&D(t)},!0),i.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-h;s<n&&R(t)},!0)},M=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const s=o.composedPath();for(let a=0;a<s.length-2;a++){const e=s[a];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=o=>o.classList.contains("ion-activatable-instant"),_=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},l="ion-activated",k=200,T=200,h=2500}}]);