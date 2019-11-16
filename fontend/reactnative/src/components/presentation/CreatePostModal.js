import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, TouchableHighlight, Dimensions } from "react-native";
import axios from 'axios';
import { REST_CONNECTION, COMPLAIN } from 'react-native-dotenv';
import config from '../../config'



export default class CreatePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
        };

        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal = () => {
        this.props.setModalVisible();
    }


    render() {
        return (
            // <TouchableOpacity
            //                   activeOpacity={1} 
            //                   disabled={true}
            // >

            <View style={styles.modalContainer}>
                <View style={styles.createPostBar}>
                    <Text style={styles.creatPostText}>Kvetch Post</Text>
                </View>

                <View style={styles.postContainer}>

                    <Image style={styles.bagOnHeadPic}
                        source={config.images.bagOnHeadAVA}
                    />

                    <Text style={styles.mainPostText}>What's on your mind</Text>
                </View>

                <TouchableOpacity style={styles.postButton}
                    onPress={() => alert('pressed')}>

                    <Text style={styles.postText}>Post</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.close} onPress={() => this.closeModal()}>
                    <Text >Close</Text>
                </TouchableOpacity>

            </View>
            // {/* </TouchableOpacity> */}
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        // borderRadius: 4,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)',
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: 'rgb(250,250,250)',
    },
    createPostBar: {
        height: 60,
        justifyContent: 'center',
        textAlignVertical: 'center',
        // borderRadius: 40,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)',
        // backgroundColor: 'rgb(250,250,250)'

    },

    creatPostText: {
        marginTop: 20,
        color: "#758599",
        fontSize: 13,
        marginLeft: 10,
    },
    close: {
        marginTop: 30
    },

    postContainer: {
        // marginTop: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        // alignItems: "center",
        // borderRadius: 40,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)',
        height: 100,
    },

    bagOnHeadPic: {
        marginTop: 20,
        height: 40,
        width: 40,
        borderRadius: 20
    },

    mainPostText: {
        marginTop: 30,
        marginLeft: 10,
        color: "#ABABAB",
        marginLeft: 10
    },

    postButton: {
        width: 60,
        // height: 60,
        backgroundColor: "rgb(28,14,51)",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 40,
        borderWidth: 0.7,
        borderColor: "rgb(28,14,51)",
        // : 'center',
    },

    postText: {
        color: 'rgb(250,250,250)'
    }



})