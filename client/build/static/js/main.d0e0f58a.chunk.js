(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c(1),s=c.n(j),l=c(17),a=c.n(l),i=(c(24),c(3)),b=c(2),r=c(5),O=c.n(r),h=function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],l=Object(j.useState)(!1),a=Object(b.a)(l,2),r=(a[0],a[1]);return Object(j.useEffect)((function(){O.a.get("http://localhost:8000/").then((function(e){s(e.data),r(!0)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Pet Shelter"}),Object(n.jsx)("p",{children:"These pets are looking for a good home"}),Object(n.jsx)(i.a,{to:"/pets/new",children:"add a pet to the shelter"}),Object(n.jsxs)("table",{style:{margin:"auto"},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.type}),Object(n.jsxs)("td",{children:[Object(n.jsx)(i.a,{to:"/pets/"+e._id,children:"details"}),"|",Object(n.jsx)(i.a,{to:"/pets/"+e._id+"/edit",children:"edit"})]})]},t)}))})]})]})},u=function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],l=Object(j.useState)(""),a=Object(b.a)(l,2),r=a[0],h=a[1],u=Object(j.useState)(""),o=Object(b.a)(u,2),d=o[0],x=o[1],p=Object(j.useState)(""),f=Object(b.a)(p,2),g=f[0],v=f[1],m=Object(j.useState)(""),k=Object(b.a)(m,2),y=k[0],S=k[1],C=Object(j.useState)(""),P=Object(b.a)(C,2),D=P[0],w=P[1],E=Object(j.useState)(""),T=Object(b.a)(E,2),F=T[0],A=T[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:" Pet Shelter "}),Object(n.jsx)(i.a,{to:"/",children:"back to home"}),Object(n.jsx)("p",{children:"Know a pet needing a home?"}),c.map((function(e,t){return Object(n.jsx)("p",{children:e},t)})),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.a.post("http://localhost:8000/pets/new",{name:r,type:d,desc:g,skill1:y,skill2:D,skill3:F}).then((function(e){console.log(e.data),Object(i.c)("/")})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,j=Object.keys(t);n<j.length;n++){var l=j[n];c.push(t[l].message)}s(c)}))},children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)},value:r})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Type"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:d})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Description"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:g})]}),Object(n.jsx)("p",{children:"Skills (optional)"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 1"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return S(e.target.value)},value:y})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 2"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return w(e.target.value)},value:D})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 3"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return A(e.target.value)},value:F})]}),Object(n.jsx)("input",{type:"submit",value:"Add Pet"})]})]})},o=function(e){var t=Object(j.useState)({}),c=Object(b.a)(t,2),s=c[0],l=c[1];Object(j.useEffect)((function(){O.a.get("http://localhost:8000/pets/"+e.id).then((function(e){console.log(e.data),l(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Pet Shelter"}),Object(n.jsx)(i.a,{to:"/",children:"back to home"}),Object(n.jsxs)("p",{children:["Details about: ",s.name,Object(n.jsxs)("button",{onClick:function(e){var t;t=s._id,O.a.delete("http://localhost:8000/pets/"+t).then((function(e){Object(i.c)("/")}))},children:["Adopt ",s.name]})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h3",{children:"Pet type"})," ",s.type]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("h3",{children:"Description"})," ",s.desc]}),Object(n.jsx)("h3",{children:"Skills"}),Object(n.jsx)("p",{children:s.skill1}),Object(n.jsx)("p",{children:s.skill2}),Object(n.jsx)("p",{children:s.skill3})]})},d=function(e){var t=e.id,c=Object(j.useState)([]),s=Object(b.a)(c,2),l=s[0],a=s[1],r=Object(j.useState)(""),h=Object(b.a)(r,2),u=h[0],o=h[1],d=Object(j.useState)(""),x=Object(b.a)(d,2),p=x[0],f=x[1],g=Object(j.useState)(""),v=Object(b.a)(g,2),m=v[0],k=v[1],y=Object(j.useState)(""),S=Object(b.a)(y,2),C=S[0],P=S[1],D=Object(j.useState)(""),w=Object(b.a)(D,2),E=w[0],T=w[1],F=Object(j.useState)(""),A=Object(b.a)(F,2),N=A[0],_=A[1];Object(j.useEffect)((function(){O.a.get("http://localhost:8000/pets/"+t).then((function(e){o(e.data.name),f(e.data.type),k(e.data.desc),P(e.data.skill1),T(e.data.skill2),_(e.data.skill3)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),l.map((function(e,t){return Object(n.jsx)("p",{children:e},t)})),Object(n.jsx)(i.a,{to:"/",children:"back to home"}),Object(n.jsxs)("p",{children:["Edit ",u]}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.a.put("http://localhost:8000/"+t+"/edit",{name:u,type:p,desc:m,skill1:C,skill2:E,skill3:N}).then((function(e){console.log(e.data),Object(i.c)("/")})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,j=Object.keys(t);n<j.length;n++){var s=j[n];c.push(t[s].message)}a(c)}))},children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"name",value:u,onChange:function(e){o(e.target.value)}})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Type"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"type",value:p,onChange:function(e){f(e.target.value)}})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Pet Description"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"desc",value:m,onChange:function(e){k(e.target.value)}})]}),Object(n.jsx)("p",{children:"Skills (optional)"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 1"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return P(e.target.value)},value:C})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 2"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return T(e.target.value)},value:E})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"skill 3"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(e){return _(e.target.value)},value:N})]}),Object(n.jsx)("input",{type:"submit",value:"Edit Pet"})]})]})};c(49);var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(i.b,{children:[Object(n.jsx)(h,{path:"/"}),Object(n.jsx)(u,{path:"/pets/new"}),Object(n.jsx)(o,{path:"/pets/:id"}),Object(n.jsx)(d,{path:"/pets/:id/edit"})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),j(e),s(e),l(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),p()}},[[50,1,2]]]);
//# sourceMappingURL=main.d0e0f58a.chunk.js.map