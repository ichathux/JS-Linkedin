function newFunction() {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = "<h1> Hi Welcome </h1>";

  return newArticle;
}

const main = document.querySelector("main");
main.append(newFunction());

const sector = document.querySelector("sector");
sector.append(newFunction());
