import{e as Z,w as G,v as D,a as J,_ as H}from"./_plugin-vue_export-helper-BZooHx69.js";import{U,ac as j,a2 as I,a0 as d,a3 as K,a9 as R,W as n,X as i,Z as e,a8 as h,Y as r,_ as w,ad as q,a7 as O,a1 as b,ak as X,a6 as A,aR as Q,aa as ee,ab as ae}from"./Settings-xuVU-BgW.js";const Y=m=>(ee("data-v-f56f1e52"),m=m(),ae(),m),le=["value","id"],te=["value","id"],oe=["for","data-content"],se=[Y(()=>r("span",{class:"sr-only"},"Password (required)",-1))],de={class:"label"},ue={class:"color-coded-password"},ne=["id","name","title","innerHTML"],ie=["id","type","disabled","name","placeholder","maxLength"],re=["for","data-content"],ce=[Y(()=>r("span",{class:"sr-only"},"Password (required)",-1))],pe={class:"buttons-wrapper"},we=H(U({__name:"PasswordInput",props:{value:{default:""},label:{default:""},focus:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},wiggle:{type:Boolean,default:!1},errorMessage:{default:""},maxLength:{default:150},showEye:{type:Boolean,default:!1},showEyeWhenEmpty:{type:Boolean,default:!1},allowCopy:{type:Boolean,default:!1},fixedDotsNumber:{default:10},fixedMaskSize:{type:Boolean,default:!1},customMask:{default:""},secretVisibility:{default:"hidden"},secretType:{default:"password"}},emits:["update:value","reveal","enter","copy","input-focusout","input-focusin"],setup(m,{expose:P,emit:_}){var z;const o={secretType:"password",onlyNumeric:!1},g={secretType:"numericPassword",onlyNumeric:!0},p={secretType:"creditCard",onlyNumeric:!0},l=m,s=_,c=(z=j())==null?void 0:z.uid.toString(),f=I(l.value),v=I(l.secretVisibility),N=d(()=>l.secretType==="password"?Q(l.value):l.value),F=d(()=>v.value==="visible"?"text":"password"),S=d(()=>l.showEyeWhenEmpty||f.value.length>0&&l.showEye),k=d(()=>l.invalid&&!l.disabled),x=d(()=>({"form-group-error":l.wiggle&&!l.disabled,multiline:C.value})),B=d(()=>({error:l.invalid})),T=d(()=>({show:v.value==="visible"})),L=d(()=>v.value==="hidden"&&l.disabled),C=d(()=>(l.secretType==="password"||l.value.length>18)&&v.value==="visible"&&l.disabled);function M(){l.allowCopy&&W()}function E(t){const u=a(t.target.value??"");f.value=u,s("update:value",f.value)}function a(t){let u;switch(l.secretType){case"creditCard":u=p;break;case"password":u=o;break;case"numericPassword":u=g;break;default:throw new Error(`unsupported secret type ${l.secretType}`)}let y=t.replace(u.onlyNumeric?/[^0-9]/g:"","");return l.secretType==="creditCard"&&(y=y.replace(/(.{4})/g,"$1 ").trim()),y}function $(){v.value=v.value==="visible"?"hidden":"visible",s("reveal",v.value==="visible")}function V(){var t;c&&((t=document.getElementById(c))==null||t.focus())}function W(){s("copy")}return K(()=>l.value,t=>{f.value=a(t)},{immediate:!0}),R(()=>{l.focus&&V()}),P({focusInput:V,togglePassword:$}),(t,u)=>(n(),i("div",{class:b(["form-group",e(x)]),onClick:M},[e(L)?(n(),i(h,{key:0},[t.customMask?(n(),i("input",{key:0,class:"custom-mask",value:t.customMask,type:"text",disabled:"",id:e(c)},null,8,le)):(n(),i("input",{key:1,class:"fixed-mask",value:"?".repeat(l.fixedMaskSize?l.fixedDotsNumber:e(f).length),type:"password",disabled:"",id:e(c)},null,8,te)),r("label",{for:e(c),"data-content":t.label},se,8,oe)],64)):e(C)?(n(),i(h,{key:1},[r("div",de,w(t.label),1),r("div",ue,[r("div",{class:"read-only-field",id:e(c),name:e(c),title:t.label,innerHTML:e(N)},null,8,ne)])],64)):(n(),i(h,{key:2},[q(r("input",{required:"",id:e(c),type:e(F),"onUpdate:modelValue":u[0]||(u[0]=y=>O(f)?f.value=y:null),class:b(e(B)),disabled:t.disabled,name:e(c),placeholder:t.label,maxLength:t.maxLength,autocomplete:"new-password","data-lpignore":"true",onInput:E,onKeyup:u[1]||(u[1]=G(y=>s("enter"),["enter"])),onFocusin:u[2]||(u[2]=y=>s("input-focusin")),onFocusout:u[3]||(u[3]=y=>s("input-focusout"))},null,42,ie),[[Z,e(f)]]),r("label",{for:e(c),"data-content":t.label},ce,8,re),q(r("div",{class:"error-message"},w(t.errorMessage),513),[[D,e(k)]])],64)),r("div",pe,[X(t.$slots,"button",{},void 0,!0),e(S)?(n(),i("button",{key:0,class:b(["eye-button",e(T)]),onClick:J($,["stop"])},null,2)):A("",!0),t.allowCopy?(n(),i("button",{key:1,class:"copy-button",onClick:W})):A("",!0)])],2))}}),[["__scopeId","data-v-f56f1e52"]]),fe={class:"label"},ve=["id","name","title"],ye=["disabled","id","value","name","title","placeholder","maxLength"],me=["disabled","id","value","name","title","placeholder","maxLength"],be=["for","data-content"],ke=H(U({__name:"TextInput",props:{value:{default:""},label:{default:""},focus:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},wiggle:{type:Boolean,default:!1},errorMessage:{default:""},maxLength:{default:50},allowCopy:{type:Boolean,default:!1},placeholder:{default:""},multiLinePreview:{type:Boolean,default:!1},isTextArea:{type:Boolean,default:!1},keepErrorMessagePlaceholder:{type:Boolean,default:!1}},emits:["update:value","blur","focus","copy"],setup(m,{expose:P,emit:_}){var E;const o=m,g=_,p=(E=j())==null?void 0:E.uid.toString(),l=I(!1),s=I(o.value),c=d(()=>!o.disabled&&o.isTextArea),f=d(()=>o.invalid&&!o.disabled||o.keepErrorMessagePlaceholder),v=d(()=>({error:o.invalid,filled:s.value&&s.value.length>0})),N=d(()=>s.value.length>18&&o.multiLinePreview&&o.disabled),F=d(()=>({"form-group-error":o.wiggle&&!o.disabled})),S=d(()=>({"uid-label":o.isTextArea})),k=d(()=>{let a=o.label;return s.value||!o.placeholder||l.value||(a=o.placeholder),a});function x(a){s.value=a.target.value,g("update:value",s.value)}function B(){var a;p&&((a=document.getElementById(p))==null||a.focus())}function T(a){l.value=!1,g("blur",a)}function L(a){l.value=!0,g("focus",a)}function C(){o.allowCopy&&M()}function M(){g("copy")}return K(()=>o.value,a=>{s.value=a}),R(()=>{o.focus&&B()}),P({focusInput:B}),(a,$)=>(n(),i("div",{class:b(["form-group",e(F)]),onClick:C},[e(N)?(n(),i(h,{key:0},[r("div",fe,w(e(k)),1),r("p",{class:"read-only-field",id:e(p),name:e(p),title:a.label},w(e(s)),9,ve)],64)):(n(),i(h,{key:1},[e(c)?(n(),i("textarea",{key:0,disabled:a.disabled,id:e(p),value:e(s),class:b(e(v)),name:e(p),title:a.label,placeholder:a.placeholder?a.placeholder:a.label,maxLength:a.maxLength,"data-lpignore":"true",onInput:x,onFocus:L,onBlur:T},null,42,ye)):(n(),i("input",{key:1,disabled:a.disabled,id:e(p),type:"text",value:e(s),class:b(e(v)),name:e(p),title:a.label,placeholder:a.placeholder?a.placeholder:a.label,maxLength:a.maxLength,"data-lpignore":"true",onInput:x,onFocus:L,onBlur:T},null,42,me)),r("label",{for:e(p),class:b(e(S)),"data-content":e(k)},null,10,be)],64)),a.allowCopy?(n(),i("button",{key:2,class:"copy-button",onClick:M})):A("",!0),q(r("div",{class:"error-message"},w(a.errorMessage),513),[[D,e(f)]]),X(a.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-e7e4e98f"]]);export{we as P,ke as T};
