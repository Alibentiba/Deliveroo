import React from 'react'

    import { View,StyleSheet,Image } from 'react-native'

const CardRow = () => {
  return (
    <View>
    <Image style={styles.Cardimage}source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUuSKIbKRYBPgbDkM5tNXpiDUAZ86gJiPSw&usqp=CAU'}}/>
  

    </View>
  )
}

export default CardRow
const styles = StyleSheet.create({

    Cardimage: {
      width: 160,
      height: 120,
    }})