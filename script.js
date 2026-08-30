const time = new Date().getHours()

let src = (time >= 07 && time <= 18) ? "vita1.mp3" : "vita2.mp3";

audio.src = src;

let search_engine = "ddg";

window.onload = () => {
    audio.play();
    search_input.focus();
}

const changeSE = (SE) => {
    document.getElementById(search_engine).style.text_decoration = "none";
    search_engine = SE;
    document.getElementById(SE).style.text_decoration = "underline";
}

search.onsubmit = () => {
    event.preventDefault();

    switch (search_engine) {
        case "ddg":
            window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(search_input.value)
            break;
        case "goog":
            window.location.href = "https://google.com/?q=" + encodeURIComponent(search_input.value)
            break;
        case "searxng":
            window.location.href = "https://s.stio.studio/search?q=" + encodeURIComponent(search_input.value)
            break;
    }
}
