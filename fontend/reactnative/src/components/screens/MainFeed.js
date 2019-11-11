import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PostFeed from '../container/PostFeed'


class MainFeed extends Component {
    render() {

        return (
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.titleBar}>
                    <Text>Campus Kvetch</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleBar: {
        width: 100 + "%",
        height: 56,
        marginTop: 10,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MainFeed;