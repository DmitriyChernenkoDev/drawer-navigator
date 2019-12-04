var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNativeTabView=require("react-native-tab-view");var _createTabNavigator=_interopRequireDefault(require("../utils/createTabNavigator"));var _MaterialTopTabBar=_interopRequireDefault(require("../views/MaterialTopTabBar"));var MaterialTabView=function(_React$PureComponent){(0,_inherits2.default)(MaterialTabView,_React$PureComponent);function MaterialTabView(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,MaterialTabView);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(MaterialTabView)).call.apply(_getPrototypeOf2,[this].concat(args)));_this._renderLazyPlaceholder=function(props){var LazyPlaceholder=_this.props.lazyPlaceholderComponent;if(LazyPlaceholder!=null){return React.createElement(LazyPlaceholder,props);}return null;};_this._renderTabBar=function(props){var state=_this.props.navigation.state;var route=state.routes[state.index];var descriptors=_this.props.descriptors;var descriptor=descriptors[route.key];var options=descriptor.options;var tabBarVisible=options.tabBarVisible==null?true:options.tabBarVisible;var _this$props=_this.props,navigation=_this$props.navigation,getLabelText=_this$props.getLabelText,getAccessibilityLabel=_this$props.getAccessibilityLabel,getTestID=_this$props.getTestID,renderIcon=_this$props.renderIcon,onTabPress=_this$props.onTabPress,onTabLongPress=_this$props.onTabLongPress,_this$props$tabBarCom=_this$props.tabBarComponent,TabBarComponent=_this$props$tabBarCom===void 0?_MaterialTopTabBar.default:_this$props$tabBarCom,tabBarPosition=_this$props.tabBarPosition,tabBarOptions=_this$props.tabBarOptions,screenProps=_this$props.screenProps;if(TabBarComponent===null||!tabBarVisible){return null;}return React.createElement(TabBarComponent,(0,_extends2.default)({},tabBarOptions,props,{tabBarPosition:tabBarPosition,screenProps:screenProps,navigation:navigation,getLabelText:getLabelText,getAccessibilityLabel:getAccessibilityLabel,getTestID:getTestID,renderIcon:renderIcon,onTabPress:onTabPress,onTabLongPress:onTabLongPress}));};return _this;}(0,_createClass2.default)(MaterialTabView,[{key:"render",value:function render(){var _this$props2=this.props,getLabelText=_this$props2.getLabelText,getAccessibilityLabel=_this$props2.getAccessibilityLabel,getTestID=_this$props2.getTestID,renderIcon=_this$props2.renderIcon,onTabPress=_this$props2.onTabPress,onTabLongPress=_this$props2.onTabLongPress,screenProps=_this$props2.screenProps,lazyPlaceholderComponent=_this$props2.lazyPlaceholderComponent,tabBarComponent=_this$props2.tabBarComponent,tabBarOptions=_this$props2.tabBarOptions,navigation=_this$props2.navigation,descriptors=_this$props2.descriptors,rest=(0,_objectWithoutProperties2.default)(_this$props2,["getLabelText","getAccessibilityLabel","getTestID","renderIcon","onTabPress","onTabLongPress","screenProps","lazyPlaceholderComponent","tabBarComponent","tabBarOptions","navigation","descriptors"]);var state=navigation.state;var route=state.routes[state.index];var descriptor=descriptors[route.key];var options=descriptor.options;var swipeEnabled=options.swipeEnabled==null?this.props.swipeEnabled:options.swipeEnabled;if(typeof swipeEnabled==='function'){swipeEnabled=swipeEnabled(state);}return React.createElement(_reactNativeTabView.TabView,(0,_extends2.default)({},rest,{navigationState:navigation.state,swipeEnabled:swipeEnabled,renderTabBar:this._renderTabBar,renderLazyPlaceholder:this._renderLazyPlaceholder}));}}]);return MaterialTabView;}(React.PureComponent);var _default=(0,_createTabNavigator.default)(MaterialTabView);exports.default=_default;
//# sourceMappingURL=createMaterialTopTabNavigator.js.map