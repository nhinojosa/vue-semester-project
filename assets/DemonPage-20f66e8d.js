import{u as r,r as l,b as m,d as i,o as a,c as o,e as t,a as n,t as u,f as _,g as d}from"./index-d7cc45c9.js";const p={class:"min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins"},f={key:0,class:"flex flex-col items-center justify-center gap-6"},h=["src","alt"],g={class:"text-white-800 text-6xl font-bold"},D={__name:"DemonPage",setup(x){const{fetchDemon:c,currentDemon:e}=d(),s=r();return l(""),m(async()=>{await c(s.params.id),console.log(s.params.id)}),i(()=>{e.value=null}),(b,y)=>(a(),o("main",p,[t(e)?(a(),o("div",f,[n("img",{class:"p-8 h-64 w-64",src:t(e).image,alt:t(e).name},null,8,h),n("h1",g,u(t(e).name),1)])):_("",!0)]))}};export{D as default};
