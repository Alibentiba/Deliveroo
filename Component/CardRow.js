import React from 'react'
import { View,StyleSheet,Image,Text,TouchableOpacity } from 'react-native'
import {StarIcon,MapPinIcon} from "react-native-heroicons/mini";

const CardRow = () => {
  return (
    <TouchableOpacity style={styles.CardRow}>

          <Image style={styles.Cardimage}source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-lRHZVQdchHOYdrukagBVmNQLPQhCOiUag&usqp=CAU'}}/>
          <Text style={styles.Cardtitle} >Node's</Text>

            <View style={styles.ViewRat} > 
                    <StarIcon fill="#a2ff03" size={20}/>
                    <Text style={styles.CardRate}> Offer of dot's </Text>
            </View>

                <View style={styles.ViewRat} > 
                    <MapPinIcon fill="#ff6a06" size={20}/>
                    <Text style={styles.CardRate}> Alger center -alger</Text>
                </View>

    </TouchableOpacity>
  )
}

export default CardRow
const styles = StyleSheet.create({
    CardRow:{
        backgroundColor:"white",
        width: 220,
        height:250,
        marginRight:4,
        padding:5
    },
    Cardimage: {
        width: 210,
      height: 145,
      marginBottom:4
    },
    Cardtitle:{
        fontSize:18,
        fontWeight:'600'
    },
    CardRate:{
        fontSize:14,
        fontWeight:'300',
        marginLeft:5,
        marginTop:3

    },
    ViewRat:{
        display:'flex',
        flexDirection:"row",
        
    }

})