(this["webpackJsonpgoit-react-hw-02-feedback-final"]=this["webpackJsonpgoit-react-hw-02-feedback-final"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={list:"FeedbackOptions_list__2gO4S"}},,,function(e,t,a){e.exports={container:"App_container__1hnMr"}},function(e,t,a){e.exports={list:"Statistics_list__3ckVQ"}},function(e,t,a){e.exports={titleSection:"Section_titleSection__1_TFN"}},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),o=a(1),s=a(2),l=a(3),u=a(5),d=a(4),p=a(10),m=a.n(p),b=a(6),f=a(11),k=function(e){var t=e.message;return c.a.createElement("p",null,t,"!")},v=function(e){var t=e.option,a=e.value;return c.a.createElement("p",null,t,": ",a)},h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).options=Object.keys(e.props.statistics),e.countTotalFeedback=function(){return e.options.reduce((function(t,a){return e.props.statistics[a]+t}),0)},e.countPositiveFeedbackPercentage=function(){return"".concat(Math.round(e.props.statistics.good/e.countTotalFeedback()*100),"%")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.statistics,t=Object(b.a)(Object(b.a)({},e),{},{total:this.countTotalFeedback(),"positive feedback":this.countPositiveFeedbackPercentage()}),a=Object.keys(t);return c.a.createElement(c.a.Fragment,null,0!==t.total?c.a.createElement("ul",{className:f.list},a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(v,{option:e,value:t[e]}))}))):c.a.createElement(k,{message:"No feedback given"}))}}]),a}(n.Component),E=a(7),g=function(e){var t=e.option,a=e.onAddFeedback;return c.a.createElement("button",{type:"button",onClick:a,name:t},t)},O=function(e){var t=e.statistics,a=e.onAddFeedback,n=Object.keys(t);return c.a.createElement("ul",{className:E.list},n.map((function(e){return c.a.createElement("li",{key:e,className:E.item},c.a.createElement(g,{option:e,onAddFeedback:a}))})))},F=a(12),j=function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:F.titleSection},c.a.createElement("h2",null,t),a)},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:m.a.container},c.a.createElement("h1",null,"goit-react-hw-02-feedback"),c.a.createElement(j,{title:"Please leave feedback"},c.a.createElement(O,{statistics:this.state,onAddFeedback:this.addFeedback})),c.a.createElement(j,{title:"Statistics"},c.a.createElement(h,{statistics:this.state}))))}}]),a}(n.Component);i.a.render(c.a.createElement(y,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2d9743fa.chunk.js.map