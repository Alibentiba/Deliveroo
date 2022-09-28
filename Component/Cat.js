import { View, Text, ScrollView, FlatList ,Image,StyleSheet} from 'react-native'
import React from 'react'
import Cardcat from './Cardcat'
import { spacing } from '@mui/system'

const Cat = () => {
  return (
    <ScrollView  contentContainerStyle={{
      flexDirection:'row',
      padding:10,
      justifyContent:'space-between',
      paddingLeft:45,
      paddingRight:45
     
      
    }}>

      <Cardcat title="test1" iurl=" 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'" />
      <Cardcat title="test1" iurl=" 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'" />
      <Cardcat title="test1" iurl=" 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'" />
      <Cardcat title="test1" iurl=" 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'" />


    </ScrollView>
  )}
  
 


export default Cat