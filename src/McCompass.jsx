import React from "react";

import { useAngleToNearestMcDicks, useNoRotationEffect } from "./hooks/all";


function McCompass() {
    const angle = useAngleToNearestMcDicks()
    const current_angle = useNoRotationEffect(angle);

    const rotationStyle = {
        transform: `rotate(${current_angle}deg)`,
    }
    return (
        <div className="Compass">
            <img 
                className="Compass-img" 
                src="compass.png" 
                alt="" 
                style={rotationStyle}/>
        </div>
    );
}

export {
    McCompass
}
