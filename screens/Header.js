import React from 'react'
import { Appbar, Title } from 'react-native-paper'
export default function Header(props) {
    return (
        <>
            <Appbar.Header theme={
                {
                    colors: {
                        primary: "yellowgreen"
                    }
                }
            }
                style={{ flexDirection: "row", justifyContent: "center" }}>

                <Title style={{ color: "black", fontFamily: "math" }}>{props.name}</Title>
            </Appbar.Header>
        </>
    )
}
