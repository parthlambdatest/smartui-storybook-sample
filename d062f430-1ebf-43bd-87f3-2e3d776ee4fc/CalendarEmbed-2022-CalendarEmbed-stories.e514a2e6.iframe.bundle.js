"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9637],{"./components/CalendarEmbed/2022/CalendarEmbed.stories.js":(S,p,e)=>{e.r(p),e.d(p,{CalendarEmbedNoBorders:()=>l,CalendarEmbedWithBorders:()=>E,__namedExportsOrder:()=>y,default:()=>C});var v=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),m=e("./node_modules/next/dist/compiled/react/index.js"),O=e("./node_modules/styled-jsx/style.js"),P=e.n(O),o=e("./node_modules/classnames/index.js"),D=e.n(o),B=e("./node_modules/react-i18next/dist/es/index.js"),b=e("./components/DebugInfo/index.js"),M=e("./components/Link.js"),T=e("./components/providers/EmbedContext.js"),i=e("./components/Calendar/2022/calendarHelpers.js"),f=e("./components/Calendar/2022/CalendarMonthEntries/index.js"),N=e("./components/providers/BrandContext.js"),U=e("./helpers/isTelemundo.js"),n=m.createElement;function c(a){const{t:d}=(0,B.useTranslation)(),{page:t,debugInfo:s,hasBorders:g,isEmbed:W,brand:L}=a,[,A]=(0,i.getCalendarMonthEntries)({months:t?.months,isEmbed:!0}),K=(0,m.useMemo)(()=>({isEmbed:!0,useLinkTarget:(0,U.default)(L)}),[L]),R=I=>I?I.map(h=>n(f.default,{embedStateCount:h.totalStates,hasPassed:h.hasPassed,isUpcoming:h.isUpcoming,key:h.month,monthData:h.monthData,isEmbed:!0})):null;return t?n(m.Fragment,null,n(P(),{id:"4222055135"},[".debug{margin:20px;}",".hasBorders{border-top:solid 1px #ccc;border-bottom:solid 1px #ccc;padding:4px 0;}",".calendar-embed__heading-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".calendar-embed__heading{margin:20px 16px 10px 0;}",".calendar-embed__heading-container>a{margin-bottom:4px;}",".calendar-embed__content{margin-bottom:4px;}","@media screen and (min-width:758px){.calendar-embed__heading-container{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.calendar-embed__heading-container>a{padding-top:38px;}\xE5 .hasBorders{padding-bottom:12px;}}"]),n(N.default.Provider,{value:L},n(T.default.Provider,{value:K},Array.isArray(A)&&A.length>0&&n("div",{className:"jsx-4222055135 "+(D()("calendar-embed",{hasBorders:g,debug:!W})||"")},!g&&n("div",{className:"jsx-4222055135 top-decoration"}),n("div",{className:"jsx-4222055135 calendar-embed__heading-container items-baseline"},n("h2",{className:"jsx-4222055135 calendar-embed__heading founders-cond fw6 f7 lh-none ttu"},d(t.embedTitle)),n(M.default,{className:"full-calendar-link f3 fw4 lh-copy no-underline clear-blue founders-cond",href:t.pageUrl},d("GO TO FULL CALENDAR"))),n("ul",{className:"jsx-4222055135 calendar-embed__content pa0"},R(A))),n("main",{className:"jsx-4222055135 overflow-hidden"},!W&&n(b.default,s))))):null}var r=e("./components/Calendar/mock.json"),u=m.createElement;function x(a,d){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);d&&(s=s.filter(function(g){return Object.getOwnPropertyDescriptor(a,g).enumerable})),t.push.apply(t,s)}return t}function j(a){for(var d=1;d<arguments.length;d++){var t=arguments[d]!=null?arguments[d]:{};d%2?x(Object(t),!0).forEach(function(s){(0,v.default)(a,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))})}return a}const C={component:c,title:"Embeds/Calendar/2022"},E=()=>u("div",{id:"calendar-embed-story"},u(c,r.mockEmbedData));E.displayName="CalendarEmbedWithBorders";const l=()=>{const a=j(j({},r.mockEmbedData),{},{hasBorders:!1});return u("div",{id:"calendar-embed-story"},u(c,a))};l.displayName="CalendarEmbedNoBorders";const y=["CalendarEmbedWithBorders","CalendarEmbedNoBorders"]},"./components/Calendar/2022/CalendarMonthEntries/index.js":(S,p,e)=>{e.r(p),e.d(p,{default:()=>N});var v=e("./node_modules/styled-jsx/style.js"),m=e.n(v),O=e("./node_modules/next/dist/compiled/react/index.js"),P=e("./node_modules/prop-types/index.js"),o=e.n(P),D=e("./node_modules/classnames/index.js"),B=e.n(D),b=e("./components/Calendar/2022/calendarHelpers.js"),M=e("./components/Calendar/2022/State.propsShape.js"),T=e("./components/Calendar/2022/CalendarMonthEntries/CalendarDayEntry.js"),i=O.createElement;function f({embedStateCount:U,monthData:n,hasPassed:c,isEmbed:r,isUpcoming:u}){const x=()=>{const j=c?(0,b.getUniqueElectionDates)(n.states).reverse():(0,b.getUniqueElectionDates)(n.states),C=(0,b.getStatesByDate)(n.states);let E=U;return j.map((l,y)=>{if(r){if(E&&E>=3)return null;E+=C?.[l].length||0}return i(T.default,{monthData:n,date:l,showCalendarVisual:!c&&y===0||r,states:C[l],isEmbed:r,isUpcoming:u&&y===0,key:`${n.monthName}-${l}`})})};return n&&i("li",{"data-testid":"calendar-month-entries","aria-label":`${n.monthName} election dates`,className:"jsx-561655434 "+(B()("calendar-month-entries__container",{isEmbed:r})||"")},i("ul",{className:"jsx-561655434 calendar-month-entries pa0"},x()),i(m(),{id:"561655434"},[".calendar-month-entries__container.jsx-561655434{list-style:none;}",".calendar-month-entries__container.isEmbed.jsx-561655434{border-bottom:0;}",".calendar-month-entries__container.jsx-561655434:last-child{border-bottom:0;}"]))}f.propTypes={embedStateCount:o().number,hasPassed:o().bool,isEmbed:o().bool,isUpcoming:o().bool,monthData:o().shape({states:o().arrayOf(M.default),monthNumber:o().number})},f.defaultProps={embedStateCount:null,hasPassed:!1,isEmbed:!1,isUpcoming:!1,monthData:null};const N=f}}]);
