import React from 'react'
import { View, Text, ScrollView , TouchableHighlight} from 'react-native'
import { List } from 'react-native-paper';
import icon from 'react-native-vector-icons/MaterialCommunityIcons'

import icon1 from 'react-native-vector-icons/AntDesign'

export default function Profile() {
    return (
        <ScrollView>
            <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Email"
    style={{backgroundColor:"white", color:"black"}}
    description="rahuljha@gmail.cm"
    left={()=><icon.Button backgroundColor="white" style={{paddingTop:12}}  color="black" onPress={()=>{}} name="gmail" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" style={{paddingTop:12}}  color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Username"
    style={{backgroundColor:"white", color:"black"}}
    description="rahhuljha"
    left={()=><icon.Button backgroundColor="white"  color="black" style={{paddingTop:12}} onPress={()=>{}} name="emoticon-sad-outline" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" style={{paddingTop:12}} onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Password"
    style={{backgroundColor:"white", color:"black"}}
    description="**********"
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="eye-off" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Balance"
    style={{backgroundColor:"white", color:"black"}}
    description="4589 $"
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="wallet-outline" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>


<TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="My Coupons"
    style={{backgroundColor:"white", color:"black"}}
    description=""
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="cookie" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>





<TouchableHighlight activeOpacity={0.6} style={{marginTop:15}}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="How To Play"
    style={{backgroundColor:"white", color:"black"}}
    description=""
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="cricket" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>


<TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Wallet"
    style={{backgroundColor:"white", color:"black"}}
    description="50 $"
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="wallet-outline" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>



<TouchableHighlight activeOpacity={0.6} style={{marginTop:15}}
  underlayColor="#DDDDDD" onPress={()=>{console.log("grip")}}  >
  <List.Item
    title="Logout"
    style={{backgroundColor:"white", color:"black"}}
    left={()=><icon.Button backgroundColor="white"  color="black" onPress={()=>{}} name="logout" size={25}></icon.Button>}
    right={()=><icon1.Button backgroundColor="white" color="black" onPress={()=>{}} name="right" size={25}></icon1.Button>}
  />
</TouchableHighlight>

        </ScrollView>
    )
}
