(self.webpackChunk=self.webpackChunk||[]).push([[99165],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(44256),o=a(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var l=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},d=function(){return o.createElement(i,null,o.createElement(c,null),o.createElement(l,null))},s=function(){return o.createElement(i,null,o.createElement(l,null))};const p=function(){return(0,n.fbContent)({internal:o.createElement(d,null),external:o.createElement(s,null)})}},60819:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>f});var n,o=a(22122),r=a(19756),i=(a(67294),a(3905)),l=a(68629),c=(a(44256),["components"]),d={id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/"},s=void 0,p={unversionedId:"guided-tour/updating-data/local-data-updates",id:"version-v11.0.0/guided-tour/updating-data/local-data-updates",isDocsHomePage:!1,title:"Local Data Updates",description:"There are a couple of APIs that Relay provides in order to make purely local updates to the Relay store (i.e. updates not tied to a server operation).",source:"@site/versioned_docs/version-v11.0.0/guided-tour/updating-data/local-data-updates.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/local-data-updates/",permalink:"/docs/v11.0.0/guided-tour/updating-data/local-data-updates/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/updating-data/local-data-updates.md",version:"v11.0.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642523254,formattedLastUpdatedAt:"1/18/2022",frontMatter:{id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/"},sidebar:"version-v11.0.0/docs",previous:{title:"GraphQL Subscriptions",permalink:"/docs/v11.0.0/guided-tour/updating-data/graphql-subscriptions/"},next:{title:"Client-Only Data",permalink:"/docs/v11.0.0/guided-tour/updating-data/client-only-data/"}},u=[{value:"commitLocalUpdate",id:"commitlocalupdate",children:[]},{value:"commitPayload",id:"commitpayload",children:[]}],m=(n="FbLocalDataUpdatesFlow",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are a couple of APIs that Relay provides in order to make purely local updates to the Relay store (i.e. updates not tied to a server operation)."),(0,i.kt)("p",null,"Note that local data updates can be made both on ",(0,i.kt)("a",{parentName:"p",href:"../client-only-data/"},"client-only data"),", or on regular data that was fetched from the server via an operation."),(0,i.kt)("h2",{id:"commitlocalupdate"},"commitLocalUpdate"),(0,i.kt)("p",null,"To make updates using an ",(0,i.kt)("a",{parentName:"p",href:"../graphql-mutations/#updater-functions"},(0,i.kt)("inlineCode",{parentName:"a"},"updater"))," function, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"commitLocalUpdate")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\n\nconst {commitLocalUpdate, graphql} = require('react-relay');\n\nfunction commitCommentCreateLocally(\n  environment: Environment,\n  feedbackID: string,\n) {\n  return commitLocalUpdate(environment, store => {\n    const feedbackRecord = store.get(feedbackID);\n    const connectionRecord = ConnectionHandler.getConnection(\n      userRecord,\n      'CommentsComponent_comments_connection',\n    );\n\n    // Create a new local Comment from scratch\n    const id = `client:new_comment:${randomID()}`;\n    const newCommentRecord = store.create(id, 'Comment');\n\n    // ... update new comment with content\n\n    // Create new edge from scratch\n    const newEdge = ConnectionHandler.createEdge(\n      store,\n      connectionRecord,\n      newCommentRecord,\n      'CommentEdge' /* GraphQl Type for edge */,\n    );\n\n    // Add edge to the end of the connection\n    ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);\n  });\n}\n\nmodule.exports = {commit: commitCommentCreateLocally};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commitLocalUpdate")," update simply takes an environment and an updater function.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updater")," takes a ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",(0,i.kt)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,i.kt)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store: you can ",(0,i.kt)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.kt)("em",{parentName:"li"},"update or delete existing ones"),"."))),(0,i.kt)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store when. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our ",(0,i.kt)("a",{parentName:"li",href:"../../list-data/updating-connections/"},"Updating Connections")," section."),(0,i.kt)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.kt)("h2",{id:"commitpayload"},"commitPayload"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"commitPayload")," takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"OperationDescriptor")," and the payload for the query, and writes it to the Relay Store. The payload will be resolved like a normal server response for a query, and will also resolve Data Driven Dependencies that are passed as ",(0,i.kt)("inlineCode",{parentName:"p"},"JSResource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"requireDefer"),", etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {FooQueryRawResponse} from 'FooQuery.graphql'\n\nconst {createOperationDescriptor} = require('relay-runtime');\n\nconst operationDescriptor = createOperationDescriptor(FooQuery, {\n  id: 'an-id',\n  otherVariable: 'value',\n});\n\nconst payload: FooQueryRawResponse = {...};\n\nenvironment.commitPayload(operation, payload);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"OperationDescriptor")," can be created by ",(0,i.kt)("inlineCode",{parentName:"li"},"createOperationDescriptor"),"; it takes the query and the query variables."),(0,i.kt)("li",{parentName:"ul"},"The payload can be typed using the Flow type generated by adding  ",(0,i.kt)("inlineCode",{parentName:"li"},"@raw_response_type")," to the query."),(0,i.kt)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.kt)(m,{mdxType:"FbLocalDataUpdatesFlow"}),(0,i.kt)(l.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);