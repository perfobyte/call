
import {cl_sh, b_dv_cl_sh_cl} from '../elems.js';
import {call, call_o, call_display }from '../state/i.js';
import {
    removeTrack,
    accept_track,
    stop,
    stream_to_peer,
    track_enabled_reduce,
    sender_tracks_reduce,
} from '../reduce/i.js';

import {
    call_stop_screen_share
} from '../on/i.js';

import {
    get_media_then
} from '../then/i.js';

import {turn_camera,type_stream, stream_size,volume_stream} from '../f/i.js';


export default (
    (a) => (
        (e) => {
            return (
                get_media_then(call)
                .then(a)
            )
        }
    )
)(
    (new_s) => {
        var
            me = call.i,
            s = call.s,

            prev_tracks = s.getTracks(),
            new_tracks = new_s.getTracks(),

            tc_i = call.tc_i,

            _2 = (tc_i === 2)
        ;
        return (
            prev_tracks.reduce(stop, s),
            new_tracks.reduce(removeTrack, new_s),

            new_tracks.reduce(accept_track, s),

            type_stream(s,tc_i,turn_camera),

            (
                me
                .getSenders()
                .reduce(
                    sender_tracks_reduce,
                    s.getTracks()
                )
            ),
            (call_display.v = false),

            _2
            ? b_dv_cl_sh_cl.remove("to")
            : cl_sh.remove("st")
        );
    }
);
