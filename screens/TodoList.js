import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, TextInput, Title, Button } from 'react-native-paper';
import Lists from './Lists';
export default function TodoList(props) {
    const [eventName, seteventName] = useState('');
    const [eventAddeess, seteventAddeess] = useState('');

    const [Organizer, setOrganizer] = useState('');

    const [TodoCount, setTodoCount] = useState([]);

    if (props.route.params.id != false) {

        const ListUpdate = [...TodoCount];
        ListUpdate.splice(props.route.params.id, 1, { eventName: props.route.params.eventName, eventAddeess: props.route.params.eventAddeess, Organizer: props.route.params.Organizer });
        setTodoCount(ListUpdate);
        console.log(ListUpdate)

        console.log("Working")
    }

    const Todo = () => {
        if (eventName == '' || eventAddeess == '' || Organizer == '') {
            alert('Please Field All Field...');
        } else {
            setTodoCount([...TodoCount, { eventName, eventAddeess, Organizer }]);
            seteventName(' ');
            seteventAddeess(' ');
            setOrganizer(' ');
        }
    };




    const DeleteList = id => {
        const ListAfterDel = [...TodoCount];
        ListAfterDel.splice(id, 1);
        setTodoCount(ListAfterDel);
    };

    console.log(props.route.params)
    return (
        <ScrollView>
            <Card style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
                <Card.Content>
                    <Title style={{ textAlign: 'center' }}>ORGANIZER LIST</Title>
                </Card.Content>
                <TextInput
                    label="Event Name"
                    value={eventName}
                    onChangeText={e => {
                        seteventName(e);
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
                        seteventAddeess(e);
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
                    onPress={() => Todo()}
                    style={{
                        marginTop: 15,
                        height: 50,
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                    }}>
                    <Title style={{ color: 'white' }}>ADD EVENT</Title>
                </Button>
            </Card>

            {TodoCount.map((item, key1) => {
                return <Lists list={item} key={key1} id={key1} del={DeleteList} />;
            })}
        </ScrollView>
    );
}
