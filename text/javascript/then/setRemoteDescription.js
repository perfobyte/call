import {call} from '../state/i.js';


export default (
    () => {
        var a = call.a;
        return (
            (call.a = null),
            call.i.setRemoteDescription(a)
        );
    }
);
