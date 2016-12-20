import React, { Component, PropTypes } from 'react';
import { View, Text, Button, Image, WebView, Animated, Easing } from 'react-native';

export default class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateValue: new Animated.Value(0)
        };
    }
    startAnimation() {
        Animated.sequence([
            Animated.timing(this.state.rotateValue, {
                toValue: 1,
                duration: 400,
                easing: Easing.linear
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 0,
                duration: 800,
                easing: Easing.linear
            })
        ]).start(() => this.startAnimation());
    }
    render() {
        return (
            <Animated.View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 30,
                marginRight: 30,
                transform: [{
                    rotateZ: this.state.rotateValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] })
                }]
            }}>
                <View>
                    <Button title='detail' onPress={() => this.startAnimation()} />
                </View>
                <View>
                    <Image style={{ height: 140, width: 315 }}
                        source={{ uri: this.props.imageUrl }} />
                </View>
                <View>
                    <Text style={{ fontSize: 30 }}>
                        {this.props.name}
                    </Text>
                </View>
                <View>
                    <WebView style={{ width: 315 }}
                        source={{ html: this.props.description, baseUrl: "http://www.baidu.com" }}
                        scrollEnabled={true}
                        javaScriptEnabled={false} />
                </View>
            </Animated.View>
        );
    }
}

export const EventCardPropsTypes = EventCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}