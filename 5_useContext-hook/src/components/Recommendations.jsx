import NavBar from "./NavBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Recommendations() {
  const user = useContext(UserContext);

  return (
    <>
      <NavBar />
      <h1 className="text-3xl text-center py-4">{user}'s Recommendations.</h1>
    </>
  );
}

export default Recommendations;
