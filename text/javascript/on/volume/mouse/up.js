import mousemove from './move/i.js';
import {call} from '../../../state/i.js';

export default (
    () => {
        var
            a = function() {
                return (
                    this.removeEventListener("mousemove",mousemove[call.f]),
                    this.removeEventListener("mouseup", a)
                )
            }
        ;
        return a;
    }
)();
