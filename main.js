
// 2. Create your `submit` event for getting the user's search term

// let results = document.getElementById("results");
let submit = document.getElementById("submitButton");

submit.addEventListener("click", function() {

  results.innerHTML = "";

  let searchInput = document.getElementById("searchInput");
  let str = searchInput.value.split(" ").join("+");
  let searchEntry = "https://itunes.apple.com/search?term=" + str + "&entity=song&limit=16";
//  trying a new thing
  let main_container = document.querySelector(".main_container");
  main_container.style.height = "340px";

  let searchResults = document.getElementById("results");
  searchResults.style.paddingtop = "80px";
  searchResults.style.margintop = "80px";

  let musicPlayer = document.getElementById("music-player");
  musicPlayer.style.marginbottom = "50px";
//  end of new thing
// fetch call
  fetch(searchEntry)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {

          for (var i = 1; i < data.results.length; i++) {
            let songContainer =   document.createElement("div");
            songContainer.setAttribute("class", "songContainer")

            let albumImage = document.createElement("img")
            albumImage.setAttribute("src", `${data.results[i].artworkUrl100}`)
            let songTitle = document.createElement("p");
            let bandName = document.createElement("h5");

            results.appendChild(songContainer);
            songContainer.appendChild(albumImage);
            songContainer.appendChild(songTitle);
            songContainer.appendChild(bandName);

            songTitle.textContent = `${data.results[i].trackName}`;

            bandName.textContent = `${data.results[i].artistName}`;

            albumImage.value = i;

            albumImage.addEventListener("click",      function(event) {

              playSong(event.target.value);
            })
            function playSong(index) {

              let selectedSong =  data.results[index].previewUrl;

              musicPlayer.setAttribute("src", selectedSong);

              musicPlayer.load();
              musicPlayer.play();
            }
          }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
  }
);

// slideshow function
let container = document.getElementById("headphones");
 console.log(container.id);

function changeBackground() {
 if (container.id === "headphones") {
   container.id = "vinyl";
   container.style.transition = "1.6s ease-in-out";
 } else if (container.id === "vinyl") {
   container.id = "radio";
   container.style.transition = "1.6s ease-in-out";
 } else if (container.id === "radio") {
   container.id = "mic";
   container.style.transition = "1.6s ease-in-out";
 } else {
   container.id = "headphones";
   container.style.transition = "1.6s ease-in-out";
 }
 setTimeout(changeBackground, 4000);
}

setTimeout(changeBackground, 4000);
