import { useState, useEffect } from 'react';
import { useLocation, useNorth } from './mock-hooks';


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
    const closest = locs.reduce((closest, (loc) => 
        return mcLocs.find(mcLoc => closer(closest, mcLoc)) ?? closest;
    }), [locs[0], mcLocs[0])
    // get north offset
    const northOffset = offsetFromNorth(loc1, loc2);
    return north - northOffset
}
