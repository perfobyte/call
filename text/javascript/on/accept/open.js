import {on_accept_message} from './i.js';

export default (
    function() {
        return (
            this.onmessage = on_accept_message
        );
    }
);
