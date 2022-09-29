import React from 'react'
// import { View } from 'react-native'
import {ArrowRightIcon} from "react-native-heroicons/mini";
import {  Image, SafeAreaView, ScrollView, StyleSheet,Text, TextInput, View } from 'react-native';
import CardRow from './CardRow';

function FeatureRows({title,description}) {
  return (
<View>
<View  style={styles.Rows} >
<Text style={styles.RowsTitle} >
    {title}
</Text>
<ArrowRightIcon fill="#ff6a06" size={30}/>
</View>
<Text style={styles.description} > {description}</Text>
<ScrollView 
horizontal contentContainerStyle={{
    paddingHorizontal:15,
  
    height:200,
    width:'100%',
    paddingTop:15
}}

style={styles.RowsCards} >
<CardRow/>


</ScrollView>


</View>




  )
}

export default FeatureRows
const styles = StyleSheet.create({

    Rows: {
 backgroundColor:'orange',
 display:'flex',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
 paddingLeft:7,
 paddingRight:7
    },
    RowsTitle:{
        fontSize:18,
        fontWeight:"600",
        textTransform:'capitalize'
    },
    description:{
        fontSize:12,
        color:"#b7b9bd",
        textTransform:'capitalize'

    },
    RowsCards:{

    }



})