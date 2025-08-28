import {on_accept_message} from './i.js';


export default (
    (e) => {
        return (
            e.channel.onmessage = on_accept_message
        );
    }
)