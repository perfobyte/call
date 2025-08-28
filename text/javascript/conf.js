
export var
    mimeType = "video/webm; codecs=vp8,opus",
    videoType = "video/webm; codecs=vp8",
    fftSize = 256,

    perm_cm = {name:"camera"},
    perm_mc = {name:"microphone"},

    ch = {a:null},

    current = {
        a: null,
        b: null,
    },

    mdi = { exact:"" },
    vdi = { exact:"" },

    vdcf = { mimeType },
    vd_o = { type: mimeType },

    audio = { deviceId: mdi },
    video = { deviceId: vdi },
    
    start_o = { video: true, audio: true },
    start_a_o = { video: false, audio: true },
    start_v_o = { video: true, audio: false },

    o = { video, audio },
    only_v_o = { video, audio:false },
    only_a_o = { video:false, audio }
;


