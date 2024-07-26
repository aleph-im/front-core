"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[8537],{"./src/components/common/TextGradient/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/TextGradient/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/common/TextGradient",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{size:{control:"text"}}},defaultArgs={children:"Aleph.im",type:"h1",color:"main0",size:void 0},defaultParams={},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={...defaultParams};const Custom=Template.bind({});Custom.args={...defaultArgs,type:"body",color:"main1"},Custom.parameters={...defaultParams},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: TextGradientProps) => <TextGradient {...args} />",...Default.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"(args: TextGradientProps) => <TextGradient {...args} />",...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Custom"]},"./src/components/common/TextGradient/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/TextGradient/styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const inlineElements=new Set(["span","strong"]),TextGradient=({color="main0",type="header",as,size,children,...rest})=>{const tagConfig=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Fg)().typo[type],tag=as||(tagConfig.tag&&"body"!==type?type:"span"),isInline=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>inlineElements.has(tag)),[tag]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.K,{as:tag,color,size,typo:tagConfig,type,$isInline:isInline,...rest,children})};TextGradient.displayName="TextGradient",TextGradient.displayName="TextGradient";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TextGradient);try{TextGradient.displayName="TextGradient",TextGradient.__docgenInfo={description:"",displayName:"TextGradient",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},type:{defaultValue:{value:"header"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"table"'},{value:'"logo"'},{value:'"h7"'},{value:'"info"'},{value:'"body1"'},{value:'"body2"'},{value:'"body3"'},{value:'"code1"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"span"'},{value:'"strong"'},{value:'"h7"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextGradient/cmp.tsx#TextGradient"]={docgenInfo:TextGradient.__docgenInfo,name:"TextGradient",path:"src/components/common/TextGradient/cmp.tsx#TextGradient"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/TextGradient/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>StyledTextGradientContainer});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts");const StyledTextGradientContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span.attrs((props=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.PT)(`tp-${props.type}`)(props))).withConfig({displayName:"styles__StyledTextGradientContainer",componentId:"sc-18joa10-0"})(["",""],(({theme,color,size,typo,$isInline})=>{const fontSizeCss=size?`font-size: ${Number.isNaN(Number(size))?size:`${size}px`};`:"",gradient=theme.gradient[color]?.fn;color=theme.color[color]||color;const backgroundColorCss=gradient?`background-image: ${gradient};`:`background-color: ${color};`,paddingLeftCss="italic"===typo.style?"\n      padding-left: 0.1em;\n      margin-left: -0.1em;\n    ":"";return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-text-fill-color:transparent;"," "," "," &&{","}"],backgroundColorCss,paddingLeftCss,!$isInline&&"display: table;",fontSizeCss)}));try{StyledTextGradientContainer.displayName="StyledTextGradientContainer",StyledTextGradientContainer.__docgenInfo={description:"",displayName:"StyledTextGradientContainer",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"table"'},{value:'"logo"'},{value:'"h7"'},{value:'"info"'},{value:'"body1"'},{value:'"body2"'},{value:'"body3"'},{value:'"code1"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"header"'},{value:'"nav"'},{value:'"span"'},{value:'"strong"'},{value:'"h7"'}]}},typo:{defaultValue:null,description:"",name:"typo",required:!0,type:{name:"Typo"}},$isInline:{defaultValue:null,description:"",name:"$isInline",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/TextGradient/styles.tsx#StyledTextGradientContainer"]={docgenInfo:StyledTextGradientContainer.__docgenInfo,name:"StyledTextGradientContainer",path:"src/components/common/TextGradient/styles.tsx#StyledTextGradientContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function addClasses(className){return props=>({...props,className:`${props.className||""} ${className}`})}__webpack_require__.d(__webpack_exports__,{PT:()=>addClasses,xG:()=>formatCurrency,RK:()=>humanReadableCurrency,eB:()=>humanReadableSize});const humanReadableCurrency=value=>{if(void 0===value)return"n/a";const[val,subfix]=0===value||value<1e3?[value,""]:value<10**6?[value/1e3,"K"]:value<10**9?[value/10**6,"M"]:[value/10**9,"B"];return formatCurrency(val)+subfix},formatCurrency=value=>value?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(value):"0.00";const byteUnits={B:1,kB:1e3,MB:10**6,GB:10**9,TB:10**12,KiB:1024,MiB:2**20,GiB:2**30,TiB:2**40},byteUnitSubfix={B:"B",kB:"kB",MB:"MB",GB:"GB",TB:"TB",KiB:"kB",MiB:"MB",GiB:"GB",TiB:"TB"};function convertByteUnits(value,{from="MiB",to="GiB",displayUnit=!1}){const result=value*byteUnits[from]/byteUnits[to];return displayUnit?`${result.toFixed(2)} ${byteUnitSubfix[to]}`:result}function humanReadableSize(value,from="B"){if(value===Number.POSITIVE_INFINITY)return"n/a";if(void 0===value)return"n/a";if(0===value)return"-";const to=function getHumanReadableUnit(value,units=["B","KiB","MiB","GiB","TiB"]){let optimalUnit="B";for(const unit of units){if(value<byteUnits[unit])break;optimalUnit=unit}return optimalUnit}(convertByteUnits(value,{from,to:"B"}));return convertByteUnits(value,{from,to,displayUnit:!0})}}}]);