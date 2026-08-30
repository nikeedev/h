window.onload = () => {
    audio.play();
}

search.onsubmit = () => {
    event.preventDefault();
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(search_input.value)
}
