import React, { Component } from 'react'

export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSettings:{
                intervalInDays:7,
                maxPostsCount:10,
                tags:['android']

            }
        }
    }
    render() {
        return (
            <div>
                settingssdsdaf
            </div>
        )
    }
}
