import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';



export default class TimerScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Timer'
    }
    render() {
        return (
            <View style={styles.bg}>
                <Text>This is Tab TimerScreen</Text>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    bg: {
        backgroundColor: '#f5f5'
    }

});
