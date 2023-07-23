import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="app">
        <button className="button" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </div>
    )
  );
}

export default Login;
