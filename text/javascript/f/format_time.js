import time_opts from './time_opts.js';


export default (
    (past, now) => {
        var i = Math.floor((now - past) / 1000);
        
        return (
            (i < 60)
            ? `${i} sec ago`
            :
            (i < 3600)
            ? `${Math.floor(i / 60)} min ago`
            :
            (i < 86400)
            ? past.toLocaleTimeString('en-GB', time_opts)
            :
            `${
                past.getDate().toString().padStart(2, '0')
            }.${
                (1 + past.getMonth()).toString().padStart(2, '0')
            }.${
                past.getFullYear()
            }`
        );
    }
);
