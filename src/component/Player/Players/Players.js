import { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Player } from 'component/Player/Player'

import { fetchPlayers } from 'state/actions/playerActions.js'
import { selectPlayers } from 'state/selectors/playerSelectors.js'

const PlayersInner = () => {

  console.log("players")

  useEffect(() => { fetchPlayers() }, [])
  const players = selectPlayers()

  if (!players || players.length === 0) {
    return <></>
  }

  console.log({ players })

  return <>
    <div className='card'>
      <div>Players</div>
      {players && players.map((player) =>
        <Player
          key={player.id}
          player={player} />
      )}
    </div>
  </>
}

export const Players = observer(PlayersInner)