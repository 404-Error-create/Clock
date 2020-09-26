import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

// import firebase from 'react-native-firebase';
// import firebase from '@react-native-firebase/app'
// import firestore from '@react-native-firebase/firestore'
// import firebaseApp from '../../Firebase/firebaseconfig.js';


export default class SetupTime extends Component {
    constructor(props){
        super(props);
        this.state = ({
            timeTasks: []
        });
        // this.ref = firebase.firestore().collection('timeTask');
        
    }
    
    render(){
        return(
            <View>
                <View style={{
                    flexDirection: 'row',
                    height: 100, width: 412,
                    backgroundColor: '#192a56',
                    paddingHorizontal: 20,
                }}>
                    <View style={{ justifyContent: 'center', width: 185, }}>
                        <Text style={{ fontSize: 25, color: '#ffffff', }}> Thời gian</Text>
                    </View>
                    <View style={{ justifyContent: 'center', width: 185, paddingLeft: 95, }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 90,
                            height: 40,
                            backgroundColor: '#273c75',
                            borderRadius: 7,
                            borderColor: '#e1b12c',
                            borderWidth: 2,
                        }}>
                            <TextInput
                                keyboardType = 'default'
                                placeholderTextColor= 'white'
                                placeholder= '00:00'
                                autoCapitalize = 'none'
                                style={{ fontSize: 25, color: '#e1b12c', }}
                                // onChangeText ={
                                //     this.setState({newTaskTime : Text})
                                // }
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: 50, width: 412, backgroundColor: '#273c70', }}>
                    <View style={{ height: 40, flexDirection: 'row', }}>
                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 30,
                            backgroundColor: 'green',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Lặp lại</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 150,
                            backgroundColor: 'red',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Yes</Text>
                        </View>
                    </View>

                    <View style={{ height: 40, flexDirection: 'row', }}>

                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 30,
                            backgroundColor: 'green',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Lặp lại</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 150,
                            backgroundColor: 'red',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Yes</Text>
                        </View>

                    </View>

                    <View style={{ height: 40, flexDirection: 'row', }}>

                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 30,
                            backgroundColor: 'green',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Lặp lại</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 150,
                            backgroundColor: 'red',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Yes</Text>
                        </View>

                    </View>

                    <View style={{ height: 40, flexDirection: 'row', }}>
                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 30,
                            backgroundColor: 'green',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Lặp lại</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            width: 206,
                            height: 50,
                            paddingLeft: 150,
                            backgroundColor: 'red',
                        }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', }}>Yes</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}