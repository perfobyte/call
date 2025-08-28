import {call} from '../state/i.js';
import {setRemoteDescription} from './i.js';

export default (
    (a) => {
        return (
            call.u.setLocalDescription(call.a = a)
            .then(
                setRemoteDescription
            )
        )
    }
);
