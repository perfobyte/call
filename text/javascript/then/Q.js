
import {call} from '../state/i.js';

export default (
    (
        setRemoteDescription,
        createAnswer
    ) => (
        (o) => (
            call
            .i
            .setLocalDescription(call.o = o)
            .then(
                setRemoteDescription
            )
            .then(
                createAnswer
            )
        )
    )
)(
    () => {
        var
            o = call.o
        ;
        return (
            (call.o = null),
            call.u.setRemoteDescription(o)
        );
    },
    () => call.u.createAnswer()
);
