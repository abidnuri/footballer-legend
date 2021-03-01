import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Details.css';

const Details = (props) => {
    //console.log(props.details.name);
    const { img, name, sallary } = props.details
    return (
        <div className="single-player">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Sallary: ${sallary}</p>
                <button onClick={()=> props.handleAddPlayer(props.details)} className="btn btn-primary">
                    Add to your club
                <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </div>
        </div>
    );
};

export default Details;