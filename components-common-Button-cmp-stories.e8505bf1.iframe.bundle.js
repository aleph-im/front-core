"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[6498],{"./src/components/common/Button/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Catalog:()=>Catalog,Default:()=>Default,Forwarded:()=>Forwarded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/cmp.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/common/Button",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z},defaultArgs={as:"button",children:"Text",color:"main0",variant:"primary",kind:"flat",size:"regular"},defaultParams={},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={...defaultArgs,hover:!1,active:!1,focus:!1,disabled:!1},Default.parameters={...defaultParams};const Forwarded=Template.bind({});function Cell({children,gc,gr,bg=!1}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{gridColumn:gc,gridRow:gr,padding:"5px",background:bg?"rgba(128,128,128,0.5)":void 0,display:"flex",alignItems:"center",justifyContent:"center"},children})}Forwarded.args={...defaultArgs,hover:!1,active:!1,focus:!1,disabled:!1,as:"a"},Forwarded.parameters={...defaultParams},Cell.displayName="Cell";const CatalogTemplate=args=>{args={...defaultArgs,...args};const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Fg)(),colors=Object.keys(theme.color).filter((c=>-1!==c.indexOf("main"))),kinds=["neon","flat"],sizes=["big","regular"],variants=["primary","secondary","tertiary","text-only"],col1=kinds.length*sizes.length*variants.length-sizes.length,col2=sizes.length*variants.length,col3=variants.length;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto auto 1fr 1fr 1fr 1fr 1fr",gap:"4px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,gc:"span 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:"Default"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:"Focus"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:"Active"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:"Hover"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:"Disable"}),colors.map((color=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,gr:`span ${col1}`,children:color}),kinds.map((kind=>{const isFlat="flat"===kind,removeCols=isFlat?sizes.length:0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,gr:"span "+(col2-removeCols),children:kind}),sizes.map((size=>{const removeCols=isFlat?1:0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,gr:"span "+(col3-removeCols),children:size}),variants.map((variant=>{if("tertiary"===variant&&isFlat)return null;const extraArgs={...args,kind,size,variant,color};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{bg:!0,children:variant}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...extraArgs})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...extraArgs,focus:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...extraArgs,active:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...extraArgs,hover:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cell,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...extraArgs,disabled:!0})})]})}))]})}))]})}))]})))]})};CatalogTemplate.displayName="CatalogTemplate";const Catalog=CatalogTemplate.bind({});Catalog.args={...defaultArgs},Catalog.parameters={...defaultParams,controls:{include:[],hideNoControlsWarning:!0}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Default.parameters?.docs?.source}}},Forwarded.parameters={...Forwarded.parameters,docs:{...Forwarded.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Forwarded.parameters?.docs?.source}}},Catalog.parameters={...Catalog.parameters,docs:{...Catalog.parameters?.docs,source:{originalSource:"args => {\n  args = ({\n    ...defaultArgs,\n    ...args\n  } as ButtonProps);\n  const theme = useTheme();\n  const colors: string[] = Object.keys(theme.color).filter(c => c.indexOf('main') !== -1);\n  const kinds: ButtonKind[] = ['neon', 'flat'];\n  const sizes: ButtonSize[] = ['big', 'regular'];\n  const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'text-only'];\n  const col1 = kinds.length * sizes.length * variants.length - sizes.length;\n  const col2 = sizes.length * variants.length;\n  const col3 = variants.length;\n  return <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'auto auto auto auto 1fr 1fr 1fr 1fr 1fr',\n    gap: '4px'\n  }}>\n      <Cell bg gc={`span 4`}></Cell>\n      <Cell bg>Default</Cell>\n      <Cell bg>Focus</Cell>\n      <Cell bg>Active</Cell>\n      <Cell bg>Hover</Cell>\n      <Cell bg>Disable</Cell>\n\n      {colors.map(color => {\n      return <>\n            <Cell bg gr={`span ${col1}`}>\n              {color}\n            </Cell>\n            {kinds.map(kind => {\n          const isFlat = kind === 'flat';\n          const removeCols = isFlat ? sizes.length : 0;\n          return <>\n                  <Cell bg gr={`span ${col2 - removeCols}`}>\n                    {kind}\n                  </Cell>\n                  {sizes.map(size => {\n              const removeCols = isFlat ? 1 : 0;\n              return <>\n                        <Cell bg gr={`span ${col3 - removeCols}`}>\n                          {size}\n                        </Cell>\n                        {variants.map(variant => {\n                  if (variant === 'tertiary' && isFlat) return null;\n                  const extraArgs = {\n                    ...args,\n                    kind,\n                    size,\n                    variant,\n                    color\n                  };\n                  return <>\n                              <Cell bg>{variant}</Cell>\n                              <Cell>\n                                <Button {...extraArgs} />\n                              </Cell>\n                              <Cell>\n                                <Button {...extraArgs} focus />\n                              </Cell>\n                              <Cell>\n                                <Button {...extraArgs} active />\n                              </Cell>\n                              <Cell>\n                                <Button {...extraArgs} hover />\n                              </Cell>\n                              <Cell>\n                                <Button {...extraArgs} disabled />\n                              </Cell>\n                            </>;\n                })}\n                      </>;\n            })}\n                </>;\n        })}\n          </>;\n    })}\n    </div>;\n}",...Catalog.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Forwarded","Catalog"]},"./src/components/common/Button/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const StyledButton=styled_components_browser_esm.ZP.button.withConfig({displayName:"styles__StyledButton",componentId:"sc-1ldkp5b-0"})(["",""],(props=>{const{theme,color,size,variant}=props,mainColor=theme.color[color]||color,{button}=theme.component,defaultVariantsCss=(props=>{const{theme,color,variant,kind}=props,mainColor=theme.color[color]||color,[g0,g1]=theme.gradient[color]?.colors||[color,color],{button}=theme.component,glowMinCss=button.glow?(0,styles.uS)(color,{width:192,height:192}):void 0,underscoreCss="text-only"===variant?(0,styled_components_browser_esm.iv)(["padding-left:0;padding-right:0;border-radius:0;&::after{display:block;mask:none;height:","rem;padding:0;background-clip:content-box;border-radius:0;top:50%;margin-top:0.48em;}"],button.border.size):void 0;if("flat"===kind)switch(variant){case"primary":return(0,styled_components_browser_esm.iv)(["color:",";background-color:",";&::after{display:none;}"],theme.color.background,mainColor);case"secondary":return(0,styled_components_browser_esm.iv)(["&::after{display:block;}"]);case"text-only":return(0,styled_components_browser_esm.iv)(["",""],underscoreCss)}else switch(variant){case"primary":return(0,styled_components_browser_esm.iv)(["color:",";background-image:linear-gradient(90deg,"," 0%,"," 100%);"," &::after{display:none;}"],theme.color.background,g0,g1,glowMinCss);case"secondary":return(0,styled_components_browser_esm.iv)(["&::after{display:block;background-image:linear-gradient(90deg,"," 0%,"," 100%);}"],g0,g1);case"tertiary":return(0,styled_components_browser_esm.iv)(["background-image:linear-gradient(90deg,","1f 0%,","1f 100%);&::after{display:block;background-image:linear-gradient(90deg,"," 0%,"," 100%);}"],g0,g1,g0,g1);case"text-only":return(0,styled_components_browser_esm.iv)(["color:",";background-color:transparent;",""],theme.color.text,underscoreCss)}})(props),focusVariantsCss=(props=>{const{theme,variant}=props,{button}=theme.component;return(0,styled_components_browser_esm.iv)(["&::after{display:block;background-image:none;background-color:",";","}"],theme.color.text,"text-only"===variant?(0,styled_components_browser_esm.iv)(["height:","rem;"],button.border.focus.size):(0,styled_components_browser_esm.iv)(["padding:","rem;"],button.border.focus.size))})(props),hoverVariantsCss=(props=>{const{theme,color,variant,kind}=props,{button}=theme.component,glowHoverCss=button.glow?(0,styles.CP)(color,{width:192,height:192}):void 0;return"neon"===kind&&"primary"===variant?glowHoverCss:(0,styled_components_browser_esm.iv)([""])})(props),activeVariantsCss=((props,defaultVariantsCss)=>{const{variant}=props;return(0,styled_components_browser_esm.iv)([""," "," box-shadow:none;backdrop-filter:none;"],defaultVariantsCss,"tertiary"===variant?"background-image: none;":"")})(props,defaultVariantsCss),disableVariantsCss=(props=>{const{theme,variant}=props,whiteDisabled=`${theme.color.text}4C`,blackDisabled=theme.color.base2;return(0,styled_components_browser_esm.iv)(["cursor:not-allowed;color:",";background-color:transparent;background-image:none;box-shadow:none;backdrop-filter:none;"," &::after{display:block;","}"],theme.color.text,"primary"===variant?(0,styled_components_browser_esm.iv)(["background-color:",";color:",";"],whiteDisabled,blackDisabled):(0,styled_components_browser_esm.iv)(["color:",";"],whiteDisabled),"primary"===variant?(0,styled_components_browser_esm.iv)(["background-color:",";"],blackDisabled):(0,styled_components_browser_esm.iv)(["background-color:",";background-image:none;"],whiteDisabled))})(props);return(0,styled_components_browser_esm.iv)(["&&{position:relative;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;gap:0.375rem;text-align:center;font-weight:",";font-family:",";font-style:",";margin:0;padding:0.5rem 1.375rem;width:auto;min-width:0;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border:none;border-radius:1.875rem;line-height:1.16666666667;letter-spacing:0.0522rem;background-color:transparent;outline:0;color:",";transform:transale3d(0,0,0);text-decoration:none !important;z-index:0;transition:all 0.2s 0s ease-in-out;&::after{display:none;content:'';position:absolute;top:0;left:0;height:100%;width:100%;background-color:",";z-index:-1;padding:","rem;border-radius:1.875rem;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;}"," &:focus,&._focus{","}&:hover,&._hover{","}&:active,&._active{","}&[disabled]{","}","}"],button.font.weight,button.font.family,button.font.style,theme.color.text,mainColor,button.border.size,defaultVariantsCss,focusVariantsCss,hoverVariantsCss,activeVariantsCss,disableVariantsCss,(()=>{switch(size){case"regular":return(0,styled_components_browser_esm.iv)(["min-height:2.3125rem;font-size:","rem;"],button.font.size.regular-("text-only"!==variant?0:.25));case"big":return(0,styled_components_browser_esm.iv)(["min-height:2.75rem;font-size:","rem;"],button.font.size.big-("text-only"!==variant?0:.375))}}))}));try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"big"'},{value:'"regular"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"text-only"'}]}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"flat"'},{value:'"neon"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/common/Button/styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)((({variant="primary",kind="flat",size="regular",color="main2",as="button",children,hover,active,focus,className,...rest},ref)=>{const classes=(0,react.useMemo)((()=>[hover?"_hover":"",active?"_active":"",focus?"_focus":""].join(" ")+(className||"")),[hover,active,focus,className]);return(0,jsx_runtime.jsx)(StyledButton,{role:"button",ref,as,variant,kind,size,color,className:classes,...rest,children})}));Button.displayName="Button";const cmp=(0,react.memo)(Button);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"text-only"'}]}},kind:{defaultValue:{value:"flat"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"flat"'},{value:'"neon"'}]}},size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"regular"'}]}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"button"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"button"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/cmp.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/cmp.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);