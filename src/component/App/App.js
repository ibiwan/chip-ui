import { observer } from 'mobx-react';
import { useEffect } from 'react';

import './App.css';

import { selectIsLoggedIn } from 'state/selectors/userSelectors';
import { reloadLogin } from 'state/actions/userActions';

import { Houses } from 'component/House';

import {
  Login,
  Logout,
  Players,
  CurrentUser,
} from 'component/Player';

function AppInner() {
  useEffect(() => { reloadLogin() }, [])
  const loggedIn = selectIsLoggedIn()

  return (
    <div className="App">
      <header className="App-header">
        {!loggedIn && <>
          <div>Login</div>
          <Login />
        </>
        }
        {loggedIn && <>
          <Logout />
          <CurrentUser />
          <Players />
          <Houses />
        </>
        }
      </header>
    </div>
  );
}

export default observer(AppInner);
