(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1314)}])},138:function(e,l,t){"use strict";t.d(l,{IH:function(){return r},Od:function(){return d},U2:function(){return o},Vx:function(){return c},fH:function(){return a}});var n=t(3247),s=t(8323),i=t(9751);let a=(0,n.hJ)(s.db,"articles"),r=async e=>{var l,t,i,r,c;e.createdAt=new Date,e.creator_uid=null===(l=s.I.currentUser)||void 0===l?void 0:l.uid,(null===(t=s.I.currentUser)||void 0===t?void 0:t.displayName)&&(e.creator_name=null===(i=s.I.currentUser)||void 0===i?void 0:i.displayName),(null===(r=s.I.currentUser)||void 0===r?void 0:r.photoURL)&&(e.creator_photoURL=null===(c=s.I.currentUser)||void 0===c?void 0:c.photoURL),delete e.image_binary,delete e.content;let d=await (0,n.ET)(a,e);return d.id},c=async e=>{e.updatedAt=new Date;let l=(0,n.JU)(a,e.uid);await (0,n.pl)(l,e,{merge:!0})},d=async e=>{let l=(0,n.JU)(a,e);await (0,n.oe)(l)},o=async e=>{let l=(0,n.JU)(a,e),t=await (0,n.QT)(l);if(!t.exists())return null;{let s=(0,i.Q)(t);return s.contentUrl&&(s.content=await u(s.contentUrl)),s}};async function u(e){return await (await fetch(e)).text()}},9751:function(e,l,t){"use strict";function n(e){let l=null,t=null;try{var n,s,i,a;l=null===(n=e.data())||void 0===n?void 0:null===(s=n.createdAt)||void 0===s?void 0:s.toDate(),t=null===(i=e.data())||void 0===i?void 0:null===(a=i.createdAt)||void 0===a?void 0:a.toDate()}catch(r){}return{uid:null==e?void 0:e.id,...null==e?void 0:e.data(),createdAt:l,updatedAt:t}}function s(e){if(!e)return null;let l=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return l&&11===l[2].length?l[2]:null}t.d(l,{Q:function(){return n},q:function(){return s}})},1314:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return v}});var n=t(5893),s=t(3247),i=t(8240),a=t(7294),r=t(1664),c=t.n(r),d=t(381),o=t.n(d);function u(e){var l;let{article:t}=e;return(0,n.jsx)(c(),{href:"/article/".concat(null==t?void 0:t.uid),className:"my-4",children:(0,n.jsxs)("div",{className:"m-auto max-w-sm rounded overflow-hidden w-full",children:[(0,n.jsx)("div",{className:"aspect-video relative",children:(0,n.jsx)(i.Z,{className:"w-full rounded object-cover",src:(null==t?void 0:t.thumbnail)?null==t?void 0:t.thumbnail:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Sunset in the mountains",fill:!0})}),(0,n.jsx)("div",{className:"w-full mt-5",children:(0,n.jsxs)("div",{className:"w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal mt-5",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"text-gray-900 font-bold text-xl mb-2 h-12",children:[(0,n.jsx)("p",{className:"line-clamp-1",children:null==t?void 0:t.title}),(0,n.jsxs)("p",{className:"text-gray-700 text-base line-clamp-2",children:[null==t?void 0:t.shortDescription,"..."]})]})}),(0,n.jsxs)("div",{className:"flex items-center mt-8 overflow-visible",children:[(0,n.jsx)(i.Z,{className:"w-12 h-12 rounded-full mr-4 object-cover shadow",src:null!==(l=null==t?void 0:t.creator_photoURL)&&void 0!==l?l:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Avatar",width:40,height:40}),(0,n.jsxs)("div",{className:"text-sm",children:[(0,n.jsx)("p",{className:"text-gray-900 leading-none",children:null==t?void 0:t.creator_name}),(0,n.jsx)("p",{className:"text-gray-600",children:(0,n.jsx)(n.Fragment,{children:o()(t.createdAt).format("LL")})})]})]})]})})]})})}var m=t(138),h=t(9751);function x(e){var l;let{article:t}=e;return(0,n.jsx)("div",{className:"my-8",children:(0,n.jsx)(c(),{href:"/article/".concat(null==t?void 0:t.uid),children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row m-auto md:px-0 px-4 items-stretch justify-items-stretch",children:[(0,n.jsx)("div",{className:"aspect-video relative h-full w-full",children:(0,n.jsx)(i.Z,{className:"w-full rounded object-cover",src:(null==t?void 0:t.thumbnail)?null==t?void 0:t.thumbnail:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Sunset in the mountains",fill:!0})}),(0,n.jsxs)("div",{className:"mt-5 flex justify-between flex-col self-stretch items-start",children:[(0,n.jsxs)("div",{className:"w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal mt-5",children:[(0,n.jsxs)("div",{className:"flex items-center mb-8",children:[(0,n.jsx)(i.Z,{className:"w-16 h-16 rounded-full mr-4 object-cover shadow-lg",src:null!==(l=null==t?void 0:t.creator_photoURL)&&void 0!==l?l:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Avatar",width:64,height:64}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-gray-900 leading-none",children:null==t?void 0:t.creator_name}),(0,n.jsx)("p",{className:"text-gray-600",children:(0,n.jsx)(n.Fragment,{children:o()(t.createdAt).format("LL")})})]})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"text-gray-900 font-bold text-xl mb-2",children:[(0,n.jsx)("p",{className:"line-clamp-2 mb-2",children:null==t?void 0:t.title}),(0,n.jsxs)("p",{className:"text-gray-700 text-base line-clamp-3",children:[null==t?void 0:t.shortDescription,"..."]})]})})]}),(0,n.jsx)("div",{className:"self-end w-full",children:(0,n.jsx)("button",{className:"text-blue font-bold pt-2 rounded hover:underline",children:"Read More"})})]})]})})})}function v(){var e;let[l,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{(0,s.cf)(m.fH,e=>{var l;t(null==e?void 0:null===(l=e.docs)||void 0===l?void 0:l.map(e=>(0,h.Q)(e)))})},[]);let r=null==l?void 0:l.filter(e=>e.is_featured).sort((e,l)=>e.createdAt>l.createdAt?-1:e.createdAt<l.createdAt?1:0).slice(0,1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:"relative",children:[(0,n.jsx)("div",{className:"bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 ",style:{borderBottomRightRadius:"70px"},children:(0,n.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 m-auto gap-4 content-center justify-center mx-4 px-4",children:[(0,n.jsxs)("div",{className:"sm:p-4 sm:m-4 mb-8 md:mx-8 text-base",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Cryptography Tutorials"}),(0,n.jsx)("p",{className:"text-xl text-white mt-4",children:"An application to share descriptions of the most common cryptography algorithms. mainly as an assignment for collage but built to keep online."})]}),(0,n.jsx)("div",{className:"justify-center items-center hidden sm:flex",children:(0,n.jsx)(i.Z,{src:"/landing-illustration.png",alt:"landing illustration",width:332,height:330})})]})}),(0,n.jsx)("div",{className:"absolute ",style:{bottom:0,left:0,width:"200px",height:"200px"},children:(0,n.jsx)(i.Z,{className:"",src:"/logo-overlay.png",alt:"Ucas",fill:!0})})]}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"mx-auto max-w-6xl px-2 sm:px-6 lg:px-8",children:null==r?void 0:r.map(e=>(0,n.jsx)(x,{article:e},null==e?void 0:e.uid))})}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"mx-auto max-w-6xl px-2 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto gap-8 content-center justify-center",children:null===(e=null==l?void 0:l.filter(e=>!e.is_featured))||void 0===e?void 0:e.map(e=>(0,n.jsx)(u,{article:e},null==e?void 0:e.uid))})})})]})}}},function(e){e.O(0,[885,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);