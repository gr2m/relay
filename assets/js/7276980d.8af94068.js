(self.webpackChunk=self.webpackChunk||[]).push([[15605],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(44256),r=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var o=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return r.createElement(l,null,r.createElement(c,null),r.createElement(o,null))},m=function(){return r.createElement(l,null,r.createElement(o,null))};const d=function(){return(0,a.fbContent)({internal:r.createElement(s,null),external:r.createElement(m,null)})}},47847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>y});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=n(68629),o=n(44256),c=["components"],s={id:"use-refetchable-fragment",title:"useRefetchableFragment",slug:"/api-reference/use-refetchable-fragment/",description:"API reference for useRefetchableFragment, a React hook used to refetch fragment data",keywords:["refetch","fragment"]},m=void 0,d={unversionedId:"api-reference/hooks/use-refetchable-fragment",id:"api-reference/hooks/use-refetchable-fragment",isDocsHomePage:!1,title:"useRefetchableFragment",description:"API reference for useRefetchableFragment, a React hook used to refetch fragment data",source:"@site/docs/api-reference/hooks/use-refetchable-fragment.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-refetchable-fragment/",permalink:"/docs/next/api-reference/use-refetchable-fragment/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/hooks/use-refetchable-fragment.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1630098729,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"use-refetchable-fragment",title:"useRefetchableFragment",slug:"/api-reference/use-refetchable-fragment/",description:"API reference for useRefetchableFragment, a React hook used to refetch fragment data",keywords:["refetch","fragment"]},sidebar:"docs",previous:{title:"useFragment",permalink:"/docs/next/api-reference/use-fragment/"},next:{title:"usePaginationFragment",permalink:"/docs/next/api-reference/use-pagination-fragment/"}},p=[{value:"<code>useRefetchableFragment</code>",id:"userefetchablefragment",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]},{value:"Differences with <code>RefetchContainer</code>",id:"differences-with-refetchcontainer",children:[]}]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=u("FbUseRefetchableFragmentApiReferenceCodeExample"),f=u("FbUseRefetchableFragmentReturnValue"),g={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"userefetchablefragment"},(0,i.kt)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"useRefetchableFragment")," when you want to fetch and re-render a fragment with different data:"),(0,i.kt)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(h,{mdxType:"FbUseRefetchableFragmentApiReferenceCodeExample"})),(0,i.kt)(o.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\nconst React = require('React');\n\nconst {graphql, useRefetchableFragment} = require('react-relay');\n\n\ntype Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => {\n          refetch({lang: 'SPANISH'}, {fetchPolicy: 'store-or-network'})\n        }}\n      >\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n\nmodule.exports = CommentBody;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fragment"),": GraphQL fragment specified using a ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," template literal. This fragment must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," directive, otherwise using it will throw an error. The ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',(0,i.kt)("inlineCode",{parentName:"li"},"Viewer")," or  ",(0,i.kt)("inlineCode",{parentName:"li"},"Query")," types, or on a type that implements ",(0,i.kt)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that you ",(0,i.kt)("em",{parentName:"li"},"do not")," need to manually specify a refetch query yourself. The ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," directive will autogenerate a query with the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",(0,i.kt)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fragmentReference"),": The ",(0,i.kt)("em",{parentName:"li"},"fragment reference")," is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The type of the fragment reference can be imported from the generated Flow types, from the file ",(0,i.kt)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),", and can be used to declare the type of your ",(0,i.kt)("inlineCode",{parentName:"li"},"Props"),". The name of the fragment reference type will be: ",(0,i.kt)("inlineCode",{parentName:"li"},"<fragment_name>$key"),". We use our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/relayjs/eslint-plugin-relay"},"lint rule")," to enforce that the type of the fragment reference prop is correctly declared.")))),(0,i.kt)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should corresponds the Flow type for the ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," query. This type is available to import from the the auto-generated file: ",(0,i.kt)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TFragmentRef"),": Type parameter corresponds to the type of the fragment reference argument (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"<fragment_name>$key"),"). This type usually does not need to be explicitly specified, and can be passed as ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," to let Flow infer the concrete type.")),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(f,{mdxType:"FbUseRefetchableFragmentReturnValue"})),(0,i.kt)(o.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("p",null,"Tuple containing the following values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[0]"," ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified fragment.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema."))),(0,i.kt)("li",{parentName:"ul"},"[1]"," ",(0,i.kt)("inlineCode",{parentName:"li"},"refetch"),": Function used to refetch the fragment with a potentially new set of variables.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": Object containing the new set of variable values to be used to fetch the ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," query.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"These variables need to match GraphQL variables referenced inside the fragment."),(0,i.kt)("li",{parentName:"ul"},"However, only the variables that are intended to change for the refetch request need to be specified; any variables referenced by the fragment that are omitted from this input will fall back to using the value specified in the original parent query. So for example, to refetch the fragment with the exact same variables as it was originally fetched, you can call ",(0,i.kt)("inlineCode",{parentName:"li"},"refetch({})"),"."),(0,i.kt)("li",{parentName:"ul"},"Similarly, passing an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," value for the ",(0,i.kt)("inlineCode",{parentName:"li"},"$id")," variable is ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"optional")),", unless the fragment wants to be refetched with a different ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),". When refetching a ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," fragment, Relay will already know the id of the rendered object."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," options object",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on cached data that is available. See the ",(0,i.kt)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies/"},"Fetch Policies")," section for full specification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads."))))),(0,i.kt)("li",{parentName:"ul"},"Return value:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,i.kt)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the refetch request."))),(0,i.kt)("li",{parentName:"ul"},"Behavior:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"refetch")," with a new set of variables will fetch the fragment again ",(0,i.kt)("em",{parentName:"li"},"with the newly provided variables"),". Note that the variables you need to provide are only the ones referenced inside the fragment. In this example, it means fetching the translated body of the currently rendered Comment, by passing a new value to the ",(0,i.kt)("inlineCode",{parentName:"li"},"lang")," variable."),(0,i.kt)("li",{parentName:"ul"},"Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"refetch")," will re-render your component and may cause it to ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},(0,i.kt)("a",{parentName:"em",href:"../../guided-tour/rendering/loading-states"},"suspend"))),", depending on the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchPolicy")," and whether cached data is available or if it needs to send and wait for a network request. If refetch causes the component to suspend, you'll need to make sure that there's a ",(0,i.kt)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component."),(0,i.kt)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,i.kt)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))))))),(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the fragment data: if the data for this particular ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),(0,i.kt)("li",{parentName:"ul"},"The component will suspend if any data for that specific fragment is missing, and the data is currently being fetched by a parent query.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,i.kt)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide.")))),(0,i.kt)("h3",{id:"differences-with-refetchcontainer"},"Differences with ",(0,i.kt)("inlineCode",{parentName:"h3"},"RefetchContainer")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A refetch query no longer needs to be specified in this api, since it will be automatically generated by Relay by using a ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," fragment."),(0,i.kt)("li",{parentName:"ul"},"Refetching no longer has a distinction between ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchVariables")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"renderVariables"),", which were previously vaguely defined concepts. Refetching will always correctly refetch and render the fragment with the variables you provide (any variables omitted in the input will fallback to using the original values from the parent query)."),(0,i.kt)("li",{parentName:"ul"},"Refetching will unequivocally update the component, which was not always true when calling refetch from ",(0,i.kt)("inlineCode",{parentName:"li"},"RefetchContainer")," (it would depend on what you were querying for in the refetch query and if your fragment was defined on the right object type).")),(0,i.kt)(l.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);