!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):"object"==typeof exports?exports.aicevote=t(require("axios")):e.aicevote=t(e.axios)}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(3));t.default=s.default.create({baseURL:"https://api.aicevote.com",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"})},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(2)),r(n(4)),r(n(5)),r(n(6))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(0));t.getSessionToken=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/auth/sessiontoken",{withCredentials:!0})];case 1:return[2,e.sent().data.sessionToken];case 2:throw e.sent();case 3:return[2]}}))}))}},function(t,n){t.exports=e},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(0));t.getAllThemes=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/themes")];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},t.getTheme=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/themes/"+e)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},t.getMyProfile=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/profiles/?sessiontoken="+e)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},t.getProfiles=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.post("/profiles",e)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},t.getProfile=function(e,t){return r(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,u.default.get("/profiles/"+e+"/"+t)];case 1:return[2,n.sent().data];case 2:throw n.sent();case 3:return[2]}}))}))},t.postFeedback=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/feedback?message="+e)];case 1:return t.sent(),[2];case 2:throw t.sent();case 3:return[2]}}))}))},t.postApplication=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/application?message="+e)];case 1:return t.sent(),[2];case 2:throw t.sent();case 3:return[2]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(0));t.getAllArticles=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/news/articles")];case 1:return[2,e.sent().data];case 2:throw e.sent();case 3:return[2]}}))}))},t.getRelatedArticles=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/news/articles/"+e)];case 1:return[2,t.sent().data.articles];case 2:throw t.sent();case 3:return[2]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(0));t.getAllResults=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/vote/results")];case 1:return[2,e.sent().data.map((function(e){return{results:e.results,counts:e.counts}}))];case 2:throw e.sent();case 3:return[2]}}))}))},t.getResult=function(e){return r(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,u.default.get("/vote/results/"+e)];case 1:return[2,{results:(t=n.sent().data).results,counts:t.counts}];case 2:throw n.sent();case 3:return[2]}}))}))},t.getAllVotes=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/vote/votes?sessiontoken="+e)];case 1:return[2,t.sent().data.map((function(e){return e.votes.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})).concat(e.votesFromInfluencer.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})))}))];case 2:throw t.sent();case 3:return[2]}}))}))},t.getVotes=function(e,t){return r(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.default.get("/vote/votes/"+e+"?sessiontoken="+t)];case 1:return[2,(n=r.sent().data).votes.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})).concat(n.votesFromInfluencer.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})))];case 2:throw r.sent();case 3:return[2]}}))}))},t.vote=function(e,t,n){return r(this,void 0,void 0,(function(){var r;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,u.default.get("/vote/votes/"+e+"?sessiontoken="+t+"&answer="+n)];case 1:return[2,(r=s.sent().data).votes.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})).concat(r.votesFromInfluencer.map((function(e){return{answer:e.answer,userProvider:e.userProvider,userID:e.userID}})))];case 2:throw s.sent();case 3:return[2]}}))}))},t.getAllTransitions=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/vote/transitions")];case 1:return[2,e.sent().data.map((function(e){return{shortTransition:e.shortTransition,longTransition:e.longTransition}}))];case 2:throw e.sent();case 3:return[2]}}))}))},t.getTransition=function(e){return r(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,u.default.get("/vote/transitions/"+e)];case 1:return[2,{shortTransition:(t=n.sent().data).shortTransition,longTransition:t.longTransition}];case 2:throw n.sent();case 3:return[2]}}))}))},t.getAllComments=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,u.default.get("/vote/comments")];case 1:return[2,e.sent().data.map((function(e){return e.comments.map((function(e){return{message:e.message,userProvider:e.userProvider,userID:e.userID,createdAt:e.createdAt}}))}))];case 2:throw e.sent();case 3:return[2]}}))}))},t.getComments=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.default.get("/vote/comments/"+e)];case 1:return[2,t.sent().data.comments.map((function(e){return{message:e.message,userProvider:e.userProvider,userID:e.userID,createdAt:e.createdAt}}))];case 2:throw t.sent();case 3:return[2]}}))}))},t.comment=function(e,t,n){return r(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.default.post("/vote/comments/"+e+"?sessiontoken="+t+"&message="+n)];case 1:return[2,r.sent().data.comments.map((function(e){return{message:e.message,userProvider:e.userProvider,userID:e.userID,createdAt:e.createdAt}}))];case 2:throw r.sent();case 3:return[2]}}))}))}}])}));