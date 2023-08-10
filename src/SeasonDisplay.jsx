import React from "react";
import './SeasonDisplay.css'


const seasonConfig = {
    summer: {
        text: "Nóng quá, thèm Vitamin C!",
        iconName: 'sun'
    },
    winter: {
        text: "Trời ơi, nó lạnh!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if(month >2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' :'summer';
    }
}

const SeasonDisplay = props => {
    
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    console.log(season);
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left fa-solid fa-${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon-right fa-solid fa-${iconName}`}></i>
        </div>
    )
};

export default SeasonDisplay;