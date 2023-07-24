import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../components/Logout";
import Login from "../components/Login";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div>
      {user?.picture && <img src={user.picture} alt={user?.name} />}
      {user?.name && <h2>Hello {user.name}</h2>}
      {user?.nickname && <p>Nick Name: {user.nickname}</p>}
      <Logout />
    </div>
  ) : (
    <Login />
  );
};

export default Profile;
