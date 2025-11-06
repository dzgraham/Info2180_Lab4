document.addEventListener("DOMContentLoaded", function(){
    const search = this.getElementById("search_button");
    search.addEventListener("click", function(){
        fetch('superheroes.php').then(response => (response.text())).then(html => {alert(html);})

    } )
})
