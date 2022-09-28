import { blue } from '@mui/material/colors';
import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';
const Cardcat = ({title,iurl}) => {



  return (
    <TouchableOpacity   style={styles.TouchableOpacity}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri:iurl
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity >

  );
}
const styles = StyleSheet.create({

  tinyLogo: {
    width: 45,
    height: 45,
    borderRadius:10,
  },
  TouchableOpacity:{
width:60,
height:50,

  }
});
export default Cardcat