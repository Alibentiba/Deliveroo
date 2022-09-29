import { View, Text, ScrollView, FlatList ,StyleSheet} from 'react-native'
import React from 'react'
import Cardcat from './Cardcat'

const Cat = () => {
  return (
    <ScrollView 
    
    horizontal
    showsHorizontalScrollIndicator
     contentContainerStyle={{
      flexDirection:'row',
      padding:10,
      justifyContent:'space-between',
      paddingLeft:5,
      paddingRight:0,
      backgroundColor:'#ffffff',
      height:80,
      marginTop:3
    }}>

      <Cardcat title="Oatmeal Cookies" iurl='https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg'/>
      <Cardcat title="test1" iurl='https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg'/>
      <Cardcat title="test1" iurl='https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e' />
      <Cardcat title="test1" iurl='http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg' />
      <Cardcat title="test1" iurl='https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg'/>
      <Cardcat title="test1" iurl='https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg'/>
      <Cardcat title="test1" iurl='https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e' />
      <Cardcat title="test1" iurl='http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg' />
     
    </ScrollView>
  )}
  
export default Cat




// ,
//       ,
//       ,
//       ,
//       