import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, LayoutAnimation } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { LinearGradient } from 'expo-linear-gradient';

import ClockAnalog from './scrClock/ClockAnalog.js';
import LocatedClock from './scrClock/Locatedclock.js';
import WorldTime from './scrClock/WorldTime.js';

export default class ClockScreen extends React.Component {
    constructor() {
        super();
        this.state = { valueArray: [], disabled: false }
        this.addNewEle = false;
        this.index = 0;
    }

    afterAnimationComplete = () => {
        this.index += 1;
        this.setState({ disabled: false });
    }

    addMore = () => {
        this.addNewEle = true;
        const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };

        this.setState({
            disabled: true,
            valueArray: [...this.state.valueArray, newlyAddedValue]
        });
    }

    remove(id) {
        this.addNewEle = false;
        const newArray = [...this.state.valueArray];
        newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

        this.setState(() => {
            return {
                valueArray: newArray
            }
        }, () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        });
    }
    static navigationOptions = {
        tabBarLabel: 'Clock'
    }
    render() {
        return (
            <ScrollView style={styles.size}>
                <View style={styles.BackGround}>
                    <ImageBackground
                        source={require('../image/BGWallpaper.png')}
                        style={{ width: 1200, height: 800 }}
                    >
                        <View style={styles.addbtn}>
                            <TouchableOpacity style={styles.addop}>
                                <Ionicons name="md-add" size={40} color="#ffffff" onPress={this.addMore}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{  alignItems: 'center', width: 410 }}>
                            <ClockAnalog/>
                        </View>
                        <View style={styles.Located}>
                            <LocatedClock/>
                        </View>
                        <View style={styles.WorldTime}>
                            <View
                                ref={scrollView => this.scrollView = scrollView}
                                onContentSizeChange={() => {
                                    this.addNewEle && this.scrollView.scrollToEnd();
                                }}
                            >
                                <View style={{ flex: 1, padding: 4 }}>
                                    {this.state.valueArray.map(ele => {
                                        return (
                                            <WorldTime
                                                key={ele.id}
                                                item={ele}
                                                removeItem={(id) => this.remove(id)}
                                                afterAnimationComplete={this.afterAnimationComplete}
                                            />
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>

        )
    }

}

var styles = StyleSheet.create({
    size:{
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
    Located:{
        marginTop:20,
    },  
    WorldTime:{
    }
});
