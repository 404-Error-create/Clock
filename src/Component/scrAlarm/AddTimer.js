import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Platform, UIManager, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SwitchExample from './SwitchExample.js'

const width = Dimensions.get('window').width;

export default class AddTimer extends React.Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    
    state = {
        switchValue: true
    };  

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item.id !== this.props.item.id) {
            return true;
        }
        return false;
    }

    componentDidMount() {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0.5,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() => {
            this.props.afterAnimationComplete();
        });
    }

    removeItem = () => {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() => {
            this.props.removeItem(this.props.item.id);
        });
    }
    render() {
        const translateAnimation = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [-width, 0, width]
        });

        const opacityAnimation = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        });
        
        
        return (
            <Animated.View style={[
                styles.viewHolder, {
                    transform: [{ translateX: translateAnimation }],
                    opacity: opacityAnimation,
                    marginBottom: 80,
                    width: 406,
                    alignItems: 'center',

                }]}
            >
                <View style={styles.item}>
                    <View style={styles.position}>
                        <View style={styles.additem}></View>
                        <Text style={styles.time}>06:00</Text>
                        <Text style={styles.timeline}>Today,+0 Hours</Text>
                        <View style={styles.timezonenow}> 
                            <SwitchExample/>
                        </View>
                        
                        <View style={styles.delete}>
                            <TouchableOpacity style={styles.removeitem} onLongPress={this.removeItem}>
                                <FontAwesome name="remove" size={16} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animated.View>

        )
    }
}

var styles = StyleSheet.create({
    Bg: {
        alignItems: 'center',
        width: 420,
        height: 70,
        marginTop: 20,
    },
    additem: {
        width: 380,
        height: 70,
        backgroundColor: '#000000',
        opacity: 0.2,
        borderRadius: 100,
    },
    time: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#ffffff',
        opacity: 1,
        position: 'absolute',
        top: 14,
        left: 40,
    },
    timeline: {
        fontSize: 11,
        fontFamily: 'Roboto',
        color: '#817889',
        opacity: 1,
        position: 'absolute',
        top: 40,
        left: 40,
    },
    timezonenow: {
        position: 'absolute',
        top: 20,
        right: 40,
    },
    delete: {
        width: 20,
        height: 20,
        backgroundColor: '#686de0',
        position: 'absolute',
        top: 1,
        right: 0,
        borderRadius: 10,
        opacity: 0.5,
    },
    removeitem: {
        alignItems: 'center',
    },
    item: {
        alignItems: 'center',
        width: 410,
        height: 80,
        margin: 4,
    },
    position: {
        margin: 4,
        position: 'relative'
    },
    swip:{
        height: 30,
        width: 40
    }
});