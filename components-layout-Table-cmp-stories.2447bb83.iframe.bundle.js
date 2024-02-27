"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[1396],{"./src/components/layout/Table/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyPlaceholder:()=>EmptyPlaceholder,InfiniteScroll:()=>InfiniteScroll,StickyTable:()=>StickyTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cmp_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledTable=styled_components_browser_esm.ZP.table.withConfig({displayName:"styles__StyledTable",componentId:"sc-1fyt39t-0"})(["",""],(({borderType="none"})=>{const hasBorder="none"!==borderType;return(0,styled_components_browser_esm.iv)(["width:100%;border-collapse:collapse;border-spacing:0 0.625rem;thead th{font-size:0.75rem;white-space:nowrap;text-transform:uppercase;}td,th{font-size:1rem;padding:0.75rem 1rem;width:0;}th{border-bottom:0.0625rem solid #ffffff22;}td{","}th.sortable{cursor:pointer;}"],hasBorder&&(0,styled_components_browser_esm.iv)(["border-bottom:0.0625rem "," #ffffff22;"],borderType))}));try{StyledTable.displayName="StyledTable",StyledTable.__docgenInfo={description:"",displayName:"StyledTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableElement | null) => void) | RefObject<HTMLTableElement> | null"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<any>[]"}},rowRender:{defaultValue:null,description:"",name:"rowRender",required:!1,type:{name:"((row: any, rowIndex: number) => ReactNode)"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:"((row: any, rowIndex: number) => HTMLAttributes<HTMLTableRowElement>)"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"((row: any) => string)"}},stickyHeader:{defaultValue:null,description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}},borderType:{defaultValue:null,description:"",name:"borderType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dashed"'},{value:'"solid"'}]}},rowNoise:{defaultValue:null,description:"",name:"rowNoise",required:!1,type:{name:"boolean"}},infiniteScroll:{defaultValue:null,description:"",name:"infiniteScroll",required:!1,type:{name:"boolean"}},onLoadMore:{defaultValue:null,description:"",name:"onLoadMore",required:!1,type:{name:"(() => Promise<void>)"}},loadingPlaceholder:{defaultValue:null,description:"",name:"loadingPlaceholder",required:!1,type:{name:"ReactNode"}},emptyPlaceholder:{defaultValue:null,description:"",name:"emptyPlaceholder",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Table/styles.tsx#StyledTable"]={docgenInfo:StyledTable.__docgenInfo,name:"StyledTable",path:"src/components/layout/Table/styles.tsx#StyledTable"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/common/Icon/index.ts"),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};var cmp=__webpack_require__("./src/components/common/Spinner/cmp.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TableRow({row,columns,rowIndex,rowRender,rowProps,rowNoise=!1}){const props=(0,react.useMemo)((()=>({css:{},...rowProps?.(row,rowIndex)||{}})),[rowIndex,row,rowProps]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:rowRender?rowRender(row,rowIndex):(0,jsx_runtime.jsx)(_StyledTr,{...props,$_css:props.css,children:columns.map(((col,colIndex)=>(0,jsx_runtime.jsx)(TableCell,{row,col,rowIndex,colIndex,rowNoise},colIndex)))})})}function TableCell({row,col,rowIndex,colIndex,rowNoise}){const alignStyle=(0,react.useMemo)((()=>"center"===col.align?{textAlign:"center"}:"right"===col.align?{textAlign:"right"}:{textAlign:"left"}),[col.align]),stickyStyle=(0,react.useMemo)((()=>"start"===col.sticky?{position:"sticky",left:"0px",zIndex:"10"}:"end"===col.sticky?{position:"sticky",right:"0px",zIndex:"10"}:""),[col.sticky]),props=(0,react.useMemo)((()=>{const cellProps=col.cellProps?.(row,col,rowIndex,colIndex)||{},className=(cellProps?.className?`${cellProps?.className} `:"")+(rowNoise&&rowIndex%2!=0?"fx-noise-light":""),css={...alignStyle,...stickyStyle,...cellProps?.css};return{...cellProps,className,css}}),[col,row,rowIndex,colIndex,rowNoise,alignStyle,stickyStyle]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:col.cellRender?col.cellRender(row,col,rowIndex,colIndex):(0,jsx_runtime.jsx)(_StyledTd,{...props,$_css2:[props.css],children:col.render(row,col,rowIndex,colIndex)},colIndex)})}function TableHeaderCell({col,colIndex,sortedColumn,setSortedColumn}){const alignStyle=(0,react.useMemo)((()=>"center"===col.align?{textAlign:"center"}:"right"===col.align?{textAlign:"right"}:{textAlign:"left"}),[col.align]),props=(0,react.useMemo)((()=>{const hcellProps=col.hcellProps?.(col,colIndex)||{},css={...alignStyle,...hcellProps?.css},className=(hcellProps?.className?`${hcellProps?.className} `:"")+(col.sortable?"sortable":"")+" tp-table",style={...col.width?{width:col.width}:{},...hcellProps?.style};return{...hcellProps,css,style,className}}),[alignStyle,col,colIndex]),isSorted=(0,react.useMemo)((()=>sortedColumn.column===col.label),[col.label,sortedColumn.column]),stickyPosition="start"===col.sticky?{position:"sticky",left:"0px",zIndex:"20"}:"end"===col.sticky?{position:"sticky",right:"0px",zIndex:"20"}:"";return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:col.hcellRender?col.hcellRender(col,colIndex,sortedColumn,setSortedColumn):(0,jsx_runtime.jsxs)(_StyledTh,{...props,style:props.style,onClick:()=>{col.sortable&&setSortedColumn({column:col.label,asc:!sortedColumn.asc})},$_css3:[props.css,stickyPosition],children:[col.label,col.sortable&&(0,jsx_runtime.jsx)("div",{style:{opacity:isSorted?1:.45,display:"inline-block",paddingLeft:"0.625rem"},children:(0,jsx_runtime.jsx)(Icon.Z,{name:isSorted?sortedColumn.asc?"sort-up":"sort-down":"sort"})})]},colIndex)})}function Table(props){const{columns,data,infiniteScroll,emptyPlaceholder,loadingPlaceholder,rowKey,onLoadMore}=props,[sortedColumn,setSortedColumn]=(0,react.useState)({column:"",asc:!0}),randomId=(0,react.useId)(),keyedData=(0,react.useMemo)((()=>data.map(((row,i)=>({...row,key:rowKey?rowKey(row):`${randomId}${i}`})))),[data,randomId,rowKey]),targetSortColumn=(0,react.useMemo)((()=>columns.find((({label})=>label===sortedColumn.column))),[columns,sortedColumn.column]),sortedData=(0,react.useMemo)((()=>{if(!sortedColumn.column)return keyedData;const getValue=targetSortColumn?.sortBy||(row=>String(targetSortColumn?.render(row,targetSortColumn,-1,-1))),sortFn=targetSortColumn?.sort||((rowA,rowB)=>{const A=getValue(rowA),B=getValue(rowB);return A<B?sortedColumn.asc?-1:1:A>B?sortedColumn.asc?1:-1:0});return keyedData.sort(sortFn)}),[keyedData,sortedColumn.column,sortedColumn.asc,targetSortColumn]),{containerRef,isLoading}=function useInfiniteScroll(options){const{offset="0px",shouldStop=!1,onLoadMore}=null!=options?options:{},[isLoading,setIsLoading]=(0,react.useState)(!1),observerRef=(0,react.useRef)(),targetRef=(0,react.useRef)(document.createElement("div"));return(0,react.useEffect)((()=>{const target=targetRef.current;target.toggleAttribute("data-infinite-scroll-detector",!0),target.style.position="absolute",target.style.bottom=offset,target.offsetTop<0&&(target.style.bottom="0px")}),[offset,isLoading]),(0,react.useEffect)((()=>{const observe=observerRef.current;return observe&&observe.disconnect(),observerRef.current=new IntersectionObserver((function handler([{isIntersecting}]){return __awaiter(this,void 0,void 0,(function*(){!isIntersecting||isLoading||shouldStop||"function"!=typeof onLoadMore||(setIsLoading(!0),yield onLoadMore(),setIsLoading(!1))}))}),{threshold:0}),observerRef.current.observe(targetRef.current),()=>null==observe?void 0:observe.disconnect()}),[isLoading,onLoadMore,shouldStop]),{isLoading,containerRef:container=>{container&&(container.append(targetRef.current),container.style.position="relative")}}}({onLoadMore,shouldStop:!infiniteScroll});return(0,jsx_runtime.jsxs)(StyledTable,{...props,ref:containerRef,children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsx)(_StyledTr2,{$_css4:[props.stickyHeader&&{position:"sticky",top:"0px",zIndex:"10","--tw-bg-opacity":"0.5",backgroundClip:"border-box","--tw-backdrop-blur":"blur(4px)",backdropFilter:"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}],children:columns.map(((col,colIndex)=>(0,jsx_runtime.jsx)(TableHeaderCell,{col,colIndex,sortedColumn,setSortedColumn},colIndex)))})}),(0,jsx_runtime.jsxs)("tbody",{children:[sortedData.map(((row,rowIndex)=>(0,jsx_runtime.jsx)(TableRow,{row,rowIndex,columns,rowRender:props.rowRender,rowProps:props.rowProps,rowNoise:props.rowNoise},row.key))),emptyPlaceholder&&(0,jsx_runtime.jsx)("tr",{children:(0,jsx_runtime.jsx)("td",{colSpan:columns.length,children:emptyPlaceholder})}),isLoading&&(0,jsx_runtime.jsx)("tr",{children:(0,jsx_runtime.jsx)("td",{colSpan:columns.length,children:loadingPlaceholder||(0,jsx_runtime.jsx)(_StyledSpinner,{color:"text"})})})]})]})}TableRow.displayName="TableRow",TableCell.displayName="TableCell",TableHeaderCell.displayName="TableHeaderCell",Table.displayName="Table",Table.displayName="Table";const Table_cmp=(0,react.memo)(Table);var _StyledTr=(0,styled_components_browser_esm.ZP)("tr").withConfig({displayName:"cmp___StyledTr",componentId:"sc-xdi2fd-0"})(["",""],(p=>p.$_css)),_StyledTd=(0,styled_components_browser_esm.ZP)("td").withConfig({displayName:"cmp___StyledTd",componentId:"sc-xdi2fd-1"})(["",""],(p=>p.$_css2)),_StyledTh=(0,styled_components_browser_esm.ZP)("th").withConfig({displayName:"cmp___StyledTh",componentId:"sc-xdi2fd-2"})(["",""],(p=>p.$_css3)),_StyledTr2=(0,styled_components_browser_esm.ZP)("tr").withConfig({displayName:"cmp___StyledTr2",componentId:"sc-xdi2fd-3"})(["",""],(p=>p.$_css4)),_StyledSpinner=(0,styled_components_browser_esm.ZP)(cmp.Z).withConfig({displayName:"cmp___StyledSpinner",componentId:"sc-xdi2fd-4"})({marginLeft:"auto",marginRight:"auto"});try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{rowRender:{defaultValue:null,description:"",name:"rowRender",required:!1,type:{name:"((row: R, rowIndex: number) => ReactNode)"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:"((row: R, rowIndex: number) => HTMLAttributes<HTMLTableRowElement>)"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"((row: R) => string)"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Record<string, unknown>"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<R>[]"}},rowIndex:{defaultValue:null,description:"",name:"rowIndex",required:!0,type:{name:"number"}},rowNoise:{defaultValue:{value:"false"},description:"",name:"rowNoise",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Table/cmp.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/layout/Table/cmp.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}const data=[{name:"John Doe",age:30,job:"Software Engineer",pets:{dogs:1,cats:2,turtles:0},gender:"male"},{name:"Jane Doe",age:25,job:"Software Engineer",pets:{dogs:0,cats:1,turtles:1},gender:"female"},{name:"Emily Smith",age:28,job:"Product Manager",pets:{dogs:0,cats:0,turtles:5},gender:"female"},{name:"Michael Johnson",age:35,job:"Data Scientist",pets:{dogs:2,cats:3,turtles:1},gender:"male"},{name:"Sarah Brown",age:22,job:"UX Designer",pets:{dogs:1,cats:1,turtles:0},gender:"female"},{name:"David Wilson",age:40,job:"Project Manager",pets:{dogs:3,cats:2,turtles:2},gender:"male"},{name:"Olivia Davis",age:27,job:"Marketing Specialist",pets:{dogs:1,cats:0,turtles:3},gender:"female"},{name:"Chris Miller",age:32,job:"Frontend Developer",pets:{dogs:2,cats:1,turtles:1},gender:"male"},{name:"Ella Turner",age:29,job:"Graphic Designer",pets:{dogs:0,cats:2,turtles:0},gender:"female"},{name:"Alex Harris",age:34,job:"Sales Manager",pets:{dogs:1,cats:0,turtles:4},gender:"male"}],cmp_stories={title:"Components/UI/layout/Table",component:Table_cmp,argTypes:{borderType:{control:{type:"select",options:["none","dashed","solid"]}}}},defaultArgs={borderType:"dashed",rowNoise:!0,stickyHeader:!1,...{data,columns:[{label:"Name",sortable:!0,width:"50%",sortBy:row=>row.name,render:row=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:row.name}),"undisclosed"!==row.gender&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",(0,jsx_runtime.jsx)(Icon.Z,{name:"female"===row.gender?"venus":"mars",color:"red"})]})]})},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Job",render:row=>row.job,sortable:!1,align:"center"},{label:"Number of pets",render:row=>Object.values(row.pets).reduce(((acc,curr)=>acc+curr),0),sortable:!0,align:"right"}]},rowProps:(row,i)=>({onClick:()=>{alert(`row click ${i}`)}})},stickyTableArgs={stickyHeader:!0,borderType:"dashed",rowNoise:!0,...{data,columns:[{label:"Name",sticky:"start",sortable:!0,width:"50%",sortBy:row=>row.name,render:row=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:row.name}),"undisclosed"!==row.gender&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",(0,jsx_runtime.jsx)(Icon.Z,{name:"female"===row.gender?"venus":"mars",color:"red"})]})]})},{label:"Age",render:row=>row.age,sortable:!0,align:"right"},{label:"Job",render:row=>row.job,sortable:!1,align:"center"},{label:"Number of pets",render:row=>Object.values(row.pets).reduce(((acc,curr)=>acc+curr),0),sortable:!0,align:"right",sticky:"end"}]}},defaultParams={controls:{exclude:["color","size"]}},Template=args=>(0,jsx_runtime.jsx)(Table_cmp,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={...defaultParams};const EmptyPlaceholder=Template.bind({});EmptyPlaceholder.args={...defaultArgs,emptyPlaceholder:(0,jsx_runtime.jsx)("div",{children:"No data"}),data:[]},EmptyPlaceholder.parameters={...defaultParams};const StickyTable=Template.bind({});StickyTable.args={...stickyTableArgs};const Template2=args=>{const[data,setData]=(0,react.useState)(args.data),infiniteScroll=(0,react.useMemo)((()=>data.length<=100),[data]),onLoadMore=(0,react.useCallback)((async()=>{await new Promise((resolve=>{setTimeout(resolve,1e3)})),setData([...data,...args.data])}),[data,args.data]);return(0,jsx_runtime.jsx)(Table_cmp,{...args,data,infiniteScroll,onLoadMore})};Template2.displayName="Template2";const InfiniteScroll=Template2.bind({});InfiniteScroll.args={...defaultArgs},InfiniteScroll.parameters={...defaultParams},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Table {...args} />",...Default.parameters?.docs?.source}}},EmptyPlaceholder.parameters={...EmptyPlaceholder.parameters,docs:{...EmptyPlaceholder.parameters?.docs,source:{originalSource:"args => <Table {...args} />",...EmptyPlaceholder.parameters?.docs?.source}}},StickyTable.parameters={...StickyTable.parameters,docs:{...StickyTable.parameters?.docs,source:{originalSource:"args => <Table {...args} />",...StickyTable.parameters?.docs?.source}}},InfiniteScroll.parameters={...InfiniteScroll.parameters,docs:{...InfiniteScroll.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const infiniteScroll = useMemo(() => data.length <= 100, [data]);\n  const onLoadMore = useCallback(async () => {\n    await new Promise(resolve => {\n      setTimeout(resolve, 1000 * 1);\n    });\n    setData([...data, ...args.data]);\n  }, [data, args.data]);\n  return <Table {...{\n    ...args,\n    data,\n    infiniteScroll,\n    onLoadMore\n  }} />;\n}",...InfiniteScroll.parameters?.docs?.source}}};const __namedExportsOrder=["Default","EmptyPlaceholder","StickyTable","InfiniteScroll"]},"./src/components/common/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_cmp__WEBPACK_IMPORTED_MODULE_0__.Z});var _cmp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Icon/cmp.tsx")},"./src/components/common/Spinner/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),utils_color=__webpack_require__("./src/utils/color.ts");const spinnerData=color=>{const[r,g,b,a]=(0,utils_color.nI)(color);return{v:"5.9.0",fr:53.5297546386719,ip:0,op:160.99926203673,w:800,h:800,nm:"base 7",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:3,nm:"direction",sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:1,k:[{i:{x:[.286],y:[.739]},o:{x:[.729],y:[.171]},t:89,s:[-45]},{t:123.999431630774,s:[135]}],ix:10},p:{a:0,k:[400,400,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"O left",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[0]},{t:78.9996378937993,s:[180]}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.252],y:[.941]},o:{x:[.966],y:[.331]},t:0,s:[0]},{t:20,s:[139.083],h:1},{i:{x:[.193],y:[.743]},o:{x:[.567],y:[.025]},t:30,s:[139.083]},{t:48.9997754024831,s:[0]}],ix:3},y:{a:0,k:.03,ix:4}},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-22.61,-22.61],[-22.489,22.489],[22.61,22.61],[22.452,-22.452]],o:[[22.61,22.61],[22.489,-22.489],[-22.61,-22.61],[-22.452,22.452]],v:[[-43.552,40.683],[38.07,40.902],[37.851,-40.72],[-43.771,-40.939]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"mm",mm:4,nm:"Merge Paths 1",mn:"ADBE Vector Filter - Merge",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[60.559,150.541],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"O right",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[0]},{t:78.9996378937993,s:[180]}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.263],y:[.985]},o:{x:[.981],y:[.294]},t:0,s:[0]},{t:20,s:[-139.083],h:1},{i:{x:[.191],y:[.61]},o:{x:[.508],y:[.006]},t:30,s:[-139.083]},{t:48.9997754024831,s:[0]}],ix:3},y:{a:0,k:.03,ix:4}},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-22.609,-22.609],[-22.489,22.488],[22.611,22.611],[22.489,-22.489]],o:[[22.611,22.611],[22.489,-22.489],[-22.609,-22.61],[-22.489,22.489]],v:[[-37.859,40.701],[43.764,40.921],[43.543,-40.701],[-38.078,-40.921]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"mm",mm:4,nm:"Merge Paths 1",mn:"ADBE Vector Filter - Merge",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[333.739,151.272],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"background",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[0,0,0],ix:2,l:2},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-62.88,-.205],[-22.477,54.649]],o:[[22.808,54.808],[62.915,.171],[0,0]],v:[[-139.438,-46.801],[.251,46.8],[139.438,-46.053]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[197.264,255.029],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[62.88,.206],[22.512,-54.611],[0,0]],o:[[-22.807,-54.808],[-62.916,-.169],[0,0],[0,0]],v:[[139.437,46.802],[-.251,-46.802],[-139.473,46.015],[139.473,46.765]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[196.992,46.802],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:4,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0}],markers:[]}};try{spinnerData.displayName="spinnerData",spinnerData.__docgenInfo={description:"",displayName:"spinnerData",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/data.tsx#spinnerData"]={docgenInfo:spinnerData.__docgenInfo,name:"spinnerData",path:"src/components/common/Spinner/data.tsx#spinnerData"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_umd=__webpack_require__("./node_modules/lottie-react/build/index.umd.js"),index_umd_default=__webpack_require__.n(index_umd);const StyledLottie=(0,styled_components_browser_esm.ZP)(index_umd_default()).withConfig({displayName:"styles__StyledLottie",componentId:"sc-1eb6lq8-0"})(["",""],(({$size})=>{const SpinnerSize=$size?Number.isNaN(Number($size))?$size:`${$size}px`:"1em";return(0,styled_components_browser_esm.iv)(["height:",";width:",";"],SpinnerSize,SpinnerSize)}));try{StyledLottie.displayName="StyledLottie",StyledLottie.__docgenInfo={description:"",displayName:"StyledLottie",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string | number"}},loop:{defaultValue:null,description:"",name:"loop",required:!1,type:{name:"number | boolean"}},animationData:{defaultValue:null,description:"",name:"animationData",required:!0,type:{name:"unknown"}},renderer:{defaultValue:null,description:"",name:"renderer",required:!1,type:{name:"enum",value:[{value:'"svg"'}]}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}},initialSegment:{defaultValue:null,description:"",name:"initialSegment",required:!1,type:{name:"AnimationSegment"}},assetsPath:{defaultValue:null,description:"",name:"assetsPath",required:!1,type:{name:"string"}},rendererSettings:{defaultValue:null,description:"",name:"rendererSettings",required:!1,type:{name:"SVGRendererConfig"}},audioFactory:{defaultValue:null,description:"",name:"audioFactory",required:!1,type:{name:"((assetPath: string) => { play(): void; seek(): void; playing(): void; rate(): void; setVolume(): void; })"}},lottieRef:{defaultValue:null,description:"",name:"lottieRef",required:!1,type:{name:"LottieRef"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onLoopComplete:{defaultValue:null,description:"",name:"onLoopComplete",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onEnterFrame:{defaultValue:null,description:"",name:"onEnterFrame",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onSegmentStart:{defaultValue:null,description:"",name:"onSegmentStart",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onConfigReady:{defaultValue:null,description:"",name:"onConfigReady",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onDataReady:{defaultValue:null,description:"",name:"onDataReady",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onDataFailed:{defaultValue:null,description:"",name:"onDataFailed",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onLoadedImages:{defaultValue:null,description:"",name:"onLoadedImages",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onDOMLoaded:{defaultValue:null,description:"",name:"onDOMLoaded",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},onDestroy:{defaultValue:null,description:"",name:"onDestroy",required:!1,type:{name:"AnimationEventHandler<Element> | null"}},interactivity:{defaultValue:null,description:"",name:"interactivity",required:!1,type:{name:'Omit<InteractivityProps, "lottieObj">'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/styles.tsx#StyledLottie"]={docgenInfo:StyledLottie.__docgenInfo,name:"StyledLottie",path:"src/components/common/Spinner/styles.tsx#StyledLottie"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spinner=({size:$size="6rem",color="white",...rest})=>{const logoColor=(0,styled_components_browser_esm.Fg)().color[color]||(0,utils_color.tB)(color)||color,animationData=(0,react.useMemo)((()=>spinnerData(logoColor)),[logoColor]);return(0,jsx_runtime.jsx)(StyledLottie,{animationData,$size,...rest})};Spinner.displayName="Spinner",Spinner.displayName="Spinner";const cmp=(0,react.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"white"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/cmp.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/Spinner/cmp.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DL:()=>normalizeBackgroundImageColor,nI:()=>colorHexToRGBALottie,tB:()=>colorNameToHex});const defaultBrowserColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function colorNameToHex(colorName){return defaultBrowserColors[colorName]}function colorHexToRGBALottie(hex){const[r,g,b,a]=function colorHexToRGBA(hex){return hex=hex.replace("#",""),[parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16),hex.length>6?parseInt(hex.slice(4,6),16):255]}(hex);return[r/255,g/255,b/255,a/255]}function normalizeBackgroundImageColor(color,transparency="1A"){if("transparent"===color)return{backgroundColor:color,backgroundColorDisabled:color,backgroundImage:"none",backgroundImageDisabled:"none",background:color,backgroundDisabled:color};let gradient=color;"string"==typeof color&&(gradient={colors:[color=colorNameToHex(color)||color,color],deg:90,stops:[0,100],fn:`linear-gradient(90deg, ${color} 0%, ${color} 100%)`});const dc1=`${gradient.colors[0]}${transparency}`,dc2=`${gradient.colors[1]}${transparency}`,disabledGradient={...gradient,colors:[dc1,dc2],fn:`linear-gradient(90deg, ${dc1} 0%, ${dc2} 100%)`},backgroundColor=gradient.colors[0],backgroundColorDisabled=disabledGradient.colors[0],backgroundImage=gradient.fn,backgroundImageDisabled=disabledGradient.fn;return{backgroundColor,backgroundColorDisabled,backgroundImage,backgroundImageDisabled,background:"string"===color?backgroundColor:backgroundImage,backgroundDisabled:"string"===color?backgroundColorDisabled:backgroundImageDisabled}}}}]);