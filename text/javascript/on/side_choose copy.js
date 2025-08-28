import {cl_i_cl, cl_u_cl, call_cl,} from '../elems.js';
import {call} from '../state/i.js';
import {volume_render, volume_render_value} from '../f/i.js';

export default (
    (d) => (e) => {
        var
            t = e.currentTarget,

            _i = 0,
            i = (
                (t.id === "cl_i")
                ? (
                    (_i = 1),
                    0
                )
                : 1
            ),
            

            peer=d[i],
            another = d[_i]
        ;
        
        return (
            another.remove("S"),
            
            peer.contains("S")
            ? (
                peer.remove("S"),
                call_cl.remove("S"),

                -1
            )
            : (
                peer.add("S"),
                call_cl.add("S"),

                volume_render(volume_render_value(call.v[call.f = i]*100))
            ),

            undefined
        );
    }
)(
    [
        cl_i_cl,
        cl_u_cl
    ]
)