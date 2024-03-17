import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { USER_QUERY } from '../utils/queries';
import { UPDATE_PET_MUTATION } from '../utils/mutations';
import ThreeScene from './ThreeScene';
import decode from 'jwt-decode';
import forest from '../assets/backgrounds/pet-backgrounds/forest.jpg'
import desert from '../assets/backgrounds/pet-backgrounds/desert.jpg'
import clouds from '../assets/backgrounds/pet-backgrounds/clouds.jpg'
import underwater from '../assets/backgrounds/pet-backgrounds/underwater.jpg'

export default function Display() {
    const [playAnimation, setPlayAnimation] = useState(false);
    const [cleanAnimation, setCleanAnimation] = useState(false);
    const [sleepAnimation, setSleepAnimation] = useState(false);
    const [feedAnimation, setFeedAnimation] = useState(false);

    const token = localStorage.getItem('id_token');
    if (!token) {
        return (
            <div>
                <p style={{ color: 'white' }}>please log in!</p>
            </div>
        );
    }

    const decoded = decode(token);
    let pet = { name: 'name' };

    const { loading, data, refetch } = useQuery(USER_QUERY, {
        variables: { id: decoded.data._id }
    });

    const [updatePetMutation] = useMutation(UPDATE_PET_MUTATION);

    if (loading) {
        return <div></div>;
    }

    const user = data?.user || {};
    if (user) {
        const petArray = user.pets;
        pet = petArray[petArray.length - 1];
    }

    let petFun = pet.health.fun;
    let petClean = pet.health.cleanliness;
    let petSleep = pet.health.sleep;
    let petHunger = pet.health.hunger;

    const today = Date.now();
    const birthday = new Date(parseInt(pet.birthday));
    const differenceInMilliseconds = Math.abs(today - birthday);
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysOld = Math.floor(differenceInMilliseconds / millisecondsInDay);
    const days = daysOld > 1 ? `${daysOld} days old` : daysOld === 1 ? '1 day old' : 'born today';

    const handleUpdatePet = async (petFun, petClean, petSleep, petHunger) => {
        await refetch();
        try {
            await updatePetMutation({
                variables: {
                    petId: pet._id,
                    updateData: {
                        last_interaction: today.toString(),
                        health: {
                            fun: petFun,
                            cleanliness: petClean,
                            hunger: petHunger,
                            sleep: petSleep
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Failed to update pet:', error);
        }
    };

    const handlePlayButtonClick = async () => {
        petFun = pet.health.fun + 0.15;
        if (petFun > 1) {
            petFun = 1
        }
        await handleUpdatePet(petFun, petClean, petSleep, petHunger);
        setPlayAnimation(true);
        setTimeout(() => {
            setPlayAnimation(false);
        }, 1000);
    };

    const handleCleanButtonClick = async () => {
        petClean = pet.health.cleanliness + 0.15;
        if (petClean > 1) {
            petClean = 1
        }
        await handleUpdatePet(petFun, petClean, petSleep, petHunger);
        setCleanAnimation(true);
        setTimeout(() => {
            setCleanAnimation(false);
        }, 1000);
    };

    const handleSleepButtonClick = async () => {
        petSleep = pet.health.sleep + 0.15;
        if (petSleep > 1) {
            petSleep = 1
        }
        await handleUpdatePet(petFun, petClean, petSleep, petHunger);
        setSleepAnimation(true);
        setTimeout(() => {
            setSleepAnimation(false);
        }, 1000);
    };

    const handleFeedButtonClick = async () => {
        petHunger = pet.health.hunger + 0.15;
        if (petHunger > 1) {
            petHunger = 1
        }
        await handleUpdatePet(petFun, petClean, petSleep, petHunger);
        setFeedAnimation(true);
        setTimeout(() => {
            setFeedAnimation(false);
        }, 1000);
    };

    let backgroundImage = '';
    switch (pet.location) {
        case 'Forest':
            backgroundImage = `url(${forest})`;
            break;
        case 'Desert':
            backgroundImage = `url(${desert})`;
            break;
        case 'Clouds':
            backgroundImage = `url(${clouds})`;
            break;
        case 'Underwater':
            backgroundImage = `url(${underwater})`;
            break;
        default:
            // Default background image or fallback
            backgroundImage = `url(${forest})`;
            break;
    }

    refetch()

    return (
        <div className="displayContainer">
            <div className="petContainer">
                <div className="petCircle" style={{ backgroundImage }}>
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
                <h3 className="displayHeader">{pet.name}</h3>
                <p id="description">{pet.type}, {days}</p>
            </div>
            {/* <div className='mainHealthContainer'> */}
                <div className="healthContainer">
                    <h3 className="displayHeader">Health:</h3>
                    <div className='bar'>
                        <p>Fun:</p>
                        <div className="progress">
                            <div className="determinate" id="greenColor" style={{ width: (petFun * 100 + '%') }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Hunger:</p>
                        <div className="progress">
                            <div className="determinate" id="orangeColor" style={{ width: (petHunger * 100 + '%') }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Hygiene:</p>
                        <div className="progress">
                            <div className="determinate" id="blueColor" style={{ width: (petClean * 100 + '%') }}></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <p>Energy:</p>
                        <div className="progress">
                            <div className="determinate" id="medPurpleColor" style={{ width: (petSleep * 100 + '%') }}></div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}