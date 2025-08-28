import {cl_vo_p_st} from '../../elems.js';


export default (
    (v) => (
        (cl_vo_p_st.transform = `scaleX(${v})`),
        v
    )
);
