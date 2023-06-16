import { selectHouseListMode } from 'state/selectors/houseSelectors';
import { HouseListModes } from 'state/stores/houseStore';

import {
  pickPlayerToInviteToHouse,
  startEditHouse,
  deleteHouse,
} from 'state/actions/houseActions';

import { EditHouse } from 'component/House/EditHouse';

export const House = (props) => {
  const { house } = props;

  const { mode, houseId: selectedHouseId } = selectHouseListMode() ?? {}

  return <div className="card">
    <div className="card" key={house.id}>{house.name}</div>
    {mode === HouseListModes.Edit && selectedHouseId === house.id &&
      <EditHouse house={house} />
    }
    {mode === HouseListModes.View &&
      <>
        <button onClick={() => startEditHouse(house.id)}>edit name</button>
        <button onClick={() => pickPlayerToInviteToHouse(house.id)}>invite player</button>
        <button onClick={() => deleteHouse(house)}>delete</button>
      </>
    }
  </div>
}
