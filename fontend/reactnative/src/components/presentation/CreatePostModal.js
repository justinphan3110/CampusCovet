import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Picker, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from "react-native";
import axios from 'axios';
import { REST_CONNECTION, COMPLAIN } from 'react-native-dotenv';
import config from '../../config'



export default class CreatePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            content: "",
            topic: "random",
        };

        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal = () => {
        this.props.setModalVisible();
    }

    handleTextChanged(newText) {
        this.setState({
            content: newText
        })
    }

    post = () => {

        if (this.state.content !== "") {
            console.log("posting: topic " + this.state.topic)
            axios.post(REST_CONNECTION + COMPLAIN, {
                "description": this.state.content,
                "topic" : this.state.topic
            }).then(function (response) {
                // console.log(response);
            })
                .catch(error => console.log(error))
        }
        this.closeModal();

    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >

                <View style={styles.modalContainer}>

                    <View style={styles.createPostBar}>
                        <Text style={styles.creatPostText}>Kvetch Post</Text>
                        <Text style={styles.postAnonymousText}>Post Anonymous</Text>
                    </View>

                    <View style={styles.postContainer}>

                        <Image style={styles.bagOnHeadPic}
                            source={config.images.bagOnHeadAVA}
                        />

                        <TextInput placeholder="What's on your mind ?"
                            onChangeText={this.handleTextChanged.bind(this)}
                            maxLength={100}
                            autoFocus={true}
                            multiline={false}
                            style={styles.mainPostText} />
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{marginTop: 6}}>
                            <Picker 
                                 style={{width: 130}} 
                                selectedValue = {this.state.topic}
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({topic: itemValue
                                })}>
                            
                            <Picker.Item label="random" value="random" />
                            <Picker.Item label="housing" value="housing"/>
                            <Picker.Item label="food" value="food"/>
                            <Picker.Item label="class" value="class"/>
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.postButton}
                            onPress={() => this.post()}>

                            <Text style={styles.postText}>Post</Text>

                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.close} onPress={() => this.closeModal()}>
                        <Text >Close</Text>
                    </TouchableOpacity>

                </View>
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
        height: 40,
        alignItems: "center",
        // textAlignVertical: 'center',
        paddingHorizontal: 10,
        flexDirection: "row",
        // borderRadius: 40,
        borderWidth: 0.7,
        borderColor: 'rgb(213,218,224)',
        // backgroundColor: 'rgb(250,250,250)'

    },

    creatPostText: {
        color: "#758599",
        fontSize: 13,
        marginLeft: 10,
    },

    postAnonymousText: {
        color: "#003A49",
        fontSize: 13,
        marginLeft: 200,
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
        marginTop: -18,
        marginLeft: 10,
        color: "#ABABAB",
        marginLeft: 10
    },

    postButton: {
        width: 60,
        height: 20,
        backgroundColor: "rgb(28,14,51)",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 40,
        borderWidth: 0.7,
        borderColor: "rgb(28,14,51)",
        // alignSelf: 'flex-end',
        marginRight: 20,
    },

    postText: {
        color: 'rgb(250,250,250)',
        fontSize: 15
    }



})