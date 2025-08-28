import {call} from '../../state/i.js';
import {volume_stream} from './i.js';

export default (
    (s) => {
        var
            ac = (
                call.ac?.close(),
                new AudioContext()
            ),
            audio_track = s.getAudioTracks()[0],

            new_s = (
                volume_stream(
                    s,
                    (call.ac = ac),
                    call
                )
            ),
            gain_audio_track = new_s.getAudioTracks()[0]
        ;
        return (
            new_s.removeTrack(gain_audio_track),
            

            call.at?.stop(),
            s.removeTrack(call.at = audio_track),
            s.addTrack(gain_audio_track),
            
            s
        );
    }
)