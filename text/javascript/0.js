import {
    cl_mc,
    cl_mc_d,
    cl_sh_d,
    cl_vd_d,
    cl_vo,
} from './elems.js';
import {
    on_track_enabled_send,
    call_screen_share,
    on_track_enabled_recv,
    on_side_choose,
    on_fs_change,
    
    cl_d_click,

    call_volume_onmousedown,
    call_open,
    call_close,
} from './on/i.js';

(
    (D) => {
        return (
            (
                cl_mc.onclick =
                D.getElementById("cl_vd").onclick = on_track_enabled_send
            ),
            (
                D.getElementById("cl_sh").onclick =
                D.getElementById("cl_sh2").onclick = call_screen_share
            ),
            (
                D.getElementById("cl_wa").onclick =
                D.getElementById("cl_hp").onclick = on_track_enabled_recv
            ),
            (
                D.getElementById("cl_i").onclick =
                D.getElementById("cl_u").onclick = on_side_choose
            ),
            (D.getElementById("cl_fs").onclick = on_fs_change),
            (
                cl_mc_d.onclick =
                cl_sh_d.onclick =
                cl_vd_d.onclick = cl_d_click
            ),
            
            (D.getElementById("clcl").onclick=call_close),

            // TODO:
            // (calls.now = chat.t = Date.now()),
            // (calls.chats = chats).reduce(chats_reduce,0),
            // calls.reduce(calls_reduce,calls),
            
            (cl_vo.onmousedown = call_volume_onmousedown),

            call_open(2)
        )
    }
)(document);
