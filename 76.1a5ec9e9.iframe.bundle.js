"use strict";(self.webpackChunk_aleph_front_core=self.webpackChunk_aleph_front_core||[]).push([[76],{"./node_modules/@monaco-editor/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function state_local_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function state_local_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function state_local_objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?state_local_ownKeys(Object(source),!0).forEach((function(key){state_local_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):state_local_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function curry(fn){return function curried(){for(var _this=this,_len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return args.length>=fn.length?fn.apply(this,args):function(){for(var _len3=arguments.length,nextArgs=new Array(_len3),_key3=0;_key3<_len3;_key3++)nextArgs[_key3]=arguments[_key3];return curried.apply(_this,[].concat(args,nextArgs))}}}function isObject(value){return{}.toString.call(value).includes("Object")}function isFunction(value){return"function"==typeof value}__webpack_require__.d(__webpack_exports__,{ZP:()=>Ft});var errorHandler=curry((function throwError(errorMessages,type){throw new Error(errorMessages[type]||errorMessages.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),validators={changes:function validateChanges(initial,changes){return isObject(changes)||errorHandler("changeType"),Object.keys(changes).some((function(field){return!function state_local_hasOwnProperty(object,property){return Object.prototype.hasOwnProperty.call(object,property)}(initial,field)}))&&errorHandler("changeField"),changes},selector:function validateSelector(selector){isFunction(selector)||errorHandler("selectorType")},handler:function validateHandler(handler){isFunction(handler)||isObject(handler)||errorHandler("handlerType"),isObject(handler)&&Object.values(handler).some((function(_handler){return!isFunction(_handler)}))&&errorHandler("handlersType")},initial:function validateInitial(initial){initial||errorHandler("initialIsRequired"),isObject(initial)||errorHandler("initialType"),function isEmpty(obj){return!Object.keys(obj).length}(initial)&&errorHandler("initialContent")}};function extractChanges(state,causedChanges){return isFunction(causedChanges)?causedChanges(state.current):causedChanges}function updateState(state,changes){return state.current=state_local_objectSpread2(state_local_objectSpread2({},state.current),changes),changes}function didStateUpdate(state,handler,changes){return isFunction(handler)?handler(state.current):Object.keys(changes).forEach((function(field){var _handler$field;return null===(_handler$field=handler[field])||void 0===_handler$field?void 0:_handler$field.call(handler,state.current[field])})),changes}const state_local={create:function create(initial){var handler=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};validators.initial(initial),validators.handler(handler);var state={current:initial},didUpdate=curry(didStateUpdate)(state,handler),update=curry(updateState)(state),validate=curry(validators.changes)(initial),getChanges=curry(extractChanges)(state);return[function getState(){var selector=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(state){return state};return validators.selector(selector),selector(state.current)},function setState(causedChanges){!function compose(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(x){return fns.reduceRight((function(y,f){return f(y)}),x)}}(didUpdate,update,validate,getChanges)(causedChanges)}]}};const es_config={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}};const utils_isObject=function isObject_isObject(value){return{}.toString.call(value).includes("Object")};var validators_errorMessages={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},validators_errorHandler=function curry_curry(fn){return function curried(){for(var _this=this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.length>=fn.length?fn.apply(this,args):function(){for(var _len2=arguments.length,nextArgs=new Array(_len2),_key2=0;_key2<_len2;_key2++)nextArgs[_key2]=arguments[_key2];return curried.apply(_this,[].concat(args,nextArgs))}}}((function validators_throwError(errorMessages,type){throw new Error(errorMessages[type]||errorMessages.default)}))(validators_errorMessages),validators_validators={config:function validateConfig(config){return config||validators_errorHandler("configIsRequired"),utils_isObject(config)||validators_errorHandler("configType"),config.urls?(function informAboutDeprecation(){console.warn(validators_errorMessages.deprecation)}(),{paths:{vs:config.urls.monacoBase}}):config}};const es_validators=validators_validators;const utils_compose=function compose(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(x){return fns.reduceRight((function(y,f){return f(y)}),x)}};const deepMerge=function merge(target,source){return Object.keys(source).forEach((function(key){source[key]instanceof Object&&target[key]&&Object.assign(source[key],merge(target[key],source[key]))})),_objectSpread2(_objectSpread2({},target),source)};var CANCELATION_MESSAGE={type:"cancelation",msg:"operation is manually canceled"};const utils_makeCancelable=function makeCancelable(promise){var hasCanceled_=!1,wrappedPromise=new Promise((function(resolve,reject){promise.then((function(val){return hasCanceled_?reject(CANCELATION_MESSAGE):resolve(val)})),promise.catch(reject)}));return wrappedPromise.cancel=function(){return hasCanceled_=!0},wrappedPromise};var _state$create2=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(state_local.create({config:es_config,isInitialized:!1,resolve:null,reject:null,monaco:null}),2),getState=_state$create2[0],setState=_state$create2[1];function injectScripts(script){return document.body.appendChild(script)}function getMonacoLoaderScript(configureLoader){var state=getState((function(_ref2){return{config:_ref2.config,reject:_ref2.reject}})),loaderScript=function createScript(src){var script=document.createElement("script");return src&&(script.src=src),script}("".concat(state.config.paths.vs,"/loader.js"));return loaderScript.onload=function(){return configureLoader()},loaderScript.onerror=state.reject,loaderScript}function configureLoader(){var state=getState((function(_ref3){return{config:_ref3.config,resolve:_ref3.resolve,reject:_ref3.reject}})),require=window.require;require.config(state.config),require(["vs/editor/editor.main"],(function(monaco){storeMonacoInstance(monaco),state.resolve(monaco)}),(function(error){state.reject(error)}))}function storeMonacoInstance(monaco){getState().monaco||setState({monaco})}var wrapperPromise=new Promise((function(resolve,reject){return setState({resolve,reject})})),loader={config:function loader_config(globalConfig){var _validators$config=es_validators.config(globalConfig),monaco=_validators$config.monaco,config=_objectWithoutProperties(_validators$config,["monaco"]);setState((function(state){return{config:deepMerge(state.config,config),monaco}}))},init:function init(){var state=getState((function(_ref){return{monaco:_ref.monaco,isInitialized:_ref.isInitialized,resolve:_ref.resolve}}));if(!state.isInitialized){if(setState({isInitialized:!0}),state.monaco)return state.resolve(state.monaco),utils_makeCancelable(wrapperPromise);if(window.monaco&&window.monaco.editor)return storeMonacoInstance(window.monaco),state.resolve(window.monaco),utils_makeCancelable(wrapperPromise);utils_compose(injectScripts,getMonacoLoaderScript)(configureLoader)}return utils_makeCancelable(wrapperPromise)},__getMonacoInstance:function __getMonacoInstance(){return getState((function(_ref4){return _ref4.monaco}))}};const es_loader=loader;var react=__webpack_require__("./node_modules/react/index.js"),v={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Y={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}};var $=function Me({children:e}){return react.createElement("div",{style:Y.container},e)};var ee=function ye({width:e,height:r,isEditorReady:n,loading:t,_ref:d,className:a,wrapperProps:E}){return react.createElement("section",{style:{...v.wrapper,width:e,height:r},...E},!n&&react.createElement($,null,t),react.createElement("div",{ref:d,style:{...v.fullWidth,...!n&&v.hide},className:a}))},H=(0,react.memo)(ee);var D=function ge(e){(0,react.useEffect)(e,[])};var p=function he(e,r,n=!0){let t=(0,react.useRef)(!0);(0,react.useEffect)(t.current||!n?()=>{t.current=!1}:e,r)};function R(){}function b(e,r,n,t){return function De(e,r){return e.editor.getModel(te(e,r))}(e,t)||function be(e,r,n,t){return e.editor.createModel(r,n,t?te(e,t):void 0)}(e,r,n,t)}function te(e,r){return e.Uri.parse(r)}var ie=function Se({original:e,modified:r,language:n,originalLanguage:t,modifiedLanguage:d,originalModelPath:a,modifiedModelPath:E,keepCurrentOriginalModel:P=!1,keepCurrentModifiedModel:N=!1,theme:x="light",loading:I="Loading...",options:M={},height:V="100%",width:z="100%",className:F,wrapperProps:j={},beforeMount:A=R,onMount:q=R}){let[l,S]=(0,react.useState)(!1),[T,c]=(0,react.useState)(!0),m=(0,react.useRef)(null),s=(0,react.useRef)(null),O=(0,react.useRef)(null),u=(0,react.useRef)(q),o=(0,react.useRef)(A),h=(0,react.useRef)(!1);D((()=>{let i=es_loader.init();return i.then((y=>(s.current=y)&&c(!1))).catch((y=>"cancelation"!==y?.type&&console.error("Monaco initialization: error:",y))),()=>m.current?function w(){let i=m.current?.getModel();P||i?.original?.dispose(),N||i?.modified?.dispose(),m.current?.dispose()}():i.cancel()})),p((()=>{let i=m.current.getModifiedEditor();i.getOption(s.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop())}),[r],l),p((()=>{m.current?.getModel()?.original.setValue(e||"")}),[e],l),p((()=>{let{original:i,modified:y}=m.current.getModel();s.current.editor.setModelLanguage(i,t||n||"text"),s.current.editor.setModelLanguage(y,d||n||"text")}),[n,t,d],l),p((()=>{s.current?.editor.setTheme(x)}),[x],l),p((()=>{m.current?.updateOptions(M)}),[M],l);let L=(0,react.useCallback)((()=>{if(!s.current)return;o.current(s.current);let i=b(s.current,e||"",t||n||"text",a||""),y=b(s.current,r||"",d||n||"text",E||"");m.current?.setModel({original:i,modified:y})}),[n,r,d,e,t,a,E]),U=(0,react.useCallback)((()=>{!h.current&&O.current&&(m.current=s.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...M}),L(),s.current?.editor.setTheme(x),S(!0),h.current=!0)}),[M,x,L]);return(0,react.useEffect)((()=>{l&&u.current(m.current,s.current)}),[l]),(0,react.useEffect)((()=>{!T&&!l&&U()}),[T,l,U]),react.createElement(H,{width:z,height:V,isEditorReady:l,loading:I,_ref:O,className:F,wrapperProps:j})};(0,react.memo)(ie);var se=function He(e){let r=(0,react.useRef)();return(0,react.useEffect)((()=>{r.current=e}),[e]),r.current},_=new Map;var fe=function Ve({defaultValue:e,defaultLanguage:r,defaultPath:n,value:t,language:d,path:a,theme:E="light",line:P,loading:N="Loading...",options:x={},overrideServices:I={},saveViewState:M=!0,keepCurrentModel:V=!1,width:z="100%",height:F="100%",className:j,wrapperProps:A={},beforeMount:q=R,onMount:l=R,onChange:S,onValidate:T=R}){let[c,m]=(0,react.useState)(!1),[s,O]=(0,react.useState)(!0),u=(0,react.useRef)(null),o=(0,react.useRef)(null),h=(0,react.useRef)(null),L=(0,react.useRef)(l),U=(0,react.useRef)(q),w=(0,react.useRef)(),i=(0,react.useRef)(t),y=se(a),Q=(0,react.useRef)(!1),B=(0,react.useRef)(!1);D((()=>{let f=es_loader.init();return f.then((C=>(u.current=C)&&O(!1))).catch((C=>"cancelation"!==C?.type&&console.error("Monaco initialization: error:",C))),()=>o.current?function pe(){w.current?.dispose(),V?M&&_.set(a,o.current.saveViewState()):o.current.getModel()?.dispose(),o.current.dispose()}():f.cancel()})),p((()=>{let f=b(u.current,e||t||"",r||d||"",a||n||"");f!==o.current?.getModel()&&(M&&_.set(y,o.current?.saveViewState()),o.current?.setModel(f),M&&o.current?.restoreViewState(_.get(a)))}),[a],c),p((()=>{o.current?.updateOptions(x)}),[x],c),p((()=>{!o.current||void 0===t||(o.current.getOption(u.current.editor.EditorOption.readOnly)?o.current.setValue(t):t!==o.current.getValue()&&(B.current=!0,o.current.executeEdits("",[{range:o.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),o.current.pushUndoStop(),B.current=!1))}),[t],c),p((()=>{let f=o.current?.getModel();f&&d&&u.current?.editor.setModelLanguage(f,d)}),[d],c),p((()=>{void 0!==P&&o.current?.revealLine(P)}),[P],c),p((()=>{u.current?.editor.setTheme(E)}),[E],c);let X=(0,react.useCallback)((()=>{if(h.current&&u.current&&!Q.current){U.current(u.current);let f=a||n,C=b(u.current,t||e||"",r||d||"",f||"");o.current=u.current?.editor.create(h.current,{model:C,automaticLayout:!0,...x},I),M&&o.current.restoreViewState(_.get(f)),u.current.editor.setTheme(E),m(!0),Q.current=!0}}),[e,r,n,t,d,a,x,I,M,E]);return(0,react.useEffect)((()=>{c&&L.current(o.current,u.current)}),[c]),(0,react.useEffect)((()=>{!s&&!c&&X()}),[s,c,X]),i.current=t,(0,react.useEffect)((()=>{c&&S&&(w.current?.dispose(),w.current=o.current?.onDidChangeModelContent((f=>{B.current||S(o.current.getValue(),f)})))}),[c,S]),(0,react.useEffect)((()=>{if(c){let f=u.current.editor.onDidChangeMarkers((C=>{let G=o.current.getModel()?.uri;if(G&&C.find((J=>J.path===G.path))){let J=u.current.editor.getModelMarkers({resource:G});T?.(J)}}));return()=>{f?.dispose()}}return()=>{}}),[c,T]),react.createElement(H,{width:z,height:F,isEditorReady:c,loading:N,_ref:h,className:j,wrapperProps:A})},Ft=(0,react.memo)(fe)}}]);