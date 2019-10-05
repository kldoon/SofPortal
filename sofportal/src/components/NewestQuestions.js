import React, { Component } from 'react'
import api from '../tools/api'
export default class NewestQuestions extends Component {
    
    constructor(props)
    {
        super(props);
        
        this.state={
            posts: new Date(),
        }
        api.posts.getRecentPosts().then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        });
        

    }
    render() {
        return (
            <div>
                NewestQuestionsNewestQuestionsNewestQuestionsNewestQuestionsNewestQuestionsNewestQuestions
            </div>
        )
    }
}
