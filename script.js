window.onload = () => {
    audio.play();
    search_input.focus();
}

search.onsubmit = () => {
    event.preventDefault();
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(search_input.value)
}
