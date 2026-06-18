export function getErrorMessage(err) {
  if (err.response?.data?.message) {
    // server responded and provided a custom error message (e.g. 500 with "DB error")
    // this is a message I added in backend
    return err.response.data.message;
  }

  if (err.response) {
    // server responded, but no custom error message was provided
    console.log(`Request failed with status ${err.response.status}`);
    return "Something went wrong. Please try again later.";
  }

  if (err.request) {
    // request made but no response (server down / network issue)
    return "Server unavailable, please try again later";
  }
  // something else went wrong
  return "Unexpected error, please try again later";
}
