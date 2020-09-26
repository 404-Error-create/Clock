import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class AnalogClock extends Component {

    constructor(props) {
        super(props);

        let d = new Date();

        this.state = {
            sec: d.getSeconds() * 6,
            min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
            hour: ((d.getHours() % 12) / 12) * 360 + 90 +
                (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
        };

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let d = new Date();
            this.setState({ sec: d.getSeconds() * 6 });
            this.setState({
                min: d.getMinutes() * 6 +
                    (d.getSeconds() * 6) / 60
            });
            this.setState({
                hour: ((d.getHours() % 12) / 12) * 360 + 90 +
                    (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    clockHolder() {
        return {
            width: this.props.clockSize,
            height: this.props.clockSize,
            position: 'absolute',
            right: -this.props.clockBorderWidth,
            bottom: -this.props.clockBorderWidth
        }
    }

    clockFace() {
        return {
            width: this.props.clockCentreSize,
            height: this.props.clockCentreSize,
            backgroundColor: this.props.clockCentreColor,
            borderRadius: this.props.clockCentreSize / 2,
            top: (this.props.clockSize - this.props.clockCentreSize) / 2,
            left: (this.props.clockSize - this.props.clockCentreSize) / 2
        }
    }

    hourHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.hourHandColor,
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginVertical: -this.props.hourHandWidth,
            marginLeft: -this.props.hourHandLength / 2,
            paddingVertical: this.props.hourHandWidth,
            paddingLeft: this.props.hourHandLength,
            borderTopLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0,
            borderBottomLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0
        }
    }

    minuteHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.minuteHandColor,
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginTop: -(this.props.minuteHandLength / 2),
            marginHorizontal: -this.props.minuteHandWidth,
            paddingTop: this.props.minuteHandLength,
            paddingHorizontal: this.props.minuteHandWidth,
            borderTopLeftRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0,
            borderTopRightRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0
        }
    }

    secondHandStyles() {
        return {
            width: 0,
            height: 0,
            opacity:1,
            position: 'absolute',
            backgroundColor: '#B3327E',
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginTop: -(this.props.secondHandLength / 2),
            marginHorizontal: -this.props.secondHandWidth,
            paddingTop: this.props.secondHandLength,
            paddingHorizontal: this.props.secondHandWidth,
            borderTopLeftRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0,
            borderTopRightRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0
        }
    }

    render() {
        return (
            <View >
                
                <View style={styles.Bg}>
                    <View style={styles.RoundOut}>
                        <View style={styles.RoundIn}>
                            <View style={styles.faceclock}>
                                {
                                    <Image
                                        style={{
                                            width: this.props.clockSize - this.props.clockBorderWidth * 2,
                                            height: this.props.clockSize - this.props.clockBorderWidth * 2
                                        }}
                                        resizeMode='stretch'
                                        source={require('../../image/faceclock.png')}
                                    />
                                }
                                <View style={this.clockHolder()}>

                                    <View style={[this.hourHandStyles(),
                                    {
                                        transform: [{ rotate: this.state.hour + 'deg' },
                                        {
                                            translateX: -(this.props.hourHandOffset +
                                                this.props.hourHandLength / 2)
                                        }]
                                    }]}
                                    />

                                    <View style={[this.minuteHandStyles(),
                                    {
                                        transform: [{ rotate: this.state.min + 'deg' },
                                        {
                                            translateY: -(this.props.minuteHandOffset +
                                                this.props.minuteHandLength / 2)
                                        }]
                                    }]}
                                    />

                                    <View style={[this.secondHandStyles(),
                                    {
                                        transform: [{ rotate: this.state.sec + 'deg' },
                                        {
                                            translateY: -(this.props.secondHandOffset +
                                                this.props.secondHandLength / 2)
                                        }]
                                    }]}
                                    />

                                    <View style={this.clockFace()} />

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                

                
            </View>
        )
    };
};

AnalogClock.defaultProps = {
    clockSize: 270,
    clockBorderWidth: 7,
    clockCentreSize: 15,
    clockCentreColor: '#B3327E',
    hourHandColor: '#ffffff',
    hourHandCurved: true,
    hourHandLength: 70,
    hourHandWidth: 4,
    hourHandOffset: 0,
    minuteHandColor: '#7f8fa6',
    minuteHandCurved: true,
    minuteHandLength: 100,
    minuteHandWidth: 3,
    minuteHandOffset: 0,
    secondHandColor: '#B3327E',
    secondHandCurved: false,
    secondHandLength: 120,
    secondHandWidth: 2,
    secondHandOffset: 0,
};

var styles = StyleSheet.create({
    RoundOut: {
        width: 350,
        height: 350,
        backgroundColor: '#232A4E',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1A3781',
        shadowOffset: {
            width: 20,
            height: 54,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,

        elevation: 5,
    },
    RoundIn: {
        borderColor: '#232A4E',
        borderWidth: 7,
        width: 320,
        height: 320,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceclock: {
        width: 260,
        height: 260,
        backgroundColor: '#232A4E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
    },
    fa: {
        width: 210,
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },
})