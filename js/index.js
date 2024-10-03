const ascend_counter = (element, max, suffix) => {
    let now = max;

    const handle = setInterval(() => {
        element.innerHTML = `${Math.ceil(max - now)}${suffix}`;
    
        // 목표에 도달하면 정지함
        if (now < 1) {
        clearInterval(handle);
        }
    
        // 적용될 수치, 점점 줄어듬
        const step = now / 10;

        now -= step;
    }, 50);
}

const mods_count_span = document.querySelector("span.mc-mods")

ascend_counter(mods_count_span, 50, "+")

/**
 * code starts
 */

const everyATags = document.querySelectorAll("a"),
backgroundVideo = document.querySelector(".css-bg-video")

const videoTime = window.localStorage.getItem("ctime")

backgroundVideo.currentTime = Number(videoTime)

for (const element of everyATags) {
    element.addEventListener("click", function() {
        window.localStorage.setItem("ctime", `${backgroundVideo.currentTime}`)
    })
}

console.log(backgroundVideo.currentTime)