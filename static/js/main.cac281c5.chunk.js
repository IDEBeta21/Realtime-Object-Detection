(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{247:function(e,t,n){e.exports=n(274)},252:function(e,t,n){},258:function(e,t){},259:function(e,t){},267:function(e,t){},270:function(e,t){},271:function(e,t){},272:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var r=n(59),o=n.n(r),i=n(226),a=n.n(i),c=(n(252),n(5)),u=n.n(c),s=n(13),l=(n(273),n(246)),f=n(245),d=n.n(f),p=(n(272),n(8)),h=function(e,t){var n=!1,r=!1;e.forEach((function(e){var o=Object(p.a)(e.bbox,4),i=o[0],a=o[1],c=o[2],u=o[3],s=e.class;if("person"===s||"cell phone"===s){var l=Math.floor(16777215*Math.random()).toString(16);t.strokeStyle="#"+l,t.font="18px Arial",t.beginPath(),t.fillStyle="#"+l,t.fillText(s,i,a),t.rect(i,a,c,u),t.stroke(),"person"===s&&(n=!0),"cell phone"===s&&(r=!0)}})),document.getElementById("personText").innerHTML=n?"Employee is present":"Employee is not present",r&&(document.getElementById("personText").innerHTML="Employee is with a phone")};var m=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a();case 2:t=e.sent,console.log("Object model loaded."),setInterval((function(){i(t,{maxNumBoxes:1})}),10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var n=Object(s.a)(u.a.mark((function n(r){var o,i,a,c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=13;break}return o=e.current.video,i=e.current.video.videoWidth,a=e.current.video.videoHeight,e.current.video.width=i,e.current.video.height=a,t.current.width=i,t.current.height=a,n.next=10,r.detect(o);case 10:c=n.sent,s=t.current.getContext("2d"),h(c,s);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(d.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),o.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}}),o.a.createElement("div",{style:{paddingTop:500}},o.a.createElement("p",{id:"personText",style:{color:"white",fontSize:20}},"Loading...")))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.cac281c5.chunk.js.map