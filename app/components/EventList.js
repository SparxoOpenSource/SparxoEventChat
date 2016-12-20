import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import EventCard, { EventCardPropsTypes } from './EventCard';
import ViewPager from '../common/ViewPager';

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = this.props.events.map((eventInfo) => {
            return (
                <EventCard
                    key={eventInfo.id}
                    name={eventInfo.name}
                    description={eventInfo.description}
                    imageUrl={eventInfo.imageUrl}
                    />);
        });

        return (
            <ViewPager selectedIndex={0} style={{ height: 100 }}>
                {cards}
            </ViewPager>
        );

    }
}

export const EventListPropTypes = EventList.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape(EventCardPropsTypes).isRequired).isRequired
}