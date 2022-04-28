import React, { useEffect, useState } from 'react';
import QuestionNumber from './QuestionNumber';
const Timer = (props) => {
    const [counter, setCounter] = useState(15);
    const restartCounter = () => {
        setCounter(15);
    }
    const zeroCounter = () => {
        setCounter(0);
    }
    useEffect(() => {
        if(counter > 0) {
            const timer = setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer)
        } else {
            props.isWrong();
        }
    }, [counter]);

    useEffect(()=> {
        if(props.timerRestart) {
            zeroCounter();
        } else {
            restartCounter();
        }
    },[props.timerRestart])
    const [questionNum, setquestionNum] = useState(1);
    const incrementQNum = () => {
        setquestionNum((prev) => prev + 1)
        restartCounter();        
    }
    useEffect(()=> {
        if(questionNum > 10) {
            setquestionNum(0);
            props.restart();
        }
    }, [questionNum])
    return (
        <div className="Timer">
        <div>Countdown: {counter}</div>
        <div className='questionNumber'>
                Question Number: {questionNum} / 10
            </div>
        {counter === 0 ?<QuestionNumber beginTime={props.beginTime} questionNum={questionNum} increment={incrementQNum} remove={props.remove}/> : <React.Fragment></React.Fragment>}
        </div>
    );
}

export default Timer; 