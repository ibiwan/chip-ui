import { useState } from "react"

export const AddHouse = (props) => {
  const {addHouse} = props
  const [name, setName] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const submit = (event) => {
    if (event.key === 'Enter') {
      if(!name){return}
      console.log("submit create with name", { name })
      addHouse(name)
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
