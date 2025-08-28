import {call_play, call} from '../state/i.js';

export default (
    (e) => {
        var
            u = call_play[call.tc_i][1]
        ;
        return (
            (u.volume = call.v[1]),
            (u.srcObject = e.streams[0])
        );
    }
)