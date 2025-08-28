import {call} from '../state/i.js';

export default (
    (D) => {
        var
            i = 0,
            l = D.length,
            di = null
        ;

        for(;i<l;i++) {
            if ((di=D[i]).kind === "audioinput"){
                call.D0 = di.deviceId;
                break;
            }
        };
        i=0;
        for(;i<l;i++) {
            if ((di=D[i]).kind === "videoinput"){
                call.D1 = di.deviceId;
                break;
            }
        };

        return call;

    }
);
