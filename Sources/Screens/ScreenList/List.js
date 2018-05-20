import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import ListItem from './ListItem';


class List extends React.Component {
    render() {

        let itemsList = this.props.itemsList
        const itemsListArray = [];

        switch (this.props.screenType) {
            case "event":

                for (let item in itemsList) {
                    let itemData = {
                        dataVersion: itemsList[item].dataVersion,
                        itemName: itemsList[item].eventName,
                        itemType: this.props.screenType,
                        itemPicture: itemsList[item].eventProfilePicture,
                        itemId: itemsList[item].eventId,
                        screenNavigator: "ScreenEvent"
                    };
                    itemsListArray.push(itemData);
                }

                break;

            case "animation":

                for (let item in itemsList) {
                    let itemData = {
                        dataVersion: itemsList[item].dataVersion,
                        itemName: itemsList[item].animationName,
                        itemType: this.props.screenType,
                        itemPicture: itemsList[item].animationProfilePicture,
                        itemId: itemsList[item].animationId,
                        screenNavigator: "ScreenAnimation"
                    };
                    itemsListArray.push(itemData);
                }
                break;

            case "service":

                for (let item in itemsList) {
                    let itemData = {
                        dataVersion: itemsList[item].dataVersion,
                        itemName: itemsList[item].serviceName,
                        itemType: this.props.screenType,
                        itemPicture: itemsList[item].serviceProfilePicture,
                        itemId: itemsList[item].serviceId,
                        screenNavigator: "ScreenService"
                    };
                    itemsListArray.push(itemData);
                }
                break;

            default:
                break;
        }

        return (


            <View style={styles.eventsList}>
                {
                    itemsListArray.map(function (item) { return <ListItem item={item} key={item.itemId} />; })
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    itemsList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: "100%"
    },
});


export default List 