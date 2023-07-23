import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="app">
        <button className="button" onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    )
  );
}

export default Logout;
