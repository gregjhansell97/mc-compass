
/**
 * Hook that returns angle off north with respect to pointing angle of phone.
 * The angle is between 0 and 360 degrees
 */
function useRandomNorth() {
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
