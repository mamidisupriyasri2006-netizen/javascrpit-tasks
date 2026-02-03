async function searchMovie() {
  // Get the movie name from input box
  const movieInput = document.getElementById("movieInput");
  const movieName = movieInput.value.trim();

  // Get the result display section
  const resultDiv = document.getElementById("movieResult");

  // If user enters nothing
  if (movieName === "") {
    resultDiv.innerHTML = "<p>⚠️ Please enter a movie name.</p>";
    return;
  }

  // OMDb API Key (Replace with your own key)
  const apiKey = "YOUR_API_KEY";

  // Create API URL
  const apiURL = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    // Fetch movie data from OMDb API
    const response = await fetch(apiURL);
    const data = await response.json();

    // If movie is not found
    if (data.Response === "False") {
      resultDiv.innerHTML = "<p>❌ Movie not found. Try another name.</p>";
      return;
    }

    // If poster is not available
    const poster =
      data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/200x300?text=No+Poster";

    // Display movie details
    resultDiv.innerHTML = `
      <div class="movie-card">
        <img src="${poster}" alt="Movie Poster">

        <h2>${data.Title}</h2>

        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
      </div>
    `;
  } catch (error) {
    // Show error message if something goes wrong
    resultDiv.innerHTML =
      "<p>⚠️ Something went wrong. Please check your internet or API key.</p>";

    console.error("Error fetching movie data:", error);
  }
}
