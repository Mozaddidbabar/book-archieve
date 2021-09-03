const searchBooks = () => {
    const searchInput = document.getElementById('search-field');
    const searchValue = searchInput.value;
    // clear search data
    searchInput.value = '';
    // load data
    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showResults(data.docs))
    // .then(data => console.log(data.num_found))
    // .then(data => console.log(data))
}

const showResults = docs => {
    const searchResult = document.getElementById('search-result');
    // clear previous data
    searchResult.textContent = '';
    // showing the length of the search results
    const length = document.getElementById('result-length');
    if (0 < docs.length) {
        length.style.display = 'block';
        length.innerHTML = `<p>about ${docs.length} results found</p>`;
    }
    else {
        length.style.display = 'block';
        length.innerHTML = `<p>Please provide a valid name</p>`;
    }
    // searching result

    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card img-fluid w-75">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Book Name: ${doc.title}</h5>
                    <p class="card-text">Author Name: ${doc.author_name}</p>
                    <p class="card-text">Publisher: ${doc.publisher}</p>
                    <p class="card-text">Publication Year: ${doc.first_publish_year}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}