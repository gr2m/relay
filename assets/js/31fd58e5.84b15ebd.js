"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[78336],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){return function(a){var t=m(a.components);return n.createElement(e,i({},a,{components:t}))}},m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(t),c=r,h=u["".concat(o,".").concat(c)]||u[c]||p[c]||i;return t?n.createElement(h,l(l({ref:a},s),{},{components:t})):n.createElement(h,l({ref:a},s))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(39960),r=t(86341),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var a=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),a)}var d=function(){var e=i.useState(!1),a=e[0],t=e[1],n=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return a?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(d,null),i.createElement(u,null))},c=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(u,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(m,null),external:i.createElement(c,null)})}},19596:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var n=t(83117),r=t(80102),i=(t(67294),t(3905)),o=t(68629),l=["components"],d={id:"use-lazy-load-query",title:"useLazyLoadQuery",slug:"/api-reference/use-lazy-load-query/",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",keywords:["lazy fetching","query","fetch"]},s=void 0,u={unversionedId:"api-reference/hooks/use-lazy-load-query",id:"version-v13.0.0/api-reference/hooks/use-lazy-load-query",title:"useLazyLoadQuery",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-lazy-load-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-lazy-load-query/",permalink:"/docs/v13.0.0/api-reference/use-lazy-load-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/hooks/use-lazy-load-query.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1674617994,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{id:"use-lazy-load-query",title:"useLazyLoadQuery",slug:"/api-reference/use-lazy-load-query/",description:"API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders",keywords:["lazy fetching","query","fetch"]},sidebar:"version-v13.0.0/docs",previous:{title:"loadQuery",permalink:"/docs/v13.0.0/api-reference/load-query/"},next:{title:"useFragment",permalink:"/docs/v13.0.0/api-reference/use-fragment/"}},m={},c=[{value:"<code>useLazyLoadQuery</code>",id:"uselazyloadquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Differences with <code>QueryRenderer</code>",id:"differences-with-queryrenderer",level:3}],p={toc:c};function h(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"uselazyloadquery"},(0,i.mdx)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),(0,i.mdx)("p",null,"Hook used to fetch a GraphQL query during render. This hook can trigger multiple nested or waterfalling round trips if used without caution, and waits until render to start a data fetch (when it can usually start a lot sooner than render), thereby degrading performance. Instead, prefer ",(0,i.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery")),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useLazyLoadQuery} = require('react-relay');\n\nfunction App() {\n  const data = useLazyLoadQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: 4},\n    {fetchPolicy: 'store-or-network'},\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/presence-of-data"},"Garbage Collection")," guides):",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"(default)"))," ",(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,i.mdx)("em",{parentName:"li"},"not")," be made."),(0,i.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,i.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,i.mdx)("li",{parentName:"ul"},'"network-only": ',(0,i.mdx)("em",{parentName:"li"},"will")," ",(0,i.mdx)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,i.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."),(0,i.mdx)("li",{parentName:"ul"},'"store-only": ',(0,i.mdx)("em",{parentName:"li"},"will")," ",(0,i.mdx)("em",{parentName:"li"},"only")," reuse locally cached data, and will ",(0,i.mdx)("em",{parentName:"li"},"never")," send a network request to fetch the query. In this case, the responsibility of fetching the query falls to the caller, but this policy could also be used to read and operate on data that is entirely ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/local-data-updates"},"local"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey"),": A ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," can be passed to force a re-evaluation of the current query and variables when the component re-renders, even if the variables didn't change, or even if the component isn't remounted (similarly to how passing a different ",(0,i.mdx)("inlineCode",{parentName:"li"},"key")," to a React component will cause it to remount). If the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," is different from the one used in the previous render, the current query will be re-evaluated against the store, and it might be refetched depending on the current ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"," "))," Default value: ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,i.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,i.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option.")))),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,i.mdx)("h3",{id:"return-value"},"Return Value"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," above is: ",(0,i.mdx)("inlineCode",{parentName:"li"},"{| user: ?{| name: ?string |} |}"),".")))),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"It is expected for ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to have been rendered under a ",(0,i.mdx)("a",{parentName:"li",href:"../relay-environment-provider"},(0,i.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", in order to access the correct Relay environment, otherwise an error will be thrown."),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),"  will fetch and render the data for this query, and it may ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states"},(0,i.mdx)("em",{parentName:"a"},(0,i.mdx)("em",{parentName:"em"},"suspend")))," while the network request is in flight, depending on the specified ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),", and whether cached data is available, or if it needs to send and wait for a network request. If ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," causes the component to suspend, you'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," ancestor wrapping this component in order to show the appropriate loading state.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))),(0,i.mdx)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),(0,i.mdx)("li",{parentName:"ul"},"After a component using ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has committed, re-rendering/updating the component will not cause the query to be fetched again.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If the component is re-rendered with ",(0,i.mdx)("em",{parentName:"li"},"different query variables,")," that will cause the query to be fetched again with the new variables, and potentially re-render with different data."),(0,i.mdx)("li",{parentName:"ul"},"If the component ",(0,i.mdx)("em",{parentName:"li"},"unmounts and remounts"),", that will cause the current query and variables to be refetched (depending on the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and the state of the cache).")))),(0,i.mdx)("h3",{id:"differences-with-queryrenderer"},"Differences with ",(0,i.mdx)("inlineCode",{parentName:"h3"},"QueryRenderer")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," no longer takes a Relay environment as a parameter, and thus no longer sets the environment in React Context, like ",(0,i.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," did. Instead, ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," should be used as a descendant of a ",(0,i.mdx)("a",{parentName:"li",href:"../relay-environment-provider"},(0,i.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),", which now sets the Relay environment in Context. Usually, you should render a single ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of the application, to set a single Relay environment for the whole application."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," will use ",(0,i.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states"},"Suspense")," to allow developers to render loading states using Suspense boundaries, and will throw errors if network errors occur, which can be caught and rendered with Error Boundaries. This as opposed to providing error objects or null props to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," render function to indicate errors or loading states."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," fully supports fetch policies in order to reuse data that is cached in the Relay store instead of solely relying on the network response cache."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," has better type safety guarantees for the data it returns, which was not possible with QueryRenderer since we couldn't parametrize the type of the data with a renderer api.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);