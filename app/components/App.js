import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native';
import EventList from './EventList';

export default class App extends Component {
    componentDidMount() {
        this.props.loadEventsRequest();
    }

    render() {
        const events = this.props.events;
        const isLoading = this.props.isLoading;
        const error = this.props.error;
        if (isLoading) {
            return this.renderLoading();
        }
        else if (error != '') {
            return this.renderError();
        }
        else {
            return (
                <View style={{ flex: 1, paddingTop: 22 }}>
                    <EventList events={events} />
                </View>
            );
        }
    }

    renderLoading() {
        return (
            <Text style={{ paddingTop: 22, fontSize: 34 }}>
                Loading...
            </Text>
        );
    }

    renderError() {
        return (
            <Text style={{ paddingTop: 22, fontSize: 34 }}>
                {this.props.error}
            </Text>
        );
    }
}