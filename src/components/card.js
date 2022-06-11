import axios from "axios";

const Card = (article) => {
  const card= document.createElement("div");
  const hl = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");
  
  card.classList.add("card");
  hl.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  hl.textContent = article.headline;
  img.src = article.authorPhoto;
  name.textContent = article.authorName;

  card.appendChild(hl);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(name);

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  card.addEventListener("click", () => {
    console.log(article.headline);
  })
  return card;
}

const cardAppender = (selector) => {
  const cardPlacer = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
    .then(res => {
      (Object.values(res.data.articles).forEach(elem => {
        elem.forEach(article => {
          cardPlacer.appendChild(Card(article));
        })
      }))
      // res.data.articles.forEach(elem =>
      //   console.log(elem));
    })
    .catch(err => {
      console.log(err);
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

}

export { Card, cardAppender }
