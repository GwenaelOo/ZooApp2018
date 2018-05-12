import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import EventItem from './EventItem';





class EventsList extends React.Component {
    render() {

        let eventsList = this.props.eventsList

        const eventsListArray = [];
        for (let event in eventsList) {
            let eventData = {
                eventName: eventsList[event].eventName,
            };
            eventsListArray.push(eventData);
        }

        return (

            <View style={styles.eventsList}>
                {
                    eventsListArray.map(function (event) { return <ScreenEventsItem event={event} />; })
                }
            </View>

        );
    }
}


const styles = StyleSheet.create({
    eventsList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: "100%"
    },
});


export default EventsList