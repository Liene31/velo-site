import { useAtomValue } from "jotai";
import { authUserAtom, isConnectedAtom } from "../../atoms/token.atom.js";
import { Navigate } from "react-router";

//these are props but deconstructed
//inside the children is wrapped page (for example BookingConfirmation)
export function PageProtected({ role, children }) {
  const isConnected = useAtomValue(isConnectedAtom);
  const userDetails = useAtomValue(authUserAtom);

  console.log(role);

  //if not connected, go to login
  if (!isConnected) {
    //replace explanation -> BookingConfirmation is Protected Page, so  I am redirected to login and if for example I decide to not to login and press back, I will go to booking page. Without replace, it technically would go back to booking confirmation but since protected I will end up with login page again.
    //user might feel stuck which is not good UX
    return <Navigate to="/auth/login" replace />;
  } else {
    //only if connected, get the user role
    //otherwise error because user is null
    const userRole = userDetails.role;

    if (role === "admin" && userRole !== "admin") {
      return <Navigate to="/" replace />;
    }

    //if is connected return the BookingConfirmation page (as an example)
    return children;
  }
}
