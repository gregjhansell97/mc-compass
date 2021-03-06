import { useState, useEffect } from 'react';

import { useNorth } from './use-north';
import { useLocation } from './use-location';
import { nearestMcDicks } from './nearest-mc-dicks';
import { allLocs, closer, offsetFromNorth} from './mc-math';


function useRotationEffect(goal) {
    // delayed motion of the compass - opportunity to inject effect
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        setAngle(goal);
    }, [goal, setAngle]); 
    return angle;
}


function useAngleToNearestMcDicks() {
    // them hooks
    const [lat, lon] = useLocation();
    const north = useNorth();
    // calculate both sides
    const [mcLat, mcLon] = nearestMcDicks([lat, lon]);
    const locs = allLocs(lat, lon);
    const mcLocs = allLocs(nearestMcDicks([lat, lon]));
    // find closest locs (takes care of overlap)
    const closest = locs.reduce((closestLoc, (loc) => (
        mcLocs.find(mcLoc => closer(closestLoc, mcLoc)) ?? closestLoc
    )), [locs[0], mcLocs[0]]);
    // get north offset
    const northOffset = offsetFromNorth(loc1, loc2);
    return north - northOffset
}


export { 
    useAngleToNearestMcDicks,
    useRotationEffect
}
