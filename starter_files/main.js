
// 1. First select and store the elements you'll be working with

// 2. Create your `submit` event for getting the user's search term

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play

let results = document.getElementById("results");

let  music_player = document.getElementsByClassName("music-player");

// add event listener to form
// let submit = document.querySelector(".search-form");
// submit.addEventListener("submit", function(event) {
//   results.innerHTML = "";
//   let search = document.getElementById("search");
//
// let info = {
//   url: "https://itunes.apple.com/search?term=jack+johnson&limit=12"
// }

fetch("https://itunes.apple.com/search?term=jack+johnson&limit=15")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data.results);

        for (var i = 0; i < data.results.length; i++) {
          let songContainer = document.createElement("div");
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

          songContainer.addEventListener("click", function(event) {

          })
        }
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
// }
// );
