import React from 'react';

function CivDetails(props) {
    return (
        <div>
        {props.civs.map(civ => {
            return (
                <div>
                <div>{civ.name}</div>
                </div>
            )
        })}
        </div>
    )
}

export default CivDetails