import { useState } from "react"

export const AddHouse = (props) => {
  const { handleCreateHouse } = props
  const [name, setName] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const submit = (event) => {
    if (event.key === 'Enter') {
      if (!name) { return }
      handleCreateHouse(name)
    }
  }

  return (
    <input
      name="house name"
      value={name}
      onChange={handleNameChange}
      onKeyUp={submit} />
  )
}
