import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';


export default class LocatedClock extends React.Component {
    constructor(){
        super();
        this.state = {currentTime: null}
    }
    componentWillMount() {
        this.getCurrentTime();
    }
    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        //let am_pm = 'PM';

        if (hour < 10){
            hour = '0'+ hour;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (hour > 12) {
            hour = hour ;
        }

        if (hour == 0) {
            hour = 12;
        }

        /*if (new Date().getHours() < 12) {
            am_pm = 'AM';
        }*/

        this.setState({ currentTime: hour + ':' + minutes /*+ ':' + seconds + ' ' + am_pm */});

        /*this.daysArray.map((item, key) => {
            if (key == new Date().getDay()) {
                this.setState({ currentDay: item.toUpperCase() });
            }
        })*/
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }
    render() {
        return (
            <View style={styles.Bg}>
                <View style={styles.locatetime}>
                    <Text style={styles.located}>Hà Nội</Text>
                    <Text style={styles.times}>{this.state.currentTime}</Text>
                </View>
            </View>

        )
    }
}

var styles = StyleSheet.create({
    Bg: {
        alignItems: 'center',
        width: 410,
        marginTop: 0,
    },
    locatetime: {
        textAlign:'center',
    },
    located: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
    },
    times: {
        marginTop: 1,
        fontSize: 45,
        textAlign: 'center',
        color: '#ffffff',
    },

});