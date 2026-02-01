function displayJoke(response) {
  new Typewriter("#joke-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 90,
    cursor: "",
  });
}

function jokeGenerator(event) {
  event.preventDefault();

  let jokeInput = document.querySelector("#joke-prompt");

  let apiKey = "7b8fb87030c4beo42b4207t4f1d8b27a";
  let context =
    "You are an expert on dad jokes and you are really funny. The jokes may be maximum 4 lines long and use basic HTML without showing the HTML. The joke has to include the word that is given in the joke input. If the joke is inappropriate go to the if statement and do not display the joke.";
  let prompt = `Tell me a joke about ${jokeInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatingJoke = document.querySelector("#joke-result");
  generatingJoke.classList.remove("hidden");
  generatingJoke.innerHTML = `<div class="blink">Generating a dad joke for you🤭</div>`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator");
jokeFormElement.addEventListener("submit", jokeGenerator);
