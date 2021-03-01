import React from 'react';
import './Club.css';

const Club = (props) => {
    // const { name } = props.details;
    const add = props.add;
    console.log(add);
    const totalBudget = add.reduce((totalBudget, amount) => totalBudget + amount.sallary, 0);
    // const playerName = add.reduce((playerName, plyName) => plyName + playerName.name, 0);
    const playerName = add.map(plr => plr.name)
    return (
        <div>
            <h3>Your Strong Club</h3>
            <h3>Total Player Added: {add.length}</h3>
            <p>Selected Player:{playerName} <br/></p>
            <p>Total Budget: {totalBudget}</p>
        </div>
    );
};

export default Club;