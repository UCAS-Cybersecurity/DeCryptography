(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(8840)}])},138:function(e,t,l){"use strict";l.d(t,{IH:function(){return s},Od:function(){return o},Vx:function(){return r},fH:function(){return a}});var n=l(3247),i=l(8323);let a=(0,n.hJ)(i.db,"articles"),s=async e=>{var t,l,s,r,o;e.createdAt=new Date,e.creator_uid=null===(t=i.I.currentUser)||void 0===t?void 0:t.uid,(null===(l=i.I.currentUser)||void 0===l?void 0:l.displayName)&&(e.creator_name=null===(s=i.I.currentUser)||void 0===s?void 0:s.displayName),(null===(r=i.I.currentUser)||void 0===r?void 0:r.photoURL)&&(e.creator_photoURL=null===(o=i.I.currentUser)||void 0===o?void 0:o.photoURL),delete e.image_binary,delete e.content;let d=await (0,n.ET)(a,e);return console.log("Document written with ID: ",d.id),d.id},r=async e=>{e.updatedAt=new Date;let t=(0,n.JU)(a,e.uid);await (0,n.pl)(t,e,{merge:!0})},o=async e=>{let t=(0,n.JU)(a,e);await (0,n.oe)(t)}},9751:function(e,t,l){"use strict";function n(e){let t=null,l=null;try{var n,i,a,s;t=null===(n=e.data())||void 0===n?void 0:null===(i=n.createdAt)||void 0===i?void 0:i.toDate(),l=null===(a=e.data())||void 0===a?void 0:null===(s=a.createdAt)||void 0===s?void 0:s.toDate()}catch(r){}return{uid:null==e?void 0:e.id,...null==e?void 0:e.data(),createdAt:t,updatedAt:l}}function i(e){if(!e)return null;let t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}l.d(t,{Q:function(){return n},q:function(){return i}})},8840:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var n=l(5893),i=l(3247),a=l(4907),s=l(7294),r=l(1664),o=l.n(r);function d(e){var t,l;let{article:i}=e;return(0,n.jsx)(o(),{href:"/article/".concat(null==i?void 0:i.uid),className:"my-4",children:(0,n.jsxs)("div",{className:"m-auto max-w-sm rounded overflow-hidden w-full",children:[(0,n.jsx)("div",{className:"aspect-video relative",children:(0,n.jsx)(a.Z,{className:"w-full rounded",src:(null==i?void 0:i.thumbnail)?null==i?void 0:i.thumbnail:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Sunset in the mountains",fill:!0})}),(0,n.jsx)("div",{className:"w-full mt-5",children:(0,n.jsxs)("div",{className:"w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal mt-5",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"text-gray-900 font-bold text-xl mb-2",children:[(0,n.jsx)("p",{className:"line-clamp-1",children:null==i?void 0:i.title}),(0,n.jsxs)("p",{className:"text-gray-700 text-base line-clamp-2",children:[null==i?void 0:i.shortDescription,"..."]})]})}),(0,n.jsxs)("div",{className:"flex items-center mt-8",children:[(0,n.jsx)(a.Z,{className:"w-12 h-12 rounded-full mr-4",src:null!==(t=null==i?void 0:i.creator_photoURL)&&void 0!==t?t:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"Avatar",width:40,height:40}),(0,n.jsxs)("div",{className:"text-sm",children:[(0,n.jsx)("p",{className:"text-gray-900 leading-none",children:null==i?void 0:i.creator_name}),(0,n.jsx)("p",{className:"text-gray-600",children:(0,n.jsx)(n.Fragment,{children:new Date(null!==(l=null==i?void 0:i.createdAt)&&void 0!==l?l:"").toLocaleDateString()})})]})]})]})})]})})}var c=l(138),u=l(9751);function m(){let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(0,i.cf)(c.fH,e=>{var l;t(null==e?void 0:null===(l=e.docs)||void 0===l?void 0:l.map(e=>(0,u.Q)(e)))})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:"relative",children:[(0,n.jsx)("div",{className:"bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 ",style:{borderBottomRightRadius:"70px"},children:(0,n.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 m-auto gap-4 content-center justify-center mx-4 px-4",children:[(0,n.jsxs)("div",{className:"sm:p-4 sm:m-4 mb-8 md:mx-8 text-base",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Cryptography Tutorials"}),(0,n.jsx)("p",{className:"text-xl text-white mt-4",children:"An application to share descriptions of the most common cryptography algorithms. mainly as an assignment for collage but built to keep online."})]}),(0,n.jsx)("div",{className:"justify-center items-center hidden sm:flex",children:(0,n.jsx)(a.Z,{src:"/landing-illustration.png",alt:"landing illustration",width:332,height:330})})]})}),(0,n.jsx)("div",{className:"absolute ",style:{bottom:0,left:0,width:"200px",height:"200px"},children:(0,n.jsx)(a.Z,{className:"",src:"/logo-overlay.png",alt:"Ucas",fill:!0})})]}),(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto gap-8 content-center justify-center",children:null==e?void 0:e.map(e=>(0,n.jsx)(d,{article:e},null==e?void 0:e.uid))})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);