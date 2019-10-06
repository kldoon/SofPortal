import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import api from '../tools/api'


export default class NewestQuestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: new Date(),
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
            <div>
                {this.state.posts.length && (
                    <QuestionsList posts={this.state.posts} />
                )}                
            </div>
        )
    }
}
