(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(21)},19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var r=a(6),i=a(0),n=a.n(i),s=a(10),o=a.n(s),c=(a(19),a(3)),l=a(4),u=a(7),h=a(5),d=a(1),g=a(8),m=(a(20),function(t){return n.a.createElement("div",{className:"hr-pointer",style:{top:t.position.y,left:t.position.x,backgroundColor:t.color}})}),f=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={clickPosition:null,color:"#444444"},a.gradient=n.a.createRef(),a.drawGradient=a.drawGradient.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.getCanvasPosition=a.getCanvasPosition.bind(Object(d.a)(a)),a.getClickPosition=a.getClickPosition.bind(Object(d.a)(a)),a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"rgbToHex",value:function(t,e,a){if(!(t>255||e>255||a>255))return(t<<16|e<<8|a).toString(16)}},{key:"getCanvasPosition",value:function(){var t=this.gradient.current,e=t.offsetLeft,a=t.offsetTop;if(t.offsetParent){for(var r=t.offsetParent;r;)e+=r.offsetLeft,a+=r.offsetTop,r=r.offsetParent;return{x:e,y:a}}}},{key:"getClickPosition",value:function(t){var e=this.getCanvasPosition(),a=e.x,r=e.y,i=t.pageX-a,n=t.pageY-r;return this.setState({clickPosition:{x:t.pageX-15,y:t.pageY-r+5}}),{x:i,y:n}}},{key:"fitToContainer",value:function(t){return t.style.width="100%",t.style.height="100%",t.width=t.offsetWidth,t.height=t.offsetHeight,{width:t.width,height:t.height}}},{key:"drawGradient",value:function(){var t=this.gradient.current,e=this.fitToContainer(t).width/1.1,a=t.getContext("2d"),r=a.createLinearGradient(0,0,e,0);r.addColorStop(0,"#16348e"),r.addColorStop(.4,"#61c9fc"),r.addColorStop(.6,"#ffffff"),r.addColorStop(.75,"#fae729"),r.addColorStop(.9,"#fa6c0a"),r.addColorStop(1,"#fc0c00"),a.fillStyle=r,a.fillRect(0,0,t.width,t.height)}},{key:"componentDidMount",value:function(){this.drawGradient(),window.addEventListener("resize",this.drawGradient)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.drawGradient)}},{key:"handleClick",value:function(t){var e=this.gradient.current,a=this.getClickPosition(t),i=a.x,n=a.y,s=e.getContext("2d").getImageData(i,n,1,1).data,o=Object(r.a)(s,3),c=o[0],l=o[1],u=o[2],h="#".concat(this.rgbToHex(c,l,u));this.setState({color:h});var d={color:h,location:a,width:this.gradient.current.width};this.props.onDiagramClick(d)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hr-diagram"},n.a.createElement("canvas",{className:"hr-gradient",ref:this.gradient,onClick:this.handleClick}),this.state.clickPosition&&n.a.createElement(m,{position:this.state.clickPosition,color:this.state.color})))}}]),e}(n.a.Component),p=a(23),b=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.setState({clickLocation:t.location,color:t.color})}},{key:"hexToRgb",value:function(t){var e=parseInt(t,16);return{r:e>>16&255,b:255&e,g:e>>8&255}}},{key:"numberToBase10Exponent",value:function(t){var e=parseFloat(t).toExponential().split("e").map(function(t){return parseFloat(t)}),a=Object(r.a)(e,2);return{coefficient:a[0],exponent:a[1]}}},{key:"render",value:function(){var t=this.props,e=t.color,a=t.description,r=t.diameter,i=t.starClass,s=t.luminosity,o=t.temperature,c=t.mass,l=this.hexToRgb(e.slice(1)),u=l.r,h=l.g,d=l.b,g=this.numberToBase10Exponent(s),m=g.coefficient,f=g.exponent;return m=m.toString().slice(0,4),n.a.createElement(p.a,{className:"star-view"},n.a.createElement(p.a.Header,{className:"star-visual-backdrop"},n.a.createElement("div",{className:"star-visual",style:{backgroundColor:e,width:r,height:r,boxShadow:"0 0 5px 5px rgba(".concat(u,",").concat(h,",").concat(d,",0.5)")}})),n.a.createElement(p.a.Body,{className:"star-info"},n.a.createElement(p.a.Title,null,"".concat(i," Star")),n.a.createElement(p.a.Text,{key:"description"},n.a.createElement("strong",null,"Description: "),a),n.a.createElement(p.a.Text,{key:"mass"},n.a.createElement("strong",null,"Mass: "),"".concat(c,"M"),n.a.createElement("sub",null,"\u2609")),n.a.createElement(p.a.Text,{key:"luminosity"},n.a.createElement("strong",null,"Luminosity: "),"".concat(m," x "),"10",n.a.createElement("sup",null,f),"L",n.a.createElement("sub",null,"\u2609")),n.a.createElement(p.a.Text,{key:"temperature"},n.a.createElement("strong",null,"Temperature: "),"".concat(o,"K"))))}}]),e}(n.a.Component),S=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).state={clickLocation:null,color:null,scale:null},a.getStarClass=a.getStarClass.bind(Object(d.a)(a)),a.getStarMass=a.getStarMass.bind(Object(d.a)(a)),a.getStarLuminosity=a.getStarLuminosity.bind(Object(d.a)(a)),a.getStarTemperature=a.getStarTemperature.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.renderStar=a.renderStar.bind(Object(d.a)(a)),a}return Object(g.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.setState({clickLocation:t.location,color:t.color,scale:t.width})}},{key:"getStarLuminosity",value:function(t){var e=parseFloat(this.state.scale);return Math.pow(10,t/e*11.4-5.05)}},{key:"_getLuminosityClass",value:function(t){return t<45/142?"D":t<59/142?"VI":t<73/142?"V":t<83/142?"IV":t<92/142?"III":t<102/142?"II":t<116/142?"Ib":t<132/142?"Ia":"Ia-O"}},{key:"_getStarClass",value:function(t,e,a,r){return Math.floor(711/r*(t-a)+1).toString()+this._getLuminosityClass(e)}},{key:"getStarClass",value:function(t,e){var a=this.state.scale,r=t/a,i=e/a;return r<18/79?"O"+this._getStarClass(r,i,0,18):r<39/79?"B"+this._getStarClass(r,i,18/79,21):r<46/79?"A"+this._getStarClass(r,i,39/79,7):r<50/79?"F"+this._getStarClass(r,i,46/79,4):r<58/79?"G"+this._getStarClass(r,i,50/79,8):r<67/79?"K"+this._getStarClass(r,i,58/79,9):"M"+this._getStarClass(r,i,67/79,12)}},{key:"_getStarTemperature",value:function(t,e,a,r,i,n){var s=n*((e-a*t)/(r*t));return Math.round(i+s)}},{key:"getStarTemperature",value:function(t,e){var a=this.state.scale,r=a-t;return e.startsWith("O")?this._getStarTemperature(a,r,61/79,18/79,28e3,22e3):e.startsWith("B")?this._getStarTemperature(a,r,40/79,21/79,1e4,18e3):e.startsWith("A")?this._getStarTemperature(a,r,33/79,7/79,7500,2500):e.startsWith("F")?this._getStarTemperature(a,r,29/79,4/79,6e3,1500):e.startsWith("G")?this._getStarTemperature(a,r,21/79,8/79,5e3,1e3):e.startsWith("K")?this._getStarTemperature(a,r,12/79,9/79,3500,1500):e.startsWith("M")?this._getStarTemperature(a,r,0,12/79,1300,2200):void 0}},{key:"_getStarMass",value:function(t,e,a,r,i){return r+128/a*(t-e)*i}},{key:"getStarMass",value:function(t){var e=t/this.state.scale;return e<30/128?this._getStarMass(e,0,30,0,.1).toFixed(1):e<.3125?this._getStarMass(e,30/128,10,.1,.2).toFixed(1):e<.4375?this._getStarMass(e,.3125,12,.3,.7).toFixed(1):e<.5?this._getStarMass(e,.4375,8,1,.5).toFixed(1):e<79/128?this._getStarMass(e,.5,15,1.5,1.5).toFixed(1):e<89/128?this._getStarMass(e,79/128,10,3,3).toFixed(1):e<.78125?this._getStarMass(e,89/128,11,6,4).toFixed(1):e<117/128?this._getStarMass(e,.78125,17,10,20).toFixed(1):e<.953125?this._getStarMass(e,117/128,5,30,60).toFixed(1):this._getStarMass(e,.953125,6,60,240).toFixed(1)}},{key:"getDescription",value:function(t){var e=t.charAt(0),a=t.slice(2),r="";switch(e){case"O":r+="Blue";break;case"B":r+="Blue-White";break;case"A":r+="White";break;case"F":r+="Yellow-White";break;case"G":r+="Yellow";break;case"K":r+="Orange";break;case"M":r+="Red"}switch(r+=" ",a){case"D":case"VI":r+="Subdwarf";break;case"V":r+="Main-Sequence/Dwarf Star";break;case"IV":r+="Subgiant Star";break;case"III":r+="Giant Star";break;case"II":r+="Bright Giant";break;case"Ib":r+="Supergiant";break;case"Ia":r+="Luminous Supergiant";break;case"Ia-O":r+="Hypergiant"}return r}},{key:"renderStar",value:function(){var t=this.state,e=t.color,a=t.clickLocation,r=t.scale;if(!e||!a)return null;var i=a.x,s=a.y,o=parseInt(i),c=r-parseInt(s),l=.6*(.4*o+c)+25,u=this.getStarLuminosity(c),h=this.getStarClass(o,c),d=this.getStarTemperature(o,h),g={color:e,description:this.getDescription(h),diameter:l,temperature:d,luminosity:u,starClass:h,mass:parseFloat(this.getStarMass(c))};return n.a.createElement(b,g)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"title"},"HR Digaram Visualizer"),n.a.createElement("div",{className:"diagram-container"},n.a.createElement(f,{onDiagramClick:this.handleClick})),n.a.createElement("div",{className:"star-container"},this.state.color&&this.renderStar()))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));if("object"===typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)for(var k=0,v=Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__);k<v.length;k++){var y=v[k],C=Object(r.a)(y,2),O=C[0],_=C[1];window.__REACT_DEVTOOLS_GLOBAL_HOOK__[O]="function"==typeof _?function(){}:null}o.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.401a1de3.chunk.js.map