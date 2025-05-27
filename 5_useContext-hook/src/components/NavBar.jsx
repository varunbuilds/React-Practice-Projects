import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/dashboard">
          Dashboard
        </Link>
        <Link className="hover:underline" to="/recommendations">
          Recommendations
        </Link>
        <Link className="hover:underline" to="/podcasts">
          Podcasts
        </Link>
      </div>
    </>
  );
}

export default NavBar;
