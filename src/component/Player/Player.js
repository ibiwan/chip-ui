import { observer } from 'mobx-react'

const PlayerInner = ({ player, handlePlayerClicked }) => {
  const handleClick = () => {
    if (handlePlayerClicked) {
      handlePlayerClicked(player.id)
    }
  }
  return (
    <div className="card" onClick={handleClick}>
      <div className="card">
        {player &&
          <div>{player.username}</div>
        }
      </div>
    </div>
  )
}

export const Player = observer(PlayerInner)
