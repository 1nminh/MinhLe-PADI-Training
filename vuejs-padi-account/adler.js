// Define the access token, fields, and ad object ID
const accessToken =
  "EAAKxmSESpqIBOzqRwpbxdTgx9LKEVDZAb7jktew7lyU9ljB6f4PMf5pX0szQ8P5cD6XExu8Fm0FIq3x8PgrF6k36ZBvvl678UzVdq0ae6DDaEwh2Pf3EwqCSWyRgiZAAgmHIvIU4ryQxRtzPG1kObCy2ctxZBrR99VLwYbrjMpPeZApmPgHaMI62B1ZCWIUgNZ";
const fields = "impressions";
const adObjectId = "23852340176180309";

// Construct the URL with parameters
const url = `https://graph.facebook.com/v19.0/${adObjectId}/insights?fields=${fields}&access_token=${accessToken}`;

// Make a GET request using the Fetch API
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Handle the response data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error("There was a problem with the request:", error);
  });
