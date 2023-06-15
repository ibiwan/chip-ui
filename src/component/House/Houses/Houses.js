import { useEffect } from 'react'
import { observer } from 'mobx-react'

import { AddHouse, House } from "../Presentation"

import { useHouses } from './useHouses'
import { fetchHouses } from 'state/actions/houseActions.js'
import { selectHouses } from 'state/selectors/houseSelectors.js'

const HousesInner = (_props) => {
  const {
    addMode, setAddMode,
    handleCreateHouse, deleteHouse,
  } = useHouses()

  useEffect(() => { fetchHouses() }, [])
  const houses = selectHouses()

  if (!houses || houses.length === 0) { return <></> }

  return <>
    <div className="card">
      <div>Houses</div>
      {houses && houses.map((house) =>
        <House key={house.id} house={house} deleteHouse={deleteHouse} />
      )}
      {addMode
        ? <AddHouse handleCreateHouse={handleCreateHouse}></AddHouse>
        : <button onClick={() => setAddMode(true)}>add</button>}
    </div>
  </>
}

export const Houses = observer(HousesInner)
