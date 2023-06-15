import { observer } from 'mobx-react'

const PlayerInner = ({player}) => {
  return <div className="card">
    <div className="card">
      {player &&
        <div>{player.username}</div>
      }
    </div>
  </div>
}

export const Player = observer(PlayerInner)
