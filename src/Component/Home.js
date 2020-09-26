import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Home extends Component{
    render(){
        return(
            <View style={styles.BG}>This is Home</View>
        )
    }
}

const styles = StyleSheet.create({
    BG:{
        backgroundColor:'#8e44ad',
    },
})