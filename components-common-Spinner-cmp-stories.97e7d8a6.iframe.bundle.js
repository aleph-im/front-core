"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[5084],{"./src/components/common/Spinner/cmp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSizeAndColor:()=>CustomSizeAndColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _cmp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Spinner/cmp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/common/Spinner",component:_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{size:{control:"text"}}},defaultArgs={size:void 0},defaultParams={},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_cmp__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={...defaultArgs},Default.parameters={...defaultParams};const CustomSizeAndColor=Template.bind({});CustomSizeAndColor.args={...defaultArgs,size:"10rem",color:"main0"},CustomSizeAndColor.parameters={...defaultParams},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...Default.parameters?.docs?.source}}},CustomSizeAndColor.parameters={...CustomSizeAndColor.parameters,docs:{...CustomSizeAndColor.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...CustomSizeAndColor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomSizeAndColor"]},"./src/components/common/Spinner/cmp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>cmp});var react=__webpack_require__("./node_modules/react/index.js"),utils_color=__webpack_require__("./src/utils/color.ts");const spinnerData=color=>{const[r,g,b,a]=(0,utils_color.nI)(color);return{v:"5.9.0",fr:53.5297546386719,ip:0,op:160.99926203673,w:800,h:800,nm:"base 7",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:3,nm:"direction",sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:1,k:[{i:{x:[.286],y:[.739]},o:{x:[.729],y:[.171]},t:89,s:[-45]},{t:123.999431630774,s:[135]}],ix:10},p:{a:0,k:[400,400,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"O left",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[0]},{t:78.9996378937993,s:[180]}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.252],y:[.941]},o:{x:[.966],y:[.331]},t:0,s:[0]},{t:20,s:[139.083],h:1},{i:{x:[.193],y:[.743]},o:{x:[.567],y:[.025]},t:30,s:[139.083]},{t:48.9997754024831,s:[0]}],ix:3},y:{a:0,k:.03,ix:4}},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-22.61,-22.61],[-22.489,22.489],[22.61,22.61],[22.452,-22.452]],o:[[22.61,22.61],[22.489,-22.489],[-22.61,-22.61],[-22.452,22.452]],v:[[-43.552,40.683],[38.07,40.902],[37.851,-40.72],[-43.771,-40.939]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"mm",mm:4,nm:"Merge Paths 1",mn:"ADBE Vector Filter - Merge",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[60.559,150.541],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"O right",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[0]},{t:78.9996378937993,s:[180]}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.263],y:[.985]},o:{x:[.981],y:[.294]},t:0,s:[0]},{t:20,s:[-139.083],h:1},{i:{x:[.191],y:[.61]},o:{x:[.508],y:[.006]},t:30,s:[-139.083]},{t:48.9997754024831,s:[0]}],ix:3},y:{a:0,k:.03,ix:4}},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-22.609,-22.609],[-22.489,22.488],[22.611,22.611],[22.489,-22.489]],o:[[22.611,22.611],[22.489,-22.489],[-22.609,-22.61],[-22.489,22.489]],v:[[-37.859,40.701],[43.764,40.921],[43.543,-40.701],[-38.078,-40.921]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"mm",mm:4,nm:"Merge Paths 1",mn:"ADBE Vector Filter - Merge",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[333.739,151.272],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"background",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[0,0,0],ix:2,l:2},a:{a:0,k:[197.5,151,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-62.88,-.205],[-22.477,54.649]],o:[[22.808,54.808],[62.915,.171],[0,0]],v:[[-139.438,-46.801],[.251,46.8],[139.438,-46.053]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[197.264,255.029],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[62.88,.206],[22.512,-54.611],[0,0]],o:[[-22.807,-54.808],[-62.916,-.169],[0,0],[0,0]],v:[[139.437,46.802],[-.251,-46.802],[-139.473,46.015],[139.473,46.765]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[r,g,b,a],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[196.992,46.802],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:4,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:160.99926203673,st:0,bm:0}],markers:[]}};try{spinnerData.displayName="spinnerData",spinnerData.__docgenInfo={description:"",displayName:"spinnerData",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/data.tsx#spinnerData"]={docgenInfo:spinnerData.__docgenInfo,name:"spinnerData",path:"src/components/common/Spinner/data.tsx#spinnerData"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_umd=__webpack_require__("./node_modules/lottie-react/build/index.umd.js"),index_umd_default=__webpack_require__.n(index_umd);const Lottie=index_umd_default()?.default||index_umd_default(),StyledLottie=(0,styled_components_browser_esm.ZP)(Lottie?.default||Lottie).withConfig({displayName:"styles__StyledLottie",componentId:"sc-1eb6lq8-0"})(["",""],(({$size})=>{const SpinnerSize=$size?Number.isNaN(Number($size))?$size:`${$size}px`:"1em";return(0,styled_components_browser_esm.iv)(["height:",";width:",";"],SpinnerSize,SpinnerSize)}));try{StyledLottie.displayName="StyledLottie",StyledLottie.__docgenInfo={description:"",displayName:"StyledLottie",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/styles.tsx#StyledLottie"]={docgenInfo:StyledLottie.__docgenInfo,name:"StyledLottie",path:"src/components/common/Spinner/styles.tsx#StyledLottie"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spinner=({size:$size="6rem",color="white",...rest})=>{const logoColor=(0,styled_components_browser_esm.Fg)().color[color]||(0,utils_color.tB)(color)||color,animationData=(0,react.useMemo)((()=>spinnerData(logoColor)),[logoColor]);return(0,jsx_runtime.jsx)(StyledLottie,{animationData,$size,...rest})};Spinner.displayName="Spinner",Spinner.displayName="Spinner";const cmp=(0,react.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"white"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Spinner/cmp.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/Spinner/cmp.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DL:()=>normalizeBackgroundImageColor,nI:()=>colorHexToRGBALottie,tB:()=>colorNameToHex});const defaultBrowserColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function colorNameToHex(colorName){return defaultBrowserColors[colorName]}function colorHexToRGBALottie(hex){const[r,g,b,a]=function colorHexToRGBA(hex){return hex=hex.replace("#",""),[parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16),hex.length>6?parseInt(hex.slice(4,6),16):255]}(hex);return[r/255,g/255,b/255,a/255]}function normalizeBackgroundImageColor(color,transparency="1A"){if("transparent"===color)return{backgroundColor:color,backgroundColorDisabled:color,backgroundImage:"none",backgroundImageDisabled:"none",background:color,backgroundDisabled:color};let gradient=color;"string"==typeof color&&(gradient={colors:[color=colorNameToHex(color)||color,color],deg:90,stops:[0,100],fn:`linear-gradient(90deg, ${color} 0%, ${color} 100%)`});const dc1=`${gradient.colors[0]}${transparency}`,dc2=`${gradient.colors[1]}${transparency}`,disabledGradient={...gradient,colors:[dc1,dc2],fn:`linear-gradient(90deg, ${dc1} 0%, ${dc2} 100%)`},backgroundColor=gradient.colors[0],backgroundColorDisabled=disabledGradient.colors[0],backgroundImage=gradient.fn,backgroundImageDisabled=disabledGradient.fn;return{backgroundColor,backgroundColorDisabled,backgroundImage,backgroundImageDisabled,background:"string"===color?backgroundColor:backgroundImage,backgroundDisabled:"string"===color?backgroundColorDisabled:backgroundImageDisabled}}}}]);