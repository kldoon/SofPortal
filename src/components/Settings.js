import React, { Component } from 'react'
import { Input, Row, Col, Button, Tag, Slider } from 'antd'

export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSettings:{
                intervalInDays:7,
                maxPostsCount:10,
                tags:['android'],
                settingDate: new Date()
            },
            data:{
                topic:"",
                intervalInDays:7,
                maxPostsCount:10
            }
        }
    }

    componentDidMount=()=>{
        this.setState({currentSettings:JSON.parse(localStorage.sofSettings)},()=>{
            this.setState({data:{...this.state.data,
                intervalInDays:this.state.currentSettings.intervalInDays,
                maxPostsCount:this.state.currentSettings.maxPostsCount
            }});
        });
        
    }

    addTopic = () => {
        if(!this.state.data.topic.length)
            return;
        const { tags } = this.state.currentSettings;
        tags.push(this.state.data.topic);
        this.setState({ tags });        
        this.setState({ data: { ...this.state.data, topic: "" }   });
      };

    deleteTopic = (index) => {
        const { tags } = this.state.currentSettings;
        tags.splice(index, 1);
        this.setState({ tags });        
      };
    onChange = e =>{
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }
    onChangeInterval = v =>{            
        this.setState({
            data: { ...this.state.data, intervalInDays: v }
        });
        this.setState({currentSettings:{...this.state.currentSettings,intervalInDays:v}})
    }
    onChangeQCount = v =>{            
        this.setState({
            data: { ...this.state.data, maxPostsCount: v }
        });

        this.setState({currentSettings:{...this.state.currentSettings,maxPostsCount:v}})
    }
    
    onSave= () => {
        console.log("save");
        this.setState({currentSettings:{...this.state.currentSettings,settingDate:new Date()}})    
        localStorage.sofSettings=JSON.stringify(this.state.currentSettings);
    }
    
    onReset= () => {
        console.log("reset");
        this.setState({currentSettings:JSON.parse(localStorage.sofSettings)},()=>{
            this.setState({data:{...this.state.data,
                intervalInDays:this.state.currentSettings.intervalInDays,
                maxPostsCount:this.state.currentSettings.maxPostsCount
            }});
        });
    }

    render() {

        const { data } = this.state;
        const { tags } = this.state.currentSettings;

        return (
            <div style={{height:"500px"}}>            
                <Row gutter={16}  className="settingRow">
                    <Col  span={6}>
                        Topics of interest
                    </Col>
                    <Col  span={8}>
                        <div style={{display:"flex"}}>
                        <Input  placeholder="android" value={data.topic} name="topic" onChange={this.onChange} /> 
                        <Button  onClick={this.addTopic}
                        type="primary" shape="circle" icon="plus" style={{ marginLeft: "10px" }} /> 
                        </div>
                    </Col>
                    <Col  span={10}>
                        <div style={{display:"flex",flexWrap: "wrap",width:"100%"}}>
                            {
                                tags.map((t,index)=>
                                <Tag key={t+"_"+index} style={{marginTop:"5px"}} closable onClose={()=>this.deleteTopic(index)}>
                                    {t}
                                </Tag>)
                                    
                            }
                        </div>
                    </Col>                    
                </Row>
                <Row gutter={16} className="settingRow">
                    <Col  span={6}>
                        Interval in days (default 7)
                    </Col>
                    <Col  span={8}>
                        <div>
                        <Slider
                            min={1}
                            max={30}                                                         
                            onChange={this.onChangeInterval}
                            value={data.intervalInDays}
                        />
                        </div>
                    </Col>                  
                </Row>
                <Row gutter={16} className="settingRow">
                    <Col  span={6}>
                        Maximum questions in page (default 10)
                    </Col>
                    <Col  span={8}>
                        <div>
                        <Slider
                            min={1}
                            max={30}                                                         
                            onChange={this.onChangeQCount}
                            value={data.maxPostsCount}
                        />
                        </div>
                    </Col>
                    <Col  span={11}></Col>                    
                </Row>
                
                <Row gutter={16} className="settingRow">                    
                    <Col  span={24} style={{textAlign:"right"}}> 
                        <Button type="default" size={"large"} onClick={this.onReset}> Reset</Button> &nbsp;                                               
                        <Button type="primary" size={"large"} onClick={this.onSave}> Save</Button>
                    </Col>                    
                </Row>

            </div>
        )
    }
}
