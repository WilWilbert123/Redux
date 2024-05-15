import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import WelcomeHomeScreen from './WelocomeHHomeScreen';
import LoginForm from './LoginForm';

const HomeScreen = () => {
    const isSignedIn = useSelector((state: any) => state.userData.isSignedIn);

    return (
        <View style={styles.container}>
            {isSignedIn ? (
                <View style={styles.content}>
                    <WelcomeHomeScreen />
                </View>
            ) : (
                <View style={styles.content}>
                    <LoginForm />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
});

export default HomeScreen;
