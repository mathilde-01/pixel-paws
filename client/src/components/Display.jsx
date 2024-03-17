import ThreeScene from './ThreeScene';
import React, { useState } from 'react';
import decode from 'jwt-decode';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../utils/queries'
// import { useMutation } from '@apollo/client';
// import { MUTATION } from '../utils/mutations';

export default function Display() {
    const token = localStorage.getItem('id_token');
    const decoded = decode(token);
    let pet = {name: 'name'};

    const [playAnimation, setPlayAnimation] = useState(false);
    // const [playMutation] = useMutation(YOUR_MUTATION);
    const [cleanAnimation, setCleanAnimation] = useState(false);
    const [sleepAnimation, setSleepAnimation] = useState(false);
    const [feedAnimation, setFeedAnimation] = useState(false);

    const handlePlayButtonClick = async () => {
        // Change animation to "Roll"
        setPlayAnimation(true);

        // get pet data
        // add to bar
        // call update pet

        // Reset animation to "Idle_A" after 1 second
        setTimeout(() => {
            setPlayAnimation(false);
        }, 900);
    };

    const handleCleanButtonClick = async () => {
        // Change animation to "Clean"
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
        // Change animation to "Feed"
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

    const { loading, data } = useQuery(USER_QUERY, {
        variables: { id: decoded.data._id}
    });

    if (loading) {
        return <div>Loading...</div>; // Render loading indicator while data is being fetched
    }

    const user = data?.user || {};
    if (user) {
        const petArray = user.pets;
        pet = petArray[petArray.length - 1];
    }

    return (
        <div className="displayContainer">
            <div className="petContainer">
                <div className="petCircle">
                    <ThreeScene playAnimation={playAnimation} feedAnimation={feedAnimation} sleepAnimation={sleepAnimation} cleanAnimation={cleanAnimation}/>
                </div>
                <div className="petStand"></div>
            </div>
            <div className="btnContainer">
                <a className="btn-small" id="greenColor" onClick={handlePlayButtonClick}>Play</a>

                <a className="btn-small" id="blueColor" onClick={handleCleanButtonClick}>Clean</a>

                <a className="btn-small" id="medPurpleColor" onClick={handleSleepButtonClick}>Sleep</a>

                <a className="btn-small" id="orangeColor" onClick={handleFeedButtonClick}>Feed</a>
            </div>
            <div className="nameContainer">
                <h3 id="name">{pet.name}</h3>
                <p id="description">description</p>
            </div>
            {/* <div className='mainHealthContainer'> */}
                <div className="healthContainer">
                    <div className='bar'>
                        <p>Health:</p>
                        <div className="progress">
                            <div className="determinate" id="healthBar" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Fun:</p>
                        <div className="progress">
                            <div className="determinate" id="greenColor" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Hunger:</p>
                        <div className="progress">
                            <div className="determinate" id="orangeColor" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Hygiene:</p>
                        <div className="progress">
                            <div className="determinate" id="blueColor" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Energy:</p>
                        <div className="progress">
                            <div className="determinate" id="medPurpleColor" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}