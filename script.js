const searchBar = document.getElementById("search");

searchBar.addEventListener("keydown", (event)  => {
  let words = searchBar.value.replaceAll(" ", "+");
  if (event.key === "Enter") {
    // alert("https://www.google.com/search?q=" + words)
    window.location.assign("https://www.google.com/search?q=" + words)
  }
})



const ndSearch = document.getElementById("searchButton"); 

ndSearch.addEventListener("click", () => {
  let words = searchBar.value.replaceAll(" ", "+");
  
  window.location.assign("https://www.google.com/search?q=" + words);
});


