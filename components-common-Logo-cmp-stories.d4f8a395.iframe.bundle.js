"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[1498],{"./src/components/common/Logo/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSize:()=>CustomSize,OnlyIcon:()=>OnlyIcon,WithColor:()=>WithColor,WithLink:()=>WithLink,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Logo/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/common/Logo",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{size:{control:"text"},text:{control:"text"}}},defaultArgs={size:void 0},defaultParams={},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const OnlyIcon=Template.bind({});OnlyIcon.args={...defaultArgs,text:!1},OnlyIcon.parameters={...defaultParams};const WithText=Template.bind({});WithText.args={...defaultArgs,text:!0,byAleph:!1},WithText.parameters={...defaultParams};const WithColor=Template.bind({});WithColor.args={...defaultArgs,color:"main0",size:"100px"},WithColor.parameters={...defaultParams};const CustomSize=Template.bind({});CustomSize.args={...defaultArgs,size:"4rem"},CustomSize.parameters={...defaultParams};const WithLink=Template.bind({});WithLink.args={...defaultArgs,size:"2rem",text:!0,byAleph:!0,href:"https://twentysix.cloud"},WithLink.parameters={...defaultParams},OnlyIcon.parameters={...OnlyIcon.parameters,docs:{...OnlyIcon.parameters?.docs,source:{originalSource:"args => <Logo {...args} />",...OnlyIcon.parameters?.docs?.source}}},WithText.parameters={...WithText.parameters,docs:{...WithText.parameters?.docs,source:{originalSource:"args => <Logo {...args} />",...WithText.parameters?.docs?.source}}},WithColor.parameters={...WithColor.parameters,docs:{...WithColor.parameters?.docs,source:{originalSource:"args => <Logo {...args} />",...WithColor.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:"args => <Logo {...args} />",...CustomSize.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:"args => <Logo {...args} />",...WithLink.parameters?.docs?.source}}};const __namedExportsOrder=["OnlyIcon","WithText","WithColor","CustomSize","WithLink"]},"./src/components/common/Logo/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TextGradient=__webpack_require__("./src/components/common/TextGradient/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),styles_utils=__webpack_require__("./src/styles/utils.ts");const StyledLogoContainer=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__StyledLogoContainer",componentId:"sc-1qewgnk-0"})(["",""],(({theme,size,text})=>{const{logo}=theme.component,logoSize=size?Number.isNaN(Number(size))?size:`${size}px`:"1em";return(0,styled_components_browser_esm.iv)([""," font-size:",";gap:",";"," > svg{font-size:",";}"],{display:"inline-flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"center"},logoSize,logo.gap,StyledContainer2,text?"0.8em":"1em")})),StyledContainer2=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__StyledContainer2",componentId:"sc-1qewgnk-1"})(["",""],(({theme})=>{const{logo}=theme.component;return(0,styled_components_browser_esm.iv)([""," gap:",";"],{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},logo.gap)})),StyledText=(0,styled_components_browser_esm.ZP)(TextGradient.Z).withConfig({displayName:"styles__StyledText",componentId:"sc-1qewgnk-2"})(["&&{",";"," font-size:1em;line-height:normal;}"],(0,styles_utils.pX)("logo"),{marginTop:"0px",marginBottom:"0px"}),StyledByAlephLink=styled_components_browser_esm.ZP.a.attrs((0,utils.PT)("tp-body2")).withConfig({displayName:"styles__StyledByAlephLink",componentId:"sc-1qewgnk-3"})(["&&{"," color:",";font-size:0.25em;line-height:0.25em;margin-bottom:0.55em;gap:0.25em;}"],{display:"inline-flex",alignItems:"center",alignSelf:"flex-end",whiteSpace:"nowrap"},(({$color})=>$color));try{StyledLogoContainer.displayName="StyledLogoContainer",StyledLogoContainer.__docgenInfo={description:"",displayName:"StyledLogoContainer",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string | boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/styles.tsx#StyledLogoContainer"]={docgenInfo:StyledLogoContainer.__docgenInfo,name:"StyledLogoContainer",path:"src/components/common/Logo/styles.tsx#StyledLogoContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledContainer2.displayName="StyledContainer2",StyledContainer2.__docgenInfo={description:"",displayName:"StyledContainer2",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/styles.tsx#StyledContainer2"]={docgenInfo:StyledContainer2.__docgenInfo,name:"StyledContainer2",path:"src/components/common/Logo/styles.tsx#StyledContainer2"})}catch(__react_docgen_typescript_loader_error){}try{StyledText.displayName="StyledText",StyledText.__docgenInfo={description:"",displayName:"StyledText",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"table"'},{value:'"logo"'},{value:'"h7"'},{value:'"info"'},{value:'"body1"'},{value:'"body2"'},{value:'"body3"'},{value:'"code1"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/styles.tsx#StyledText"]={docgenInfo:StyledText.__docgenInfo,name:"StyledText",path:"src/components/common/Logo/styles.tsx#StyledText"})}catch(__react_docgen_typescript_loader_error){}try{StyledByAlephLink.displayName="StyledByAlephLink",StyledByAlephLink.__docgenInfo={description:"",displayName:"StyledByAlephLink",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/styles.tsx#StyledByAlephLink"]={docgenInfo:StyledByAlephLink.__docgenInfo,name:"StyledByAlephLink",path:"src/components/common/Logo/styles.tsx#StyledByAlephLink"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlephLogoSvg=({color="#ffffff"})=>(0,jsx_runtime.jsxs)("svg",{height:"1.2em",viewBox:"0 0 168 168",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M128.176 61.5087C142.491 61.5087 154 49.9999 154 35.7543C154 21.5087 142.421 10 128.176 10C113.86 10 102.351 21.5087 102.351 35.7543C102.351 49.9999 113.86 61.5087 128.176 61.5087Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M39.8248 149.368C54.1406 149.368 65.6493 137.859 65.6493 123.614C65.6493 109.368 54.0704 97.8594 39.8248 97.8594C25.5091 97.8594 14.0003 109.368 14.0003 123.614C13.9301 137.859 25.5091 149.368 39.8248 149.368Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M109.86 17.5789C85.369 7.47363 56.1059 12.3157 36.1761 32.1052C16.2463 51.9648 11.4042 81.0173 21.5095 105.438L109.86 17.5789Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M58.0713 141.859C82.5625 151.965 111.826 147.123 131.755 127.333C151.685 107.473 156.527 78.4209 146.422 53.9999L58.0713 141.859Z",fill:color})]});AlephLogoSvg.displayName="AlephLogoSvg";const img_aleph=AlephLogoSvg;try{AlephLogoSvg.displayName="AlephLogoSvg",AlephLogoSvg.__docgenInfo={description:"",displayName:"AlephLogoSvg",props:{color:{defaultValue:{value:"#ffffff"},description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/img/aleph.tsx#AlephLogoSvg"]={docgenInfo:AlephLogoSvg.__docgenInfo,name:"AlephLogoSvg",path:"src/components/common/Logo/img/aleph.tsx#AlephLogoSvg"})}catch(__react_docgen_typescript_loader_error){}try{aleph.displayName="aleph",aleph.__docgenInfo={description:"",displayName:"aleph",props:{color:{defaultValue:{value:"#ffffff"},description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/img/aleph.tsx#aleph"]={docgenInfo:aleph.__docgenInfo,name:"aleph",path:"src/components/common/Logo/img/aleph.tsx#aleph"})}catch(__react_docgen_typescript_loader_error){}const TwentysixLogoSvg=({color="#141421",bgColor="#D4FF00"})=>(0,jsx_runtime.jsxs)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{clipPath:"url(#clip0_1285_12598)",children:(0,jsx_runtime.jsx)("path",{d:"M21.5602 30.9177L24.1503 30.0769L26.7403 29.236L29.3304 28.3921L31.9205 27.5512L32.2366 27.45V0.324707H14.3945L13.7899 0.521111L11.1998 1.36197L8.60977 2.20589L6.01969 3.04675L3.42654 3.8876L0.836457 4.72846L0.523438 4.8328V32.0379H18.117L18.9701 31.7586L21.5602 30.9177Z",fill:bgColor})}),(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip1_1285_12598)",children:[(0,jsx_runtime.jsx)("path",{d:"M10.8926 10.0416L8.70703 9.33008V11.5156L10.8926 12.2271V10.0416Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M10.8926 16.594L8.70703 15.8826V18.0681L10.8926 18.7753V16.594Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M10.8926 18.7753L8.70703 18.0681V20.2494L10.8926 20.9609V18.7753Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M10.8926 20.9607L8.70703 20.2493V22.4348L10.8926 23.1463V20.9607Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M10.8926 23.1463L8.70703 22.4348V24.6204L10.8926 25.3276V23.1463Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M13.0781 10.7487L10.8926 10.0415V12.2271L13.0781 12.9343V10.7487Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M13.0781 17.3012L10.8926 16.594V18.7753L13.0781 19.4868V17.3012Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M13.0781 23.8537L10.8926 23.1465V25.3278L13.0781 26.0392V23.8537Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M15.2594 7.09345V4.9079L13.0781 4.20068V6.38197L15.2594 7.09345Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M15.2594 7.09355L13.0781 6.38208V8.56763L15.2594 9.27484V7.09355Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M15.2594 11.4603L13.0781 10.7488V12.9343L15.2594 13.6458V11.4603Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M15.2594 18.0127L13.0781 17.3013V19.4868L15.2594 20.194V18.0127Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M15.2594 24.565L13.0781 23.8535V26.0391L15.2594 26.7463V24.565Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M17.4453 7.80072V5.61943L15.2598 4.90796V7.09351L17.4453 7.80072Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M17.4453 12.1717L15.2598 11.4602V13.6458L17.4453 14.353V12.1717Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M17.4453 18.7199L15.2598 18.0127V20.194L17.4453 20.9055V18.7199Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M17.4453 25.2722L15.2598 24.5649V26.7462L17.4453 27.4577V25.2722Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 8.51215V6.3266L17.4453 5.61938V7.80067L19.6266 8.51215Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 12.8791L17.4453 12.1719V14.3532L19.6266 15.0646V12.8791Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 15.0645L17.4453 14.353V16.5386L19.6266 17.2458V15.0645Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 17.2458L17.4453 16.5386V18.7199L19.6266 19.4313V17.2458Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 19.4314L17.4453 18.72V20.9055L19.6266 21.617V19.4314Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M19.6266 25.9837L17.4453 25.2722V27.4578L19.6266 28.165V25.9837Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M21.8125 9.21942V7.03814L19.627 6.32666V8.51221L21.8125 9.21942Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M23.998 9.93085V7.7453L21.8125 7.03809V9.21937L23.998 9.93085Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M23.998 16.4831V14.2975L21.8125 13.5903V15.7716L23.998 16.4831Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M23.998 18.6645V16.4832L21.8125 15.7717V17.9573L23.998 18.6645Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M23.998 18.6645L21.8125 17.9573V20.1386L23.998 20.85V18.6645Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M23.998 20.8501L21.8125 20.1387V22.3242L23.998 23.0357V20.8501Z",fill:color})]}),(0,jsx_runtime.jsxs)("defs",{children:[(0,jsx_runtime.jsx)("clipPath",{id:"clip0_1285_12598",children:(0,jsx_runtime.jsx)("rect",{width:"31.8725",height:"31.8725",fill:"white",transform:"translate(0.363281 0.165283)"})}),(0,jsx_runtime.jsx)("clipPath",{id:"clip1_1285_12598",children:(0,jsx_runtime.jsx)("rect",{width:"24.132",height:"24.132",fill:"white",transform:"translate(4.34766 4.14941)"})})]})]});TwentysixLogoSvg.displayName="TwentysixLogoSvg";const img_twentysix=TwentysixLogoSvg;try{TwentysixLogoSvg.displayName="TwentysixLogoSvg",TwentysixLogoSvg.__docgenInfo={description:"",displayName:"TwentysixLogoSvg",props:{color:{defaultValue:{value:"#141421"},description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"#D4FF00"},description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/img/twentysix.tsx#TwentysixLogoSvg"]={docgenInfo:TwentysixLogoSvg.__docgenInfo,name:"TwentysixLogoSvg",path:"src/components/common/Logo/img/twentysix.tsx#TwentysixLogoSvg"})}catch(__react_docgen_typescript_loader_error){}try{twentysix.displayName="twentysix",twentysix.__docgenInfo={description:"",displayName:"twentysix",props:{color:{defaultValue:{value:"#141421"},description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"#D4FF00"},description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/img/twentysix.tsx#twentysix"]={docgenInfo:twentysix.__docgenInfo,name:"twentysix",path:"src/components/common/Logo/img/twentysix.tsx#twentysix"})}catch(__react_docgen_typescript_loader_error){}const Logo_img={aleph:img_aleph,twentysix:img_twentysix};var themes=__webpack_require__("./src/themes/index.ts");const Logo=({img,text=!1,color="text",bgColor="main1",byAleph=!0,Link="a",target="_blank",href,size,...rest})=>{const theme=(0,styled_components_browser_esm.Fg)(),{logo}=theme.component,LogoSvg=(0,react.useMemo)((()=>Logo_img[img||logo.img]),[img,logo.img]),logoGradient=theme.gradient[color]?.colors[text?0:1],logoColor=logoGradient||theme.color[color]||color,logoBgColor=theme.color[bgColor]||bgColor;text="boolean"==typeof text?text&&logo.text:text||logo.text,byAleph=byAleph&&!!text;const linkContent=(0,jsx_runtime.jsxs)(StyledContainer2,{children:[(0,jsx_runtime.jsx)(LogoSvg,{color:logoColor,bgColor:logoBgColor}),text&&(0,jsx_runtime.jsx)(StyledText,{type:"logo",color,children:text})]});return(0,jsx_runtime.jsxs)(StyledLogoContainer,{size,text,...rest,children:[href?(0,jsx_runtime.jsx)(Link,{href,route:{href},target,style:{lineHeight:"1em"},children:linkContent}):linkContent,byAleph&&logo.by&&(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:themes.n.aleph,children:(0,jsx_runtime.jsxs)(StyledByAlephLink,{href:"https://aleph.im",target:"_blank",rel:"noreferrer",$color:logo.by.color,children:["by ",(0,jsx_runtime.jsx)(Logo,{text:!0,color:logo.by.color,size:"1.5em"})]})})]})};Logo.displayName="Logo",Logo.displayName="Logo";const cmp=(0,react.memo)(Logo);try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{img:{defaultValue:null,description:"",name:"img",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"text"},description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:{value:"false"},description:"",name:"text",required:!1,type:{name:"string | boolean"}},bgColor:{defaultValue:{value:"main1"},description:"",name:"bgColor",required:!1,type:{name:"string"}},byAleph:{defaultValue:{value:"true"},description:"",name:"byAleph",required:!1,type:{name:"boolean"}},Link:{defaultValue:{value:"'a' as unknown as LinkComponent"},description:"",name:"Link",required:!1,type:{name:"LinkComponent"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"_blank"},description:"",name:"target",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Logo/cmp.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/common/Logo/cmp.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextGradient/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");const StyledTextGradientContainer=styled_components_browser_esm.ZP.span.attrs((props=>(0,utils.PT)(`tp-${props.type}`)(props))).withConfig({displayName:"styles__StyledTextGradientContainer",componentId:"sc-18joa10-0"})(["",""],(({theme,color,size,typo,$isInline})=>{const fontSizeCss=size?`font-size: ${Number.isNaN(Number(size))?size:`${size}px`};`:"",gradient=theme.gradient[color]?.fn;color=theme.color[color]||color;const backgroundColorCss=gradient?`background-image: ${gradient};`:`background-color: ${color};`,paddingLeftCss="italic"===typo.style?"\n      padding-left: 0.1em;\n      margin-left: -0.1em;\n    ":"";return(0,styled_components_browser_esm.iv)(["background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-text-fill-color:transparent;"," "," "," &&{","}"],backgroundColorCss,paddingLeftCss,!$isInline&&"display: table;",fontSizeCss)}));try{StyledTextGradientContainer.displayName="StyledTextGradientContainer",StyledTextGradientContainer.__docgenInfo={description:"",displayName:"StyledTextGradientContainer",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"table"'},{value:'"logo"'},{value:'"h7"'},{value:'"info"'},{value:'"body1"'},{value:'"body2"'},{value:'"body3"'},{value:'"code1"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"span"'},{value:'"strong"'},{value:'"h7"'}]}},typo:{defaultValue:null,description:"",name:"typo",required:!0,type:{name:"Typo"}},$isInline:{defaultValue:null,description:"",name:"$isInline",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextGradient/styles.tsx#StyledTextGradientContainer"]={docgenInfo:StyledTextGradientContainer.__docgenInfo,name:"StyledTextGradientContainer",path:"src/components/common/TextGradient/styles.tsx#StyledTextGradientContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const inlineElements=new Set(["span","strong"]),TextGradient=({color="main0",type="header",as,size,children,...rest})=>{const tagConfig=(0,styled_components_browser_esm.Fg)().typo[type],tag=as||(tagConfig.tag&&"body"!==type?type:"span"),isInline=(0,react.useMemo)((()=>inlineElements.has(tag)),[tag]);return(0,jsx_runtime.jsx)(StyledTextGradientContainer,{as:tag,color,size,typo:tagConfig,type,$isInline:isInline,...rest,children})};TextGradient.displayName="TextGradient",TextGradient.displayName="TextGradient";const cmp=(0,react.memo)(TextGradient);try{TextGradient.displayName="TextGradient",TextGradient.__docgenInfo={description:"",displayName:"TextGradient",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},type:{defaultValue:{value:"header"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"table"'},{value:'"logo"'},{value:'"h7"'},{value:'"info"'},{value:'"body1"'},{value:'"body2"'},{value:'"body3"'},{value:'"code1"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"span"'},{value:'"strong"'},{value:'"h7"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextGradient/cmp.tsx#TextGradient"]={docgenInfo:TextGradient.__docgenInfo,name:"TextGradient",path:"src/components/common/TextGradient/cmp.tsx#TextGradient"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextGradient/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/TextGradient/cmp.tsx")},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function addClasses(className){return props=>({...props,className:`${props.className||""} ${className}`})}__webpack_require__.d(__webpack_exports__,{PT:()=>addClasses,xG:()=>formatCurrency,RK:()=>humanReadableCurrency,eB:()=>humanReadableSize});const humanReadableCurrency=value=>{if(void 0===value)return"n/a";const[val,subfix]=0===value||value<1e3?[value,""]:value<10**6?[value/1e3,"K"]:value<10**9?[value/10**6,"M"]:[value/10**9,"B"];return formatCurrency(val)+subfix},formatCurrency=value=>value?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(value):"0.00";const byteUnits={B:1,kB:1e3,MB:10**6,GB:10**9,TB:10**12,KiB:1024,MiB:2**20,GiB:2**30,TiB:2**40},byteUnitSubfix={B:"B",kB:"kB",MB:"MB",GB:"GB",TB:"TB",KiB:"kB",MiB:"MB",GiB:"GB",TiB:"TB"};function convertByteUnits(value,{from="MiB",to="GiB",displayUnit=!1}){const result=value*byteUnits[from]/byteUnits[to];return displayUnit?`${result.toFixed(2)} ${byteUnitSubfix[to]}`:result}function humanReadableSize(value,from="B"){if(value===Number.POSITIVE_INFINITY)return"n/a";if(void 0===value)return"n/a";if(0===value)return"-";const to=function getHumanReadableUnit(value,units=["B","KiB","MiB","GiB","TiB"]){let optimalUnit="B";for(const unit of units){if(value<byteUnits[unit])break;optimalUnit=unit}return optimalUnit}(convertByteUnits(value,{from,to:"B"}));return convertByteUnits(value,{from,to,displayUnit:!0})}}}]);