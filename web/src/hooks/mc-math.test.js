import { 
    allLocs,
    dot,
    diff,
    closer,
    magnitude
} from './mc-math.js'


test("allLocs [0N, 0E]", () => {
    const locs = new Set(allLocs(0, 0).map(JSON.stringify));
    expect(locs.size).toEqual(1);
    expect(locs).toContain('[0,0]');
});

test("allLocs [-85N, 176E]", () => {
    const locs = new Set(allLocs(-85, 176).map(JSON.stringify));
    expect(locs.size).toEqual(2);
    expect(locs).toContain('[-85,176]');
    expect(locs).toContain('[-85,-184]');
});

test("allLocs [5N, -165E]", () => {
    const locs = new Set(allLocs(5, -165).map(JSON.stringify));
    expect(locs.size).toEqual(2);
    expect(locs).toContain('[5,-165]');
    expect(locs).toContain('[5,195]');
});

test("dot with case(s)", () => {
    const cases = [
        { args: [[0, 0],], expected: 0},
        { args: [[4, 3],], expected: 25},
        { args: [[-4, 3],], expected: 25},
        { args: [[4, -3],], expected: 25},
        { args: [[-4, -3],], expected: 25},
        { args: [[1, 3],[2, 4]], expected: 14},
    ]
    cases.forEach(({args, expected}) => {
        expect(dot(...args)).toEqual(expected)
    });
});

test("diff with case(s)", () => {
    const cases = [
        { args: [[0, 0],[5, 8]], expected: [-5, -8]},
        { args: [[4, 3],[1, 2]], expected: [3, 1]},
        { args: [[4, 3],[4, 3]], expected: [0, 0]},
    ]
    cases.forEach(({args, expected}) => {
        expect(diff(...args)).toEqual(expected)
    });
});

test("closer with case(s)", () => {
    // TODO: add more test cases
    const cases = [
        { args: [[[0, 0],[4, 2]], [[0, 0], [5, 3]]], expected: true }
    ]
    cases.forEach(({args, expected}) => {
        expect(closer(...args)).toEqual(expected)
    });
});

test("magnitude with case(s)", () => {
    // TODO: add more test cases
    const cases = [
        { args: [[0, 0],[4, 3]], expected: 5 }
    ]
    cases.forEach(({args, expected}) => {
        expect(magnitude(...args)).toEqual(expected)
    });
});

test("offset from north with case(s)", () => {
    // TODO: add more test cases
    const cases = []
    cases.forEach(({args, expected}) => {
        expect(magnitude(...args)).toEqual(expected)
    });
});
