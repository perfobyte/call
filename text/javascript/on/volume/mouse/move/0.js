import {cl_vo} from '../../../../elems.js';
import {call} from '../../../../state/i.js';
import {volume_render} from '../../../../f/i.js';

export default (
    (e) => {
        return (
            (call.v[0] = (
                call
                .ag
                .value = (
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