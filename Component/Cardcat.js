
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
      <Text  style={styles.TextTitle} >{title}</Text>
    </TouchableOpacity >

  );
}
const styles = StyleSheet.create({

  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius:4,
  },
  TouchableOpacity:{
width:80,
height:65,
position:'relative'

  },
  TextTitle:{
    position:'absolute',
    bottom:3,
    left:3,
    fontSize:14,
    color:"#ffffff",
    fontWeight:"600",
    textTransform:'capitalize'

  }

});
export default Cardcat