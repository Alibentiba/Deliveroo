
import { useNavigation } from '@react-navigation/native';
import React, { Component, useLayoutEffect } from 'react'
import {  Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import {UserIcon,ChevronDownIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon} from "react-native-heroicons/mini";
import Cat from '../Component/Cat';
import FeatureRows from '../Component/FeatureRows';
const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({headerShown:false,})
  },[])
  return (
    <SafeAreaView className=" pt-5 w-screen h-screen mt-5 ">
      <View className="flex-row bg-white">
      <View className="flex-row w-80 pl-1  space-x-2">
       <Image 
       source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W8TAVrIFX60tJek-iLerCoAaZ_KwQZIK2w&usqp=CAU'}} 
       className="w-10 h-12 rounded-full "/>
       <View>
       <Text className="text-slate-800 text-xs">Deliver Now!</Text>
       <Text className="text-xl font-bold flex-1 flex-row ">current Locations
       <ChevronDownIcon  fill="#2EE6AE" size={18} />
       </Text>
       </View>
       </View>
       <UserIcon  fill="#BBBBB8" size={40}/>
       </View>


      <View className="flex-row    p-2 pl-1 space-x-2 bg-white w-screen m-1">
      <View className="flex-row bg-zinc-300 items-center justify-start h-9 text-xl pl-2 flex-1 space-x-4 rounded-sm">
      <MagnifyingGlassIcon fill="#ff6a06" size={18}/>
      <TextInput placeholder='Enter your location'/>
      </View>
      <AdjustmentsVerticalIcon  fill="#ff6a06" size={30}/>
       </View>
       
     <ScrollView>
      <Cat/>
      <FeatureRows title="hello Ali" description="food, substance consisting essentially of protein"/>
      <FeatureRows title="hello Ali" description="food, substance consisting essentially of protein"/>
      <FeatureRows title="hello Ali" description="food, substance consisting essentially of protein"/>
     </ScrollView>


  </SafeAreaView>
  )
}

export default Home