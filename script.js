const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "Odln/3A0d77Khe9zE18EAw==5COXpARmLRIoJJij";

async function getquote() {
  try {
    const response = await fetch(api_url, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    if (data.length > 0) {
      quote.innerHTML = data[0].quote;
      author.innerHTML = data[0].author;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getquote();

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---by" +
      author.innerHTML
  );
}
