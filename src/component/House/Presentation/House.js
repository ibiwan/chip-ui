export const House = (props) => {
  const {
    house,
    editHouse,
    deleteHouse,
    invitePlayer,
  } = props;

  return <div className="card">
    <div className="card" key={house.id}>{house.name}</div>
    <button onClick={editHouse}>edit name</button>
    <button onClick={invitePlayer}>invite player</button>
    <button onClick={() => deleteHouse(house.id)}>delete</button>
  </div>
}
