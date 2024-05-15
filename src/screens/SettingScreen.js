import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {logoutAction } from '../store/userAction'
import { RootState } from "../store/store"
const SettingScreen = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
  const userName = useSelector(state => state.userData.userName)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      
      {isSignedIn ? (
        <View style={styles.content}>
          <Text>Hello {userName}</Text>
          <TouchableOpacity onPress={() => dispatch(logoutAction())}>
            <Text style={{color:"red",fontSize:30}}>Log Out</Text>
          </TouchableOpacity>
         
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={{fontSize:30}}>Please Sign In</Text>
       
        </View>
      )}
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
})
