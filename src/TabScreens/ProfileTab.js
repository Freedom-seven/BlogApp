import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const ProfileTab = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/gif/user-icons.gif')} style={styles.image} />
        </View>
    )
}

export default ProfileTab

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
