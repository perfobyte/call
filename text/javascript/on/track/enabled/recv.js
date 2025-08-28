import {call, call_play} from "../../../state/i.js";
import {track_enabled_reduce} from '../../../reduce/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            k = t.getAttribute("data-a"),

            enabled = call.e[0],

            k0 = "",

            value = (enabled[k] = !(enabled[k])),
            cl = t.classList,

            u = call_play[call.tc_i][1]
        ;
        return (
            (
                (
                    u
                    .srcObject[
                        `get${
                            k0 = k[0].toUpperCase()
                        }${
                            k.substring(1)
                        }Tracks`
                    ]()
                )
                .reduce(track_enabled_reduce, value)
            ),

            (k0 === "A") && (u.muted = !value),

            cl.toggle("cl"),
            cl.toggle("co")
        );
    }
);
