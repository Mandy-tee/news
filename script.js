fetch(
  "https://newsapi.org/v2/everything?q=food&apiKey=a3a29ff42c9041f6bc28ac3c54193640&pageSize=5"
)
  .then(function (response) {
    // console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
        // console.log(article);
        const articleDiv = document.createElement("div");
        const articleH1 = document.createElement("h1");
        articleH1.textContent = article.title;
        articleDiv.appendChild(articleH1);

        const articleP = document.createElement("p");
        articleP.textContent = article.content;
        articleDiv.appendChild(articleP);

        const articleImg = document.createElement("Img");
        articleImg.setAttribute("src", article.urlToImage);
        articleImg.setAttribute("alt", article.title);
        articleImg.classList.add("article-img");
        articleDiv.appendChild(articleImg);

        document.querySelector("#articles").appendChild(articleDiv);
    }
  })
