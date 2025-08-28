import mousemove from './move/i.js';
import up from './up.js';

import {call} from '../../../state/i.js';


export default (
    (e) => {
        var
            move = mousemove[call.f]
        ;
        return (
            window.addEventListener("mousemove",move),
            window.addEventListener("mouseup",up),

            move(e)
        )
    }
);
