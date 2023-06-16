import { observer } from 'mobx-react'
import { useEffect } from 'react'

import { selectPlayers } from 'state/selectors/playerSelectors'
import { fetchPlayers } from 'state/actions/playerActions'

import { Player } from './Player'

const PlayersInner = (props) => {
  const { handlePlayerClicked, title } = props
  useEffect(() => { fetchPlayers() }, [])
  const players = selectPlayers()

  if (!players || players.length === 0) {
    return <></>
  }

  return <>
    <div className='card'>
      <div>{title ?? 'Players'}</div>
      {players && players.map((player) =>
        <Player
          key={player.id}
          player={player}
          handlePlayerClicked={handlePlayerClicked}
        />
      )}
    </div>
  </>
}

export const Players = observer( PlayersInner)
