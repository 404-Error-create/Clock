
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Clock from './src/Component/Clock.js';
import Alarm from './src/Component/Alarm.js';
import Timer from './src/Component/Timer.js';
import Stopwatch from './src/Component/Stopwatch.js';
import ChangeTime from './src/Component/scrAlarm/ChangeTime.js';
import AlarmScreen from './src/Component/Alarm.js'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ClockScreen() {
    return (
        <Clock />
    );
}

function AlarmScreens() {
    return (
        <AlarmScreen />
    );
}

function TimerScreen() {
    return (
        <Timer />
    );
}

function StopwatchScreen() {
    return (
        <Stopwatch />
    );
}



export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Clock') {
                                iconName = focused
                                    ? 'clock'
                                    : 'clock-outline';
                            } else if (route.name === 'Alarm') {
                                iconName = focused
                                    ? 'alarm-light'
                                    : 'alarm-light-outline';
                            } else if (route.name === 'Timer') {
                                iconName = focused
                                    ? 'camera-timer'
                                    : 'timer';
                            } else if (route.name === 'Stopwatch') {
                                iconName = focused
                                    ? 'timer-off'
                                    : 'av-timer';
                            }
                            return (
                                <MaterialCommunityIcons name={iconName} size={size} color={color} />
                            );
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#B3327E',
                        inactiveTintColor: '#817889',
                        style: {
                            backgroundColor: 'black',
                            backfaceVisibility: 'visible'
                        }
                    }}
                >
                    <Tab.Screen name="Clock" component={ClockScreen} />
                    <Tab.Screen name="Alarm" component={AlarmScreens} />
                    <Tab.Screen name="Timer" component={TimerScreen} />
                    <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}