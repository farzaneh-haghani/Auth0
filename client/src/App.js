import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className='app'>
      <h1>Authentication with Auth0-React</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong!</p>}
      <Login />
      <Profile />
      <Logout />
    </div>
  );
}

export default App;