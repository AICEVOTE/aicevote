!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define(["axios"],e):"object"==typeof exports?exports.aicevote=e(require("axios")):t.aicevote=e(t.axios)}(this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(3));e.default=o.default.create({baseURL:"https://api.aicevote.com",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"})},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(2)),r(n(4)),r(n(5)),r(n(6)),r(n(7))},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function s(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0));e.getSessionToken=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/auth/sessiontoken?sessionid="+t)];case 1:return[2,e.sent().data.sessionToken];case 2:throw e.sent();case 3:return[2]}}))}))}},function(e,n){e.exports=t},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function s(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0));e.getAllThemes=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s.default.get("/themes")];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.getTheme=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/themes/"+t)];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},e.postFeedback=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.post("/feedback?message="+t)];case 1:return e.sent(),[2];case 2:throw e.sent();case 3:return[2]}}))}))},e.postApplication=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.post("/application?message="+t)];case 1:return e.sent(),[2];case 2:throw e.sent();case 3:return[2]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function s(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0));e.getAllArticles=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s.default.get("/news/articles")];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.getRelatedArticles=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/news/articles/"+t)];case 1:return[2,e.sent().data.articles];case 2:throw e.sent();case 3:return[2]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function s(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0));e.getMyProfile=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/user/profiles/?sessiontoken="+t)];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},e.getProfiles=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.post("/user/profiles",t)];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},e.getProfile=function(t,e){return r(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.default.get("/user/"+t+"/"+e)];case 1:return[2,n.sent().data];case 2:throw n.sent();case 3:return[2]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function s(t){try{a(r.next(t))}catch(t){u(t)}}function i(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,i)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0));e.getAllResults=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s.default.get("/vote/results")];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.getResult=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/vote/results/"+t)];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},e.getAllVotes=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/vote/votes?sessiontoken="+t)];case 1:return[2,e.sent().data.map((function(t){return t.votes.concat(t.votesFromInfluencer)}))];case 2:throw e.sent();case 3:return[2]}}))}))},e.getVotes=function(t,e){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.default.get("/vote/votes/"+t+"?sessiontoken="+e)];case 1:return[2,(n=r.sent().data).votes.concat(n.votesFromInfluencer)];case 2:throw r.sent();case 3:return[2]}}))}))},e.vote=function(t,e,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,s.default.put("/vote/votes/"+t+"?sessiontoken="+e+"&answer="+n)];case 1:return[2,(r=o.sent().data).votes.concat(r.votesFromInfluencer)];case 2:throw o.sent();case 3:return[2]}}))}))},e.getAllTransitions=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s.default.get("/vote/transitions")];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.getTransition=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/vote/transitions/"+t)];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},e.getAllComments=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s.default.get("/vote/comments")];case 1:return[2,t.sent().data.map((function(t){return t.comments}))];case 2:throw t.sent();case 3:return[2]}}))}))},e.getComments=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.default.get("/vote/comments/"+t)];case 1:return[2,e.sent().data.comments];case 2:throw e.sent();case 3:return[2]}}))}))},e.comment=function(t,e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.default.post("/vote/comments/"+t+"?sessiontoken="+e+"&message="+n)];case 1:return[2,r.sent().data.comments];case 2:throw r.sent();case 3:return[2]}}))}))}}])}));