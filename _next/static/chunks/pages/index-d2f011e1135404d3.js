(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8840)}])},138:function(e,l,n){"use strict";n.d(l,{IH:function(){return d},fH:function(){return i}});var t=n(3247),r=n(7623);let i=(0,t.hJ)(r.db,"articles"),d=async e=>{var l,n,d,o,a;e.createdAt=new Date,e.creator_uid=null===(l=r.I.currentUser)||void 0===l?void 0:l.uid,(null===(n=r.I.currentUser)||void 0===n?void 0:n.displayName)&&(e.creator_name=null===(d=r.I.currentUser)||void 0===d?void 0:d.displayName),(null===(o=r.I.currentUser)||void 0===o?void 0:o.photoURL)&&(e.creator_photoURL=null===(a=r.I.currentUser)||void 0===a?void 0:a.photoURL),delete e.image_binary;let u=await (0,t.ET)(i,e);return console.log("Document written with ID: ",u.id),u.id}},9751:function(e,l,n){"use strict";function t(e){let l=null,n=null;try{var t,r,i,d;l=null===(t=e.data())||void 0===t?void 0:null===(r=t.createdAt)||void 0===r?void 0:r.toDate(),n=null===(i=e.data())||void 0===i?void 0:null===(d=i.createdAt)||void 0===d?void 0:d.toDate()}catch(o){}return{uid:null==e?void 0:e.id,...null==e?void 0:e.data(),createdAt:l,updatedAt:n}}function r(e){if(!e)return null;let l=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return l&&11===l[2].length?l[2]:null}n.d(l,{Q:function(){return t},q:function(){return r}})},8840:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return h}});var t=n(5893),r=n(3247),i=n(7294),d=n(5675),o=n.n(d),a=n(1664),u=n.n(a);function s(e){var l,n,r;let{article:i}=e;return(0,t.jsx)(u(),{href:"/article/".concat(null==i?void 0:i.uid),children:(0,t.jsxs)("div",{className:"m-auto max-w-sm rounded overflow-hidden w-full",children:[(0,t.jsx)("div",{className:"aspect-video relative",children:(0,t.jsx)(o(),{className:"w-full rounded-sm",src:(null==i?void 0:i.thumbnail)?null==i?void 0:i.thumbnail:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Sunset in the mountains",fill:!0})}),(0,t.jsxs)("div",{className:"w-full rounded-sm",children:[(0,t.jsx)("div",{title:null==i?void 0:i.title}),(0,t.jsxs)("div",{className:"w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",children:[(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"text-gray-900 font-bold text-xl mb-2 h-14 overflow-hidden",children:[null==i?void 0:i.title,(0,t.jsxs)("p",{className:"text-gray-700 text-base",children:[null==i?void 0:null===(l=i.shortDescription)||void 0===l?void 0:l.substring(0,48),"..."]})]})}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(o(),{className:"w-10 h-10 rounded-full mr-4",src:null!==(n=null==i?void 0:i.creator_photoURL)&&void 0!==n?n:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Avatar of Jonathan Reinink",width:40,height:40}),(0,t.jsxs)("div",{className:"text-sm",children:[(0,t.jsx)("p",{className:"text-gray-900 leading-none",children:null==i?void 0:i.creator_name}),(0,t.jsx)("p",{className:"text-gray-600",children:(0,t.jsx)(t.Fragment,{children:new Date(null!==(r=null==i?void 0:i.createdAt)&&void 0!==r?r:"").toLocaleDateString()})})]})]})]})]})]})})}var c=n(138),v=n(9751);function h(){let[e,l]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(0,r.cf)(c.fH,e=>{var n;l(null==e?void 0:null===(n=e.docs)||void 0===n?void 0:n.map(e=>(0,v.Q)(e)))})},[]),(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto gap-4 content-center justify-center",children:null==e?void 0:e.map(e=>(0,t.jsx)(s,{article:e},null==e?void 0:e.uid))})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);