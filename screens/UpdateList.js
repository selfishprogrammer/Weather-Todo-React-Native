import React, { useState, useContext } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card, Title, Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { AppStateContext } from './Lists';

export default function UpdateList(props) {
    const context = useContext(AppStateContext)

    const [eventName, setEventName] = useState(props.route.params.eventName)
    const [eventAddeess, setEventAddeess] = useState(props.route.params.eventAddeess)
    const [Organizer, setOrganizer] = useState(props.route.params.Organizer)
    const navigation = useNavigation();
    const UpdateOrganizer = () => {

        navigation.navigate("Todo", { id: props.route.params.id, eventName: eventName, eventAddeess: eventAddeess, Organizer: Organizer })
    }



    console.log(context)
    return (

        <View>



            <Card style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
                <Card.Content>
                    <Title style={{ textAlign: 'center' }}>UPDATE ORGANIZER LIST</Title>
                </Card.Content>
                <TextInput
                    label="Event Name"
                    value={eventName}
                    onChangeText={e => {
                        setEventName(e);
                    }}
                    style={{
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                    }}
                    theme={{
                        colors: {
                            primary: 'yellowgreen',
                        },
                    }}
                />

                <TextInput
                    label="Event Address"
                    value={eventAddeess}
                    onChangeText={e => {
                        setEventAddeess(e);
                    }}
                    style={{
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                    }}
                    theme={{
                        colors: {
                            primary: 'yellowgreen',
                        },
                    }}
                />

                <TextInput
                    label="Event Organizer"
                    value={Organizer}
                    onChangeText={e => {
                        setOrganizer(e);
                    }}
                    style={{
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                    }}
                    theme={{
                        colors: {
                            primary: 'yellowgreen',
                        },
                    }}
                />

                <Button
                    mode="contained"
                    onPress={() => UpdateOrganizer()}
                    style={{
                        marginTop: 15,
                        height: 50,
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                    }}>
                    <Title style={{ color: 'white' }}>UPDATE EVENT</Title>
                </Button>
            </Card>
        </View>
    )
}
