import React, { useEffect, useState } from 'react';

const questionNumber = (props) => {
    const clicked = () => {
        props.increment()
        props.remove();
        props.beginTime();
    }
    return(
        <React.Fragment>
            <button onClick={() => clicked()}>
                Next
            </button>
        </React.Fragment>
    )
}

export default questionNumber;