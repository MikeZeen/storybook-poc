import{d as m,c as d,t as y,n as u,o as g}from"./iframe-DMLvAPuL.js";import"./preload-helper-PPVm8Dsz.js";const o=m({__name:"PocButton",props:{label:{},type:{default:"secondary"}},emits:["button-pressed"],setup(e,{emit:t}){const n=t;return(B,s)=>(g(),d("button",{class:u(["px-4 py-2 rounded-lg cursor-pointer",e.type=="primary"?"bg-primary text-white hover:bg-primary-hover":"bg-transparent text-primary border border-primary hover:text-primary-hover hover:border-primary-hover"]),onClick:s[0]||(s[0]=v=>n("button-pressed"))},y(e.label),3))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"PocButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]}}],events:[{name:"button-pressed"}],sourceFiles:["/home/runner/work/storybook-poc/storybook-poc/src/components/PocButton.vue"]});const{expect:i,fn:c,userEvent:p,within:l}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"radio",options:["primary","secondary"]}}},r={args:{label:"Primary Button",type:"primary","onButton-pressed":c()},play:async({canvasElement:e,args:t})=>{const n=l(e);await p.click(n.getByRole("button")),await i(t["onButton-pressed"]).toHaveBeenCalledTimes(1)}},a={args:{label:"Secondary Button",type:"secondary","onButton-pressed":c()},play:async({canvasElement:e,args:t})=>{const n=l(e);await p.click(n.getByRole("button")),await i(t["onButton-pressed"]).toHaveBeenCalledTimes(2)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    type: 'primary',
    'onButton-pressed': fn()
  },
  // Hier wird der Interaktionstest für die Primary Variante definiert (Button Click -> Ein Emit wird erwartet damit der Test erfolgreich ist)
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1);
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    'onButton-pressed': fn()
  },
  // Hier wird ein Fehlerhafter Interaktionstest für die Secondary Variante definiert (Button Click -> Zwei Emits werden erwartet damit der Test erfolgreich ist)
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(2); // Nutzen 2 damit es fehlschlägt um zu zeigen was dann passiert
  }
}`,...a.parameters?.docs?.source}}};const h=["Primary","Secondary"];export{r as Primary,a as Secondary,h as __namedExportsOrder,f as default};
