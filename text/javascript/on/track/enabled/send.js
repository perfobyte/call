import {call} from "../../../state/i.js";

export default (
    (e) => {
        var
            t = e.currentTarget,
            k = t.getAttribute("data-a"),

            enabled = call.e[1],
            value = (enabled[k] = !(enabled[k])),

            senders = call.i.getSenders(),

            track = null,

            i = 0,
            l = senders.length
        ;

        for (;i<l;i++) {
            if ((track = senders[i].track).kind === k) {
                track.enabled = value;
            }
        };

        return (
            t.classList.toggle("cl"),
            t.parentElement.classList.toggle("s")
        );
    }
);
