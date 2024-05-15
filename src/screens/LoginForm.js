// LoginForm.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/userAction';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        dispatch(loginAction(username, password));
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleLogin}>
                <View style={{borderWidth:1,width:120,borderRadius:10,alignItems:"center",borderColor:"blue"}}>
                <Text style={{ color: "blue", fontSize: 25 }}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius:8
    }
});

export default LoginForm;
