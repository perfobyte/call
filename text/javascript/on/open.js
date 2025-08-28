import {start_a_o} from "../conf.js";
import {call_cl} from "../elems.js";
import {call,call_play,call_o} from '../state/i.js';
import {Q,S} from "../then/i.js";
import {
    ontrack,
    me_onicecandidate,
    u_onicecandidate,
    on_accept_datachannel,
} from '../on/i.js';

import {
    size_stream,
    gain_stream,
    turn_camera,
    stream_size,
} from '../f/i.js';

import {
    accept_track,
    removeTrack,
    track_enabled_reduce,
    stream_to_peer,
} from '../reduce/i.js';

import {get_media_then, set_media_then, devices_then} from '../then/i.js';


export default (
    (T) => (tc_i) => {
        return (
            (
                call.tc_i = tc_i
            ),
            
            (
                call.D0
                ? get_media_then(call)
                : (
                    navigator.mediaDevices.getUserMedia(call_o)
                    .then(devices_then)
                    .then(set_media_then)
                    .then(get_media_then)
                )
            )
            .then(T)
        )
    }
)(
    (s) => {
        var
            me = new RTCPeerConnection(),
            u = new RTCPeerConnection(),

            tc = call.tc,
            tc_i = call.tc_i,
            play = call_play[tc_i],

            play_0 = play[0]
        ;
        return (
            ((call.i = me).onicecandidate = me_onicecandidate),
            ((call.u = u).onicecandidate = u_onicecandidate),
            (u.ondatachannel = on_accept_datachannel),
            (u.ontrack = ontrack),

            (
                call.s = (
                    (tc_i === 0)
                    ? (
                        turn_camera(200,200),
                        gain_stream(s)
                    )
                    : size_stream((tc_i === 1)?s:gain_stream(s), turn_camera)
                )
            )
            .getTracks()
            .reduce(stream_to_peer, call),
            
            (call.d = me.createDataChannel("control")),

            call_cl.add("_"+tc_i),
            call_cl.add("a"),

            (play_0.srcObject = s),
            
            me.createOffer()
            .then(Q)
            .then(S)            
        );
    }
);
