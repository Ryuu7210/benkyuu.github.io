import{a as m}from"./chunk-6DNQN2UF.js";import{c as k}from"./chunk-AKUHYGUK.js";k();var l=t=>Array.isArray(t)?m.random(t[0],t[1]):t,C=(t,i)=>{i=i.toUpperCase();do{if(t==null)break;if(t.nodeName===i)return!0}while((t=t.parentNode)!==null);return!1},x=(t,i)=>{var a;if(i.move.includes("emit")){let{emitRadius:e=[50,180]}=(a=i.moveOptions)!==null&&a!==void 0?a:{},o=m.random(0,360)*Math.PI/180;e=l(e);let s=[-1,1][m.random(0,1)]*e;t.endPos={x:t.x+s*Math.cos(o),y:t.y+s*Math.sin(o)}}},P=(t,i)=>{var a;if(i.move.includes("rotate")){let{angle:e=[-180,180]}=(a=i.moveOptions)!==null&&a!==void 0?a:{};t.endRotation=l(e)}},A=class{constructor(t,i,a,e,o,s,n){this.ctx=t,this.x=i,this.y=a,this.color=e,this.radius=o,this.alpha=s,this.lineWidth=n,this.rotation=0}draw(){let{ctx:t,x:i,y:a}=this;t.save(),t.translate(i,a),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha,this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill()),t.globalAlpha=1,t.restore()}},I=class extends A{paint(){this.ctx.beginPath(),this.ctx.arc(0,0,this.radius,0,2*Math.PI)}},L=class extends A{constructor(t,i,a,e,o,s,n,r){super(t,i,a,e,o,s,r),this.sides=n}paint(){let{ctx:t,sides:i,radius:a}=this;t.beginPath(),t.moveTo(a*Math.cos(0),a*Math.sin(0));for(let e=1;e<=i;e++){let o=e*2*Math.PI/i;t.lineTo(a*Math.cos(o),a*Math.sin(o))}t.closePath()}},T=class extends A{constructor(t,i,a,e,o,s,n,r){super(t,i,a,e,o,s,r),this.spikes=n}paint(){let{ctx:t,spikes:i,radius:a}=this;t.beginPath(),t.moveTo(0,0-a);for(let e=0;e<i*2;e++){let o=e*Math.PI/i-Math.PI/2,s=e%2===0?a:a*.5,n=Math.cos(o)*s,r=Math.sin(o)*s;t.lineTo(n,r)}t.closePath()}},R=(t,i,a,e)=>{let o=l(e.number),{radius:s,alpha:n=100,lineWidth:r}=e.shapeOptions;Array.isArray(n)?n=n.map(c=>c*100):n*=100;let u=[];for(let c=0;c<o;c++){let h=new I(t,i,a,e.colors[m.random(0,e.colors.length-1)],l(s),l(n)/100,l(r));x(h,e),P(h,e),u.push(h)}return u},z=(t,i,a,e)=>{let o=l(e.number),{radius:s,alpha:n=100,lineWidth:r}=e.shapeOptions;Array.isArray(n)?n=n.map(h=>h*100):n*=100;let u=l(e.shapeOptions.spikes),c=[];for(let h=0;h<o;h++){let d=new T(t,i,a,e.colors[m.random(0,e.colors.length-1)],l(s),l(n)/100,u,l(r));x(d,e),P(d,e),c.push(d)}return c},D=(t,i,a,e)=>{let o=l(e.number),{radius:s,alpha:n=100,lineWidth:r}=e.shapeOptions;Array.isArray(n)?n=n.map(h=>h*100):n*=100;let u=[],c=l(e.shapeOptions.sides);for(let h=0;h<o;h++){let d=new L(t,i,a,e.colors[m.random(0,e.colors.length-1)],l(s),l(n)/100,c,l(r));x(d,e),P(d,e),u.push(d)}return u},p=document.createElement("canvas");p.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999",document.body.appendChild(p);var g=p.getContext("2d"),E=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",O=0,W=0,w=()=>{p.width=document.documentElement.clientWidth*2,p.height=document.documentElement.clientHeight*2,p.style.width=document.documentElement.clientWidth+"px",p.style.height=document.documentElement.clientHeight+"px";let t=p.getContext("2d");t.setTransform(1,0,0,1,0,0),t.scale(2,2)},S=t=>{O=t.clientX||t.touches&&t.touches[0].clientX,W=t.clientY||t.touches&&t.touches[0].clientY},H=t=>{var i,a,e,o;let{move:s}=t,n={};if(s.includes("emit")){let{radius:r=.1,alphaChange:u=!1,alphaEasing:c="linear",alphaDuration:h=[600,800]}=(i=t.moveOptions)!==null&&i!==void 0?i:{},{alpha:d=0}=(a=t.moveOptions)!==null&&a!==void 0?a:{};Array.isArray(d)?d=d.map(v=>v*100):d*=100;let f={};u&&(f={alpha:{value:l(d)/100,easing:c,duration:l(h)}}),n={...n,x:v=>v.endPos.x,y:v=>v.endPos.y,radius:l(r),...f}}else if(s.includes("diffuse")){let{diffuseRadius:r=[80,160],lineWidth:u=0,alphaEasing:c="linear",alphaDuration:h=[600,800]}=(e=t.moveOptions)!==null&&e!==void 0?e:{},{alpha:d=0}=(o=t.moveOptions)!==null&&o!==void 0?o:{};Array.isArray(d)?d=d.map(f=>f*100):d*=100,n={...n,radius:l(r),lineWidth:l(u),alpha:{value:l(d)/100,easing:c,duration:l(h)}}}return s.includes("rotate")&&(n={...n,rotation:r=>r.endRotation}),n},X=t=>{for(let i of t)i.draw()},Y=m({duration:1/0,update(){g.clearRect(0,0,p.width,p.height)}}),y=null,M=null,b=t=>{M=t,y&&document.removeEventListener(E,y,!1),y=i=>{for(let a of t.excludeElements)if(C(i.target,a))return;Y.play(),S(i),N(O,W)},document.addEventListener(E,y,!1),w(),window.removeEventListener("resize",w,!1),window.addEventListener("resize",w,!1)},N=(t,i)=>{if(!M)return;let{particles:a}=M,e=m().timeline();for(let o of a){let{duration:s,easing:n}=o,r=[];o.shape==="circle"?r=R(g,t,i,o):o.shape==="star"?r=z(g,t,i,o):o.shape==="polygon"&&(r=D(g,t,i,o));let u=H(o);e.add({targets:r,duration:l(s),easing:n,update:X,...u})}e.play()},U=t=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>b(t),{passive:!0}):b(t)};export{U as default};/*! For license information please see index.esm-4CXAK2CM.js.LEGAL.txt */
