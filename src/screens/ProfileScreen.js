import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { changeNameAction } from '../store/userAction'

const ProfileScreen = () => {
  const isSignedIn = useSelector(state => state.userData.isSignedIn)
  const userName = useSelector(state => state.userData.userName)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
  
      {isSignedIn ? (
        <View style={styles.content}>
          <Text>Your name: {userName}</Text>
          <TouchableOpacity onPress={() => dispatch(changeNameAction())}>
            <Text style={{color:"blue"}}>Change</Text>
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

export default ProfileScreen

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
