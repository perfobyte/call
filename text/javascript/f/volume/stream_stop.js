

export default (
    (gain, source, destination) => {
        return (
            gain.disconnect(),
            source.disconnect(),
            destination.disconnect()
        );
    }
);
