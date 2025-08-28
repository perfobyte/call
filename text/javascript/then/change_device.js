import {stop, removeTrack, accept_track} from "../reduce/i.js";
import {gain_stream, size_stream, turn_camera} from '../f/i.js';
import {stream_to_peer} from '../reduce/i.js';
import {call} from '../state/i.js';
import {cl_dlist_ul} from '../elems.js';

export default (
    (new_s) => {
        var
            new_tracks = new_s.getTracks(),
            s = call.s,
            op = call.op,
            id = ""
        ;
        return (
            new_tracks.reduce(removeTrack, new_s),

            (
                op
                ? ((id = call.D1), s.getVideoTracks())
                : ((id = call.D0), s.getAudioTracks())
            )
            .reduce(stop, s),

            new_tracks.reduce(accept_track, s),

            (
                op
                ? size_stream(s, turn_camera)
                : gain_stream(s)
            )
            .getTracks()
            .reduce(stream_to_peer,call),

            cl_dlist_ul
            .querySelector(`button[data-i="${id}"]`)
            .classList
            .add("s")
        );
    }
);
