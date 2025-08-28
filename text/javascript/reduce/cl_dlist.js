import {cl_dlist_ul, cl_dv} from '../elems.js';
import {on_device_change} from '../on/i.js';
import {cl_dlist_li_el} from '../render/i.js';

export default (
    (ul,v) => {
        var
            li = null,
            di = "",
            kind = ul.getAttribute("data-t")
        ;
        return (
            (v.kind === kind)
            &&
            (
                (li=cl_dlist_ul.appendChild(
                    cl_dlist_li_el(v.label, (di=v.deviceId),cl_dv.cloneNode(true),on_device_change)
                )),

                (di===ul.getAttribute("data-d"))
                &&
                (li.firstElementChild.className = "s")
            ),
            ul
        );
    }
);
