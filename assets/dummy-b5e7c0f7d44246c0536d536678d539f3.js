define("dummy/app",["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],function(e,t,n,a,s){"use strict";var l=e["default"],i=t["default"],r=n["default"],u=a["default"];l.MODEL_FACTORY_INJECTIONS=!0;var h=l.Application.extend({modulePrefix:u.modulePrefix,podModulePrefix:u.podModulePrefix,Resolver:i});r(h,u.modulePrefix),s["default"]=h}),define("dummy/controllers/test",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Controller.extend({width:10,height:20,margin:"10px",marginTop:"1",isShown:!0,isLarge:!1})}),define("dummy/helpers/bind-style",["ember","with-style-mixin/core/style-bindings-meta","exports"],function(e,t,n){"use strict";function a(e){return e=null===e||void 0===e?"":""+e,e.replace(/[&<>'"]/g,function(e){return u[e]})}function s(){var e=[].slice.call(arguments),t=e.pop(),n=t.data.view,s=new i(this,e),u=++r;return s.addListener(function(){var e;!n||n.isDestroying||n.isDestroyed||!(e=n.$("[data-bindstyle-"+u+'="'+u+'"]')).length?(s.destroy(),s=null):e.attr("style",s.getStyle())}),l.addListener(n,"willClearRender",s,"destroy"),l.addListener(n,"willDestroyElement",s,"destroy"),l.run.once(s,"startObserving"),new l.Handlebars.SafeString('style="'+a(s.getStyle())+'" data-bindstyle-'+u+'="'+u+'"')}var l=e["default"],i=t["default"],r=0,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};n.bindStyle=s,n["default"]=s}),define("dummy/router",["ember","dummy/config/environment","exports"],function(e,t,n){"use strict";var a=e["default"],s=t["default"],l=a.Router.extend({location:s.locationType});l.map(function(){this.route("test")}),n["default"]=l}),define("dummy/routes/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Route.extend({setupController:function(e){e.setProperties({borderWidth:2,borderStyle:"dashed",fontPercent:100,appPaddingTop:20})}})}),define("dummy/templates/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,l){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),l=l||{};var i,r,u,h="",o=a.helperMissing,p=this.escapeExpression;return l.buffer.push('<div class="social-networks-bar">\n  <iframe\n      src="http://ghbtns.com/github-btn.html?user=huafu&repo=with-style-mixin&type=watch&count=true"\n      allowtransparency="true" frameborder="0" scrolling="0" width="80" height="20"></iframe>\n  <iframe\n      src="//platform.twitter.com/widgets/follow_button.html?screen_name=huafu_g"\n      style="width: 240px; height: 20px;"\n      allowtransparency="true"\n      frameborder="0"\n      scrolling="no">\n  </iframe>\n</div>\n\n<h1>with-style-mixin</h1>\n\n<section '),l.buffer.push(p((r=a["bind-style"]||t&&t["bind-style"],u={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t,t],types:["STRING","STRING","STRING"],data:l},r?r.call(t,"border-width[px] border-style","asInlineBlock:display?inline-block:","fontPercent:font-size[%]",u):o.call(t,"bind-style","border-width[px] border-style","asInlineBlock:display?inline-block:","fontPercent:font-size[%]",u)))),l.buffer.push(">\n  <pre>\n    <code lang=\"handlebars\">\n      &lt;section {{bind-style 'border-width[px] border-style'\n        'asInlineBlock:display?inline-block:' 'fontPercent:font-size[%]'}}&gt;...&lt;/section&gt;\n    </code>\n  </pre>\n  <div>\n    <label>borderWidth = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"borderWidth"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n    <label>borderStyle = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"borderStyle"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n    <label>fontPercent = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"fontPercent"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n    <label>asInlineBlock = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{type:"checkbox",checked:"asInlineBlock"},hashTypes:{type:"STRING",checked:"ID"},hashContexts:{type:t,checked:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  </div>\n</section>\n\n<section>\n  <pre>\n    <code lang=\"javascript\">\nimport Ember from 'ember';\nimport WithStyleMixin from 'with-style-mixin/mixins/with-style';\n\nexport default Ember.View.extend(WithStyleMixin, {\n  styleBindings: [\n    'controller.appPaddingTop:padding-top[px]',\n    'bgColor:background-color'\n  ],\n\n  bgColor: 'inherit',\n\n  // ...\n});\n    </code>\n  </pre>\n  <label>appPaddingTop = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"appPaddingTop"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <label>view.bgColor = "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"view.bgColor"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n</section>\n"),i=a._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(i||0===i)&&l.buffer.push(i),l.buffer.push("\n"),h})}),define("dummy/templates/test",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,a,s,l){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.Handlebars.helpers),l=l||{};var i,r,u,h="",o=a.helperMissing,p=this.escapeExpression;return l.buffer.push('<h2 id="test1" '),l.buffer.push(p((r=a["bind-style"]||t&&t["bind-style"],u={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t,t,t],types:["STRING","STRING","STRING","STRING"],data:l},r?r.call(t,"width[px]","height[%]","margin[pt]","margin-top[em]",u):o.call(t,"bind-style","width[px]","height[%]","margin[pt]","margin-top[em]",u)))),l.buffer.push('>\n  Welcome to Ember.js\n</h2>\n\n\n<div class="inputs">\n  <label>width: '),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"width",id:"width"},hashTypes:{value:"ID",id:"STRING"},hashContexts:{value:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <label>height: "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"height",id:"height"},hashTypes:{value:"ID",id:"STRING"},hashContexts:{value:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <label>margin: "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"margin",id:"margin"},hashTypes:{value:"ID",id:"STRING"},hashContexts:{value:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <label>margin-top: "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{value:"marginTop",id:"marginTop"},hashTypes:{value:"ID",id:"STRING"},hashContexts:{value:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <hr/>\n  <label>myDisplay: "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{type:"checkbox",checked:"isShown",id:"isShown"},hashTypes:{type:"STRING",checked:"ID",id:"STRING"},hashContexts:{type:t,checked:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push("</label>\n  <label>isLarge: "),l.buffer.push(p((r=a.input||t&&t.input,u={hash:{type:"checkbox",checked:"isLarge",id:"isLarge"},hashTypes:{type:"STRING",checked:"ID",id:"STRING"},hashContexts:{type:t,checked:t,id:t},contexts:[],types:[],data:l},r?r.call(t,u):o.call(t,"input",u)))),l.buffer.push('</label>\n</div>\n\n\n<div id="test2" '),l.buffer.push(p((r=a["bind-style"]||t&&t["bind-style"],u={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:l},r?r.call(t,"isShown:display?:none isLarge:font-weight?bold:",u):o.call(t,"bind-style","isShown:display?:none isLarge:font-weight?bold:",u)))),l.buffer.push(">\n  wooot\n</div>\n\n"),i=a._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:l}),(i||0===i)&&l.buffer.push(i),l.buffer.push("\n"),h})}),define("dummy/views/application",["ember","with-style-mixin/mixins/with-style","exports"],function(e,t,n){"use strict";var a=e["default"],s=t["default"];n["default"]=a.View.extend(s,{styleBindings:["controller.appPaddingTop:padding-top[px]","bgColor:background-color"],bgColor:"inherit",initHljs:function(){"undefined"!=typeof hljs&&a.run.schedule("afterRender",this,function(){this.$("pre code").each(function(e,t){hljs.highlightBlock(t)})})}.on("didInsertElement")})}),define("dummy/config/environment",["ember"],function(e){var t="dummy/config/environment",n=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({});