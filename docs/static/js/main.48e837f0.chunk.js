(this["webpackJsonpcarro-de-compras"]=this["webpackJsonpcarro-de-compras"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(8),c=r.n(o),i=(r(13),r(6)),s=r(2),u=r(3),l=r(5),b=r(4),p=r(0),d={button:{backgroundColor:"#0A283E",color:"#fff",padding:"15px 20px",border:"none",borderRadius:"5px",cursor:"pointer"}},j=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("button",Object(i.a)({style:d.button},this.props))}}]),r}(n.Component),h=j,O={producto:{border:"solid 1px #eee",boxShadow:"0 5px 5px rgb(0, 0, 0, 0.1)",whidth:"30%",padding:"10px 15px",borderRadius:"5px"},img:{width:"100%"}},f=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.producto,r=e.agregarAlCarro;return Object(p.jsxs)("div",{style:O.producto,children:[Object(p.jsx)("img",{style:O.img,alt:t.name,src:t.img}),Object(p.jsxs)("h3",{children:[" ",t.name," "]}),Object(p.jsxs)("p",{children:[" ",t.price," "]}),Object(p.jsx)(h,{onClick:function(){return r(t)},children:"Agregar al Carro"})]})}}]),r}(n.Component),x=f,g={productos:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},m=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.productos,r=e.agregarAlCarro;return Object(p.jsx)("div",{style:g.productos,children:t.map((function(e){return Object(p.jsx)(x,{agregarAlCarro:r,producto:e},e.name)}))})}}]),r}(n.Component),y=m,v={layout:{backgroundColor:"#fff",color:"#0A283E",alignItems:"center",display:"flex",flexDirection:"column"},container:{width:"1200px"}},C=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("div",{style:v.layout,children:Object(p.jsx)("div",{style:v.container,children:this.props.children})})}}]),r}(n.Component),k=C,w={title:{marginBotton:"30px"}},A=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("h1",{style:w.title,children:"Tienda"})}}]),r}(n.Component),S=A,V={logo:{fontWeight:"700",fontSize:"2rem"}},T=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("div",{style:V.logo,children:"Shop"})}}]),r}(n.Component),I=T,R={bubbleAlert:{backgroundColor:"#E9725A",borderRadius:"15px",color:"#fff",padding:"2px 10px",fontSize:"0.9rem",width:"20px"}},B=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getNumber",value:function(e){return e?e>9?"9+":e:""}},{key:"render",value:function(){var e=this.props.value;return Object(p.jsx)("span",{style:R.bubbleAlert,children:this.getNumber(e)})}}]),r}(n.Component),D=B,E={detallesCarro:{backgroundColor:"#fff",position:"absolute",marginTop:30,boxShadow:"1px 5px 5px rgb(0,0,0,0.3)",borderRadius:"5px",width:"300px",right:50},imagen:{width:50,height:32},ul:{margin:0,padding:0},producto:{listStylesType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"25px 20px",borderBottom:"solid 1px #aaa"}},F=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.carro;return Object(p.jsx)("div",{style:E.detallesCarro,children:Object(p.jsx)("ul",{style:E.ul,children:e.map((function(e){return Object(p.jsxs)("li",{style:E.producto,children:[Object(p.jsx)("img",{style:E.imagen,alt:e.name,src:e.img}),e.name,Object(p.jsx)("span",{children:e.cantidad})," "]},e.name)}))})})}}]),r}(n.Component),L=F,z={carro:{backgroundColor:"#359A2C",color:"#fff",border:"none",padding:"15px",borderRadius:"15px",cursor:"pointer"},bubble:{position:"relative",left:12,top:20}},J=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.esCarroVisible,n=e.mostrarCarro,a=t.reduce((function(e,t){return e+t.cantidad}),0);return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{style:z.bubble,children:0!==a?Object(p.jsx)(D,{value:a}):null}),Object(p.jsx)("button",{onClick:n,style:z.carro,children:"Carro"}),r?Object(p.jsx)(L,{carro:t}):null]})}}]),r}(n.Component),N=J,P={navbar:{display:"flex",flexDirection:"row",alignItems:"center",height:"100px",justifyContent:"space-between",position:"relative",padding:"0 50px",boxShadow:"0 2px 3px rgb(0, 0, 0, 0.1)"}},M=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.esCarroVisible,n=e.mostrarCarro;return Object(p.jsxs)("nav",{style:P.navbar,children:[Object(p.jsx)(I,{}),Object(p.jsx)(N,{carro:t,esCarroVisible:r,mostrarCarro:n})]})}}]),r}(n.Component),W=M,q=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={productos:[{name:"Tomate",price:1500,img:"/productos/tomate.jpg"},{name:"Arbejas",price:2500,img:"/productos/arbejas.jpg"},{name:"Lechuga",price:500,img:"/productos/lechuga.jpg"}],carro:[],esCarroVisible:!1},e.agregarAlCarro=function(t){var r=e.state.carro;if(r.find((function(e){return e.name===t.name}))){var n=r.map((function(e){return e.name===t.name?Object(i.a)(Object(i.a)({},e),{},{cantidad:e.cantidad+1}):e}));return e.setState({carro:n})}return e.setState({carro:e.state.carro.concat(Object(i.a)(Object(i.a)({},t),{},{cantidad:1}))})},e.mostrarCarro=function(){e.state.carro.length&&e.setState({esCarroVisible:!e.state.esCarroVisible})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state.esCarroVisible;return Object(p.jsxs)("div",{children:[Object(p.jsx)(W,{carro:this.state.carro,esCarroVisible:e,mostrarCarro:this.mostrarCarro}),Object(p.jsxs)(k,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(y,{agregarAlCarro:this.agregarAlCarro,productos:this.state.productos})]})]})}}]),r}(n.Component),G=q,H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),H()}},[[15,1,2]]]);
//# sourceMappingURL=main.48e837f0.chunk.js.map