import {cl_dlist_li_el} from './render/i.js';

import call_display from './state/display.js';

import {firstElementClassList as fel, firstElementChild} from './general/i.js';
import {onclick} from './reduce/i.js';
import {cl_dv} from './elems.js';

export default (
    (m,fel) => {
        var
            
            change = (
                (e) => {
                    var
                        t = e.currentTarget,
                        m = call_display.m,
                        new_m = t.getAttribute("data-i")
                    ;
                    return (
                        SH_EL_B[m].remove("s"),
            
                        SH_EL_B[call_display.m = Number(new_m)].add("s"),

                        undefined
                    );
                }
            ),

            a = Array.from(
                [
                    ["Only audio","0"],
                    ["Only video","1"],
                    ["Both","2"],
                ],
                
                (v) => cl_dlist_li_el(v[0],v[1],cl_dv.cloneNode(true),change),
            ),

            SH_EL_B = Array.from(a,fel)
        ;
        return (
            fel(a[m]).add('s'),
            a
        );
    }
)(
    call_display.m,
    fel,
);
