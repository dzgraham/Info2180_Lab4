document.addEventListener("DOMContentLoaded", function(){
    const search = this.getElementById("search_button");
    
    search.addEventListener("click", function(){
        const query = document.getElementById('search').value.trim();
        const url = 'superheroes.php?query=' + encodeURIComponent(query);

        fetch(url).then(response => response.text())
            .then(html => {
                document.getElementById('result').innerHTML = html;
            })

    } )
})
