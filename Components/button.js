import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton( { text, onPress } ) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginTop: 20,
        padding: 20,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#FF4B3A',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})