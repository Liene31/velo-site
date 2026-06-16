export function getErrorMessage(err) {
  if (err.response) {
    // server responded (e.g. 500 with "DB error")
    setError(err.response.data.message);
  } else if (err.request) {
    // request made but no response (server down / network issue)
    setError("Server unavailable, please try again later");
  } else {
    // something else went wrong
    setError("Unexpected error, please try again later");
  }
}
