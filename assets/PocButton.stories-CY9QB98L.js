import{d as c,c as i,t as m,n as p,o as l}from"./iframe-DmsWLzhj.js";import"./preload-helper-PPVm8Dsz.js";const o=c({__name:"PocButton",props:{label:{},type:{default:"secondary"}},emits:["click"],setup(t,{emit:n}){const s=n;return(y,a)=>(l(),i("button",{class:p(["px-4 py-2 rounded-lg cursor-pointer",t.type=="primary"?"bg-primary text-white hover:bg-primary-hover":"bg-transparent text-primary border border-primary hover:text-primary-hover hover:border-primary-hover"]),onClick:a[0]||(a[0]=d=>s("click"))},m(t.label),3))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"PocButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/storybook-poc/storybook-poc/src/components/PocButton.vue"]});const g={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"radio",options:["primary","secondary"]}}},e={args:{label:"Primary Button",type:"primary",onClick:()=>alert("Primary Button Clicked!")}},r={args:{label:"Secondary Button",type:"secondary",onClick:()=>alert("Secondary Button Clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    type: 'primary',
    onClick: () => alert('Primary Button Clicked!')
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    onClick: () => alert('Secondary Button Clicked!')
  }
}`,...r.parameters?.docs?.source}}};const k=["Primary","Secondary"];export{e as Primary,r as Secondary,k as __namedExportsOrder,g as default};
