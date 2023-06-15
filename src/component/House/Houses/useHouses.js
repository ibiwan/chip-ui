import { useEffect, useState } from 'react'

import {
  useCreateHouse,
  useDeleteHouse,
} from 'hook/useHouseApi'
import { fetchHouses } from 'state/actions/houseActions.js'

export const useHouses = () => {
  const [addMode, setAddMode] = useState(false)

  const [createHouse, { loading: _addingHouse, data: _newHouseData }] = useCreateHouse()
  const [deleteHouse, { loading: _deletingHouse, data: _deletedHouseData }] = useDeleteHouse()

  const editHouseName = () => { }
  const invitePlayerToHouse = () => { }

  const handleCreateHouse = (name) => {
    setAddMode(false)

    createHouse(name)
  }

  useEffect(() => {
    fetchHouses()
  }, [])

  return {
    addMode, setAddMode,
    handleCreateHouse,
    deleteHouse,
    editHouseName,
    invitePlayerToHouse,
  }
}
