(this.webpackJsonpjob=this.webpackJsonpjob||[]).push([[0],{209:function(e,t,r){},210:function(e,t,r){},215:function(e,t,r){},231:function(e,t,r){},354:function(e,t,r){},355:function(e,t,r){},356:function(e,t,r){},357:function(e,t,r){},358:function(e,t,r){},359:function(e,t,r){},372:function(e,t,r){},373:function(e,t,r){},380:function(e,t,r){},390:function(e,t,r){},392:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(0),c=r.n(a),s=r(18),o=r.n(s),i=(r(209),r(210),r(34)),l=r(37),j=r(393),u=r(394),b=r(53),d=r(41),p=(r(215),function(){return Object(n.jsxs)(j.a,{gutter:[16,16],type:"flex",justify:"space-around",align:"middle",className:"full-vh",children:[Object(n.jsx)(u.a,{span:11,children:Object(n.jsx)(d.b,{to:"/candidate",children:Object(n.jsx)(b.a,{className:"user-type-button full-screen-row",children:Object(n.jsx)("span",{children:"Candidate"})})})}),Object(n.jsx)(u.a,{span:11,children:Object(n.jsx)(d.b,{to:"/recruiter/login",children:Object(n.jsx)(b.a,{className:"user-type-button full-screen-row",children:Object(n.jsx)("span",{children:"Recruiter"})})})})]})}),O=r(32),h=r(40),x=r.n(h),m=r(54),f=r(129),g=r(401),v=r(202),y=r(400),w=r(78),k=r(402),L=r(406),E=(r(231),r(150)),I=r.n(E),S={api_uri:"http://45.77.246.99:9000"},C=r(81),J={LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT"},F=r(134),T=r.n(F),N=T.a.get("auth"),_={token:N&&N.token?N.token:null,name:N&&N.name?N.name:null},D=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case J.LOGIN_SUCCESS:return e=Object(O.a)(Object(O.a)({},t),{},{token:r.token,name:r.name}),T.a.set("auth",e),e;case J.LOGOUT:return e=Object(O.a)(Object(O.a)({},t),{},{token:null,name:null}),T.a.set("auth",e),e;default:return t}},A={SET_JOBS:"SET_JOBS"},P={list:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.SET_JOBS:return Object(O.a)(Object(O.a)({},e),{},{list:t.jobs});default:return e}},U={SHOW_JOB_DETAIL:"SHOW_JOB_DETAIL",HIDE_JOB_DETAIL:"HIDE_JOB_DETAIL"},B={job:{},show:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.SHOW_JOB_DETAIL:return Object(O.a)(Object(O.a)({},e),{},{job:t.job,show:!0});case U.HIDE_JOB_DETAIL:return Object(O.a)(Object(O.a)({},e),{},{show:!1});default:return e}},q=Object(C.c)({auth:D,job:H,jobDetail:G}),R=[r(178).a],K=Object(C.d)(q,C.a.apply(void 0,R));function V(){return K.getState().auth.token}var z={get:function(){var e=Object(m.a)(x.a.mark((function e(t){var r,n,a,c,s=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=V(),a={params:r},n&&(a.headers={Authorization:n}),e.next=6,I.a.get("".concat(S.api_uri).concat(t),a);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(m.a)(x.a.mark((function e(t){var r,n,a,c,s=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=V(),a={},n&&(a.headers={Authorization:n}),e.next=6,I.a.post("".concat(S.api_uri).concat(t),r,a);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function Y(e){g.a.success({title:"Registration Success",content:Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"You can login now."})}),onOk:function(){e.push("/recruiter/login")}})}function Q(e){v.a.error({message:"Registration Error",description:e,placement:"bottomLeft"})}var X=function(){var e=y.a.Item,t=y.a.useForm(),r=Object(f.a)(t,1)[0],a=Object(i.g)(),c=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("formData:",t),e.prev=1,e.next=4,z.post("/recruiter/register",t);case 4:r.resetFields(),Y(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?Q(e.t0.response.data.message):(Q("Unknown Error"),console.error(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(y.a,Object(O.a)(Object(O.a)({},W),{},{name:"register",form:r,onFinish:c,scrollToFirstError:!0,children:[Object(n.jsx)(e,{name:"name",label:Object(n.jsxs)("span",{children:["Name\xa0",Object(n.jsx)(w.a,{title:"What do you want others to call you?",children:Object(n.jsx)(L.a,{})})]}),rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:Object(n.jsx)(k.a,{})}),Object(n.jsx)(e,{name:"email",label:"Email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(n.jsx)(k.a,{})}),Object(n.jsx)(e,{name:"password",label:"Password",rules:[{required:!0,min:6,max:30,message:"Password have to be 6-30 characters"}],hasFeedback:!0,children:Object(n.jsx)(k.a.Password,{})}),Object(n.jsx)(e,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}],children:Object(n.jsx)(k.a.Password,{})}),Object(n.jsx)(e,Object(O.a)(Object(O.a)({},M),{},{children:Object(n.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"})})),Object(n.jsx)(j.a,{justify:"center",children:Object(n.jsxs)(u.a,{span:24,children:["Already have an account?"," ",Object(n.jsx)(b.a,{type:"link",children:Object(n.jsx)(d.b,{to:"/recruiter/login",children:"Login Here"})})]})}),Object(n.jsx)(j.a,{justify:"center",children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(b.a,{type:"link",children:Object(n.jsx)(d.b,{to:"/",children:"Back To Home"})})})})]}))},Z=(r(354),function(){return Object(n.jsx)(j.a,{type:"flex",justify:"space-around",align:"middle",className:"full-vh",children:Object(n.jsx)(u.a,{xs:{span:24},sm:{span:12},lg:{span:8},xl:{span:6},children:Object(n.jsx)(X,{})})})}),$=(r(355),function(e,t){return{type:J.LOGIN_SUCCESS,name:e,token:t}}),ee={labelCol:{span:8},wrapperCol:{span:16}},te={wrapperCol:{offset:8,span:16}},re=function(){var e=Object(l.b)(),t=Object(i.g)(),r=function(){var r=Object(m.a)(x.a.mark((function r(a){var c,s,o,i,l;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Success:",a),r.prev=1,r.next=4,z.post("/recruiter/login",a);case 4:if(c=r.sent,console.log(c.data),c&&c.data&&c.data.name&&c.data.token){r.next=8;break}throw new Error("Unknown error");case 8:s=c.data,o=s.name,i=s.token,e($(o,i)),t.push("/recruiter/job-list"),r.next=18;break;case 13:r.prev=13,r.t0=r.catch(1),l="Unknown Error",r.t0&&r.t0.response&&r.t0.response.data&&r.t0.response.data.message?l=r.t0.response.data.message:console.error("Login error",r.t0),g.a.error({title:"Login Failed",content:Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:l})})});case 18:case"end":return r.stop()}}),r,null,[[1,13]])})));return function(e){return r.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(y.a,Object(O.a)(Object(O.a)({},ee),{},{name:"Login",initialValues:{remember:!0},onFinish:r,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(y.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Must be a valid email address!"}],children:Object(n.jsx)(k.a,{})}),Object(n.jsx)(y.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(k.a.Password,{})}),Object(n.jsx)(y.a.Item,Object(O.a)(Object(O.a)({},te),{},{children:Object(n.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Login"})})),Object(n.jsx)(j.a,{justify:"center",children:Object(n.jsxs)(u.a,{span:24,children:["Do not have account?"," ",Object(n.jsx)(b.a,{type:"link",children:Object(n.jsx)(d.b,{to:"/recruiter/register",children:"Register Here"})})]})}),Object(n.jsx)(j.a,{justify:"center",children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(b.a,{type:"link",children:Object(n.jsx)(d.b,{to:"/",children:"Back To Home"})})})})]}))})},ne=(r(356),function(){return Object(n.jsx)(j.a,{type:"flex",justify:"space-around",align:"middle",className:"full-vh",children:Object(n.jsx)(u.a,{xs:{span:24},sm:{span:12},lg:{span:8},xl:{span:6},children:Object(n.jsx)(re,{})})})}),ae=r(399),ce=r(201),se=r(404),oe=r(407),ie=(r(357),function(e){return{type:U.SHOW_JOB_DETAIL,job:e}}),le=r(403),je=r(395),ue=(r(358),r(359),function(e){var t=e.title,r=e.content;return Object(n.jsxs)("div",{className:"site-description-item-profile-wrapper",children:[t?Object(n.jsxs)("p",{className:"site-description-item-profile-p-label",children:[t,":"]}):null,r]})}),be=function(){var e=Object(l.c)((function(e){return e.jobDetail})),t=e.show,r=e.job,a=Object(l.b)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(le.a,{width:640,placement:"right",closable:!0,onClose:function(){a({type:U.HIDE_JOB_DETAIL})},visible:t,children:[Object(n.jsx)("p",{className:"site-description-item-profile-p",style:{marginBottom:24},children:Object(n.jsx)("h2",{children:r.title})}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u.a,{span:12,children:Object(n.jsx)(ue,{title:"Recruiter Name",content:r.recruiterName})}),Object(n.jsx)(u.a,{span:12,children:Object(n.jsx)(ue,{title:"Location",content:r.location})})]}),Object(n.jsx)(je.a,{}),Object(n.jsx)("p",{className:"site-description-item-profile-p",children:"Job Description"}),Object(n.jsx)(j.a,{children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(ue,{content:r.description})})}),Object(n.jsx)(je.a,{}),Object(n.jsx)(j.a,{children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(ue,{title:"Job Post Date",content:r.createdAt?String(new Date(r.createdAt)):"-"})})})]})})},de=function(){var e=y.a.useForm(),t=Object(f.a)(e,1)[0],r=Object(l.b)(),a=Object(l.c)((function(e){return e.auth})).name,c=ae.a.Dragger,s=function(){var e=Object(m.a)(x.a.mark((function e(r){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("formData",r),e.prev=1,e.next=4,z.post("/job/",r);case 4:t.resetFields(),v.a.success({message:"Job create SUCCESSFUL!",placement:"bottomLeft"}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),n="Unknown Error",e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?n=e.t0.response.data.message:console.error("Login error",e.t0),v.a.error({message:"Job creation FAILED!",description:n,placement:"bottomLeft"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o={accept:".txt",showUploadList:!1,beforeUpload:function(e){var r=new FileReader;return r.onload=function(e){if(!e||!e.target||!e.target.result)return ce.b.error("Failed to read file or the file is empty."),!1;t.setFieldsValue({description:e.target.result}),ce.b.success("Job description is successfully imported!")},r.readAsText(e),!1}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,{form:t,name:"create-job",onFinish:s,layout:"vertical",children:[Object(n.jsx)(y.a.Item,{name:"title",label:"Title",rules:[{required:!0,message:"Please input title!"}],children:Object(n.jsx)(k.a,{placeholder:"(e.g. Software Engineer)"})}),Object(n.jsx)(y.a.Item,{name:"location",label:"Location",rules:[{required:!0,message:"Please input location!"}],children:Object(n.jsx)(k.a,{placeholder:"(e.g. New York)"})}),Object(n.jsx)(y.a.Item,{name:"description",label:"Job Description",rules:[{required:!0,message:"Please input description!"}],children:Object(n.jsx)(k.a.TextArea,{placeholder:"Insert your job description here.",rows:20})}),Object(n.jsx)(y.a.Item,{children:Object(n.jsxs)(c,Object(O.a)(Object(O.a)({},o),{},{children:[Object(n.jsx)("p",{className:"ant-upload-drag-icon",children:Object(n.jsx)(oe.a,{})}),Object(n.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to autocomplete job description field"}),Object(n.jsx)("p",{className:"ant-upload-hint",children:"Support single .txt file only"})]}))}),Object(n.jsxs)(se.b,{size:"middle",children:[Object(n.jsx)(y.a.Item,{children:Object(n.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Submit"})}),Object(n.jsx)(y.a.Item,{children:Object(n.jsx)(b.a,{type:"secondary",onClick:function(){var e=t.getFieldsValue();e.recruiterName=a,r(ie(e))},children:"Preview"})})]})]}),Object(n.jsx)(be,{})]})},pe=(r(372),r(398)),Oe=(r(373),function(e){var t=e.selectedKey,r=void 0===t?"Create Job":t,a=Object(l.b)(),c=Object(i.g)();return Object(n.jsxs)(pe.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:r,children:[Object(n.jsx)(pe.a.Item,{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})},"Home"),Object(n.jsx)(pe.a.Item,{children:Object(n.jsx)(d.b,{to:"/recruiter/create-job",children:"Create Job"})},"Create Job"),Object(n.jsx)(pe.a.Item,{children:Object(n.jsx)(d.b,{to:"/recruiter/job-list",children:"Job List"})},"Job List"),Object(n.jsx)(pe.a.Item,{style:{float:"right"},onClick:function(){a({type:J.LOGOUT}),c.push("/")},children:"Logout"})]})}),he=r(396),xe=he.a.Header,me=he.a.Content,fe=he.a.Footer,ge=function(e){var t=e.selectedKey,r=void 0===t?"Create Job":t,a=e.children;return Object(n.jsxs)(he.a,{className:"layout",style:{minHeight:"100vh"},children:[Object(n.jsx)(xe,{children:Object(n.jsx)(Oe,{selectedKey:r})}),Object(n.jsx)(me,{style:{padding:"0 50px"},children:Object(n.jsx)("div",{className:"site-layout-content",children:a})}),Object(n.jsx)(fe,{style:{textAlign:"center"},children:"Job App \xa92020 Created by Someone"})]})},ve=(r(380),function(){return Object(n.jsx)(ge,{selectedKey:"Create Job",children:Object(n.jsx)(de,{})})}),ye=r(405),we=r(397),ke=function(e){return{type:A.SET_JOBS,jobs:e}},Le=function(){return function(){var e=Object(m.a)(x.a.mark((function e(t){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.get("/recruiter/job");case 3:r=e.sent,n=r.data||[],t(ke(n)),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),a="Unknown Error",e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?a=e.t0.response.data.message:console.error("Login error",e.t0),v.a.error({message:"Get Recruiter Job Error",description:a,placement:"bottomLeft"}),t(ke([]));case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Ee=function(e){var t=e.recruiterList,r=Object(l.c)((function(e){return e.job.list})),a=Object(l.b)(),c=function(e){var t;a((t=e._id,function(){var e=Object(m.a)(x.a.mark((function e(r){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.post("/job/close",{jobObjId:t});case 3:v.a.success({message:"Job Deleted!",placement:"bottomLeft"}),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),n="Unknown Error",e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?n=e.t0.response.data.message:console.error("Login error",e.t0),v.a.error({message:"Close Job Failed",description:n,placement:"bottomLeft"});case 11:return e.prev=11,r(Le()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,6,11,14]])})));return function(t){return e.apply(this,arguments)}}()))},s=function(e){var r=[Object(n.jsx)(b.a,{type:"link",onClick:function(){!function(e){a(ie(e))}(e)},children:"View Job"})];return t&&r.push(Object(n.jsx)(ye.a,{title:"Are you sure delete this job?",onConfirm:function(){c(e)},okText:"Yes",cancelText:"No",children:Object(n.jsx)(b.a,{type:"danger",children:"Close"})})),r};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(we.b,{dataSource:r,bordered:!0,renderItem:function(e){return Object(n.jsx)(we.b.Item,{actions:s(e),children:Object(n.jsx)(we.b.Item.Meta,{title:e.title,description:"".concat(e.recruiterName||""," - ").concat(e.location||"")})},e.id)}}),Object(n.jsx)(be,{})]})},Ie=(r(390),function(){var e=Object(l.b)();return Object(a.useEffect)((function(){e(Le())})),Object(n.jsx)(ge,{selectedKey:"Job List",children:Object(n.jsx)(Ee,{recruiterList:!0})})}),Se=function(){var e=he.a.Header,t=he.a.Content,r=he.a.Footer,c=Object(l.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(m.a)(x.a.mark((function e(t){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.get("/job");case 3:r=e.sent,n=r.data||[],t(ke(n)),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),a="Unknown Error",e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?a=e.t0.response.data.message:console.error("Login error",e.t0),v.a.error({message:"Get Job Error",description:a,placement:"bottomLeft"}),t(ke([]));case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())})),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(he.a,{className:"layout",style:{minHeight:"100vh"},children:[Object(n.jsx)(e,{children:Object(n.jsxs)(pe.a,{theme:"dark",mode:"horizontal",children:[Object(n.jsx)(pe.a.Item,{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})},"1"),Object(n.jsx)(pe.a.Item,{children:Object(n.jsx)(d.b,{to:"/candidate",children:"Candidate View Job"})},"2")]})}),Object(n.jsx)(t,{style:{padding:"0 50px"},children:Object(n.jsx)("div",{className:"site-layout-content",children:Object(n.jsx)(Ee,{})})}),Object(n.jsx)(r,{style:{textAlign:"center"},children:"Job App \xa92020 Created by Someone"})]})})};var Ce=function(){var e=Object(l.c)((function(e){return Boolean(e.auth.token)}));return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/",component:p}),Object(n.jsx)(i.b,{path:"/candidate",component:Se}),Object(n.jsx)(i.b,{path:"/recruiter/register",render:function(){return e?Object(n.jsx)(i.a,{to:"/recruiter/job-list"}):Object(n.jsx)(Z,{})}}),Object(n.jsx)(i.b,{path:"/recruiter/login",render:function(){return e?Object(n.jsx)(i.a,{to:"/recruiter/job-list"}):Object(n.jsx)(ne,{})}}),Object(n.jsx)(i.b,{path:"/recruiter/create-job",render:function(){return e?Object(n.jsx)(ve,{}):Object(n.jsx)(i.a,{to:"/recruiter/login"})}}),Object(n.jsx)(i.b,{path:"/recruiter/job-list",render:function(){return e?Object(n.jsx)(Ie,{}):Object(n.jsx)(i.a,{to:"/recruiter/login"})}}),Object(n.jsx)(i.b,{path:"/",component:function(){return Object(n.jsx)(i.a,{to:"/"})}})]})})},Je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,408)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};r(391);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(l.a,{store:K,children:Object(n.jsx)(d.a,{children:Object(n.jsx)(Ce,{})})})}),document.getElementById("root")),Je()}},[[392,1,2]]]);
//# sourceMappingURL=main.81e0e17f.chunk.js.map