import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

const images = [
    { id: 1, uri: 'https://i0.wp.com/technode.com/wp-content/uploads/2023/11/robots-scaled.jpg?fit=2000%2C1122&ssl=1' },
    { id: 2, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJPNedvNi53kuw_En2uZbBTIgUqNhe8EQWH7Jk7sAiA&s' },
    { id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvmmXsjZFYkZFNVVNVc1a5kt7bQE_dfN5_Oy3YhM5cQ&s' },
];

const WelcomeHomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
                {images.map((item, index) => (
                    <Image key={index} source={{ uri: item.uri }} style={styles.image} />
                ))}
                {images.map((item, index) => (
                    <Image key={index + images.length} source={{ uri: item.uri }} style={styles.image} />
                ))}
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    image: {
        width: 200,
        height: 200,
        marginHorizontal: 10,
        borderRadius: 10,
    },
});

export default WelcomeHomeScreen;
