

export default (
    (tracks, sender) => {
        for(
            var
                kind = sender.track.kind,
                i = 0,
                l = tracks.length,
                t = null
            ;
            i < l;
            i++
        ) {
            if ((t = tracks[i]).kind === kind) {
                sender.replaceTrack(t);
                break;
            }
        }

        return tracks;
    }
)