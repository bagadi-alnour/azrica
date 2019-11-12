if (self.CavalryLogger) { CavalryLogger.start_js(["H\/fWc"]); }

__d("ChatSidebarPageListContainerWrapper.react",["cx","fbt","Arbiter","ChatOptions","ChatSidebarHeader.react","ChatSidebarPageListContainer.react","ChatSidebarSections","React","SRLink.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={hideAdminedPages:this.props.hideAdminedPagesInitial},b}a.prototype.componentDidMount=function(){b("Arbiter").subscribe("chat/option-changed",function(a,c){a=c.name;a==="hide_admined_pages"&&this.setState({hideAdminedPages:b("ChatOptions").getSetting("hide_admined_pages")})}.bind(this)),b("Arbiter").subscribe("sidebar/typeahead/active",function(a,b){this.setState({hideAdminedPages:b})}.bind(this))};a.prototype.render=function(){var a=3;if(this.props.adminedPages.length===0||this.state.hideAdminedPages)return null;var c=null;this.props.adminedPages.length>=a&&(c=b("React").createElement(b("SRLink.react"),{className:"_2l56",target:"_blank",href:this.props.yourPagesURI},h._("SEE ALL")));return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("ChatSidebarHeader.react"),{className:"_4kqp",key:b("ChatSidebarSections").ADMINED_PAGES},b("React").createElement("div",{className:"_ohe lfloat"},h._("YOUR PAGES")),b("React").createElement("div",{className:"_ohf rfloat"},c)),b("React").createElement(b("ChatSidebarPageListContainer.react"),{adminedPages:this.props.adminedPages,key:"pages_section"}))};e.exports=a}),null);
__d("ContextualLayerInlineTabOrder",["DOM","DOMTraverser","Event","Focus","Keys","SubscriptionsHandler","TabbableElements","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._layer=a,this._isSetup=!1,this._ignoreFocus=!1,this._layerFocused=!0,this._layerRoot=this._layer.getContentRoot(),this._layerID=b("getOrCreateDOMID")(this._layerRoot),this._mutedTabbables=new Map([]),this._subscriptions=new(b("SubscriptionsHandler"))(),this._tabbableLayerElements=[]}a.prototype.enable=function(){"use strict";this._subscriptions.addSubscriptions(this._layer.subscribe("aftershow",this._onAfterShow.bind(this)),this._layer.subscribe("hide",this._onAfterHide.bind(this))),this._layer.isShown()&&this._onAfterShow()};a.prototype.disable=function(){"use strict";this._subscriptions.release(),this._isSetup=!1};a.prototype._getContext=function(){"use strict";return this._layer.getCausalElement()};a.prototype._getContextOwns=function(){"use strict";var a=this._getContext();if(!a)return[];a=(a.getAttribute("aria-owns")||"").trim();a=a?a.match(/[^ ]+/g):[];return a};a.prototype._identifyTabbableElements=function(){"use strict";this._tabbableLayerElements=b("TabbableElements").find(this._layerRoot),!this._tabbableLayerElements.length&&!this._mutedTabbables.size&&this._layerRoot.setAttribute("tabindex","0"),this._layerRoot.tabIndex>=0&&this._tabbableLayerElements.unshift(this._layerRoot)};a.prototype._onAfterShow=function(){"use strict";this._setupTabBehavior();var a=this._getContext(),b=this._getContextOwns();a&&!b.includes(this._layerID)&&(b.push(this._layerID),a.setAttribute("aria-owns",b.join(" ")))};a.prototype._onAfterHide=function(){"use strict";var a=this._getContext();if(a){var b=this._getContextOwns(),c=b.indexOf(this._layerID);c>-1&&(b.splice(c,1),a.setAttribute("aria-owns",b.join(" ")))}};a.prototype._setupTabBehavior=function(){"use strict";if(!this._isSetup){var a=this._getContext();if(!this._layerRoot||!a)return;this._setupTabTriggers();this._setupTabToggle();this._isSetup=!0}};a.prototype._setupTabTriggers=function(){"use strict";var a=this._getContext();b("TabbableElements").isTabbable(a)||a.setAttribute("tabindex","0");this._subscriptions.addSubscriptions(b("Event").listen(a,"keyup",this._checkNUXFocus.bind(this)),b("Event").listen(a,"keydown",this._checkNUXFocus.bind(this)),b("Event").listen(this._layerRoot,"keydown",this._checkContextFocus.bind(this)),b("Event").listen(this._layerRoot,"layerFocus",this._setNUXFocusStart.bind(this)),b("Event").listen(this._layerRoot,"layerFocusEnd",this._setNUXFocusEnd.bind(this)),b("Event").listen(this._layerRoot,"tempFocusIgnore",this._tempIgnoreFocus.bind(this)))};a.prototype._setupTabToggle=function(){"use strict";this._handleLayerBlur(),this._subscriptions.addSubscriptions(b("Event").listen(document.documentElement,"click",this._checkForFocus.bind(this)),b("Event").listen(document.documentElement,"keydown",this._checkForFocus.bind(this)))};a.prototype._handleLayerBlur=function(){"use strict";__p&&__p();if(!this._layerFocused)return;this._identifyTabbableElements();this._tabbableLayerElements.forEach(function(a){if(!this._mutedTabbables.has(a)){var b=a.getAttribute("tabindex");a.setAttribute("tabindex","-1");this._mutedTabbables.set(a,b)}},this);this._layerFocused=!1};a.prototype._handleLayerFocus=function(){"use strict";__p&&__p();if(this._layerFocused)return;for(var a=this._mutedTabbables,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;var e=d[0];d=d[1];d===null?e.removeAttribute("tabindex"):e.setAttribute("tabindex",d)}this._mutedTabbables.clear();this._layerFocused=!0};a.prototype._checkNUXFocus=function(a){"use strict";__p&&__p();if(this._ignoreFocus){a.preventDefault();this._ignoreFocus=!1;return}if(a.getTarget()!==this._getContext()||!this._layer.isShown())return;var c=b("Event").getKeyCode(a),d=this._getContextOwns();if(!d.length||c!==b("Keys").TAB)return;c=a.getModifiers();c=c.shift;var e=d[0]===this._layerID;d=d[d.length-1]===this._layerID;(a.type==="keydown"&&c&&d||a.type==="keyup"&&!c&&e)&&(a.preventDefault(),b("Event").fire(this._layerRoot,c?"layerFocusEnd":"layerFocus"))};a.prototype._setNUXFocusStart=function(){"use strict";this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[0])};a.prototype._setNUXFocusEnd=function(){"use strict";this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[this._tabbableLayerElements.length-1])};a.prototype._tempIgnoreFocus=function(){"use strict";this._ignoreFocus=!0};a.prototype._checkContextFocus=function(a){"use strict";__p&&__p();var c=b("Event").getKeyCode(a),d=a.getModifiers();d=d.shift;this._handleLayerFocus();this._identifyTabbableElements();if(!this._tabbableLayerElements.length||c!==b("Keys").TAB||!this._getContext())return;c=this._tabbableLayerElements[0];var e=this._tabbableLayerElements[this._tabbableLayerElements.length-1];a.getTarget()===e&&!d?this._setFocusAfterLayer()&&a.preventDefault():a.getTarget()===c&&d&&(this._setFocusBeforeLayer()&&a.preventDefault())};a.prototype._isTabbableNode=function(a){"use strict";return b("TabbableElements").isTabbable(a)&&!b("DOM").contains(this._layerRoot,a)};a.prototype._setFocusBeforeLayer=function(){"use strict";__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[0]===this._layerID){var c=b("DOMTraverser").previousFilteredNode(document.body,this._getContext(),this._isTabbableNode.bind(this));b("Focus").set(c);return!0}if(a.includes(this._layerID)){c=a[a.indexOf(this._layerID)-1];return this._focusOnElement(c,!0)}return!1};a.prototype._setFocusAfterLayer=function(){"use strict";__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[a.length-1]===this._layerID){this._refocusOnContext();return!0}if(a.includes(this._layerID)){a=a[a.indexOf(this._layerID)+1];return this._focusOnElement(a,!1)}return!1};a.prototype._focusOnElement=function(a,c){"use strict";a=document.getElementById(a);if(!a)return!1;b("Event").fire(a,c?"layerFocusEnd":"layerFocus");this._handleLayerBlur();return!0};a.prototype._refocusOnContext=function(a){"use strict";a=this._getContext();var c=this._getContextOwns();b("Event").fire(document.getElementById(c[0]),"tempFocusIgnore");this._handleLayerBlur();a&&(a.tabIndex==null?(a.tabIndex=-1,b("Focus").setWithoutOutline(a)):b("Focus").set(a))};a.prototype._checkForFocus=function(a){"use strict";a=a.getTarget();var c=this._layer.getContentRoot();c=b("DOM").contains(c,a);!this._ignoreFocus&&!this._layerFocused&&c&&this._handleLayerFocus();this._layerFocused&&!c&&this._handleLayerBlur()};e.exports=a}),null);