"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[5076],{"./components/StateList/2022/StateList.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>c});var b=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),t=e("./node_modules/styled-jsx/style.js"),o=e.n(t),h=e("./node_modules/next/dist/compiled/react/index.js"),I=e("./node_modules/classnames/index.js"),N=e.n(I),j=e("./node_modules/prop-types/index.js"),m=e.n(j),A=e("./node_modules/react-i18next/dist/es/index.js"),k=e("./components/navigation/BlinkingDot.js"),_=e("./components/Link.js"),R=e("./helpers/removeDotsFromString.js"),g=e("./helpers/constants.js"),G=e("./lib/getIcidString.js"),f=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),B=e("./node_modules/lodash-es/sortBy.js"),E=e("./data/StatesForGeneralElection.js"),W=e("./helpers/getIsPresidentialSeason.js");function F(a,i){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);i&&(n=n.filter(function(v){return Object.getOwnPropertyDescriptor(a,v).enumerable})),s.push.apply(s,n)}return s}function L(a){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?F(Object(s),!0).forEach(function(n){(0,f.default)(a,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(s,n))})}return a}const V=({electionSeason:a,states:i})=>i.split("|").filter(n=>n.includes(a)?n:null),w=(a,i)=>a.find(s=>s.includes(i))||null,Y=({whiteList:a=[],liveResultsList:i=null,electionSeason:s,electionType:n=g.ELECTION_TYPE.GENERAL})=>{const v=V({states:i,electionSeason:s});let S=E.default;const T=(0,W.default)(s)&&n===g.ELECTION_TYPE.PRIMARY;return T&&(S=(0,B.default)([...E.default,...E.territories],r=>r.name)),((E.filteredStatesByYear[s]?S.filter(r=>!E.filteredStatesByYear[s].includes(r.abbr)):S)||[]).map(r=>{const M=w(v,r.abbr);let K={};const p=n===g.ELECTION_TYPE.GENERAL?"":"-primary",O=`/politics/${s}${p}-elections/${r.slug}${T?"-president":""}-results`,D=a.includes(O);return D&&(K={active:!0,live:D&&M,url:O}),L(L({},r),K)})},H=({whiteList:a=[],liveResultsList:i,electionSeason:s,electionType:n=g.ELECTION_TYPE.GENERAL})=>{const v=V({states:i,electionSeason:s}),S={activeStates:[],inactiveStates:[]};let T=E.default;return(0,W.default)(s)&&n===g.ELECTION_TYPE.PRIMARY&&(T=(0,B.default)([...E.default,...E.territories],r=>r.name)),(E.filteredStatesByYear[s]?T.filter(r=>!E.filteredStatesByYear[s].includes(r.abbr)):T).forEach(r=>{const M=`/${r.slug}-results`,K=n===g.ELECTION_TYPE.GENERAL?"":"-primary",p=`/politics/${s}${K}-elections/${r.slug}-results`,O=w(a,M),D=w(v,r.abbr);let U={};a.includes(p)?(U={live:O&&D,url:p},S.activeStates.push(L(L({},r),U))):S.inactiveStates.push(r)}),S};var z=e("./components/providers/BrandContext.js"),u=h.createElement;const P=({t:a,whiteList:i,liveResultsList:s,location:n,isEmbedded:v,electionSeason:S,electionType:T})=>{const $=S||"2020",r=Y({whiteList:i,electionSeason:$,liveResultsList:s}),M=H({whiteList:i,electionSeason:$,liveResultsList:s}),p=(0,h.useContext)(z.default)==="noticias",O=p?"https://www.telemundo.com":"https://www.nbcnews.com",D=`/noticias/elecciones-estados-unidos-${S}/resultados-`,U=l=>l?p?`${O}${D}${l.split("/").pop().replace("-results","")}`:l:"#",Z=T===g.ELECTION_TYPE.GENERAL?"":` ${T}`,y=v?"600px":"768px",X=v&&!p?{target:"_parent"}:{};n===g.STATE_LIST_LOCATIONS.DROPDOWN&&(X["data-icid"]=G.STRING_NAV);const J=n==="footer"?`${$}${Z} elections by state`:"";return u("div",{className:o().dynamic([["2107094720",[y]]])+` state-list state-list__${n}`},u(o(),{id:"2107094720",dynamic:[y]},[".state-link{color:inherit;}",".state-list{width:100%;}",".state-list__footer,.state-list__footer-full-width{height:585px;width:100%;}",".state-list__footer .mobile-state-links,.state-list__footer-full-width .mobile-state-links{display:none;}",".state-list__footer .desktop-state-links,.state-list__footer-full-width .desktop-state-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{font-size:18px;width:50%;}",".mobile-state-links{display:block;height:100%;}",".desktop-state-links{display:none;height:100%;}","@media screen and (min-width:450px){.state-list__footer,.state-list__footer-full-width{height:500px;}.state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{width:29%;}}",`@media screen and (min-width:${y}){.state-list__footer,.state-list__footer-full-width{height:250px;margin-left:12px;width:100%;}.state-list__footer .desktop-state-links,.state-list__footer-full-width .desktop-state-links{padding-left:0;}.state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{width:20%;}.mobile-state-links{display:none;padding-left:16px;}.desktop-state-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.item-link{width:20%;font-size:16px;}.standard-links__bottom-decoration{display:none;}.state-dropdown::after{display:none;}}`,"@media screen and (min-width:1000px){.state-list__footer,.state-list__footer-full-width{height:290px;width:100%;}.state-list__footer .item-link,.state-list__footer-full-width .item-link{width:19%;}.item-link{width:14%;}}","@media screen and (min-width:1240px){.state-list__footer,.state-list__footer-full-width{width:100%;height:210px;}.state-list__footer-full-width .desktop-state-links .item-link{width:11%;}.state-list__footer .desktop-state-links .item-link{width:17%;}.item-link{width:14%;}}"]),u("ul",{title:J,className:o().dynamic([["2107094720",[y]]])+" mobile-state-links overflow-y-auto lst-none pl0 pb7"},M.activeStates.map(l=>{const x=N()({"live red":l.live});return u("li",{key:l.name,"data-testid":"stateList__mobile-state",className:o().dynamic([["2107094720",[y]]])+` item-link active-state founders-cond fw6 f6 lh-copy ${x}`},u(_.default,(0,b.default)({target:p?"_blank":null,className:"state-link link",href:`${l.url?U(l.url):"#"}`},X),u(k.default,{classes:"bg-red mr1",shouldShow:l.live}),a((0,R.default)(l.name))))}),M.inactiveStates.map(l=>u("li",{key:l.name,"data-testid":"stateList__mobile-state",className:o().dynamic([["2107094720",[y]]])+" item-link founders-cond fw6 f6 lh-copy gray-40"},a((0,R.default)(l.name))))),u("ul",{title:J,className:o().dynamic([["2107094720",[y]]])+" desktop-state-links df flex-column flex-wrap lst-none pl4"},r.map(l=>{const{active:x,live:Q}=l,q=N()({"active-state":x,"live red":Q&&x});return u("li",{"data-testid":"stateList__desktop-state",key:l.name,className:o().dynamic([["2107094720",[y]]])+` item-link founders-cond fw6 lh-title ${q}`},x&&u(_.default,(0,b.default)({target:p?"_blank":null,className:"link state-link",href:`${l.url?U(l.url):"#"}`,"data-testid":"stateList__desktop-link-active"},X),u(k.default,{classes:"bg-red mr1",shouldShow:Q}),a((0,R.default)(l.name))),!x&&u("span",{"data-testid":"stateList__desktop-link-inactive",className:o().dynamic([["2107094720",[y]]])+" gray-40"},a((0,R.default)(l.name))))})))};P.displayName="StateList",P.propTypes={whiteList:m().oneOfType([m().arrayOf(m().string),m().string]),liveResultsList:m().string,location:m().string,electionSeason:m().string,electionType:m().string},P.defaultProps={whiteList:null,liveResultsList:"",location:"",electionSeason:"2020",electionType:"primary"};const c=(0,A.withTranslation)()(P)},"./components/navigation/BlinkingDot.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>k});var b=e("./node_modules/styled-jsx/style.js"),t=e.n(b),o=e("./node_modules/next/dist/compiled/react/index.js"),h=e("./node_modules/prop-types/index.js"),I=e.n(h),N=e("./node_modules/next/amp.js"),j=e.n(N),m=o.createElement;const A=({classes:_="",shouldShow:R=!1,stateName:g=""})=>{const G=(0,N.useAmp)(),f=g?`${g} has live results`:"Is Live";return m(o.Fragment,null,m(t(),{id:"446321060"},["@-webkit-keyframes blink-jsx-446321060{0%,15%{opacity:0;}70%{opacity:1;}}","@keyframes blink-jsx-446321060{0%,15%{opacity:0;}70%{opacity:1;}}",".dot.jsx-446321060{border-radius:50%;display:inline-block;height:6px;margin-bottom:2px;width:6px;-webkit-animation:blink-jsx-446321060 1.5s linear infinite alternate;animation:blink-jsx-446321060 1.5s linear infinite alternate;}"]),R&&m("span",{"data-test":"blinking-dot","data-testid":"stateList__live-state",alt:G?null:f,className:`jsx-446321060 dot ${_}`}))};A.propTypes={classes:I().string,shouldShow:I().bool,stateName:I().string};const k=A},"./data/StatesForGeneralElection.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>N,filteredStatesByYear:()=>o,territories:()=>h});var b=e("./node_modules/lodash.kebabcase/index.js"),t=e.n(b);const o={2022:["DC"]},h=[{abbr:"AS",name:"A. Samoa",slug:t()("American Samoa")},{abbr:"DA",name:"Dem. Abroad",slug:t()("Democrats Abroad")},{abbr:"GU",name:"Guam",slug:t()("Guam")},{abbr:"PR",name:"Puerto Rico",slug:t()("Puerto Rico")},{abbr:"VI",name:"Virgin Islands",slug:t()("Virgin Islands")},{abbr:"MP",name:"N. Mariana Is.",slug:t()("Northern Mariana Islands")}],N=[{abbr:"AL",name:"Alabama",slug:t()("Alabama")},{abbr:"AK",name:"Alaska",slug:t()("Alaska")},{abbr:"AZ",name:"Arizona",slug:t()("Arizona")},{abbr:"AR",name:"Arkansas",slug:t()("Arkansas")},{abbr:"CA",name:"California",slug:t()("California")},{abbr:"CO",name:"Colorado",slug:t()("Colorado")},{abbr:"CT",name:"Connecticut",slug:t()("Connecticut")},{abbr:"DE",name:"Delaware",slug:t()("Delaware")},{abbr:"DC",name:"D.C.",slug:t()("District of Columbia")},{abbr:"FL",name:"Florida",slug:t()("Florida")},{abbr:"GA",name:"Georgia",slug:t()("Georgia")},{abbr:"HI",name:"Hawaii",slug:t()("Hawaii")},{abbr:"ID",name:"Idaho",slug:t()("Idaho")},{abbr:"IL",name:"Illinois",slug:t()("Illinois")},{abbr:"IN",name:"Indiana",slug:t()("Indiana")},{abbr:"IA",name:"Iowa",slug:t()("Iowa")},{abbr:"KS",name:"Kansas",slug:t()("Kansas")},{abbr:"KY",name:"Kentucky",slug:t()("Kentucky")},{abbr:"LA",name:"Louisiana",slug:t()("Louisiana")},{abbr:"ME",name:"Maine",slug:t()("Maine")},{abbr:"MD",name:"Maryland",slug:t()("Maryland")},{abbr:"MA",name:"Massachusetts",slug:t()("Massachusetts")},{abbr:"MI",name:"Michigan",slug:t()("Michigan")},{abbr:"MN",name:"Minnesota",slug:t()("Minnesota")},{abbr:"MS",name:"Mississippi",slug:t()("Mississippi")},{abbr:"MO",name:"Missouri",slug:t()("Missouri")},{abbr:"MT",name:"Montana",slug:t()("Montana")},{abbr:"NE",name:"Nebraska",slug:t()("Nebraska")},{abbr:"NV",name:"Nevada",slug:t()("Nevada")},{abbr:"NH",name:"New Hampshire",slug:t()("New Hampshire")},{abbr:"NJ",name:"New Jersey",slug:t()("New Jersey")},{abbr:"NM",name:"New Mexico",slug:t()("New Mexico")},{abbr:"NY",name:"New York",slug:t()("New York")},{abbr:"NC",name:"North Carolina",slug:t()("North Carolina")},{abbr:"ND",name:"North Dakota",slug:t()("North Dakota")},{abbr:"OH",name:"Ohio",slug:t()("Ohio")},{abbr:"OK",name:"Oklahoma",slug:t()("Oklahoma")},{abbr:"OR",name:"Oregon",slug:t()("Oregon")},{abbr:"PA",name:"Pennsylvania",slug:t()("Pennsylvania")},{abbr:"RI",name:"Rhode Island",slug:t()("Rhode Island")},{abbr:"SC",name:"South Carolina",slug:t()("South Carolina")},{abbr:"SD",name:"South Dakota",slug:t()("South Dakota")},{abbr:"TN",name:"Tennessee",slug:t()("Tennessee")},{abbr:"TX",name:"Texas",slug:t()("Texas")},{abbr:"UT",name:"Utah",slug:t()("Utah")},{abbr:"VT",name:"Vermont",slug:t()("Vermont")},{abbr:"VA",name:"Virginia",slug:t()("Virginia")},{abbr:"WA",name:"Washington",slug:t()("Washington")},{abbr:"WV",name:"West Virginia",slug:t()("West Virginia")},{abbr:"WI",name:"Wisconsin",slug:t()("Wisconsin")},{abbr:"WY",name:"Wyoming",slug:t()("Wyoming")}]},"./helpers/getIsPresidentialSeason.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>t});const t=o=>(+o-1788)%4===0},"./helpers/removeDotsFromString.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>b});function b(t){return t&&typeof t=="string"?t.replace(/\./g,""):""}},"./lib/getIcidString.js":(C,d,e)=>{e.r(d),e.d(d,{STRING_ALL_STATES:()=>G,STRING_DELEGATE_TRACKER:()=>R,STRING_ELECTION_PARTNER:()=>_,STRING_EMBED:()=>b,STRING_FOOTER:()=>t,STRING_INTRA_STATE_LINKS:()=>k,STRING_LIVEBLOG_TRACKER:()=>g,STRING_MARQUEE:()=>o,STRING_MIDTERM_CALENDAR:()=>h,STRING_NAV:()=>I,STRING_NAV_2024:()=>N,STRING_RESULTS:()=>j,STRING_US_MAP:()=>m,STRING_US_MAP_PARTNER:()=>A,addGeneralElectionMarqueeIcidString:()=>P,addMarqueeIcidString:()=>u,getElectionEmbedIcidString:()=>F,getElectionNavIcidString:()=>w,getElectionPartnerCidString:()=>z,getElectionResultsIcidString:()=>W,getElectionUSMapIcidString:()=>L,getElectionUSMapPartnerIcidString:()=>V,getFooterStateListIcidString:()=>Y,getIntraStateNavIcidString:()=>H,getMidtermCalendarIcidString:()=>E});const b="election_embed",t="election_footer",o="election_marquee",h="midterm_calendar",I="election_nav",N="2024_recirc",j="election_results",m="election_usmap",A="election_usmap_partner",k="election_statenav",_="election_partner",R="delegate_tracker_embed",g="election_liveblog_rightrail",G="allstates_dropdown",f=c=>`?icid=${c}`,B=c=>`?cid=${c}`,E=()=>f(h),W=()=>f(j),F=()=>f(b),L=()=>f(m),V=()=>f(A),w=()=>f(I),Y=()=>f(t),H=()=>f(k),z=()=>B(_),u=(c,a="icid")=>typeof c!="string"?c:`${c}${c.includes("?")?"&":"?"}${a}=${o}`,P=(c,a=!1,i="icid")=>typeof c!="string"?c:a?`${c}${c.includes("?")?"&":"?"}${i}=${_}`:`${c}${c.includes("?")?"&":"?"}${i}=${o}`}}]);
