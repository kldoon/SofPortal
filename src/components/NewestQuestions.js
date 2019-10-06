import React, { Component } from 'react'
import { Icon } from 'antd'
import QuestionsList from './QuestionsList'
import api from '../tools/api'


export default class NewestQuestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
        api.posts.getRecentPosts().then(res => {
            console.log(res.data);
            this.setState({posts: res.data.items});
        })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div >
                {this.state.posts.length>0 && <QuestionsList posts={this.state.posts} />}
                {this.state.posts.length===0 && 
                    <Icon type="sync"  spin style={{fontSize:"25px",width: "100%", height:"500px",margin:"0 auto" }} />}
            </div>
        )
    }
}
