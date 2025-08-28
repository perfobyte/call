
export default (
    (s,turn_camera) => {
        var 
            size = s.getVideoTracks()[0].getSettings()
        ;
        return (
            turn_camera(size.width, size.height),
            s
        );
    }
)