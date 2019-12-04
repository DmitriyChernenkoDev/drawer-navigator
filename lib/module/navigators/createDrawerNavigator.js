import _defineProperty from"@babel/runtime/helpers/defineProperty";import _extends from"@babel/runtime/helpers/extends";var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-drawer/src/navigators/createDrawerNavigator.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import*as React from'react';import{Dimensions,Platform,ScrollView,I18nManager}from'react-native';import{createNavigator,ThemeColors,SafeAreaView}from'react-navigation';import DrawerRouter from'../routers/DrawerRouter';import DrawerView from'../views/DrawerView';import DrawerItems from'../views/DrawerNavigatorItems';var defaultContentComponent=function defaultContentComponent(props){return React.createElement(ScrollView,{alwaysBounceVertical:false,__source:{fileName:_jsxFileName,lineNumber:23}},React.createElement(SafeAreaView,{forceInset:{top:'always',horizontal:'never'},__source:{fileName:_jsxFileName,lineNumber:24}},React.createElement(DrawerItems,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:25}}))));};var DefaultDrawerConfig={drawerWidth:function drawerWidth(){var _Dimensions$get=Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;var smallerAxisSize=Math.min(height,width);var isLandscape=width>height;var isTablet=smallerAxisSize>=600;var appBarHeight=Platform.OS==='ios'?isLandscape?32:44:56;var maxWidth=isTablet?320:280;return Math.min(smallerAxisSize-appBarHeight,maxWidth);},contentComponent:defaultContentComponent,drawerPosition:I18nManager.isRTL?'right':'left',keyboardDismissMode:'on-drag',drawerBackgroundColor:{light:ThemeColors.light.bodyContent,dark:ThemeColors.dark.bodyContent},overlayColor:{light:'rgba(0, 0, 0, 0.5)',dark:'rgba(0, 0, 0, 0.5)'},drawerType:'front',hideStatusBar:false,statusBarAnimation:'slide'};var DrawerNavigator=function DrawerNavigator(routeConfigs){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var mergedConfig=_objectSpread({},DefaultDrawerConfig,{},config);var drawerRouter=DrawerRouter(routeConfigs,mergedConfig);var navigator=createNavigator(DrawerView,drawerRouter,mergedConfig);return navigator;};export default DrawerNavigator;
//# sourceMappingURL=createDrawerNavigator.js.map