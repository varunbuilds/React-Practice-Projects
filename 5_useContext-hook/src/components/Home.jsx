import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import NavBar from "./NavBar";

function Home() {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl py-4">Welcome Home {user}!</h1>
        <button
          type="button"
          className=" border border-gray-500 rounded-md px-4 py-2 m-4"
          onClick={() => setUser("John")}
        >
          Change Name
        </button>
      </div>
    </>
  );
}

export default Home;
