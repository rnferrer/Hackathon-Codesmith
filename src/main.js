document.querySelector("#randomizer-button").addEventListener("click", () => {
  const randomPage = Math.floor(Math.random() * 25);
  console.log('click')
  fetch(`https://api.jikan.moe/v4/top/anime?page=${randomPage}`)
    .then((data) => data.json())
    .then(async (data) => {
      const randomNum = Math.floor(Math.random() * 25);
      const randomAnime = data["data"][randomNum];
      const animeURL = randomAnime["url"];
      const imageURL = randomAnime["images"]["jpg"]["image_url"];
      const animeTitle = randomAnime["titles"][0]["title"];
      const score = randomAnime["score"];
      const trailer = randomAnime["trailer"]["embed_url"];

      console.log(animeTitle)

      let genres = "";
      randomAnime["genres"].forEach((genre) => {
        genres += `${genre["name"]}, `;
      });
      genres = genres.slice(0, -2);
      const synopsis = randomAnime["synopsis"];

      console.log(animeTitle);
      document.querySelector(".title").textContent = animeTitle;
      document.querySelector(".score").textContent = `Rating: ${score}/10`;
      document.querySelector(".genres").textContent = `Genres: ${genres}`;
      document.querySelector(".img img").src = imageURL;
      document.querySelector(".img").href = animeURL;
      document.querySelector(".synopsis").textContent = synopsis;
      document.querySelector(".main-box").style.display = "flex";
      document.querySelector(".button-container").style.marginTop = '0'
      document.querySelector('iframe').src = trailer;
      console.log(document.querySelector('iframe').src);
    });
});

document.querySelector("#image-anchor").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: e.currentTarget.href });
});
