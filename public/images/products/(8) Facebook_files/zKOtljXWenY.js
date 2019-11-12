if (self.CavalryLogger) { CavalryLogger.start_js(["Jp3SL"]); }

__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_ALL:"photos_all",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",SUPPORTERS:"supporters",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TIMELINE:"timeline",TRIBUTES:"tributes",TIMELINE_OVERVIEW:"grid",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_FOOD_DRINK_PAST_ORDERS:"food_drink_past_orders",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",PAGE_COLLECTIONS:"collections",CAST_AND_CREW:"cast_and_crew",COMMUNITY:"community",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",INSTAGRAM:"instagram",LOYALTY:"loyalty",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"}}),null);
__d("RoyalBluebarTransitions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INDETERMINATE:"Indeterminate",PULSE:"Pulse",SHIMMER:"Shimmer",NONE:"none",OFF:"off",PULSE_GIF_2S:"pulse_gif1",PULSE_GIF_2S_DARKER:"pulse_gif2",PULSE_GIF_3S:"pulse_gif3"})}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","RoyalBluebarTransitions","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!==b("RoyalBluebarTransitions").OFF&&k!==b("RoyalBluebarTransitions").NONE;function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){this._subscriptionHandler.release(),this._subscriptionHandler=null}.bind(this)));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k===b("RoyalBluebarTransitions").INDETERMINATE){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("NotificationBeeperConst",["keyMirror"],(function(a,b,c,d,e,f){a={IDLE_DELAY:1e4,ACTIVE_DELAY_LONG:4e3,FADE_OUT_LENGTH:1500,BeepStates:b("keyMirror")({PENDING:!0,RENDERED:!0,READY_TO_HIDE:!0,FADING_OUT:!0})};e.exports=a}),null);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setInstanceID=function(a){this.$1.instance_id=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPostID=function(a){this.$1.post_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={instance_id:!0,page_id:!0,post_id:!0,time:!0,tq_bot_detection_product_enum:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MessengerDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("TidyArbiter",["TidyArbiterMixin"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("TidyArbiterMixin"));e.exports=a}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","DocumentTitle","PageNavigationStageLogger","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","RoyalBluebarTransitions","URI","UserAgent_DEPRECATED","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("QuicklingConfig").version,i,j="";c=babelHelpers.inherits(a,b("AjaxPipeRequest"));g=c&&c.prototype;function a(a,c){"use strict";__p&&__p();var d={version:h};g.constructor.call(this,a,c,{quickling:d});this._processFirstResponse=function(a){var c=a.getPayload();k(c.title);window.scrollTo(0,0);a=a.getRequest();a&&document.body&&!c.isCometResponse&&(document.body.className=c.body_class||"");b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};this._isQuickling=!0}a.prototype._preBootloadFirstResponse=function(a){"use strict";return!0};a.prototype._fireDomContentCallback=function(){"use strict";this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),g._fireDomContentCallback.call(this)};a.prototype._fireOnloadCallback=function(){"use strict";var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));g._fireOnloadCallback.call(this)};a.prototype.isPageActive=function(a){"use strict";return b("Quickling").isPageActive(a)};a.prototype._versionCheck=function(a){"use strict";__p&&__p();if(a.version==h){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("PageNavigationStageLogger").setCookieForNavigation(a.uri);b("PageNavigationStageLogger").setNote("quickling_version");b("PageNavigationStageLogger").updateCookie();b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(b("URI"))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};a.prototype.getSanitizedParameters=function(){"use strict";return["quickling"]};a.prototype._getAsyncRequestType=function(){"use strict";return b("QuicklingFetchStreamConfig").experimentName!==b("RoyalBluebarTransitions").OFF?"useFetchWithIframeFallback":"useIframeTransport"};function k(a){a=a||"Facebook",b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(j=a,i||(i=window.setInterval(function(){var a=j,c=b("DocumentTitle").get();a!=c&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a={addHandler:function(a){g.push(a)},augmentURI:function(a){var c=[],d=new(b("URI"))(a);g.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});g=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageNavigationStageLogger","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").sessionLength,h=new RegExp(b("QuicklingConfig").inactivePageRegex),i=0,j=!1,k={init:function(){if(j)return;j=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(m,1)})},isActive:function(){return j},isPageActive:function(a){__p&&__p();if(a==="#")return!1;a=new(b("URI"))(a);if(a.getDomain()&&a.getDomain()!=new(b("URI"))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(b("URI"))(unescape(c)).getDomain();if(c&&c!=new(b("URI"))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();b("isEmpty")(a)||(c+="?"+b("PHPQuerySerializer").serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!h.test(c)},getLoadCount:function(){return i},transitionHandler_DO_NOT_USE:m};function l(){i++;return i>=g}function m(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);if(l()){b("PageNavigationStageLogger").setNote("quickling_refresh");return!1}a=b("QuicklingAugmenter").augmentURI(a);if(!k.isPageActive(a)){b("PageNavigationStageLogger").setNote("quickling_inactive");return!1}b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";n(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function n(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=k;a.Quickling=k}),null);
__d("NotificationSound",["Sound"],(function(a,b,c,d,e,f){__p&&__p();var g=5e3;b("Sound").init(["audio/mpeg"]);function a(a){this._soundPath=a,this._lastPlayed=0}Object.assign(a.prototype,{play:function(a){if(!this._soundPath)return;var c=Date.now();if(c-this._lastPlayed<g)return;this._lastPlayed=c;b("Sound").playOnlyIfImmediate(this._soundPath,a,!1)}});e.exports=a}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.supportsReaction=function(a){"use strict";return!!b("UFIReactionsKeyframesAssets").reactions[a]};a.prototype.render=function(){"use strict";var a=this.props,c=a.animate,d=a.className,e=a.maxSize;a=a.reactionID;var f=b("UFIReactionsKeyframesAssets").initialProgress[a]||0,g=b("UFIReactionsKeyframesAssets").reactions[a];return g?b("React").createElement(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[a].name,className:d,source:g,width:e,height:e,playing:c,initialProgress:f,resetOnPause:!0}):b("React").createElement("div",{style:{width:e,height:e}})};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this._input=a,this._listener=null}a.prototype.enable=function(){this._registerListener()};a.prototype._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Search")}})};a.prototype.disable=function(){this._listener&&this._listener.remove(),this._listener=null};a.prototype._handleKeydown=function(a){this._input.focus();return!1};e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){this.reset(),this.subscriptions=new(b("SubscriptionsHandler"))(),this.placeholder=d,this.searchInput=a,this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a),this.loadingIndicator=c,this.shortcutHandler.enable(),this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){this.requestSearch(),this.showLoadingIndicator()}.bind(this)),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(a){return a.preventDefault()})),e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this))),b("Run").onUnload(this.reset.bind(this)),this.isInitialized=!0,(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("FacebarStructuredFragment",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){if(a&&b)return a.toLowerCase()==b.toLowerCase();else return!a&&!b}var h=new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");function a(a){this._text=String(a.text),this._uid=a.uid?String(a.uid):null,this._type=a.type?String(a.type):null,this._typeParts=null,this._isLocal=Boolean(a.isLocal),this._categoryName=a.categoryName?a.categoryName:null}a.prototype.getText=function(){return this._text};a.prototype.getUID=function(){return this._uid};a.prototype.getType=function(){return this._type};a.prototype.getTypePart=function(a){return this._getTypeParts()[a]};a.prototype.getLength=function(){return this._text.length};a.prototype.isType=function(a){for(var b=0;b<arguments.length;b++)if(!g(arguments[b],this.getTypePart(b)))return!1;return!0};a.prototype.isLocal=function(){return this._isLocal};a.prototype.getCategoryName=function(){return this._categoryName};a.prototype.isWhitespace=function(){return/^\s*$/.test(this._text)};a.prototype.hasRTL=function(){return h.test(this._text)};a.prototype.toStruct=function(){return{text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName}};a.prototype.getHash=function(a){a=a!=null?this._getTypeParts().slice(0,a).join(":"):this._type;return String(a)+"::"+this._text};a.prototype._getTypeParts=function(){var a=this._typeParts;a==null&&(a=this._type!=null?this._type.split(":"):[],this._typeParts=a);return a};e.exports=a}),null);
__d("FacebarStructuredText",["FacebarStructuredFragment","createArrayFromMixed"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/\s+$/;function h(a){if(!a)return[];else if(a instanceof k)return a.toArray();else return b("createArrayFromMixed")(a).map(function(a){return new(b("FacebarStructuredFragment"))(a)})}function i(a){return new(b("FacebarStructuredFragment"))({text:a,type:"text"})}function j(a,c,d){var e=a.getText();c=e.replace(c,d);if(e!=c)return new(b("FacebarStructuredFragment"))({text:c,type:a.getType(),uid:a.getUID()});else return a}function k(a){this._fragments=a||[],this._hash=null}k.prototype.matches=function(a,b){if(a){var c=this._fragments,d=a._fragments;return c.length==d.length&&!c.some(function(a,c){var e;!b&&a.getUID()?e=a.getUID()!=d[c].getUID():e=a.getText()!=d[c].getText()||a.getType()!=d[c].getType();return e||a.isLocal()!=d[c].isLocal()})}return!1};k.prototype.trim=function(){var a=null,b=null;this.forEach(function(c,d){c.isWhitespace()||(a===null&&(a=d),b=d)});if(b!==null){var c=this._fragments.slice(a,b+1);c.push(j(c.pop(),g,""));return new k(c)}else return new k([])};k.prototype.pad=function(){var a=this.getFragment(-1);if(a&&!g.test(a.getText())&&a.getText()!=="")return new k(this._fragments.concat(i(" ")));else return this};k.prototype.forEach=function(a){this._fragments.forEach(a);return this};k.prototype.matchType=function(a){var b=null;for(var c=0;c<this._fragments.length;c++){var d=this._fragments[c],e=d.isType.apply(d,arguments);if(e&&!b)b=d;else if(e||!d.isWhitespace())return null}return b};k.prototype.hasType=function(a){var b=arguments;return this._fragments.some(function(a){return!a.isWhitespace()&&a.isType.apply(a,b)})};k.prototype.isLocal=function(){return this._fragments.some(function(a){return a.isLocal()})};k.prototype.getCategoryName=function(){var a=this._fragments.filter(function(a){return a.getCategoryName()});return a.length>0?a[0].getCategoryName():null};k.prototype.endsOnType=function(a){var b=arguments,c=this._fragments[this._fragments.length-1];return!!c&&!c.isWhitespace()&&c.isType.apply(c,b)};k.prototype.isEmptyOrWhitespace=function(){return!this._fragments.some(function(a){return!a.isWhitespace()})};k.prototype.hasRTL=function(){return this._fragments.some(function(a){return a.hasRTL()})};k.prototype.isEmpty=function(){return this.getLength()===0};k.prototype.getFragment=function(a){return this._fragments[a>=0?a:this._fragments.length+a]};k.prototype.getCount=function(){return this._fragments.length};k.prototype.getLength=function(){return this._fragments.reduce(function(a,b){return a+b.getLength()},0)};k.prototype.toStruct=function(){return this._fragments.map(function(a){return a.toStruct()})};k.prototype.toArray=function(){return this._fragments.slice()};k.prototype.toString=function(){return this._fragments.map(function(a){return a.getText()}).join("")};k.prototype.getHash=function(){this._hash===null&&(this._hash=this._fragments.map(function(a){if(a.getUID())return"[["+a.getHash(1)+"]]";else return a.getText()}).join(""));return this._hash};k.fromStruct=function(a){return new k(h(a))};k.fromString=function(a){return new k([i(a.toString())])};e.exports=k}),null);
__d("FacebarNavigation",["csx","Arbiter","DOMQuery","FacebarBootloader","FacebarStructuredText","FlipDirection","Input","QueryHistory","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j=null,k=!1,l=!0,m=!1,n=!0;function o(a,b){m||(j=a),m=!1,k=b,l=!1,p()}function p(){if(l)return;else i?(k&&i.pageTransition(),i.setPageQuery(j),l=!0):h&&j&&!b("Input").getValue(h)&&b("Input").setValue(h,j.structure.toString()+" ");h!=null&&(b("FlipDirection").setDirection(h),h.blur())}b("Arbiter").subscribe("page_transition",function(a,c){!q.isTopControlTransition(c.uri)&&!q.isTimelineAbout(c.uri)&&n&&o(b("QueryHistory").get(c.uri),!0)});b("Arbiter").subscribe("save_facebar_query",function(a,b){m=!0});var q={registerInput:function(a){h=b("DOMQuery").scry(a,"._586f")[0],h==null&&(h=b("DOMQuery").scry(a,"._1frb")[0]),p()},registerBehavior:function(a){i=a,p()},disablePageTransitionReset:function(){n=!1},setPageQuery:function(a){b("QueryHistory").set(b("URI").getNextURI(),a),a.structure instanceof b("FacebarStructuredText")||(a.structure=b("FacebarStructuredText").fromStruct(a.structure)),o(a,!1),b("FacebarBootloader").requestSearch()},isTopControlTransition:function(a){return String(a.getPath()).startsWith("/search/")&&a.getQueryData().ref==="top_filter"&&!a.getQueryData().hard_refresh},isTimelineAbout:function(a){return/\/about$/.test(a.getPath())&&!a.getQueryData().hard_refresh}};e.exports=q}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={appendToWindow:function(a,c,d,e,f){__p&&__p();e===void 0&&(e=null);f===void 0&&(f=null);var g=window.document.body;try{var h="fbsbx-sig-iframe-detection";if(g.getElementsByClassName(h).length!==0)return;var i=window.document.createElement("iframe");b("Style").apply(i,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});i.id="fbsbx-sig-iframe-"+a;i.className=h;i.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(i,function(){__p&&__p();i.sandbox="allow-scripts allow-same-origin";var g="https://s.update.fbsbx.com/2/843748/utils.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(g+="&sn="+d);e!=null&&e!==""&&(g+="&c1="+e);f!=null&&f!==""&&(g+="&c3="+f);g=new(b("URI"))(g);var h=i.contentWindow.document,j="fbsbx-sig-iframe-form-"+a,k=g.toString();g=g.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var l="";for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&(l+="<input "+('name="'+m+'" ')+'type="hidden" autocomplete="off" '+('value="'+g[m]+'" />'));h.body.innerHTML='<form method="GET" id='+j+">"+l+"</form>";l=h.getElementById(j);l.action=k}else{h.body.innerHTML='<form method="GET" id='+j+"></form>";l=h.getElementById(j);l.action=k;for(var n in g)if(Object.prototype.hasOwnProperty.call(g,n)){k=h.createElement("input");k.name=n;k.value=g[n];k.autocomplete="off";k.type="hidden";l.appendChild(k)}}h.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+j+"\").submit()'/>;"});g.appendChild(i)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("coalesce",[],(function(a,b,c,d,e,f){function a(){for(var a=0;a<arguments.length;++a)if((a<0||arguments.length<=a?void 0:arguments[a])!=null)return a<0||arguments.length<=a?void 0:arguments[a];return null}e.exports=a}),null);