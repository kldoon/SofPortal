import React from 'react'
import PropTypes from 'prop-types'

function Answer(props) {
    return (
        <div className={(props.answer.is_accepted?"answer accepted":"answer")}>
            <div  dangerouslySetInnerHTML={{__html: props.answer.body}} />
            <div style={{borderTop:"1px #d6d6d6 solid"}}>
                By <b>{props.answer.owner.display_name}</b> on {(new Date(props.answer.creation_date*1000)).toLocaleDateString()+" "+(new Date(props.answer.creation_date*1000)).toLocaleTimeString()}
            </div>
        </div>
    )
}

Answer.propTypes = {
    answer:PropTypes.instanceOf(Object).isRequired  
}

export default Answer

