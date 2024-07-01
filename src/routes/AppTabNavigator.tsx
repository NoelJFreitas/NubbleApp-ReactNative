import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

import {AppTabBar} from './components/AppTabBar';
// import { NewPostScreen } from 'src/screens/app/NewPostScreen/NewPostScreen';
// import { FavoriteScreen } from 'src/screens/app/FavoriteScreen/FavoriteScreen';
// import { MyProfileScreen } from 'src/screens/app/MyProfileScreen/MyProfileScreen';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
