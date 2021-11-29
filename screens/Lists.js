import React, { useState, useEffect, createContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card, Title, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
export const AppStateContext = createContext();

export default function Lists(props) {

    const navigation = useNavigation();




    const ContextData = (props1) => {
        var ContextValue = { id: "5" };
        return (
            <AppStateContext.Provider value={ContextValue}>
                {props1.children}
            </AppStateContext.Provider>
        );



    }
    const UpdateLists = (id) => {
        navigation.navigate('Update', { id: id, eventName: props.list.eventName, eventAddeess: props.list.eventAddeess, Organizer: props.list.Organizer })
    }
    return (
        <ContextData>
            <ScrollView>

                <Card style={{ marginTop: 25, borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 10 }}
                >
                    <Card.Content>
                        <Title style={{ fontSize: 15 }}> Event Name : {props.list.eventName}</Title>
                        <Title style={{ fontSize: 15 }}> Event Address :{props.list.eventAddeess}</Title>
                        <Title style={{ fontSize: 15 }}> Event Organizer :{props.list.Organizer}</Title>

                        <View style={styles.container}>

                            <Button mode="contained" theme={{
                                colors: {
                                    primary: "green"
                                }
                            }} onPress={() => UpdateLists(props.id)} style={{ marginTop: 5, marginLeft: 50, marginBottom: 5 }}
                            >
                                Update List

                            </Button>
                            <Button mode="contained" theme={{
                                colors: {
                                    primary: "red"
                                }
                            }} onPress={() => props.del(props.id)} style={{ marginTop: 5, marginRight: 50, marginBottom: 5 }}
                            >
                                Delete List

                            </Button>
                        </View>
                    </Card.Content>




                </Card>


            </ScrollView>

        </ContextData>




    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20

    },
})
