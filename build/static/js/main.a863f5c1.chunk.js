(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(13),r=n.n(s),c=(n(35),n(7)),i=n(8),u=n(11),l=n(10),h=(n(36),n(37),n(15)),d=n(30),p=n(1),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={show:!1,event:a.props.event},a}return Object(i.a)(n,[{key:"open",value:function(e){this.setState({show:!0})}},{key:"close",value:function(e){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"event",children:[Object(p.jsx)("h3",{className:"summary",children:this.props.event.summary}),Object(p.jsx)("h3",{className:"location",children:this.props.event.location}),Object(p.jsx)("button",{type:"button",className:"button",onClick:function(){return e.open()},children:"Show Details"}),Object(p.jsxs)(h.a,{className:"details",show:this.state.show,children:[Object(p.jsxs)(h.a.Header,{children:[Object(p.jsx)(h.a.Title,{children:this.props.event.summary}),Object(p.jsx)(d.a,{className:"closing",onClick:function(){return e.close()},children:"Close"})]}),Object(p.jsxs)(h.a.Body,{children:[Object(p.jsx)("h4",{className:"location hidden",children:this.props.event.location}),Object(p.jsx)("a",{className:"link hidden",href:this.props.event.htmlLink,children:"Website"}),Object(p.jsx)("h4",{className:"description hidden",children:this.props.event.description})]})]})]})})}}]),n}(o.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(p.jsx)("li",{className:"singleEvent",children:Object(p.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.handleItemClicked=function(t){e.setState({query:t,suggestions:[]}),e.props.updateEvents(t)},e.setState({query:n,suggestions:a})},e.allCitiesAreSelected=function(t){e.setState({query:t}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(p.jsx)("ul",{className:"suggestions",children:this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)}))}),Object(p.jsx)("ul",{className:"all",children:Object(p.jsx)("li",{onClick:function(){return e.allCitiesAreSelected("all")},children:Object(p.jsx)("b",{children:"See all cities"})})})]})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={number:e.props.length},e.changeInput=function(t){var n=t.target.value;e.setState({number:n}),e.props.passNumber(n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({number:this.props.length})}},{key:"render",value:function(){var e=this.state.number;return Object(p.jsxs)("div",{className:"numberOfEvents",children:[Object(p.jsx)("h1",{children:"Number of Events:"}),Object(p.jsx)("input",{className:"eventNumberInput",type:"number",value:e,onChange:this.changeInput})]})}}]),n}(a.Component),j=n(12),w=n.n(j),g=n(14),y=n(19),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T14083200Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z1",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript 2",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z3",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z9",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun 2",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}}],O=n(18),x=n.n(O),S=n(16),Z=n.n(S),N=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},M=function(){var e=Object(g.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(w.a.mark((function e(){var t,n,a,o,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=6;break}return Z.a.done(),t=N(k),localStorage.setItem("locations",JSON.stringify(t)),e.abrupt("return",k);case 6:return e.next=8,W();case 8:if(!(n=e.sent)){e.next=20;break}return A(),a="https://k3f3961h55.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=14,x.a.get(a);case 14:if(o=e.sent,(s=o.data).events.length>32){for(r=s.events.length;r>32;r--)s.events.pop();console.log(s.events)}return s&&(t=N(s.events),localStorage.setItem("lastEvents",JSON.stringify(s)),localStorage.setItem("locations",JSON.stringify(t))),Z.a.done(),e.abrupt("return",s.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(g.a)(w.a.mark((function e(){var t,n,a,o,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,x.a.get("https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=895193534029-j1l6kr4ic9b3gc5or0gp9h38btjpfhci.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fasoudry.github.io%2Fmeet%2F");case 17:return s=e.sent,r=s.data.authUrl,e.abrupt("return",window.location.href=r);case 20:return e.abrupt("return",o&&J(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(g.a)(w.a.mark((function e(t){var n,a,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://k3f3961h55.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(n(60),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).filterEventsByCity=function(t){C().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a,number:a.length})}))},e.filterByNumber=function(t){C().then((function(n){var a=n.length;if(n.length===t)e.setState({events:n});else if(n.length>t){for(;a>t;t++)n.shift();e.setState({events:n})}}))},e.state={events:[],locations:[],number:32},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState({events:t,number:t.length,locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(v,{locations:this.state.locations,updateEvents:this.filterEventsByCity}),Object(p.jsx)(b,{length:this.state.number,passNumber:this.filterByNumber}),Object(p.jsx)(m,{events:this.state.events})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(29);r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),R.config("6a4f46985dfa486eb2f647b4c424d558").install()}},[[62,1,2]]]);
//# sourceMappingURL=main.a863f5c1.chunk.js.map