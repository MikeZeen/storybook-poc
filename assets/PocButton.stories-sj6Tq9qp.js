import{d as m,c as y,t as d,n as u,o as B}from"./iframe-DiyDc4ly.js";import"./preload-helper-PPVm8Dsz.js";const o=m({__name:"PocButton",props:{label:{},type:{default:"secondary"}},emits:["button-pressed"],setup(e,{emit:n}){const t=n;return(v,s)=>(B(),y("button",{class:u(["px-4 py-2 rounded-lg cursor-pointer",e.type=="primary"?"bg-primary text-white hover:bg-primary-hover":"bg-transparent text-primary border border-primary hover:text-primary-hover hover:border-primary-hover"]),onClick:s[0]||(s[0]=b=>t("button-pressed"))},d(e.label),3))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"PocButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]}}],events:[{name:"button-pressed"}],sourceFiles:["/home/runner/work/storybook-poc/storybook-poc/src/components/PocButton.vue"]});const{expect:c,fn:p,userEvent:i,within:l}=__STORYBOOK_MODULE_TEST__,w={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"radio",options:["primary","secondary"]}}},a={args:{label:"Primary Button",type:"primary","onButton-pressed":p()},play:async({canvasElement:e,args:n})=>{const t=l(e);await i.click(t.getByRole("button")),await c(n["onButton-pressed"]).toHaveBeenCalledTimes(1)}},r={args:{label:"Secondary Button",type:"secondary","onButton-pressed":p()},play:async({canvasElement:e,args:n})=>{const t=l(e);await i.click(t.getByRole("button")),await c(n["onButton-pressed"]).toHaveBeenCalledTimes(1)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    type: 'primary',
    'onButton-pressed': fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1);
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    'onButton-pressed': fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1);
  }
}`,...r.parameters?.docs?.source}}};const x=["Primary","Secondary"];export{a as Primary,r as Secondary,x as __namedExportsOrder,w as default};
