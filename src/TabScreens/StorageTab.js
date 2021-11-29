import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const StorageTab = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/gif/folder.gif')} style={styles.image} />
        </View>
    )
}

export default StorageTab

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
    },

})
