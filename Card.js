import React from "react";

export default function Card({title, description, bgColor = 'bg-primary'}) {
    return(
        <>
            <div className={`card text-white p-3 ${bgColor}`}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </>
    );
}