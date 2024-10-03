/**
 * special code for downloads/type
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