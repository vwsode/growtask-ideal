(function () {
    const audio1 = WaveSurfer.create({
        container: "#card-audio-1",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audio2 = WaveSurfer.create({
        container: "#card-audio-2",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audio3 = WaveSurfer.create({
        container: "#card-audio-3",
        responsive: true,
        barRadius: 3,
        barGap: 4,
        barWidth: 4,
        barMinHeight: 4,
        height: 48,
        barHeight: 2,
        cursorColor: "transparent",
        waveColor: "#CCCCCC",
        progressColor: "#F2B6C0",
        forceDecode: true,
    });

    const audios = [audio1, audio2, audio3];

    document.querySelectorAll(".card-review").forEach((element, index) => {
        element.querySelector(".card-review__audio-play").addEventListener("click", () => {
            if (audios[index].isPlaying()) {
                element.querySelector(".card-review__audio-play").innerHTML = `
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5708 12.8575C17.2182 12.4691 17.2182 11.5309 16.5708 11.1425L9.5145 6.9087C8.84797 6.50878 8 6.9889 8 7.76619L8 16.2338C8 17.0111 8.84797 17.4912 9.51449 17.0913L16.5708 12.8575Z"
                    fill="white"
                />
            </svg>
                `;
                audios[index].pause();
            } else {
                element.querySelector(".card-review__audio-play").innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 18V6M16 18V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                `;
                audios[index].play();
            }

            element.classList.add("card-review--active");
        });
    });

    audio1.load("../sounds/audio_1.mp3");
    audio2.load("../sounds/corona.mp3");
    audio3.load("../sounds/stekla.mp3");
})();
