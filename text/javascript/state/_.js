import call_o from './o.js';


export default {
    o:null,
    a:null,

    i:null,u:null,
    d:null,s:null,

    ac: null,
    agn: null,
    ag: null,
    as: null,
    at:null,

    D0: "",
    D1: "",

    L0:"",
    L1:"",

    op:false,
    
    v: [
        1,
        1
    ],

    f:-1,

    e:[
        {
            video:true,
            audio:true
        },
        call_o
    ],

    D: new Uint8Array(1),

    tc_i:0,
    tc: {
        direction: 'sendrecv'
    }
};
