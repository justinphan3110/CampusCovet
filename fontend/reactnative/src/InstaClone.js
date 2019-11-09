import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from "./config"

class InstaClone extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width,
            liked: false
        };
    }

    onDoublePress = (date) => {
        const time = new Date().getTime();
        const delta = time - this.lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            this.likeToggled()
        }
        this.lastPress = time;
    };

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const likeIconColor = (this.state.liked) ? "rgb(41,215,184)" : null;

        return (
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.titleBar}>
                    <Text>Campus Kvetch</Text>
                </View>

                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.userPic}
                            source={config.images.anonymousAVA}
                        />
                        <Text style={{ fontSize: 13, marginLeft: 10 }}>Anonymous @ Case Western Reserve University (CWRU) </Text>
                    </View>
                    <View>

                    </View>

                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={this.onDoublePress}>
                    <View style={{ minHeight: '10%' }}>
                        <Text style={{ fontSize: 13, marginLeft: 10 }}> Complaining fdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss xfhfdhdfdf </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height: 40, width: 40, tintColor: likeIconColor}]} source={config.images.likeIcon} />
                    <Text>Like · 1</Text>
                    <Image style={[styles.icon, {height: 40, width:40}]}source={config.images.addCommentIcon} />
                    <Text>Comment · 1</Text>
                </View>

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
    },
    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: 50,
        width: 100 + "%",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 5,
        marginTop: -20,
    }
});

export default InstaClone;