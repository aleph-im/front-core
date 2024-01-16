"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[7868],{"./src/components/forms/Switch/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/forms/Switch/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/forms/Switch",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z},defaultArgs={name:"name"},defaultParams={controls:{exclude:["color","size"]}},Template=args=>{const options=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[["1","Option 1"],["2","Option 2"],["3","Option 3"]]),[]),[selectedIds,setSelectedIds]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(options[0][0])),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const id=event.target.value;selectedIds.has(id)?selectedIds.delete(id):selectedIds.add(id),setSelectedIds(new Set(selectedIds))}),[selectedIds,setSelectedIds]),selectedOptions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>Object.fromEntries(options.filter((([k])=>selectedIds.has(k))))),[options,selectedIds]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[options.map((opt=>{const[id,label]=opt;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StyledSwitch,{...args,key:id,label,value:id,defaultChecked:selectedIds.has(id),onChange:handleChange})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StyledH,{children:"value:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:JSON.stringify(selectedOptions,null,2)})]})},Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={...defaultParams};const Disabled=Template.bind({});Disabled.args={...defaultArgs,disabled:!0},Disabled.parameters={...defaultParams},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const options: [string, string][] = useMemo(() => [['1', 'Option 1'], ['2', 'Option 2'], ['3', 'Option 3']], []);\n  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(options[0][0]));\n  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    const id = event.target.value;\n    selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id);\n    setSelectedIds(new Set(selectedIds));\n  }, [selectedIds, setSelectedIds]);\n  const selectedOptions = useMemo(() => Object.fromEntries(options.filter(([k]) => selectedIds.has(k))), [options, selectedIds]);\n  return <>\n      {options.map(opt => {\n      const [id, label] = opt;\n      return <Switch {...args} key={id} label={label} value={id} defaultChecked={selectedIds.has(id)} onChange={handleChange} tw=\"mb-5\" />;\n    })}\n      <h6 tw=\"my-5\">value:</h6>\n      <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>\n    </>;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const options: [string, string][] = useMemo(() => [['1', 'Option 1'], ['2', 'Option 2'], ['3', 'Option 3']], []);\n  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(options[0][0]));\n  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    const id = event.target.value;\n    selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id);\n    setSelectedIds(new Set(selectedIds));\n  }, [selectedIds, setSelectedIds]);\n  const selectedOptions = useMemo(() => Object.fromEntries(options.filter(([k]) => selectedIds.has(k))), [options, selectedIds]);\n  return <>\n      {options.map(opt => {\n      const [id, label] = opt;\n      return <Switch {...args} key={id} label={label} value={id} defaultChecked={selectedIds.has(id)} onChange={handleChange} tw=\"mb-5\" />;\n    })}\n      <h6 tw=\"my-5\">value:</h6>\n      <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>\n    </>;\n}",...Disabled.parameters?.docs?.source}}};var _StyledSwitch=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z).withConfig({displayName:"cmpstories___StyledSwitch",componentId:"sc-18kj62x-0"})({marginBottom:"1.25rem"}),_StyledH=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)("h6").withConfig({displayName:"cmpstories___StyledH",componentId:"sc-18kj62x-1"})({marginTop:"1.25rem",marginBottom:"1.25rem"});const __namedExportsOrder=["Default","Disabled"]},"./src/components/common/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z,Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Icon/cmp.tsx")},"./src/components/forms/FormError/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./src/utils/styles.ts"),styles_forms=__webpack_require__("./src/components/forms/styles.forms.tsx");const StyledFormErrorContainer=styled_components_browser_esm.ZP.span.attrs((0,styles.P)("tp-body")).withConfig({displayName:"styles__StyledFormErrorContainer",componentId:"sc-ag8ig-0"})([""," ",""],{marginTop:"0.625rem !important",display:"flex",alignItems:"center",justifyContent:"flex-start"},styles_forms.nQ);try{StyledFormErrorContainer.displayName="StyledFormErrorContainer",StyledFormErrorContainer.__docgenInfo={description:"",displayName:"StyledFormErrorContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"FormError"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormError/styles.tsx#StyledFormErrorContainer"]={docgenInfo:StyledFormErrorContainer.__docgenInfo,name:"StyledFormErrorContainer",path:"src/components/forms/FormError/styles.tsx#StyledFormErrorContainer"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/common/Icon/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormError=({error,...rest})=>(0,jsx_runtime.jsxs)(StyledFormErrorContainer,{error,...rest,children:[(0,jsx_runtime.jsx)(_StyledIcon,{name:"warning"===error.level?"exclamation-circle":"bomb"}),error.message]});FormError.displayName="FormError",FormError.displayName="FormError";const cmp=(0,react.memo)(FormError);var _StyledIcon=(0,styled_components_browser_esm.ZP)(Icon.Z).withConfig({displayName:"cmp___StyledIcon",componentId:"sc-1xdovqh-0"})({marginRight:"0.5rem"});try{FormError.displayName="FormError",FormError.__docgenInfo={description:"",displayName:"FormError",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"FormError"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormError/cmp.tsx#FormError"]={docgenInfo:FormError.__docgenInfo,name:"FormError",path:"src/components/forms/FormError/cmp.tsx#FormError"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/forms/FormError/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/forms/FormError/cmp.tsx")},"./src/components/forms/FormLabel/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FormLabel_cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/utils/styles.ts"),styles_forms=__webpack_require__("./src/components/forms/styles.forms.tsx");const StyledRequiredSymbol=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__StyledRequiredSymbol",componentId:"sc-7t2a25-0"})([""]),StyledContainer=styled_components_browser_esm.ZP.span.attrs((0,styles.P)("tp-body")).withConfig({displayName:"styles__StyledContainer",componentId:"sc-7t2a25-1"})(["",""],(({theme,error})=>(0,styled_components_browser_esm.iv)([""," "," & ","{"," color:",";}"],{marginBottom:"0.625rem !important",display:"block"},styles_forms.nQ,StyledRequiredSymbol,{verticalAlign:"top"},error?"inherit":theme.form.feedback.required)));try{StyledRequiredSymbol.displayName="StyledRequiredSymbol",StyledRequiredSymbol.__docgenInfo={description:"",displayName:"StyledRequiredSymbol",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormLabel/styles.tsx#StyledRequiredSymbol"]={docgenInfo:StyledRequiredSymbol.__docgenInfo,name:"StyledRequiredSymbol",path:"src/components/forms/FormLabel/styles.tsx#StyledRequiredSymbol"})}catch(__react_docgen_typescript_loader_error){}try{StyledContainer.displayName="StyledContainer",StyledContainer.__docgenInfo={description:"",displayName:"StyledContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"FormError"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormLabel/styles.tsx#StyledContainer"]={docgenInfo:StyledContainer.__docgenInfo,name:"StyledContainer",path:"src/components/forms/FormLabel/styles.tsx#StyledContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormLabel=({error,label,required})=>(0,jsx_runtime.jsxs)(StyledContainer,{error,label,children:[label," ",required&&(0,jsx_runtime.jsx)(StyledRequiredSymbol,{children:"*"})]});FormLabel.displayName="FormLabel";const FormLabel_cmp=(0,react.memo)(FormLabel);try{FormLabel.displayName="FormLabel",FormLabel.__docgenInfo={description:"",displayName:"FormLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"FormError"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormLabel/cmp.tsx#FormLabel"]={docgenInfo:FormLabel.__docgenInfo,name:"FormLabel",path:"src/components/forms/FormLabel/cmp.tsx#FormLabel"})}catch(__react_docgen_typescript_loader_error){}try{cmp.displayName="cmp",cmp.__docgenInfo={description:"",displayName:"cmp",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"FormError"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormLabel/cmp.tsx#cmp"]={docgenInfo:cmp.__docgenInfo,name:"cmp",path:"src/components/forms/FormLabel/cmp.tsx#cmp"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/forms/FormLabel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/forms/FormLabel/cmp.tsx")},"./src/components/forms/Switch/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch_cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/utils/styles.ts"),color=__webpack_require__("./src/utils/color.ts");const StyledSwitchContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledSwitchContainer",componentId:"sc-1hshn08-0"})(["display:flex;align-items:center;gap:1.125rem;"]),StyledInputContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledInputContainer",componentId:"sc-1hshn08-1"})(["",""],(({theme})=>{const{shadow}=theme.form.switch;return(0,styled_components_browser_esm.iv)(["position:relative;width:3.75rem;height:2rem;border-radius:6.25rem;box-shadow:",";"],shadow)})),StyledInput=styled_components_browser_esm.ZP.input.attrs((0,styles.P)("fx-glass-base0")).withConfig({displayName:"styles__StyledInput",componentId:"sc-1hshn08-2"})(["",""],(({theme})=>{const{border,disabledType}=theme.form.switch;return(0,styled_components_browser_esm.iv)(["position:absolute;appearance:none;inset:0;outline:0;cursor:pointer;border-radius:6.25rem;width:100%;height:100%;margin:0;border:","rem solid ",";&:checked{border-color:",";}&:focus{border-width:","rem;border-color:",";}&:disabled{","}"],border.size,border.color,border.checked.color,border.focus.size,border.focus.color,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["border-color:#ffffff0f;cursor:not-allowed;&:checked{border-color:","1A;}"],border.checked.color):(0,styled_components_browser_esm.iv)(["border-color:",";background:",";"],theme.color.disabled,theme.color.disabled))})),StyledInputDot=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__StyledInputDot",componentId:"sc-1hshn08-3"})(["",""],(({theme})=>{const{duration}=theme.transition,{dot,disabledType}=theme.form.switch,{background,backgroundDisabled}=(0,color.lL)(dot.checked.background);return(0,styled_components_browser_esm.iv)(["position:absolute;top:0.25rem;left:0.38rem;pointer-events:none;width:1.5rem;height:1.5rem;z-index:1;border-radius:50%;background:",";&:after{content:'';position:absolute;inset:0;width:100%;height:100%;border-radius:50%;background:",";opacity:0;will-change:opacity;transition:all ease-in-out ","ms 0s;}will-change:transform;transition:transform ease-in-out ","ms 0s;",":checked + &{transform:translateX(100%);&:after{opacity:1;}}",":disabled + &{cursor:not-allowed;","}",":checked:disabled + &:after{","}"],dot.background,background,duration.fast,duration.fast,StyledInput,StyledInput,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["background:#ffffff1a;"]):(0,styled_components_browser_esm.iv)(["background:#ffffff;"]),StyledInput,"opacity"===disabledType?(0,styled_components_browser_esm.iv)(["background:",";"],backgroundDisabled):(0,styled_components_browser_esm.iv)(["background:#ffffff;"]))})),StyledLabel=styled_components_browser_esm.ZP.label.withConfig({displayName:"styles__StyledLabel",componentId:"sc-1hshn08-4"})(["",""],(({$disabled})=>(0,styled_components_browser_esm.iv)(["cursor:pointer;",""],$disabled&&(0,styled_components_browser_esm.iv)(["cursor:not-allowed;opacity:0.4;"]))));try{StyledSwitchContainer.displayName="StyledSwitchContainer",StyledSwitchContainer.__docgenInfo={description:"",displayName:"StyledSwitchContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/styles.tsx#StyledSwitchContainer"]={docgenInfo:StyledSwitchContainer.__docgenInfo,name:"StyledSwitchContainer",path:"src/components/forms/Switch/styles.tsx#StyledSwitchContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledInputContainer.displayName="StyledInputContainer",StyledInputContainer.__docgenInfo={description:"",displayName:"StyledInputContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/styles.tsx#StyledInputContainer"]={docgenInfo:StyledInputContainer.__docgenInfo,name:"StyledInputContainer",path:"src/components/forms/Switch/styles.tsx#StyledInputContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledInput.displayName="StyledInput",StyledInput.__docgenInfo={description:"",displayName:"StyledInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/styles.tsx#StyledInput"]={docgenInfo:StyledInput.__docgenInfo,name:"StyledInput",path:"src/components/forms/Switch/styles.tsx#StyledInput"})}catch(__react_docgen_typescript_loader_error){}try{StyledInputDot.displayName="StyledInputDot",StyledInputDot.__docgenInfo={description:"",displayName:"StyledInputDot",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/styles.tsx#StyledInputDot"]={docgenInfo:StyledInputDot.__docgenInfo,name:"StyledInputDot",path:"src/components/forms/Switch/styles.tsx#StyledInputDot"})}catch(__react_docgen_typescript_loader_error){}try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/styles.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/forms/Switch/styles.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/forms/SwitchGroup/cmp.tsx");var context=__webpack_require__("./src/components/forms/SwitchGroup/context.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=(0,react.forwardRef)(((props,ref)=>{const{className,id,label,disabled,...rest}=function useSwitchComponent({id,label,name,value,checked,className,onChange:onChangeProp,...rest}){const rndId=(0,react.useId)();id=id||rndId;const group=(0,context.O)(),onChange=(0,react.useCallback)((e=>{onChangeProp&&onChangeProp(e),group&&group.onChange(e)}),[group,onChangeProp]);return group&&(void 0===name&&(name=group.name),void 0===checked&&(checked=group.valueSet.has(value))),{checked,className,id,label,name,onChange,value,...rest}}(props);return(0,jsx_runtime.jsxs)(StyledSwitchContainer,{className,children:[(0,jsx_runtime.jsxs)(StyledInputContainer,{children:[(0,jsx_runtime.jsx)(StyledInput,{type:"checkbox",id,ref,disabled,...rest}),(0,jsx_runtime.jsx)(StyledInputDot,{})]}),label&&(0,jsx_runtime.jsx)(StyledLabel,{htmlFor:id,$disabled:disabled,children:label})]})}));Switch.displayName="Switch";const Switch_cmp=(0,react.memo)(Switch);try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/Switch/cmp.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/forms/Switch/cmp.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/forms/SwitchGroup/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),FormError=__webpack_require__("./src/components/forms/FormError/index.ts"),context=__webpack_require__("./src/components/forms/SwitchGroup/context.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledSwitchGroupContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledSwitchGroupContainer",componentId:"sc-e8beoa-0"})(["display:block;width:100%;max-width:100%;"]),StyledSwitchContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledSwitchContainer",componentId:"sc-e8beoa-1"})(["",""],(({direction})=>(0,styled_components_browser_esm.iv)(["display:flex;align-items:flex-start;flex-direction:",";gap:1.125rem;"],direction)));try{StyledSwitchGroupContainer.displayName="StyledSwitchGroupContainer",StyledSwitchGroupContainer.__docgenInfo={description:"",displayName:"StyledSwitchGroupContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/SwitchGroup/styles.tsx#StyledSwitchGroupContainer"]={docgenInfo:StyledSwitchGroupContainer.__docgenInfo,name:"StyledSwitchGroupContainer",path:"src/components/forms/SwitchGroup/styles.tsx#StyledSwitchGroupContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledSwitchContainer.displayName="StyledSwitchContainer",StyledSwitchContainer.__docgenInfo={description:"",displayName:"StyledSwitchContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/SwitchGroup/styles.tsx#StyledSwitchContainer"]={docgenInfo:StyledSwitchContainer.__docgenInfo,name:"StyledSwitchContainer",path:"src/components/forms/SwitchGroup/styles.tsx#StyledSwitchContainer"})}catch(__react_docgen_typescript_loader_error){}var FormLabel=__webpack_require__("./src/components/forms/FormLabel/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SwitchGroup=props=>{const{contextValue,children,direction,error,label,required,...rest}=function useSwitchGroupComponent({id,name,value,onChange,label,direction,children,error,required,...rest}){const rndId=(0,react.useId)();id=id||rndId,name=name||id;const valueSet=(0,react.useMemo)((()=>new Set(value)),[value]),contextValue=(0,react.useMemo)((()=>({name,value:Array.from(valueSet),valueSet,onChange(e){const checked=e.target.checked,value=e.target.value;checked?valueSet.add(value):valueSet.delete(value);const newValue=new Set(valueSet);onChange&&onChange(e,Array.from(newValue))}})),[name,valueSet,onChange]);return{contextValue,label,direction,children,error,required,...rest}}(props);return(0,jsx_runtime.jsx)(context.F.Provider,{value:contextValue,children:(0,jsx_runtime.jsxs)(StyledSwitchGroupContainer,{direction,...rest,children:[label&&(0,jsx_runtime.jsx)(FormLabel.Z,{label,error,required}),(0,jsx_runtime.jsx)(StyledSwitchContainer,{direction,children}),error&&(0,jsx_runtime.jsx)(FormError.Z,{error})]})})};SwitchGroup.displayName="SwitchGroup",SwitchGroup.displayName="SwitchGroup";const cmp=(0,react.memo)(SwitchGroup);try{SwitchGroup.displayName="SwitchGroup",SwitchGroup.__docgenInfo={description:"",displayName:"SwitchGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, value: SwitchGroupValue[]) => void)"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"FormError"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/SwitchGroup/cmp.tsx#SwitchGroup"]={docgenInfo:SwitchGroup.__docgenInfo,name:"SwitchGroup",path:"src/components/forms/SwitchGroup/cmp.tsx#SwitchGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/forms/SwitchGroup/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>SwitchGroupContext,O:()=>useSwitchGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SwitchGroupContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),useSwitchGroup=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SwitchGroupContext)},"./src/components/forms/styles.forms.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>StyledInputWrapper,Zp:()=>fieldPlaceholderCss,ld:()=>fieldPlaceholderStyles,n2:()=>fieldDisabledStyles,nQ:()=>errorCss,q1:()=>fieldDisabledCss,qQ:()=>fieldErrorCss,wu:()=>fieldFocusCss});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"stylesforms__StyledInputWrapper",componentId:"sc-b8ja42-0"})(["max-width:100%;min-width:10rem;"]),fieldErrorCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&&{","}"],(({theme,error})=>{if(!error)return"";const{input,feedback}=theme.form;return"warning"===error.level?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-width:","rem;border-color:",";"],input.border.feedback.size,feedback.warning):(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-width:","rem;border-color:",";"],input.border.feedback.size,feedback.error)})),errorCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&&{","}"],(({theme,error})=>{if(!error)return"";const{feedback}=theme.form;return"warning"===error.level?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["color:",";"],feedback.warning):(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["color:",";"],feedback.error)})),fieldDisabledStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["opacity:0.5;"]),fieldDisabledCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["",""],(({disabled})=>disabled?fieldDisabledStyles:"")),fieldPlaceholderStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["",""],(({theme})=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["mix-blend-mode:normal;color:",";opacity:0.4;"],theme.color.text))),fieldPlaceholderCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&::placeholder{","}"],fieldPlaceholderStyles),fieldFocusCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["",""],(({theme})=>{const{border}=theme.form.input;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&:focus,&._focus{border-width:","rem;border-color:",";}"],border.focus.size,border.color)}));try{StyledInputWrapper.displayName="StyledInputWrapper",StyledInputWrapper.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"FormError"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/styles.forms.tsx#StyledInputWrapper"]={docgenInfo:StyledInputWrapper.__docgenInfo,name:"StyledInputWrapper",path:"src/components/forms/styles.forms.tsx#StyledInputWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lL:()=>normalizeBackgroundColor,nI:()=>colorHexToRGBALottie,tB:()=>colorNameToHex});const defaultBrowserColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function colorNameToHex(colorName){return defaultBrowserColors[colorName]}function colorHexToRGBALottie(hex){const[r,g,b,a]=function colorHexToRGBA(hex){return hex=hex.replace("#",""),[parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16),hex.length>6?parseInt(hex.slice(4,6),16):255]}(hex);return[r/255,g/255,b/255,a/255]}function normalizeBackgroundColor(color,disabledOpacity="1A"){const gradient="string"==typeof color?{colors:[color,color],deg:90,stops:[0,100],fn:`linear-gradient(90deg, ${color} 0%, ${color} 100%)`}:color,disabledGradient={...gradient,fn:`linear-gradient(90deg, ${color}${disabledOpacity} 0%, ${color}${disabledOpacity} 100%)`};return{background:"string"===color?color:gradient.fn,backgroundDisabled:"string"===color?`${color}${disabledOpacity}`:disabledGradient.fn}}},"./src/utils/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function addClasses(className){return props=>({...props,className:`${props.className||""} ${className}`})}__webpack_require__.d(__webpack_exports__,{P:()=>addClasses})}}]);