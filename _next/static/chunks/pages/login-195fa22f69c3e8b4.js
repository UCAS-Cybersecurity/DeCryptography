(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return l(314)}])},569:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var a=l(5893),n=l(2016);l(113);var s=l(1415),o=l(8987),r=l(7294),i=l(4907);function c(e){let{defaultImage:t,aspectRatio:l,onFileChange:c}=e,[d,u]=(0,r.useState)(t),[f,h]=(0,r.useState)(),[x,p]=(0,r.useState)(),m=()=>{if(void 0!==x){var e;u(e=x.getCroppedCanvas().toDataURL()),c(function(e,t){let l=e.split(","),a=l[0],n=null==a?void 0:a.match(/:(.*?);/)[1],s=atob(l[1]),o=s.length,r=new Uint8Array(o);for(;o--;)r[o]=s.charCodeAt(o);return new File([r],t,{type:n})}(e,"image.png"))}},b=(0,r.useRef)(null),g=e=>{let t;e.preventDefault(),e.dataTransfer?t=e.dataTransfer.files:e.target&&(t=e.target.files);let l=new FileReader;l.onload=()=>{h(l.result)},l.readAsDataURL(t[0])};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"file",onChange:g,className:"hidden",ref:b}),f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,a.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:(0,a.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t",children:[(0,a.jsx)("h3",{className:"text-3xl font-semibold",children:"Crop Profile"}),(0,a.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>h(null),children:(0,a.jsx)(s.Z,{className:"h-6 w-6"})})]}),(0,a.jsx)("div",{className:"relative p-6 flex-auto",children:(0,a.jsx)(n.Z,{className:"w-full rounded-lg",src:f,style:{height:400,width:"100%"},aspectRatio:null!=l?l:1,onInitialized(e){p(e)},guides:!1,async crop(e){}})}),(0,a.jsxs)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-900 rounded-b",children:[(0,a.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>h(null),children:"Close"}),(0,a.jsx)("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick(){m(),h(null)},children:"Save Changes"})]})]})})}),(0,a.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full rounded bg-gray-200 cursor-pointer overflow-hidden relative",onClick(){var e;return null===(e=b.current)||void 0===e?void 0:e.click()},children:[(0,a.jsx)("div",{className:"top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all bg-opacity-50 z-10 absolute bg-slate-500",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[(0,a.jsx)(o.Z,{className:"h-6 w-6 text-white"}),(0,a.jsx)("p",{className:"text-white",children:"Click to change"})]})}),(0,a.jsx)(i.Z,{className:"w-full h-full object-cover",src:null!=d&&""!=d?d:"https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",alt:"cropped",fill:!0})]})]})}},314:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var a=l(5893),n=l(7294),s=l(4642),o=l(1163),r=l(569),i=l(7623),c=l(6650);function d(){let[e,t]=(0,n.useState)(""),[l,d]=(0,n.useState)(""),[u,f]=(0,n.useState)(""),[h,x]=(0,n.useState)(null),[p,m]=(0,n.useState)(!0),[b,g]=(0,n.useState)(null),{login:w,signup:v,currentUser:j,updateUser:y}=(0,s.a)(),N=(0,o.useRouter)();async function C(){var t,l;if(!e||!u){x("Please enter email and password");return}if(p){try{await w(e,u)}catch(a){x("Incorrect email or password")}return}let n=null===(t=await v(e,u))||void 0===t?void 0:null===(l=t.user)||void 0===l?void 0:l.uid;b&&n&&await k(b,n)}async function k(e,t){let a="",n=(0,c.iH)(i.t,"images/users/".concat(t)),s=(0,c.B0)(n,e);await (null==s?void 0:s.on("state_changed",e=>{let t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>{console.log(e)},async()=>{var e;console.log("File available at",a=await (0,c.Jt)(null==s?void 0:null===(e=s.snapshot)||void 0===e?void 0:e.ref)),await y({displayName:l,photoURL:a})}))}return(0,n.useEffect)(()=>{j&&(null==j?void 0:j.uid)&&N.push("/").then(()=>console.log("Welcome back!")).catch(e=>console.log(e))},[j,N]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4",children:[(0,a.jsx)("h1",{className:"font-extrabold select-none text-2xl sm:text-4xl uppercase",children:p?"Login":"register"}),h&&(0,a.jsx)("div",{className:"w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2",children:h}),!p&&(0,a.jsx)("div",{className:"w-40 h-40",children:(0,a.jsx)(r.Z,{onFileChange:e=>g(e),aspectRatio:1,defaultImage:""})}),!p&&(0,a.jsx)("input",{type:"text",value:l,onChange:e=>d(e.target.value),placeholder:"Name",className:"outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Email Address",className:"outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"}),(0,a.jsx)("input",{value:u,onChange:e=>f(e.target.value),type:"password",placeholder:"Password",className:"outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"}),(0,a.jsx)("button",{onClick:C,className:"w-full max-w-[40ch] border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900",children:(0,a.jsx)("h2",{className:"relative z-20",children:"Submit"})}),(0,a.jsx)("h2",{className:"duration-300 hover:scale-110 cursor-pointer",onClick:()=>m(!p),children:p?"Register":"Login"})]})})}function u(){return(0,a.jsx)(d,{})}}},function(e){e.O(0,[966,774,888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);