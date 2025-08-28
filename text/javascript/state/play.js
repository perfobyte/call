import {
    cl_i_a,
    cl_u_a,
    cl_i_v,
    cl_u_v
} from '../elems.js';
import onplay from '../on/play.js';


export default (
    (v,play) => {
        
        return (
            (
                cl_i_v.onloadedmetadata =
                cl_u_v.onloadedmetadata =
                cl_i_a.onloadedmetadata =
                cl_u_a.onloadedmetadata =
                    play
            ),

            [
                [
                    cl_i_a,
                    cl_u_a,
                ],
                v,
                v,
            ]
        )
    }
)(
    [
        cl_i_v,
        cl_u_v
    ],
    onplay
);
