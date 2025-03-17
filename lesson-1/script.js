// Don't forget to start live server in index.html
// Learn more about live server here https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
function fetchJSON() {
  // The `fetch` function sends a request to retrieve data from the specified file or API.
  // Here, we're fetching JSON data from the local file `fake-users.json`.
  fetch('fake-users.json')
    .then(response => {
      // Log the raw response object to inspect it.
      // At this stage, the response is not yet parsed—it's a `Response` object.
      // A `Response` object represents the HTTP response, but it doesn't directly contain the JSON data.
      console.log("Raw Response:", response);
    });
}

// Invoke the `fetchJSON` function to execute the code.
// This works because the `app.js` file is included in our HTML via the `<script>` tag.
fetchJSON();