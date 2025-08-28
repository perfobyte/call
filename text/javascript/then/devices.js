import {stop} from '../reduce/i.js';


export default (
    (s) => {
        return (
            s.getTracks().reduce(stop, s),
            navigator.mediaDevices.enumerateDevices()
        );
    }
)