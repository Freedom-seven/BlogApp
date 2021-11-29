import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const FavouriteTab = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/gif/liked.gif')} style={styles.image} />
        </View>
    )
}

export default FavouriteTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    }
})
