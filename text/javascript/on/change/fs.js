import {fs_on, fs_off} from '../../f/i.js';


export default (
    (e) => {
        var
            t = e.currentTarget
        ;
        return (
            t.classList.toggle("TW")
            ? fs_on(document.documentElement)
            : fs_off(document)
        );
    }
);
