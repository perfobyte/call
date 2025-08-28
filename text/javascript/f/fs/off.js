

export default (
    (d) => {
        return (
            d.exitFullscreen
            ? d.exitFullscreen()
            :
            d.webkitExitFullscreen
            ? d.webkitExitFullscreen()
            :
            d.msExitFullscreen
            &&
            d.msExitFullscreen()
        );
    }
);
