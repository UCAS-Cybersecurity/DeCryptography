(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{5011:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/create",function(){return l(9986)}])},569:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var r=l(5893),a=l(2016);l(113);var n=l(1415),s=l(8987),o=l(7294),i=l(4907);function c(e){let{defaultImage:t,aspectRatio:l,onFileChange:c}=e,[d,u]=(0,o.useState)(t),[x,f]=(0,o.useState)(),[h,m]=(0,o.useState)(),b=()=>{if(void 0!==h){var e;u(e=h.getCroppedCanvas().toDataURL()),c(function(e,t){let l=e.split(","),r=l[0],a=null==r?void 0:r.match(/:(.*?);/)[1],n=atob(l[1]),s=n.length,o=new Uint8Array(s);for(;s--;)o[s]=n.charCodeAt(s);return new File([o],t,{type:a})}(e,"image.png"))}},p=(0,o.useRef)(null),g=e=>{let t;e.preventDefault(),e.dataTransfer?t=e.dataTransfer.files:e.target&&(t=e.target.files);let l=new FileReader;l.onload=()=>{f(l.result)},l.readAsDataURL(t[0])};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",onChange:g,className:"hidden",ref:p}),x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,r.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:(0,r.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t",children:[(0,r.jsx)("h3",{className:"text-3xl font-semibold",children:"Crop Profile"}),(0,r.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>f(null),children:(0,r.jsx)(n.Z,{className:"h-6 w-6"})})]}),(0,r.jsx)("div",{className:"relative p-6 flex-auto",children:(0,r.jsx)(a.Z,{className:"w-full rounded-lg",src:x,style:{height:400,width:"100%"},aspectRatio:null!=l?l:1,onInitialized(e){m(e)},guides:!1,async crop(e){}})}),(0,r.jsxs)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-900 rounded-b",children:[(0,r.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>f(null),children:"Close"}),(0,r.jsx)("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick(){b(),f(null)},children:"Save Changes"})]})]})})}),(0,r.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full rounded bg-gray-200 cursor-pointer overflow-hidden relative",onClick(){var e;return null===(e=p.current)||void 0===e?void 0:e.click()},children:[(0,r.jsx)("div",{className:"top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all bg-opacity-50 z-10 absolute bg-slate-500",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[(0,r.jsx)(s.Z,{className:"h-6 w-6 text-white"}),(0,r.jsx)("p",{className:"text-white",children:"Click to change"})]})}),(0,r.jsx)(i.Z,{className:"w-full h-full object-cover",src:null!=d&&""!=d?d:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"cropped",fill:!0})]})]})}},138:function(e,t,l){"use strict";l.d(t,{IH:function(){return s},fH:function(){return n}});var r=l(3247),a=l(7623);let n=(0,r.hJ)(a.db,"articles"),s=async e=>{var t,l,s,o,i;e.createdAt=new Date,e.creator_uid=null===(t=a.I.currentUser)||void 0===t?void 0:t.uid,(null===(l=a.I.currentUser)||void 0===l?void 0:l.displayName)&&(e.creator_name=null===(s=a.I.currentUser)||void 0===s?void 0:s.displayName),(null===(o=a.I.currentUser)||void 0===o?void 0:o.photoURL)&&(e.creator_photoURL=null===(i=a.I.currentUser)||void 0===i?void 0:i.photoURL),delete e.image_binary;let c=await (0,r.ET)(n,e);return console.log("Document written with ID: ",c.id),c.id}},9986:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var r=l(5893),a=l(7294),n=l(4642),s=l(8974),o=l(7015),i=l(8499),c=l(168),d=l(5152),u=l.n(d);l(91);var x=l(138),f=l(1163),h=l(569),m=l(6650),b=l(7623),p=l(2512);let g=u()(()=>Promise.all([l.e(937),l.e(156)]).then(l.t.bind(l,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),v=[{name:"Content",icon:s.Z,build:(e,t)=>(0,r.jsx)("div",{className:"w-full h-full",children:(0,r.jsx)(g,{className:"h-full",value:e.content,onChange:l=>t({...e,content:l})})})},{name:"Code",icon:o.Z,build:(e,t)=>(0,r.jsx)("div",{className:"h-full",children:(0,r.jsx)("textarea",{className:"w-full h-full p-4 border border-gray-300 block",cols:50,value:e.content,onChange:l=>t({...e,content:l.target.value})})})},{name:"PDF",icon:i.Z,build:(e,t)=>(0,r.jsx)(w,{article:e,setArticle:t})}];function w(e){let{article:t,setArticle:l}=e,n=(0,a.useCallback)(e=>{},[]),{getRootProps:s,getInputProps:o,isDragActive:i}=(0,p.uI)({onDrop:n});return(0,r.jsxs)("div",{className:"w-full h-full p-4 border border-gray-300 text-center flex items-center justify-center",...s(),children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(c.Z,{className:"w-10 h-10 mx-auto my-2"}),i?(0,r.jsx)("p",{children:"Drop the files here ..."}):(0,r.jsx)("p",{children:"Drop files here, or click to select files"})]}),(0,r.jsx)("input",{...o()})]})}function j(){let[e,t]=(0,a.useState)({content:"",title:"",thumbnail:"",shortDescription:"",youtubeLink:""}),[l,s]=(0,a.useState)(0),o=(0,f.useRouter)(),[i,c]=(0,a.useState)(!1);async function d(e){c(!0),await (0,x.IH)(e),o.push("/"),c(!1)}async function u(){let l=null==e?void 0:e.image_binary;if(!l)return d(e);let r="",a=(0,m.iH)(b.t,"images/articles/".concat(new Date)),n=(0,m.B0)(a,l);await n.on("state_changed",e=>{let t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>{console.log(e)},async()=>{try{c(!0),r=await (0,m.Jt)(n.snapshot.ref),t({...e,thumbnail:r}),console.log("File available at",r),await d({...e,thumbnail:r}),c(!1)}catch(l){console.log(l)}})}let{currentUser:p}=(0,n.a)();return(0,a.useEffect)(()=>{p&&(null==p?void 0:p.uid)||o.push("/login")},[p,o]),(0,r.jsx)("div",{className:"m-auto my-4 mt-6 max-w-5xl px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 max-w-6xl w-full",children:[(0,r.jsx)("div",{className:"aspect-video w-96 ring-green ring-1 rounded ring-offset-2",children:(0,r.jsx)(h.Z,{defaultImage:"",aspectRatio:16/9,onFileChange(l){t({...e,image_binary:l})}})}),(0,r.jsx)("input",{type:"text",value:e.title,onChange:l=>t({...e,title:l.target.value}),placeholder:"Title",className:"outline-none duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue text-slate-900 p-2 w-full"}),(0,r.jsx)("textarea",{placeholder:"Short Description",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue",rows:4,cols:50,value:e.shortDescription,onChange:l=>t({...e,shortDescription:l.target.value})}),(0,r.jsx)("input",{value:e.youtubeLink,onChange:l=>t({...e,youtubeLink:l.target.value}),type:"text",placeholder:"Youtube iframe",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"}),(0,r.jsxs)("div",{className:"border-b border-gray-200 dark:border-gray-700 w-full",children:[(0,r.jsx)("ul",{className:"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400",children:v.map((e,t)=>(0,r.jsx)("li",{className:"mr-2",children:(0,r.jsxs)("button",{onClick:()=>s(t),className:t===l?"inline-flex p-4 text-blue rounded-t-lg border-b-2 border-blue  active dark:text-blue dark:border-blue group":"inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group","aria-current":"page",children:[(0,r.jsx)(e.icon,{className:t===l?"mr-2 w-5 h-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-400":"mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),e.name]})},t))}),(0,r.jsx)("div",{className:"h-96 mb-6 pb-6 w-full min-w-full",children:v.filter((e,t)=>t===l)[0].build(e,t)}),(0,r.jsxs)("button",{disabled:i,onClick:u,className:"border-0 outline-none ring-0 flex items-center justify-center w-full text-lg py-2 duration-300 relative overflow-hidden from-blue to-green text-white enabled:hover:shadow-lg disabled:bg-slate-400 enabled:bg-gradient-to-r",children:[i&&(0,r.jsxs)("svg",{className:"animate-spin text-slate-900",version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40",children:[(0,r.jsx)("path",{opacity:"0.2",fill:"#fff",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),(0,r.jsx)("path",{fill:"#fff",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",children:(0,r.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"})})]}),"Submit"]})]})]})})}var y=l(4907);function N(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"relative",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 h-80 flex items-center",style:{borderBottomRightRadius:"70px"},children:(0,r.jsx)("h1",{className:"text-6xl font-light text-white m-auto text-center",children:"Create an Article"})}),(0,r.jsx)("div",{className:"absolute ",style:{bottom:0,left:0,width:"200px",height:"200px"},children:(0,r.jsx)(y.Z,{className:"",src:"/logo-overlay.png",alt:"Ucas",fill:!0})})]}),(0,r.jsx)(j,{})]})}}},function(e){e.O(0,[966,793,774,888,179],function(){return e(e.s=5011)}),_N_E=e.O()}]);