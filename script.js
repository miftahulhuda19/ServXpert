document.getElementById("search-btn").addEventListener("click", function() {
    let query = prompt("Cari sesuatu di situs ini:");
    if (query) {
        window.location.href = `https://www.google.com/search?q=site:yourwebsite.com ${query}`;
    }
});
document.getElementById("search-btn").addEventListener("click", function() {
    let searchInput = document.getElementById("search-input");
    
    if (searchInput.value.trim() !== "") {
        let query = searchInput.value.trim();
        window.location.href = `https://www.google.com/search?q=${query}`;
    } else {
        searchInput.focus();
    }
});
