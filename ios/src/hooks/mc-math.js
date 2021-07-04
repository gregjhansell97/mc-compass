const RAD_TO_DEG = 360/(2*Math.PI); 

const allLocs = (inputLat, inputLon) => {
    // discontinuities are for longitude where 180 = -180
    // so if something is at 179, it can be view also as -181
    const sign = Math.sign(inputLon);
    return [
        [inputLat, inputLon],
        [inputLat, inputLon - sign*360],
    ]
}

const dot = (v1, v2) => {
    v2 = v2 ?? v1;
    return v1[0]*v2[0] + v1[1]*v2[1];
}

const diff = (loc1, loc2) => {
    const [x1, y1] = loc1;
    const [x2, y2] = loc2
    return [x1 - x2, y1 - y2];
}

const closer = (closerLoc, furtherLoc) => {
    return dot(diff(...closerLoc)) < dot(diff(...furtherLoc));
}

const magnitude = (loc1, loc2) => {
    return Math.sqrt(dot(diff(loc1, loc2)))
}

const offsetFromNorth = (source, target) => {
    mag = magnitude(source, target);
    [dx, dy] = diff(source, target);
    // TODO: fix offsetFromNorth, because it's wrong
    return Math.asin(dx/mag)*RAD_TO_DEG
}



export {
    allLocs, 
    dot, 
    diff,
    closer, 
    magnitude, 
    offsetFromNorth 
}
