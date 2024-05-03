// const apiKey = "826eda80";

// const inputVal = document.querySelector("#input");
// const searchBtn = document.querySelector("#search");

// async function movie(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// function act() {
//   const mov = `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputVal.value}`;
//   movie(mov);
// }

// function show(actData) {
//   let myArr = actData.Search;
//   console.log(myArr);
// }
// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   act();
//   show(act);
// });

const apiKey = "826eda80";

const inputVal = document.querySelector("#input");
const searchBtn = document.querySelector("#search");
const cards = document.querySelector(".cards");

async function movie(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function act() {
  const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${inputVal.value}`;
  return movie(mov);
}

function show(actData) {
  cards.innerHTML = "";
  let myArr = actData.Search;
  console.log(myArr);
  myArr.forEach((element) => {
    cards.innerHTML += `
                <div class="card">
              <img src="${element.Poster}" alt="Movie Poster" />
              <p>Title: <span class="actors">${element.Title}</span></p>
              <p>
                Year: <span class="awards">${element.Year}</span>
              </p>
              <p>Type: <span class="director">${element.Type}</span></p>
              <p>IMDB: <span class="time">${element.imdbID}</span> min</p>
            </div>`;
  });
}

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchData = await act();
  show(searchData);
  console.error(err);
});
