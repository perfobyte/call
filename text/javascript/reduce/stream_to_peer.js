
export default (
    (call,track) => {

        var
            pc = call.i,
            senders = pc.getSenders(),
            _ = null,

            s = call.s,

            i = 0,
            l = senders.length,

            kind = track.kind,
            find = false
        ;

        track.enabled = (call.e[1])[kind];

        for (;i<l;i++) {
            if (
                (
                    _ = senders[i]
                )
                .track?.kind === kind
            ) {
                find = true;
                _.replaceTrack(track);
                break;
            }
        };
        return (
            (find) || (
                pc.addTrack(track, s)
            ),
            call
        );
    }
);
