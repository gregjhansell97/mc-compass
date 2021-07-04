import { useState, useEffect } from "react";
import { use
// flat earth assumption: lat, lon, there is a mcdonnalds near you


function useNoRotationEffect(goal) {
    // delayed motion of the compass - opportunity to inject effect
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        setAngle(goal);
    }, [goal, setAngle]); 
    return angle;
}

function useNearestMcDicks() {
    // useLocation hook to find nearest McDicks in terms of lat lon
    return [1, 1];
}


const allLocs = (inputLat, inputLon) => {
    return [
        inputLat, inputLon,
        inputLat, inputLon - 180,
        inputLat - 180, inputLon,
        inputLat - 180, inputLon - 180
    ]
}

const distanceSquared(loc1, loc2) {
    const [x1, y1] = loc1;
    const [x2, y2] = loc2;
    dx = x1 - x2;
    dy = y1 - y2;
    return dx*dx + dy*dy;
}

function useAngleToNearestMcDicks() {
    const [lat, lon] = useLocation();
    const [mcLat, mcLon] = useNearestMcDicks();
    // calculate both sides
    const locs = allLocs(lat, lon);
    const mcLocs = allLocs(mcLat, mcLon);
    // find closest locs (takes care of overlap)
    let closest = [locs[0], mcLocs[0]]
    const locs.forEach(l => mcLocs.forEach(mcL => {
        if(distanceSquared(...closest) > distanceSquared(l, mcL)) {
            closest = [l, mcL];
        }
    }));
    locs.forEach(l => mcLocs.forEach(mcL => [l, mcL]));
    // find closest
   
    angles
    
    

    const vectors = [
    const locVariants(l0, l1) => [l, 180 - l];
    const lats = loc
    const mcLats = locVariants(mcLat);
    const mcLons = locVariants(mcLon);
    
    const latDist = lat - mcLat
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
