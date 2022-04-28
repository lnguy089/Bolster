import React from 'react';

const ScoreTally = (props) => {
    
    return (
        <div className='score'>
            <div>
                Questions Right: {props.rightScore}
            </div>
            <div>
                Questions Wrong: {props.wrongScore}
            </div>
        </div>
    )
}

export default ScoreTally; 