"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[71125],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>l,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),l=o,m=p["".concat(a,".").concat(l)]||p[l]||f[l]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={},c=void 0,u={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"guided-tour/refetching/OssAvoidSuspenseNote",title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/next/guided-tour/refetching/OssAvoidSuspenseNote",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1674617994,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{}},p={},d=[],l={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")))}f.isMDXComponent=!0}}]);