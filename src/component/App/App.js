import './App.css';

import { useLoginApi } from 'hook/useLoginApi';

import { Houses } from 'component/House/Houses';
import { Logout } from 'component/Player/Presentation';
import { Login } from 'component/Player/Login';
import { CurrentPlayer } from 'component/Player/Player/CurrentPlayer.js';
import { Players } from 'component/Player/Players/Players.js';

function App() {
  const { loggedIn, handleLoginForm, logout } = useLoginApi()

  return (
    <div className="App">
      <header className="App-header">
        {!loggedIn && <>
          <div>Login</div>
          <Login handleLoginForm={handleLoginForm} />
        </>
        }
        {loggedIn && <>
          <Logout logout={logout} />
          <CurrentPlayer />
          <Players />
          <Houses />
        </>
        }
      </header>
    </div>
  );
}

export default App;
