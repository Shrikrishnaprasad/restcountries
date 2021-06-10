fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
    for (let i in result) {
      var col = document.createElement("div");
      var card = document.createElement("div");
      var img = document.createElement("img");
      var cardbody = document.createElement("div");
      var cardtext = document.createElement("p");
      var text = document.createElement("small");

      col.setAttribute("class", "col-md-4");
      card.setAttribute("class", "card mb-4 shadow-sm");
      img.setAttribute("class", "bd-placeholder-img card-img-top img");
      cardbody.setAttribute("class", "card-body");
      cardtext.setAttribute("class", "card-text");
      text.setAttribute("class", "text-muted");

      img.src = result[i].flag;
      cardtext.innerHTML = result[i].name;
      text.innerHTML = "Capital : " + result[i].capital;

      cardbody.append(cardtext, text);
      card.append(img, cardbody);
      col.append(card);
      document.getElementById("row").append(col);

      //console.log(result[i].name);
    }
  })
  .catch((err) => {
    console.log(err);
  });

/* <div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
    <div class="card-body">
      <p class="card-text">This is a wider card </p>
      <small class="text-muted">capital</small>
    </div>
  </div>
</div> */
