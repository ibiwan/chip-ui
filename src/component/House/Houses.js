import { Fragment, useEffect } from 'react'
import { observer } from 'mobx-react'

import { HouseListModes } from 'state/stores/houseStore'

import {
  selectHouseListMode,
  selectHouses,
} from 'state/selectors/houseSelectors'

import {
  startCreateHouse,
  fetchHouses,
} from 'state/actions/houseActions'

import { EditHouse } from 'component/House/EditHouse'
import { Players } from 'component/Player/Players'

import { AddHouse, House } from "."

const HousesInner = (_props) => {
  useEffect(() => { fetchHouses() }, [])

  const { mode, houseId: selectedHouseId } = selectHouseListMode() ?? {}

  const houses = selectHouses()

  const handlePlayerClickedForHouse = (houseId) => (playerId) => {
    console.log({ houseId, playerId })
  }

  if (!houses) { return <></> }

  return <>
    <div className="card">
      <div>Houses</div>
      {houses.map((house) => {
        const handlePlayerClicked = handlePlayerClickedForHouse(house.id)

        return (
          <Fragment key={house.id} >
            {mode === HouseListModes.EditName && selectedHouseId === house.id &&
              <EditHouse house={house} />
            }
            <House key={house.id} house={house} />
            {mode === HouseListModes.InvitePlayer && selectedHouseId === house.id &&
              <Players title={'Select an Invitee'} handlePlayerClicked={handlePlayerClicked} />
            }
          </Fragment>)
      })}
      {mode === HouseListModes.Create
        ? <AddHouse />
        : <button onClick={startCreateHouse}>add</button>}
    </div >
  </>
}

export const Houses = observer(HousesInner)
