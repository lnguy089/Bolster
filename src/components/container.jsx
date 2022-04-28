import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import ImageContainer from './imageContainer';
import ScoreTally from './ScoreTally';
const Container = () => {
    const randomArray = [
        'dhl', 
        'dropbox', 
        'instagram', 
        'linkedin', 
        'match',
        'microsoft',
        'netflix',
        'paypal',
        'uber',
        'wellsfargo'
    ]
    /* 
    code breaking bug 
    

    */
    const [wrong, setWrong] = useState(0);
    const [right, setRight] = useState(0);
    
    const isRight = () => {
        console.log("You are Right");
        console.log(right);
        setRight(prev => prev + 1);
    }
    const isWrong = () => {
        console.log("You are wrong");
        console.log(wrong);
        setWrong(prev => prev + 1);
    }
    const [currentArray, setCurrentArray] = useState(randomArray);
    const [currentImage, setCurrentImage] = useState(Math.floor(Math.random() * 10))
    const changeImage = () => {
        setCurrentImage((Math.floor(Math.random() * (currentArray.length))))
    }
    const removeElem = () => {
        console.log(currentImage);

        // setCurrentArray((prev)=> {
        //     prev.filter((img, i) => i !== currentImage)
        // })
        changeImage();
    }
    const restart = () => {
        setWrong(0);
        setRight(0);
        changeImage();
    }
    const [restartTimer, setRestartTimer] = useState(false);
    const stopTimer = () => {
        setRestartTimer(true);
    }
    const beginTimer = () => {
        setRestartTimer(false);
    }
    return (
        <div className="container">
            <ScoreTally rightScore={right} wrongScore={wrong}/>
            
            <ImageContainer stopTime={stopTimer} currImage={currentArray[currentImage]} rightClick={isRight} wrongClick={isWrong}/>
            <Timer isWrong={isWrong} restart={restart} beginTime={beginTimer} remove={removeElem} timerRestart={restartTimer}/>
            <button onClick={()=>restart()}> Restart </button>
        </div>
    )
}
export default Container; 