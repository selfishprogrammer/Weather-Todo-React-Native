import React from 'react'
import { View, Text, ScrollView,TouchableHighlight } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper';

import icon from 'react-native-vector-icons/AntDesign'

export default function Settings() {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        return (
<ScrollView scrollIndicatorInsets={false} scrollEnabled={true}>
          
        
<Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="General" subtitle="Account Preferences,Notifications"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>


        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Network Preferences" subtitle="Data Usages For Downloads Movies and Apps"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>



        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Authentications" subtitle="Security and Fingerprint"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>


        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Signup & Login" subtitle="Rahul Jha"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>

        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Parental Control" subtitle="Off"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>

        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Guides" subtitle=""  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>

        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="About Us" subtitle="Weathers App"  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>

        <Card style={{borderColor:"grey", borderBottomWidth:1}}>
        <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
        <Card.Title title="Contact Us" subtitle=""  
    right={()=><icon.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon.Button>} />
        </TouchableHighlight>
        
        </Card>
</ScrollView>
    )
}

