import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, Image, Alert, TouchableOpacity, TouchableHighlight, Dimensions } from "react-native";
import axios from 'axios';
import { REST_CONNECTION, COMPLAIN } from 'react-native-dotenv';

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
            // <TouchableOpacity activeOpacity={1} disabled={true}>
                <View style={[styles.modalContainer, { width: this.state.width -80 }]}>
                    <Text>In Modal</Text>
                    <TouchableOpacity onPress={() => this.closeModal()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            // {/* </TouchableOpacity> */}
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {

    }
})