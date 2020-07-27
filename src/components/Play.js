import React, { useEffect } from 'react'
import alarm from './../assets/alarm.mp3'

function Play() {
    useEffect(() => {
        var sound = document.getElementById("audioID");
        console.log(sound);
        playAudio(sound)

    });
    const playAudio = (sound) => {
        sound.play()
    }
    return (
        <div>
            <audio id="audioID">

                <source src={alarm} type="audio/mpeg" />

            </audio>
        </div>
    )
}

export default Play
