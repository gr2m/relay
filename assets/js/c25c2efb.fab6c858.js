(self.webpackChunk=self.webpackChunk||[]).push([[23608],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>c,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),y=n,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},56027:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>u});var r=o(22122),n=o(19756),a=(o(67294),o(3905)),i=["components"],l={id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/",description:"Relay guide to upgrading to Relay hooks",keywords:["upgrade","hooks"]},s={unversionedId:"migration-and-compatibility/upgrading-to-relay-hooks",id:"migration-and-compatibility/upgrading-to-relay-hooks",isDocsHomePage:!1,title:"Upgrading to Relay Hooks",description:"Relay guide to upgrading to Relay hooks",source:"@site/docs/migration-and-compatibility/upgrading-to-relay-hooks.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/",permalink:"/docs/next/migration-and-compatibility/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/migration-and-compatibility/upgrading-to-relay-hooks.md",version:"current",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1622835219,formattedLastUpdatedAt:"6/4/2021",frontMatter:{id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/",description:"Relay guide to upgrading to Relay hooks",keywords:["upgrade","hooks"]},sidebar:"docs",previous:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/next/guides/testing-relay-with-preloaded-queries/"},next:{title:"Suspense Compatibility",permalink:"/docs/next/migration-and-compatibility/suspense-compatibility/"}},p=[{value:"Accessing Relay Hooks",id:"accessing-relay-hooks",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/2021/03/09/introducing-relay-hooks"},"Relay Hooks")," is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs."),(0,a.kt)("p",null,"In this we will cover how to start using Relay Hooks, what you need to know about compatibility, and how to migrate existing container-based code to Hooks if you choose to do so. However, note that migrating existing code to Relay Hooks is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"not"))," required, and ",(0,a.kt)("strong",{parentName:"p"},"container-based code will continue to work"),"."),(0,a.kt)("h2",{id:"accessing-relay-hooks"},"Accessing Relay Hooks"),(0,a.kt)("p",null,"Make sure the latest versions of React and Relay are installed, and that you\u2019ve followed additional setup in our ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation-and-setup/"},"Installation & Setup")," guide:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add react react-dom react-relay\n")),(0,a.kt)("p",null,"Then, you can import Relay Hooks from the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"react-relay"))," module, or if you only want to include Relay Hooks in your bundle, you can import them from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"react-relay/hooks")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {graphql, useFragment} from 'react-relay'; // or 'react-relay/hooks'\n\n// ...\n")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Check out the following guides in this section:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./suspense-compatibility/"},"Suspense Compatibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./relay-hooks-and-legacy-container-apis/"},"Relay Hooks and Legacy Container APIs"))),(0,a.kt)("p",null,"For more documentation on the APIs themselves, check out our ",(0,a.kt)("a",{parentName:"p",href:"../api-reference/relay-environment-provider"},"API Reference")," or our ",(0,a.kt)("a",{parentName:"p",href:"../guided-tour/"},"Guided Tour"),"."))}u.isMDXComponent=!0}}]);