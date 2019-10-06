import React from 'react'
import { Collapse, List, Avatar, Badge } from 'antd'
import Answer from './Answer'
import PropTypes from 'prop-types'

const { Panel } = Collapse;

function QuestionsList(props) {    
    return (
        <Collapse accordion destroyInactivePanel={true} expandIconPosition="right">
            {
                props.posts.map((item)=> 
                <Panel key={item.question_id} header={React.createElement('div', {}, <List.Item.Meta
                avatar={<Avatar src={item.owner.profile_image} />}
                title={<label>  {(props.topVoted && <b>({item.score})</b>)} <b  dangerouslySetInnerHTML={{__html: item.title}} /><a href={item.link} target="blank" style={{float:"right",marginTop:"10px"}}>
                    <img src="./gotosof.png" alt="goto stack overflow" width="24"/></a></label>}
                description={(new Date(item.creation_date*1000)).toLocaleDateString() +" "+(new Date(item.creation_date*1000)).toLocaleTimeString() +" by: "+item.owner.display_name}
                />
                )}>                                
                    <div className="question-panel">
                        <div  dangerouslySetInnerHTML={{__html: item.body}} />
                        {
                            (item.answer_count>0 &&
                                <div>
                                    <hr/>
                                    <h3>Answers <Badge count={item.answer_count} style={{ backgroundColor:(item.is_answered?"#52c41a":"#f5222d")  }} /></h3>
                                    {item.answers.map(ans=><Answer answer={ans} key={ans.answer_id} />)}
                                </div>
                            )
                        }
                    </div>
                </Panel>
                )
            }
            </Collapse>
    )
}

QuestionsList.propTypes = {
    posts:PropTypes.instanceOf(Object).isRequired,
    topVoted:PropTypes.bool
}

export default QuestionsList

