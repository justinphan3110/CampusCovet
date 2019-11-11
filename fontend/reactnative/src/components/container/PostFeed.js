import React, { Component } from 'react'
import { Post } from "../presentation"
import { FlatList, Text, View} from "react-native";
import {List, ListItem} from "react-native-elements"

export default class PostFeed extends Component {

    _renderPost({item}) {
        // return <Post />;
        return <Post/>
    }

    _returnKey(item) {
        return Math.random();
    }

    render() {
        return (
          <View style={{ flex: 1 }}>  
            <FlatList data={[1,2,3,4,5,6,7,8,9,10,11,12]} 
               renderItem={this._renderPost}

            />

            </View>
        )
    }
}
