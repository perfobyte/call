import {cl_u,cl_i} from '../elems.js';
import {MAX_PEER_WIDTH, MAX_PEER_HEIGHT} from '../api/i.js';

export default (
    (width,height,) => {
        var
            cf = (width / height),

            v_st = null,
            w = "",
            h = "",

            W = MAX_PEER_WIDTH(),
            H = MAX_PEER_HEIGHT()
        ;
        return (
            (width > W) && (height = (width = W) / cf),
            (height > H) && (width = (height = H) * cf),

            (v_st = cl_i.style).setProperty("--w", (w = width + "px")),
            v_st.setProperty("--h", (h = height + "px")),
            
            (v_st = cl_u.style).setProperty("--w", w),
            v_st.setProperty("--h", h)
        )
    }
)