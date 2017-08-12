
// 2. Create your `submit` event for getting the user's search term

// 5. Create a way to listen for a click that will play the song in the audio player

let results = document.getElementById("results");

let submit = document.getElementById("submitButton");

submit.addEventListener("click", function() {

  results.innerHTML = "";

  let searchInput = document.getElementById("searchInput");
   console.log(searchInput.value);
  let str = searchInput.value.split(" ").join("+");
   console.log(str);

  let searchEntry = "https://itunes.apple.com/search?term=" + str + "&entity=song&limit=15";

  fetch(searchEntry)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("Here is the data:", data);

          for (var i = 0; i < data.results.length; i++) {
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

            //  let index = i;
// console.log(data.results[i].previewUrl);
albumImage.value = i;
// console.log(albumImage.value);
            albumImage.addEventListener("click", function(event) {
              console.log(event);
              console.log(event.target);
console.log(event.target.value);
              playSong(event.target.value);
            })
            function playSong(index) {
              let musicPlayer = document.getElementById("music-player");
              console.log(musicPlayer);
              let selectedSong =  data.results[index].previewUrl;
              console.log(selectedSong);
              musicPlayer.setAttribute("src", selectedSong);
              console.log(musicPlayer.src);
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
