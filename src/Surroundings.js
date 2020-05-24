import React from 'react';
import Tamagotchi from './Tamagotchi';
import cowImg from './Cow.png'
import './Surroundings.css';

const Surroundings = () => {
    return (
        <div>
           <Tamagotchi img={cowImg}/>
        </div>
    );
}

export default Surroundings;