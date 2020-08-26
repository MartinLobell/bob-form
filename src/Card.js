import React from 'react';

function Card({ id, name, description }) {
    return (
        <div className="tc bg-gold dib br3 pa3 ma2 grow bw2">
            <img className={`${id}`} src={require(`./images/${id}.jpg`)} alt="Furniture" style={{ width: 200, height: 200, border: 'solid #fff 20px', borderRadius: 400 / 2 }} />
            <div>
                <h2>{name}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default Card;