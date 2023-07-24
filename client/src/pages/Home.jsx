import { useAuth0 } from "@auth0/auth0-react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  return (
    <div className="app">
      <h1>Authentication with Auth0-React</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong!</p>}
      <Login />
      {isAuthenticated && (
        <Link to="/profile">
          <h2>Dashboard</h2>
        </Link>
      )}
      <Logout />
    </div>
  );
};

export default Home;
