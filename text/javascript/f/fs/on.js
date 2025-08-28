

export default (
    (e) => {
        return (
            e.requestFullscreen
            ? e.requestFullscreen()
            :
            e.webkitRequestFullscreen
            ? e.webkitRequestFullscreen()
            :
            e.msRequestFullscreen
            &&
            e.msRequestFullscreen()
        );
    }
)