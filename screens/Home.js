import React,{useState,useEffect} from 'react'
import {Text,View,FlatList,Image} from 'react-native'
import {TextInput,Button,Card, Title} from 'react-native-paper'


export default function Home(props) {
    const [data, setData] = useState({
        name1:"test",
        code:"test",
        date:"test",
        time:"test",
        temp:"test",
        max:"test",
        min:"test",
        desc:"test",
        icon:"test",

    })

useEffect(() => {
    Weather()
}, [])

const Weather=()=>{
    const API_KEY = "71df61ffcb4427f66d170a6d307c019a"
    ;
    let city1;
    const city=props.route.params;
    city1=city;
    console.log(city1.city)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1.city}&appid=${API_KEY}&units=metric`).then((res)=>res.json()).then((data)=>{setData({

    name1:data.name,
    code:data.sys.country,
    date:new Date().toDateString(),
    time:new Date().toLocaleTimeString(),
    temp:data.main.temp,
    max:data.main.temp_max,
    min:data.main.temp_max,
    desc:data.weather[0].main,
    icon:data.weather[0].icon,



})}).catch((err)=>console.log(err))

}

if(props.route.params.city !="siliguri")
Weather();
    
    return (
        <>
        <View style={{flex:1}}>



<Card style={{borderRadius:20, marginTop:40, marginLeft:20,marginRight:20, borderColor:"black", height:470}}>


    <View style={{alignItems:"center"}}>
        <Title style={{color:"black", marginTop:40,fontFamily:"math", fontWeight:"bold", fontSize:25}}>{data.name1} , {data.code}</Title>
        <Image style={{width:100,height:100 , marginTop:10}} 
        source={{
            uri:`https://api.openweathermap.org/img/w/${data.icon}.png`
        }}



        />
                <Title style={{color:"grey", marginTop:0,fontFamily:"math", fontSize:15}}>{data.date}</Title>
                <Title style={{color:"red", marginTop:0,fontFamily:"math", fontSize:15}}>{data.time}</Title>
                <Title style={{color:"blue", marginTop:20, paddingTop:20,fontFamily:"math", fontSize:45}}>{Math.round(data.temp)}°C</Title>
                <Title style={{color:"red", marginTop:5,fontFamily:"math", fontSize:20}}>max({Math.round(data.max)}°C) / min({Math.round(data.min)}°C)</Title>
                <Title style={{color:"black", marginTop:15,marginBottom:40, paddingTop:20 ,fontFamily:"math", fontSize:35}}>{data.desc}</Title>


    </View>
</Card>




        </View>
            
        </>
    )
}
