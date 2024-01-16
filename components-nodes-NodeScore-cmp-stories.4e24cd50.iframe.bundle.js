"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[229],{"./src/components/nodes/NodeScore/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cmp_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ColorDot=__webpack_require__("./src/components/nodes/ColorDot/index.ts");const StyledScoreIcon=(0,styled_components_browser_esm.ZP)(ColorDot.Z).attrs((({$score,...rest})=>({$color:$score>=.8?"main1":$score>=.5?"main0":"error",...rest}))).withConfig({displayName:"styles__StyledScoreIcon",componentId:"sc-chuoy9-0"})([""]);try{StyledScoreIcon.displayName="StyledScoreIcon",StyledScoreIcon.__docgenInfo={description:"",displayName:"StyledScoreIcon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},$gradient:{defaultValue:null,description:"",name:"$gradient",required:!1,type:{name:"string"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string"}},$score:{defaultValue:null,description:"",name:"$score",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/nodes/NodeScore/styles.tsx#StyledScoreIcon"]={docgenInfo:StyledScoreIcon.__docgenInfo,name:"StyledScoreIcon",path:"src/components/nodes/NodeScore/styles.tsx#StyledScoreIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NodeScore=({score,showPercentage=!0})=>{const num=Number(100*score).toFixed(2);return(0,jsx_runtime.jsxs)(_StyledDiv,{children:[(0,jsx_runtime.jsx)(StyledScoreIcon,{$score:score}),showPercentage&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[num,"%"]})]})};NodeScore.displayName="NodeScore",NodeScore.displayName="NodeScore";var _StyledDiv=(0,styled_components_browser_esm.ZP)("div").withConfig({displayName:"cmp___StyledDiv",componentId:"sc-1ns4scf-0"})({display:"inline-flex",alignItems:"center",gap:"0.75rem"});try{NodeScore.displayName="NodeScore",NodeScore.__docgenInfo={description:"",displayName:"NodeScore",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},showPercentage:{defaultValue:{value:"true"},description:"",name:"showPercentage",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/nodes/NodeScore/cmp.tsx#NodeScore"]={docgenInfo:NodeScore.__docgenInfo,name:"NodeScore",path:"src/components/nodes/NodeScore/cmp.tsx#NodeScore"})}catch(__react_docgen_typescript_loader_error){}const cmp_stories={title:"Components/UI/nodes/NodeScore",component:NodeScore},Template=args=>(0,jsx_runtime.jsx)(NodeScore,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={score:.6,showPercentage:!0},Default.parameters={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: any) => <NodeScore {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/nodes/ColorDot/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ColorDot_cmp});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledDot=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledDot",componentId:"sc-1byjleo-0"})((({theme,$color="main0",$gradient,$size="1rem"})=>{const color=($gradient?theme.gradient[$gradient]?.fn:void 0)||theme.color[$color]||$color;return[{flexShrink:"0",borderRadius:"9999px"},(0,styled_components_browser_esm.iv)(["background:",";width:",";height:",";"],color,$size,$size)]}));try{StyledDot.displayName="StyledDot",StyledDot.__docgenInfo={description:"",displayName:"StyledDot",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},$gradient:{defaultValue:null,description:"",name:"$gradient",required:!1,type:{name:"string"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/nodes/ColorDot/styles.tsx#StyledDot"]={docgenInfo:StyledDot.__docgenInfo,name:"StyledDot",path:"src/components/nodes/ColorDot/styles.tsx#StyledDot"})}catch(__react_docgen_typescript_loader_error){}const ColorDot_cmp=StyledDot;try{cmp.displayName="cmp",cmp.__docgenInfo={description:"",displayName:"cmp",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},$gradient:{defaultValue:null,description:"",name:"$gradient",required:!1,type:{name:"string"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/nodes/ColorDot/cmp.tsx#cmp"]={docgenInfo:cmp.__docgenInfo,name:"cmp",path:"src/components/nodes/ColorDot/cmp.tsx#cmp"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/nodes/ColorDot/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/nodes/ColorDot/cmp.tsx")}}]);