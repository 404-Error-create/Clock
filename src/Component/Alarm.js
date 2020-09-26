import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, LayoutAnimation, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ChangeTime from './scrAlarm/ChangeTime.js'

const Stack = createStackNavigator();

function AlarmScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Alarm "
                component={Alarm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Change"
                component={ChangeTimeScreen}
                
            />
        </Stack.Navigator>
    );
}

function ChangeTimeScreen() {
    return (
        <ChangeTime />
    );
}


function Alarm({ navigation }) {
    return (
        <ScrollView style={styles.size}>
            <View style={styles.BackGround}>
                <ImageBackground
                    source={require('../image/BGWallpaper.png')}
                    style={{ width: 1200, height: 800 }}
                >
                    <View style={styles.addbtn}>
                        <TouchableOpacity style={styles.addop}>
                            <Ionicons name="md-add" size={40} color="#ffffff" onPress={() => navigation.navigate('Change')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.WorldTime}>

                    </View>
                </ImageBackground>
            </View>
        </ScrollView>

    )
}

export default AlarmScreen;

var styles = StyleSheet.create({
    size: {
    },
    BackGround: {
        width: 400,
    },
    BgGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
        flex: 1,
    },
    addbtn: {
        marginTop: 40,
        marginLeft: 350
    },
    Located: {
        marginTop: 20,
    },
    WorldTime: {
    }
});
