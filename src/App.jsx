import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { useEffect, useState } from "react";
import { authService } from "./services/auth.service";
import { useSetAtom } from "jotai";
import { authUserAtom } from "./atoms/token.atom";

const router = createBrowserRouter(routes);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const setAuthUserAtom = useSetAtom(authUserAtom);

  const savedToken = localStorage.getItem("token");

  //on page refresh, sends saved token in localStorage to verify if it's valid
  //if yes, sends to front-end user details
  //saves it to jotai
  //whenever the page refresh happens in any of page this will run in order to keep user log in if token is valid
  useEffect(() => {
    setIsLoading(true);
    authService
      .currentUser(savedToken)
      .then((data) => {
        setAuthUserAtom({
          name: data.name,
          email: data.userEmail,
          role: data.role,
          token: savedToken,
          userId: data.id,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // server responded (e.g. 500 with "DB error")
          console.log(error.response.data.message);
        } else if (error.request) {
          // request made but no response (server down / network issue)
          console.log("Server unavailable, please try again later");
        } else {
          // something else went wrong
          console.log("Unexpected error, please try again later");
        }
        setIsLoading(false);
      });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
