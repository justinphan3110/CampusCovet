import React, { Component } from 'react'
import { Post, CreatePost } from "../presentation"
import { FlatList, Text, View, StyleSheet } from "react-native";
import axios from 'axios';
import { REST_CONNECTION, COMPLAIN } from 'react-native-dotenv';

export default class PostFeed extends Component {

    //Cosntructor
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            post: []
        }
    }

    _renderPost({ item }) {
        // return <Post />;
        return <Post description={item.description}
            like={item.like}
            id={item._id}
            comment={item.comments}
            topic={item.topic} />
    }

    _returnKey(item) {
        return Math.random();
    }


    componentDidMount() {
        this.getPostInfo()
    }


    getPostInfo() {
        
        axios.get(REST_CONNECTION + COMPLAIN).then((response) => {
            this.setState({
                post: response.data
            })
        }).catch(error => console.log(error))
    }

    postFeedHeader() {
        return <CreatePost />
    }
    render() {
        this.getPostInfo()
        // console.log(this.state.post)
        return (
            <View style={styles.container}>
                <View>
                    <FlatList 
                        ListHeaderComponent={this.postFeedHeader}
                        data={this.state.post}
                        renderItem={this._renderPost}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 22,
        flex: 1,
        backgroundColor: '#EEF2F6'
    }
});
