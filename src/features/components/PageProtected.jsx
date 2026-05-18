import { useAtomValue } from "jotai";
import { isConnectedAtom } from "../../atoms/token.atom.js";
import { Navigate } from "react-router";

//in children is inside wrapped page (for example BookingConfirmation)
export function PageProtected({ children }) {
  const isConnected = useAtomValue(isConnectedAtom);
  //if not connected, go to login
  if (!isConnected) {
    //replace explanation -> BookingConfirmation is Protected Page, so  I am redirected to login and if for example I decide to not to login and press back, I will go to booking page. Without replace, it technically would go back to booking confirmation but since protected I will end up with login page again.
    //user might feel stuck which is not good UX
    return <Navigate to="/auth/login" replace />;
  }
  //if is connected return the BookingConfirmation page (as an example)
  return children;
}
