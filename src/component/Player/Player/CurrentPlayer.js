import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { fetchCurrentUser } from 'state/actions/playerActions.js'
import { selectCurrentUser } from 'state/selectors/playerSelectors.js'


const CurrentPlayerInner = () => {
  console.log("current")

  useEffect(() => { fetchCurrentUser() }, [])

  const currentUser = selectCurrentUser()

  if(!currentUser){return <></>}

  console.log({ currentUser })

  return <div className="card">
    <div>Current Player</div>
    <div className="card">
      {currentUser &&
        <div>{currentUser.username}</div>
      }
    </div>
  </div>
}

export const CurrentPlayer = observer(CurrentPlayerInner)
