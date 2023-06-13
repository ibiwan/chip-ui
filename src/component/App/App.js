import { Logout } from 'component/Logout/Logout';
import './App.css';

import { Houses } from 'component/Houses/Houses';
import { Login } from 'component/Player/Login';
import { Player } from 'component/Player/Player';
import { LoginContext } from 'context/login';

import { useLogin } from 'hook/useLoginApi';

function App() {
  const { token, loggedIn, handleLoginForm, logout } = useLogin()

  return (
    <LoginContext.Provider value={token}>
      <div className="App">
        <header className="App-header">
          {!loggedIn && <>
            <div>Login</div>
            <Login login={handleLoginForm} />
          </>
          }
          {loggedIn && <>
            <Logout logout={logout} />
            <Player />
            <Houses />
          </>
          }
        </header>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
