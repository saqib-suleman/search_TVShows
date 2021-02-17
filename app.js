const form = document.querySelector('#searchForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = form.element.query.value;
    axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
})
