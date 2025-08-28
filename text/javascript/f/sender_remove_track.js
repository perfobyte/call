


export default (
    (senders, track, pc) => {
        for (
            var
                _ = null,
                i = 0,
                l = senders.length
            ;
            i < l;
            i++
        ) {
            if ((_=senders[i]).track === track) {
                pc.removeTrack(_);
                break;
            }
        }
        return undefined;
    }
)