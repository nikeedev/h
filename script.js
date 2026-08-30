window.onload = () => {
    audio.play();
}

search.onsubmit = () => {
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(search_input.value)
}
