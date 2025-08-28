import {o,mdi,vdi, only_v_o, only_a_o} from "../conf.js";

export default (
    (call) => {
        var
            tc_i = call.tc_i
        ;
        return (
            navigator
            .mediaDevices
            .getUserMedia(
                (
                    (tc_i === 0)
                    ? (
                        (mdi.exact = call.D0),
                        only_a_o
                    )
                    :
                    (tc_i === 1)
                    ? (
                        (vdi.exact = call.D1),
                        only_v_o
                    )
                    : (
                        (mdi.exact = call.D0),
                        (vdi.exact = call.D1),
                        o
                    )
                )
            )
        );
    }
);
