import React, { useEffect, useState } from 'react';

const ImageContainer = (props) => {
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 2))
    const [alreadyClicked, setAlreadyClick] = useState(false);
    const isClickedRight = () => {
        props.stopTime();
        setAlreadyClick(true);

        if(!alreadyClicked) {
            props.rightClick(); 
        }
    }
    const isClickedWrong = () => {
        props.stopTime();
        setAlreadyClick(true);
        if(!alreadyClicked) {
            props.wrongClick()
        }
    }
    useEffect(()=> {
        console.log(randomNum);
        setRandomNum(Math.floor(Math.random() * 2));
        setAlreadyClick(false);
    }, [props.currImage]);
    
    return (
        <div className='ImageContainer'>
            {randomNum === 0 ? 
            <React.Fragment>
                <div >
                    <img onClick={()=> isClickedRight()} id='Image1' src={`/img/${props.currImage}-clean.png`}></img>
                </div>
                <div>
                    <img onClick={()=> isClickedWrong()} id='Image2' src={`/img/${props.currImage}-phish.png`}></img>
                </div>
            </React.Fragment> 
            : <React.Fragment>
            <div >
                <img onClick={()=> isClickedWrong()} id='Image2' src={`/img/${props.currImage}-phish.png`}></img>
            </div>
            <div >
                <img onClick={()=> isClickedRight()} id='Image1' src={`/img/${props.currImage}-clean.png`}></img>
            </div>
        </React.Fragment> 
            }
        </div>
    )
}

export default ImageContainer;