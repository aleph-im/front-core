"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[6810],{"./src/components/modules/RouterNavbar/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NestedExactFalsePath:()=>NestedExactFalsePath,NestedExactPath:()=>NestedExactPath,NestedRoutes:()=>NestedRoutes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cmp_stories});var react=__webpack_require__("./node_modules/react/index.js"),Logo=__webpack_require__("./src/components/common/Logo/index.ts"),cmp=__webpack_require__("./src/components/modules/Navbar/cmp.tsx");try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},mobileTopContent:{defaultValue:null,description:"",name:"mobileTopContent",required:!1,type:{name:"ReactNode"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},breakpoint:{defaultValue:null,description:"",name:"breakpoint",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/Navbar/index.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/components/modules/Navbar/index.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}var NavbarLinkList=__webpack_require__("./src/components/modules/NavbarLinkList/index.tsx"),NavbarLink=__webpack_require__("./src/components/modules/NavbarLink/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),RouterLink=__webpack_require__("./src/components/modules/RouterLink/index.tsx"),styles=__webpack_require__("./src/utils/styles.ts"),src_styles=__webpack_require__("./src/styles/index.ts"),RouterLink_styles=__webpack_require__("./src/components/modules/RouterLink/styles.tsx");const StyledRouterLink=(0,styled_components_browser_esm.ZP)(RouterLink.Z).withConfig({displayName:"styles__StyledRouterLink",componentId:"sc-1212fio-0"})(["",""],(({$level,route:{icon}})=>(0,styled_components_browser_esm.iv)([""," & ","{padding-left:","rem;padding-right:","rem;}&,& *{","}"],{width:"100%"},RouterLink_styles.bm,.25+$level*(icon?1.5:3.125),.25+1.5*$level,{cursor:"pointer !important"}))),StyledNavTitle=styled_components_browser_esm.ZP.div.attrs((0,styles.P)("tp-nav")).withConfig({displayName:"styles__StyledNavTitle",componentId:"sc-1212fio-1"})(["",""],(({$level})=>(0,styled_components_browser_esm.iv)([""," padding-left:","rem;padding-right:","rem;"],{display:"flex",height:"3rem",width:"auto",maxWidth:"100%",alignItems:"center",textTransform:"uppercase"},.25+1.5*$level,.25+1.5*$level))),StyledChildRoutes=styled_components_browser_esm.ZP.li.withConfig({displayName:"styles__StyledChildRoutes",componentId:"sc-1212fio-2"})(["",""],(({$breakpoint})=>(0,styled_components_browser_esm.iv)([""," ",""],{display:"block"},(0,src_styles.gn)($breakpoint,(0,styled_components_browser_esm.iv)(["",""],{display:"none"}))))),StyledChildRoutesContent=styled_components_browser_esm.ZP.ul.withConfig({displayName:"styles__StyledChildRoutesContent",componentId:"sc-1212fio-3"})(["",""],(({theme})=>{const{background,radius}=theme.component.navbar.mobile.content.child;return(0,styled_components_browser_esm.iv)([""," background-color:",";border-radius:","rem;"],{display:"block"},background,radius)}));try{StyledRouterLink.displayName="StyledRouterLink",StyledRouterLink.__docgenInfo={description:"",displayName:"StyledRouterLink",props:{Link:{defaultValue:null,description:"",name:"Link",required:!0,type:{name:"LinkComponent"}},route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"Route"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},$level:{defaultValue:null,description:"",name:"$level",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterNavbar/styles.tsx#StyledRouterLink"]={docgenInfo:StyledRouterLink.__docgenInfo,name:"StyledRouterLink",path:"src/components/modules/RouterNavbar/styles.tsx#StyledRouterLink"})}catch(__react_docgen_typescript_loader_error){}try{StyledNavTitle.displayName="StyledNavTitle",StyledNavTitle.__docgenInfo={description:"",displayName:"StyledNavTitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$level:{defaultValue:null,description:"",name:"$level",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterNavbar/styles.tsx#StyledNavTitle"]={docgenInfo:StyledNavTitle.__docgenInfo,name:"StyledNavTitle",path:"src/components/modules/RouterNavbar/styles.tsx#StyledNavTitle"})}catch(__react_docgen_typescript_loader_error){}try{StyledChildRoutes.displayName="StyledChildRoutes",StyledChildRoutes.__docgenInfo={description:"",displayName:"StyledChildRoutes",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},$breakpoint:{defaultValue:null,description:"",name:"$breakpoint",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterNavbar/styles.tsx#StyledChildRoutes"]={docgenInfo:StyledChildRoutes.__docgenInfo,name:"StyledChildRoutes",path:"src/components/modules/RouterNavbar/styles.tsx#StyledChildRoutes"})}catch(__react_docgen_typescript_loader_error){}try{StyledChildRoutesContent.displayName="StyledChildRoutesContent",StyledChildRoutesContent.__docgenInfo={description:"",displayName:"StyledChildRoutesContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterNavbar/styles.tsx#StyledChildRoutesContent"]={docgenInfo:StyledChildRoutesContent.__docgenInfo,name:"StyledChildRoutesContent",path:"src/components/modules/RouterNavbar/styles.tsx#StyledChildRoutesContent"})}catch(__react_docgen_typescript_loader_error){}var ToggleContainer=__webpack_require__("./src/components/layout/ToggleContainer/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Route=props=>{const{pathname,route,breakpoint,Link,level=0,onClick,variant,exact,...rest}=props,isActive=exact?pathname===route.href:pathname.indexOf(route.href)>=0,linkProps={route,Link,...rest};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:route.children?(0,jsx_runtime.jsx)(ParentRouteMemo,{...linkProps,pathname,breakpoint,variant,level,onClick}):(0,jsx_runtime.jsx)(NavbarLink.Z,{breakpoint,level,children:(0,jsx_runtime.jsx)(StyledRouterLink,{...linkProps,variant,isActive,onClick,$level:level})})})};Route.displayName="Route";const ParentRoute=props=>{const{breakpoint,pathname,route,Link,level=0,onClick,variant,...rest}=props,{name,children=[]}=route,isActive=pathname.indexOf(route.href)>=0,[active,setActive]=(0,react.useState)(isActive),handleClick=(0,react.useCallback)((e=>{e.preventDefault(),setActive((prev=>!prev))}),[]),newLevel=level+1,subroutes=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavbarLink.Z,{breakpoint,children:(0,jsx_runtime.jsx)(StyledNavTitle,{$level:newLevel,children:name})}),children.map((route=>(0,jsx_runtime.jsx)(RouteMemo,{route,Link,breakpoint,pathname,level:newLevel,exact:route.exact,onClick,...rest},route.href)))]});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:level<1?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NavbarLink.Z,{breakpoint,children:(0,jsx_runtime.jsx)(StyledRouterLink,{route,Link,isActive,$level:level,variant,...rest,onClick:handleClick})}),(0,jsx_runtime.jsx)(StyledChildRoutes,{$breakpoint:breakpoint,children:(0,jsx_runtime.jsx)(ToggleContainer.Z,{open:!!active,children:(0,jsx_runtime.jsx)(StyledChildRoutesContent,{children:subroutes})})})]}):subroutes})};ParentRoute.displayName="ParentRoute";const RouterNavbar=({breakpoint="md",pathname,routes,Link,children,onToggle,...rest})=>{const theme=(0,styled_components_browser_esm.Fg)(),variant=(0,hooks.RP)(breakpoint)?"3":"4",handleLinkClick=(0,react.useCallback)((()=>{onToggle&&onToggle(!1)}),[onToggle]),{logoText}=theme.component.navbar,logo=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(Link,{href:"/",route:{href:"/"},children:(0,jsx_runtime.jsx)(Logo.Z,{text:logoText})})),[Link,logoText]);return(0,jsx_runtime.jsxs)(cmp.Z,{breakpoint,onToggle,logo,...rest,children:[(0,jsx_runtime.jsx)(NavbarLinkList.Z,{withSlash:!0,collapsible:"xl",breakpoint,children:routes.map((route=>(0,jsx_runtime.jsx)(RouteMemo,{route,Link,breakpoint,variant,pathname,onClick:handleLinkClick,exact:route.exact},route.href)))}),children]})};RouterNavbar.displayName="RouterNavbar",RouterNavbar.displayName="RouterNavbar";const RouteMemo=(0,react.memo)(Route),ParentRouteMemo=(0,react.memo)(ParentRoute),RouterNavbar_cmp=(0,react.memo)(RouterNavbar);try{RouterNavbar.displayName="Route",RouterNavbar.__docgenInfo={description:"",displayName:"Route",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},mobileTopContent:{defaultValue:null,description:"",name:"mobileTopContent",required:!1,type:{name:"ReactNode"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},breakpoint:{defaultValue:{value:"md"},description:"",name:"breakpoint",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((open: boolean) => void)"}},routes:{defaultValue:null,description:"",name:"routes",required:!0,type:{name:"Route[]"}},pathname:{defaultValue:null,description:"",name:"pathname",required:!0,type:{name:"string"}},Link:{defaultValue:null,description:"",name:"Link",required:!0,type:{name:"LinkComponent"}},containerRef:{defaultValue:null,description:"",name:"containerRef",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterNavbar/cmp.tsx#Route"]={docgenInfo:Route.__docgenInfo,name:"Route",path:"src/components/modules/RouterNavbar/cmp.tsx#Route"})}catch(__react_docgen_typescript_loader_error){}const cmp_stories={title:"Components/UI/modules/RouterNavbar",component:RouterNavbar_cmp,subcomponents:{NavbarLink:NavbarLink.Z}},defaultArgs={breakpoint:"md",pathname:"/earn/staking",routes:[{name:"Account",href:"/",icon:"earn",children:[{name:"Earn",href:"/earn",icon:"earn",flag:6,children:[{name:"Staking",href:"/earn/staking",icon:"earn",flag:1},{name:"Core nodes",href:"/earn/ccn",icon:"ccn",flag:2},{name:"Compute nodes",href:"/earn/crn",icon:"crn",flag:3}]}]},{name:"Console",icon:"console",href:"https://console.aleph.im/",target:"_blank",external:!0},{name:"Explorer",icon:"explore",href:"https://explorer.aleph.im/",target:"_blank",external:!0},{name:"Swap",icon:"swap",href:"https://swap.aleph.im/",target:"_blank",external:!0}],Link:props=>(0,jsx_runtime.jsx)("a",{...props})},Template=args=>{const[open,setOpen]=(0,react.useState)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RouterNavbar_cmp,{...args,open,onToggle:setOpen}),(0,jsx_runtime.jsx)("h1",{children:"A random title"}),Array.from({length:200},((_,i)=>(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus."},i)))]})},Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={controls:{exclude:["color","size"]}};const NestedRoutes=Template.bind({});NestedRoutes.args={...defaultArgs,pathname:"/computing/instance",routes:[{name:"Console",href:"/",icon:"console",children:[{name:"Solutions",href:"/solutions",children:[{name:"Dashboard",href:"/solutions/dashboard"}]},{name:"Computing",href:"/computing",children:[{name:"Functions",href:"/computing/function"},{name:"Instances",href:"/computing/instance"},{name:"Confidential",href:"/computing/confidential"}]},{name:"Storage",href:"/storage",children:[{name:"Inmutable volumes",href:"/storage/volume"}]},{name:"Tools",href:"#",children:[{name:"VRF",href:"https://medium.com/aleph-im/aleph-im-verifiable-random-function-vrf-b03544a7e904",external:!0},{name:"Indexing framework",href:"https://docs.aleph.im/tools/indexer/",external:!0}]},{name:"Configure",href:"/configure",children:[{name:"Secrets",href:"/configure/ssh"},{name:"Custom domains",href:"/configure/domain"}]}]},{name:"Account",icon:"profile",href:"https://account.aleph.im/",target:"_blank",external:!0},{name:"Explorer",icon:"explore",href:"https://explorer.aleph.im/",target:"_blank",external:!0},{name:"Swap",icon:"swap",href:"https://swap.aleph.im/",target:"_blank",external:!0}]},NestedRoutes.parameters={controls:{exclude:["color","size"]}};const NestedExactPath=Template.bind({});NestedExactPath.args={...defaultArgs,pathname:"/tools/init",routes:[{name:"Root",href:"/",icon:"console",children:[{name:"Nested Root",href:"/",exact:!0},{name:"Tools",href:"/tools",children:[{name:"Init tool",href:"/tools/init",external:!0,exact:!0},{name:"Indexing framework",href:"https://docs.aleph.im/tools/indexer/",external:!0}]}]},{name:"Account",icon:"profile",href:"https://account.aleph.im/",target:"_blank",external:!0},{name:"Explorer",icon:"explore",href:"https://explorer.aleph.im/",target:"_blank",external:!0},{name:"Swap",icon:"swap",href:"https://swap.aleph.im/",target:"_blank",external:!0}]},NestedExactPath.parameters={controls:{exclude:["color","size"]}};const NestedExactFalsePath=Template.bind({});NestedExactFalsePath.args={...defaultArgs,pathname:"/tools",routes:[{name:"Root",href:"/",icon:"console",exact:!0},{name:"Tools",href:"/tools",children:[{name:"Init tool",href:"/tools"},{name:"Indexing framework",href:"https://docs.aleph.im/tools/indexer/",external:!0}]},{name:"Account",icon:"profile",href:"https://account.aleph.im/",target:"_blank",external:!0},{name:"Explorer",icon:"explore",href:"https://explorer.aleph.im/",target:"_blank",external:!0},{name:"Swap",icon:"swap",href:"https://swap.aleph.im/",target:"_blank",external:!0}]},NestedExactFalsePath.parameters={controls:{exclude:["color","size"]}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [open, setOpen] = useState<boolean>();\n  return <>\n      <RouterNavbar {...{\n      ...args,\n      open,\n      onToggle: setOpen\n    }} />\n\n      <h1>A random title</h1>\n\n      {Array.from({\n      length: 200\n    }, (_, i) => <p key={i}>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis\n          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit\n          aperiam qui, optio laboriosam animi labore repudiandae incidunt\n          excepturi sint tempore accusamus.\n        </p>)}\n    </>;\n}",...Default.parameters?.docs?.source}}},NestedRoutes.parameters={...NestedRoutes.parameters,docs:{...NestedRoutes.parameters?.docs,source:{originalSource:"args => {\n  const [open, setOpen] = useState<boolean>();\n  return <>\n      <RouterNavbar {...{\n      ...args,\n      open,\n      onToggle: setOpen\n    }} />\n\n      <h1>A random title</h1>\n\n      {Array.from({\n      length: 200\n    }, (_, i) => <p key={i}>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis\n          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit\n          aperiam qui, optio laboriosam animi labore repudiandae incidunt\n          excepturi sint tempore accusamus.\n        </p>)}\n    </>;\n}",...NestedRoutes.parameters?.docs?.source}}},NestedExactPath.parameters={...NestedExactPath.parameters,docs:{...NestedExactPath.parameters?.docs,source:{originalSource:"args => {\n  const [open, setOpen] = useState<boolean>();\n  return <>\n      <RouterNavbar {...{\n      ...args,\n      open,\n      onToggle: setOpen\n    }} />\n\n      <h1>A random title</h1>\n\n      {Array.from({\n      length: 200\n    }, (_, i) => <p key={i}>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis\n          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit\n          aperiam qui, optio laboriosam animi labore repudiandae incidunt\n          excepturi sint tempore accusamus.\n        </p>)}\n    </>;\n}",...NestedExactPath.parameters?.docs?.source}}},NestedExactFalsePath.parameters={...NestedExactFalsePath.parameters,docs:{...NestedExactFalsePath.parameters?.docs,source:{originalSource:"args => {\n  const [open, setOpen] = useState<boolean>();\n  return <>\n      <RouterNavbar {...{\n      ...args,\n      open,\n      onToggle: setOpen\n    }} />\n\n      <h1>A random title</h1>\n\n      {Array.from({\n      length: 200\n    }, (_, i) => <p key={i}>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis\n          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit\n          aperiam qui, optio laboriosam animi labore repudiandae incidunt\n          excepturi sint tempore accusamus.\n        </p>)}\n    </>;\n}",...NestedExactFalsePath.parameters?.docs?.source}}};const __namedExportsOrder=["Default","NestedRoutes","NestedExactPath","NestedExactFalsePath"]},"./src/components/layout/ToggleContainer/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledContainer",componentId:"sc-iauxb3-0"})(["",""],(({$isOpen,$duration=700,$variant="2"})=>{const $duration1=$duration*(2/3),$duration2=$duration*(1/3);return(0,styled_components_browser_esm.iv)(["display:grid;grid-template-rows:0fr;will-change:grid-template-rows;transition:",";transition-property:grid-template-rows;"," & ","{","}"],"1"===$variant?`all ease-in-out ${$duration}ms 0s`:`all ease-in-out ${$duration1}ms ${$isOpen?"0":$duration2}ms`,$isOpen&&(0,styled_components_browser_esm.iv)(["grid-template-rows:1fr;"]),StyledContent,"2"===$variant&&(0,styled_components_browser_esm.iv)(["visibility:",";opacity:",";transition:",";transition-property:visibility opacity;"],$isOpen?"inherit":"hidden",$isOpen?"1":"0",`all ease-in-out ${$duration1}ms ${$isOpen?$duration2:"0"}ms`))})),StyledContent=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__StyledContent",componentId:"sc-iauxb3-1"})(["overflow:hidden;"]);try{StyledContainer.displayName="StyledContainer",StyledContainer.__docgenInfo={description:"",displayName:"StyledContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},$isOpen:{defaultValue:null,description:"",name:"$isOpen",required:!0,type:{name:"boolean"}},$duration:{defaultValue:null,description:"",name:"$duration",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/ToggleContainer/styles.tsx#StyledContainer"]={docgenInfo:StyledContainer.__docgenInfo,name:"StyledContainer",path:"src/components/layout/ToggleContainer/styles.tsx#StyledContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledContent.displayName="StyledContent",StyledContent.__docgenInfo={description:"",displayName:"StyledContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/ToggleContainer/styles.tsx#StyledContent"]={docgenInfo:StyledContent.__docgenInfo,name:"StyledContent",path:"src/components/layout/ToggleContainer/styles.tsx#StyledContent"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleContainer=(0,react.forwardRef)((({children,open:$isOpen,duration:$duration,variant:$variant,...rest},ref)=>(0,jsx_runtime.jsx)(StyledContainer,{$isOpen,$duration,$variant,children:(0,jsx_runtime.jsx)(StyledContent,{ref,...rest,children})})));ToggleContainer.displayName="ToggleContainer";const cmp=(0,react.memo)(ToggleContainer);try{ToggleContainer.displayName="ToggleContainer",ToggleContainer.__docgenInfo={description:"",displayName:"ToggleContainer",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/ToggleContainer/cmp.tsx#ToggleContainer"]={docgenInfo:ToggleContainer.__docgenInfo,name:"ToggleContainer",path:"src/components/layout/ToggleContainer/cmp.tsx#ToggleContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layout/ToggleContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layout/ToggleContainer/cmp.tsx")},"./src/components/modules/RouterLink/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/modules/RouterLink/styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RouterLink=({route,isActive:$isActive,disabled:$disabled,variant:$variant,Link,...rest})=>{const{name,icon,flag,href,target}=route;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link,{route,href,target,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__.bm,{$variant,$isActive,$disabled,$hasIcon:!!icon,$hasFlag:!!flag,className:$isActive?"_active":"",children:[!!icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.Jz,{name:icon}),!!name&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.tz,{children:name}),!!flag&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.QW,{children:flag})]})})};RouterLink.displayName="RouterLink",RouterLink.displayName="RouterLink";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(RouterLink);try{RouterLink.displayName="RouterLink",RouterLink.__docgenInfo={description:"",displayName:"RouterLink",props:{route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"Route"}},Link:{defaultValue:null,description:"",name:"Link",required:!0,type:{name:"LinkComponent"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterLink/cmp.tsx#RouterLink"]={docgenInfo:RouterLink.__docgenInfo,name:"RouterLink",path:"src/components/modules/RouterLink/cmp.tsx#RouterLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modules/RouterLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/modules/RouterLink/cmp.tsx");try{RouterLink.displayName="RouterLink",RouterLink.__docgenInfo={description:"",displayName:"RouterLink",props:{route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"Route"}},Link:{defaultValue:null,description:"",name:"Link",required:!0,type:{name:"LinkComponent"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modules/RouterLink/index.tsx#RouterLink"]={docgenInfo:RouterLink.__docgenInfo,name:"RouterLink",path:"src/components/modules/RouterLink/index.tsx#RouterLink"})}catch(__react_docgen_typescript_loader_error){}}}]);