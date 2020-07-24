import React from 'react';
import Card from './Card';


function CardList({ furniture, clickChange }) {
    const cardArray = furniture.map((unit, i) => {
        return <Card
            key={i}
            id={furniture[i].id}
            name={furniture[i].name}
            description={furniture[i].description}
            fulldescription={furniture[i].fullDescription}
        />;
    })
    return (
        <div onClick={clickChange}>
            {cardArray}
        </div>
    )
};

export default CardList;