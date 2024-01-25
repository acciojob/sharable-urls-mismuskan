// your code here
  document.getElementById("button").addEventListener("click", function() {
            // Get values from the input fields
            var nameValue = document.getElementById("name").value;
            var yearValue = document.getElementById("year").value;

            // Build the query string
            var queryString = `?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;

            // Update the h3 element with the new URL
            document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
        });