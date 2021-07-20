
class BallRegion {
    // IDEA: subregions -> returns nearest subregions ordered by location
}

class BallTree {
    constructor(locs) {
        this.locs = locs
    }

    function nearest(lat, lon) {
        return this.locs[0];
    }
}



const mcDicksBallTree = new BallTree([[1, 1, "Mc-Donalds?"]]);

function nearestMcDicks([lat, lon]) {
    return mcDicksBallTree.nearest(lat, lon);
}
