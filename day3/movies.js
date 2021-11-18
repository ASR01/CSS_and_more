
const API_KEY="k_i78nd9fz";

   
const searchMovies = async () => {
    const searchBoxValue = document.querySelector("#search-box").value

    console.log("The search movies has been clicked", searchBoxValue)

    loadMovies(searchBoxValue)
}


const loadMovies = async(searchQuery) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
    console.log("requestOptions")

    console.log(searchQuery)
    // setTimeout(async() => { //unlock for having the 5 seconds delay
    let url = 'https://imdb-api.com/en/API/SearchMovie/k_i78nd9fz/dune' //default URL
    //if (searchQuery && searchQuery.length > 2) //if I have a searchQuery that contains at least 3 ch I'll execute it
        //url += "?title=" + searchQuery
    //    url = "https://imdb-api.com/en/API/SearchMovie/k_i78nd9fz/lost in translation"
    console.log("LOADING", url)
    let apiResponse = await fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    console.log(apiResponse)
} 
   