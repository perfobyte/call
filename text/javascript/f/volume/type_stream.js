import {size_stream, gain_stream} from './i.js';

export default (
    (s,t,turn_camera) => {
        return(
            (t===0)
            ? gain_stream(s)
            : size_stream((t===1)?s:gain_stream(s),turn_camera)
        )
    }
);
