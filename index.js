const url = "https://api.chucknorris.io/jokes/random";
getUrl();
async function getUrl() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.value);
  const fact = document.querySelector("#fact");
  // const newFact = document.createElement("div");
  fact.textContent = `${data.value}`;
  // fact.append(newFact);
}

// button

const button = document.querySelector("#button");
button.addEventListener("click", getUrl);
