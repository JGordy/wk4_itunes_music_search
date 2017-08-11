/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let results = document.getElementsByClassName("results");

let  music_player = document.getElementsByClassName("music-player");







// 2. Create your `submit` event for getting the user's search term






// 3. Create your `fetch` request that is called after a submission

fetch("https://itunes.apple.com/search?term=1989&limit=12")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });






// 4. Create a way to append the fetch results to your page






// 5. Create a way to listen for a click that will play the song in the audio play
