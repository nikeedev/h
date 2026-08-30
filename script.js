const time = new Date().getHours()

let src = (time >= 07 && time <= 18) ? "vita1.mp3" : "vita2.mp3";

audio.src = src;

window.onload = () => {
    audio.play();
    search_input.focus();
}

search.onsubmit = () => {
    event.preventDefault();
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(search_input.value)
}
