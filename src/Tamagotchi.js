import React from 'react';

const Tamagotchi = ({img}) => {
    return (
        <div>
            <img src={`${img}`} alt='tamagotchi' />
        </div>
    )
}

export default Tamagotchi;