import {cl_vo} from '../../../../elems.js';
import {call, call_play} from '../../../../state/i.js';
import {volume_render} from '../../../../f/i.js';

export default (
    (e) => {
        
        return (
            (call.v[1] = (
                (
                    call_play[call.tc_i][1]
                )
                .volume = (
                    volume_render(
                        Math.max(
                            Math.min(
                                (e.clientX - cl_vo.getBoundingClientRect().left),
                                200
                            ),
                            0
                        )
                    )
                    / 200
                )
            )),

            undefined
        );
    }
)