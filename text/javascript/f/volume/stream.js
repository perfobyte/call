


export default (
    (s,ac,call) => {
        var
            source = (
                call.as?.disconnect(),
                ac.createMediaStreamSource(s)
            ),
            gain = (
                call.agn?.disconnect(),
                ac.createGain()
            ),
            ad = ac.createMediaStreamDestination()
        ;
        return (
            (call.as = source)
            .connect(
                (call.agn = gain)
                
            ),

            gain.connect(call.ad = ad),

            (call.ag = gain.gain).setValueAtTime(call.v[0], ac.currentTime),

            ad.stream
        );
    }
);
