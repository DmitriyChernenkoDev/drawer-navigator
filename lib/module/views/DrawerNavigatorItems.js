import _defineProperty from"@babel/runtime/helpers/defineProperty";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-drawer/src/views/DrawerNavigatorItems.tsx";import*as React from'react';import{View,Text,StyleSheet}from'react-native';import{SafeAreaView,ThemeContext}from'react-navigation';import TouchableItem from'./TouchableItem';var DrawerNavigatorItems=function(_React$Component){_inherits(DrawerNavigatorItems,_React$Component);function DrawerNavigatorItems(){_classCallCheck(this,DrawerNavigatorItems);return _possibleConstructorReturn(this,_getPrototypeOf(DrawerNavigatorItems).apply(this,arguments));}_createClass(DrawerNavigatorItems,[{key:"getActiveTintColor",value:function getActiveTintColor(){var activeTintColor=this.props.activeTintColor;if(!activeTintColor){return;}else if(typeof activeTintColor==='string'){return activeTintColor;}return activeTintColor[this.context];}},{key:"getInactiveTintColor",value:function getInactiveTintColor(){var inactiveTintColor=this.props.inactiveTintColor;if(!inactiveTintColor){return;}else if(typeof inactiveTintColor==='string'){return inactiveTintColor;}return inactiveTintColor[this.context];}},{key:"getActiveBackgroundColor",value:function getActiveBackgroundColor(){var activeBackgroundColor=this.props.activeBackgroundColor;if(!activeBackgroundColor){return;}else if(typeof activeBackgroundColor==='string'){return activeBackgroundColor;}return activeBackgroundColor[this.context];}},{key:"getInactiveBackgroundColor",value:function getInactiveBackgroundColor(){var inactiveBackgroundColor=this.props.inactiveBackgroundColor;if(!inactiveBackgroundColor){return;}else if(typeof inactiveBackgroundColor==='string'){return inactiveBackgroundColor;}return inactiveBackgroundColor[this.context];}},{key:"render",value:function render(){var _this$props=this.props,items=_this$props.items,activeItemKey=_this$props.activeItemKey,getLabel=_this$props.getLabel,renderIcon=_this$props.renderIcon,onItemPress=_this$props.onItemPress,itemsContainerStyle=_this$props.itemsContainerStyle,itemStyle=_this$props.itemStyle,labelStyle=_this$props.labelStyle,activeLabelStyle=_this$props.activeLabelStyle,inactiveLabelStyle=_this$props.inactiveLabelStyle,iconContainerStyle=_this$props.iconContainerStyle,drawerPosition=_this$props.drawerPosition;var activeTintColor=this.getActiveTintColor();var activeBackgroundColor=this.getActiveBackgroundColor();var inactiveTintColor=this.getInactiveTintColor();var inactiveBackgroundColor=this.getInactiveBackgroundColor();return React.createElement(View,{style:[styles.container,itemsContainerStyle],__source:{fileName:_jsxFileName,lineNumber:102}},items.map(function(route,index){var _ref;var focused=activeItemKey===route.key;var color=focused?activeTintColor:inactiveTintColor;var backgroundColor=focused?activeBackgroundColor:inactiveBackgroundColor;var scene={route:route,index:index,focused:focused,tintColor:color};var icon=renderIcon(scene);var label=getLabel(scene);var accessibilityLabel=typeof label==='string'?label:undefined;var extraLabelStyle=focused?activeLabelStyle:inactiveLabelStyle;return React.createElement(TouchableItem,{key:route.key,accessible:true,accessibilityLabel:accessibilityLabel,onPress:function onPress(){onItemPress({route:route,focused:focused});},delayPressIn:0,__source:{fileName:_jsxFileName,lineNumber:118}},React.createElement(SafeAreaView,{style:[{backgroundColor:backgroundColor},styles.item,itemStyle],forceInset:(_ref={},_defineProperty(_ref,drawerPosition,'always'),_defineProperty(_ref,drawerPosition==='left'?'right':'left','never'),_defineProperty(_ref,"vertical",'never'),_ref),__source:{fileName:_jsxFileName,lineNumber:127}},icon?React.createElement(View,{style:[styles.icon,focused?null:styles.inactiveIcon,iconContainerStyle],__source:{fileName:_jsxFileName,lineNumber:136}},icon):null,typeof label==='string'?React.createElement(Text,{style:[styles.label,{color:color},labelStyle,extraLabelStyle],__source:{fileName:_jsxFileName,lineNumber:147}},label):label));}));}}]);return DrawerNavigatorItems;}(React.Component);DrawerNavigatorItems.defaultProps={activeTintColor:{light:'#2196f3',dark:'#fff'},activeBackgroundColor:{light:'rgba(0, 0, 0, .04)',dark:'rgba(255, 255, 255, .04)'},inactiveTintColor:{light:'rgba(0, 0, 0, .87)',dark:'rgba(255, 255, 255, .87)'},inactiveBackgroundColor:{light:'transparent',dark:'transparent'}};DrawerNavigatorItems.contextType=ThemeContext;export{DrawerNavigatorItems as default};var styles=StyleSheet.create({container:{paddingVertical:4},item:{flexDirection:'row',alignItems:'center'},icon:{marginHorizontal:16,width:24,alignItems:'center'},inactiveIcon:{opacity:0.62},label:{margin:16,fontWeight:'bold'}});
//# sourceMappingURL=DrawerNavigatorItems.js.map