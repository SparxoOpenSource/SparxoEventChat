import React, { Component, PropTypes } from 'react';
import { View, Text, Button, TouchableHighlight, Image, WebView, Animated, Easing, Dimensions } from 'react-native';

export default class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationValue: new Animated.Value(0)
        };
    }
    startAnimation() {
        Animated.timing(this.state.animationValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear
        }).start();
    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        const getImageHeight = width => width / 784 * 295;
        const getImageWidth = height => height * 784 / 295;
        return (
            <Animated.View style={{
                flex: 1,
                justifyContent: 'flex-start',
                marginLeft: this.state.animationValue.interpolate({ inputRange: [0, 1], outputRange: [windowWidth * 0.08, 0] }),
                marginRight: this.state.animationValue.interpolate({ inputRange: [0, 1], outputRange: [windowWidth * 0.08, 0] })
            }}>
                <TouchableHighlight style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.startAnimation()}>
                    <Text>Detail</Text>
                </TouchableHighlight>
                <Animated.Image style={{
                    height: this.state.animationValue.interpolate({ inputRange: [0, 1], outputRange: [getImageHeight(windowWidth * 0.92), getImageHeight(windowWidth)] })
                }}
                    source={{ uri: this.props.imageUrl }}
                    resizeMode='cover'
                    />
                <View start={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {this.props.name}
                    </Text>
                </View>
                <WebView style={{ }}
                    source={{ html: this.props.description }}
                    scrollEnabled={true}
                    javaScriptEnabled={false}
                    />
            </Animated.View>
        );
    }
}

export const EventCardPropsTypes = EventCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}