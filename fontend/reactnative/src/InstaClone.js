import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import config from "./config"

class InstaClone extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width
        };
    }


    render() {
        return (
            <View style={{ flex:1 , width: 100 + "%", height: 100 + "%"}}>
                <View style={styles.titleBar}>
                    <Text>Campus Kvetch</Text>
                </View>

                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems : "center"}}>
                        <Image style={styles.userPic}
                           source={config.images.anonymousAVA}
                        /> 
                        <Text style={{ fontSize: 13, marginLeft: 10}}>Anonymous @ Case Western Reserve University (CWRU) </Text>
                    </View>
                    <View>
                        
                    </View>

                </View>

                <View style={{minHeight: '10%'}}>
                    <Text style={{ fontSize: 13, marginLeft: 10}}> Complaining fdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss xfhfdhdfdf </Text>
                </View>
                <View style={styles.iconBar}>
                  <TouchableOpacity>  
                    <Image resizeMode="contain" style={styles.icon} source={config.images.likeIcon}/>
                    <Image style={styles.icon} source={config.images.dislikeIcon}/>
                    <Image style={styles.icon} source={config.images.addCommentIcon}/>
                   </TouchableOpacity> 
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
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 40,
        width:40,
        marginLeft: 5,
        marginTop: 20,
    }
});

export default InstaClone;