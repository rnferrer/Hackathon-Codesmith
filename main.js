document.querySelector("#randomizer-button").addEventListener("click", () => {
  const randomPage = Math.floor(Math.random() * 4);
  fetch(`https://api.jikan.moe/v4/top/anime?page=${randomPage}`)
    .then((data) => data.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * 25);
      const randomAnime = data["data"][randomNum];
      const animeURL = randomAnime['url']
      const imageURL = randomAnime["images"]["jpg"]["image_url"];
      const animeTitle = randomAnime["titles"][0]["title"];
      const score = randomAnime['score'];
      const trailer = randomAnime['trailer']['url']

      let genres = '';
      randomAnime['genres'].forEach(genre => {
        genres += `${genre['name']}, `
      });
      genres = genres.slice(0,-2)
      const synopsis = randomAnime["synopsis"];
      
      
      console.log(animeTitle);

      // document.querySelector('body').style.backgroundImage = `url(${randomAnime["images"]["jpg"]["large_image_url"]})`;
      // document.querySelector('body').style.opacity = .5

      document.querySelector(".title").textContent = animeTitle;
      document.querySelector(".score").textContent = `Rating: ${score}/10`;
      document.querySelector(".genres").textContent = `Genres: ${genres}`;
      document.querySelector(".img img").src = imageURL;
      document.querySelector(".img").href = animeURL;
      document.querySelector(".synopsis").textContent = synopsis;

      document.querySelector(".main-box").style.display = "flex";
    });
});

document.querySelector('#image-anchor').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.tabs.create({url: e.currentTarget.href});
});

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode



