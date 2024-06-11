import{B as be}from"./Button-3DsF5Zjt.js";import{U as De,a9 as Me,ao as Je,X as ae,Y as oe,a6 as te,_ as fe,ak as we,a1 as Ie,a4 as Oe,W as Y,aa as Ze,ab as qe,Z as u,ac as He,a2 as B,aG as Ke,a3 as re,a7 as ge,am as me,aH as We,a0 as v,aI as Ue,aJ as Xe,ay as je,aA as xe,ax as _e,C as Ye}from"./Settings-xuVU-BgW.js";import{_ as Te}from"./_plugin-vue_export-helper-BZooHx69.js";const vt="/assets/help_improve-DypO4k2B.svg",Qe={class:"modal-overlay"},et={class:"modal center"},tt=[(e=>(Ze("data-v-8e92443f"),e=e(),qe(),e))(()=>oe("span",{class:"sr-only"},"Close",-1))],at={key:1,"data-test":"title"},pt=Te(De({__name:"Modal",props:{title:{default:""},buttons:{},showCloseButton:{type:Boolean,default:!0},reverseButtonOrder:{type:Boolean,default:!1}},emits:["close","cancel"],setup(e,{emit:a}){const t=a;function r(){t("cancel"),o()}function o(){t("close")}function l(n){n.key==="Tab"&&n.preventDefault()}return Me(()=>{addEventListener("keydown",l)}),Je(()=>{o(),removeEventListener("keydown",l)}),(n,p)=>(Y(),ae("div",Qe,[oe("div",et,[n.showCloseButton?(Y(),ae("button",{key:0,class:"modal-close",onClick:r,"data-test":"close-button"},tt)):te("",!0),n.title?(Y(),ae("h4",at,fe(n.title),1)):te("",!0),we(n.$slots,"default",{},void 0,!0),oe("div",{class:Ie(["button-group",{reversed:n.reverseButtonOrder}])},[n.buttons.primary?(Y(),Oe(be,{key:0,"data-test":"primary-button",label:n.buttons.primary.label,disabled:n.buttons.primary.disabled===!0,loading:n.buttons.primary.loading===!0,size:"sm","fit-content":!0,onClick:n.buttons.primary.action,id:n.buttons.primary.id,danger:n.buttons.primary.danger},null,8,["label","disabled","loading","onClick","id","danger"])):te("",!0),n.buttons.secondary?(Y(),Oe(be,{key:1,"data-test":"secondary-button",label:n.buttons.secondary.label,disabled:n.buttons.secondary.disabled===!0,loading:n.buttons.secondary.loading===!0,type:"secondary",size:"sm","fit-content":!0,onClick:n.buttons.secondary.action,id:n.buttons.secondary.id},null,8,["label","disabled","loading","onClick","id"])):te("",!0)],2),we(n.$slots,"below_buttons",{},void 0,!0)])]))}}),[["__scopeId","data-v-8e92443f"]]),rt={key:0},ft=Te(De({__name:"Hint",props:{heading:{type:String,default:""},content:{type:String,default:""},type:{type:String,default:"info"},className:{type:String,default:""}},setup:e=>(a,t)=>(Y(),ae("div",{class:Ie(["hints",e.type,e.className])},[e.heading?(Y(),ae("h6",rt,fe(e.heading),1)):te("",!0),oe("p",null,fe(e.content),1)],2))}),[["__scopeId","data-v-19d6702d"]]);function Ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ne(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ee(Object(t),!0).forEach(function(r){nt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function nt(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function ie(e){return typeof e=="function"}function ye(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function le(e){return ie(e.$validator)?ne({},e):{$validator:e}}function ue(e){return typeof e=="object"?e.$valid:e}function ce(e){return e.$validator||e}function Ve(e,a){if(!ye(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!ye(a)&&!ie(a))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=le(a);return t.$params=ne(ne({},t.$params||{}),e),t}function Ne(e,a){if(!ie(e)&&typeof u(e)!="string")throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!ye(a)&&!ie(a))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=le(a);return t.$message=e,t}const $e=e=>{if(e=u(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let a in e)return!0;return!1}return!!String(e).length},Be=e=>(e=u(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function W(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=>(r=u(r),!$e(r)||a.every(o=>(o.lastIndex=0,o.test(r))))}var gt=Object.freeze({__proto__:null,forEach:function(e){return{$validator(a){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return u(a).reduce((l,n,p)=>{const _=Object.entries(n).reduce((i,P)=>{let[j,C]=P;const I=e[j]||{},R=Object.entries(I).reduce((b,A)=>{let[$,w]=A;const f=ce(w).call(this,C,n,p,...r),g=ue(f);if(b.$data[$]=f,b.$data.$invalid=!g||!!b.$data.$invalid,b.$data.$error=b.$data.$invalid,!g){let E=w.$message||"";const z=w.$params||{};typeof E=="function"&&(E=E({$pending:!1,$invalid:!g,$params:z,$model:C,$response:f})),b.$errors.push({$property:j,$message:E,$params:z,$response:f,$model:C,$pending:!1,$validator:$})}return{$valid:b.$valid&&g,$data:b.$data,$errors:b.$errors}},{$valid:!0,$data:{},$errors:[]});return i.$data[j]=R.$data,i.$errors[j]=R.$errors,{$valid:i.$valid&&R.$valid,$data:i.$data,$errors:i.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:l.$valid&&_.$valid,$data:l.$data.concat(_.$data),$errors:l.$errors.concat(_.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:a=>{let{$response:t}=a;return t?t.$errors.map(r=>Object.values(r).map(o=>o.map(l=>l.$message)).reduce((o,l)=>o.concat(l),[])):[]}}},len:Be,normalizeValidatorObject:le,regex:W,req:$e,unwrap:u,unwrapNormalizedValidator:ce,unwrapValidatorResponse:ue,withAsync:function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return ne(ne({},le(e)),{},{$async:!0,$watchTargets:a})},withMessage:Ne,withParams:Ve});W(/^[a-zA-Z]*$/),W(/^[a-zA-Z0-9]*$/),W(/^\d*(\.\d+)?$/);function mt(e){return{$validator:(a=e,t=>!$e(t)||Be(t)<=u(a)),$message:t=>{let{$params:r}=t;return`The maximum length allowed is ${r.max}`},$params:{max:e,type:"maxLength"}};var a}W(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);var yt={$validator:function(e){return typeof e=="string"&&(e=e.trim()),$e(e)},$message:"Value is required",$params:{type:"required"}};function st(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];const r=a.some(n=>n.$async),o=a.reduce((n,p)=>p.$watchTargets?n.concat(p.$watchTargets):n,[]);let l=()=>!1;return a.length&&(l=r?function(n){return function(){for(var p=arguments.length,_=new Array(p),i=0;i<p;i++)_[i]=arguments[i];return n.reduce(async(P,j)=>{const C=await P;return ue(C)?ce(j).apply(this,_):C},Promise.resolve(!0))}}(a):function(n){return function(){for(var p=arguments.length,_=new Array(p),i=0;i<p;i++)_[i]=arguments[i];return n.reduce((P,j)=>ue(P)?ce(j).apply(this,_):P,!0)}}(a)),{$async:r,$validator:l,$watchTargets:o}}function ht(){return Ve({type:"and"},Ne("The value does not match all of the provided validators",st(...arguments)))}function Pe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function K(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(t),!0).forEach(function(r){ot(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ot(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function ke(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,r)=>(a.includes(r)||(t[r]=u(e[r])),t),{})}function de(e){return typeof e=="function"}function Fe(e,a,t){let r=e;const o=a.split(".");for(let l=0;l<o.length;l++){if(!r[o[l]])return t;r=r[o[l]]}return r}function pe(e,a,t){return v(()=>e.some(r=>Fe(a,r,{[t]:!1})[t]))}function Ce(e,a,t){return v(()=>e.reduce((r,o)=>{const l=Fe(a,o,{[t]:!1})[t]||[];return r.concat(l)},[]))}function Re(e,a,t,r){return e.call(r,u(a),u(t),r)}function Ae(e){return e.$valid!==void 0?!e.$valid:!e}function it(e,a,t,r,o,l,n,p,_,i,P){const j=B(!1),C=e.$params||{},I=B(null);let R,b;e.$async?{$invalid:R,$unwatch:b}=function($,w,f,g,E,z,U){let{$lazy:F,$rewardEarly:S}=E,T=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],N=arguments.length>8?arguments[8]:void 0,L=arguments.length>9?arguments[9]:void 0,ee=arguments.length>10?arguments[10]:void 0;const Q=B(!!g.value),G=B(0);f.value=!1;const ve=re([w,g].concat(T,ee),()=>{if(F&&!g.value||S&&!L.value&&!f.value)return;let s;try{s=Re($,w,N,U)}catch(m){s=Promise.reject(m)}G.value++,f.value=!!G.value,Q.value=!1,Promise.resolve(s).then(m=>{G.value--,f.value=!!G.value,z.value=m,Q.value=Ae(m)}).catch(m=>{G.value--,f.value=!!G.value,z.value=m,Q.value=!0})},{immediate:!0,deep:typeof w=="object"});return{$invalid:Q,$unwatch:ve}}(e.$validator,a,j,t,r,I,o,e.$watchTargets,_,i,P):{$invalid:R,$unwatch:b}=function($,w,f,g,E,z,U,F){let{$lazy:S,$rewardEarly:T}=g;return{$unwatch:()=>({}),$invalid:v(()=>{if(S&&!f.value||T&&!F.value)return!1;let N=!0;try{const L=Re($,w,U,z);E.value=L,N=Ae(L)}catch(L){E.value=L}return N})}}(e.$validator,a,t,r,I,o,_,i);const A=e.$message;return{$message:de(A)?v(()=>A(ke({$pending:j,$invalid:R,$params:ke(C),$model:a,$response:I,$validator:l,$propertyPath:p,$property:n}))):A||"",$params:C,$pending:j,$invalid:R,$response:I,$unwatch:b}}W(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i),W(/(^[0-9]*$)|(^-[0-9]+$)/),W(/^[-]?\d*(\.\d+)?$/);const lt="__root";function he(e){let{validations:a,state:t,key:r,parentKey:o,childResults:l,resultsCache:n,globalConfig:p={},instance:_,externalResults:i}=e;const P=o?`${o}.${r}`:r,{rules:j,nestedValidators:C,config:I,validationGroups:R}=function(){const s=u(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),m=Object.keys(s),O={},y={},x={};let J=null;return m.forEach(D=>{const k=s[D];switch(!0){case de(k.$validator):O[D]=k;break;case de(k):O[D]={$validator:k};break;case D==="$validationGroups":J=k;break;case D.startsWith("$"):x[D]=k;break;default:y[D]=k}}),{rules:O,nestedValidators:y,config:x,validationGroups:J}}(a),b=K(K({},p),I),A=r?v(()=>{const s=u(t);return s?u(s[r]):void 0}):t,$=K({},u(i)||{}),w=v(()=>{const s=u(i);return r?s?u(s[r]):void 0:s}),f=function(s,m,O,y,x,J,D,k,X){const V=Object.keys(s),Z=y.get(x,s),M=B(!1),d=B(!1),q=B(0);if(Z){if(!Z.$partial)return Z;Z.$unwatch(),M.value=Z.$dirty.value}const c={$dirty:M,$path:x,$touch:()=>{M.value||(M.value=!0)},$reset:()=>{M.value&&(M.value=!1)},$commit:()=>{}};return V.length?(V.forEach(h=>{c[h]=it(s[h],m,c.$dirty,J,D,h,O,x,X,d,q)}),c.$externalResults=v(()=>k.value?[].concat(k.value).map((h,H)=>({$propertyPath:x,$property:O,$validator:"$externalResults",$uid:`${x}-externalResult-${H}`,$message:h,$params:{},$response:null,$pending:!1})):[]),c.$invalid=v(()=>{const h=V.some(H=>u(c[H].$invalid));return d.value=h,!!c.$externalResults.value.length||h}),c.$pending=v(()=>V.some(h=>u(c[h].$pending))),c.$error=v(()=>!!c.$dirty.value&&(c.$pending.value||c.$invalid.value)),c.$silentErrors=v(()=>V.filter(h=>u(c[h].$invalid)).map(h=>{const H=c[h];return me({$propertyPath:x,$property:O,$validator:h,$uid:`${x}-${h}`,$message:H.$message,$params:H.$params,$response:H.$response,$pending:H.$pending})}).concat(c.$externalResults.value)),c.$errors=v(()=>c.$dirty.value?c.$silentErrors.value:[]),c.$unwatch=()=>V.forEach(h=>{c[h].$unwatch()}),c.$commit=()=>{d.value=!0,q.value=Date.now()},y.set(x,s,c),c):(Z&&y.set(x,s,c),c)}(j,A,r,n,P,b,_,w,t),g=function(s,m,O,y,x,J,D){const k=Object.keys(s);return k.length?k.reduce((X,V)=>(X[V]=he({validations:s[V],state:m,key:V,parentKey:O,resultsCache:y,globalConfig:x,instance:J,externalResults:D}),X),{}):{}}(C,A,P,n,b,_,w),E={};R&&Object.entries(R).forEach(s=>{let[m,O]=s;E[m]={$invalid:pe(O,g,"$invalid"),$error:pe(O,g,"$error"),$pending:pe(O,g,"$pending"),$errors:Ce(O,g,"$errors"),$silentErrors:Ce(O,g,"$silentErrors")}});const{$dirty:z,$errors:U,$invalid:F,$anyDirty:S,$error:T,$pending:N,$touch:L,$reset:ee,$silentErrors:Q,$commit:G}=function(s,m,O){const y=v(()=>[m,O].filter(d=>d).reduce((d,q)=>d.concat(Object.values(u(q))),[])),x=v({get:()=>s.$dirty.value||!!y.value.length&&y.value.every(d=>d.$dirty),set(d){s.$dirty.value=d}}),J=v(()=>{const d=u(s.$silentErrors)||[],q=y.value.filter(c=>(u(c).$silentErrors||[]).length).reduce((c,h)=>c.concat(...h.$silentErrors),[]);return d.concat(q)}),D=v(()=>{const d=u(s.$errors)||[],q=y.value.filter(c=>(u(c).$errors||[]).length).reduce((c,h)=>c.concat(...h.$errors),[]);return d.concat(q)}),k=v(()=>y.value.some(d=>d.$invalid)||u(s.$invalid)||!1),X=v(()=>y.value.some(d=>u(d.$pending))||u(s.$pending)||!1),V=v(()=>y.value.some(d=>d.$dirty)||y.value.some(d=>d.$anyDirty)||x.value),Z=v(()=>!!x.value&&(X.value||k.value)),M=()=>{s.$touch(),y.value.forEach(d=>{d.$touch()})};return y.value.length&&y.value.every(d=>d.$dirty)&&M(),{$dirty:x,$errors:D,$invalid:k,$anyDirty:V,$error:Z,$pending:X,$touch:M,$reset:()=>{s.$reset(),y.value.forEach(d=>{d.$reset()})},$silentErrors:J,$commit:()=>{s.$commit(),y.value.forEach(d=>{d.$commit()})}}}(f,g,l),ve=r?v({get:()=>u(A),set:s=>{z.value=!0;const m=u(t),O=u(i);O&&(O[r]=$[r]),ge(m[r])?m[r].value=s:m[r]=s}}):null;return r&&b.$autoDirty&&re(A,()=>{z.value||L();const s=u(i);s&&(s[r]=$[r])},{flush:"sync"}),me(K(K(K({},f),{},{$model:ve,$dirty:z,$error:T,$errors:U,$invalid:F,$anyDirty:S,$pending:N,$touch:L,$reset:ee,$path:P||lt,$silentErrors:Q,$validate:async function(){return L(),b.$rewardEarly&&(G(),await _e()),await _e(),new Promise(s=>{if(!N.value)return s(!F.value);const m=re(N,()=>{s(!F.value),m()})})},$commit:G},l&&{$getResultsForChild:function(s){return(l.value||{})[s]},$clearExternalResults:function(){ge(i)?i.value=$:Object.keys($).length===0?Object.keys(i).forEach(s=>{delete i[s]}):Object.assign(i,$)},$validationGroups:E}),g))}class ut{constructor(){this.storage=new Map}set(a,t,r){this.storage.set(a,{rules:t,result:r})}checkRulesValidity(a,t,r){const o=Object.keys(r),l=Object.keys(t);return l.length!==o.length?!1:!!l.every(n=>o.includes(n))&&l.every(n=>!t[n].$params||Object.keys(t[n].$params).every(p=>u(r[n].$params[p])===u(t[n].$params[p])))}get(a,t){const r=this.storage.get(a);if(!r)return;const{rules:o,result:l}=r,n=this.checkRulesValidity(a,t,o),p=l.$unwatch?l.$unwatch:()=>({});return n?l:{$dirty:l.$dirty,$partial:!0,$unwatch:p}}}const se={COLLECT_ALL:!0,COLLECT_NONE:!1},ze=Symbol("vuelidate#injectChildResults"),Se=Symbol("vuelidate#removeChildResults");function Ge(e){return new Proxy(e,{get:(a,t)=>typeof a[t]=="object"?Ge(a[t]):v(()=>a[t])})}let Le=0;function bt(e,a){var t;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=e,e=void 0,a=void 0);let{$registerAs:o,$scope:l=se.COLLECT_ALL,$stopPropagation:n,$externalResults:p,currentVueInstance:_}=r;const i=_||((t=He())===null||t===void 0?void 0:t.proxy),P=i?i.$options:{};o||(Le+=1,o=`_vuelidate_${Le}`);const j=B({}),C=new ut,{childResults:I,sendValidationResultsToParent:R,removeValidationResultsFromParent:b}=i?function($){let{$scope:w,instance:f}=$;const g={},E=B([]),z=v(()=>E.value.reduce((S,T)=>(S[T]=u(g[T]),S),{}));f.__vuelidateInjectInstances=[].concat(f.__vuelidateInjectInstances||[],function(S,T){let{$registerAs:N,$scope:L,$stopPropagation:ee}=T;ee||w===se.COLLECT_NONE||L===se.COLLECT_NONE||w!==se.COLLECT_ALL&&w!==L||(g[N]=S,E.value.push(N))}),f.__vuelidateRemoveInstances=[].concat(f.__vuelidateRemoveInstances||[],function(S){E.value=E.value.filter(T=>T!==S),delete g[S]});const U=je(ze,[]);xe(ze,f.__vuelidateInjectInstances);const F=je(Se,[]);return xe(Se,f.__vuelidateRemoveInstances),{childResults:z,sendValidationResultsToParent:U,removeValidationResultsFromParent:F}}({$scope:l,instance:i}):{childResults:B({})};if(!e&&P.validations){const $=P.validations;a=B({}),Ke(()=>{a.value=i,re(()=>de($)?$.call(a.value,new Ge(a.value)):$,w=>{j.value=he({validations:w,state:a,childResults:I,resultsCache:C,globalConfig:r,instance:i,externalResults:p||i.vuelidateExternalResults})},{immediate:!0})}),r=P.validationsConfig||r}else{const $=ge(e)||Ue(A=e)||Xe(A)?e:me(e||{});re($,w=>{j.value=he({validations:w,state:a,childResults:I,resultsCache:C,globalConfig:r,instance:i??{},externalResults:p})},{immediate:!0})}var A;return i&&(R.forEach($=>$(j,{$registerAs:o,$scope:l,$stopPropagation:n})),We(()=>b.forEach($=>$(o)))),v(()=>K(K({},u(j.value)),I.value))}const wt="/assets/app_not_installed-Dfb6wdZn.svg",Ot=async()=>{const e=new Ye,a=await e.readAny("accountState");localStorage.setItem("password_manager_user_exists",a&&JSON.stringify(a.exists)),localStorage.setItem("password_manager_user_authenticated",a&&JSON.stringify(a.authenticated));const t=await chrome.storage.local.get("uuid");localStorage.setItem("uuid",JSON.stringify(t==null?void 0:t.uuid))};export{wt as A,ft as H,pt as M,ht as a,Ot as b,gt as c,vt as i,mt as m,yt as r,bt as u};
