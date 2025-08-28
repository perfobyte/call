import {cl_dlist_ul, cl_dlist_cl, cl_mc_d_cl, cl_vd_d_cl, cl_dlist_p, cl_dv} from '../../elems.js';
import SH_EL from '../../SH_EL.js';

import {cl_dlist_reduce} from '../../reduce/i.js';
import {call, call_display} from '../../state/i.js';
import {appendChild} from '../../general/i.js';


export default (
    (title, SH_EL, prev_k) => {
        var
            T = (
                (d) => {
                    return (
                        d.reduce(
                            cl_dlist_reduce,
                            cl_dlist_ul
                        ),
                        window.addEventListener("click",on_other_click),
                        cl_dlist_cl.add('a')
                    );
                }
            ),

            close = (
                (c,w) => {
                    return (
                        w.removeEventListener("click",on_other_click),

                        (prev_k = "\x00"),
                        c.remove("R"),
                        cl_dlist_cl.remove('a')
                    )
                }
            ),

            on_other_click = (
                (e) => {
                    return (
                        e.target.closest('#cl_dlist')
                        ||
                        (
                            close(
                                document.querySelector("#cl_panel .dv._180.R").classList,
                                e.currentTarget
                            )
                        )
                    );
                }
            )
        ;
        return (e) => {
            var
                t = e.currentTarget,

                opened = cl_dlist_cl.contains("a"),
                new_kind = t.getAttribute("data-t"),
                new_kind_0 = new_kind[0]
            ;
            return (
                e.preventDefault(),
                e.stopPropagation(),
                
                (
                    opened 
                    ? (
                        document.querySelector(`#cl_panel .dv._180.R`).classList.remove('R'),
                        (prev_k === new_kind_0)
                    )
                    : (
                        window.addEventListener("click",on_other_click),
                        false
                    )
                )
                ? close(t.classList, window)
                : (
                    t.classList.add("R"),

                    cl_dlist_ul.setAttribute("data-t", new_kind),
                    (cl_dlist_p.textContent = title[prev_k = new_kind_0]),

                    (cl_dlist_ul.innerHTML = ""),

                    (new_kind_0==="s")
                    ? (
                        SH_EL.reduce(appendChild, cl_dlist_ul),

                        cl_dlist_ul.setAttribute("data-d",call_display.m),

                        cl_dlist_cl.add('a')
                    )
                    : (
                        cl_dlist_ul.setAttribute("data-d",(
                            (new_kind_0==="v")
                            ? call.D1
                            : call.D0
                        )),

                        navigator.mediaDevices.enumerateDevices()
                        .then(T)
                        .catch(console.error)
                    )
                    
                )
            );
        }
    }
)(
    {
        "v": "Video input devices",
        "a": "Audio input devices",
        "s": "Screeh share devices"
    },

    SH_EL,
    "\x00"
);
