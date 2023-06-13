export const House = (props) => {
  const { house, editHouse: _editHouse, deleteHouse } = props;

  return <div className="card">
    <div className="card" key={house.id}>{house.name}</div>
    <button onClick={() => deleteHouse(house.id)}>delete</button>
  </div>
}
