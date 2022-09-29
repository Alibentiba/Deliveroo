import React from 'react'
// import { View } from 'react-native'
import {ArrowRightIcon} from "react-native-heroicons/mini"
import {  Image, SafeAreaView, ScrollView, StyleSheet,Text, TextInput, View } from 'react-native';
import CardRow from './CardRow';

function FeatureRows({title,description}) {
  return (
<View style={styles.FeatureRows}>

<View  style={styles.Rows} >
<Text style={styles.RowsTitle} >{title}</Text>
<ArrowRightIcon fill="#ff6a06" size={30}/>
</View>

<Text style={styles.description} > {description}</Text>
<ScrollView 
horizontal 
showsHorizontalScrollIndicator={false}
contentContainerStyle={{
    paddingHorizontal:15,
    height:250,
    width:'auto',
    paddingTop:15,
    paddingLeft:0,
    justifyContent:'space-between',
    alignItems:'center'
}}

style={styles.RowsCards} >
    <CardRow/>
    <CardRow/>
    <CardRow/>
    <CardRow/>
    <CardRow/>

<CardRow/>


</ScrollView>


</View>




  )
}

export default FeatureRows
const styles = StyleSheet.create({
    FeatureRows:{
        paddingLeft:10
    },
    Rows: {
 display:'flex',
 flexDirection:'row',
 justifyContent:'space-between',
 paddingRight:15

    },
    RowsTitle:{
        fontSize:18,
        fontWeight:"600",
         textTransform:'capitalize',
         paddingTop:7,
    
    },
    description:{
        fontSize:12,
        color:"#8d8e91",
        textTransform:'capitalize',
        marginTop:0

    },
   



})