document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results");

  fetch("http://localhost:8000/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const results = data.data;
      resultsContainer.innerHTML = `
          <ul>
            ${results
              .map((result) => `<li>${JSON.stringify(result)}</li>`)
              .join("")}
          </ul>
        `;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      resultsContainer.innerHTML = "An error occurred while fetching data.";
    });
});
