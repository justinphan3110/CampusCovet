import React, { Component } from 'react'
import { Post } from "../presentation"
import { FlatList, Text, View} from "react-native";
import axios from 'axios';
import {REST_CONNECTION , COMPLAIN} from 'react-native-dotenv';

export default class PostFeed extends Component {

    //Cosntructor
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            post: []
        }
    }

    _renderPost({item}) {
        // return <Post />;
        return <Post description={item.description} 
                     like={item.like} 
                     id={item._id}
                     comment={item.comments}/>
    }

    _returnKey(item) {
        return Math.random();
    }


    componentDidMount(){
        this.getPostInfo()
    }


    getPostInfo() {

        axios.get(REST_CONNECTION + COMPLAIN).then((response) => {
            this.setState({
                post: response.data
            })
        }).catch(error => console.log(error))
    }


    render() {
        this.getPostInfo()
        // console.log(this.state.post)
        return (
          <View style={{ flex: 1 }}>  
            <FlatList data={this.state.post} 
               renderItem={this._renderPost}

            />

            </View>
        )
    }
}
