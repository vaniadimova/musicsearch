import{S as w,i as y,s as z,e as E,t as v,c as d,a as b,g as P,d as _,f as u,E as R,h as N,k as S,l as q,n as h,F as C}from"./chunks/vendor-96c4e75a.js";function F(r){let f,t=r[1].frame+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(_)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&N(a,t)},d(l){l&&_(f)}}}function H(r){let f,t=r[1].stack+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(_)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&N(a,t)},d(l){l&&_(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&F(r),n=r[1].stack&&H(r);return{c(){f=E("h1"),t=v(r[0]),a=S(),l=E("pre"),c=v(s),k=S(),i&&i.c(),m=S(),n&&n.c(),p=q()},l(e){f=d(e,"H1",{});var o=b(f);t=P(o,r[0]),o.forEach(_),a=h(e),l=d(e,"PRE",{});var j=b(l);c=P(j,s),j.forEach(_),k=h(e),i&&i.l(e),m=h(e),n&&n.l(e),p=q()},m(e,o){u(e,f,o),R(f,t),u(e,a,o),u(e,l,o),R(l,c),u(e,k,o),i&&i.m(e,o),u(e,m,o),n&&n.m(e,o),u(e,p,o)},p(e,[o]){o&1&&N(t,e[0]),o&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,o):(i=F(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?n?n.p(e,o):(n=H(e),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},i:C,o:C,d(e){e&&_(f),e&&_(a),e&&_(l),e&&_(k),i&&i.d(e),e&&_(m),n&&n.d(e),e&&_(p)}}}function G({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class I extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{I as default,G as load};
