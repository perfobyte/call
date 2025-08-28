

export default (
    (r,t) => (
        t.stop(),
        r.removeTrack(t),
        r
    )
);
