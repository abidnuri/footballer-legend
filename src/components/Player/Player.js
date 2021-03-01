import React from 'react';
import playerData from '../../Data/playerData.json';
import { useEffect, useState } from 'react';
import './Player.css'
import Details from '../Details/Details';
import Club from '../Club/Club';

const Player = () => {
    const [players, setPlayers] = useState([]);

    const [add, setAdd] = useState([]);

    useEffect(() => {
        setPlayers(playerData);
        //console.log(playerData);
    }, [])

    const handleAddPlayer = (details) => {
        console.log("Player Added", details);
        const newAdd = [...add, details];
        setAdd(newAdd);
    }

    return (
        <div className="player-container">
            <div className="player-details">
                {
                    players.map(player => <Details
                        handleAddPlayer={handleAddPlayer}
                        details={player}>
                    </Details>)
                }
            </div>
            <div className="player-single">
                <Club add={add}></Club>
            </div>
        </div>
    );
};

export default Player;