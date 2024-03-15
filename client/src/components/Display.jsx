import ThreeScene from './ThreeScene';
import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';
// import { ME_QUERY } from '../utils/queries'
// import { MUTATION } from '../utils/mutations';

export default function Display() {

    const [playAnimation, setPlayAnimation] = useState(false);
    // const [playMutation] = useMutation(YOUR_MUTATION);
    const [cleanAnimation, setCleanAnimation] = useState(false);
    const [sleepAnimation, setSleepAnimation] = useState(false);
    const [feedAnimation, setFeedAnimation] = useState(false);

    const handlePlayButtonClick = async () => {
        // Change animation to "Roll"
        setPlayAnimation(true);

        // fun mutation
        // try {
        //     await funMutation(); 
        // } catch (error) {
        //     console.error('Error performing mutation:', error);
        // }

        // Reset animation to "Idle_A" after 1 second
        setTimeout(() => {
            setPlayAnimation(false);
        }, 900);
    };

    const handleCleanButtonClick = async () => {
        // Change animation to "Death"
        setCleanAnimation(true);

        // sleep mutation
        // try {
        //     await sleepMutation(); 
        // } catch (error) {
        //     console.error('Error performing mutation:', error);
        // }

        // Reset animation to "Idle_A" after 1 second
        setTimeout(() => {
            setCleanAnimation(false);
        }, 800);
    };

    const handleSleepButtonClick = async () => {
        // Change animation to "Death"
        setSleepAnimation(true);

        // sleep mutation
        // try {
        //     await sleepMutation(); 
        // } catch (error) {
        //     console.error('Error performing mutation:', error);
        // }

        // Reset animation to "Idle_A" after 1 second
        setTimeout(() => {
            setSleepAnimation(false);
        }, 800);
    };

    const handleFeedButtonClick = async () => {
        // Change animation to "Death"
        setFeedAnimation(true);

        // sleep mutation
        // try {
        //     await sleepMutation(); 
        // } catch (error) {
        //     console.error('Error performing mutation:', error);
        // }

        // Reset animation to "Idle_A" after 1 second
        setTimeout(() => {
            setFeedAnimation(false);
        }, 800);
    };

    return (
        <div className="displayContainer">
            <div className="petContainer">
                <div className="petCircle">
                    <ThreeScene playAnimation={playAnimation} feedAnimation={feedAnimation} sleepAnimation={sleepAnimation} cleanAnimation={cleanAnimation}/>
                </div>
                <div className="petStand"></div>
            </div>
            <div className="btnContainer">
                <a className="waves-effect waves-light btn-small" id="greenColor" onClick={handlePlayButtonClick}>Play</a>

                <a className="waves-effect waves-light btn-small" id="blueColor" onClick={handleCleanButtonClick}>Clean</a>

                <a className="waves-effect waves-light btn-small" id="medPurpleColor" onClick={handleSleepButtonClick}>Sleep</a>

                <a className="waves-effect waves-light btn-small" id="orangeColor" onClick={handleFeedButtonClick}>Feed</a>
            </div>
            <div className="nameContainer">
                <h3 id="name">name</h3>
                <p id="description">description</p>
            </div>
            {/* <div className='mainHealthContainer'> */}
                <div className="healthContainer">
                    <div className="progress">
                        <div className="determinate" style={{ width: '70%' }}></div>
                    </div>
                    <div className="progress">
                        <div className="determinate" id="greenColor" style={{ width: '70%' }}></div>
                    </div>
                    <div className="progress">
                        <div className="determinate" id="orangeColor" style={{ width: '70%' }}></div>
                    </div>
                    <div className="progress">
                        <div className="determinate" id="blueColor" style={{ width: '70%' }}></div>
                    </div>
                    <div className="progress">
                        <div className="determinate" id="medPurpleColor" style={{ width: '70%' }}></div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}