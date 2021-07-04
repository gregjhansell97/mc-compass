import { useState, useEffect } from "react";
// flat earth assumption: lat, lon, there is a mcdonnalds near you


function useNoRotationEffect(goal) {
    // delayed motion of the compass - opportunity to inject effect
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        setAngle(goal);
    }, [goal, setAngle]); 
    return angle;
}

function useLocation() {
    // set's current location as latitude, and longitude in terms of degrees
    // north and east
    return [0, 0];
}

function useNearestMcDicks() {
    // useLocation hook to find nearest McDicks in terms of lat lon
    return [1, 1];
}

function useAngleToNorth() {
    // degrees off north
    return 0; 
}

function useAngleToNearestMcDicks() {
    // points to nearest mc-dicks
    // angle of nearest mcdicks in terms of north (in radians)
    // TODO: useNearestMcDicks
    // TODO: useLocation()
    // TODO: useAngleToNorth()
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(Math.random()*360);
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return angle;
}



export {
    useAngleToNearestMcDicks,
    useNoRotationEffect,
}
