(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{2913:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[id]",function(){return n(8151)}])},138:function(e,t,n){"use strict";n.d(t,{IH:function(){return o},fH:function(){return u}});var r=n(3247),l=n(7623);let u=(0,r.hJ)(l.db,"articles"),o=async e=>{var t,n,o,a,i;e.createdAt=new Date,e.creator_uid=null===(t=l.I.currentUser)||void 0===t?void 0:t.uid,(null===(n=l.I.currentUser)||void 0===n?void 0:n.displayName)&&(e.creator_name=null===(o=l.I.currentUser)||void 0===o?void 0:o.displayName),(null===(a=l.I.currentUser)||void 0===a?void 0:a.photoURL)&&(e.creator_photoURL=null===(i=l.I.currentUser)||void 0===i?void 0:i.photoURL),delete e.image_binary;let c=await (0,r.ET)(u,e);return console.log("Document written with ID: ",c.id),c.id}},9751:function(e,t,n){"use strict";function r(e){let t=null,n=null;try{var r,l,u,o;t=null===(r=e.data())||void 0===r?void 0:null===(l=r.createdAt)||void 0===l?void 0:l.toDate(),n=null===(u=e.data())||void 0===u?void 0:null===(o=u.createdAt)||void 0===o?void 0:o.toDate()}catch(a){}return{uid:null==e?void 0:e.id,...null==e?void 0:e.data(),createdAt:t,updatedAt:n}}function l(e){if(!e)return null;let t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}n.d(t,{Q:function(){return r},q:function(){return l}})},8151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),l=n(3247),u=n(1163),o=n(7294),a=n(138),i=n(9751);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=["html","dangerouslySetInnerHTML"],d=function(e){var t=e.html,n=function(e,t){if(null==e)return{};var n,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,s),r=(0,o.useRef)(null);return(0,o.useEffect)(function(){if(!t||!r.current)throw Error("html prop cant't be null");var e=document.createRange().createContextualFragment(t);r.current.innerHTML="",r.current.appendChild(e)},[t,r]),o.createElement("div",c({},n,{ref:r}))},v=n(5675),f=n.n(v);function m(){var e,t,n;let c=(0,u.useRouter)().query.id,[s,v]=(0,o.useState)(),[m,h]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(async function(){h(!0);let e=(0,l.JU)(a.fH,c);v((0,i.Q)(await (0,l.QT)(e))),h(!1)})()},[c]),(0,r.jsxs)("div",{className:"max-w-7xl px-2 sm:px-6 lg:px-8",children:[(0,r.jsx)("div",{className:"max-w-4xl m-auto",children:(0,r.jsx)(f(),{src:null!==(e=null==s?void 0:s.thumbnail)&&void 0!==e?e:"",alt:"Picture of the author",className:"rounded aspect-video max-w-6xl mx-auto my-4",style:{width:"100%"}})}),(0,r.jsx)("h1",{className:"text-3xl font-bold",children:null==s?void 0:s.title}),(0,r.jsxs)("div",{className:"flex items-center my-2",children:[(0,r.jsx)(f(),{className:"w-20 h-20 rounded-full mr-4",src:null!==(t=null==s?void 0:s.creator_photoURL)&&void 0!==t?t:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Avatar"}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("p",{className:"text-gray-500",children:null==s?void 0:s.creator_name}),(0,r.jsx)("p",{className:"text-gray-600",children:(0,r.jsx)(r.Fragment,{children:new Date(null!==(n=null==s?void 0:s.createdAt)&&void 0!==n?n:"").toLocaleDateString()})})]})]}),(0,r.jsx)("p",{className:"text-gray-500",children:null==s?void 0:s.shortDescription}),(null==s?void 0:s.content)!=null&&(0,r.jsx)(d,{html:null==s?void 0:s.content,className:"my-4"}),s&&(0,i.q)(null==s?void 0:s.youtubeLink)&&(0,r.jsx)("iframe",{className:"w-full aspect-video rounded-sm",src:"https://www.youtube.com/embed/".concat((0,i.q)(null==s?void 0:s.youtubeLink)),allowFullScreen:!0})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2913)}),_N_E=e.O()}]);