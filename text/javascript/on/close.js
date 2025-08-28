
import {stop} from "../reduce/i.js";
import {call_cl,call_el, cl_sh, b_dv_cl_sh_cl} from "../elems.js";
import {call, call_play, call_display} from '../state/i.js';
import {volume_stream_stop} from "../f/i.js";

export default (
    (e) => {
        var
            s = call.s,

            tc_i = call.tc_i,

            play = call_play[tc_i],
            play_1 = play[1],

            ac = call.ac
        ;
        return (
            ac && (
                volume_stream_stop(call.agn, call.as, call.ad),
                ac.close()
            ),

            s.getTracks().reduce(stop, s),
            (s = play_1.srcObject).getTracks().reduce(stop, s),
            
            (
                call.i.close(),
                call.u.close()
            ),

            call.at?.stop(),

            (tc_i<2)
            ? cl_sh.remove("st")
            : b_dv_cl_sh_cl.remove("to"),

            (
                play[0].srcObject =
                play_1.srcObject =
                call.i =
                call.u =
                call.d =
                call.o =
                call.s =

                call.as =
                call.ac =
                call.agn =
                call.ag =
                call.ad =

                call.at =
                    null
            ),

            (
                call_display.v = false
            ),

            (call_el.className = call_el.getAttribute("data-s"))
        );
    }
);
