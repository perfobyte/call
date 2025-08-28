
import {call,call_display} from '../../state/i.js';
import {stop, removeTrack, accept_track, stream_to_peer} from '../../reduce/i.js';
import {only_a_o, only_v_o, mdi, vdi} from '../../conf.js';
import {cl_dlist_ul} from '../../elems.js';
import {change_device_then} from '../../then/i.js';



export default (
    (e) => {
        var
            t = e.currentTarget,
            id = t.getAttribute("data-i"),
            
            is_vd = (cl_dlist_ul.getAttribute("data-t")[0] === 'v')
        ;
        return (
            cl_dlist_ul.querySelector("button.s").classList.remove('s'),

            call_display.v
            ? (
                is_vd
                ? (
                    call.D1 = id
                )
                : (
                    call.D0 = id
                ),

                t.classList.add("s")
            )
            :
            navigator
            .mediaDevices
            .getUserMedia(
                (call.op = is_vd)
                ? (
                    (
                        call.D1 =
                        vdi.exact =
                            id
                    ),
                    only_v_o
                )
                : (
                    (
                        call.D0 =
                        mdi.exact =
                            id
                    ),
                    only_a_o
                )
            )
            .then(
                change_device_then
            )
        );
        
    }
);

