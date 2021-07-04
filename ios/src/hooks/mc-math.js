
const allLocs = (inputLat, inputLon) => {
    return [
        inputLat, inputLon,
        inputLat, inputLon - 180,
        inputLat - 180, inputLon,
        inputLat - 180, inputLon - 180
    ]
}

const distanceSquared = (loc1, loc2) => {
    const [x1, y1] = loc1;
    const [x2, y2] = loc2;
    dx = x1 - x2;
    dy = y1 - y2;
    return dx*dx + dy*dy;
}

const closer = (locs1, locs2) => {
    return distanceSquared(...locs1) > distanceSquared(locs2);
}

const magnitude = (loc1, loc2) => {
    return Math.sqrt(distanceSquared(loc1, loc2))
}

const offsetFromNorth = (loc1, loc2) => {
    const magnitude = Math.sqrt(distanceSquared(loc1, locs));
    const x1 = loc1[0];
    const x2 = loc2[0];
    dx = x1 - x2;
    // TODO: account for angle dichodomy (ex: x, y < 0)
    return 360*Math.asin(dx/magnitude)/(2*Math.PI)
}

export {
    allLocs, 
    distanceSquared, 
    closer, 
    magnitude, 
    offsetFromNorth 
}
