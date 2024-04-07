const googleBest = document.getElementById("imgSearch");

googleBest.addEventListener("keydown", (event)  => {
  let words = googleBest.value.replaceAll(" ", "+");
  if (event.key === "Enter") {
    // alert("https://www.google.com/search?q=" + words)
    window.location.assign("https://www.google.com/search?q=" + words + "&tbm=isch")
  }
})


const onClickGoogle = document.getElementById("imgSearchButton"); 

onClickGoogle.addEventListener("click", () => {
  let words = googleBest.value.replaceAll(" ", "+");
  
  window.location.assign("https://www.google.com/search?q=" + words + "&tbm=isch");
});