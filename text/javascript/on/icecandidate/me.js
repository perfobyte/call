import {call} from "../../state/i.js";

export default (
    e => {
        var 
            c = e.candidate
        ;
        return (
            c
            &&
            call.u.addIceCandidate(c)
        );
    }
);
