import { useContext, useEffect, useState } from "react"

import { LoginContext } from "context/login"

import { useCreateHouse, useDeleteHouse, useGetHouses } from "./useHouseApi"
import { AddHouse } from "./AddHouse"
import { House } from "./House"

export const Houses = (_props) => {
  const [addMode, setAddMode] = useState(false)
  const activateAddMode = () => { setAddMode(true) }

  const token = useContext(LoginContext)
  const [getHouses, { loading: loadingHouses, data: houseData }] = useGetHouses(token)
  const [createHouse, { loading: _addingHouse, data: _newHouseData }] = useCreateHouse(token)
  const [deleteHouse, {loading: _deletingHouse, data: _deletedHouseData}] = useDeleteHouse(token)

  useEffect(() => {
    getHouses()
  }, [getHouses])
  const houses = houseData?.getAllHouses

  if (loadingHouses) { return <></> }

  return <>
    <div className="card">
      <div>Houses</div>
      {houses && houses.map((house) =>
        <House key={house.id} house={house} deleteHouse={deleteHouse} />
      )}
      {addMode
        ? <AddHouse addHouse={createHouse}></AddHouse>
        : <button onClick={activateAddMode}>add</button>}
    </div>
  </>
}
