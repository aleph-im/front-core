"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[1632],{"./src/components/layout/Grid/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Grid/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/layout/Grid",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.X2,subcomponents:{Col:_cmp__WEBPACK_IMPORTED_MODULE_1__.JX},argTypes:{count:{control:{type:"range",min:1,max:16,step:1}},gap:{control:{type:"text"}}}},colStyle={backgroundColor:"red",color:"white",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",height:"100px"},Default=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Regular span blocks (size=3)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.X2,{...args,children:Array.from({length:4},((_,i)=>i+1)).map((i=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:3,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:i})},i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Regular span blocks (size=1)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.X2,{...args,children:Array.from({length:args.count||12},((_,i)=>i+1)).map((i=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:i})},i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Custom offset blocks"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_cmp__WEBPACK_IMPORTED_MODULE_1__.X2,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:2,offset:3,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:"1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:4,offset:7,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:"2"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Irregular span blocks"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_cmp__WEBPACK_IMPORTED_MODULE_1__.X2,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:4,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:"1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.JX,{span:8,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:colStyle,children:"2"})})]})]})).bind({});Default.args={count:12,gap:"1rem"},Default.parameters={controls:{exclude:["color","size"]}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <>\n    <h1>Regular span blocks (size=3)</h1>\n    <Row {...args}>\n      {Array.from({\n      length: 4\n    }, (_, i) => i + 1).map(i => <Col span={3} key={i}>\n          <div style={colStyle}>{i}</div>\n        </Col>)}\n    </Row>\n\n    <h1>Regular span blocks (size=1)</h1>\n    <Row {...args}>\n      {Array.from({\n      length: args.count || 12\n    }, (_, i) => i + 1).map(i => <Col span={1} key={i}>\n          <div style={colStyle}>{i}</div>\n        </Col>)}\n    </Row>\n\n    <h1>Custom offset blocks</h1>\n    <Row {...args}>\n      <Col span={2} offset={3}>\n        <div style={colStyle}>1</div>\n      </Col>\n      <Col span={4} offset={7}>\n        <div style={colStyle}>2</div>\n      </Col>\n    </Row>\n\n    <h1>Irregular span blocks</h1>\n    <Row {...args}>\n      <Col span={4}>\n        <div style={colStyle}>1</div>\n      </Col>\n      <Col span={8}>\n        <div style={colStyle}>2</div>\n      </Col>\n    </Row>\n  </>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/layout/Grid/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JX:()=>Col,T1:()=>ColMemo,X2:()=>Row,tJ:()=>RowMemo});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const StyledRow=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledRow",componentId:"sc-173gjc8-0"})(["",""],(props=>{const{count=12,xs=count,sm=xs,md=sm,lg=md,xl=lg,gap="1rem",xsGap=gap,smGap=xsGap,mdGap=smGap,lgGap=mdGap,xlGap=lgGap}=props,xl2=props["2xl"]||xl,xl2Gap=props["2xlGap"]||xlGap;return(0,styled_components_browser_esm.iv)(["display:grid;grid-gap:",";grid-template-columns:repeat(",",1fr);"," "," "," "," ",""],xsGap,xs,(0,styles.gn)("sm",(0,styled_components_browser_esm.iv)(["grid-gap:",";grid-template-columns:repeat(",",1fr);"],smGap,sm)),(0,styles.gn)("md",(0,styled_components_browser_esm.iv)(["grid-gap:",";grid-template-columns:repeat(",",1fr);"],mdGap,md)),(0,styles.gn)("lg",(0,styled_components_browser_esm.iv)(["grid-gap:",";grid-template-columns:repeat(",",1fr);"],lgGap,lg)),(0,styles.gn)("xl",(0,styled_components_browser_esm.iv)(["grid-gap:",";grid-template-columns:repeat(",",1fr);"],xlGap,xl)),(0,styles.gn)("2xl",(0,styled_components_browser_esm.iv)(["grid-gap:",";grid-template-columns:repeat(",",1fr);"],xl2Gap,xl2)))})),StyledCol=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledCol",componentId:"sc-173gjc8-1"})(["",""],(props=>{const{span=1,xs=span,sm=xs,md=sm,lg=md,xl=lg,offset=0,xsOffset=offset,smOffset=xsOffset,mdOffset=smOffset,lgOffset=mdOffset,xlOffset=lgOffset}=props,xl2=props["2xl"]||xl,xl2Offset=props["2xlOffset"]||xlOffset;return(0,styled_components_browser_esm.iv)(["grid-column:",";"," "," "," "," ",""],`${xsOffset?`${xsOffset} / `:""} span ${xs}`,(0,styles.gn)("sm",(0,styled_components_browser_esm.iv)(["grid-column:",";"],`${smOffset?`${smOffset} / `:""} span ${sm}`)),(0,styles.gn)("md",(0,styled_components_browser_esm.iv)(["grid-column:",";"],`${mdOffset?`${mdOffset} / `:""} span ${md}`)),(0,styles.gn)("lg",(0,styled_components_browser_esm.iv)(["grid-column:",";"],`${lgOffset?`${lgOffset} / `:""} span ${lg}`)),(0,styles.gn)("xl",(0,styled_components_browser_esm.iv)(["grid-column:",";"],`${xlOffset?`${xlOffset} / `:""} span ${xl}`)),(0,styles.gn)("2xl",(0,styled_components_browser_esm.iv)(["grid-column:",";"],`${xl2Offset?`${xl2Offset} / `:""} span ${xl2}`)))}));try{StyledRow.displayName="StyledRow",StyledRow.__docgenInfo={description:"",displayName:"StyledRow",props:{md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},xsGap:{defaultValue:null,description:"",name:"xsGap",required:!1,type:{name:"string | number"}},smGap:{defaultValue:null,description:"",name:"smGap",required:!1,type:{name:"string | number"}},mdGap:{defaultValue:null,description:"",name:"mdGap",required:!1,type:{name:"string | number"}},lgGap:{defaultValue:null,description:"",name:"lgGap",required:!1,type:{name:"string | number"}},xlGap:{defaultValue:null,description:"",name:"xlGap",required:!1,type:{name:"string | number"}},"2xlGap":{defaultValue:null,description:"",name:"2xlGap",required:!1,type:{name:"string | number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/styles.tsx#StyledRow"]={docgenInfo:StyledRow.__docgenInfo,name:"StyledRow",path:"src/components/layout/Grid/styles.tsx#StyledRow"})}catch(__react_docgen_typescript_loader_error){}try{StyledCol.displayName="StyledCol",StyledCol.__docgenInfo={description:"",displayName:"StyledCol",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},xsOffset:{defaultValue:null,description:"",name:"xsOffset",required:!1,type:{name:"number"}},smOffset:{defaultValue:null,description:"",name:"smOffset",required:!1,type:{name:"number"}},mdOffset:{defaultValue:null,description:"",name:"mdOffset",required:!1,type:{name:"number"}},lgOffset:{defaultValue:null,description:"",name:"lgOffset",required:!1,type:{name:"number"}},xlOffset:{defaultValue:null,description:"",name:"xlOffset",required:!1,type:{name:"number"}},"2xlOffset":{defaultValue:null,description:"",name:"2xlOffset",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/styles.tsx#StyledCol"]={docgenInfo:StyledCol.__docgenInfo,name:"StyledCol",path:"src/components/layout/Grid/styles.tsx#StyledCol"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Row=({children,...rest})=>(0,jsx_runtime.jsx)(StyledRow,{...rest,children});Row.displayName="Row";const Col=({children,...rest})=>(0,jsx_runtime.jsx)(StyledCol,{...rest,children});Col.displayName="Col";const RowMemo=(0,react.memo)(Row),ColMemo=(0,react.memo)(Col);try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},xsGap:{defaultValue:null,description:"",name:"xsGap",required:!1,type:{name:"string | number"}},smGap:{defaultValue:null,description:"",name:"smGap",required:!1,type:{name:"string | number"}},mdGap:{defaultValue:null,description:"",name:"mdGap",required:!1,type:{name:"string | number"}},lgGap:{defaultValue:null,description:"",name:"lgGap",required:!1,type:{name:"string | number"}},xlGap:{defaultValue:null,description:"",name:"xlGap",required:!1,type:{name:"string | number"}},"2xlGap":{defaultValue:null,description:"",name:"2xlGap",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/cmp.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/components/layout/Grid/cmp.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}try{Col.displayName="Col",Col.__docgenInfo={description:"",displayName:"Col",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},xsOffset:{defaultValue:null,description:"",name:"xsOffset",required:!1,type:{name:"number"}},smOffset:{defaultValue:null,description:"",name:"smOffset",required:!1,type:{name:"number"}},mdOffset:{defaultValue:null,description:"",name:"mdOffset",required:!1,type:{name:"number"}},lgOffset:{defaultValue:null,description:"",name:"lgOffset",required:!1,type:{name:"number"}},xlOffset:{defaultValue:null,description:"",name:"xlOffset",required:!1,type:{name:"number"}},"2xlOffset":{defaultValue:null,description:"",name:"2xlOffset",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/cmp.tsx#Col"]={docgenInfo:Col.__docgenInfo,name:"Col",path:"src/components/layout/Grid/cmp.tsx#Col"})}catch(__react_docgen_typescript_loader_error){}try{RowMemo.displayName="RowMemo",RowMemo.__docgenInfo={description:"",displayName:"RowMemo",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},xsGap:{defaultValue:null,description:"",name:"xsGap",required:!1,type:{name:"string | number"}},smGap:{defaultValue:null,description:"",name:"smGap",required:!1,type:{name:"string | number"}},mdGap:{defaultValue:null,description:"",name:"mdGap",required:!1,type:{name:"string | number"}},lgGap:{defaultValue:null,description:"",name:"lgGap",required:!1,type:{name:"string | number"}},xlGap:{defaultValue:null,description:"",name:"xlGap",required:!1,type:{name:"string | number"}},"2xlGap":{defaultValue:null,description:"",name:"2xlGap",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/cmp.tsx#RowMemo"]={docgenInfo:RowMemo.__docgenInfo,name:"RowMemo",path:"src/components/layout/Grid/cmp.tsx#RowMemo"})}catch(__react_docgen_typescript_loader_error){}try{ColMemo.displayName="ColMemo",ColMemo.__docgenInfo={description:"",displayName:"ColMemo",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},xsOffset:{defaultValue:null,description:"",name:"xsOffset",required:!1,type:{name:"number"}},smOffset:{defaultValue:null,description:"",name:"smOffset",required:!1,type:{name:"number"}},mdOffset:{defaultValue:null,description:"",name:"mdOffset",required:!1,type:{name:"number"}},lgOffset:{defaultValue:null,description:"",name:"lgOffset",required:!1,type:{name:"number"}},xlOffset:{defaultValue:null,description:"",name:"xlOffset",required:!1,type:{name:"number"}},"2xlOffset":{defaultValue:null,description:"",name:"2xlOffset",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Grid/cmp.tsx#ColMemo"]={docgenInfo:ColMemo.__docgenInfo,name:"ColMemo",path:"src/components/layout/Grid/cmp.tsx#ColMemo"})}catch(__react_docgen_typescript_loader_error){}}}]);