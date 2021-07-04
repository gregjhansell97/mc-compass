import { useState, useEffect } from "react";

/**
 * Hook that returns angle off north with respect to pointing angle of phone.
 * The angle is between 0 and 360 degrees
 */
const useNorth = () => {
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(Math.random()*360);
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return angle;
}

/**
 * Hook that returns the users current lat-lon location in terms of degrees
 * north and degrees east
 */
const useLocation = () => {
    // set's current location as latitude, and longitude in terms of degrees
    // north and east
    return [0, 0];
}

export {
    useNorth,
    useLocation
}
