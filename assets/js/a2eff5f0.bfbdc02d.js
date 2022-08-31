"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[25896],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),u=function(e){return function(t){var n=s(t.components);return a.createElement(e,r({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(39960),o=n(44256),r=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return r.createElement(c,null,r.createElement(d,null),r.createElement(l,null),r.createElement(u,null))},p=function(){return r.createElement(c,null,r.createElement(l,null),r.createElement(u,null))};const m=function(){return(0,o.fbContent)({internal:r.createElement(s,null),external:r.createElement(p,null)})}},87344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a,o=n(83117),r=n(80102),i=(n(67294),n(3905)),c=n(68629),l=(n(44256),["components"]),d={id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Relay guide to local data updates",keywords:["client-only","commitLocalUpdate","commitPayload"]},u=void 0,s={unversionedId:"guided-tour/updating-data/local-data-updates",id:"version-v13.0.0/guided-tour/updating-data/local-data-updates",title:"Local Data Updates",description:"Relay guide to local data updates",source:"@site/versioned_docs/version-v13.0.0/guided-tour/updating-data/local-data-updates.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/local-data-updates/",permalink:"/docs/v13.0.0/guided-tour/updating-data/local-data-updates/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/updating-data/local-data-updates.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1661972976,formattedLastUpdatedAt:"8/31/2022",frontMatter:{id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Relay guide to local data updates",keywords:["client-only","commitLocalUpdate","commitPayload"]},sidebar:"version-v13.0.0/docs",previous:{title:"GraphQL Subscriptions",permalink:"/docs/v13.0.0/guided-tour/updating-data/graphql-subscriptions/"},next:{title:"Client-Only Data",permalink:"/docs/v13.0.0/guided-tour/updating-data/client-only-data/"}},p={},m=[{value:"commitLocalUpdate",id:"commitlocalupdate",level:2},{value:"commitPayload",id:"commitpayload",level:2}],f=(a="FbLocalDataUpdatesFlow",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),h={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"There are a couple of APIs that Relay provides in order to make purely local updates to the Relay store (i.e. updates not tied to a server operation)."),(0,i.mdx)("p",null,"Note that local data updates can be made both on ",(0,i.mdx)("a",{parentName:"p",href:"../client-only-data/"},"client-only data"),", or on regular data that was fetched from the server via an operation."),(0,i.mdx)("h2",{id:"commitlocalupdate"},"commitLocalUpdate"),(0,i.mdx)("p",null,"To make updates using an ",(0,i.mdx)("a",{parentName:"p",href:"../graphql-mutations/#updater-functions"},(0,i.mdx)("inlineCode",{parentName:"a"},"updater"))," function, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," API:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\n\nconst {commitLocalUpdate, graphql} = require('react-relay');\n\nfunction commitCommentCreateLocally(\n  environment: Environment,\n  feedbackID: string,\n) {\n  return commitLocalUpdate(environment, store => {\n    const feedbackRecord = store.get(feedbackID);\n    const connectionRecord = ConnectionHandler.getConnection(\n      userRecord,\n      'CommentsComponent_comments_connection',\n    );\n\n    // Create a new local Comment from scratch\n    const id = `client:new_comment:${randomID()}`;\n    const newCommentRecord = store.create(id, 'Comment');\n\n    // ... update new comment with content\n\n    // Create new edge from scratch\n    const newEdge = ConnectionHandler.createEdge(\n      store,\n      connectionRecord,\n      newCommentRecord,\n      'CommentEdge' /* GraphQl Type for edge */,\n    );\n\n    // Add edge to the end of the connection\n    ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);\n  });\n}\n\nmodule.exports = {commit: commitCommentCreateLocally};\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," update simply takes an environment and an updater function.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," takes a ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,i.mdx)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),"."))),(0,i.mdx)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store when. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our ",(0,i.mdx)("a",{parentName:"li",href:"../../list-data/updating-connections/"},"Updating Connections")," section."),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)("h2",{id:"commitpayload"},"commitPayload"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"commitPayload")," takes an ",(0,i.mdx)("inlineCode",{parentName:"p"},"OperationDescriptor")," and the payload for the query, and writes it to the Relay Store. The payload will be resolved like a normal server response for a query, and will also resolve Data Driven Dependencies that are passed as ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSResource"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"requireDefer"),", etc."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FooQueryRawResponse} from 'FooQuery.graphql'\n\nconst {createOperationDescriptor} = require('relay-runtime');\n\nconst operationDescriptor = createOperationDescriptor(FooQuery, {\n  id: 'an-id',\n  otherVariable: 'value',\n});\n\nconst payload: FooQueryRawResponse = {...};\n\nenvironment.commitPayload(operation, payload);\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An ",(0,i.mdx)("inlineCode",{parentName:"li"},"OperationDescriptor")," can be created by ",(0,i.mdx)("inlineCode",{parentName:"li"},"createOperationDescriptor"),"; it takes the query and the query variables."),(0,i.mdx)("li",{parentName:"ul"},"The payload can be typed using the Flow type generated by adding  ",(0,i.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," to the query."),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)(f,{mdxType:"FbLocalDataUpdatesFlow"}),(0,i.mdx)(c.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(t){r(t)}}function c(e){try{l(a.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const o=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(t){r(t)}}function c(e){try{l(a.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,o=0;const r={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in r||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?r[t].resolve(e.data.response):r[t].reject(new Error(e.data.error)),delete r[t]})));const t=o++,n=new Promise(((e,n)=>{r[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,c),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(t){r(t)}}function c(e){try{l(a.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const o=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=r(n(47596)),t.uidocs=r(n(17483)),t.feedback=r(n(24855)),t.inpageeditor=r(n(27312));const i=["internal","external"];function c(e){return d(e),u()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=d,t.isInternal=u,t.hasEphemeralDiffNumber=function(){return Boolean(s())},t.getEphemeralDiffNumber=s,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(t){r(t)}}function c(e){try{l(a.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const o=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:r}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:r}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(t){r(t)}}function c(e){try{l(a.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const o=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);