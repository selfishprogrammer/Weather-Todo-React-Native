import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { TextInput, Button, Card } from 'react-native-paper'

import Header from './Header'
export default function Search({ navigation }) {
    const [city, setCity] = useState("")
    const [api, setApi] = useState([])

    const fetchCity = () => {

        navigation.navigate("Home", { city: city })
    }

    return (
        <>

            <View style={{ flex: 1 }}>

                <TextInput
                    label="City"
                    value={city}
                    onChangeText={city => setCity(city)}
                    style={{ marginTop: 70, marginLeft: 30, marginRight: 30 }}
                    theme={{
                        colors: {
                            primary: "yellowgreen"
                        }
                    }}
                />
                <Button icon="content-save" mode="contained" onPress={() => fetchCity()} style={{ marginTop: 20, marginLeft: 50, marginRight: 50 }}
                    theme={{
                        colors: {
                            primary: "yellowgreen"
                        }
                    }}>
                    <Text style={{ color: "white" }}> Check Weather</Text>
                </Button>




            </View>
        </>
    )
}
