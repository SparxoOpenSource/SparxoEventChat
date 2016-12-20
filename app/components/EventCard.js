import React, { Component, PropTypes } from 'react';
import { View, Text, Button, Image, WebView } from 'react-native';

export default class EventCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 30, marginRight: 30 }}>
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
            </View>
        );
    }
}

export const EventCardPropsTypes = EventCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}