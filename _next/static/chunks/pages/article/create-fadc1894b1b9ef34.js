(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{5011:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/create",function(){return l(9986)}])},569:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var r=l(5893),n=l(2016);l(113);var a=l(1415),o=l(8987),s=l(7294),i=l(4907);function u(e){let{defaultImage:t,aspectRatio:l,onFileChange:u}=e,[c,d]=(0,s.useState)(t),[f,x]=(0,s.useState)(),[p,h]=(0,s.useState)(),m=()=>{if(void 0!==p){var e;d(e=p.getCroppedCanvas().toDataURL()),u(function(e,t){let l=e.split(","),r=l[0],n=null==r?void 0:r.match(/:(.*?);/)[1],a=atob(l[1]),o=a.length,s=new Uint8Array(o);for(;o--;)s[o]=a.charCodeAt(o);return new File([s],t,{type:n})}(e,"image.png"))}},b=(0,s.useRef)(null),g=e=>{let t;e.preventDefault(),e.dataTransfer?t=e.dataTransfer.files:e.target&&(t=e.target.files);let l=new FileReader;l.onload=()=>{x(l.result)},l.readAsDataURL(t[0])};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",accept:"image/*.png, image/*.jpg, image/*.jpeg",onChange:g,className:"hidden",ref:b}),f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,r.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:(0,r.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t",children:[(0,r.jsx)("h3",{className:"text-3xl font-semibold",children:"Crop Profile"}),(0,r.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>x(null),children:(0,r.jsx)(a.Z,{className:"h-6 w-6"})})]}),(0,r.jsx)("div",{className:"relative p-6 flex-auto",children:(0,r.jsx)(n.Z,{className:"w-full rounded-lg",src:f,style:{height:400,width:"100%"},aspectRatio:null!=l?l:1,onInitialized(e){h(e)},guides:!1,async crop(e){}})}),(0,r.jsxs)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-900 rounded-b",children:[(0,r.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>x(null),children:"Close"}),(0,r.jsx)("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick(){m(),x(null)},children:"Save Changes"})]})]})})}),(0,r.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full rounded bg-gray-200 cursor-pointer overflow-hidden relative",onClick(){var e;return null===(e=b.current)||void 0===e?void 0:e.click()},children:[(0,r.jsx)("div",{className:"top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all bg-opacity-50 z-10 absolute bg-slate-500",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[(0,r.jsx)(o.Z,{className:"h-6 w-6 text-white"}),(0,r.jsx)("p",{className:"text-white",children:"Click to change"})]})}),(0,r.jsx)(i.Z,{className:"w-full h-full object-cover",src:null!=c&&""!=c?c:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"cropped",fill:!0})]})]})}},138:function(e,t,l){"use strict";l.d(t,{IH:function(){return o},Od:function(){return s},fH:function(){return a}});var r=l(3247),n=l(8323);let a=(0,r.hJ)(n.db,"articles"),o=async e=>{var t,l,o,s,i;e.createdAt=new Date,e.creator_uid=null===(t=n.I.currentUser)||void 0===t?void 0:t.uid,(null===(l=n.I.currentUser)||void 0===l?void 0:l.displayName)&&(e.creator_name=null===(o=n.I.currentUser)||void 0===o?void 0:o.displayName),(null===(s=n.I.currentUser)||void 0===s?void 0:s.photoURL)&&(e.creator_photoURL=null===(i=n.I.currentUser)||void 0===i?void 0:i.photoURL),delete e.image_binary,delete e.content;let u=await (0,r.ET)(a,e);return console.log("Document written with ID: ",u.id),u.id},s=async e=>{let t=(0,r.JU)(a,e);await (0,r.oe)(t)}},5527:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var r=l(6650),n=l(5933),a=l(8323);function o(){let e=(0,n.V)();async function t(t){let{label:l,file:n,path:o,onDone:s=()=>{},onError:i=()=>{},onProgress:u=()=>{}}=t;if(!n)return!0;let c="",d=(0,r.iH)(a.t,o),f=(0,r.B0)(d,n);return null==e||e.addUpload({label:l,progress:0,size:n.size}),await f.on("state_changed",t=>{null==e||e.updateUpload({label:l,progress:t.bytesTransferred/t.totalBytes*100,size:n.size});let r=t.bytesTransferred/t.totalBytes*100;switch(console.log("Upload is "+r+"% done"),u(r),t.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},t=>{console.log(t),i(t),null==e||e.removeUpload({label:l,progress:100,size:n.size})},async()=>{try{c=await (0,r.Jt)(f.snapshot.ref),s(c),null==e||e.updateUpload({label:l,progress:100,size:n.size})}catch(t){console.log(t),i(t)}}),!1}return{uploadImage:t}}},9986:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var r=l(5893),n=l(7294),a=l(175),o=l(8974),s=l(7015),i=l(8499),u=l(168),c=l(5152),d=l.n(c);l(91);var f=l(138),x=l(1163),p=l(569),h=l(8323),m=l(2512),b=l(5527);let g=d()(()=>Promise.all([l.e(937),l.e(156)]).then(l.t.bind(l,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),v=[{name:"Content",icon:o.Z,build:(e,t)=>(0,r.jsx)("div",{className:"w-full h-full",children:(0,r.jsx)(g,{className:"h-full",value:e.content,onChange:l=>t({...e,content:l})})})},{name:"Code",icon:s.Z,build:(e,t)=>(0,r.jsx)("div",{className:"h-full",children:(0,r.jsx)("textarea",{className:"w-full h-full p-4 border border-gray-300 block",cols:50,value:e.content,onChange:l=>t({...e,content:l.target.value})})})},{name:"PDF",icon:i.Z,build:(e,t,l,n,a)=>(0,r.jsx)(w,{pdf:l,setPdf:n,setWaiting:a})}];function w(e){let{pdf:t,setPdf:l,setWaiting:a}=e,[o,s]=(0,n.useState)(!1),i=(0,b.Z)(),c=(0,n.useCallback)(e=>{var t;0!==e.length&&(s(!0),a(!0),i.uploadImage({file:e[0],label:"Pdf file",onDone(e){s(!1),a(!1),l(e)},path:"pdf/articles/".concat(null===(t=h.I.currentUser)||void 0===t?void 0:t.uid,".").concat(new Date().getTime(),".pdf")}))},[]),{getRootProps:d,getInputProps:f,isDragActive:x}=(0,m.uI)({accept:{"application/pdf":[".pdf"]},multiple:!1,onDrop:c});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full h-64 p-4 border border-gray-300 text-center flex items-center justify-center",...d(),children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(u.Z,{className:"w-10 h-10 mx-auto my-2"}),x?(0,r.jsx)("p",{children:"Drop the files here ..."}):(0,r.jsx)("p",{children:"Drop files here, or click to select files"})]}),(0,r.jsx)("input",{...f()})]}),(t||o)&&(0,r.jsxs)("div",{className:"w-full flex items-center justify-start p-4 bg-gradient-to-r rounded-b-lg text-white font-bold from-blue to-green",children:[(0,r.jsx)(u.Z,{className:"w-10 h-10 my-2"}),(0,r.jsx)("a",{href:o?"":t,target:"_blank",className:"line-clamp-1 w-full",rel:"noreferrer",children:o?"loading...":"Uploaded ".concat(t)})]})]})}function y(){let e=(0,b.Z)(),[t,l]=(0,n.useState)(null),[o,s]=(0,n.useState)(!1),[i,u]=(0,n.useState)({content:"",title:"",thumbnail:"",shortDescription:"",youtubeLink:"",contentUrl:"",youtubeLink2:"",replLink:""}),[c,d]=(0,n.useState)(0),m=(0,x.useRouter)(),[g,w]=(0,n.useState)(!1),[y,j]=(0,n.useState)(""),[N,k]=(0,n.useState)("");async function C(e){w(!0),await (0,f.IH)(e),m.push("/"),w(!1)}(0,n.useEffect)(()=>{y&&u({...i,thumbnail:y})},[y]),(0,n.useEffect)(()=>{N&&u({...i,contentUrl:N})},[N]),(0,n.useEffect)(()=>{t&&u({...i,pdfUrl:t})},[t]),(0,n.useEffect)(()=>{console.log(i),i.contentUrl&&i.thumbnail&&!g&&C(i)},[i]);let{currentUser:U}=(0,a.a)();return(0,n.useEffect)(()=>{U&&(null==U?void 0:U.uid)||m.push("/login")},[U,m]),(0,r.jsx)("div",{className:"m-auto my-4 mt-6 max-w-5xl px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 max-w-6xl w-full",children:[(0,r.jsx)("div",{className:"aspect-video w-96 ring-green ring-1 rounded ring-offset-2",children:(0,r.jsx)(p.Z,{defaultImage:"",aspectRatio:16/9,onFileChange(e){u({...i,image_binary:e})}})}),(0,r.jsx)("input",{type:"text",value:i.title,onChange:e=>u({...i,title:e.target.value}),placeholder:"Title",className:"outline-none duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue text-slate-900 p-2 w-full"}),(0,r.jsx)("textarea",{placeholder:"Short Description",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue",rows:4,cols:50,value:i.shortDescription,onChange:e=>u({...i,shortDescription:e.target.value})}),(0,r.jsx)("input",{value:i.youtubeLink,onChange:e=>u({...i,youtubeLink:e.target.value}),type:"text",placeholder:"Youtube iframe",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"}),(0,r.jsx)("input",{value:i.youtubeLink2,onChange:e=>u({...i,youtubeLink2:e.target.value}),type:"text",placeholder:"Youtube iframe Secondary",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"}),(0,r.jsx)("input",{value:i.replLink,onChange:e=>u({...i,replLink:e.target.value}),type:"text",placeholder:"Repl link",className:"outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"}),(0,r.jsxs)("div",{className:"border-b border-gray-200 dark:border-gray-700 w-full",children:[(0,r.jsx)("ul",{className:"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400",children:v.map((e,t)=>(0,r.jsx)("li",{className:"mr-2",children:(0,r.jsxs)("button",{onClick:()=>d(t),className:t===c?"inline-flex p-4 text-blue rounded-t-lg border-b-2 border-blue  active dark:text-blue dark:border-blue group":"inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group","aria-current":"page",children:[(0,r.jsx)(e.icon,{className:t===c?"mr-2 w-5 h-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-400":"mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),e.name]})},t))}),(0,r.jsx)("div",{className:"h-96 mb-6 pb-6 w-full min-w-full",children:v.filter((e,t)=>t===c)[0].build(i,u,t,l,s)}),(0,r.jsxs)("button",{disabled:g||o,onClick:function(){var t,l;let r=null==i?void 0:i.image_binary;e.uploadImage({file:r,label:"Article Thumbnail",onDone:e=>j(e),path:"images/articles/".concat(null===(t=h.I.currentUser)||void 0===t?void 0:t.uid,".").concat(new Date().getTime(),".png")});let n=i.content,a=new Blob([n],{type:"text/html"}),o=new File([a],"index.html",{type:"text/html"});e.uploadImage({file:o,label:"Article Content",onDone:e=>k(e),path:"content/articles/".concat(null===(l=h.I.currentUser)||void 0===l?void 0:l.uid,".").concat(new Date().getTime(),".html")})},className:"border-0 outline-none ring-0 flex items-center justify-center w-full text-lg py-2 duration-300 relative overflow-hidden from-blue to-green text-white enabled:hover:shadow-lg disabled:bg-slate-400 enabled:bg-gradient-to-r",children:[g&&(0,r.jsxs)("svg",{className:"animate-spin text-slate-900",version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40",enableBackground:"new 0 0 40 40",children:[(0,r.jsx)("path",{opacity:"0.2",fill:"#fff",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),(0,r.jsx)("path",{fill:"#fff",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",children:(0,r.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"})})]}),"Submit"]})]})]})})}var j=l(4907);function N(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"relative",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 h-80 flex items-center",style:{borderBottomRightRadius:"70px"},children:(0,r.jsx)("h1",{className:"text-6xl font-light text-white m-auto text-center",children:"Create an Article"})}),(0,r.jsx)("div",{className:"absolute ",style:{bottom:0,left:0,width:"200px",height:"200px"},children:(0,r.jsx)(j.Z,{className:"",src:"/logo-overlay.png",alt:"Ucas",fill:!0})})]}),(0,r.jsx)(y,{})]})}}},function(e){e.O(0,[966,793,774,888,179],function(){return e(e.s=5011)}),_N_E=e.O()}]);