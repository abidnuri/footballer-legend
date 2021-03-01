import React from 'react';
import './Club.css';

const Club = (props) => {
    const add = props.add;
    //console.log(add);
    const totalBudget = add.reduce((totalBudget, amount) => totalBudget + amount.sallary, 0);
    // const playerName = add.reduce((playerName, plyName) => plyName + playerName.name, 0);
    const playerDetails = add.map(plr => <li>{plr.name}, Sallary: ${plr.sallary}</li>)
    return (
        <div className="strong-club">
            <h3>Your Strong Club</h3>
            <h3>Total Player Added: {add.length}</h3>
            <p>
                <b>Selected Player: </b>{playerDetails}
            </p>
            <p><b>Total Budget: </b>${totalBudget}</p>
        </div>
    );
};

export default Club;