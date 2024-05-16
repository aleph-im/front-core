"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[3278],{"./src/components/forms/Radio/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/forms/Radio/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/forms/Radio",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{size:{options:["xs","sm","md"],control:{type:"inline-radio"}}}},defaultArgs={name:"group",size:"md"},defaultParams={controls:{exclude:["color"]}},Template=args=>{const options=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[["1","Option 1"],["2","Option 2"],["3","Option 3"]]),[]),[selectedId,setSelectedId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options[0][0]),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const id=event.target.value;setSelectedId(id)}),[setSelectedId]),selectedOption=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>options.find((([k])=>k===selectedId))),[options,selectedId]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[options.map((opt=>{const[id,label]=opt;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StyledRadio,{...args,key:id,label,value:id,defaultChecked:id===selectedId,onChange:handleChange})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StyledH,{children:"value:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:JSON.stringify(selectedOption,null,2)})]})},Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={...defaultParams};const Disabled=Template.bind({});Disabled.args={...defaultArgs,disabled:!0},Disabled.parameters={...defaultParams},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const options: [string, string][] = useMemo(() => [['1', 'Option 1'], ['2', 'Option 2'], ['3', 'Option 3']], []);\n  const [selectedId, setSelectedId] = useState<string>(options[0][0]);\n  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    const id = event.target.value;\n    setSelectedId(id);\n  }, [setSelectedId]);\n  const selectedOption = useMemo(() => options.find(([k]) => k === selectedId), [options, selectedId]);\n  return <>\n      {options.map(opt => {\n      const [id, label] = opt;\n      return <Radio {...args} key={id} label={label} value={id} defaultChecked={id === selectedId} onChange={handleChange} tw=\"mb-5\" />;\n    })}\n      <h6 tw=\"my-5\">value:</h6>\n      <pre>{JSON.stringify(selectedOption, null, 2)}</pre>\n    </>;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const options: [string, string][] = useMemo(() => [['1', 'Option 1'], ['2', 'Option 2'], ['3', 'Option 3']], []);\n  const [selectedId, setSelectedId] = useState<string>(options[0][0]);\n  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    const id = event.target.value;\n    setSelectedId(id);\n  }, [setSelectedId]);\n  const selectedOption = useMemo(() => options.find(([k]) => k === selectedId), [options, selectedId]);\n  return <>\n      {options.map(opt => {\n      const [id, label] = opt;\n      return <Radio {...args} key={id} label={label} value={id} defaultChecked={id === selectedId} onChange={handleChange} tw=\"mb-5\" />;\n    })}\n      <h6 tw=\"my-5\">value:</h6>\n      <pre>{JSON.stringify(selectedOption, null, 2)}</pre>\n    </>;\n}",...Disabled.parameters?.docs?.source}}};var _StyledRadio=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z)({marginBottom:"1.25rem"}),_StyledH=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("h6").withConfig({displayName:"cmpstories___StyledH",componentId:"sc-akl49k-0"})({marginTop:"1.25rem",marginBottom:"1.25rem"});const __namedExportsOrder=["Default","Disabled"]},"./src/components/forms/Radio/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/components/forms/RadioGroup/context.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/color.ts");const StyledRadioContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledRadioContainer",componentId:"sc-1kpokl-0"})(["",""],(({$size})=>{const gap="xs"===$size?"0.75rem":"1.125rem";return(0,styled_components_browser_esm.iv)(["display:flex;align-items:center;gap:",";"],gap)})),StyledInputContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledInputContainer",componentId:"sc-1kpokl-1"})(["",""],(({theme,$size})=>{const{shadow}=theme.form.radio,size="xs"===$size?"1rem":"sm"===$size?"1.5rem":"2rem";return(0,styled_components_browser_esm.iv)(["flex:0 0 auto;position:relative;display:flex;align-items:center;justify-content:center;width:",";height:",";border-radius:50%;box-shadow:",";"],size,size,shadow)})),StyledInput=styled_components_browser_esm.ZP.input.withConfig({displayName:"styles__StyledInput",componentId:"sc-1kpokl-2"})(["",""],(({theme})=>{const{background,border,disabledType}=theme.form.radio;return(0,styled_components_browser_esm.iv)(["position:absolute;inset:0;appearance:none;outline:0;cursor:pointer;border:","rem solid ",";background:",";border-radius:50%;width:100%;height:100%;margin:0;transition-property:border,background;transition-duration:","ms;transition-timing-function:",";&:checked{border-color:",";}&:focus{border-color:",";}&:disabled{","}"],border.size,border.color,background,theme.transition.duration.fast,theme.transition.timing,border.checked.color,border.focus.color,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["border-color:#ffffff0f;cursor:not-allowed;&:checked{border-color:","1A;}"],border.checked.color):(0,styled_components_browser_esm.iv)(["border-color:",";background:",";"],theme.color.disabled,theme.color.disabled))})),StyledInputDot=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__StyledInputDot",componentId:"sc-1kpokl-3"})(["",""],(({theme})=>{const{dot,disabledType}=theme.form.radio,{background,backgroundDisabled}=(0,color.DL)(dot.checked.background);return(0,styled_components_browser_esm.iv)(["position:relative;pointer-events:none;width:65%;height:65%;background:",";border-radius:50%;z-index:1;&:after{content:'';position:absolute;inset:0;width:100%;height:100%;border-radius:50%;background:",";visibility:hidden;clip-path:circle(0% at 50% 50%);will-change:visibility,clip-path;transition-property:visibility,clip-path,background;transition-duration:","ms;transition-timing-function:",";}",":checked + &:after{visibility:inherit;clip-path:circle(100% at 50% 50%);}",":disabled + &{cursor:not-allowed;","}",":checked:disabled + &:after{","}"],dot.background,background,theme.transition.duration.fast,theme.transition.timing,StyledInput,StyledInput,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["background:#ffffff0f;"]):(0,styled_components_browser_esm.iv)(["background:#00000010;"]),StyledInput,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["background:",";"],backgroundDisabled):(0,styled_components_browser_esm.iv)(["background:#00000040;"]))})),StyledLabel=styled_components_browser_esm.ZP.label.withConfig({displayName:"styles__StyledLabel",componentId:"sc-1kpokl-4"})(["",""],(({$size,$disabled})=>{const size="xs"===$size?"0.75rem":"1rem";return(0,styled_components_browser_esm.iv)(["cursor:pointer;font-size:",";",""],size,$disabled&&(0,styled_components_browser_esm.iv)(["cursor:not-allowed;opacity:0.4;"]))}));try{StyledRadioContainer.displayName="StyledRadioContainer",StyledRadioContainer.__docgenInfo={description:"",displayName:"StyledRadioContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/styles.tsx#StyledRadioContainer"]={docgenInfo:StyledRadioContainer.__docgenInfo,name:"StyledRadioContainer",path:"src/components/forms/Radio/styles.tsx#StyledRadioContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledInputContainer.displayName="StyledInputContainer",StyledInputContainer.__docgenInfo={description:"",displayName:"StyledInputContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/styles.tsx#StyledInputContainer"]={docgenInfo:StyledInputContainer.__docgenInfo,name:"StyledInputContainer",path:"src/components/forms/Radio/styles.tsx#StyledInputContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledInput.displayName="StyledInput",StyledInput.__docgenInfo={description:"",displayName:"StyledInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/styles.tsx#StyledInput"]={docgenInfo:StyledInput.__docgenInfo,name:"StyledInput",path:"src/components/forms/Radio/styles.tsx#StyledInput"})}catch(__react_docgen_typescript_loader_error){}try{StyledInputDot.displayName="StyledInputDot",StyledInputDot.__docgenInfo={description:"",displayName:"StyledInputDot",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/styles.tsx#StyledInputDot"]={docgenInfo:StyledInputDot.__docgenInfo,name:"StyledInputDot",path:"src/components/forms/Radio/styles.tsx#StyledInputDot"})}catch(__react_docgen_typescript_loader_error){}try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'}]}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/styles.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/forms/Radio/styles.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=(0,react.forwardRef)((({id,label,name,value,checked,onChange:onChangeProp,className,size:$size,disabled,...rest},ref)=>{const rndId=(0,react.useId)();id=id||rndId;const group=(0,context.a)(),onChange=(0,react.useCallback)((e=>{onChangeProp&&onChangeProp(e),group&&group.onChange(e)}),[group,onChangeProp]);return group&&(void 0===name&&(name=group.name),void 0===checked&&(checked=group.value===value)),(0,jsx_runtime.jsxs)(StyledRadioContainer,{className,$size,children:[(0,jsx_runtime.jsxs)(StyledInputContainer,{$size,children:[(0,jsx_runtime.jsx)(StyledInput,{type:"radio",id,ref,name,value,checked,onChange,disabled,...rest}),(0,jsx_runtime.jsx)(StyledInputDot,{})]}),label&&(0,jsx_runtime.jsx)(StyledLabel,{htmlFor:id,$size,$disabled:disabled,children:label})]})}));Radio.displayName="Radio";const cmp=(0,react.memo)(Radio);try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Radio/cmp.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/forms/Radio/cmp.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/forms/RadioGroup/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>RadioGroupContext,a:()=>useRadioGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const RadioGroupContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),useRadioGroup=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RadioGroupContext)},"./src/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DL:()=>normalizeBackgroundImageColor,nI:()=>colorHexToRGBALottie,tB:()=>colorNameToHex});const defaultBrowserColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function colorNameToHex(colorName){return defaultBrowserColors[colorName]}function colorHexToRGBALottie(hex){const[r,g,b,a]=function colorHexToRGBA(hex){return hex=hex.replace("#",""),[parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16),hex.length>6?parseInt(hex.slice(4,6),16):255]}(hex);return[r/255,g/255,b/255,a/255]}function normalizeBackgroundImageColor(color,transparency="1A"){if("transparent"===color)return{backgroundColor:color,backgroundColorDisabled:color,backgroundImage:"none",backgroundImageDisabled:"none",background:color,backgroundDisabled:color};let gradient=color;"string"==typeof color&&(gradient={colors:[color=colorNameToHex(color)||color,color],deg:90,stops:[0,100],fn:`linear-gradient(90deg, ${color} 0%, ${color} 100%)`});const dc1=`${gradient.colors[0]}${transparency}`,dc2=`${gradient.colors[1]}${transparency}`,disabledGradient={...gradient,colors:[dc1,dc2],fn:`linear-gradient(90deg, ${dc1} 0%, ${dc2} 100%)`},backgroundColor=gradient.colors[0],backgroundColorDisabled=disabledGradient.colors[0],backgroundImage=gradient.fn,backgroundImageDisabled=disabledGradient.fn;return{backgroundColor,backgroundColorDisabled,backgroundImage,backgroundImageDisabled,background:"string"===color?backgroundColor:backgroundImage,backgroundDisabled:"string"===color?backgroundColorDisabled:backgroundImageDisabled}}}}]);