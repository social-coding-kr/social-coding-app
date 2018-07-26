import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import NewsLetterScreen from '../screens/NewsLetterScreen';
import MeetingLogScreen from '../screens/MeetingLogScreen';
import MeetingLogContentScreen from '../screens/sub/MeetingLogContentScreen';

const NewsLetterStack = createStackNavigator({
  NewsLetter: NewsLetterScreen,
});

NewsLetterStack.navigationOptions = {
  tabBarLabel: 'NEWS LETTER',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-book${focused ? '' : '-outline'}`
          : 'md-book'
      }
    />
  ),
};

const MeetingLogStack = createStackNavigator({
  MeetingLog: MeetingLogScreen,
  MeetingLogContent: MeetingLogContentScreen
});

MeetingLogStack.navigationOptions = {
  tabBarLabel: 'MEETING LOG',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-chatboxes${focused ? '' : '-outline'}` : 'md-chatboxes'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'SETTING',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  NewsLetterStack,
  MeetingLogStack,
  SettingsStack,
});
