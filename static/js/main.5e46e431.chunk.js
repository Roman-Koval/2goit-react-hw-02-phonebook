(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={input:"Filter_input__2JDfA",inputFilterId:"Filter_inputFilterId__1FXeI"}},19:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),o=(n(19),n(15)),s=n(2),u=n(3),l=n(5),p=n(4),b=n(6),m=n.n(b),d=n(11),h=n(7),j=n.n(h),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("li",{className:j.a.item,children:[Object(f.jsx)("span",{className:j.a.name,children:"".concat(this.props.name,":")}),Object(f.jsx)("span",{className:j.a.number,children:this.props.number}),Object(f.jsx)("button",{type:"submit",className:j.a.button,onClick:function(){return t.props.onDeleteNumber(t.props.name)},children:"Delete"})]})}}]),n}(a.Component),C=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("ul",{children:this.props.contacts.map((function(e){return Object(f.jsx)(d.Fragment,{children:Object(f.jsx)(O,{name:e.name,number:e.number,onDeleteNumber:t.props.onDeleteContact})},e.id)}))})}}]),n}(a.Component),v=n(14),x=n(8),F=n.n(x),_=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputNameId=m.a.generate(),t.inputTelId=m.a.generate(),t.findCurrentValue=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.addContact=function(e){e.preventDefault(),t.props.filterContact.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))?alert("".concat(t.state.name," is already in contacts")):t.props.onAdd(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.addContact,className:F.a.wrap,children:[Object(f.jsxs)("label",{htmlFor:this.inputNameId,children:["Name",Object(f.jsx)("input",{className:F.a.input,onChange:this.findCurrentValue,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.inputNameId})]}),Object(f.jsxs)("label",{htmlFor:this.inputTelId,children:["Number",Object(f.jsx)("input",{className:F.a.input,onChange:this.findCurrentValue,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.inputTelId})]}),Object(f.jsx)("button",{type:"submit",className:F.a.button,children:"Add contact"})]})}}]),n}(a.Component),g=n(12),N=n.n(g),y=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).inputFilterId=m.a.generate(),t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("label",{className:N.a.inputFilterId,htmlFor:this.inputFilterId,children:["Find contacts by name",Object(f.jsx)("input",{className:N.a.input,onChange:this.props.onFilter,type:"text",value:this.props.filter,id:this.inputFilterId})]})}}]),n}(a.Component),I=(n(29),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addNewContact=function(e){var n={id:m.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(o.a)(t.contacts))}}))},t.findFilterValue=function(e){t.setState({filter:e.target.value})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.name!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)("div",{className:"wrap",children:[Object(f.jsx)("h1",{className:"title",children:"Phonebook"}),Object(f.jsx)(_,{filterContact:e,onAdd:this.addNewContact}),Object(f.jsx)("h2",{className:"title",children:"Contacts"}),Object(f.jsx)(y,{filter:this.state.filter,onFilter:this.findFilterValue}),Object(f.jsx)(C,{contacts:e,onDeleteContact:this.removeContact})]})}}]),n}(a.Component)),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),w()},7:function(t,e,n){t.exports={item:"ContactItem_item__roTtq",name:"ContactItem_name__3KAaI",button:"ContactItem_button__2ERwG"}},8:function(t,e,n){t.exports={wrap:"ContactForm_wrap__1_TIk",input:"ContactForm_input__25b2L",button:"ContactForm_button__2QQXk"}}},[[30,1,2]]]);
//# sourceMappingURL=main.5e46e431.chunk.js.map