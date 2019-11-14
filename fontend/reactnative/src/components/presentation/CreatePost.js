import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import axios from 'axios';
import { REST_CONNECTION, COMPLAIN } from 'react-native-dotenv';
import config from '../../config'

export default class CreatePost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.createPostBar}>
                    <Text style={styles.creatPostText}>Kvetch Post</Text>
                </View>

                <View style={styles.mainPostBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.bagOnHeadPic}
                            source={config.images.bagOnHeadAVA}
                        />
                        <Text style={styles.mainPostText}>What's on your mind</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //   padding: 10,
        borderRadius: 4,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)',
        marginBottom: 20,
        marginTop: 10
        // height: 200
    },
    createPostBar: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        textAlignVertical: 'center',
        borderRadius: 4,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)'

    },

    mainPostBar: {
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        textAlignVertical: 'center',
    },

    mainPostText: {
        marginLeft: 10,
        color: "#ABABAB"
    },

    bagOnHeadPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    creatPostText: {
        color: "#758599",
        fontSize: 13,
        marginLeft: 10
    }
});